import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => response,
    
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            const refreshToken = localStorage.getItem("refresh_token");

            if (refreshToken) {
                try {
                    const res = await axios.post("http://localhost:8000/refresh-token", {
                        refresh_token: refreshToken
                    });

                    if (res.status === 200) {
                        const newToken = res.data.access_token;
                        
                        localStorage.setItem("token", newToken);
                        
                        originalRequest.headers.Authorization = `Bearer ${newToken}`;
                        
                        return api(originalRequest);
                    }
                } catch (refreshError) {
                    console.error("Refresh token expired, logging out...");
                    localStorage.clear();
                    window.location.href = "/login";
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
);

export default api;


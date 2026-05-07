import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../api/axiosConfig";
import { useAuth } from '../../context/AuthContext';

import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', formData);

      const { access_token, username, role } = response.data;

      login(access_token, username, role);
      toast.success("Login Successful");

      if (role === "admin") {
        navigate("/admin-dashboard")
      } else {
        navigate('/');
      }

    } catch (err) {
      toast.error("Invalid Credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F1] p-6">
      <div className="flex w-full max-w-lg bg-white rounded-[35px] shadow-2xl p-8 md:p-12">
        <div className="w-full">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#181E4B]">Welcome Back</h1>
            <p className="text-gray-500 mt-2">Login to manage your trips.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#181E4B]">Email Address</label>
              <input 
                name='email'
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                type="email" 
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#FF9901] outline-none" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-semibold text-[#181E4B]">Password</label>
                <a href="#" className="text-xs text-[#DF6951]">Forgot?</a>
              </div>
              <input 
                name='password'
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                type="password" 
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#FF9901] outline-none" />
            </div>

            <button 
              type='submit'
              className="w-full bg-[#181E4B] py-4 rounded-xl text-white font-bold hover:bg-[#11163a] transition-all">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

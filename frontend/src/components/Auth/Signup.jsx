import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig'

import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/signup', formData);

      if (response.status === 201 || response.status === 200) {
        toast.success("Signup successful! Check your email for OTP");

        navigate('/verify-otp', { state: { email: formData.email } })
      }

    } catch (err) {
      const errorMsg = err.response?.data?.detail || "An error occured during signup";
      toast.error(errorMsg);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F1] p-6">
      <div className="flex w-full max-w-5xl bg-white rounded-[35px] shadow-2xl overflow-hidden">
        {/* Left Side: Image/Branding */}
        <div className="hidden lg:flex w-1/2 bg-[#FFF1DA] items-center justify-center relative">
          <div className="z-10 text-center p-10">
            <h2 className="text-4xl font-bold text-[#181E4B] mb-4">Start your journey <br/> with us.</h2>
            <p className="text-[#5E6282] font-medium">Discover the world's best destinations.</p>
          </div>
          <img src="/girl-img.svg" alt="Traveler" className="absolute bottom-0 w-3/4 opacity-40" />
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-16">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#181E4B]">Create Account</h1>
            <p className="text-gray-500 mt-2">Enter your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#181E4B]">Username</label>
              <input 
                name='username'
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
                type="text" 
                placeholder="johndoe" 
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#FF9901] outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#181E4B]">Email</label>
              <input 
                name='email'
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
                type="email" 
                placeholder="example@mail.com" 
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#FF9901] outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#181E4B]">Password</label>
              <input 
                name='password' 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                type="password" 
                placeholder="••••••••" 
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#FF9901] outline-none transition-all" />
            </div>

            <button 
              type='submit'
              className="w-full bg-[#FF9901] py-4 rounded-xl text-white font-bold shadow-lg shadow-orange-100 hover:bg-[#e68a00] transition-all mt-4">
              Sign Up
            </button>
          </form>
          <p className="text-center mt-8 text-gray-500 text-sm">Already have an account? <a href="/login" className="text-[#DF6951] font-bold">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

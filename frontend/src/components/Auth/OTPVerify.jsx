import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig';
import { toast } from 'react-toastify';

const OTPVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || '';
  
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalOtp = otp.join('');

    if (finalOtp.length !== 6) {
      return toast.error("Please enter complete OTP");
    }

    try {
      const res = await api.post('/verify-otp', {
        email,
        otp: finalOtp
      });

      if (res.data.message) {
        toast.success("Account verified successfully");
        navigate('/login');
      } else if (res.data.error) {
        toast.error(res.data.error);
      }

    } catch (err) {
      const errorMsg = err.response?.data?.detail || "Verification failed";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F1] p-6">
      <div className="w-full max-w-md bg-white rounded-[35px] shadow-2xl p-10 text-center">

        <div className="mb-8">
          <div className="w-20 h-20 bg-[#FFF1DA] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✉️</span>
          </div>
          <h1 className="text-2xl font-bold text-[#181E4B]">Verify Email</h1>
          <p className="text-gray-500 mt-2">We've sent a code to your email.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          <input 
            type="email" 
            value={email}
            disabled 
            className="w-full text-center bg-transparent font-medium text-gray-400"
          />

          <div className="flex justify-center gap-3">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-12 h-14 text-center text-xl font-bold rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF9901] outline-none"
              />
            ))}
          </div>

          <button 
            type="submit"
            className="w-full bg-[#FF9901] py-4 rounded-xl text-white font-bold shadow-lg">
            Verify Now
          </button>
        </form>
        
        <p className="mt-8 text-sm text-gray-500">
          Didn't receive code? 
          <button 
            className="text-[#DF6951] font-bold ml-1"
            onClick={() => toast.info("Resend logic not implemented yet")}
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTPVerify;


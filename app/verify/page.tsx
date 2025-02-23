'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Verify() {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const verifyOTP = () => {
    const storedOtp = localStorage.getItem('otp');
    if (otp === storedOtp) {
      localStorage.setItem('authenticated', 'true');
      router.push('/dashboard');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-xl font-semibold text-center mb-4 text-black">
          Enter OTP
        </h1>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={verifyOTP}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}

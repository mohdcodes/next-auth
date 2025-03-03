'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const sendOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('otp', otp);
    localStorage.setItem('phone', phone);
    alert(`Your OTP is: ${otp}`);
    router.push('/verify');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-xl font-semibold text-center mb-4 text-black">
          Enter Phone Number
        </h1>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={sendOTP}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}

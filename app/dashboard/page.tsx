'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');

    if (!isAuthenticated) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-xl font-semibold text-green-600">
          Welcome to Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          🚀You have successfully logged in.🚀
        </p>
      </div>
    </div>
  );
}

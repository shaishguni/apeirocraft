"use server"
import React from 'react';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';

const DashboardPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
      redirect('/login');
  }
  return (
 
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Under Construction</h1>
        <div className="my-6">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-gray-600 mb-4">We're working on building something awesome for you.</p>
        <p className="text-sm text-gray-500">Please check back soon!</p>
        
        <div className="mt-6">
         
            <LogoutLink>Logout</LogoutLink>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
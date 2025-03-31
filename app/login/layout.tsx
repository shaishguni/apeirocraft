"use server"
import React from 'react'
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';


export default async function  LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isAuthenticated } = getKindeServerSession();
    const authenticated = await isAuthenticated();
      
      if (authenticated) {
          redirect('/dashboard');
      }
    return <div className='w-full h-full'>
        {children}
    </div>
}
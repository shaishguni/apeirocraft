import React from 'react'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default  async function DashbaordLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
const { isAuthenticated } = getKindeServerSession();
const authenticated = await isAuthenticated();

if (!authenticated) {
    redirect('/api/auth/login');
}
    return (
    <div className='w-full h-full'>
        {children}
    </div>
    )
}
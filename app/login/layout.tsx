import React from 'react'


export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='w-full h-full'>
        {children}
    </div>
}
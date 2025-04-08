"use client";

import { Button } from '@/components/ui/button';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import login from "@/public/login.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

function showTermsAlert() {
  alert("Welcome to Apeirocraft! By using our service, you agree to our Terms of Service which outline your rights and responsibilities. These include respecting our platform policies, intellectual property rights, and community guidelines. Additionally, our Privacy Policy explains how we collect, use, and protect your personal information. We're committed to transparency and data security. For more details, please visit our full Terms of Service and Privacy Policy pages.");
}

const LoginPage = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div 
      className="flex h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left side - Image */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 relative rounded-tr-3xl rounded-br-3xl overflow-hidden shadow-2xl"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        <Image 
          src={login} 
          alt="Login image" 
          fill 
          style={{
            objectFit: "cover",
            transform: isHovering ? 'scale(1.05)' : 'scale(1)'
          }}
          priority
          className="transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <motion.div 
          className="absolute inset-0 flex flex-col justify-center px-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <motion.h1 
            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            Welcome to Apeirocraft
          </motion.h1>
          <p className="text-blue-50 text-xl leading-relaxed max-w-md drop-shadow-lg">
            We're excited to see you again! Sign in to continue creating, exploring, and bringing your amazing ideas to life.
          </p>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-400 rounded-full mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>
      </motion.div>

      {/* Right side - Login form */}
      <motion.div 
        className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.1 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="max-w-md w-full space-y-10 backdrop-blur-sm bg-white/50 p-8 md:p-10 rounded-2xl shadow-lg border border-white/20">
          <motion.div 
            className="text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Sign in</h2>
            <p className="mt-3 text-gray-600">
              Don't have an account yet?{' '}
              <RegisterLink className="font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
                Create one →
              </RegisterLink>
            </p>
          </motion.div>

          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <LoginLink postLoginRedirectURL="/dashboard" className="w-full block">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 rounded-xl py-6 font-medium text-white transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2  dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Continue with Kinde Auth</span>
                </Button>
              </motion.div>
            </LoginLink>
            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300/70"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/50 text-gray-500 backdrop-blur-sm rounded-full">Or continue with</span>
              </div>
            </div>
            
            <LoginLink postLoginRedirectURL="/dashboard" className="w-full block">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="w-full rounded-xl py-6 bg-gradient-to-r from-primary to-primary/90 font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Sign in with email
                </Button>
              </motion.div>
            </LoginLink>
          </motion.div>
          
          <motion.div 
            className="text-center text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-gray-500">
              By signing in, you agree to our{' '}
              <Link href="#" className="font-medium text-primary hover:underline transition-colors duration-200" onClick={showTermsAlert}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="font-medium text-primary hover:underline transition-colors duration-200" onClick={showTermsAlert}>
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2,  Sparkles } from "lucide-react";
// import {Share2,Copy,ArrowRight} from "lucide-react"
import { motion } from "framer-motion";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import confetti from 'canvas-confetti';
// import Link from "next/link";

export default function LoginFlexPage() {
  // const username = "@shaishguni"; 
  // Fetch dynamically from user session in prod
  const [username, setUsername] = useState("@guest");

  useEffect(() => {
    async function fetchUsername() {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error("Error fetching username:", error);
        setUsername("@guest");
      }
    }
    fetchUsername();
  }, []);

  useEffect(() => {
    // Launch confetti on component mount
    const confettiSettings = {
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#818cf8', '#c084fc', '#e879f9', '#ffffff']
    };
    
    confetti(confettiSettings);
  }, []);

  // const handleCopyLink = () => {
  //   navigator.clipboard.writeText(`apeirocraft.com/profile/${username.replace('@', '')}`);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };
  
  // In production, implement actual share functionality
  // const handleShare = (platform: string) => {
  //   // In production, implement actual share functionality
  //   console.log(`Sharing to ${platform}`);
  // };
  
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-600/20 via-purple-600/30 to-pink-600/20 text-foreground overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
            style={{
              width: Math.random() * 400 + 50,
              height: Math.random() * 400 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              scale: [1, 1 + Math.random() * 0.2],
              opacity: [0.5 + Math.random() * 0.5, 0.3 + Math.random() * 0.3],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 8 + 6,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 1.5, ease: "easeOut" },
              scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            <CheckCircle2 className="mx-auto h-20 w-20 text-primary drop-shadow-lg" />
          </motion.div>
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">You're In!</h1>
          <p className="text-xl text-white/90">
            Welcome to <span className="font-bold text-white">Apeirocraft</span>
            <span className="text-base ml-1 bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-500 font-bold">BETA</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="text-3xl font-bold text-white">{username}</div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="bg-gradient-to-r from-amber-300 to-amber-500 rounded-full p-1">
                <Sparkles className="h-4 w-4 text-black" />
              </div>
            </motion.div>
          </div>
          <div className="mt-2 text-sm font-medium text-indigo-300">#CraftedWithApeiro</div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-4"
          />
          
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8"
            >
            <LogoutLink>
              <Button
              className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-full px-6 py-2 shadow-lg group hover:shadow-xl transition-all duration-300"
              >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <span className="relative flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </span>
              </Button>
            </LogoutLink>
            </motion.div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          <Button 
            onClick={() => handleShare('story')}
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:opacity-90 flex items-center gap-2 rounded-full px-5 py-2 shadow-lg"
          >
            <Share2 className="w-4 h-4" /> Share on Story
          </Button>
          <Button 
            onClick={handleCopyLink} 
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90 flex items-center gap-2 rounded-full px-5 py-2 shadow-lg"
          >
            {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />} 
            {copied ? "Link Copied!" : "Copy Link"}
          </Button>
          <Button 
            onClick={() => handleShare('twitter')}
            variant="default" 
            className="bg-gradient-to-r from-pink-500 to-pink-700 hover:opacity-90 flex items-center gap-2 rounded-full px-5 py-2 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg> Tweet
          </Button>
        
          <Link href="/dashboard/explore" className="text-white/70 text-sm hover:text-white flex items-center justify-center gap-1">
            Explore Dashboard <ArrowRight className="h-3 w-3" />
          </Link>
        </motion.div> */}
      </div>
    </div>
  );
}
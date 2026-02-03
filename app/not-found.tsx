"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Animated Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Number with Animation */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-[#333333] to-[#e4b725] leading-none">
              404
            </div>
            
            {/* Construction Icon Overlay */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-8 md:-right-8"
            >
              <AlertTriangle className="w-16 h-16 md:w-24 md:h-24 text-[#e4b725]" />
            </motion.div>
          </motion.div>

          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333]">
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-[#333333]/60 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or might have been moved. Let's get you back to building excellence.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4 py-6"
          >
            <div className="w-3 h-3 bg-[#e4b725] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-[#333333] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-[#e4b725] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-[#333333] hover:bg-[#e4b725] text-white px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Go to Homepage
              </Button>
            </Link>
            
            <Link href="/solutions">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#e4b725] text-[#e4b725] hover:bg-[#e4b725]/10 px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Browse Solutions
              </Button>
            </Link>
          </motion.div>

          {/* Brand Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 border-t border-[#333333]/20 max-w-md mx-auto"
          >
            <p className="text-[#333333]/60 text-sm">
              <span className="font-semibold text-[#e4b725]">CONCREED SOLUTIONS</span><br />
              Building the future with quality construction chemicals
            </p>
          </motion.div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e4b725]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#333333]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#e4b725]/15 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
}
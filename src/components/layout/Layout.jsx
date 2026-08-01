import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#14212B] font-body relative selection:bg-[#E4C892] selection:text-[#14212B]">
      {/* Blueprint Grid Overlay background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none z-0" />
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow pt-16 sm:pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

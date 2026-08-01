import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md space-y-6 border border-[#14212B] bg-[#FAF7F0] p-8 shadow-md relative">
        <div className="font-mono text-xs font-semibold text-[#B8863E] uppercase tracking-widest flex items-center justify-center gap-2">
          <Terminal className="w-4 h-4 text-[#33546C]" />
          <span>HTTP 404 // RESOURCE NOT FOUND</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-[#14212B]">
          Route Out of Scope
        </h1>

        <p className="font-body text-xs sm:text-sm text-[#4C5C66] leading-relaxed">
          The requested system pathway does not exist or has been relocated.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#E4C892]" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

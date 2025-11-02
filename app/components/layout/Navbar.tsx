'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#divisions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-2xl shadow-[0_10px_40px_-5px_hsl(0_0%_0%/0.8)] border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-28">
            
        {/* Premium Monogram Logo - ULTRA LUXURY */}
            <a href="#home" className="group relative flex items-center space-x-4">
              {/* Ornamental Corner Borders - Pure Gold */}
              <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute top-0 left-0 w-10 h-10 border-t-[1.5px] border-l-[1.5px] border-[#d4af37]"></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-t-[1.5px] border-r-[1.5px] border-[#d4af37]"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[1.5px] border-l-[1.5px] border-[#d4af37]"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[1.5px] border-r-[1.5px] border-[#d4af37]"></div>
              </div>

              {/* Luxury Monogram Circle */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-[2px] border-[#d4af37] flex items-center justify-center relative overflow-hidden group-hover:border-[#ffd700] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  {/* Premium Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Inner Glow Circle */}
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Elegant Monogram */}
                  <div className="relative z-10">
                    <span className="text-[28px] font-serif font-bold bg-gradient-to-br from-[#f4e5a3] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent group-hover:from-[#ffd700] group-hover:via-[#d4af37] group-hover:to-[#a37d24] transition-all duration-500">
                      D
                    </span>
                  </div>
                </div>
                
                {/* Outer Ring Glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md bg-[#d4af37]/20"></div>
              </div>

              {/* Luxury Brand Name */}
              <div className="flex flex-col">
                <span className="text-[26px] font-serif tracking-[0.25em] bg-gradient-to-r from-[#f4e5a3] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent group-hover:from-[#ffd700] group-hover:via-[#d4af37] group-hover:to-[#f4e5a3] transition-all duration-700">
                  DrB & Co
                </span>
                <span className="text-[9px] tracking-[0.35em] text-[#d4af37]/70 uppercase font-light mt-1 group-hover:text-[#d4af37] transition-colors duration-500">
                  Est. 2020
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative px-6 py-3 overflow-hidden"
                >
                  <span className="relative z-10 text-sm font-light tracking-[0.15em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                  
                  {/* Elegant underline */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[hsl(42_78%_55%)] to-transparent group-hover:w-full transition-all duration-500"></div>
                  
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(42_78%_55%/0)] to-[hsl(42_78%_55%/0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              ))}

              {/* Premium CTA */}
              <div className="ml-6 relative group">
                {/* Outer glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(42_78%_55%)] via-[hsl(48_92%_68%)] to-[hsl(42_78%_55%)] rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700"></div>
                
                <a
                  href="#divisions"
                  className="relative flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[hsl(42_78%_55%)] to-[hsl(38_85%_42%)] rounded-full overflow-hidden group-hover:shadow-[0_0_40px_hsl(42_78%_55%/0.5)] transition-all duration-500"
                >
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <span className="relative z-10 text-sm font-semibold tracking-[0.1em] uppercase text-black">
                    Discover
                  </span>
                  <ChevronRight className="relative z-10 w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center text-[hsl(42_78%_55%)] hover:text-[hsl(48_92%_68%)] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Premium Slide-out */}
        <div
          className={`lg:hidden fixed top-28 left-0 w-full transition-all duration-700 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-2xl border-b border-white/5">
            <div className="max-w-[1400px] mx-auto px-8 py-8 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group block px-6 py-4 text-base font-light tracking-[0.15em] uppercase text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-[hsl(42_78%_55%/0.05)] hover:to-transparent border-l-2 border-transparent hover:border-[hsl(42_78%_55%)] transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4">
                <a
                  href="#divisions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-8 py-4 bg-gradient-to-r from-[hsl(42_78%_55%)] to-[hsl(38_85%_42%)] rounded-full text-sm font-semibold tracking-[0.1em] uppercase text-black hover:shadow-[0_0_40px_hsl(42_78%_55%/0.5)] transition-all duration-500"
                >
                  <span>Discover</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-28"></div>
    </>
  );
}
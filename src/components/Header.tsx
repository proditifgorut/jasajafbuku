import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-gray-900">Konsultasi Dosen</h1>
              <p className="text-xs text-gray-600">Publikasi Buku</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Layanan</button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Keuntungan</button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Proses</button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Paket</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">Konsultasi Gratis</button>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Layanan</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Keuntungan</button>
            <button onClick={() => scrollToSection('process')} className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Proses</button>
            <button onClick={() => scrollToSection('packages')} className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Paket</button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">Konsultasi Gratis</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

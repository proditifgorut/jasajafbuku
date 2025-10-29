import React, { useState } from 'react';
import { Check, Star, Sparkles, Crown } from 'lucide-react';

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const packages = [
    {
      name: 'Paket Basic',
      icon: Star,
      price: 'Mulai 5 Juta',
      description: 'Cocok untuk dosen yang sudah memiliki draft naskah',
      features: [
        'Konsultasi strategi publikasi',
        'Review naskah (1x)',
        'Editing & proofreading',
        'Bantuan pengurusan ISBN',
        'Koordinasi dengan penerbit',
        'Sertifikat penerbitan'
      ],
      popular: false,
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Paket Professional',
      icon: Sparkles,
      price: 'Mulai 10 Juta',
      description: 'Paling populer untuk dosen yang membutuhkan bimbingan lengkap',
      features: [
        'Semua fitur Paket Basic',
        'Pendampingan penulisan intensif',
        'Review naskah (unlimited)',
        'Workshop eksklusif',
        'Desain cover profesional',
        'Layout buku berkualitas',
        'Verifikasi Juknis Kemendikbud',
        'Dukungan pasca-terbit (3 bulan)'
      ],
      popular: true,
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'Paket Premium',
      icon: Crown,
      price: 'Mulai 15 Juta',
      description: 'Untuk dosen yang menginginkan hasil maksimal dan percepatan',
      features: [
        'Semua fitur Paket Professional',
        'Konsultasi one-on-one dengan ahli',
        'Fast track publishing',
        'Multiple book planning',
        'Indexing assistance',
        'Marketing & promotion support',
        'Lifetime consultation access',
        'Priority support 24/7'
      ],
      popular: false,
      gradient: 'from-purple-600 to-pink-700'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Paket Terbaik</span> Untuk Anda
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai paket layanan yang dapat disesuaikan dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${pkg.popular ? 'border-blue-600 scale-105 md:scale-110' : 'border-gray-100'} ${selectedPackage === index ? 'ring-4 ring-blue-300' : ''}`}
              onClick={() => setSelectedPackage(index)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.gradient} p-3 mb-6`}>
                <pkg.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-xl' : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'}`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Paket Custom</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Butuh layanan yang lebih spesifik? Kami juga menyediakan paket custom yang dapat disesuaikan dengan kebutuhan unik Anda
          </p>
          <button onClick={scrollToContact} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all font-semibold">
            Konsultasi Paket Custom
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;

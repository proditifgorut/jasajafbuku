import React from 'react';
import { TrendingUp, Clock, Shield, Star, Zap, HeartHandshake } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Percepat Kenaikan Jabatan',
      description: 'Strategi publikasi yang terbukti efektif mempercepat proses kenaikan jabatan fungsional Anda',
      stat: '3-6 bulan'
    },
    {
      icon: Shield,
      title: 'Jaminan Sesuai Juknis',
      description: 'Semua buku dipastikan memenuhi persyaratan Juknis Kemendikbud untuk perhitungan angka kredit',
      stat: '100%'
    },
    {
      icon: Star,
      title: 'Kualitas Terjamin',
      description: 'Buku berkualitas tinggi dengan standar akademik yang diakui oleh institusi pendidikan',
      stat: 'A Grade'
    },
    {
      icon: Clock,
      title: 'Hemat Waktu & Tenaga',
      description: 'Tim ahli yang mendampingi Anda dari awal hingga akhir, menghemat waktu dan tenaga Anda',
      stat: '80%'
    },
    {
      icon: Zap,
      title: 'Proses Cepat & Efisien',
      description: 'Sistem kerja yang terstruktur dan efisien memastikan publikasi buku berjalan lancar',
      stat: 'Fast Track'
    },
    {
      icon: HeartHandshake,
      title: 'Dukungan Berkelanjutan',
      description: 'Konsultasi dan dukungan yang berkelanjutan bahkan setelah buku terbit',
      stat: '24/7'
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Layanan Kami?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Keuntungan yang Anda dapatkan dengan menggunakan layanan konsultasi kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {benefit.stat}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Sudah Dipercaya Oleh 200+ Dosen</h3>
          <p className="text-lg md:text-xl opacity-90 mb-6">Dari berbagai universitas ternama di Indonesia</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">95%</div>
              <div className="text-sm md:text-base opacity-80">Tingkat Keberhasilan</div>
            </div>
            <div className="hidden sm:block w-px bg-white opacity-30"></div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-sm md:text-base opacity-80">Buku Diterbitkan</div>
            </div>
            <div className="hidden sm:block w-px bg-white opacity-30"></div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">4.9/5</div>
              <div className="text-sm md:text-base opacity-80">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

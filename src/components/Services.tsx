import React from 'react';
import { BookOpen, FileText, Award, Users, Target, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Konsultasi Strategi Publikasi',
      description: 'Analisis mendalam terhadap kebutuhan angka kredit dan rekomendasi strategi publikasi buku yang paling efektif untuk kenaikan jabatan Anda.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Pendampingan Penulisan',
      description: 'Bimbingan intensif dalam proses penulisan buku, mulai dari outline, struktur konten, hingga editing dan proofreading profesional.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Bantuan Penerbitan',
      description: 'Fasilitasi proses penerbitan buku dengan penerbit bereputasi, termasuk pengurusan ISBN, desain cover, dan layout buku.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Verifikasi Juknis',
      description: 'Memastikan buku yang diterbitkan memenuhi semua persyaratan Juknis Kemendikbud untuk perhitungan angka kredit jabatan fungsional.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Workshop & Pelatihan',
      description: 'Sesi workshop eksklusif tentang teknik penulisan akademik, strategi publikasi, dan tips sukses kenaikan jabatan fungsional.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: CheckCircle2,
      title: 'Review & Quality Control',
      description: 'Pengecekan kualitas menyeluruh terhadap naskah buku untuk memastikan standar akademik dan kelayakan untuk proses kenaikan jabatan.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Komprehensif</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan layanan end-to-end untuk membantu Anda mencapai kenaikan jabatan fungsional melalui publikasi buku berkualitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

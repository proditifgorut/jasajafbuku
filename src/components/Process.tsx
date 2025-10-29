import React from 'react';
import { MessageSquare, FileSearch, BookOpen, CheckCircle, Award, Sparkles } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Konsultasi Awal',
      description: 'Diskusi mendalam tentang kebutuhan angka kredit, target jabatan, dan timeline kenaikan jabatan Anda',
      duration: '1-2 hari'
    },
    {
      icon: FileSearch,
      title: 'Analisis & Perencanaan',
      description: 'Analisis kebutuhan publikasi dan penyusunan strategi publikasi buku yang optimal untuk Anda',
      duration: '3-5 hari'
    },
    {
      icon: BookOpen,
      title: 'Pendampingan Penulisan',
      description: 'Bimbingan intensif dalam proses penulisan, review berkala, dan feedback konstruktif',
      duration: '1-3 bulan'
    },
    {
      icon: CheckCircle,
      title: 'Review & Finalisasi',
      description: 'Pengecekan kualitas menyeluruh, editing profesional, dan persiapan naskah final',
      duration: '2-3 minggu'
    },
    {
      icon: Sparkles,
      title: 'Proses Penerbitan',
      description: 'Pengurusan ISBN, layout, desain cover, dan koordinasi dengan penerbit bereputasi',
      duration: '1-2 bulan'
    },
    {
      icon: Award,
      title: 'Buku Terbit & Sertifikat',
      description: 'Buku terbit resmi, mendapatkan sertifikat, dan siap digunakan untuk kenaikan jabatan',
      duration: '1-2 minggu'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Kerja Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tahapan sistematis dan terstruktur untuk memastikan kesuksesan publikasi buku Anda
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-700 opacity-20"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold">
            <CheckCircle className="w-5 h-5" />
            <span>Estimasi Total Waktu: 3-6 Bulan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

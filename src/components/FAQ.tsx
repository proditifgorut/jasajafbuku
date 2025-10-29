import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk menerbitkan buku?',
      answer: 'Waktu penerbitan buku berkisar antara 3-6 bulan, tergantung pada kompleksitas naskah dan kesiapan Anda. Kami juga menyediakan opsi fast track untuk yang membutuhkan penerbitan lebih cepat.'
    },
    {
      question: 'Apakah buku yang diterbitkan dijamin sesuai Juknis Kemendikbud?',
      answer: 'Ya, semua buku yang kami dampingi dipastikan 100% sesuai dengan Juknis Kemendikbud terbaru. Kami melakukan verifikasi menyeluruh sebelum buku diterbitkan untuk memastikan kelayakannya untuk perhitungan angka kredit.'
    },
    {
      question: 'Bagaimana jika saya belum memiliki ide atau draft naskah?',
      answer: 'Tidak masalah! Kami akan membantu Anda dari tahap brainstorming, pembuatan outline, hingga penulisan lengkap. Tim kami akan membimbing Anda step by step dalam proses penulisan.'
    },
    {
      question: 'Berapa angka kredit yang bisa didapat dari publikasi buku?',
      answer: 'Angka kredit bervariasi tergantung jenis buku dan jabatan Anda. Untuk buku referensi biasanya 20-40 angka kredit, sedangkan buku ajar 5-20 angka kredit. Kami akan membantu mengoptimalkan strategi publikasi untuk memaksimalkan angka kredit Anda.'
    },
    {
      question: 'Apakah ada jaminan uang kembali jika buku tidak terbit?',
      answer: 'Kami memberikan garansi penerbitan. Jika karena kesalahan dari pihak kami buku tidak dapat terbit, kami akan mengembalikan 100% biaya layanan. Namun, hingga saat ini tingkat keberhasilan kami mencapai 95%.'
    },
    {
      question: 'Apakah saya bisa konsultasi terlebih dahulu sebelum mengambil paket?',
      answer: 'Tentu saja! Kami menyediakan konsultasi gratis untuk membantu Anda memahami kebutuhan dan memilih paket yang paling sesuai. Silakan hubungi kami melalui formulir kontak di bawah.'
    },
    {
      question: 'Penerbit mana yang akan digunakan?',
      answer: 'Kami bekerja sama dengan berbagai penerbit bereputasi dan terakreditasi di Indonesia. Pemilihan penerbit akan disesuaikan dengan kebutuhan dan bidang keilmuan Anda untuk memastikan buku Anda terbit di penerbit yang tepat.'
    },
    {
      question: 'Apakah ada dukungan setelah buku terbit?',
      answer: 'Ya, kami memberikan dukungan pasca-terbit termasuk konsultasi untuk penggunaan buku dalam proses kenaikan jabatan, bantuan dokumentasi, dan support untuk publikasi buku selanjutnya.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pertanyaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">yang Sering Diajukan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Masih ada pertanyaan?</h3>
          <p className="text-gray-600 mb-6">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu menjawab semua pertanyaan Anda
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

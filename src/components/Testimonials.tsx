import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Ahmad Hidayat, S.Kom., M.Kom.',
      position: 'Lektor Kepala - Universitas Negeri Jakarta',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Luar biasa! Dalam 5 bulan saya berhasil menerbitkan 2 buku dan naik jabatan menjadi Lektor Kepala. Tim konsultan sangat profesional dan membantu dari awal hingga akhir. Highly recommended!'
    },
    {
      name: 'Prof. Dr. Siti Nurhaliza, M.Pd.',
      position: 'Guru Besar - Universitas Pendidikan Indonesia',
      image: 'https://i.pravatar.cc/150?img=32',
      rating: 5,
      text: 'Layanan yang sangat membantu! Pendampingan yang diberikan sangat detail dan sesuai dengan Juknis. Buku saya terbit tepat waktu dan berkualitas tinggi. Terima kasih atas supportnya!'
    },
    {
      name: 'Dr. Budi Santoso, S.T., M.T.',
      position: 'Lektor - Institut Teknologi Bandung',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'Proses yang tadinya saya pikir rumit menjadi sangat mudah dengan bantuan tim konsultan. Mereka sangat responsif dan selalu siap membantu. Sangat puas dengan hasilnya!'
    },
    {
      name: 'Dr. Rina Wijayanti, S.S., M.Hum.',
      position: 'Asisten Ahli - Universitas Gadjah Mada',
      image: 'https://i.pravatar.cc/150?img=44',
      rating: 5,
      text: 'Sebagai dosen muda, saya sangat terbantu dengan strategi publikasi yang diberikan. Sekarang saya lebih percaya diri untuk naik jabatan. Terima kasih atas bimbingannya yang luar biasa!'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Mereka?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Testimoni dari dosen-dosen yang telah berhasil naik jabatan dengan bantuan kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Quote className="w-10 h-10 text-blue-600 mb-4 opacity-50" />
              
              <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

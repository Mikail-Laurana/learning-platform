import React from 'react';
import HeroSection from '../components/HeroSection';

const AllClass = () => {
  const allClasses = [
    {
      title: 'Android Developer',
      description: 'Belajar membuat aplikasi Android dengan Java/Kotlin',
      progress: 100,
      color: 'bg-green-500'
    },
    {
      title: 'Front End Website',
      description: 'Kuasai HTML, CSS, JavaScript, dan React',
      progress: 85,
      color: 'bg-blue-500'
    },
    {
      title: 'Back End Developer',
      description: 'Server-side development dengan Node.js',
      progress: 70,
      color: 'bg-purple-500'
    },
    {
      title: 'Machine Learning',
      description: 'AI dan ML dengan Python dan TensorFlow',
      progress: 60,
      color: 'bg-red-500'
    }
  ];

  return (
    <>
      <HeroSection 
        title="All Classes"
        description="Akses semua kelas pembelajaran programming dan teknologi dalam satu tempat. Mulai journey Anda menjadi developer profesional"
        backgroundImage="/images/Header.png"
      />
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Semua Kelas Tersedia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allClasses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{course.title}</h4>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllClass;
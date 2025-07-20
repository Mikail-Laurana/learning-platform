import React from 'react';
import HeroSection from '../components/HeroSection';
import ProgressCards from '../components/ProgressCards';


const MachineLearning = () => {
  const mlCards = [
    { title: 'Python for ML', progress: 100, type: 'ml' },
    { title: 'Data Preprocessing', progress: 80, type: 'ml' },
    { title: 'Model Training', progress: 65, type: 'ml' },
    { title: 'Model Deployment', progress: 40, type: 'ml' }
  ];

  return (
    <>
      <HeroSection 
        title="Machine Learning"
        description="Jelajahi dunia AI dan machine learning dengan Python, TensorFlow, dan implementasi model untuk solving real-world problems"
        backgroundImage="/images/Header.png"
      />
      <ProgressCards cards={mlCards} badgeTitle="Machine Learning" />
    </>
  );
};

export default MachineLearning;
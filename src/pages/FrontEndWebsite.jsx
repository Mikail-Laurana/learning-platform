import React from 'react';
import HeroSection from '../components/HeroSection';
import ProgressCards from '../components/ProgressCards';

const FrontEndWebsite = () => {
  const frontEndCards = [
    { title: 'Setup HTML & CSS', progress: 100, type: 'frontend' },
    { title: 'JavaScript Fundamentals', progress: 85, type: 'frontend' },
    { title: 'React.js Basics', progress: 70, type: 'frontend' },
    { title: 'Responsive Design', progress: 95, type: 'frontend' }
  ];

  return (
    <>
      <HeroSection 
        title="Front End Website"
        description="Pelajari cara membuat website yang menarik dan interaktif menggunakan HTML, CSS, JavaScript, dan framework modern seperti React"
        backgroundImage="/images/Header.png"
      />
      <ProgressCards cards={frontEndCards} badgeTitle="Frontend" />
    </>
  );
};

export default FrontEndWebsite;
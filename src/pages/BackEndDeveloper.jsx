import React from 'react';
import HeroSection from '../components/HeroSection';
import ProgressCards from '../components/ProgressCards';

const BackEndDeveloper = () => {
  const backEndCards = [
    { title: 'Node.js Setup', progress: 100, type: 'backend' },
    { title: 'Database Design', progress: 90, type: 'backend' },
    { title: 'API Development', progress: 75, type: 'backend' },
    { title: 'Server Deployment', progress: 60, type: 'backend' }
  ];

  return (
    <>
      <HeroSection 
        title="Back End Developer"
        description="Kuasai pengembangan server-side dengan Node.js, database management, API development, dan deployment ke cloud"
        backgroundImage="/images/Header.png"
      />
      <ProgressCards cards={backEndCards} badgeTitle="Backend" />
    </>
  );
};

export default BackEndDeveloper;
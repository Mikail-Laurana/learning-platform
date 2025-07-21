import React from 'react';
import { CheckCircle, Code, Database, Globe, Brain, MonitorSmartphone, Server, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgressCards = ({ cards, badgeTitle = 'Kotlin' }) => {
  const defaultCards = [
    { title: 'Instalasi Kotlin', progress: 0, type: 'kotlin', link: '/kotlin/instalasi' },
    { title: 'Inisialisasi Data', progress: 0, type: 'data', link: '/kotlin/data' },
    { title: 'Pemrograman Dasar', progress: 0, type: 'kotlin', link: '/kotlin/dasar' },
    { title: 'Coming Soon', progress: 0, type: 'kotlin', link: '#' }
  ];

  const progressCards = cards || defaultCards;

  const getIcon = (type) => {
    switch (type) {
      case 'kotlin':
        return <Code className="w-5 h-5 mr-2" />;
      case 'data':
        return <Database className="w-5 h-5 mr-2" />;
      case 'frontend':
        return <MonitorSmartphone className="w-5 h-5 mr-2" />;
      case 'backend':
        return <Server className="w-5 h-5 mr-2" />;
      case 'ml':
        return <Bot className="w-5 h-5 mr-2" />;
      default:
        return <Globe className="w-5 h-5 mr-2" />;
    }
  };

  const getBadgeIcon = (title) => {
    switch (title) {
      case 'Frontend':
        return <MonitorSmartphone className="w-4 h-4 mr-1" />;
      case 'Backend':
        return <Server className="w-4 h-4 mr-1" />;
      case 'Machine Learning':
        return <Bot className="w-4 h-4 mr-1" />;
      default:
        return <Code className="w-4 h-4 mr-1" />;
    }
  };

  // Cek apakah semua card (selain "Coming Soon") memiliki progress 100
  const isComplete = progressCards
    .filter((card) => card.title !== 'Coming Soon')
    .every((card) => card.progress === 100);

  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      {/* Badge */}
      <div className="flex items-center mb-4 text-lg font-semibold">
        {getBadgeIcon(badgeTitle)}
        {badgeTitle}
        {isComplete && (
          <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
        )}
      </div>

      {/* Progress Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
        {progressCards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center">
              {getIcon(card.type)}
              <span className="text-sm font-medium">{card.title}</span>
            </div>

            {card.progress === 100 && card.title !== 'Coming Soon' && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProgressCards;

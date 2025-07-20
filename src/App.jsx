import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavigationTabs from './components/NavigationTabs';
import AndroidDeveloper from './pages/AndroidDeveloper';
import FrontEndWebsite from './pages/FrontEndWebsite';
import BackEndDeveloper from './pages/BackEndDeveloper';
import MachineLearning from './pages/MachineLearning';
import AllClass from './pages/AllClass';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* <Header /> -> Dihapus */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <NavigationTabs />
            <Routes>
              <Route path="/" element={<Navigate to="/android-developer" replace />} />
              <Route path="/android-developer" element={<AndroidDeveloper />} />
              <Route path="/front-end-website" element={<FrontEndWebsite />} />
              <Route path="/back-end-developer" element={<BackEndDeveloper />} />
              <Route path="/machine-learning" element={<MachineLearning />} />
              <Route path="/all-class" element={<AllClass />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

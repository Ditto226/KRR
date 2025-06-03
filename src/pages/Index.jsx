
import { useState } from 'react';
import Header from '../components/Header';
import LandingHero from '../components/LandingHero';
import FitnessQuiz from '../components/FitnessQuiz';
import FitnessPlan from '../components/FitnessPlan';

const Index = () => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'quiz', 'plan'
  const [userData, setUserData] = useState(null);

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleQuizComplete = (data) => {
    setUserData(data);
    setCurrentView('plan');
  };

  const handleRestart = () => {
    setUserData(null);
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {currentView === 'landing' && (
        <LandingHero onStartQuiz={handleStartQuiz} />
      )}
      
      {currentView === 'quiz' && (
        <FitnessQuiz onComplete={handleQuizComplete} />
      )}
      
      {currentView === 'plan' && userData && (
        <FitnessPlan userData={userData} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default Index;

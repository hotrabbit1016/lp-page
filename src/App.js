import React from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import FounderSection from './components/FounderSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FounderSection />
      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyStay } from './components/WhyStay';
import { Heritage } from './components/Heritage';
import { Accommodation } from './components/Accommodation';
import { Experiences } from './components/Experiences';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Enquiry } from './components/Enquiry';
import { Footer } from './components/Footer';
import { PackagePromo } from './components/PackagePromo';
import { Packages } from './components/Packages';
import { TrustIndicators } from './components/TrustIndicators';
import { Location } from './components/Location';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'packages':
        return (
          <>
            <Packages />
            <Enquiry />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <WhyStay />
            <PackagePromo onNavigate={setCurrentView} />
            <Accommodation />
            <Experiences />
            <Heritage />
            <Gallery />
            <Reviews />
            <Location />
            <TrustIndicators />
            <Enquiry />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 antialiased selection:bg-norfolk-clay selection:text-white">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
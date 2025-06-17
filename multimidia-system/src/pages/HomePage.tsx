import React from 'react';
import Header from '../components/common/Header';
import HeroBanner from '../components/home/HeroBanner';
import QuickLinks from '../components/home/QuickLinks';
import ContactSection from '../components/common/ContactSection';
import Footer from '../components/common/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <QuickLinks />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
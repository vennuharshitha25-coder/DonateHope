import React from 'react';
import { Heart, ShieldCheck, Users } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="pt-20 min-h-screen bg-linear-to-b from-brand-light/30 to-white flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Donate Food. <span className="text-brand-primary">Spread Hope.</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Connect with registered NGOs, orphanages, and charities to easily eliminate food waste and support families in need.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button onClick={() => onNavigate('login')} className="w-full sm:w-auto bg-green-600 text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-brand-dark transform hover:-translate-y-0.5 transition-all">
            Get Started Safely
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-16 pb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-3">
          <div className="p-3 bg-brand-light rounded-full text-brand-primary"><Users className="w-6 h-6"/></div>
          <h3 className="font-bold text-lg">1200+ Active Donors</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-3">
          <div className="p-3 bg-brand-light rounded-full text-brand-primary"><ShieldCheck className="w-6 h-6"/></div>
          <h3 className="font-bold text-lg">450+ Verified Partners</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-3">
          <div className="p-3 bg-brand-light rounded-full text-brand-primary"><Heart className="w-6 h-6"/></div>
          <h3 className="font-bold text-lg">15K+ Meals Shared</h3>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
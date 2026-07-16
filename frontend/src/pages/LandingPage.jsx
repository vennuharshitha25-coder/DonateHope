import React from "react";
import { Heart, ShieldCheck, Users } from "lucide-react";
import bgImage from "../assets/bgggg.jpeg";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="relative pt-15 min-h-screen  flex flex-col items-center justify-center px-4">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      Green Overlay
      <div className="absolute inset-0 bg-green-50/70"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-4xl text-center space-y-6">

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Donate Food.{" "}
          <span className="text-green-600">
            Spread Hope.
          </span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Connect with registered NGOs, orphanages, and charities to easily
          eliminate food waste and support families in need.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button
            onClick={() => onNavigate("login")}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Safely
          </button>
        </div>

      </div>

    </div>
  );
};

export default LandingPage;
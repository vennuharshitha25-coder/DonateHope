import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Heart, LogOut } from 'lucide-react';

const Navbar = ({ onMenuClick, onNavigate }) => {
  const { token, logout, user } = useContext(AuthContext);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm fixed top-0 w-full z-50 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <button onClick={onMenuClick} className="md:hidden p-1 mr-2 text-gray-600">☰</button>
        <Heart className="text-brand-primary w-6 h-6 fill-brand-primary" />
        <span className="text-xl font-bold text-brand-dark tracking-wide">DonateHope</span>
      </div>
      
      <div className="flex items-center space-x-4">
        {token ? (
          <>
            <span className="text-sm bg-brand-light text-brand-dark px-3 py-1.5 rounded-full font-medium hidden sm:inline-block">
              Hi, {user?.name || 'User'}
            </span>
            <button onClick={logout} className="text-gray-500 hover:text-red-500 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </>
        ) : (
          <button
            onClick={() => onNavigate("login")}
            className="bg-brand-primary text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-brand-dark transition-all text-sm"
            >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
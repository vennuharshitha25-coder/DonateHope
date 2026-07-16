import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = ({ onNavigate }) => {
  console.log("onNavigate:", onNavigate);
  const { setToken, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      if (data.user.role === "admin") {
        onNavigate("admin-dash");
        } else if (data.user.role === "organization") {
          onNavigate("org-dash");
        } else {
          onNavigate("donor-dash");
        }
      } else {
        alert(data.message);
      }
          } catch (err) {
            console.error(err);
          }
    };

      return (
        <div className="min-h-screen pt-24 bg-gray-50 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-gray-900">Welcome Back</h2>
              <p className="text-sm text-gray-500 mt-1">Sign in to change lives today</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm" placeholder="Enter email" onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
                    placeholder="Enter password"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold shadow-md hover:bg-brand-dark transition-all text-sm">
                Sign In
              </button>
            </form>
            <div className="text-center text-xs text-gray-500 space-y-2">
              <p>Don't have an account? Create one below:</p>
              <div className="flex justify-center gap-4 font-bold text-brand-primary">
                <button onClick={() => onNavigate('reg-donor')}>As Donor</button>
                <span className="text-gray-300">|</span>
                <button onClick={() => onNavigate('reg-org')}>As Organization</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Login;
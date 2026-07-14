import React from "react";

const ForgotPassword = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3 mb-4"
        />

        <button
        
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Send OTP
        </button>

        <button
          onClick={() => onNavigate("login")}
          className="w-full mt-3 text-blue-600"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
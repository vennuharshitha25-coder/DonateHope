import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterDonor = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', gender:'',occupation:'',role: 'donor' });
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5001/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert('Registration successful! Please login.');
      onNavigate('login');
    } else {
      const d = await res.json();
      alert(d.message);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100 space-y-6">
        <h2 className="text-2xl font-extrabold text-green-600 text-center">Create Donor Account</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input type="text" placeholder="Full Name" required className="w-full px-4 py-2.5 rounded-xl border" onChange={e=>setFormData({...formData, name: e.target.value})}/>
            <input type="email" placeholder="Email" required className="w-full px-4 py-2.5 rounded-xl border" onChange={e=>setFormData({...formData, email: e.target.value})}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-primary"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />
              <input
                type="tel"
                placeholder="Alternate Number"
                className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-primary"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Altphone: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-primary "
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Gender */}
          <select
  value={formData.gender}
  className={`w-full px-4 py-3 rounded-xl border border-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-gray-700 ${
    formData.gender === "" ? "text-gray-400" : "text-gray-900"
  }`}
  onChange={(e) =>
    setFormData({
      ...formData,
      gender: e.target.value,
    })
  }
>
  <option value="" disabled>
    Gender (Optional)
  </option>
  <option value="Female" className="text-gray-900">
    Female
  </option>
  <option value="Male" className="text-gray-900">
    Male
  </option>
  <option value="Other" className="text-gray-900">
    Other
  </option>
</select>

          {/* Occupation */}
          <input
            type="text"
            placeholder="Occupation"
            required
            className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-primary"
            onChange={(e) =>
              setFormData({
                ...formData,
                occupation: e.target.value,
              })
            }
          />
        </div>
            <input
              type="text"
              placeholder="Full Address"
              required
              className="w-full px-4 py-2.5 sm:col-span-2 rounded-xl border "
              onChange={e => setFormData({ ...formData, address: e.target.value })}
            />
          <input
            type="text"
            placeholder="City"
            required
            className="w-full sm:col-span-2 px-4 py-2.5 rounded-xl border  focus:outline-none focus:ring-2 focus:ring-brand-primary"
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />
          <div className="flex items-start gap-2 text-sm">
  <input
    type="checkbox"
    required
    className="mt-1 accent-green-600"
  />

  <label className="text-gray-600">
    I agree to all the{" "}
    <button
      type="button"
      onClick={() => setShowTerms(true)}
      className="text-green-600 font-semibold underline hover:text-green-700"
    >
      Terms & Conditions
    </button>{" "}
    of DonateHope.
  </label>
</div>
            <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold">Register</button>
          </form>
          {showTerms && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        DonateHope - Terms & Conditions
      </h2>

      <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm">

        <li>I confirm that the food I donate is fresh, hygienic, and safe for human consumption.</li>

        <li>I will not donate spoiled, expired, contaminated, or partially consumed food.</li>

        <li>I understand that DonateHope has the right to reject any food donation that is unsafe.</li>

        <li>I confirm that all information provided during registration and donation is accurate.</li>

        <li>I agree not to misuse the platform or perform any fraudulent activities.</li>

        <li>I understand that fake donations may result in permanent account suspension.</li>

        <li>I agree that uploaded food photographs may be used only for food verification and donation transparency.</li>

        <li>I understand that donation acceptance depends on the availability of the selected organization.</li>

        <li>I agree to receive notifications regarding my donations through Email or WhatsApp.</li>

        <li>I understand that DonateHope is only a platform connecting donors and verified organizations.</li>

        <li>I agree to follow all food safety and hygiene guidelines while donating.</li>

        <li>I accept the Privacy Policy and Terms & Conditions of DonateHope.</li>

      </ul>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={() => setShowTerms(false)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Close
        </button>
      </div>

    </div>
  </div>
)}
      </div>
      
    </div>
  );
};

export default RegisterDonor;
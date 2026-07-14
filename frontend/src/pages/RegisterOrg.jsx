import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const RegisterOrg = ({ onNavigate }) => {

  const [photos, setPhotos] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showOtherOrgType, setShowOtherOrgType] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '',Altphone:' ',role: 'organization', orgType: 'NGO', contactPerson: '', designation: '' ,description: ' '});
  const validateForm = () => {
  const newErrors = {};

  if (!formData.orgType.trim()) newErrors.orgType = "Organization Type is required";
  if (!formData.name.trim()) newErrors.name = "Organization Name is required";
  if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact Person Name is required";
  if (!formData.designation.trim()) newErrors.designation = "Position/Designation is required";
  if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
  if (!formData.Altphone.trim()) newErrors.Altphone = "Alternate Number is required";
  if (!formData.email.trim()) newErrors.email = "Email is required";
  if (!formData.password.trim()) newErrors.password = "Password is required";
  if (!formData.address?.trim()) newErrors.address = "Address is required";
  if (!formData.city?.trim()) newErrors.city = "City is required";
  if (!formData.description.trim()) newErrors.description = "Description is required";

  if (photos.length < 3)
    newErrors.photos = "Upload at least 3 organization photos.";

  if (
    formData.phone &&
    formData.Altphone &&
    formData.phone === formData.Altphone
  ) {
    newErrors.Altphone =
      "Alternate Number cannot be the same as Phone Number.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
  const handleRegister = async (e) => {
  e.preventDefault();
  if (!validateForm()) {
  return;
}
  if (photos.length < 3) {
    alert("Please upload at least 3 organization photos.");
    return;
 }
 if (formData.phone === formData.Altphone) {
  alert("Phone Number and Alternate Number cannot be the same.");
  return;
}
  const data = new FormData();

  // Add all text fields
  Object.keys(formData).forEach((key) => {
    data.append(key, formData[key]);
  });

  // Add all uploaded photos
  photos.forEach((photo) => {
    data.append("photos", photo);
  });

  try {
    const res = await fetch("http://localhost:5001/api/auth/register", {
      method: "POST",
      body: data, // Don't use JSON.stringify
    });

    const result = await res.json();

    if (res.ok) {
      alert("Organization Registration submitted successfully!");
      onNavigate("login");
    } else {
      alert(result.message || "Registration failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

  return (
    <div className="min-h-screen pt-24 bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-lg w-full border border-gray-100 space-y-6">
        <h2 className="text-2xl font-extrabold text-green-600 text-center">Organization Registration</h2>
        <form onSubmit={handleRegister} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {!showOtherOrgType ? (
            <select
              className="w-full px-4 py-2.5 rounded-xl border "
              value={formData.orgType}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "Others") {
                  setShowOtherOrgType(true);
                  setFormData({ ...formData, orgType: "" });
                } else {
                  setFormData({ ...formData, orgType: value });
                }
              }}
            >
              <option value="NGO">NGO</option>
              <option value="Orphanage">Orphanage</option>
              <option value="Old Age Home">Old Age Home</option>
              <option value="Charity">Charity</option>
              <option value="Others">Others</option>
            </select>
          ) : (
            <input
              type="text"
              placeholder="Enter Organization Type"
              required
              className="w-full px-4 py-2.5 rounded-xl border"
              value={formData.orgType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  orgType: e.target.value,
                })
              }
            />
          )}
          <input type="text" placeholder="Organization Name" required className="w-full px-4 py-2.5 rounded-xl border" onChange={e=>setFormData({...formData, name: e.target.value})}/>
          <input type="text" placeholder="Contact Person Name" required className="w-full px-4 py-2.5 rounded-xl border" onChange={e=>setFormData({...formData, contactPerson: e.target.value})}/>
          <input type="text" placeholder="Position/Designation" required className="w-full px-4 py-2.5 rounded-xl border" onChange={e=>setFormData({...formData, designation: e.target.value})}/>
          <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-2.5 rounded-xl border " onChange={e=>setFormData({...formData, phone: e.target.value})}/>
          <input type="tel" placeholder="Alternate Number" required className="w-full px-4 py-2.5 rounded-xl border"
            onChange={e=>setFormData({...formData, Altphone: e.target.value})}/>
          <input type="email" placeholder="Email" required className="w-full px-4 py-2.5 sm:col-span-2 rounded-xl border "
          onChange={e=>setFormData({...formData, email: e.target.value})}/>
          <div className="w-full sm:col-span-2">
            <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="w-full px-4 py-2.5 pr-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-primary "
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
        <div className="sm:col-span-2">
  

  <textarea
    rows={5}
    placeholder="Tell us about your organization.."
    className="w-full px-4 py-3 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
    onChange={(e) =>
      setFormData({
        ...formData,
        description: e.target.value,
      })
    }
  ></textarea>
</div>
        <div className="sm:col-span-2">
  <label className="block text-lg font-semibold text-gray-700 mb-3">
    Organization Photos
  </label>

  <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-brand-primary rounded-2xl cursor-pointer bg-green-50 hover:bg-green-100 transition duration-300 ">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14 text-brand-primary mb-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16V4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 8l4-4 4 4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20h16"
      />
    </svg>

    <p className="text-lg font-semibold text-brand-dark">
      Click to Upload Photos
    </p>

    <p className="text-sm text-gray-500 mt-1">
      PNG, JPG, JPEG (Minimum 3 Photos)
    </p>

    <input
      type="file"
      multiple
      required
      accept="image/*"
      className="hidden"
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => {
        const files = Array.from(e.target.files);

        if (!files.length) return;

        setPhotos((prev) => [...prev, ...files]);

        const newPreviews = files.map((file) => ({
          id: Date.now() + Math.random(),
          file,
          url: URL.createObjectURL(file),
        }));

        setPreviewImages((prev) => [...prev, ...newPreviews]);
      }}
    />
    </label>
    </div>
    {previewImages.length > 0 && (
    <div className="sm:col-span-2 mt-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {previewImages.map((image, index) => (

                  <div
          key={image.id}
          className="relative rounded-xl overflow-hidden shadow-md border bg-white"
        >

          <button
            type="button"
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm hover:bg-red-600"
            onClick={() => {

              setPreviewImages((prev) =>
                prev.filter((img) => img.id !== image.id)
              );

              setPhotos((prev) =>
                prev.filter((file) => file !== image.file)
              );

            }}
          >
            ✕
          </button>

          <img
            src={image.url}
            alt=""
            className="h-20 w-full object-cover"
          />

          <div className="p-2">
            <p className="text-xs truncate">
              {image.file.name}
            </p>
          </div>

        </div>

        ))}

      </div>

      </div>
      )}
        <button className="w-full sm:col-span-2 bg-brand-primary text-white py-3 rounded-xl font-bold">Register Org</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterOrg;
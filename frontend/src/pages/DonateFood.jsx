import { useState } from "react";

const DonateFood = () => {
  const [formData, setFormData] = useState({
    foodName: "",
    category: "",
    quantity: "",
    preparationTime: "",
    expiryTime: "",
    deliveryMethod: "",
    occasion: "",
    organization: "",
    instructions: "",
    photos: [],
  });

  const handlePhotos = (e) => {
    const files = Array.from(e.target.files);

    if (files.length < 3) {
      alert("Please upload at least 3 photos.");
      return;
    }

    setFormData({
      ...formData,
      photos: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Food Donation Submitted Successfully!");
  };

  return (
    <div className="space-y-6">

      {/* Heading */}

      <div className="bg-linear-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white shadow">

        <h1 className="text-3xl font-bold">
          Donate Food
        </h1>

        <p className="mt-2 text-green-100">
          Share your surplus food safely with people in need.
        </p>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow border p-8 space-y-6"
      >

        {/* Food Name */}

        <input
          type="text"
          placeholder="Food Name"
          required
          className="w-full px-4 py-3 rounded-xl border"
          onChange={(e) =>
            setFormData({
              ...formData,
              foodName: e.target.value,
            })
          }
        />

        {/* Category + Quantity */}

        <div className="grid md:grid-cols-2 gap-5">

          <select
            required
            className="w-full px-4 py-3 rounded-xl border"
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          >
            <option value="">Food Category</option>
            <option>Rice</option>
            <option>Curry</option>
            <option>Snacks</option>
            <option>Sweets</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            placeholder="Quantity / Servings"
            required
            className="w-full px-4 py-3 rounded-xl border"
            onChange={(e) =>
              setFormData({
                ...formData,
                quantity: e.target.value,
              })
            }
          />

        </div>

        {/* Preparation + Expiry */}

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="datetime-local"
            required
            className="w-full px-4 py-3 rounded-xl border"
            onChange={(e) =>
              setFormData({
                ...formData,
                preparationTime: e.target.value,
              })
            }
          />

          <input
            type="datetime-local"
            required
            className="w-full px-4 py-3 rounded-xl border"
            onChange={(e) =>
              setFormData({
                ...formData,
                expiryTime: e.target.value,
              })
            }
          />

        </div>

        {/* Delivery */}

        <select
          required
          className="w-full px-4 py-3 rounded-xl border"
          onChange={(e) =>
            setFormData({
              ...formData,
              deliveryMethod: e.target.value,
            })
          }
        >
          <option value="">Delivery Method</option>
          <option>Self Delivery</option>
          <option>Pickup Service</option>
        </select>

        {/* Occasion */}

        <select
          className="w-full px-4 py-3 rounded-xl border"
          onChange={(e) =>
            setFormData({
              ...formData,
              occasion: e.target.value,
            })
          }
        >
          <option value="">Occasion (Optional)</option>
          <option>Birthday</option>
          <option>Wedding</option>
          <option>Anniversary</option>
          <option>Festival</option>
          <option>Corporate Event</option>
          <option>Memorial</option>
          <option>Other</option>
        </select>

        {/* Organization */}

        <select
          required
          className="w-full px-4 py-3 rounded-xl border"
          onChange={(e) =>
            setFormData({
              ...formData,
              organization: e.target.value,
            })
          }
        >
          <option value="">Choose Organization</option>

          <option>Any Organization (Highest Priority)</option>

          <option>Hope Orphanage</option>

          <option>Care Foundation</option>

          <option>Happy Old Age Home</option>

        </select>

        {/* Instructions */}

        <textarea
          rows={4}
          placeholder="Special Instructions (Optional)"
          className="w-full px-4 py-3 rounded-xl border resize-none"
          onChange={(e) =>
            setFormData({
              ...formData,
              instructions: e.target.value,
            })
          }
        />

        {/* Photos */}

        <div>

          <label className="font-semibold">

            Upload Food Photos

          </label>

          <input

            type="file"

            multiple

            required

            accept="image/*"

            className="mt-3"

            onChange={handlePhotos}

          />

          <p className="text-sm text-gray-500 mt-2">

            Upload minimum 3 food photos.

          </p>

        </div>

        {/* Button */}

        <button

          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"

        >

          Submit Food Donation

        </button>

      </form>

    </div>
  );
};

export default DonateFood;
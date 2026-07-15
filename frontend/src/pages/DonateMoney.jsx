import { useState } from "react";

const DonateMoney = ({ setPage }) => {
  const [formData, setFormData] = useState({
    amount: "",
    organization: "",
    purpose: "Support Both",
    paymentMethod: "",
    message: "",
  });

  const handleSubmit = (e) => {
      e.preventDefault();

      localStorage.setItem(
        "donationAmount",
        formData.amount
      );

      setPage("payment");
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-linear-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white shadow">

        <h1 className="text-3xl font-bold">
          Donate Money
        </h1>

        <p className="mt-2 text-green-100">
          Your contribution helps feed people and support verified organizations.
        </p>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow border p-8 space-y-6"
      >

        {/* Amount */}

        <div>

          <label className="font-semibold block mb-2">

            Donation Amount (₹)

          </label>

          <input
            type="number"
            required
            min="1"
            placeholder="Enter amount"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: e.target.value,
              })
            }
          />

        </div>

        {/* Organization */}

        <div>

          <label className="font-semibold block mb-2">

            Donate To

          </label>

          <select
            required
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                organization: e.target.value,
              })
            }
          >

            <option value="">
              Select Organization
            </option>

            <option>
              Any Organization (Highest Priority)
            </option>

            <option>
              Hope Orphanage
            </option>

            <option>
              Care Foundation
            </option>

            <option>
              Happy Old Age Home
            </option>

          </select>

        </div>

        {/* Purpose */}

        <div>

          <label className="font-semibold block mb-3">

            Purpose of Donation

          </label>

          <div className="space-y-3">

            <label className="flex items-center gap-3">

              <input
                type="radio"
                name="purpose"
                value="Organizations"
                checked={formData.purpose === "Organizations"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    purpose: e.target.value,
                  })
                }
              />

              Support Organizations

            </label>

            <label className="flex items-center gap-3">

              <input
                type="radio"
                name="purpose"
                value="Platform"
                checked={formData.purpose === "Platform"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    purpose: e.target.value,
                  })
                }
              />

              Support Platform

            </label>

            <label className="flex items-center gap-3">

              <input
                type="radio"
                name="purpose"
                value="Support Both"
                checked={formData.purpose === "Support Both"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    purpose: e.target.value,
                  })
                }
              />

              Support Both (Recommended)

            </label>

          </div>

        </div>

        {/* Payment */}

        <div>

          <label className="font-semibold block mb-2">

            Payment Method

          </label>

          <select
            required
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                paymentMethod: e.target.value,
              })
            }
          >

            {/* <option value="">
              Select Payment Method
            </option> */}

            <option>UPI</option>

            {/* <option>Credit Card</option>

            <option>Debit Card</option>

            <option>Net Banking</option>

            <option>Wallet</option> */}

          </select>

        </div>

        {/* Message */}

        <div>

          <label className="font-semibold block mb-2">

            Message (Optional)

          </label>

          <textarea
            rows="4"
            placeholder="Write a message..."
            className="w-full px-4 py-3 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />

        </div>

        {/* Summary */}

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">

          <h3 className="font-bold text-lg mb-3">

            Donation Summary

          </h3>

          <div className="space-y-2 text-gray-700">

            <p>
              Amount:
              <span className="font-semibold ml-2">
                ₹ {formData.amount || "0"}
              </span>
            </p>

            <p>
              Purpose:
              <span className="font-semibold ml-2">
                {formData.purpose}
              </span>
            </p>

            <p>
              Organization:
              <span className="font-semibold ml-2">
                {formData.organization || "-"}
              </span>
            </p>

          </div>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition">
          Proceed to Payment
        </button>

      </form>

    </div>
  );
};

export default DonateMoney;
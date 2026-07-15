import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  AlertCircle,
  Search,
} from "lucide-react";

const HelpSupport = () => {
  const [complaint, setComplaint] = useState({
    subject: "",
    description: "",
  });
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
  await fetch(
    "http://localhost:5001/api/complaints",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
  name: user.name,
  email: user.email,
  complaint: complaint.subject + "\n\n" + complaint.description,
}),
    }
  );

  alert(
    "Complaint Submitted Successfully."
  );

  setComplaint({
  subject: "",
  description: "",
});
};

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="bg-linear-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white shadow">

        <h1 className="text-3xl font-bold flex items-center gap-3">
          <HelpCircle size={34} />
          Help & Support
        </h1>

        <p className="mt-2 text-green-100">
          We're here to help you with donations, payments, and any issues.
        </p>

      </div>

      {/* Quick Actions */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow border p-6 text-center">

          <Search className="mx-auto text-green-600" size={40} />

          <h2 className="font-bold text-xl mt-4">
            Track Donation
          </h2>

          <p className="text-gray-500 mt-2">
            Track your food or money donation status.
          </p>

          <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700">
            Track
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow border p-6 text-center">

          <MessageCircle className="mx-auto text-green-600" size={40} />

          <h2 className="font-bold text-xl mt-4">
            Live Chat
          </h2>

          <p className="text-gray-500 mt-2">
            Chat with our support team.
          </p>

          <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700">
            Start Chat
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow border p-6 text-center">

          <Phone className="mx-auto text-green-600" size={40} />

          <h2 className="font-bold text-xl mt-4">
            Call Support
          </h2>

          <p className="text-gray-500 mt-2">
            Available 24 × 7
          </p>

          <h3 className="text-green-700 font-bold mt-4">
            +91 98765 43210
          </h3>

        </div>

      </div>

      {/* FAQs */}

      <div className="bg-white rounded-3xl shadow border p-8">

        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="font-semibold">
              How can I donate food?
            </h3>
            <p className="text-gray-500">
              Go to Donate Food, fill in the details, upload photos, and submit your donation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How do I track my donation?
            </h3>
            <p className="text-gray-500">
              Click the Track Donation button to view the current status.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can I schedule a donation?
            </h3>
            <p className="text-gray-500">
              Yes. While donating food, choose "Donate on a Specific Date."
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              What happens if an organization rejects my donation?
            </h3>
            <p className="text-gray-500">
              You can choose another organization or donate to the Highest Priority Organization.
            </p>
          </div>

        </div>

      </div>

      {/* Complaint Form */}

      <div className="bg-white rounded-3xl shadow border p-8">

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">

          <AlertCircle className="text-red-500" />

          Raise a Complaint

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            required
            placeholder="Complaint Subject"
            value={complaint.subject}
            onChange={(e) =>
              setComplaint({
                ...complaint,
                subject: e.target.value,
              })
            }
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="5"
            required
            placeholder="Describe your issue..."
            value={complaint.description}
            onChange={(e) =>
              setComplaint({
                ...complaint,
                description: e.target.value,
              })
            }
            className="w-full px-4 py-3 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold">

            Submit Complaint

          </button>

        </form>

      </div>

      {/* Contact */}

      <div className="bg-white rounded-3xl shadow border p-8">

        <h2 className="text-2xl font-bold mb-6">
          Contact Us
        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <Mail className="text-green-600" />

            <span>
              support@donatehope.org
            </span>

          </div>

          <div className="flex items-center gap-3">

            <Phone className="text-green-600" />

            <span>
              +91 98765 43210
            </span>

          </div>

          <div className="flex items-center gap-3">

            <MessageCircle className="text-green-600" />

            <span>
              WhatsApp Support: +91 98765 43210
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HelpSupport;
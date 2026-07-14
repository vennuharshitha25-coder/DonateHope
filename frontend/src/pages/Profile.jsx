import { useContext } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Edit,
  Globe,
  Palette,
} from "lucide-react";

import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { setToken, setUser } = useContext(AuthContext);
    const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");

  setToken(null);
  setUser(null);

  window.location.reload();
};
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account information and donation activity.
        </p>
      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-3xl shadow border p-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Profile Image */}

          <div className="flex flex-col items-center">

            <img
              src={`https://ui-avatars.com/api/?name=${
                user?.name || "User"
              }&background=16a34a&color=fff&size=200`}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-green-200 shadow"
            />

            <button className="mt-5 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl">

              <Edit size={18} />

              Edit Profile

            </button>

          </div>

          {/* User Details */}

          <div className="flex-1">

            <h2 className="text-3xl font-bold">

              {user?.name}

            </h2>

            <p className="text-green-600 font-semibold mt-1 capitalize">

              {user?.role}

            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              {/* Email */}

              <div className="flex gap-3">

                <Mail className="text-green-600" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Email

                  </p>

                  <p className="font-semibold">

                    {user?.email}

                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex gap-3">

                <Phone className="text-green-600" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Phone Number

                  </p>

                  <p className="font-semibold">

                    {user?.phone}

                  </p>

                </div>

              </div>

              {/* Alternate Phone */}

              <div className="flex gap-3">

                <Phone className="text-green-600" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Alternate Number

                  </p>

                  <p className="font-semibold">

                    {user?.Altphone || "Not Provided"}

                  </p>

                </div>

              </div>

              {/* Gender */}

              <div className="flex gap-3">

                <User className="text-green-600" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Gender

                  </p>

                  <p className="font-semibold">

                    {user?.gender || "Not Provided"}

                  </p>

                </div>

              </div>

              {/* Occupation */}

              <div className="flex gap-3">

                <Briefcase className="text-green-600" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Occupation

                  </p>

                  <p className="font-semibold">

                    {user?.occupation || "Not Provided"}

                  </p>

                </div>

              </div>

              {/* City */}

              <div className="flex gap-3">

                <MapPin className="text-green-600" />

                <div>

                  <p className="text-gray-500 text-sm">

                    City

                  </p>

                  <p className="font-semibold">

                    {user?.city || "Not Provided"}

                  </p>

                </div>

              </div>

            </div>

            {/* Address */}

            <div className="mt-8">

              <p className="text-gray-500 text-sm">

                Address

              </p>

              <p className="font-semibold">

                {user?.address || "Not Provided"}

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow border p-6 text-center">

          <h2 className="text-gray-500">
            Food Donations
          </h2>

          <p className="text-3xl font-bold text-green-600 mt-3">
            18
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow border p-6 text-center">

          <h2 className="text-gray-500">
            Money Donations
          </h2>

          <p className="text-3xl font-bold text-green-600 mt-3">
            ₹12,500
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow border p-6 text-center">

          <h2 className="text-gray-500">
            Meals Donated
          </h2>

          <p className="text-3xl font-bold text-green-600 mt-3">
            850
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow border p-6 text-center">

          <h2 className="text-gray-500">
            Organizations Helped
          </h2>

          <p className="text-3xl font-bold text-green-600 mt-3">
            9
          </p>

        </div>

      </div>

      {/* Donation History */}

<div className="bg-white rounded-3xl shadow border p-8">

<h2 className="text-2xl font-bold mb-6">

Donation History

</h2>

<div className="space-y-5">

<div className="border rounded-xl p-5 flex justify-between">

<div>

<h3 className="font-semibold">
Food Donation
</h3>

<p className="text-gray-500">
Hope Orphanage
</p>

<p className="text-sm text-gray-400">
12 July 2026
</p>

</div>

<span className="text-green-600 font-semibold">

Delivered

</span>

</div>

<div className="border rounded-xl p-5 flex justify-between">

<div>

<h3 className="font-semibold">

Money Donation

</h3>

<p className="text-gray-500">

Care Foundation

</p>

<p className="text-sm text-gray-400">

₹1000

</p>

</div>

<span className="text-green-600 font-semibold">

Successful

</span>

</div>

</div>

</div>

      {/* Settings */}

<div className="bg-white rounded-3xl shadow border p-8">

<h2 className="text-2xl font-bold mb-6">

Settings

</h2>

<div className="grid md:grid-cols-3 gap-6">

<div className="border rounded-xl p-5">

<h3 className="font-semibold">
Language
</h3>

<p className="text-gray-500 mt-2">

English

</p>

</div>

<div className="border rounded-xl p-5">

<h3 className="font-semibold">
Theme
</h3>

<p className="text-gray-500 mt-2">

Light Green

</p>

</div>

<div className="border rounded-xl p-5">

<h3 className="font-semibold">
Availability
</h3>

<p className="text-green-600 mt-2">

Available

</p>

</div>

</div>

</div>
{/* Bookmarked Organizations */}

<div className="bg-white rounded-3xl shadow border p-8">

<h2 className="text-2xl font-bold mb-6">

Bookmarked Organizations

</h2>

<div className="space-y-4">

<div className="border rounded-xl p-4">

❤️ Hope Foundation

</div>

<div className="border rounded-xl p-4">

❤️ Smile Orphanage

</div>

<div className="border rounded-xl p-4">

❤️ Care NGO

</div>

</div>

</div>
{/* Feedback */}

<div className="bg-white rounded-3xl shadow border p-8">

<h2 className="text-2xl font-bold mb-6">

Feedback

</h2>

<textarea

rows={4}

placeholder="Share your experience with DonateHope..."

className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
/>

<button

className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">

Submit Feedback

</button>

</div>
{/* Account */}

<div className="bg-white rounded-3xl shadow border p-8">

<h2 className="text-2xl font-bold text-red-600 mb-6">

Account

</h2>

<button
  onClick={handleLogout}
  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
>
  Logout
</button>

</div>

    </div>
  );
};

export default Profile;
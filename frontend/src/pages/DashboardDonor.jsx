import { useState } from "react";

import DonorSidebar from "../components/DonorSidebar";

import Profile from "./Profile";
import DonateFood from "./DonateFood";
import DonateMoney from "./DonateMoney";
import HelpSupport from "./HelpSupport";

const DashboardDonor = () => {

const [page,setPage]=useState("dashboard");

return(

<div className="flex bg-gray-50">

<DonorSidebar

page={page}

setPage={setPage}

/>

<div className="flex-1 p-8">

{page==="dashboard" && (
<div className="space-y-8">

  {/* Welcome Banner */}

  <div className="bg-linear-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white shadow">

    <h1 className="text-4xl font-bold">
      Welcome Back 👋
    </h1>

    <p className="mt-2 text-lg">
      Together we can reduce food waste and feed more lives.
    </p>

  </div>

  {/* Search & Filters */}

  <div className="bg-white rounded-3xl shadow p-6">

    <h2 className="text-2xl font-bold mb-5">

      Find Food Donations

    </h2>

    <div className="grid md:grid-cols-3 gap-4">

      <input
        type="text"
        placeholder="🔍 Search organization"
        className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
      />

      <select className="border rounded-xl px-4 py-3">

        <option>📍 All Locations</option>

        <option>Hyderabad</option>

        <option>Warangal</option>

        <option>Vijayawada</option>

        <option>Visakhapatnam</option>

      </select>

      <select className="border rounded-xl px-4 py-3">

        <option>🍱 All Categories</option>

        <option>Rice</option>

        <option>Meals</option>

        <option>Snacks</option>

        <option>Sweets</option>

        <option>Fruits</option>

      </select>

    </div>

  </div>

  {/* Registered Organizations */}

<div>

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-3xl font-bold text-gray-800">
      🏢 Registered Organizations
    </h2>

    <button className="text-green-600 font-semibold hover:underline">
      View All →
    </button>

  </div>

  <div className="grid lg:grid-cols-2 gap-6">

    {/* Card 1 */}

    <div className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=900"
        alt="Hope Orphanage"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            Hope Orphanage
          </h3>

          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
            High Priority
          </span>

        </div>

        <p className="text-gray-500 mt-3">
          📍 Hyderabad
        </p>

        <p className="text-gray-500 mt-2">
          🏷 Orphanage
        </p>

        <p className="text-gray-600 mt-4">
          Providing food, education and shelter for over
          <span className="font-semibold text-green-600">
            {" "}120 children.
          </span>
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <span className="text-green-600 font-semibold">
              ● Accepting Donations
            </span>

          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
            View Details
          </button>

        </div>

      </div>

    </div>

    {/* Card 2 */}

    <div className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900"
        alt="Care Foundation"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            Care Foundation
          </h3>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
            Medium Priority
          </span>

        </div>

        <p className="text-gray-500 mt-3">
          📍 Secunderabad
        </p>

        <p className="text-gray-500 mt-2">
          🏷 NGO
        </p>

        <p className="text-gray-600 mt-4">
          Helping homeless families with daily meals and emergency food support.
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <span className="text-green-600 font-semibold">
              ● Available
            </span>

          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
            View Details
          </button>

        </div>

      </div>

    </div>

    {/* Card 3 */}

    <div className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900"
        alt="Happy Old Age Home"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            Happy Old Age Home
          </h3>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Low Priority
          </span>

        </div>

        <p className="text-gray-500 mt-3">
          📍 Warangal
        </p>

        <p className="text-gray-500 mt-2">
          🏷 Old Age Home
        </p>

        <p className="text-gray-600 mt-4">
          Caring for 75 senior citizens with nutritious daily meals.
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <span className="text-green-600 font-semibold">
              ● Accepting Donations
            </span>

          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
            View Details
          </button>

        </div>

      </div>

    </div>

    {/* Card 4 */}

    <div className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1469571486292-b53601020f1c?w=900"
        alt="Smile Foundation"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            Smile Foundation
          </h3>

          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
            High Priority
          </span>

        </div>

        <p className="text-gray-500 mt-3">
          📍 Vijayawada
        </p>

        <p className="text-gray-500 mt-2">
          🏷 NGO
        </p>

        <p className="text-gray-600 mt-4">
          Providing meals for underprivileged children and families every day.
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <span className="text-green-600 font-semibold">
              ● Available
            </span>

          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
            View Details
          </button>

        </div>

      </div>

    </div>

  </div>

</div>

</div>


)}

{page==="profile" && <Profile/>}

{page==="food" && <DonateFood/>}

{page==="money" && <DonateMoney/>}
{page==="support" && <HelpSupport/>}

</div>

</div>

)

}

export default DashboardDonor;
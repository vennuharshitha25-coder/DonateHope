import { useEffect, useState } from "react";

import DonorSidebar from "../components/DonorSidebar";

import Profile from "./Profile";
import DonateFood from "./DonateFood";
import DonateMoney from "./DonateMoney";
import HelpSupport from "./HelpSupport";
import PaymentPage from "./PaymentPage";
import OrganizationDetails from "./OrganizationDetails";

const DashboardDonor = () => {

const [page,setPage]=useState("dashboard");
const [organizations, setOrganizations] = useState([]);
const [selectedOrganization, setSelectedOrganization] = useState(null);

const [search, setSearch] = useState("");

const [location, setLocation] = useState("");

const [sortBy, setSortBy] = useState("priority");
useEffect(() => {
  fetchOrganizations();
}, []);

const fetchOrganizations = async () => {
  try {
    const res = await fetch(
      "http://localhost:5001/api/users/organizations"
    );

    const data = await res.json();

    setOrganizations(data);
  } catch (err) {
    console.log(err);
  }
};
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

    <div className="grid md:grid-cols-3 gap-4 ">

      <input
type="text"
placeholder="🔍 Search organization"
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border rounded-xl px-4 py-3 sm:col-span-2 focus:ring-2 focus:ring-green-500 outline-none"
/>

      

      <select
value={sortBy}
onChange={(e)=>setSortBy(e.target.value)}
className="border rounded-xl px-4 py-3"
>
<option value="priority">Highest Priority</option>
<option value="location">Location Wise</option>
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

      {organizations.map((org) => (

  <div
    key={org._id}
    className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden"
  >

    <img
  src={
    org.photos?.length
      ? `http://localhost:5001/uploads/${org.photos[0]}`
      : "/default-org.jpg"
  }
  alt={org.name}
  className="w-full h-56 object-cover"
/>

    <div className="p-6">

      <h3 className="text-2xl font-bold">
        {org.name}
      </h3>

      <p className="text-gray-500 mt-3">
        📍 {org.city}
      </p>

      <p className="text-gray-500 mt-2">
        🏷 {org.orgType}
      </p>

      <p className="text-gray-600 mt-4">
        {org.description}
      </p>

      <div className="flex justify-between items-center mt-6">

        <span className="text-green-600 font-semibold">
          ● Accepting Donations
        </span>

        <button
  onClick={() => {
    setSelectedOrganization(org);
    setPage("details");
  }}
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
>
  View Details
</button>

      </div>

    </div>

  </div>

))}

        

        

      

  </div>

</div>

</div>


)}

{page==="profile" && <Profile/>}

{page === "food" && (
  <DonateFood
    setPage={setPage}
    selectedOrganization={selectedOrganization}
  />
)}

{page === "money" && (
  <DonateMoney
    setPage={setPage}
    selectedOrganization={selectedOrganization}
  />
)}

{page==="support" && <HelpSupport/>}
{page==="payment" && <PaymentPage />}
{page === "details" && (
  <OrganizationDetails
    organization={selectedOrganization}
    setPage={setPage}
    setSelectedOrganization={setSelectedOrganization}
  />
)}
</div>

</div>

)

}

export default DashboardDonor;
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetchPendingOrganizations();
  }, []);

  const fetchPendingOrganizations = async () => {
    try {
      const token = localStorage.getItem("token");

const res = await fetch(
  "http://localhost:5001/api/admin/pending",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      const data = await res.json();
      setOrganizations(data);
    } catch (err) {
      console.log(err);
    }
  };

  const approveOrganization = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
  `http://localhost:5001/api/admin/approve/${id}`,
  {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      alert("Organization Approved");

      fetchPendingOrganizations();
    } catch (err) {
      console.log(err);
    }
  };

  const rejectOrganization = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
  `http://localhost:5001/api/admin/reject/${id}`,
  {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      alert("Organization Rejected");

      fetchPendingOrganizations();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Admin Dashboard
      </h1>

      <h2 className="text-2xl font-semibold mb-6">
        Pending Organizations
      </h2>

      {organizations.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 shadow">
          No pending organizations.
        </div>
      ) : (
        <div className="space-y-6">

          {organizations.map((org) => (

            <div
              key={org._id}
              className="bg-white rounded-3xl shadow p-6 border"
            >

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <h2 className="text-2xl font-bold">
                    {org.name}
                  </h2>

                  <p className="text-gray-500">
                    {org.orgType}
                  </p>
                </div>

                <div>
                  <p>
                    <b>Email:</b> {org.email}
                  </p>

                  <p>
                    <b>Phone:</b> {org.phone}
                  </p>

                  <p>
                    <b>Contact Person:</b>{" "}
                    {org.contactPerson}
                  </p>

                  <p>
                    <b>Designation:</b>{" "}
                    {org.designation}
                  </p>

                  <p>
                    <b>City:</b> {org.city}
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <p className="text-gray-700">
                  {org.description}
                </p>
              </div>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() => approveOrganization(org._id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectOrganization(org._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl"
                >
                  Reject
                </button>

              </div>

            </div>

          ))}

        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
import { useState } from "react";

const OrganizationDetails = ({ organization, setPage, setSelectedOrganization }) => {
  const [current, setCurrent] = useState(0);

  if (!organization) return null;

  const photos = organization.photos || [];

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

      {/* Images */}

      <div className="relative">

        <img
          src={`http://localhost:5001/uploads/${photos[current]}`}
          className="w-full h-96 object-cover"
          alt=""
        />

        {photos.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrent(
                  current === 0 ? photos.length - 1 : current - 1
                )
              }
              className="absolute left-5 top-1/2 bg-white rounded-full p-3 shadow"
            >
              ◀
            </button>

            <button
              onClick={() =>
                setCurrent(
                  current === photos.length - 1 ? 0 : current + 1
                )
              }
              className="absolute right-5 top-1/2 bg-white rounded-full p-3 shadow"
            >
              ▶
            </button>
          </>
        )}

      </div>

      <div className="p-8 space-y-5">

        <h1 className="text-4xl font-bold text-green-700">
          {organization.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <b>Organization Type</b>
            <p>{organization.orgType}</p>
          </div>

          <div>
            <b>Contact Person</b>
            <p>{organization.contactPerson}</p>
          </div>

          <div>
            <b>Designation</b>
            <p>{organization.designation}</p>
          </div>

          <div>
            <b>City</b>
            <p>{organization.city}</p>
          </div>

          <div>
            <b>Address</b>
            <p>{organization.address}</p>
          </div>

          <div>
            <b>Phone</b>
            <p>{organization.phone}</p>
          </div>

          <div>
            <b>Alternate Phone</b>
            <p>{organization.Altphone}</p>
          </div>

        </div>

        <div>

          <b>Description</b>

          <p className="mt-2 text-gray-700">
            {organization.description}
          </p>

        </div>

        <div className="flex gap-4 flex-wrap">


         <button
  onClick={() => {
  setSelectedOrganization(organization);
  setPage("food");
}}
className="bg-green-600 text-white px-6 py-3 rounded-xl"
>
  Donate Food
</button>

          <button
  onClick={() => {
  setSelectedOrganization(organization);
  setPage("money");
}}
className="bg-green-600 text-white px-6 py-3 rounded-xl"
>
  Donate Money
</button>

          <button
            onClick={() => setPage("dashboard")}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default OrganizationDetails;
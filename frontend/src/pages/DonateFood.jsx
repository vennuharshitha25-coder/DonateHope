import { useState ,useEffect} from "react";

const DonateFood = ({setPage, selectedOrganization}) => {
  const [photos, setPhotos] = useState([]);
const [previewImages, setPreviewImages] = useState([]);
const [organizations, setOrganizations] = useState([]);
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
useEffect(() => {
  if (selectedOrganization) {
    setFormData((prev) => ({
      ...prev,
      organization: selectedOrganization._id,
    }));
  }
}, [selectedOrganization]);

  const handlePhotos = (e) => {
  const files = Array.from(e.target.files);

  if (!files.length) return;

  if (photos.length + files.length < 3) {
    alert("Please upload at least 3 food photos.");
  }

  setPhotos((prev) => [...prev, ...files]);

  setFormData((prev) => ({
    ...prev,
    photos: [...prev.photos, ...files],
  }));

  const newPreviews = files.map((file) => ({
    id: Date.now() + Math.random(),
    file,
    url: URL.createObjectURL(file),
  }));

  setPreviewImages((prev) => [...prev, ...newPreviews]);
};

  const handleSubmit = async(e) => {
    e.preventDefault();

    const form = new FormData();

form.append("foodName",formData.foodName);
form.append("category",formData.category);
form.append("quantity",formData.quantity);
form.append("organization",formData.organization);
form.append("deliveryMethod", formData.deliveryMethod);
form.append("occasion", formData.occasion);
form.append("instructions", formData.instructions);

formData.photos.forEach(photo=>{
    form.append("photos",photo);
});

await fetch("http://localhost:5001/api/donations",{

method:"POST",

headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
},

body:form

});

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

        
{selectedOrganization ? (
  <div>
  <input
  type="text"
  value={selectedOrganization.name}
  readOnly
  className="w-full px-4 py-3 rounded-xl border bg-gray-100"
/>

<input
  type="hidden"
  value={selectedOrganization._id}
/>
</div>

) : (

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
    <option value="">Select Organization</option>

    <option>Any Organization (Highest Priority)</option>

    {organizations.map((org) => (
  <option
  key={org._id}
  value={org._id}
>
  {org.name}
</option>
))}

  </select>

)}

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
  <label className="block text-lg font-semibold text-gray-700 mb-3">
    Food Photos
  </label>

  <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-green-600 rounded-2xl cursor-pointer bg-green-50 hover:bg-green-100 transition">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14 text-green-600 mb-3"
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

    <p className="text-lg font-semibold text-green-700">
      Click to Upload Food Photos
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
      onChange={handlePhotos}
    />
  </label>
</div>
{previewImages.length > 0 && (
  <div className="mt-5">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      {previewImages.map((image) => (

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

              setFormData((prev) => ({
                ...prev,
                photos: prev.photos.filter(
                  (file) => file !== image.file
                ),
              }));

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
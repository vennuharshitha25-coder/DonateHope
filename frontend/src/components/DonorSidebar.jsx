import {
  LayoutDashboard,
  User,
  Heart,
  DollarSign,
  BookOpen,
  HandHeart,
  CircleHelp,
} from "lucide-react";
import { useState } from "react";

const DonorSidebar = ({ page, setPage }) => {
  const [openProfile, setOpenProfile] = useState(false);

  const menuClass = (name) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
      page === name
        ? "bg-green-100 text-green-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }`;

  return (
    <div className="w-72 h-screen bg-white border-r shadow-sm p-5">

      <h1 className="text-3xl font-bold text-green-600 mb-8">
        DonateHope
      </h1>

      <div className="space-y-2">

        <div
          className={menuClass("dashboard")}
          onClick={() => setPage("dashboard")}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </div>

        {/* Profile */}

        <div
  className={menuClass("profile")}
  onClick={() => setPage("profile")}
>
  <User size={20} />
  Profile
</div>

        <div
          className={menuClass("food")}
          onClick={() => setPage("food")}
        >
          <Heart size={20} />
          Donate Food
        </div>

        <div
          className={menuClass("money")}
          onClick={() => setPage("money")}
        >
          <DollarSign size={20} />
          Donate Money
        </div>

        

        <div
          className={menuClass("support")}
          onClick={() => setPage("support")}
        >
          <CircleHelp size={20} />
          Help & Support
        </div>

      </div>
    </div>
  );
};

export default DonorSidebar;
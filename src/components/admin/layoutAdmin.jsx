import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  CreditCard,
  Calendar,
  LogOut,
  Bell,
  Mail
} from "lucide-react";
import logo1 from "../../assets/Images/logo1.png";
import logo2 from "../../assets/Images/foto-profile1.jpg";
import { useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {a
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="w-full min-h-screen flex bg-gray-100">
      {/* ========== SIDEBAR + BURGER ========== */}
      <div
        className={`h-screen bg-green-600 text-white p-6 transition-all duration-300 fixed top-0 left-0 z-20 ${
          open ? "w-64" : "w-20"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-8 cursor-pointer">
          <img
            src={logo1}
            alt="Logo"
            className="w-10 h-10 rounded-xl object-cover"
          />
          {open && <h1 className="text-2xl font-semibold">Alamora</h1>}
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-5">
          <a
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-700 cursor-pointer"
          >
            <Home />
            {open && "Dashboard"}
          </a>

          <a
            onClick={() => navigate("/admin/event")}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-700 cursor-pointer"
          >
            <Calendar />
            {open && "CRUD Event"}
          </a>

          <a
            onClick={() => navigate("/admin/transaksi")}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-700 cursor-pointer"
          >
            <CreditCard />
            {open && "Transaksi"}
          </a>

          <a
            onClick={() => navigate("/admin/crud_user")}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-700 cursor-pointer"
          >
            <Users />
            {open && "CRUD User"}
          </a>
        </nav>

        {/* LOGOUT */}
        <div className="absolute bottom-6 px-6 left-0 right-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-700 cursor-pointer"
          >
            <LogOut />
            {open && "Logout"}
          </button>
        </div>
      </div>

      {/* ========== MAIN AREA ========== */}
      <div
        className={`flex-1 min-h-screen transition-all duration-300 ${
          open ? "lg:pl-64 pl-20" : "pl-20"
        }`}
      >
        {/* ========== NAVBAR ========== */}
        <div className="w-full bg-white shadow p-4 flex items-center justify-between sticky top-0 z-10">
          {/* Toggle Sidebar */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg bg-green-600 text-white"
          >
            {open ? <X /> : <Menu />}
          </button>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Cari Disini"
            className="border px-3 py-2 rounded-lg w-1/2"
          />

          {/* Right Icons */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-5">
              <button
                className="relative hover:opacity-80"
                onClick={() => alert("Notifikasi diklik!")}
              >
                <Bell className="w-6 h-6 text-green-600" />
              </button>

              <button
                className="relative hover:opacity-80"
                onClick={() => alert("Pesan diklik!")}
              >
                <Mail className="w-6 h-6 text-green-600" />
              </button>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src={logo2}
                alt="Admin"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold">Admin</span>
            </div>
          </div>
        </div>

        {/* ========== PAGE CONTENT ========== */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

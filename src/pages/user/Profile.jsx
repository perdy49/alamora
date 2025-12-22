import React, { useState } from "react";
import {
  Menu,
  Home,
  User,
  History,
  HelpCircle,
  Volume2,
  LogOut
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [openSidebar, setOpenSidebar] = useState(true);
    const [avatar, setAvatar] = useState("https://i.ibb.co/LYtpjZ6/girl.jpg");
    const navigate = useNavigate();
    const handleUpload = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const imageURL = URL.createObjectURL(file);
      setAvatar(imageURL);
    };

    const handleDelete = () => {
      setAvatar(null);
    };


  return (
    <div className="w-full min-h-screen bg-[#dedede] flex">
      {/* SIDEBAR */}
      <div
        className={`bg-white shadow-lg h-screen p-6 flex flex-col transition-all duration-300 ${
          openSidebar ? "w-64" : "w-20"
        }`}
      >
        {/* Hamburger */}
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="mb-6 text-[#4dbd74]"
        >
          <Menu size={28} />
        </button>

        {/* MENU LIST */}
        <ul className="space-y-4 mt-10">
          {/* HOME */}
          <li
            onClick={() => navigate("/user/home")}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
              openSidebar && "hover:bg-[#e8f7f0]"
            }`}
          >
            <Home className="text-[#4dbd74]" />
            {openSidebar && <span>Home</span>}
          </li>

          {/* PROFILE - ACTIVE */}
          <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#4dbd74] text-white">
            <User />
            {openSidebar && <span>Profile</span>}
          </li>

          <li
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
              openSidebar && "hover:bg-[#e8f7f0]"
            }`}
          >
            <History className="text-[#4dbd74]" />
            {openSidebar && <span>Riwayat Pembelian</span>}
          </li>

          <li
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
              openSidebar && "hover:bg-[#e8f7f0]"
            }`}
          >
            <HelpCircle className="text-[#4dbd74]" />
            {openSidebar && <span>FAQ</span>}
          </li>

          <li
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
              openSidebar && "hover:bg-[#e8f7f0]"
            }`}
          >
            <Volume2 className="text-[#4dbd74]" />
            {openSidebar && <span>Pengumuman Update</span>}
          </li>

          <li
            onClick={() => navigate("/user/login")}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
              openSidebar && "hover:bg-[#e8f7f0]"
            }`}
          >
            <LogOut className="text-red-600" />
            {openSidebar && <span>Logout</span>}
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        {/* Breadcrumb */}
        <p className="text-gray-600 mb-4 text-sm">
          Beranda <span className="mx-2">/</span> Profile
        </p>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold mb-6">Informasi Personal</h1>

        {/* PROFILE CARD */}
        {/* PROFILE CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-6 mb-10 max-w-4xl">
          {/* Avatar */}
          <img
            src={avatar || "https://via.placeholder.com/150?text=No+Image"}
            className="w-24 h-24 rounded-full object-cover border"
          />

          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            id="avatarInput"
            className="hidden"
            onChange={handleUpload}
          />

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => document.getElementById("avatarInput").click()}
              className="px-5 py-2 bg-[#4dbd74] text-white rounded-full"
            >
              Upload
            </button>

            <button
              onClick={handleDelete}
              className="px-5 py-2 bg-red-500 text-white rounded-full"
            >
              Hapus
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl">
          {/* ROW 1 */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-700">Nama Awal</label>
              <input
                type="text"
                defaultValue="Indah"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="text-gray-700">Nama Akhir</label>
              <input
                type="text"
                defaultValue="Melati"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                defaultValue="Indah1@gmail.com"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="text-gray-700">Username</label>
              <input
                type="text"
                defaultValue="IndahAja"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
          </div>

          {/* EDIT BUTTON */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-[#4dbd74] text-white rounded-full">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

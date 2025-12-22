import React from "react";
import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const items = Array(8).fill({
    title: "Istanbul Turkiye",
    price: "Rp 3.000.000",
    image: "https://i.ibb.co.com/3fxg0Ds/istanbul.jpg"
  });

  return (
    <div className="w-full min-h-screen bg-[#dedede] flex flex-col items-center">
      {/* HEADER */}
      {/* NAVBAR */}
      <div className="w-[1100px] mt-6 bg-[#4dbd74] py-4 px-6 rounded-full flex items-center justify-between">
        {/* Logo + Icon */}
        <NavLink
          to="/user/home"
          className="flex items-center gap-3 text-white font-bold text-xl hover:opacity-90"
        >
          Alamora
          <img
            src="/src/assets/Images/logo1.png"
            alt="Logo"
            className="w-8 h-8 object-cover rounded-full"
          />
        </NavLink>

        {/* Search */}
        <div className="flex items-center bg-white px-5 py-2 rounded-full w-[400px] shadow-sm">
          <input
            type="text"
            placeholder="Cari wisata..."
            className="outline-none flex-1 text-gray-700"
          />
          <Search className="text-gray-500" size={20} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white">
          <NavLink to="/pembelian-tiket">
            <ShoppingCart
              size={26}
              className="cursor-pointer hover:opacity-80"
            />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-[#43B573] font-semibold" : "hover:text-green-600"
            }
          >
            <User size={26} className="cursor-pointer hover:opacity-80" />
          </NavLink>
        </div>
      </div>

      {/* BANNER PROMO */}
      <div className="w-[1100px] mt-12 relative">
        <img
          src="https://i.ibb.co.com/4PnLVw7/sydney.jpg"
          alt="banner"
          className="rounded-2xl w-full h-[280px] object-cover"
        />
        <div className="absolute top-6 left-6 bg-[#2c89b3] text-white p-6 rounded-2xl w-[350px]">
          <h1 className="text-2xl font-bold">Dapatkan Diskon 50%</h1>
          <p className="text-sm mt-2">
            Hemat dengan diskon yang kami berikan! Hanya di Alamora
          </p>
          <button className="px-4 py-2 mt-4 bg-white text-[#2c89b3] rounded-xl">
            Selengkapnya
          </button>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="w-[1100px] mt-16">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Wisata Lokal / Semua</h2>

          <button className="flex items-center gap-2 bg-[#4dbd74] text-white px-4 py-2 rounded-full">
            Urutkan <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-6">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-2xl shadow flex flex-col items-center"
            >
              <img
                src={item.image}
                className="w-full rounded-xl h-[130px] object-cover"
              />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <NavLink to="/detail">
                <div className="px-4 py-1 mt-2 bg-[#4dbd74] text-white rounded-full text-sm">
                  {item.price}
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-[#4dbd74] text-white px-6 py-2 rounded-full">
            Muat Lebih Banyak
          </button>
        </div>
      </div>

      {/* PROMO 2 */}
      <div className="w-[1100px] mt-16 flex items-center gap-6">
        <img
          src="https://i.ibb.co.com/tYbh8wz/norway.jpg"
          className="rounded-2xl w-[55%] h-[250px] object-cover"
        />
        <div className="grid grid-cols-2 gap-4 w-[45%]">
          {items.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-2xl shadow flex flex-col items-center"
            >
              <img
                src={item.image}
                className="w-full rounded-xl h-[120px] object-cover"
              />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <div className="px-4 py-1 mt-2 bg-[#4dbd74] text-white rounded-full text-sm">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="w-[1100px] mt-20">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Wisata Internasional / Semua</h2>

          <button className="flex items-center gap-2 bg-[#4dbd74] text-white px-4 py-2 rounded-full">
            Urutkan <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-2xl shadow flex flex-col items-center"
            >
              <img
                src={item.image}
                className="w-full rounded-xl h-[130px] object-cover"
              />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <div className="px-4 py-1 mt-2 bg-[#4dbd74] text-white rounded-full text-sm">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-[#4dbd74] text-white px-6 py-2 rounded-full">
            Muat Lebih Banyak
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-300 py-10 mt-16 w-full">
        <div className="max-w-6xl mx-auto px-4 flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Alamora</h1>
            <p className="text-gray-600 mt-3">
              Copyright © 2025 Alamora All Rights Reserved
            </p>
          </div>

          <div className="flex space-x-16">
            <ul className="text-gray-700 space-y-2">
              <li className="font-semibold">Tentang Kami</li>
              <li>Bantuan</li>
              <li>Privasi & Policy</li>
            </ul>

            <ul className="text-gray-700 space-y-2">
              <li className="font-semibold">Perjalanan Karir</li>
              <li>Kontak</li>
              <li>Tim Kami</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

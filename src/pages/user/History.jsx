import React from "react";
import { Search, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const RiwayatPembelian = () => {
  return (
    <div className="w-full min-h-screen bg-[#dedede] flex flex-col items-center py-10">
      {/* CONTAINER */}
      <div className="w-[1100px] bg-white rounded-2xl shadow">
        {/* NAVBAR TOP */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex gap-10 text-gray-700 font-medium">
            <ul className="flex space-x-6 font-medium text-gray-700">
              <NavLink
                to="/user/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#43B573] font-semibold"
                    : "hover:text-green-600"
                }
              >
                Beranda
              </NavLink>

              <NavLink
                to="/berita-wisata"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#43B573] font-semibold"
                    : "hover:text-green-600"
                }
              >
                Berita-Wisata
              </NavLink>

              <NavLink
                to="/kunjungan"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#43B573] font-semibold"
                    : "hover:text-green-600"
                }
              >
                Kunjungan
              </NavLink>

              <NavLink
                to="/pembelian-tiket"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#43B573] font-semibold"
                    : "hover:text-green-600"
                }
              >
                Pembelian-Tiket
              </NavLink>
            </ul>
          </div>

          {/* Search */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-[250px]">
            <input
              type="text"
              placeholder="Cari Disini"
              className="flex-1 outline-none"
            />
            <Search size={18} className="text-gray-600" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {/* TITLE */}
          <h1 className="text-xl font-semibold mb-6">Riwayat Pembelian</h1>

          {/* TABS */}
          <div className="flex gap-6 mb-6">
            <button className="bg-[#4dbd74] text-white px-4 py-2 rounded-full">
              Semua
            </button>
            <button className="text-gray-700">Dibayar</button>
            <button className="text-gray-700">Dibatalkan</button>
            <button className="text-gray-700">Whislist</button>
          </div>

          {/* INFO BOX */}
          <div className="bg-gray-100 px-6 py-3 rounded-xl flex items-center justify-between mb-8">
            <p className="text-gray-700 text-sm">
              Kamu Telah memesan <b>9 Tiket wisata</b> dalam 1 Bulan terakhir
            </p>
            <Trash2 className="text-red-500 cursor-pointer" />
          </div>

          {/* LIST PEMBELIAN */}
          <div className="space-y-5">
            {/* ITEM 1 */}
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/56C47Jg/lake.jpg"
                  className="w-28 h-20 object-cover rounded-xl"
                />

                <div>
                  <h3 className="font-semibold">Danau Pompei Italia</h3>

                  <p className="text-gray-600 text-sm mt-1">
                    Wisata Luar Negeri • Alam dengan kota
                  </p>

                  {/* Status Dibayar */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-3 h-3 bg-[#4dbd74] rounded-full"></div>
                    <span className="text-[#4dbd74] text-sm">Dibayar</span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="font-semibold text-gray-700">Rp 9.000.000</p>
                <button className="text-[#4dbd74] text-sm underline">
                  Code QR
                </button>
              </div>
            </div>

            {/* ITEM 2 (copy) */}
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/56C47Jg/lake.jpg"
                  className="w-28 h-20 object-cover rounded-xl"
                />

                <div>
                  <h3 className="font-semibold">Danau Pompei Italia</h3>

                  <p className="text-gray-600 text-sm mt-1">
                    Wisata Luar Negeri • Alam dengan kota
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-3 h-3 bg-[#4dbd74] rounded-full"></div>
                    <span className="text-[#4dbd74] text-sm">Dibayar</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-700">Rp 9.000.000</p>
                <button className="text-[#4dbd74] text-sm underline">
                  Code QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPembelian;

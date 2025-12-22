import React from "react";
import { ArrowLeft, Share2, User as UserIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const DetailWisata = () => {
  return (
    <div className="w-full min-h-screen bg-[#dedede] flex flex-col items-center py-10">
      {/* CONTAINER */}
      <div className="w-[1100px] bg-white rounded-2xl shadow p-6">
        {/* KEMBALI */}
        <NavLink to="/user/home">
          <button className="flex items-center text-white absolute mt-3 ml-3 z-10 cursor-pointer">
            <ArrowLeft size={20} className="mr-2" /> Kembali
          </button>
        </NavLink>

        {/* IMAGE BANNER */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200"
            className="w-full h-[420px] object-cover rounded-xl"
          />

          {/* CARD INFO WISATA */}
          <div className="absolute top-5 right-5 bg-white p-5 rounded-xl shadow-md w-[280px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg">London-Inggris</h2>
              <Share2 size={20} className="text-gray-700 cursor-pointer" />
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              Pedesaan dengan pemandangan yang memukau desa di inggris ini di
              lengkapi keindahan alam gunung dan mata air yang jernih. desa ini
              diperkirakan berusia 3000 tahun dan telah dihuni selama itu.
            </p>

            <p className="mt-3 text-[#4dbd74] font-semibold">
              Rp 3.000.000 / Orang
            </p>

            <button className="w-full mt-3 bg-[#4dbd74] text-white py-2 rounded-full">
              Pesan Sekarang
            </button>

            <input
              type="text"
              placeholder="Masukkan Wishlist"
              className="w-full mt-3 p-2 border rounded-full"
            />
          </div>
        </div>

        {/* SECTION KOMENTAR + RATING */}
        <div className="w-full mt-10 flex gap-6">
          {/* KOMENTAR */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-4 mb-4">
              <button className="bg-[#4dbd74] text-white px-4 py-2 rounded-full">
                Semua Komentar
              </button>
              <button className="text-gray-600 hover:text-black">
                Positif
              </button>
              <button className="text-gray-600 hover:text-black">
                Negative
              </button>
            </div>

            {/* COMMENT CARD */}
            <div className="border rounded-xl p-4 bg-white flex items-start gap-3">
              <UserIcon size={35} className="text-[#4dbd74]" />

              <div>
                <p className="text-sm text-gray-700 mb-2">User1@gmail.com</p>
                <p className="text-gray-700 leading-relaxed">
                  Website yang bagus, saya sekarang tidak perlu menunggu lama
                  untuk travel ke eropa. semoga website ini bisa terus
                  dikembangkan, serta beberapa fiturnya sudah berfungsi dengan
                  baik, segitu dulu dari saya.
                </p>
              </div>
            </div>
          </div>

          {/* RATING */}
          <div className="w-[300px] border rounded-xl p-6 bg-white">
            <p className="font-semibold mb-2">Rating Keseluruhan :</p>

            <p className="text-[#4dbd74] text-4xl font-bold mb-4">4.9</p>

            <ul className="text-gray-700 space-y-2 text-sm">
              <li>* Alam yang indah</li>
              <li>* Transportasi yang bagus</li>
              <li>* Respon Cepat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWisata;

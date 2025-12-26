import React from "react";
import { NavLink } from "react-router-dom";

export default function WisataPage() {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center">
      {/* NAVBAR */}
      <nav className="w-full bg-white py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          {/* LOGO + NAMA */}
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-semibold">Alamora</h1>
            <img
              src="/src/assets/Images/logo1.png"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {/* MENU */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
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
          <div className="md:hidden flex gap-4 text-sm text-gray-700">
            <NavLink to="/user/home">Beranda</NavLink>
            <NavLink to="/berita-wisata">Berita</NavLink>
            <NavLink to="/kunjungan">Kunjungan</NavLink>
            <NavLink to="/pembelian-tiket">Tiket</NavLink>
          </div>
        </div>
      </nav>

      {/* SEARCH SECTION */}
      <div className="w-full md:w-[90%] lg:w-[80%] bg-gray-200 mt-10 py-10 px-4 md:px-6 rounded-lg">
        <div className="flex justify-center mb-16">
          <input
            placeholder="Cari Disini..."
            className="w-full md:w-[60%] px-5 py-3 rounded-full shadow bg-white border border-gray-300"
          />
        </div>

        {/* SECTION 1 */}
        <div className="relative flex flex-col lg:flex-row gap-10 items-center mt-10 overflow-hidden">
          {/* BACKGROUND PETA */}
          <div
            className="absolute inset-0 bg-[url('/src/assets/Images/fotoBg1.png')]
               bg-contain bg-center bg-no-repeat opacity-20 pointer-events-none"
          ></div>

          {/* SEMUA KONTEN (TEKS + FOTO) */}
          <div className="relative z-10 w-full lg:w-[45%]">
            <h1 className="text-4xl font-serif mb-4">The Lake District</h1>
            <p className="leading-relaxed text-gray-700 mb-6">
              Terletak di barat laut Inggris, The Lake District merupakan salah
              satu destinasi alam terindah. Kawasan ini dikelilingi oleh
              perbukitan hijau dan danau yang jernih, menciptakan pemandangan
              yang menakjubkan.
            </p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
              Baca Selengkapnya
            </button>
          </div>

          <div className="relative z-10 flex gap-4 flex-wrap justify-center lg:justify-start">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
              className="w-40 h-84 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805"
                className="w-40 h-40 rounded-lg object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1486299267070-83823f5448dd"
                className="w-40 h-40 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mt-24">
          <img
            src="https://plus.unsplash.com/premium_photo-1661876927592-7ce56910bbda"
            className="w-[45%] h-[350px] object-cover rounded-xl"
          />

          <div className="w-full lg:w-[45%]">
            <h1 className="text-4xl font-serif mb-4">Pulau Komodo Indonesia</h1>
            <p className="leading-relaxed text-gray-700 mb-6">
              Pulau Komodo merupakan salah satu destinasi wisata unggulan
              Indonesia yang terletak di Nusa Tenggara. Pulau ini termasuk dalam
              wilayah Taman Nasional Komodo.
            </p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 mb-6">
              Lihat Selengkapnya
            </button>

            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1571880826835-7ab2b833ad07"
                className="w-28 h-28 rounded-lg object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571366343168-631c5bcca7a4"
                className="w-28 h-28 rounded-lg object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1660280274563-767dd6b56374"
                className="w-28 h-28 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* BERITA TERKINI */}
        <div className="mt-24">
          <h1 className="text-3xl font-serif mb-6">Berita Terkini</h1>

          <div className="flex gap-6 mb-10">
            <button className="px-6 py-2 bg-green-600 text-white rounded-full">
              Semua
            </button>
            <button className="px-6 py-2 rounded-full border">
              Wisata Luar Negeri
            </button>
            <button className="px-6 py-2 rounded-full border">
              Wisata Lokal
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow">
                <img
                  src="https://images.unsplash.com/photo-1719415159419-f2ef30cfffef"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-500 mb-2">
                  Berita Luar Negeri • July 2024
                </p>
                <p className="leading-relaxed text-gray-700 mb-4">
                  Sebuah hutan di Eropa Tengah menarik perhatian wisatawan
                  karena keindahan alamnya.
                </p>
                <a className="text-green-600 font-medium cursor-pointer">
                  Lihat Selengkapnya
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER*/}
      <footer className="bg-gray-300 py-10 w-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 md:justify-between">
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
}

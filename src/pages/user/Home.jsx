import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getPublicEvents } from "../../services/eventService";

const PLACEHOLDER =
  "data:image/svg+xml;utf8,\
  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>\
    <rect width='100%' height='100%' fill='%23e5e7eb'/>\
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'\
      fill='%236b7280' font-size='20'>Menunggu Admin</text>\
  </svg>";


export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getPublicEvents()
      .then((data) => setEvents(Array.isArray(data) ? data : []))
      .catch(() => setEvents([]));
  }, []);

  // FILTER UTAMA (SESUAI ADMIN)
  const rekomendasi = events.filter((e) => e.type === "rekomendasi");
  const lainnya = events.filter((e) => e.type === "lainnya");
  const populer = events.filter((e) => e.type === "populer");

  // FALLBACK JIKA DATA BELUM DIISI ADMIN
  // const safeRekomendasi = rekomendasi.length ? rekomendasi : [{}];
  // ambil 1 rekomendasi saja
  const rekomendasiUtama = rekomendasi[0] || {};
  const safeLainnya = lainnya.length ? lainnya : Array(5).fill({});
  const safePopuler = populer.length ? populer : Array(5).fill({});
  const rekomendasiPendukung = rekomendasi.slice(1, 4);

  return (
    <div className="w-full">
      {/* NAVBAR */}
      <nav className="w-full bg-white py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between px-4">
          <h1 className="text-2xl font-semibold">Alamora</h1>
          <ul className="flex space-x-6 text-gray-700">
            <NavLink to="/user/home">Beranda</NavLink>
            <NavLink to="/berita-wisata">Berita</NavLink>
            <NavLink to="/kunjungan">Kunjungan</NavLink>
            <NavLink to="/pembelian-tiket">Tiket</NavLink>
          </ul>
        </div>
      </nav>

      {/* HERO (BACKGROUND MANUAL) */}
      <div
        className="relative h-[420px] bg-cover bg-center flex justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
        }}
      >
        <h1 className="text-4xl font-bold text-center">
          Jelajahi Tempat Yang <br /> Ingin Dicoba
        </h1>
        {/* INFO CARD */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white shadow-md rounded-xl px-6 py-3 flex items-center gap-6">
            <p className="text-sm text-gray-700">
              Jadwal Pesanan: <b>1</b>
            </p>

            <span className="h-5 w-px bg-gray-300" />

            <p className="text-sm text-gray-700">
              Catatan Perjalanan: <b>2</b>
            </p>

            <span className="h-5 w-px bg-gray-300" />

            <NavLink to="/profile">
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-6 py-1.5 rounded-full">
                Profile
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* REKOMENDASI */}
      <section className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Rekomendasi Wisata</h2>

          <div className="bg-white p-6 rounded-xl shadow flex gap-6">
            <img
              src={rekomendasiUtama.image || PLACEHOLDER}
              onError={(e) => (e.target.src = PLACEHOLDER)}
              className="w-60 h-72 rounded-xl object-cover"
            />

            <div>
              <h3 className="text-2xl font-semibold">
                {rekomendasiUtama.title || "Menunggu Admin"}
              </h3>
              <p className="text-gray-600 mt-2">
                {rekomendasiUtama.location ||
                  "Deskripsi akan ditambahkan admin"}
              </p>

              <div className="flex gap-4 mt-4">
                <div className="flex gap-4 mt-4">
                  {rekomendasiPendukung.length
                    ? rekomendasiPendukung.map((item, idx) => (
                        <img
                          key={idx}
                          src={item.image || PLACEHOLDER}
                          onError={(e) => (e.target.src = PLACEHOLDER)}
                          className="w-32 h-20 rounded-md object-cover"
                        />
                      ))
                    : Array(3)
                        .fill(0)
                        .map((_, idx) => (
                          <img
                            key={idx}
                            src={PLACEHOLDER}
                            className="w-32 h-20 rounded-md object-cover"
                          />
                        ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPAT LAINNYA */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold">Tempat Lainnya</h2>

          <div className="flex gap-4 mt-6 overflow-x-auto">
            {safeLainnya.map((item, i) => (
              <div key={i} className="min-w-[150px]">
                <img
                  src={item.image || PLACEHOLDER}
                  onError={(e) => (e.target.src = PLACEHOLDER)}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <p className="mt-2 text-center text-sm">
                  {item.title || "Menunggu Admin"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WISATA POPULER */}
      <section className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Wisata Populer</h2>

          <div className="grid grid-cols-5 gap-6">
            {safePopuler.map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-xl shadow">
                <img
                  src={item.image || PLACEHOLDER}
                  onError={(e) => (e.target.src = PLACEHOLDER)}
                  className="h-32 w-full rounded-xl object-cover"
                />
                <p className="mt-2 font-medium">
                  {item.title || "Menunggu Admin"}
                </p>
                <p className="text-sm text-green-600">{item.location || "-"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER*/}
      <footer className="bg-gray-300 py-10 w-full">
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
}

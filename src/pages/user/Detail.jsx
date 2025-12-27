import React, { useEffect, useState } from "react";
import { ArrowLeft, Share2, User as UserIcon } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import api from "../../services/api";

const DetailWisata = () => {
  const { id } = useParams(); // 🔑 ambil id dari URL
  const [event, setEvent] = useState(null);

  const [showOrder, setShowOrder] = useState(false);

  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    price: ""
  });

  useEffect(() => {
    api
      .get(`/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch(() => setEvent(null));
  }, [id]);

  if (!event) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="w-full min-h-screen bg-[#dedede] flex flex-col items-center py-10">
      {/* CONTAINER */}
      <div className="w-full max-w-[1100px] bg-white rounded-2xl shadow p-4 md:p-6">

        {/* IMAGE BANNER */}
        <div className="relative">
          {/* KEMBALI — SEKARANG MASUK BANNER ✅ */}
          <NavLink to="/user/home">
            <button
              className="
        absolute top-4 left-4 z-20
        flex items-center gap-2
        bg-white/80 backdrop-blur
        px-3 py-2 rounded-full
        text-gray-800
        hover:bg-white
      "
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Kembali</span>
            </button>
          </NavLink>

          <img
            src={`http://localhost:5000/uploads/${event.image}`}
            className="w-full h-[420px] object-cover rounded-xl"
          />

          {/* CARD INFO WISATA */}
          <div className="absolute top-5 right-5 bg-white p-5 rounded-xl shadow-md w-[280px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg">{event.title}</h2>
              <Share2 size={20} className="text-gray-700 cursor-pointer" />
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {event.location}
            </p>

            <p className="mt-3 text-[#4dbd74] font-semibold">
              Rp {Number(event.price).toLocaleString()} / Orang
            </p>

            <button
              onClick={() => setShowOrder(true)}
              className="w-full mt-3 bg-[#4dbd74] text-white py-2 rounded-full"
            >
              Pesan Sekarang
            </button>

            <NavLink to="/pembelian-tiket">
              <button className="w-full mt-3 border border-[#4dbd74] text-[#4dbd74] py-2 rounded-full hover:bg-[#4dbd74] hover:text-white transition">
                Tambahkan ke Wishlist
              </button>
            </NavLink>
          </div>
        </div>

        {/* SECTION KOMENTAR + RATING */}
        <div className="w-full mt-10 flex flex-col md:flex-row gap-6">
          {/* KOMENTAR */}
          <div className="flex-1">
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

            <div className="border rounded-xl p-4 bg-white flex items-start gap-3 mt-10">
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
          <div className="w-full md:w-[300px] border rounded-xl p-6 bg-white">
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
      {showOrder && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-[420px] rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              Form Pemesanan
            </h2>

            {/* NAMA */}
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={orderForm.name}
              onChange={(e) =>
                setOrderForm({ ...orderForm, name: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 mb-3"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              value={orderForm.email}
              onChange={(e) =>
                setOrderForm({ ...orderForm, email: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 mb-3"
            />

            {/* HARGA */}
            <select
              value={orderForm.price}
              onChange={(e) =>
                setOrderForm({ ...orderForm, price: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 mb-4"
            >
              <option value="">Pilih Harga</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <option key={i} value={i * 1000000}>
                  Rp {(i * 1000000).toLocaleString()}
                </option>
              ))}
            </select>

            {/* BUTTON */}
            <div className="flex gap-3">
              <button className="flex-1 bg-[#4dbd74] text-white py-2 rounded-full">
                Bayar
              </button>

              <button
                onClick={() => setShowOrder(false)}
                className="flex-1 border border-gray-400 text-gray-700 py-2 rounded-full"
              >
                Batalkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailWisata;

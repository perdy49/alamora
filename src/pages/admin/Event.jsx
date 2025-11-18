import { useState } from "react";
import { Outlet } from "react-router-dom";

import logo1 from "../../assets/Images/foto_rekomendasi1.jpg";
export default function CrudEventPage() {
  const [events] = useState([
    {
      id: 1,
      title: "Event 1",
      status: "Aktif",
      date: "12-20 February 2025",
      rating: 4.7
    },
    {
      id: 2,
      title: "Event 1",
      status: "Aktif",
      date: "12-20 February 2025",
      rating: 4.7
    },
    {
      id: 3,
      title: "Event 1",
      status: "Aktif",
      date: "12-20 February 2025",
      rating: 4.7
    },
    {
      id: 4,
      title: "Event 1",
      status: "Aktif",
      date: "12-20 February 2025",
      rating: 4.7
    },
    {
      id: 5,
      title: "Event 1",
      status: "Aktif",
      date: "12-20 February 2025",
      rating: 4.7
    }
  ]);

  return (
    <div className="flex w-full min-h-screen bg-gray-100">

      <div className="flex-1 flex flex-col">

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full font-medium shadow">
              Tambah Event
            </button>

            <div className="space-x-3">
              <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-full shadow">
                Hapus
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between border-b last:border-b-0 py-3"
              >
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />

                  <img
                    src={logo1}
                    alt="logoGambar1"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">
                    {event.title}
                  </span>

                  <span className="text-green-600 font-medium">
                    {event.status}
                  </span>

                  <span className="ml-4 text-gray-700 text-sm">
                    {event.date}
                  </span>
                </div>

                <div className="text-green-600 font-medium">
                  ⬆ {event.rating} Ratings
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

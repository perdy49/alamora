// src/pages/admin/CrudUser.jsx
import React from "react";

const CrudUser = () => {
  const users = [
    { email: "User1@gmail.com", password: "*********" },
    { email: "User2@gmail.com", password: "*********" },
    { email: "User3@gmail.com", password: "*********" },
    { email: "User4@gmail.com", password: "*********" },
    { email: "User5@gmail.com", password: "*********" }
  ];

  return (
    <div className="p-6 w-full">
      {/* TOP FILTERS */}
      <div className="flex items-center gap-4 mb-6">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 transition">
          50 Orang ▼
        </button>

        <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 transition">
          Data Pribadi ▼
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="bg-gray-200 w-full p-6 rounded-xl shadow-inner">
        {users.map((u, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center mb-4"
          >
            {/* User Data */}
            <div>
              <p className="font-semibold text-gray-800">{u.email}</p>
              <p className="text-gray-600">Password: {u.password}</p>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                Edit
              </button>

              <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                Hapus
              </button>

              {/* PLUS Button */}
              <button className="w-10 h-10 bg-green-500 text-white rounded-full text-xl flex items-center justify-center hover:bg-green-600 transition">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudUser;

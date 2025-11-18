import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const jumlahUser = 250;
  const jumlahTransaksi = 5000000;
  const jumlahEvent = 75;

  const prediksiUser = Math.round(jumlahUser * 1.15);
  const prediksiTransaksi = Math.round(jumlahTransaksi * 1.1);
  const prediksiEvent = Math.round(jumlahEvent * 1.12);

  return (
    <div className="p-6">
      {/* Greeting Header */}
      <div className="bg-green-500 text-white p-6 rounded-xl mb-6">
        <h2 className="text-xl font-bold">Selamat Malam Admin</h2>
        <p>Lakukan Pemantauan dan pengerjaan data CRUD di website utama ini</p>
      </div>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-600">Jumlah User Masuk</p>
          <h3 className="text-2xl font-bold">{jumlahUser}</h3>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-600">Jumlah Transaksi Uang</p>
          <h3 className="text-2xl font-bold">
            {jumlahTransaksi.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-600">Jumlah Event Tambahan</p>
          <h3 className="text-2xl font-bold">{jumlahEvent}</h3>
        </div>
      </div>

      {/* Charts Section */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-3">Prediksi Analisis</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BAR CHART */}
          <div className="bg-gray-100 p-4 rounded-lg min-h-[300px]">
            <p className="font-semibold mb-3">User & Transaksi</p>

            <div className="w-full h-56 bg-white rounded-lg shadow-inner p-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    {
                      name: "User",
                      sekarang: jumlahUser,
                      prediksi: prediksiUser
                    },
                    {
                      name: "Transaksi",
                      sekarang: jumlahTransaksi,
                      prediksi: prediksiTransaksi
                    }
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar dataKey="sekarang" fill="#16a34a" name="Sekarang" />
                  <Bar dataKey="prediksi" fill="#2563eb" name="Prediksi" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PIE CHART */}
          <div className="bg-gray-100 p-4 rounded-lg min-h-[300px]">
            <p className="font-semibold mb-3">Pie Chart</p>

            <div className="w-full h-56 bg-white rounded-lg shadow-inner p-2 flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Event Sekarang", value: jumlahEvent },
                      { name: "Prediksi Event", value: prediksiEvent }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label
                  >
                    <Cell fill="#16a34a" />
                    <Cell fill="#ef4444" />
                  </Pie>

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* SIMPLE PREDIKSI BOX */}
          <div className="bg-gray-100 p-4 rounded-lg min-h-60">
            <p className="font-semibold mb-2">Prediksi Event Lainnya</p>
            <div className="w-full h-40 bg-white rounded-lg shadow-inner flex flex-col justify-center items-center text-center p-4">
              <p className="text-gray-600 text-sm">Event Tambahan Diprediksi</p>
              <p className="text-2xl font-bold text-red-500">
                = {prediksiEvent}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow min-h-[200px]" />
        <div className="bg-white p-6 rounded-xl shadow min-h-[200px]" />
      </div>
    </div>
  );
}

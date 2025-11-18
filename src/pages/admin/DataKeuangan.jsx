export default function DataKeuangan() {
  const hargaList = [
    { label: "Harga Diskon", harga: "2 JT / Orang", canEdit: true },
    { label: "Paket Spesial", harga: "8 JT / Keluarga", canEdit: true },
    { label: "Harga Normal", harga: "5 JT / Orang", canEdit: true },
    { label: "Premium Class", harga: "15 JT / Orang", canEdit: false }
  ];

  const laporan = [
    {
      id: 1,
      email: "User1@gmail.com",
      jenis: "Harga Diskon",
      tanggal: "20 Januari, 2025",
      metode: "Dana"
    },
    {
      id: 2,
      email: "User2@gmail.com",
      jenis: "Premium",
      tanggal: "13 Januari, 2025",
      metode: "Wallet"
    },
    {
      id: 3,
      email: "User1@gmail.com",
      jenis: "Harga Diskon",
      tanggal: "11 Januari, 2025",
      metode: "Dana"
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Transaksi Keuangan</h1>
      <p className="text-gray-600 mb-6">
        Kejujuran harus selalu di utamakan ya
      </p>

      {/* Harga Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 mt-4">
        {hargaList.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow text-center space-y-2"
          >
            <p className="font-semibold">{item.label}</p>
            <h2 className="text-xl font-bold">{item.harga}</h2>

            {item.canEdit ? (
              <button className="px-4 py-1 bg-green-500 text-white rounded-full shadow">
                Rubah Harga
              </button>
            ) : (
              <p className="text-gray-500 text-sm">
                Tidak diperbolehkan merubah
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Laporan Header */}
      <h2 className="text-lg font-semibold mb-2">
        Laporan Transaksi Keuangan dari User
      </h2>

      {/* Dropdown Bulan */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <button className="flex items-center justify-between w-full text-left font-semibold">
          Data Bulan January
          <span>▼</span>
        </button>
      </div>

      {/* List Transaksi */}
      <div className="space-y-4">
        {laporan.map((data) => (
          <div
            key={data.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{data.email}</p>
              <p className="text-sm text-green-600">{data.jenis}</p>
              <p className="text-sm text-gray-500">{data.tanggal}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-1 bg-green-500 text-white rounded-full font-medium">
                {data.metode}
              </span>

              <button className="px-4 py-1 bg-gray-200 rounded-full hover:bg-gray-300 shadow">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

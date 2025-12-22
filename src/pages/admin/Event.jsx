import { useEffect, useState } from "react";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from "../../services/eventService";

export default function CrudEventPage() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    image: null,
    type: "populer"
  });

  const fetchEvents = async () => {
    const data = await getEvents();
    setEvents(data || []);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ✅ EDIT EVENT
  const handleEdit = (e) => {
    setForm({
      title: e.title,
      location: e.location,
      price: e.price,
      image: null,
      type: e.type || "populer"
    });

    if (e.image) {
      setImagePreview(`http://localhost:5000/uploads/${e.image}`);
    } else {
      setImagePreview(null);
    }
    setEditingId(e.id);
    setShowForm(true);
  };

  // ✅ DELETE EVENT
  const handleDelete = async (id) => {
    if (!window.confirm("Hapus event ini?")) return;
    await deleteEvent(id);
    fetchEvents();
  };

  // ✅ CREATE / UPDATE
  const handleSubmit = async () => {
    if (!form.title || !form.location || !form.price) return;

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("location", form.location);
    formData.append("price", form.price);
    formData.append("type", form.type);

    if (form.image) {
      formData.append("image", form.image);
    }

    setLoading(true);

    try {
      if (editingId) {
        await updateEvent(editingId, formData);
      } else {
        await createEvent(formData);
      }

      setShowForm(false);
      setEditingId(null);
      fetchEvents();
      setImagePreview(null);

      setForm({
        title: "",
        location: "",
        price: "",
        image: null,
        type: "populer"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Kelola Event</h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingId(null);
              setImagePreview(null);
              setForm({
                title: "",
                location: "",
                price: "",
                image: null,
                type: "populer"
              });
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-full shadow"
          >
            {showForm ? "Tutup" : "Tambah Event"}
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <div className="bg-white p-4 rounded-xl shadow mb-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Nama Event"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                placeholder="Kota"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="border p-2 rounded"
              />
              <select
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="border p-2 rounded"
              >
                <option value="">Pilih Harga</option>
                {Array.from({ length: 10 }).map((_, i) => (
                  <option key={i} value={(i + 1) * 1000000}>
                    Rp {(i + 1).toLocaleString()} Juta
                  </option>
                ))}
              </select>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  setForm({ ...form, image: file });
                  setImagePreview(URL.createObjectURL(file));
                }}
                className="border p-2 rounded col-span-2"
              />
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="border p-2 rounded col-span-2"
              >
                <option value="rekomendasi">Rekomendasi Wisata</option>
                <option value="lainnya">Tempat Lainnya</option>
                <option value="populer">Wisata Populer</option>
              </select>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {imagePreview && (
                <img
                  src={imagePreview}
                  className="w-24 h-24 rounded object-cover border"
                />
              )}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                {loading
                  ? "Menyimpan..."
                  : editingId
                  ? "Update Event"
                  : "Simpan Event"}
              </button>
            </div>
          </div>
        )}

        {/* LIST EVENT */}
        <div className="bg-white p-4 rounded-xl shadow">
          {events.length === 0 ? (
            <p className="text-center text-gray-500 py-10">Belum ada event</p>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between border-b py-3"
              >
                <div className="flex items-center gap-4">
                  {event.image && (
                    <img
                      src={`http://localhost:5000/uploads/${event.image}`}
                      className="w-24 h-24 rounded object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-gray-500">
                      {event.location} • <b>{event.type}</b>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-green-600 font-medium">
                    Rp {event.price?.toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleEdit(event)}
                    className="px-3 py-1 text-sm bg-yellow-400 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

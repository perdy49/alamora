import * as Event from "../models/eventModel.js";

// GET /events
export const getAllEvents = async (req, res) => {
  const [rows] = await Event.getAllEvents();
  res.json(rows);
};

// GET /events/public
export const getPublicEvents = async (req, res) => {
  const [rows] = await Event.getPublicEvents();
  res.json(rows);
};

// POST /events
export const createEvent = async (req, res) => {
  // ✅ CREATE: simpan NAMA FILE saja (jangan path)
  const image = req.file ? req.file.filename : null;

  await Event.createEvent({
    ...req.body,
    image,
    user_id: req.user.id,
    status: "active"
  });

  res.status(201).json({ message: "Event berhasil dibuat" });
};

// PUT /events/:id
export const updateEvent = async (req, res) => {
  const { id } = req.params;

  // ✅ UPDATE: kalau upload baru → pakai filename
  // ✅ kalau tidak → pakai image lama dari DB
  const image = req.file ? req.file.filename : req.body.image;

  await Event.updateEvent(id, {
    ...req.body,
    image
  });

  res.json({ message: "Event berhasil diupdate" });
};

// DELETE /events/:id
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  await Event.deleteEvent(id);
  res.json({ message: "Event berhasil dihapus" });
};

// GET /events/:id (DETAIL)
export const getEventById = async (req, res) => {
  const { id } = req.params;

  const [rows] = await Event.getEventById(id);

  if (rows.length === 0) {
    return res.status(404).json({ message: "Event tidak ditemukan" });
  }

  res.json(rows[0]);
};

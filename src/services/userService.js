import api from "./api";

// ambil semua user (oleh admin)
export const getUsers = async () => {
  const res = await api.get("/admin/users");
  return res.data;
};

// hapus user (oleh admin)
export const deleteUser = async (id) => {
  const res = await api.delete(`/admin/users/${id}`);
  return res.data;
};

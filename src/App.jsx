import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/admin/Login";
import LayoutAdmin from "./components/admin/layoutAdmin";
import Dashboard from "./pages/admin/Dashboard";
import CrudEventPage from "./pages/admin/Event";
import DataKeuangan from "./pages/admin/DataKeuangan";
import CrudUser from "./pages/admin/KelolaUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/login" />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Layout Admin */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="event" element={<CrudEventPage />} />
          <Route path="transaksi" element={<DataKeuangan />} />
          <Route path="crud_user" element={<CrudUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// src/components/admin/AdminSidebar.jsx
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2 className="admin-logo">SHMB Admin</h2>

      <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/orders">Orders</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/messages">Messages</NavLink>
        <NavLink to="/admin/products">Products</NavLink>
      </nav>
    </aside>
  );
}

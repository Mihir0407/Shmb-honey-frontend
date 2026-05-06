// src/components/admin/AdminDashboard.jsx
import { useEffect, useState } from "react";
import api from "../../api";
import AdminStats from "./AdminStats";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/stats")
      .then(res => setStats(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <>
      <h1>Dashboard</h1>
      <AdminStats stats={stats} />
    </>
    
  );
}

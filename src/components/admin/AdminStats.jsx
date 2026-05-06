// src/components/admin/AdminStats.jsx
export default function AdminStats({ stats }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <p>Total Users</p>
        <h2>{stats.users}</h2>
      </div>

      <div className="stat-card">
        <p>Total Orders</p>
        <h2>{stats.orders}</h2>
      </div>

      <div className="stat-card">
        <p>Total Revenue</p>
        <h2>₹{stats.revenue}</h2>
      </div>
    </div>
  );
}

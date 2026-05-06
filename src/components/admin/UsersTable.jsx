// src/components/admin/UsersTable.jsx
import { useEffect, useState } from "react";
import api from "../../api";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/users")
      .then(res => setUsers(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  const deleteUser = id => {
    if (!window.confirm("Delete this user?")) return;

    api.delete(`/admin/users/${id}`).then(() => {
      setUsers(prev => prev.filter(u => u._id !== id));
    });
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <>
      <h1>Users</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                {u.role !== "admin" && (
                  <button
                    className="danger"
                    onClick={() => deleteUser(u._id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

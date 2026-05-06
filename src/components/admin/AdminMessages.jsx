import { useEffect, useState } from "react";
import api from "../../api";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get("/contact").then(res => setMessages(res.data.data));
  }, []);

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(m => (
          <tr key={m._id}>
            <td>{m.name}</td>
            <td>{m.email}</td>
            <td>{m.phone}</td>
            <td>{m.message}</td>
            <td>{new Date(m.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

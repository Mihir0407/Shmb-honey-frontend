import { useEffect, useState } from "react";
import api from "../../api";
import "./MyOrders.css";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/orders/my-orders")
      .then(res => setOrders(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading your orders...</p>;

  if (orders.length === 0) {
    return <p className="no-orders">You haven’t placed any orders yet.</p>;
  }

  return (
    <div className="my-orders">
      <h2>My Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Delivery</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(o => (
            <tr key={o._id}>
              <td>{o._id.slice(-6)}</td>
              <td>₹{o.amount}</td>
              <td className={o.paymentStatus}>{o.paymentStatus}</td>
              <td>{o.deliveryStatus}</td>
              <td>
                {new Date(o.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

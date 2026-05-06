import { useEffect, useState } from "react";
import api from "../../api";

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/orders")
      .then(res => setOrders(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = (id, status) => {
    api.put(`/orders/${id}/delivery`, { status }).then(() => {
      setOrders(prev =>
        prev.map(o =>
          o._id === id ? { ...o, deliveryStatus: status } : o
        )
      );
    });
  };

  if (loading) return <p>Loading orders...</p>;

  return (
    <>
      <h1>Orders</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Customer Details</th>
            <th>Products</th> {/* ✅ NEW */}
            <th>Amount</th>
            <th>Payment</th>
            <th>Delivery</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(o => {
            const billing = o.billing || {};

            return (
              <tr key={o._id}>
                {/* USER */}
                <td>{o.user?.email || "Guest"}</td>

                {/* CUSTOMER DETAILS */}
                <td className="customer-details">
                  <div><strong>📞 {billing.phone || "N/A"}</strong></div>
                  <div className="address">
                    {[
                      billing.address1,
                      billing.city,
                      billing.state,
                      billing.zip,
                    ]
                      .filter(Boolean)
                      .join(", ") || "Address not provided"}
                  </div>
                </td>

                {/* ✅ PRODUCTS */}
                <td className="order-items">
                  {o.items?.length ? (
                    <ul>
                      {o.items.map((item, i) => (
                        <li key={i}>
                          <strong>{item.title}</strong>

                          {" × "}
                          {item.qty}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "No items"
                  )}
                </td>

                {/* AMOUNT */}
                <td>₹{o.amount}</td>

                {/* PAYMENT */}
                <td className={`status ${o.paymentStatus}`}>
                  {o.paymentStatus}
                </td>

                {/* DELIVERY */}
                <td>
                  <select
                    value={o.deliveryStatus}
                    onChange={e =>
                      updateStatus(o._id, e.target.value)
                    }
                  >
                    <option value="created">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

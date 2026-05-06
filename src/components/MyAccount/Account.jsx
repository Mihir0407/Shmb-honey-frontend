import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import MyOrders from "./MyOrders";
import "./Account.css";

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="account-page container">
      <h1 className="account-title">My Account</h1>

      <div className="account-card">
        <div className="avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        <div className="account-info">
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>

          <p className="desc">
            Welcome to your SHMB Honey account.
          </p>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* 🔥 MY ORDERS SECTION */}
      <MyOrders />
    </div>
  );
}

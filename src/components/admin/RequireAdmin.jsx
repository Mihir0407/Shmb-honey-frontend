import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api"; // uses your existing api.js

export default function RequireAdmin() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let mounted = true;

    api
      .get("/auth/me")
      .then((res) => {
        if (!mounted) return;

        if (res.data?.user?.role === "admin") {
          setStatus("allowed");
        } else {
          setStatus("denied");
        }
      })
      .catch(() => {
        if (mounted) setStatus("denied");
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (status === "loading") {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h3>Checking admin access…</h3>
      </div>
    );
  }

  if (status === "denied") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

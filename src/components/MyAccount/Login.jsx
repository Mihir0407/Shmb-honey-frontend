import React, { useState } from "react";
import api from "../../api"; // ❌ remove setAuthToken
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ✅ ADD
import "./Auth.css";

export default function Login({ onModeChange }) {
  const { login } = useAuth(); // ✅ hook at top level
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      const { token } = res.data;

      await login(token);

      // 🔥 CHECK ROLE FROM BACKEND
      const me = await api.get("/auth/me");

      if (me.data.user.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/account-details", { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-account-page container">
      <h1 className="auth-title">Login</h1>

      <div className="auth-card">
        <form onSubmit={submit} className="auth-form" noValidate>
          <label className="input-label">
            Email address <span className="required">*</span>
          </label>
          <input
            className="auth-input"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            autoComplete="username"
            required
          />

          <label className="input-label">
            Password <span className="required">*</span>
          </label>
          <div className="password-wrap">
            <input
              className="auth-input"
              type={show ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Your password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShow((s) => !s)}
              aria-label="Toggle password"
            >
              {show ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="form-row">
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </button>

            <label className="remember">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={onChange}
              />
              Remember me
            </label>
          </div>

          <div className="links-row">
            <a href="/forgot-password" className="link-muted">
              Lost your password?
            </a>

            <span>
              New here?{" "}
              <button
                type="button"
                className="signup-link"
                onClick={() =>
                  onModeChange ? onModeChange("signup") : navigate("/signup")
                }
              >
                Create an account
              </button>
            </span>
          </div>

          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}

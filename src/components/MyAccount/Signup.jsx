import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Auth.css";

export default function Signup({ onModeChange }) {
  const { login } = useAuth(); // ✅ hook at top level
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });
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

    if (!form.agree) {
      setError("You must agree to the Privacy Policy and Terms.");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        agree: form.agree,
      });

      const { token } = res.data;

      await login(token); // ✅ updates navbar
      navigate("/account-details", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-account-page container">
      <h1 className="auth-title">Create account</h1>

      <div className="auth-card">
        <form onSubmit={submit} className="auth-form" noValidate>
          <label className="input-label">Full name</label>
          <input
            className="auth-input"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            autoComplete="name"
          />

          <label className="input-label">
            Email address <span className="required">*</span>
          </label>
          <input
            className="auth-input"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label className="input-label">
            Password <span className="required">*</span>
          </label>
          <input
            className="auth-input"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Choose a password"
            autoComplete="new-password"
            required
          />

          <div className="form-row">
            <label className="remember">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={onChange}
              />
              I agree to the{" "}
              <a href="/privacy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>{" "}
              &{" "}
              <a href="/terms" target="_blank" rel="noreferrer">
                Terms
              </a>
            </label>
          </div>

          <div className="form-row">
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Creating..." : "Sign up"}
            </button>
          </div>

          <div className="links-row">
            <span>
              Already have an account?{" "}
              <button
                type="button"
                className="signup-link"
                onClick={() =>
                  onModeChange
                    ? onModeChange("login")
                    : navigate("/login")
                }
              >
                Login
              </button>
            </span>
          </div>

          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}

// src/pages/Login.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLoggedInUser } from "../services/userService"; // ✅ NEW

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
      } else {
        // ✅ token store
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // ✅ user ko central userService ke through store karo
        if (data.user) {
          setLoggedInUser({
            name: data.user.name,
            email: data.user.email,
          });
        }

        // ✅ dashboard pe redirect
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Network error, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center mb-2">Login</h1>

        {error && (
          <p className="text-xs text-red-600 bg-red-50 p-2 rounded">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-xs text-center mt-2">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-orange-600 font-semibold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

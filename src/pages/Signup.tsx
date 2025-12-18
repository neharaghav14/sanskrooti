// src/pages/Signup.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          phone: phone || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
      } else {
        // signup success → login page pe bhej do
        navigate("/login");
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
        <h1 className="text-2xl font-bold text-center mb-2">Create Account</h1>

        {error && (
          <p className="text-xs text-red-600 bg-red-50 p-2 rounded">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
          <label className="block text-sm mb-1">Phone (optional)</label>
          <input
            type="tel"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-700 text-white py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-xs text-center mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

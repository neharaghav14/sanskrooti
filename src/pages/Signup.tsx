import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // later: add real signup logic
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center mb-2">Create Account</h1>

        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone (optional)</label>
          <input
            type="tel"
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-700 text-white py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition"
        >
          Sign Up
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

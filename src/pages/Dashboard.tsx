import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, UserStats } from "../services/userService";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login", { replace: true });
        return;
      }

      const u = await getUser();
      if (!u) {
        navigate("/login", { replace: true });
        return;
      }

      setUser(u);
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name} 👋</h1>
      <p className="text-slate-600">This is your dashboard</p>
    </div>
  );
};

export default Dashboard;

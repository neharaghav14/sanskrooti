import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser, UserStats } from "../services/userService";
import { addQuizResult } from "../services/userService";

const Dashboard = () => {
  const [user, setUser] = useState<UserStats | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  if (!user) return null;

  const progress = Math.min((user.quizzesCompleted / 10) * 100, 100);

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-center">
          Welcome, {user.name} 👋
        </h1>
        <p className="text-center text-slate-600 mb-10">
          Your learning journey so far
        </p>

        {/* Stats */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Quizzes Completed" value={user.quizzesCompleted} icon="🧠" />
          <StatCard title="Total Score" value={user.totalScore} icon="⭐" />
          <StatCard title="Badges" value={user.badges.length} icon="🏆" />
        </section>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h2 className="font-semibold mb-3">Progress</h2>
          <div className="w-full bg-slate-200 h-3 rounded-full">
            <div
              className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-2 text-slate-600">{progress.toFixed(0)}%</p>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h2 className="font-semibold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-2">
            {user.badges.length === 0 ? (
              <p className="text-slate-500 text-sm">
                Complete quizzes to earn badges
              </p>
            ) : (
              user.badges.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm"
                >
                  🏅 {b}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="text-center">
          <Link
            to="/quiz"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-500"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }: any) => (
  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <h2 className="text-xl font-bold">{value}</h2>
    <p className="text-slate-600 text-sm">{title}</p>
  </div>
);

export default Dashboard;

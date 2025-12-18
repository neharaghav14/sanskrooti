// src/pages/Stories.tsx
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">
        Stories of Sanskrooti
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Krishna & Sudama */}
        <Link
          to="/stories/krishna"
          className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            Krishna & Sudama
          </h2>
          <p className="text-slate-700">
            A story of true friendship beyond wealth and status.
          </p>
        </Link>

        {/* Rani Lakshmibai */}
        <Link
          to="/stories/lakshmibai"
          className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Rani Lakshmibai
          </h2>
          <p className="text-slate-700">
            The brave queen of Jhansi who fought fearlessly for freedom.
          </p>
        </Link>

        {/* Ramayana */}
        <Link
          to="/stories/ramayana"
          className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            Ramayana
          </h2>
          <p className="text-slate-700">
            An epic that teaches dharma, loyalty, sacrifice, and truth.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Stories; // ✅ important

import { useNavigate, useParams } from "react-router-dom";

const ExploreCategory = () => {
  const navigate = useNavigate();
  const { category } = useParams();  // ✅ READ URL PARAMS

  const categories = [
    { id: "gods", label: "Gods", emoji: "🕉️" },
    { id: "food", label: "Food", emoji: "🍛" },
    { id: "places", label: "Places", emoji: "🏛️" },
    { id: "festivals", label: "Festivals", emoji: "🎉" },
    { id: "history", label: "History", emoji: "📜" },
    { id: "rituals", label: "Rituals", emoji: "🪔" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent mb-4">
            Explore Categories
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover fascinating facts about Indian culture, mythology, and traditions
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => navigate(`/facts/${cat.id}`)}  // ✅ FIXED: Added backticks + /facts/
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 hover:border-emerald-200 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl group-hover:animate-bounce">{cat.emoji}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-slate-500">Learn & Quiz</p>
                </div>
                <div className="w-full h-1 bg-slate-200 rounded-full group-hover:bg-emerald-400 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategory;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================= HERO IMAGES ================= */
const heroImages = [
  "/krishna.jpg",
  "/food.jpg",
  "/place.jpg",
  "/festival.jpg",
];

/* ================= CATEGORIES ================= */
const categories = [
  { id: "gods", name: "Gods", image: "/krishna.jpg" },
  { id: "food", name: "Food", image: "/food.jpg" },
  { id: "places", name: "Places", image: "/place.jpg" },
  { id: "festivals", name: "Festivals", image: "/festival.jpg" },
  { id: "history", name: "History", image: "/lakshmibai.jpg" },
  { id: "rituals", name: "Rituals", image: "/ritual.jpg" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  /* ================= HERO SLIDER ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImages[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
            Explore the Soul of India
          </h1>

          <p className="text-white max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
            Sanskrooti is a cultural journey into India’s gods, food, festivals,
            sacred places, history and rituals — through stories, visuals and quizzes.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/explore"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-500 transition"
            >
              Start Exploring
            </Link>

            <Link
              to="/stories"
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Read Stories
            </Link>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {heroImages.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${current === i ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT IS SANSKROOTI ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              What is <span className="text-orange-600">Sanskrooti</span>?
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sanskrooti is not just a quiz platform. It is a modern digital space to rediscover India’s ancient wisdom, traditions and cultural roots.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Learn through stories. Explore visually. Play quizzes. Track your journey. Earn cultural badges.
            </p>
          </div>

          <img
            src="/krishna.jpg"
            alt="Indian Culture"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= WHY SANSKROOTI ================= */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-16 text-slate-800">
            Why Choose Sanskrooti?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🕉️", title: "Authentic Culture", text: "Rooted in real traditions" },
              { icon: "🧠", title: "Gamified Learning", text: "Learn through quizzes" },
              { icon: "🎨", title: "Beautiful Design", text: "Modern & cultural UI" },
              { icon: "📚", title: "For Everyone", text: "Students & explorers" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-24 bg-white">
        <h2 className="text-center text-4xl font-bold mb-14 bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
          Explore Categories
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/facts/${cat.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-slate-800">{cat.name}</h3>
                <p className="text-sm text-slate-500 mt-1">Learn • Explore • Quiz</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CULTURAL QUOTE ================= */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <p className="text-3xl md:text-4xl font-semibold mb-4">“संस्कृति ही राष्ट्र की आत्मा है”</p>
        <p className="text-slate-300 text-lg">Culture is the soul of a nation.</p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Begin Your Cultural Journey</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Explore facts, stories, quizzes and traditions of India — all in one beautiful platform.
        </p>

        <Link
          to="/explore"
          className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition"
        >
          Explore Now →
        </Link>
      </section>
    </div>
  );
};

export default Home;

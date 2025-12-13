import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Hero images
import img1 from "../assets/krishna.jpg";
import img2 from "../assets/food.jpg";
import img3 from "../assets/place.jpg";
import img4 from "../assets/festival.jpg";

// Category images
import godImg from "../assets/krishna.jpg";
import foodImg from "../assets/food.jpg";
import placeImg from "../assets/place.jpg";
import festivalImg from "../assets/festival.jpg";
import historyImg from "../assets/lakshmibai.jpg";
import ritualImg from "../assets/ritual.jpg";

const heroImages = [img1, img2, img3, img4];

const categories = [
  { id: "gods", name: "Gods", image: godImg },
  { id: "food", name: "Food", image: foodImg },
  { id: "places", name: "Places", image: placeImg },
  { id: "festivals", name: "Festivals", image: festivalImg },
  { id: "history", name: "History", image: historyImg },
  { id: "rituals", name: "Rituals", image: ritualImg },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* 🔥 HERO – FULL SCREEN */}
      <section
        className="relative h-screen w-full flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroImages[current]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Explore the Soul of India
          </h1>

          <p className="text-white max-w-xl mx-auto mb-6">
            Discover Indian culture, heritage, and traditions with fun facts,
            quizzes, and interactive visuals.
          </p>

          <Link
            to="/quiz"
            className="bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-500 transition"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* 🌸 EXPLORE CATEGORIES (NOW WILL SHOW) */}
      <section className="py-20 bg-slate-50">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          Explore Categories
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/explore/${cat.id}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-44 w-full object-cover"
              />
              <div className="p-4 text-center font-semibold">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default Home;

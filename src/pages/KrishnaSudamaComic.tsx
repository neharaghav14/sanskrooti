// src/pages/KrishnaSudamaComic.tsx
import { Link } from "react-router-dom";

const KrishnaSudamaComic = () => {
  return (
    <div className="bg-[#FFF7ED] w-full">
      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">Krishna & Sudama</h1>
        <p className="text-xl max-w-3xl mx-auto">
          A timeless friendship that teaches today’s generation
          what truly matters in life.
        </p>
      </section>

      {/* PANEL 1 */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img src="/ashram.jpg" className="rounded-3xl shadow-2xl" alt="Ashram" />
        <div>
          <h3 className="text-orange-600 font-bold text-xl mb-3">
            🌱 Panel 1: Childhood Friends
          </h3>
          <p className="text-lg leading-relaxed">
            Krishna and Sudama studied together as children.
            They laughed, learned, and lived equally —
            unaware of what the future held.
          </p>
        </div>
      </section>

      {/* PANEL 2 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-orange-600 font-bold text-xl mb-3">
              🧺 Panel 2: A Poor Man’s Gift
            </h3>
            <p className="text-lg leading-relaxed">
              Years later, Sudama lived in poverty.
              With nothing but love, he carried a small bag of beaten rice
              to meet his old friend.
            </p>
          </div>
          <img
            src="/sudama.jpg"
            className="rounded-3xl shadow-2xl"
            alt="Sudama walking with gift"
          />
        </div>
      </section>

      {/* PANEL 3 */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/krishna.jpg"
          className="rounded-3xl shadow-2xl"
          alt="Krishna welcoming Sudama"
        />
        <div>
          <h3 className="text-orange-600 font-bold text-xl mb-3">
            👑 Panel 3: No Rich, No Poor
          </h3>
          <p className="text-lg leading-relaxed">
            Krishna — the king of Dwarka —
            ran barefoot to welcome Sudama.
            He washed his friend’s feet with love.
          </p>
        </div>
      </section>

      {/* PANEL 4 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-orange-600 font-bold text-xl mb-3">
              🏰 Panel 4: Silent Blessing
            </h3>
            <p className="text-lg leading-relaxed">
              Sudama never asked for wealth.
              Yet Krishna understood his pain —
              and blessed him silently.
            </p>
          </div>
          <img
            src="/dwarka.jpg"
            className="rounded-3xl shadow-2xl"
            alt="Dwarka palace"
          />
        </div>
      </section>

      {/* MORAL PANEL */}
      <section className="bg-orange-100 py-24 text-center px-6">
        <h2 className="text-4xl font-extrabold text-orange-700 mb-6">
          💡 Lesson for Today’s Generation
        </h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          In today’s world of reels, likes, and money —
          this story reminds us:
          <br />
          <span className="font-bold text-orange-600">
            Real friendship is about loyalty, respect, and heart —
            not status or bank balance.
          </span>
        </p>
      </section>

      {/* BACK */}
      <div className="text-center pb-20">
        <Link
          to="/stories"
          className="inline-block bg-orange-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
        >
          ← Back to Stories
        </Link>
      </div>
    </div>
  );
};

export default KrishnaSudamaComic;

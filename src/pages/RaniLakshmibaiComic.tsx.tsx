// src/pages/RaniLakshmibaiComic.tsx
import { Link } from "react-router-dom";

const RaniLakshmibaiComic = () => {
  return (
    <div className="bg-[#FFF7ED] w-full">
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">Rani Lakshmibai</h1>
        <p className="text-xl max-w-3xl mx-auto">
          India's bravest queen who fought for freedom
          against all odds.
        </p>
      </section>

      {/* PANEL 1 */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/lakshmibai-young.jpg"
          className="rounded-3xl shadow-2xl"
          alt="Young Lakshmibai"
        />
        <div>
          <h3 className="text-red-600 font-bold text-xl mb-3">
            🏰 Panel 1: The Warrior Princess
          </h3>
          <p className="text-lg leading-relaxed">
            Born as Manikarnika, she trained in horse riding,
            sword fighting, and archery from childhood.
          </p>
        </div>
      </section>

      {/* PANEL 2 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-red-600 font-bold text-xl mb-3">
              ⚔️ Panel 2: Queen of Jhansi
            </h3>
            <p className="text-lg leading-relaxed">
              Married to Maharaja Gangadhar Rao, she became
              Rani Lakshmibai. When her son died young,
              the British tried to annex Jhansi.
            </p>
          </div>
          <img
            src="/jhansi-fort.jpg"
            className="rounded-3xl shadow-2xl"
            alt="Jhansi Fort"
          />
        </div>
      </section>

      {/* PANEL 3 */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/lakshmibai-horse.jpg"
          className="rounded-3xl shadow-2xl"
          alt="Rani on horseback"
        />
        <div>
          <h3 className="text-red-600 font-bold text-xl mb-3">
            🔥 Panel 3: The 1857 Revolt
          </h3>
          <p className="text-lg leading-relaxed">
            Leading thousands of soldiers, she fought the British
            army fiercely, becoming a symbol of resistance.
          </p>
        </div>
      </section>

      {/* PANEL 4 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-red-600 font-bold text-xl mb-3">
              🕊️ Panel 4: Immortal Legacy
            </h3>
            <p className="text-lg leading-relaxed">
              Wounded but unbroken, her spirit never surrendered.
              Today she remains India's eternal symbol of courage.
            </p>
          </div>
          <img
            src="/lakshmibai-statue.jpg"
            className="rounded-3xl shadow-2xl"
            alt="Rani Statue"
          />
        </div>
      </section>

      {/* MORAL PANEL */}
      <section className="bg-red-100 py-24 text-center px-6">
        <h2 className="text-4xl font-extrabold text-red-700 mb-6">
          💪 Lesson for Today
        </h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          In a world that tests your limits daily —
          <br />
          <span className="font-bold text-red-600">
            Fight for what you believe in, no matter the odds.
          </span>
        </p>
      </section>

      {/* BACK */}
      <div className="text-center pb-20">
        <Link
          to="/stories"
          className="inline-block bg-red-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        >
          ← Back to Stories
        </Link>
      </div>
    </div>
  );
};

export default RaniLakshmibaiComic;

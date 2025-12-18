// src/pages/RamayanaComic.tsx
import { Link } from "react-router-dom";

const RamayanaComic = () => {
  return (
    <div className="bg-[#FFF7ED] w-full">
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">Ramayana</h1>
        <p className="text-xl max-w-3xl mx-auto">
          The epic journey of duty, love, and righteousness.
        </p>
      </section>

      {/* PANEL 1 */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/rama-sita.jpg"
          className="rounded-3xl shadow-2xl"
          alt="Rama and Sita"
        />
        <div>
          <h3 className="text-purple-600 font-bold text-xl mb-3">
            👑 Panel 1: The Perfect Prince
          </h3>
          <p className="text-lg leading-relaxed">
            Rama, the eldest prince of Ayodhya, embodied
            dharma perfectly. He married Sita after winning
            her swayamvara.
          </p>
        </div>
      </section>

      {/* PANEL 2 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-purple-600 font-bold text-xl mb-3">
              🌲 Panel 2: Exile Begins
            </h3>
            <p className="text-lg leading-relaxed">
              Due to Kaikeyi's boon, Rama accepted 14 years
              of forest exile without complaint, accompanied
              by Sita and his brother Lakshmana.
            </p>
          </div>
          <img
            src="/forest-exile.jpg"
            className="rounded-3xl shadow-2xl"
            alt="Forest Exile"
          />
        </div>
      </section>

      {/* PANEL 3 */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/hanuman-ravana.jpg"
          className="rounded-3xl shadow-2xl"
          alt="Hanuman and Ravana"
        />
        <div>
          <h3 className="text-purple-600 font-bold text-xl mb-3">
            🐒 Panel 3: The Monkey Army
          </h3>
          <p className="text-lg leading-relaxed">
            Hanuman found Sita in Lanka. Rama allied with
            Sugriva's monkey army to build the bridge to
            Ravana's island.
          </p>
        </div>
      </section>

      {/* PANEL 4 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-purple-600 font-bold text-xl mb-3">
              ⚔️ Panel 4: Victory of Dharma
            </h3>
            <p className="text-lg leading-relaxed">
              Rama defeated Ravana in an epic battle.
              Sita proved her purity through fire.
              Dharma finally triumphed.
            </p>
          </div>
          <img
            src="/rama-victory.jpg"
            className="rounded-3xl shadow-2xl"
            alt="Rama's Victory"
          />
        </div>
      </section>

      {/* MORAL PANEL */}
      <section className="bg-purple-100 py-24 text-center px-6">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-6">
          📜 Timeless Lessons
        </h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          Duty over desire. Loyalty over convenience. Truth over comfort.
          <br />
          <span className="font-bold text-purple-600">
            Live by dharma, and every battle becomes meaningful.
          </span>
        </p>
      </section>

      {/* BACK */}
      <div className="text-center pb-20">
        <Link
          to="/stories"
          className="inline-block bg-purple-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          ← Back to Stories
        </Link>
      </div>
    </div>
  );
};

export default RamayanaComic;

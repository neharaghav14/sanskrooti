// src/pages/FactsPage.tsx
import { useParams, useNavigate } from "react-router-dom";

type Fact = {
  id: number;
  category: string; // "gods" | "food" | "places" | "festivals" | "history" | "rituals"
  title: string;
  text: string;
};

const ALL_FACTS: Fact[] = [
  // GODS
  {
    id: 1,
    category: "gods",
    title: "Remover of Obstacles",
    text: "Lord Ganesha is revered as the remover of obstacles and the god of beginnings, so many rituals start with his worship.",
  },
  {
    id: 2,
    category: "gods",
    title: "Preserver of the Universe",
    text: "Lord Vishnu is seen as the preserver who maintains cosmic balance, often appearing as avatars like Rama and Krishna.",
  },
  {
    id: 3,
    category: "gods",
    title: "Destroyer and Transformer",
    text: "Lord Shiva represents destruction and transformation, clearing the way for new creation and spiritual growth.",
  },

  // FOOD
  {
    id: 4,
    category: "food",
    title: "Diverse Regional Cuisines",
    text: "Indian cuisine changes dramatically from region to region, from idli–dosa in the south to parathas and chole in the north.",
  },
  {
    id: 5,
    category: "food",
    title: "Prasad as Blessing",
    text: "Food offered to a deity during worship becomes prasad, symbolising the sharing of divine blessings with devotees.",
  },
  {
    id: 6,
    category: "food",
    title: "Spices with Purpose",
    text: "Common spices like turmeric, cumin, and coriander are used not only for flavour but also for their traditional health benefits.",
  },

  // PLACES
  {
    id: 7,
    category: "places",
    title: "Sacred Rivers",
    text: "Rivers such as the Ganga and Yamuna are considered sacred, and many pilgrimage towns are built along their banks.",
  },
  {
    id: 8,
    category: "places",
    title: "Ancient Temple Architecture",
    text: "Temples in regions like Khajuraho, Hampi, and Konark show highly detailed stone carvings and advanced ancient engineering.",
  },
  {
    id: 9,
    category: "places",
    title: "Four Dhams",
    text: "Char Dham sites like Badrinath, Dwarka, Puri, and Rameswaram are major pilgrimage destinations for many devotees.",
  },

  // FESTIVALS
  {
    id: 10,
    category: "festivals",
    title: "Festival of Lights",
    text: "Diwali is celebrated with lamps, sweets, and fireworks to signify the victory of light over darkness and good over evil.",
  },
  {
    id: 11,
    category: "festivals",
    title: "Colours of Joy",
    text: "Holi uses coloured powders and water to celebrate joy, togetherness, and the arrival of spring.",
  },
  {
    id: 12,
    category: "festivals",
    title: "Harvest Celebrations",
    text: "Festivals like Pongal, Baisakhi, and Onam mark the harvest season and thank nature for abundance.",
  },

  // HISTORY
  {
    id: 13,
    category: "history",
    title: "Ancient Universities",
    text: "Centres like Takshashila and Nalanda were famous in ancient times, attracting students from many regions.",
  },
  {
    id: 14,
    category: "history",
    title: "Empires and Dynasties",
    text: "Dynasties such as the Maurya and Gupta empires made major contributions in governance, art, and science.",
  },
  {
    id: 15,
    category: "history",
    title: "Freedom Movement",
    text: "The Indian independence movement involved many leaders and mass movements that finally ended colonial rule in 1947.",
  },

  // RITUALS
  {
    id: 16,
    category: "rituals",
    title: "Lighting the Diya",
    text: "Lighting an oil lamp or diya is believed to remove darkness and invite positive energy during prayers.",
  },
  {
    id: 17,
    category: "rituals",
    title: "Aarti Tradition",
    text: "Aarti uses a flame moved in circular motions before the deity, symbolising devotion and surrender.",
  },
  {
    id: 18,
    category: "rituals",
    title: "Sacred Threads and Tilak",
    text: "Wearing a tilak or sacred thread in rituals often represents blessings, protection, and spiritual focus.",
  },
];

const categoryLabels: Record<string, string> = {
  gods: "Gods",
  food: "Food",
  places: "Places",
  festivals: "Festivals",
  history: "History",
  rituals: "Rituals",
};

const FactsPage = () => {
  const { category = "gods" } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  const facts = ALL_FACTS.filter((fact) => fact.category === category);
  const heading =
    categoryLabels[category] ??
    category.charAt(0).toUpperCase() + category.slice(1);

  const hasFacts = facts.length > 0;

  const handleStartQuiz = () => {
    navigate(`/quiz/${category}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-800 bg-clip-text text-transparent mb-4">
            {heading} Facts
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Scroll through interesting facts about {heading.toLowerCase()} and
            test your knowledge with our quiz!
          </p>
        </div>

        {/* Facts Grid */}
        {hasFacts ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
            {facts.map((fact) => (
              <div
                key={fact.id}
                className="group relative rounded-3xl p-8 shadow-xl border border-white/50 bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {fact.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {fact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-12 text-center text-slate-600">
            No facts found for this category.
          </div>
        )}

        {/* Quiz CTA */}
        <div className="flex justify-center">
          <button
            onClick={handleStartQuiz}
            className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors"
          >
            Start {heading} Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default FactsPage;

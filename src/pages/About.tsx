const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 
        bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
        About Sanskrooti
      </h1>

      {/* Intro */}
      <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        Sanskrooti is a modern cultural learning platform designed to reconnect
        people with India’s rich heritage, ancient wisdom, and vibrant traditions
        in a fun, interactive, and meaningful way.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-orange-700 mb-3">
            🌏 Explore Culture
          </h3>
          <p className="text-slate-600">
            Discover gods, festivals, food, sacred places, rituals, and history
            through beautifully curated facts.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-orange-700 mb-3">
            🧠 Learn by Playing
          </h3>
          <p className="text-slate-600">
            Gamified quizzes, badges, and progress tracking make learning
            enjoyable for all age groups.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-orange-700 mb-3">
            ✨ Tradition Meets Tech
          </h3>
          <p className="text-slate-600">
            A perfect blend of tradition and modern design, bringing ancient
            culture to today’s digital world.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;

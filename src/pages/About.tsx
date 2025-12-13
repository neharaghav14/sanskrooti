const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-transparent bg-clip-text">
        About Sanskrooti
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-slate-700 mb-12 text-center leading-relaxed">
        Sanskrooti is a modern and interactive platform that celebrates India's
        culture, heritage and traditions using facts, quizzes, stories and
        stunning visuals.
      </p>

      {/* Mission Box */}
      <div className="bg-white border border-orange-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-10">
        <h2 className="text-2xl font-semibold mb-4 text-center text-orange-700">
          Our Mission
        </h2>
        <p className="text-base md:text-lg text-slate-700 text-center leading-relaxed">
          To make learning about India fun, simple and gamified for students,
          cultural enthusiasts and curious minds of all ages through playful,
          interactive and visually appealing experiences.
        </p>
      </div>
    </div>
  );
};

export default About;

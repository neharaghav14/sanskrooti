import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuiz, Question, Difficulty } from "../services/api";
import { addQuizResult, QuizResult } from '../services/userService';

type QuizState = "loading" | "ready" | "finished" | "error";

const QuizPage = () => {
  const { category = "gods" } = useParams<{ category: string }>();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [status, setStatus] = useState<QuizState>("loading");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [answers, setAnswers] = useState<{ questionId: string; selectedOption: number }[]>([]);

  // Load quiz on category/difficulty change
  useEffect(() => {
    setStatus("loading");
    fetchQuiz(category, difficulty)
      .then((data) => {
        setQuestions(data);
        setCurrentIndex(0);
        setScore(0);
        setSelected(null);
        setAnswers([]);
        setStatus(data.length ? "ready" : "error");
      })
      .catch(() => setStatus("error"));
  }, [category, difficulty]);

  // Save result when finished
  useEffect(() => {
    if (status === "finished") {
      const result: QuizResult = {
        quizId: `${category}-${difficulty}-${Date.now()}`,
        score,
        answers,
      };
      addQuizResult(result).catch(console.error);
    }
  }, [status, score, answers, category, difficulty]);

  const current = questions[currentIndex];

  const handleOptionClick = (id: number) => {
    setSelected(id);
  };

  const handleNext = () => {
    if (!current || selected === null) return;

    // Save answer (convert questionId to string to fix TS error)
    setAnswers((prev) => [
      ...prev,
      { questionId: current.id.toString(), selectedOption: selected },
    ]);

    // Update score
    if (selected === current.correctOptionId) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or finish
    if (currentIndex === questions.length - 1) {
      setStatus("finished");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">Loading quiz...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-red-500">
          Could not load quiz. Please try again later.
        </p>
      </div>
    );
  }

  if (status === "finished") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8 text-center">
          <h1 className="text-2xl font-semibold mb-4">
            {category.toUpperCase()} Quiz ({difficulty})
          </h1>
          <p className="text-lg mb-2">
            You scored <b>{score}</b> out of <b>{questions.length}</b>
          </p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setSelected(null);
              setAnswers([]);
              setStatus("ready");
            }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-white font-medium hover:bg-emerald-600"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // Quiz UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        {/* Header */}
        <header className="mb-4">
          <p className="text-xs font-medium text-emerald-600">{category.toUpperCase()} Quiz</p>

          <div className="mt-2 flex gap-2">
            {(["easy", "medium", "hard"] as Difficulty[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setDifficulty(lvl)}
                className={`flex-1 rounded-full border px-2 py-1 text-xs font-medium capitalize ${
                  difficulty === lvl
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-3">
            <h1 className="text-lg font-semibold">
              Question {currentIndex + 1} of {questions.length}
            </h1>
            <span className="text-xs text-slate-500">Score: {score}</span>
          </div>

          <div className="mt-3 h-1.5 bg-slate-100 rounded-full">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </header>

        <p className="mb-4 text-slate-800">{current.text}</p>

        <div className="space-y-2">
          {current.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`w-full rounded-full border px-4 py-2 text-left text-sm transition ${
                selected === option.id
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-slate-200 bg-slate-50 hover:bg-slate-100"
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selected === null}
          className="mt-6 w-full rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white disabled:bg-emerald-200"
        >
          {currentIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;

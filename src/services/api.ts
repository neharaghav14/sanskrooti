// src/services/api.ts

export type Difficulty = "easy" | "medium" | "hard";

export type Option = {
  id: number;
  text: string;
};

export type Question = {
  id: number;
  category: string;
  difficulty: Difficulty;
  text: string;
  options: Option[];
  correctOptionId: number;
};

/**
 * IMPORTANT:
 * API base URL comes ONLY from Vercel environment variable
 * No localhost in production
 */
const API_BASE = import.meta.env.VITE_API_BASE as string;

if (!API_BASE) {
  throw new Error("VITE_API_BASE is not defined");
}

export const fetchQuiz = async (
  category: string,
  difficulty: Difficulty
): Promise<Question[]> => {
  const res = await fetch(
    `${API_BASE}/quiz/${category}?difficulty=${difficulty}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Could not load quiz");
  }

  return res.json();
};

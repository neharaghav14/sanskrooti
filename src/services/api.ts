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

const API_BASE = "http://localhost:4000/api";

export const fetchQuiz = async (category: string, difficulty: Difficulty) => {
  const res = await fetch(
    `${API_BASE}/quiz/${category}?difficulty=${difficulty}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch quiz for ${category}`);
  }
  return (await res.json()) as Question[];
};

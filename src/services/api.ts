export type Option = {
  id: number;
  text: string;
};

export type Question = {
  id: number;
  category: string;
  text: string;
  options: Option[];
  correctOptionId: number;
};

const BASE_URL = "http://localhost:4000/api";

export async function fetchQuiz(category: string): Promise<Question[]> {
  const res = await fetch(`${BASE_URL}/quiz/${category}`);
  if (!res.ok) {
    throw new Error("Failed to fetch quiz");
  }
  return res.json();
}

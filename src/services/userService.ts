// src/services/userService.ts
import axios from "axios";

// ------------------- Types -------------------
export interface UserStats {
  name: string;
  email: string;
}

export interface QuizResult {
  quizId: string;
  score: number;
  answers: any[]; // adjust type if you have a specific answer structure
}

// ------------------- User Functions -------------------

// Get currently logged-in user from backend using token from localStorage
export const getUser = async (): Promise<UserStats | null> => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const res = await axios.get<UserStats>("https://your-backend.com/api/user/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err: unknown) {
    if (err instanceof Error) console.error(err.message);
    else console.error(err);
    return null;
  }
};

// Save user token in localStorage (login)
export const setLoggedInUser = (user: { name: string; email: string; token?: string }) => {
  if (user.token) {
    localStorage.setItem("token", user.token);
  }
};

// Clear user token from localStorage (logout)
export const clearUser = () => {
  localStorage.removeItem("token");
};

// ------------------- Quiz Functions -------------------

// Add a quiz result for the logged-in user
export const addQuizResult = async (result: QuizResult) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("User not logged in");

  try {
    const res = await axios.post(
      "https://your-backend.com/api/quiz/result",
      result,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (err: unknown) {
    if (err instanceof Error) console.error(err.message);
    else console.error(err);
    throw err;
  }
};

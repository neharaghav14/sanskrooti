// src/services/userService.ts
import axios from "axios";

// ------------------- API BASE -------------------
const API_BASE = import.meta.env.VITE_API_BASE as string;

if (!API_BASE) {
  throw new Error("VITE_API_BASE is not defined");
}

// ------------------- Types -------------------
export interface UserStats {
  name: string;
  email: string;
}

export interface QuizResult {
  quizId: string;
  score: number;
  answers: any[];
}

// ------------------- Auth Helpers -------------------
const getToken = () => localStorage.getItem("token");

// ------------------- User Functions -------------------
export const getUser = async (): Promise<UserStats | null> => {
  const token = getToken();
  if (!token) return null;

  try {
    const res = await axios.get<UserStats>(`${API_BASE}/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Failed to fetch user", err);
    return null;
  }
};

export const setLoggedInUser = (user: {
  name: string;
  email: string;
  token?: string;
}) => {
  if (user.token) {
    localStorage.setItem("token", user.token);
  }
};

export const clearUser = () => {
  localStorage.removeItem("token");
};

// ------------------- Quiz Result -------------------
export const addQuizResult = async (result: QuizResult) => {
  const token = getToken();
  if (!token) throw new Error("User not logged in");

  const res = await axios.post(`${API_BASE}/quiz/result`, result, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// src/services/userService.ts
import { fetchQuiz, Question, Difficulty, Option } from "../services/api";

export type UserStats = {
  name: string;
  email?: string;
  quizzesCompleted: number;
  totalScore: number;
  badges: string[];
};

const USER_KEY = "sanskrooti_user";

// ✅ Login ke baad jo user store karoge, usi ko read karega
export const getUser = (): UserStats => {
  const stored = localStorage.getItem(USER_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);

      const user: UserStats = {
        name: parsed.name ?? "Guest User",
        email: parsed.email,
        quizzesCompleted: parsed.quizzesCompleted ?? 0,
        totalScore: parsed.totalScore ?? 0,
        badges: parsed.badges ?? [],
      };

      return user;
    } catch {
      // agar parse fail ho gaya to niche default user create karenge
    }
  }

  // default user (agar login nahi hua / corrupt data)
  const defaultUser: UserStats = {
    name: "Guest User",
    quizzesCompleted: 0,
    totalScore: 0,
    badges: [],
  };

  localStorage.setItem(USER_KEY, JSON.stringify(defaultUser));
  return defaultUser;
};

// ✅ kisi bhi jagah se user ko update karne ke liye
export const updateUser = (data: Partial<UserStats>) => {
  const user = getUser();
  const updated: UserStats = { ...user, ...data };
  localStorage.setItem(USER_KEY, JSON.stringify(updated));
};

// ✅ quiz complete hone ke baad score + badges update
export const addQuizResult = (score: number) => {
  const user = getUser();

  const updatedBadges = [...user.badges];
  if (score >= 5 && !updatedBadges.includes("Quiz Beginner")) {
    updatedBadges.push("Quiz Beginner");
  }
  if (
    user.quizzesCompleted + 1 >= 3 &&
    !updatedBadges.includes("Culture Explorer")
  ) {
    updatedBadges.push("Culture Explorer");
  }

  const updatedUser: UserStats = {
    ...user,
    quizzesCompleted: user.quizzesCompleted + 1,
    totalScore: user.totalScore + score,
    badges: updatedBadges,
  };

  localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
};

// ✅ helper: login ke baad backend se aaye user ko set karo
export const setLoggedInUser = (backendUser: { name: string; email?: string }) => {
  const current = getUser();
  const merged: UserStats = {
    ...current,
    name: backendUser.name,
    email: backendUser.email,
  };

  localStorage.setItem(USER_KEY, JSON.stringify(merged));
};

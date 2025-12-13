export type UserStats = {
  name: string;
  quizzesCompleted: number;
  totalScore: number;
  badges: string[];
};

const USER_KEY = "sanskrooti_user";

export const getUser = (): UserStats => {
  const stored = localStorage.getItem(USER_KEY);
  if (stored) return JSON.parse(stored);

  // default user
  const defaultUser: UserStats = {
    name: "Guest User",
    quizzesCompleted: 0,
    totalScore: 0,
    badges: [],
  };

  localStorage.setItem(USER_KEY, JSON.stringify(defaultUser));
  return defaultUser;
};

export const updateUser = (data: Partial<UserStats>) => {
  const user = getUser();
  const updated = { ...user, ...data };
  localStorage.setItem(USER_KEY, JSON.stringify(updated));
};

export const addQuizResult = (score: number) => {
  const user = getUser();

  const updatedBadges = [...user.badges];
  if (score >= 5 && !updatedBadges.includes("Quiz Beginner")) {
    updatedBadges.push("Quiz Beginner");
  }
  if (user.quizzesCompleted + 1 >= 3 && !updatedBadges.includes("Culture Explorer")) {
    updatedBadges.push("Culture Explorer");
  }

  const updatedUser = {
    ...user,
    quizzesCompleted: user.quizzesCompleted + 1,
    totalScore: user.totalScore + score,
    badges: updatedBadges,
  };

  localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
};

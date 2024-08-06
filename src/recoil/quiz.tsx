
import { atom } from 'recoil';


export type Option = {
  text: string;
  isCorrect: boolean;
};

export type Question = {
  text: string;
  img?: string;
  options?: Option[];
  type: "single_choice" | "multiple_choice" | "text";
};

export type Status = "in_progress" | "completed";
export type Answer = string | number[] | null;
export type QuizStateType = {
//   questions: Question[];
  currentIndex: number;
  answers: Record<number, Answer>;
  status: Status;
  score: number | null;
};

export const QuizState = atom<QuizStateType>({
  key: 'quiz',
  default: {
    // questions: [],
    currentIndex: 0,
    answers: {},
    status: 'in_progress',
    score: null,
  },
});

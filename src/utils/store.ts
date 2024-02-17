import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type QuizState = {
  language: string;
  gender: string;
  age: string;
  hateInBooks: string[];
  setLanguage: (role: string) => void;
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setHateInBooks: (value: string[]) => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    set => ({
      language: '',
      gender: '',
      age: '',
      hateInBooks: [],
      setLanguage: (language) => set({ language }),
      setGender: (gender) => set({gender}),
      setAge: (age) => set({age}),
      setHateInBooks: (value) => set({hateInBooks: value}),
    }),
    {
      name: 'quizStore',
    },
  ),
);
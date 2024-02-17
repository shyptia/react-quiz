import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type QuizState = {
  language: string;
  gender: string;
  age: string;
  setLanguage: (role: string) => void;
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    set => ({
      language: '',
      gender: '',
      age: '',
      setLanguage: (language: string) => set({ language }),
      setGender: (gender: string) => set({gender}),
      setAge: (age: string) => set({age})
    }),
    {
      name: 'quizStore',
    },
  ),
);
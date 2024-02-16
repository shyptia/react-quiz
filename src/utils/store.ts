import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type QuizState = {
  language: string;
  gender: string;
  setLanguage: (role: string) => void;
  setGender: (gender: string) => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    set => ({
      language: '',
      gender: '',
      setLanguage: (language: string) => set({ language }),
      setGender: (gender: string) => set({gender})
    }),
    {
      name: 'quizStore',
    },
  ),
);
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type QuizState = {
  language: string;
  setLanguage: (role: string) => void;
};

export const useLanguageStore = create<QuizState>()(
  persist(
    set => ({
      language: '',
      setLanguage: (language: string) => set({ language }),
    }),
    {
      name: 'language',
    },
  ),
);
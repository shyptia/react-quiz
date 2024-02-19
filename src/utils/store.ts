import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type QuizState = {
  language: string;
  gender: string;
  age: string;
  hateInBooks: string[];
  favoriteTopics: string[];
  email: string;
  changeLanguage: (language: string) => void;
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setHateInBooks: (value: string[]) => void;
  setFavoriteTopics: (value: string[]) => void;
  setEmail: (email: string) => void;
  resetStore: () => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    set => ({
      language: '',
      gender: '',
      age: '',
      hateInBooks: [],
      favoriteTopics: [],
      email: '',
      changeLanguage: (language) => set({
        language,
        gender: "",
        age: "",
        favoriteTopics: [],
        hateInBooks: [],
      }),
      setGender: (gender) => set({gender}),
      setAge: (age) => set({age}),
      setHateInBooks: (value) => set({hateInBooks: value}),
      setFavoriteTopics: (value) => set({favoriteTopics: value}),
      setEmail: (email) => set({email}),
      resetStore: () => set({
        language: '',
        gender: '', age: '',
        hateInBooks: [],
        favoriteTopics: [],
        email: '' ,
      }),
    }),
    {
      name: 'quizStore',
    },
  ),
);

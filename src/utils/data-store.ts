import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useDataStore = create(
  persist(
    () => ({
      languageOptions: [
        { label: "English", value: "en" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
        { label: "Spanish", value: "es" },
      ],
      genderOptions: [
        {
          valueKey: "female",
          image: "/images/female-gender.png",
        },
        {
          valueKey: "male",
          image: "/images/male-gender.png",
        },
        {
          valueKey: "other",
          image: "/images/other-gender.png",
        },
      ],
      ageOptions: [
        { value: "18-29" },
        { value: "30-39" },
        { value: "40-49" },
        { value: "50+" },
      ],
      hateInBooksOptions: [
        { valueKey: "lackLogic" },
        { valueKey: "slowSpeed" },
        { valueKey: "lackHumor" },
        { valueKey: "tooGenericEnding" },
      ],
      favoriteTopicsOptions: [
        { valueKey: "werewolf", emoji: "0x1F43A" },
        { valueKey: "romance", emoji: "0x1F970" },
        { valueKey: "action", emoji: "0x1F483	" },
        { valueKey: "youngAdult", emoji: "0x1F481" },
        { valueKey: "royalObsession", emoji: "0x1F451" },
        { valueKey: "badBoy", emoji: "0x1F920" },
        { valueKey: "billionaire", emoji: "0x1F911" },
      ],
    }),
    {
      name: 'data-storage',
    },
  ),
)

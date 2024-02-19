import { useRouter } from "next/router";
import { Select } from "../shared/Select";
import { routesPathnames } from "../routes";
import { useQuizStore } from "../utils/store";
import { useTranslation } from "react-i18next";

export function LanguagePage() {
  const router = useRouter();
  const { changeLanguage } = useQuizStore();
  const { i18n } = useTranslation();

  return (
    <div className="px-6 py-11">
      <h1 className="text-title-3 text-center mb-4 text-grey-40">
        What is your
        <br />
        preferred language?
      </h1>
      <p className="text-headline-regular text-center text-grey-200 mb-6">
        Choose language
      </p>

      <Select
        options={[
          { label: "English", value: "en" },
          { label: "French", value: "fr" },
          { label: "German", value: "de" },
          { label: "Spanish", value: "es" },
        ]}
        onSelect={(option) => {
          changeLanguage(option.label);
          router.push(routesPathnames.gender, routesPathnames.gender, {
            locale: option.value,
          });
          i18n.changeLanguage(option.value);
        }}
      />
    </div>
  );
}

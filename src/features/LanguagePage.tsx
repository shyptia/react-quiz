import { useRouter } from "next/router";
import { Select } from "../shared/Select";
import { routesPathnames } from "../routes";
import { useTranslation } from "next-i18next";
import { useDataStore, useQuizStore } from "@/utils";

export function LanguagePage() {
  const router = useRouter();
  const { changeLanguage } = useQuizStore();
  const { i18n } = useTranslation();
  const { languageOptions } = useDataStore();

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
        options={languageOptions}
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

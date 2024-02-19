import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Select } from "../shared/Select";
import { routesPathnames } from "../routes";
import { useDataStore, useQuizStore } from "@/utils";

export function AgePage() {
  const router = useRouter();
  const { setAge } = useQuizStore();
  const { t } = useTranslation("age");
  const { ageOptions } = useDataStore();

  const translatedAgeOptions = ageOptions.map(({ value }) => ({
    label: t("years", { age: value }),
    value: t("years", { age: value }),
  }));

  return (
    <div className="px-5 py-11">
      <h1
        className="text-title-3 text-center mb-4 text-grey-40 mb-6">
        {t("header")}
      </h1>

      <Select
        options={translatedAgeOptions}
        onSelect={(option) => {
          router.push(routesPathnames["hate-in-books"]);
          setAge(option.value);
        }}
      />
    </div>
  );
}

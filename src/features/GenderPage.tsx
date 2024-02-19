import { useRouter } from "next/router";
import { Select } from "../shared/Select";
import { routesPathnames } from "../routes";
import { useTranslation } from "next-i18next";
import { useDataStore, useQuizStore } from "@/utils";

export function GenderPage() {
  const router = useRouter();
  const { setGender } = useQuizStore();
  const { t } = useTranslation("gender");
  const { genderOptions } = useDataStore();

  const translatedGenderOptions = genderOptions.map(({valueKey, image}) => ({
    label: t(valueKey),
    value: valueKey,
    image: image,
  }));

  return (
    <div className="px-6 py-11">
      <h1 className="text-title-3 text-center mb-4 text-grey-40 mb-4">
        {t("header")}
      </h1>
      <p className="text-headline-regular text-center text-grey-200 mb-11">
        {t("description")}
      </p>

      <Select
        options={translatedGenderOptions}
        selectType="single-select-image"
        onSelect={(option) => {
          router.push(routesPathnames.age);
          setGender(option.label);
        }}
      />
    </div>
  );
}

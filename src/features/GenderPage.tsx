import { useRouter } from "next/router";
import { Select } from "../shared/Select";
import { useQuizStore } from "../utils/store";
import { routesPathnames } from "../routes";
import { useTranslation } from "next-i18next";

export function GenderPage() {
  const router = useRouter();
  const { setGender } = useQuizStore();
  const { t } = useTranslation("gender");

  return (
    <div className="px-6 py-11">
      <h1 className="text-title-3 text-center mb-4 text-grey-40 mb-4">
        {t("header")}
      </h1>
      <p className="text-headline-regular text-center text-grey-200 mb-11">
        {t("description")}
      </p>

      <Select
        options={[
          {
            label: t("female"),
            value: "female",
            image: "/images/female-gender.png",
          },
          {
            label: t("male"),
            value: "male",
            image: "/images/male-gender.png",
          },
          {
            label: t("other"),
            value: "other",
            image: "/images/other-gender.png",
          },
        ]}
        selectType="single-select-image"
        onSelect={(option) => {
          router.push(routesPathnames.age);
          setGender(option.label);
        }}
      />
    </div>
  );
}

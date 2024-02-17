import { useRouter } from "next/router";
import { useQuizStore } from "./utils/store";
import { useTranslation } from "react-i18next";
import { Select } from "./shared/Select";
import { routesPathnames } from "./routes";

export function AgePage() {
  const router = useRouter();
  const { setAge } = useQuizStore();
  const { t } = useTranslation("age");
  const translatedYears = t("years");

  return (
    <div>
      <h1
        className="text-title-3 text-center mb-4 text-grey-40 mb-4"
        suppressHydrationWarning
      >
        {t("header")}
      </h1>

      <Select
        options={[
          {
            label: `18-29 ${translatedYears}`,
            value: `18-29 ${translatedYears}`,
          },
          {
            label: `30-39 ${translatedYears}`,
            value: `30-39 ${translatedYears}`,
          },
          {
            label: `40-49 ${translatedYears}`,
            value: `40-49 ${translatedYears}`,
          },
          {
            label: "50+",
            value: "50+",
          },
        ]}
        onSelect={(option) => {
          setAge(option.value);
        }}
      />
    </div>
  );
}

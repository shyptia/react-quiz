import { useRouter } from "next/router";
import { Select } from "./shared/Select";
import { routesPathnames } from "./routes";
import { useQuizStore } from "./utils/store";

export function LanguagePage() {
  const router = useRouter();
  const { setLanguage } = useQuizStore();

  return (
    <div>
      <h1 className="text-title-3 text-center mb-4 text-grey-40">
        What is your preferred language?
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
          router.push(routesPathnames.gender, routesPathnames.gender, {
            locale: option.value,
          });
          setLanguage(option.label);
        }}
      />
    </div>
  );
}

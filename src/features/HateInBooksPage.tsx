import { useQuizStore } from "../utils/store";
import { useTranslation } from "react-i18next";
import { MultiSelect } from "../shared/MultiSelect";
import { routesPathnames } from "../routes";
import { NavigateButton } from "../shared/NavigateButton";

export function HateInBooksPage() {
  const { hateInBooks, setHateInBooks } = useQuizStore();
  const { t } = useTranslation("hate-in-books");

  return (
    <div>
      <h1
        className="text-title-3 text-center mb-4 text-grey-40 mb-4"
        suppressHydrationWarning
      >
        {t("header")}
      </h1>

      <MultiSelect
        options={[
          { value: t("lackLogic") },
          { value: t("slowSpeed") },
          { value: t("lackHumor") },
          { value: t("tooGenericEnding") },
        ]}
        value={hateInBooks}
        onValueChange={setHateInBooks}
      />

      <NavigateButton
        disabled={!hateInBooks.length}
        pathname={routesPathnames["favorite-topics"]}
      >
        {t("next")}
      </NavigateButton>
    </div>
  );
}

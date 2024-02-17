import { useRouter } from "next/router";
import { useQuizStore } from "./utils/store";
import { useTranslation } from "react-i18next";
import { MultiSelect } from "./shared/MultiSelect";
import clsx from "clsx";
import { routesPathnames } from "./routes";

export function HateInBooksPage() {
  const router = useRouter();
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

      <button
        disabled={!hateInBooks.length}
        className={clsx(
          "mt-6 block w-full rounded-full py-4 text-title-semibold disabled:pointer-events-none",
          Boolean(hateInBooks.length)
            ? "bg-accent"
            : "bg-disabled-accent text-grey-200"
        )}
        onClick={() => router.push(routesPathnames["favorite-topics"])}
        suppressHydrationWarning
      >
        {t("next")}
      </button>
    </div>
  );
}

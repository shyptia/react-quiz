import { useTranslation } from "next-i18next";
import { routesPathnames } from "../routes";
import { NavigateButton } from "../shared/NavigateButton";
import { BubbleSelect } from "../shared/BubbleSelect";
import { useRouter } from "next/router";
import { useDataStore, useQuizStore } from "@/utils";

export function FavoriteTopicsPage() {
  const { favoriteTopics, setFavoriteTopics } = useQuizStore();
  const { t } = useTranslation("favorite-topics");
  const router = useRouter();
  const { favoriteTopicsOptions } = useDataStore();

  const translatedTopicsOptions = favoriteTopicsOptions.map(
    ({ valueKey, emoji }) => ({ value: t(valueKey), emoji })
  );

  return (
    <div className="pt-11 pb-5 px-5">
      <h1 className="text-title-3 text-center mb-4 text-grey-40 mb-4">
        {t("header")}
      </h1>

      <p className="text-headline-regular text-center text-grey-200 mb-6">
        {t("description")}
      </p>

      <BubbleSelect
        options={translatedTopicsOptions}
        value={favoriteTopics}
        onValueChange={setFavoriteTopics}
      />

      <NavigateButton
        disabled={!favoriteTopics.length}
        onClick={() => router.push(routesPathnames.email)}
      >
        {t("next")}
      </NavigateButton>
    </div>
  );
}

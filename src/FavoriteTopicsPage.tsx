import { useTranslation } from "react-i18next";
import { useQuizStore } from "./utils/store";
import { routesPathnames } from "./routes";
import { NavigateButton } from "./shared/NavigateButton";

export function FavoriteTopicsPage() {
  const { favoriteTopics, setFavoriteTopics } = useQuizStore();
  const { t } = useTranslation("favorite-topics");

  return (
    <div>
      <h1
        className="text-title-3 text-center mb-4 text-grey-40 mb-4"
        suppressHydrationWarning
      >
        {t("header")}
      </h1>

      <p
        className="text-headline-regular text-center text-grey-200 mb-6"
        suppressHydrationWarning
      >
        {t("description")}
      </p>

      <NavigateButton
        disabled={!favoriteTopics.length}
        pathname={routesPathnames.email}
      >
        {t("next")}
      </NavigateButton>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { useQuizStore } from "./utils/store";
import { routesPathnames } from "./routes";
import { NavigateButton } from "./shared/NavigateButton";
import { BubbleSelect } from "./shared/BubbleSelect";

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

      <BubbleSelect
        options={[
          { value: t("werewolf"), emoji: "0x1F43A" },
          { value: t("romance"), emoji: "0x1F970" },
          { value: t("action"), emoji: "0x1F483	" },
          { value: t("youngAdult"), emoji: "0x1F481" },
          { value: t("royalObsession"), emoji: "0x1F451" },
          { value: t("badBoy"), emoji: "0x1F920" },
          { value: t("billionaire"), emoji: "0x1F911" },
        ]}
        value={favoriteTopics}
        onValueChange={setFavoriteTopics}
      />

      <NavigateButton
        disabled={!favoriteTopics.length}
        pathname={routesPathnames.email}
      >
        {t("next")}
      </NavigateButton>
    </div>
  );
}

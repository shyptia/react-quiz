import { routesPathnames } from "@/routes";
import { NavigateButton } from "@/shared/NavigateButton";
import { useQuizStore } from "@/utils/store";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DownloadAnswersButton } from "./DownloadAnswersButton";

export function ThankYouPage() {
  const { t } = useTranslation("thank-you");
  const { resetStore } = useQuizStore();

  return (
    <div className="flex flex-col items-center">
      <h1
        className="font-niconne text-title-3 text-center text-grey-40"
        suppressHydrationWarning
      >
        {t("header")}
      </h1>

      <p
        className="text-headline-regular text-center text-grey-40 mb-16"
        suppressHydrationWarning
      >
        {t("description")}
      </p>

      <div className="w-[100px] h-[100px] bg-green-light rounded-full flex items-center justify-center">
        <Image
          width={70}
          height={70}
          src="/svg/checked-icon.svg"
          alt="checked icon"
          className="fill-green-dark"
        />
      </div>

      <DownloadAnswersButton />

      <NavigateButton
        pathname={routesPathnames.language}
        onClick={() => resetStore()}
      >
        {t("navigationText")}
      </NavigateButton>
    </div>
  );
}

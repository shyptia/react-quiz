import { routesPathnames } from "@/routes";
import { NavigateButton } from "@/shared/NavigateButton";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { DownloadAnswersButton } from "./DownloadAnswersButton";
import { useRouter } from "next/router";
import { useQuizStore } from "@/utils";

export function ThankYouPage() {
  const { t } = useTranslation("thank-you");
  const { resetStore } = useQuizStore();
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between px-5 h-full">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="font-niconne text-title-3 text-center text-grey-40">
          {t("header")}
        </h1>

        <p className="text-headline-regular text-center text-grey-40 mb-16">
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
      </div>

      <NavigateButton
        onClick={() => {
          resetStore();
          router.push(routesPathnames.language, routesPathnames.language, {
            locale: "en",
          });
        }}
      >
        {t("navigationText")}
      </NavigateButton>
    </div>
  );
}

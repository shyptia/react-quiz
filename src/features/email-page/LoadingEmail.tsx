import { CircleProgressBar } from "@/shared/CircleProgressBar";
import { useTranslation } from "next-i18next";

export function LoadingEmail({ progress }: { progress: number }) {
  const { t } = useTranslation("email");

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <CircleProgressBar progress={progress} />

      <p className="mt-10">{t("loading")}</p>
    </div>
  );
}

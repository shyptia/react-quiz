import { CircleProgressBar } from "@/shared/CircleProgressBar";
import { useTranslation } from "react-i18next";

export function LoadingEmail({ progress }: { progress: number }) {
  const { t } = useTranslation("email");

  return (
    <div className="flex flex-col items-center justify-center">
      <CircleProgressBar progress={progress} />

      <p className="mt-10" suppressHydrationWarning>
        {t("loading")}
      </p>
    </div>
  );
}

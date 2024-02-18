import { useEffect, useState } from "react";
import { CircleProgressBar } from "./shared/CircleProgressBar";
import { useTranslation } from "react-i18next";

export function EmailPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => clearInterval(interval);
  }, [progress]);

  return progress < 100 ? <Loading progress={progress} /> : null;
}

function Loading({ progress }: { progress: number }) {
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

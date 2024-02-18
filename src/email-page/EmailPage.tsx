import { useEffect, useState } from "react";
import { LoadingEmail } from "./LoadingEmail";
import { EmailForm } from "./EmailForm";

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

  return progress < 100 ? <LoadingEmail progress={progress} /> : <EmailForm />;
}

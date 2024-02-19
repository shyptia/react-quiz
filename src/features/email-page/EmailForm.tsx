import { routesPathnames } from "@/routes";
import { NavigateButton } from "@/shared/NavigateButton";
import { useQuizStore } from "@/utils";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const { t } = useTranslation("email");
  const { setEmail: setEmailToLocalStorage } = useQuizStore();
  const router = useRouter();

  useEffect(() => {
    if (!email) {
      setEmailIsValid(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailIsValid(false);
      return;
    }

    setEmailIsValid(true);
  }, [email]);

  return (
    <div className="h-full px-5 flex flex-col justify-between">
      <div className="h-full flex flex-col justify-center">
        <h1
          className="text-title-3 text-center mb-4 text-grey-40 mb-3"
          suppressHydrationWarning
        >
          {t("email")}
        </h1>
        <p
          className="text-title text-center text-grey-200 mb-14"
          suppressHydrationWarning
        >
          {t("description")}
        </p>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder={t("placeholder")}
            onChange={(event) => setEmail(event.target.value)}
            suppressHydrationWarning
            className={clsx(
              "w-full bg-violet-dark outline-none pl-5 py-6 text-title rounded-[16px] placeholder:text-grey-200 border-2 focus:border-accent-main",
              !emailIsValid
                ? "border-red focus:border-red"
                : "border-transparent"
            )}
          />
          {!emailIsValid && (
            <p className="text-red mt-1" suppressHydrationWarning>
              {t("errorMessage")}
            </p>
          )}
        </div>
        <p
          className="text-caption-1 text-center text-grey-200 mt-14"
          suppressHydrationWarning
        >
          {t("agreement")}
        </p>
      </div>

      <NavigateButton
        disabled={!emailIsValid || !email}
        onClick={() => {
          setEmailToLocalStorage(email);
          router.push(routesPathnames["thank-you"]);
        }}
      >
        {t("next")}
      </NavigateButton>
    </div>
  );
}

import clsx from "clsx";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export function NavigateButton({
  disabled,
  pathname,
  children,
}: {
  disabled: boolean;
  pathname: string;
  children: ReactNode;
}) {
  const router = useRouter();

  return (
    <button
      disabled={disabled}
      className={clsx(
        "mt-6 block w-full rounded-full py-4 text-title-semibold disabled:pointer-events-none",
        disabled ? "bg-disabled-accent text-grey-200" : "bg-accent"
      )}
      onClick={() => router.push(pathname)}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}

import clsx from "clsx";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export function NavigateButton({
  disabled = false,
  pathname,
  children,
  onClick,
}: {
  disabled?: boolean;
  pathname: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const router = useRouter();

  return (
    <button
      disabled={disabled}
      className={clsx(
        "mt-6 block w-full rounded-full py-4 text-title-semibold disabled:pointer-events-none",
        disabled ? "bg-accent-disabled text-grey-200" : "bg-accent-main"
      )}
      onClick={() => {
        router.push(pathname);
        onClick?.();
      }}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}

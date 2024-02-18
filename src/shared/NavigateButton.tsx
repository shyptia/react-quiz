import clsx from "clsx";
import { ReactNode } from "react";

export function NavigateButton({
  disabled = false,
  children,
  onClick,
}: {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "mt-6 block w-full rounded-full py-4 text-title-semibold disabled:pointer-events-none",
        disabled ? "bg-accent-disabled text-grey-200" : "bg-accent-main"
      )}
      onClick={onClick}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}

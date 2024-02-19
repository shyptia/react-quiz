import clsx from "clsx";
import Image from "next/image";

export function Select({
  options,
  selectType = "single-select",
  onSelect,
}: {
  options: Option[];
  selectType?: SelectType;
  onSelect: (option: Option) => void;
}) {
  return (
    <div
      className={clsx(
        selectType === "single-select" ? "space-y-3" : "space-x-3",
        selectType === "single-select-image" && "flex"
      )}
    >
      {options.map((option) => {
        return (
          <button
            className={clsx(
              "block w-full rounded-2xl bg-violet-light",
              selectType === "single-select" &&
                "text-left text-headline-semibold px-5 py-4",
              selectType === "single-select-image" &&
                "px-6 py-[30px] text-text-semibold flex flex-col items-center gap-[10px]"
            )}
            value={option.value}
            key={option.value}
            onClick={() => onSelect(option)}
            suppressHydrationWarning
          >
            {selectType === "single-select-image" && option.image && (
              <Image
                width={52}
                height={52}
                src={option.image}
                alt={option.label}
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

type Option = { value: string; label: string; image?: string };
type SelectType = "single-select" | "single-select-image";

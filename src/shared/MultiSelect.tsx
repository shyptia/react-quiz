import clsx from "clsx";

export function MultiSelect({
  options,
  value,
  onValueChange,
}: {
  options: Option[];
  value: string[];
  onValueChange: (value: string[]) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          className={clsx(
            "block flex items-center justify-between p-6 bg-violet-light rounded-[16px] border-2",
            value.includes(option.value)
              ? "border-accent"
              : "border-transparent"
          )}
          key={option.value}
        >
          <span className="text-title" suppressHydrationWarning>
            {option.value}
          </span>
          <input
            checked={value.includes(option.value)}
            type="checkbox"
            className="w-5 h-5 border-1 block rounded-[8px] checked:bg-accent"
            onChange={() => {
              const newValue = value.includes(option.value)
                ? value.filter((item) => item !== option.value)
                : [...value, option.value];

              onValueChange(newValue);
            }}
          />
        </label>
      ))}
    </div>
  );
}

export type Option = { value: string };

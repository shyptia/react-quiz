import clsx from "clsx";

export function BubbleSelect({
  options,
  value,
  maxSelectedItems = 3,
  onValueChange,
}: {
  options: Option[];
  value: string[];
  maxSelectedItems?: number;
  onValueChange: (value: string[]) => void;
}) {
  return (
    <div className="w-full h-[320px] flex flex-col flex-wrap justify-start overflow-x-scroll gap-x-3 gap-y-4 px-2 py-4">
      {options.map((option, index) => (
        <button
          key={option.value}
          className={clsx(
            "w-[100px] h-[100px] bg-violet-light rounded-full border-2 flex flex-col items-center justify-center",
            index % 4 === 2 && "mt-10",
            value.includes(option.value)
              ? "border-accent-main"
              : "border-transparent"
          )}
          onClick={() => {
            const newValue = value.includes(option.value)
              ? value.filter((item) => item !== option.value)
              : value.length < maxSelectedItems
              ? [...value, option.value]
              : value;

            onValueChange(newValue);
          }}
        >
          <span className="block w-8 h-6" role="img">
            {String.fromCodePoint(parseInt(option.emoji, 16))}
          </span>
          <div className="text-caption-1 w-[90px]">{option.value}</div>
        </button>
      ))}
    </div>
  );
}

type Option = { value: string; emoji: string };

export function Select({
  options,
  onSelect,
}: {
  options: Option[];
  onSelect: () => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => {
        return (
          <button
            className="block text-left w-full rounded-2xl text-headline-semibold px-5 py-4 bg-light-violet"
            value={option.value}
            key={option.value}
            onClick={onSelect}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export type Option = { value: string; label: string };

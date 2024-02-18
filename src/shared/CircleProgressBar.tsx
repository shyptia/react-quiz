export function CircleProgressBar({ progress }: { progress: number }) {
  return (
    <span
      role="progressbar"
      className="w-[240px] h-[240px] relative flex items-center justify-center"
    >
      <svg className="w-full h-full" viewBox="0 0 240 240">
        <circle
          className="fill-transparent stroke-grey-light stroke-[12px] "
          cx="120"
          cy="120"
          r="110"
        />
        <circle
          className="fill-transparent stroke-accent-main stroke-[12px] transform origin-center -rotate-90"
          cx="120"
          cy="120"
          r="110"
          style={{
            strokeDasharray: 693,
            strokeDashoffset: 693 - (progress * 693) / 100,
            strokeLinecap: "round",
          }}
        />
      </svg>

      <span className="absolute  text-percent">{progress}%</span>
    </span>
  );
}

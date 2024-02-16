import { usePathname } from "next/navigation";
import { routes, routesPathnames } from "./routes";

export function ProgressBar() {
  const pathname = usePathname();

  if (pathname === routesPathnames.email) return null;

  const questionNumber =
    routes.findIndex((route) => route === pathname.slice(1)) + 1;
  const widthPercentage = (questionNumber / 6) * 100;

  return (
    <div>
      <div className="py-[15px] text-[18px] font-extrabold leading-5 text-center">
        <span className="text-accent">{questionNumber}</span> / 5
      </div>

      <div className="bg-grey-light h-1 rounded-full">
        <div
          className="bg-accent h-full rounded-full"
          style={{ width: `${widthPercentage}%` }}
        />
      </div>
    </div>
  );
}

import { usePathname } from "next/navigation";
import { routes, routesPathnames } from "./routes";
import Image from "next/image";
import { useRouter } from "next/router";

export function ProgressBar() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === routesPathnames.email) return null;

  const questionNumber =
    routes.findIndex((route) => route === pathname.slice(1)) + 1;
  const widthPercentage = (questionNumber / 6) * 100;

  return (
    <div>
      <div className="flex">
        {pathname !== routesPathnames.language && (
          <Image
            width={15}
            height={20}
            src="/svg/back-icon.svg"
            alt="back-icon"
            onClick={() => router.back()}
          />
        )}

        <div className="flex-1 py-[15px] text-[18px] font-extrabold leading-5 text-center">
          <span className="text-accent">{questionNumber}</span> / 5
        </div>
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

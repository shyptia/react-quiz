import { ReactNode } from "react";
import { ProgressBar } from "./ProgressBar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="px-5">
        <ProgressBar />
      </header>
      <main className="mt-[45px] px-6">{children}</main>
    </>
  );
}

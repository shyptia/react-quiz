import { ReactNode } from "react";
import { ProgressBar } from "./ProgressBar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="px-5">
        <ProgressBar />
      </header>
      <main className="h-[calc(100vh-55px)]">{children}</main>
    </>
  );
}

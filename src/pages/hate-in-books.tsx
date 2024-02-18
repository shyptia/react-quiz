import { HateInBooksPage } from "@/features/HateInBooksPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["hate-in-books"])),
    },
  };
}
export default function Page() {
  return <HateInBooksPage />;
}

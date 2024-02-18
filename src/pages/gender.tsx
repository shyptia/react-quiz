import { GenderPage } from "@/features/GenderPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["gender"])),
    },
  };
}
export default function Page() {
  return <GenderPage />;
}

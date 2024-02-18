import { AgePage } from "@/features/AgePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["age"])),
    },
  };
}
export default function Page() {
  return <AgePage />;
}

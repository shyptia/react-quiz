import { LanguagePage } from "@/features/LanguagePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default function Page() {
  return <LanguagePage />;
}

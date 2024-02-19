import { EmailPage } from "@/features/email-page/EmailPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["email"])),
    },
  };
}

export default function Page() {
  return <EmailPage />;
}

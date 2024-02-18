import { ThankYouPage } from "@/features/thank-you-page/ThankYouPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["thank-you", "common"])),
    },
  };
}
export default function Page() {
  return <ThankYouPage />;
}

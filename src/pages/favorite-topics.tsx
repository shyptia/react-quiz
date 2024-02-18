import { FavoriteTopicsPage } from "@/features/FavoriteTopicsPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["favorite-topics"])),
    },
  };
}
export default function Page() {
  return <FavoriteTopicsPage />;
}

import Image from "next/image";
import { useTranslation } from "next-i18next";
import { CSVLink } from "react-csv";
import { useQuizStore } from "@/utils";

export function DownloadAnswersButton() {
  const { t } = useTranslation("common");
  const { language, gender, age, hateInBooks, favoriteTopics, email } =
    useQuizStore();

  const headers = [
    { label: t("order"), key: "order" },
    { label: t("title"), key: "title" },
    { label: t("type"), key: "type" },
    { label: t("answer"), key: "answer" },
  ];

  const data = [
    {
      order: "1",
      title: t("language"),
      type: "single-select",
      answer: language,
    },
    {
      order: "2",
      title: t("gender"),
      type: "single-select-image",
      answer: gender,
    },
    { order: "3", title: t("age"), type: "single-select", answer: age },
    {
      order: "4",
      title: t("hateInBooks"),
      type: "multi-select",
      answer: hateInBooks.join(", "),
    },
    {
      order: "5",
      title: t("favoriteTopics"),
      type: "bubble",
      answer: favoriteTopics.join(", "),
    },
    { order: "6", title: t("email"), type: "email", answer: email },
  ];

  return (
    <CSVLink
      data={data}
      headers={headers}
      filename={"my-answers.csv"}
      className="btn btn-primary"
      target="_blank"
      suppressHydrationWarning
    >
      <div className="flex gap-1 items-center mt-[100px]">
        <Image
          width={42}
          height={42}
          src="/svg/download-icon.svg"
          alt="checked icon"
          className="fill-green-dark"
        />
        <span>{t("downloadFile")}</span>
      </div>
    </CSVLink>
  );
}

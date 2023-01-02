import useTranslation from "next-translate/useTranslation";

export default function AnotherPage() {
  let { t } = useTranslation();

  return (
    <div>
      <h1>{t("about:title")}</h1>
      <p>
        {t("about:introduction", {
          name: "Patrick",
          age: 27,
        })}
      </p>
    </div>
  );
}

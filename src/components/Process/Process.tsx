import React from "react";
import "../../styles/section.scss";
import "./Process.scss";
import Steps from "./Steps/Steps";
import { useTranslation } from "react-i18next";

const Process: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="process" className="section process">
      <div className="section__wrapper">
        <h2 className="section__title process__title">{t("process.title")}</h2>
        <Steps />
      </div>
    </section>
  );
};

export default Process;

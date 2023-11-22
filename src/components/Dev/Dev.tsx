import React from "react";
import "../../styles/section.scss";
import "./Dev.scss";
import Stages from "./Stages/Stages";
import Business from "./Business/Business";
import Tools from "./Tools/Tools";
import { useTranslation } from "react-i18next";

const Dev: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section dev">
      <div className="section__wrapper dev__wrapper">
        <h2 className="section__title">{t("dev.title")}</h2>
        <Stages />
        <Business />
      </div>
      <Tools />
    </section>
  );
};

export default Dev;

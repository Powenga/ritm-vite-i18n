import React from "react";
import Line from "../Line/Line";
import "../../styles/section.scss";
import "./Techs.scss";
import Web from "./Web/Web";
import Advantage from "./Advantage/Advantage";
import TechLine2 from "../../images/tech-line2.svg?react";
import { useTranslation } from "react-i18next";

const Techs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="techs" className="section techs">
      <h2 className="section__title">{t("tech.title")}</h2>
      <Web />
      <Advantage />
      <Line
        lineSVG={TechLine2}
        classLineSVG="techs__line2"
        classLineWrapper="techs__line-wrapper2"
      />
    </section>
  );
};

export default Techs;

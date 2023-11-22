import React from "react";
import { useTranslation } from "react-i18next";
import "./Steps.scss";

const Steps: React.FC = () => {
  const { t } = useTranslation();
  const stepItems = t("process.steps.list", { returnObjects: true }).map(
    (item, index) => {
      const stepKey = `step${index}`;
      return (
        <li key={stepKey} className="section__item steps__item">
          <div className="steps__item-number-wrapper">
            <p className="steps__item-number">{index + 1}</p>
          </div>
          <p className="steps__item-title">{item.title}</p>
          <p className="steps__item-description">{item.description}</p>
        </li>
      );
    }
  );

  const stepListElement = (
    <ul className="section__list steps__list">{stepItems}</ul>
  );

  return (
    <div className="steps">
      <h3 className="section__subtitle steps__title">
        {t("process.steps.title")}
      </h3>
      {stepListElement}
    </div>
  );
};

export default Steps;

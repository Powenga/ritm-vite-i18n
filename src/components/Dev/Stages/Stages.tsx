import React from "react";
import "../../../styles/section.scss";
import "./Stages.scss";
import { useTranslation } from "react-i18next";

const Stages: React.FC = () => {
  const { t } = useTranslation();
  const stageItems = t("dev.stages.list", { returnObjects: true }).map(
    (item, indexItem) => {
      const itemKey = `item${indexItem}`;
      const descriptionElements = item.descriptions.map((text, indexText) => {
        const itemTextKey = `itemText${indexText}`;
        return (
          <p key={itemTextKey} className="stages__item-description">
            {text}
          </p>
        );
      });

      return (
        <li key={itemKey} className="stages__item">
          <div className="stages__item-text-wrap">
            <p className="stages__item-title">{item.title}</p>
            {descriptionElements}
          </div>
          <div className="stages__item-image-wrapper">
            <img
              className={`stages__item-image ${item.imgClass}`}
              src={`/uploads/${item.imgSrc}`}
              alt={item.imgAlt}
            />
          </div>
        </li>
      );
    }
  );

  const stageListElement = <ul className="stages__list">{stageItems}</ul>;

  return (
    <div className="stages">
      <h3 className="section__subtitle stages__title">
        {t("dev.stages.title")}
      </h3>
      {stageListElement}
    </div>
  );
};

export default Stages;

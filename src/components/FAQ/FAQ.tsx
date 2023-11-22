import React from "react";
import "./FAQ.scss";
import { useTranslation } from "react-i18next";

const Faq: React.FC = () => {
  const { t } = useTranslation();
  const faqItems = t("faq.list", { returnObjects: true }).map((item, index) => {
    const itemKey = `item${index}`;
    return (
      <details key={itemKey} className="faq__details">
        <summary className="faq__question">
          <span className="faq__question-icon" />
          <p className="faq__question-text">{item.questionText}</p>
        </summary>
        <p className="faq__answer">{item.answerText}</p>
      </details>
    );
  });

  const faqListElement = <div className="faq__list">{faqItems}</div>;

  return (
    <section className="section faq">
      <div className="section__wrapper">
        <h2 className="section__title">{t("faq.title")}</h2>
        <h3 className="section__subtitle faq__subtitle">{t("faq.subtitle")}</h3>
        {faqListElement}
      </div>
    </section>
  );
};

export default Faq;

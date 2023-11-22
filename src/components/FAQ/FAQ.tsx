import React from 'react';
import './FAQ.scss';
import FAQ_ITEMS from './constants';

const FAQ: React.FC = () => {
  const faqItems = FAQ_ITEMS.map((item, index) => {
    const itemKey = `item${index}`;
    return (
      <details key={itemKey} open={item.isOpened} className="faq__details">
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
        <h2 className="section__title">F.A.Q</h2>
        <h3 className="section__subtitle faq__subtitle">Частые вопросы</h3>
        {faqListElement}
      </div>
    </section>
  );
};

export default FAQ;

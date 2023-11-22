import React from 'react';
import  ContactLine from '../../images/contact-line.svg?react';
import Line from '../Line/Line';
import './Contacts.scss';

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="section contacts">
      <div className="section__wrapper contacts__wrapper">
        <Line lineSVG={ContactLine} classLineSVG="contacts__line" />
        <h2 className="section__title">Контакты</h2>
        <h3 className="section__subtitle contacts__subtitle">Как с нами связаться</h3>
        <div className="contacts__list">
          <p className="contacts__item">Контактное лицо: Вадим&nbsp;Бакуров, CEO</p>
          <a href="tel: +79623500014" title="Позвонить" className="contacts__item">
            <span className="contacts__item-icon contacts__item-icon_type_mobile" />
            +7 (962) 350-00-14
          </a>
          <a href="mailto: vb@ritm.studio" title="Отправить почту" className="contacts__item">
            <span className="contacts__item-icon contacts__item-icon_type_email" />
            vb@ritm.studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

import React from 'react';
import ContactLine from '../../images/contact-line.svg?react';
import Line from '../Line/Line';
import './Contacts.scss';
import { useTranslation } from 'react-i18next';

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contacts" className="section contacts">
      <div className="section__wrapper contacts__wrapper">
        <Line lineSVG={ContactLine} classLineSVG="contacts__line" />
        <h2 className="section__title">{t('contacts.title')}</h2>
        <h3 className="section__subtitle contacts__subtitle">
          {t('contacts.subtitle')}
        </h3>
        <div className="contacts__list">
          <p className="contacts__item">{t('contacts.person.name')}</p>
          <a
            href={`tel: ${t('contacts.person.phone.number')}`}
            title="Позвонить"
            className="contacts__item"
          >
            <span className="contacts__item-icon contacts__item-icon_type_mobile" />
            {t('contacts.person.phone.placeholder')}
          </a>
          <a
            href={`mailto: ${t('contacts.person.email')}`}
            title="Отправить почту"
            className="contacts__item"
          >
            <span className="contacts__item-icon contacts__item-icon_type_email" />
            {t('contacts.person.email')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

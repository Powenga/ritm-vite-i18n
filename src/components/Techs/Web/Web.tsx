import React from 'react';
import '../../../styles/section.scss';
import './Web.scss';
import Line from '../../Line/Line';
import TechLine1 from '../../../images/tech-line1.svg?react';
import { useTranslation } from 'react-i18next';

const Web: React.FC = () => {
  const { t } = useTranslation();
  const webItems = t('tech.items', { returnObjects: true }).map(
    (item, index) => {
      const webKey = `web${index}`;
      return (
        <li key={webKey} className="section__item">
          <p className="web__item-title">{item.title}</p>
          <p className="web__item-description">{item.description}</p>
        </li>
      );
    }
  );

  const webListElement = <ul className="section__list">{webItems}</ul>;

  return (
    <div className="web">
      <h3 className="section__subtitle web__title">{t('tech.text')}</h3>
      {webListElement}
      <Line lineSVG={TechLine1} classLineSVG="web__line" />
    </div>
  );
};

export default Web;

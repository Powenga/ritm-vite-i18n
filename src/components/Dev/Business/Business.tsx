import React from 'react';
import Line from '../../Line/Line';
import BusinessLine from '../../../images/business-line.svg?react';

import './Business.scss';
import { useTranslation } from 'react-i18next';

const Business: React.FC = () => {
  const { t } = useTranslation();
  const businessItems = t('dev.business.list', { returnObjects: true }).map(
    (item, index) => {
      const businessKey = `business${index}`;
      return (
        <li key={businessKey} className="business__item">
          <div className="business__item-icon-wrapper" />
          <p className="business__item-description">{item.description}</p>
        </li>
      );
    }
  );

  const businessListElement = (
    <ul className="business__list">{businessItems}</ul>
  );

  return (
    <div className="business">
      <Line lineSVG={BusinessLine} classLineSVG="business__line" />
      <h3 className="section__subtitle business__title">
        {t('dev.business.title')}
      </h3>
      {businessListElement}
    </div>
  );
};

export default Business;

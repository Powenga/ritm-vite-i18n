import React from 'react';
import Line from '../../Line/Line';
import BUSINESS_ITEMS from './constants';
import BusinessLine from '../../../images/business-line.svg?react';

import './Business.scss';

const Business: React.FC = () => {
  const businessItems = BUSINESS_ITEMS.map((item, index) => {
    const businessKey = `business${index}`;
    return (
      <li key={businessKey} className="business__item">
        <div className="business__item-icon-wrapper" />
        <p className="business__item-description">{item.description}</p>
      </li>
    );
  });

  const businessListElement = <ul className="business__list">{businessItems}</ul>;

  return (
    <div className="business">
      <Line lineSVG={BusinessLine} classLineSVG="business__line" />
      <h3 className="section__subtitle business__title">
        Основные преимущества для&nbsp;вашего&nbsp;бизнеса
      </h3>
      {businessListElement}
    </div>
  );
};

export default Business;

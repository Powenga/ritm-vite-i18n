import React from 'react';
import './Policy.scss';
import { useTranslation } from 'react-i18next';

const Policy: React.FC = () => {
  const { t } = useTranslation();
  const politicElements = t('policy.text', { returnObjects: true }).map(
    (itemPolitic, indexPolitic) => {
      const numberPolitic = indexPolitic + 1;
      const politicKey = `politicItem${numberPolitic}`;
      const title = `${numberPolitic}. ${itemPolitic.title}`;

      const politicTextElements =
        itemPolitic.texts &&
        itemPolitic.texts.map((itemPoliticText, indexPoliticText) => {
          const numberPoliticText = indexPoliticText + 1;
          const politicTextKey = `politicText${numberPolitic}_${numberPoliticText}`;
          const text = itemPoliticText.number
            ? `${numberPolitic}. ${itemPoliticText.number}. ${itemPoliticText.text}`
            : `— ${itemPoliticText.text}`;

          return (
            <p className="policy__item-text" key={politicTextKey}>
              {text}
            </p>
          );
        });

      const politicTableElement =
        itemPolitic.table &&
        itemPolitic.table.map((itemRow, indexRow) => {
          const numberRow = indexRow + 1;
          const politicTableKey = `politicTable${numberPolitic}_${numberRow}`;

          return (
            <tr key={politicTableKey}>
              <td className="policy__table-cell">{itemRow.cell}</td>
              <td className="policy__table-cell">{itemRow.cell2}</td>
            </tr>
          );
        });

      return (
        <div key={politicKey} className="policy__item">
          <p className="policy__item-title">{title}</p>
          {itemPolitic.subtitle && (
            <p className="policy__item-subtitle">{itemPolitic.subtitle}</p>
          )}
          {politicTextElements}
          {itemPolitic.table && (
            <table className="policy__table">
              <tbody>{politicTableElement}</tbody>
            </table>
          )}
        </div>
      );
    }
  );
  return (
    <div className="policy scroll">
      <h3 className="policy__title">{t('policy.title')}</h3>
      {politicElements}
    </div>
  );
};

export default Policy;

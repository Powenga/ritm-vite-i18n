import React from 'react';
import './Tools.scss';
import TOOLS from './constants';

const Tools: React.FC = () => {
  const toolItems = TOOLS.map((item, index) => {
    const toolKey = `tool${index}`;
    return (
      <div key={toolKey} className="tools__item">
        <img
          className={`tools__item-image  ${item.imgClass}`}
          src={item.imgSrc}
          alt={item.imgAlt}
          title={item.imgAlt}
        />
      </div>
    );
  });

  const toolListElement = <div className="tools__list">{toolItems}</div>;

  return <div className="tools">{toolListElement}</div>;
};

export default Tools;

import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './Carousel.scss';

type Props = {
  children: React.ReactNode;
};

export const CarouselItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="carousel__item" style={{ width: '100%' }}>
      {children}
    </div>
  );
};

const Carousel: React.FC<Props> = ({ children }) => {
  const CAROUSEL_DELAY = 3000;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (index: number) => {
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, CAROUSEL_DELAY);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {children}
      </div>
      <div className="carousel__indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              type="button"
              className={`carousel__indicators-button${
                index === activeIndex ? ' carousel__indicators-button_active' : ''
              }`}
              onClick={() => {
                updateIndex(index);
              }}
              aria-label="Переключатель слайда"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

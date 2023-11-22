import React, { useEffect } from 'react';
import { KEYBOARD_KEYS } from '../../utils/constants';
import './Popup.scss';

type TProps = {
  title?: string;
  message?: string;
  component?: React.ReactNode;
  closePopup: () => void;
};

const Popup: React.FC<TProps> = ({ closePopup, title, message, component }) => {
  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEYS.ESCAPE) {
        closePopup();
      }
    };
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [closePopup]);

  const handleOverlayClose = (evt: React.MouseEvent | React.KeyboardEvent) => {
    return evt.target === evt.currentTarget && closePopup();
  };

  return (
    <div
      className="popup"
      onClick={handleOverlayClose}
      onKeyDown={handleOverlayClose}
      role="presentation"
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          onClick={closePopup}
          type="button"
          aria-label="Кнопка закрытия попапа"
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {message && <p className="popup__message">{message}</p>}
        {component && component}
      </div>
    </div>
  );
};

export default Popup;

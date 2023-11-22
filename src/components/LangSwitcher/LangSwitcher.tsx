import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { langs } from '../../utils/constants';
import './LangSwitcher.scss';

const LangSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const { resolvedLanguage } = i18n;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lang-switcher">
      <button
        type="button"
        className="lang-switcher__button link"
        onClick={() => setIsOpen(!isOpen)}
      >
        {resolvedLanguage}
      </button>
      {isOpen && (
        <ul role="dialog" className="lang-switcher__list">
          {Object.keys(langs)
            .filter((lang) => lang !== resolvedLanguage)
            .map((lang) => (
              <li>
                <button
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(lang);
                    setIsOpen(false);
                  }}
                  lang="en"
                  title={langs[lang].nativeName}
                  className="lang-switcher__button link"
                >
                  {lang}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LangSwitcher;

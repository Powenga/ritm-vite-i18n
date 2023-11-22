import React, { useState } from "react";
import Line from "../Line/Line";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.scss";
import HeaderLine1 from "../../images/header-line1.svg?react";
import HeaderLine2 from "../../images/header-line2.svg?react";
import { Trans, useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { t } = useTranslation();

  const classButtonMenu = `header__button-menu${
    isMenuOpened ? " header__button-menu_opened" : ""
  }`;
  const classNav = `header__nav${isMenuOpened ? " header__nav_opened" : ""}`;
  const classLink = `link header__nav-link`;

  const handleOnButtonMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleOnNavLink = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header id="header" className="header">
      <Line lineSVG={HeaderLine1} classLineSVG="header__line1" />
      <a href="/" className="header__logo-link">
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>
      <button
        type="button"
        className={classButtonMenu}
        onClick={handleOnButtonMenu}
      >
        <span className="header__button-menu-icon" />
      </button>
      <Navigation
        classNameNav={classNav}
        classNameLink={classLink}
        onClick={handleOnNavLink}
      />
      <a href="#feedback" className="button header__button-link">
        {t("header.button")}
      </a>
      <h1 className="header__title">
        <Trans i18nKey="header.intro">
          <span className="header__title-span">
            Разрабатываем и внедряем веб приложения
          </span>
          , которые помогают оптимизировать бизнес-процессы и решить сложные
          управленческие задачи
        </Trans>
      </h1>
      <Line lineSVG={HeaderLine2} classLineSVG="header__line2" />
    </header>
  );
};

export default Header;

import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { changeLanguage } from "../redux/actions/actions";
import { getMessagesForLocale } from "../locales/translation";
import { Link } from "react-router-dom";

const Header = ({ locale, onLanguageChange }) => {
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    onLanguageChange(selectedLanguage);
  };

  return (
    <header className="header">
      <h1 className="header__title">KATAR</h1>

      <ul className="header__list">
        <li className="header__list__item">
          <Link to="/">
            <FormattedMessage id="header.home" defaultMessage="My Website" />
          </Link>
        </li>
        <li className="header__list__item">
          <Link to="/about">
            <FormattedMessage id="header.about" defaultMessage="My Website" />
          </Link>
        </li>
      </ul>

      <select className="header__select" value={locale} onChange={handleChange}>
        <option className="header__option" value="en">
          <FormattedMessage id="language_EN" defaultMessage="My Website" />
        </option>
        <option className="header__option" value="tr">
          <FormattedMessage id="language_TR" defaultMessage="My Website" />
        </option>
        <option className="header__option" value="fr">
          <FormattedMessage id="language_FR" defaultMessage="My Website" />
        </option>
      </select>
    </header>
  );
};

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  messages: getMessagesForLocale(state.intl.locale),
  languages: state.intl.languages,
});

const mapDispatchToProps = (dispatch) => ({
  onLanguageChange: (selectedLanguage) =>
    dispatch(changeLanguage(selectedLanguage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

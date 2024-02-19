import React from "react";
import { FormattedMessage } from "react-intl";
import { getMessagesForLocale } from "../locales/translation";
import { changeLanguage } from "../redux/actions/actions";
import { connect } from "react-redux";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">
        <FormattedMessage id="about.title" defaultMessage="My Website" />
      </h1>
      <div className="about__content">
        <h3 className="about__content__title">
          <FormattedMessage
            id="about.content__title"
            defaultMessage="My Website"
          />
        </h3>
        <ul className="about__content__list">
          <li className="about__content__list__item">
            <FormattedMessage
              id="about.content__listItem-1"
              defaultMessage="My Website"
            />
          </li>
          <li className="about__content__list__item">
            <FormattedMessage
              id="about.content__listItem-2"
              defaultMessage="My Website"
            />
          </li>
          <li className="about__content__list__item">
            <FormattedMessage
              id="about.content__listItem-3"
              defaultMessage="My Website"
            />
          </li>
          <li className="about__content__list__item">
            <FormattedMessage
              id="about.content__listItem-4"
              defaultMessage="My Website"
            />
          </li>
        </ul>
        <p className="about__content__desc">
          <FormattedMessage
            id="about.content__desc"
            defaultMessage="My Website"
          />
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  messages: getMessagesForLocale(state.intl.locale),
  languages: state.intl.languages,
});

const mapDispatchToProps = (dispatch) => ({
  onLanguageChange: (selectedLanguage) =>
    dispatch(changeLanguage(selectedLanguage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

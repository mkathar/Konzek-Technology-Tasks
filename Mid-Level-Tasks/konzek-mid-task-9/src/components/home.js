import React from "react";
import { FormattedMessage } from "react-intl";
import { getMessagesForLocale } from "../locales/translation";
import { changeLanguage } from "../redux/actions/actions";
import { connect } from "react-redux";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">
        <FormattedMessage id="home.title" defaultMessage="My Website" />
      </h1>
      <div className="home__content">
        <h3 className="home__content__title">
          <FormattedMessage
            id="home.content__title"
            defaultMessage="My Website"
          />
        </h3>
        <p className="home__content__story">
          <FormattedMessage
            id="home.content__story"
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

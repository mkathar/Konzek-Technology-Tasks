import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import { getMessagesForLocale } from "./locales/translation";
import { changeLanguage } from "./redux/actions/actions";

const App = ({ locale, messages }) => {
  const userLocale = locale || "en";

  return (
    <IntlProvider locale={userLocale} messages={messages}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  messages: getMessagesForLocale(state.intl.locale),
});

const mapDispatchToProps = (dispatch) => ({
  onLanguageChange: (selectedLanguage) =>
    dispatch(changeLanguage(selectedLanguage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

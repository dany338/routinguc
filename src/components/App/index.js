import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/es';
/* Defined Constants */
import { BASE_FONT_SIZE } from './config/const';
import themes from "./config/themes";
/* Components */
import Header from '../Header';
import Footer from '../Footer';
/* Pages */
import Dashboard from '../../pages/Dashboard';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import HomePage from '../../pages/HomePage';
import Users from '../../pages/Users';
import UserForm from '../../pages/UserForm';
import Maps from '../../pages/Maps';

dayjs.locale('es');

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap');
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import url("https://unpkg.com/leaflet@1.6.0/dist/leaflet.css");
  * { box-sizing: border-box }
  .App {
    align-items: center;
    font-size: ${props => props.fontSize};
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
  }

  .modal-rodal-container {
    z-index: 9999 !important;
  }
`;

const themeContext = {
  theme: themes.light,
  toogleTheme: () => {}
};

export const ThemeContext = React.createContext(themeContext);

const App = props => {
  return (
    <ThemeProvider theme={themeContext.theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/oauth/sign-in" component={SignIn} />
            <Route exact path="/oauth/sign-up" component={SignUp} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/user-form" component={UserForm} />
            <Route exact path="/user-form/:id" component={UserForm} />
            <Route exact path="/maps" component={Maps} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
      <GlobalStyle fontSize={BASE_FONT_SIZE} />
    </ThemeProvider>
  )
};

App.propTypes = {
  props: PropTypes.object
};

App.defaultProps = {
  props: {}
};

export default App;

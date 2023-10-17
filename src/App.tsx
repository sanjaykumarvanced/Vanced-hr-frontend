import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import { persistor, store } from './store/reducer';
import { RootNavigator } from './navigator/root.navigator';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { PersistGate } from 'redux-persist/integration/react';
import { apiReCaptchaKey } from './components/consts/api-url.const';
const App = () => {
  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={apiReCaptchaKey}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Router>
                <CssBaseline />
                <RootNavigator />
              </Router>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default App;

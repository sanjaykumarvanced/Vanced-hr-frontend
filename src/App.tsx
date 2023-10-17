import { BrowserRouter as Router } from "react-router-dom";
// import './App.css';
import { persistor, store } from "./store/reducer";
import { RootNavigator } from "./navigator/root.navigator";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./configs";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;

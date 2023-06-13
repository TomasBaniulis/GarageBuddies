import {BrowserRouter} from "react-router-dom";
import Content from "./components/content/Content";
import Dashboard from "./components/Dashboard/DashBoard";
import User from "./components/forms/User";
import LoginPage from "./components/forms/LoginPage";
import Car from  "./components/forms/Car";
import {Provider} from "react-redux";
import {Experimental_CssVarsProvider} from "@mui/material";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
          <Experimental_CssVarsProvider>
              <BrowserRouter>

                  <User/>
              </BrowserRouter>
          </Experimental_CssVarsProvider>
      </Provider>
  );
}

export default App;

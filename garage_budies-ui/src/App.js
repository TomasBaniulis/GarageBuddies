import {BrowserRouter} from "react-router-dom";
import Dashboard from "./components/pages/MainPageWrap/DashBoard";
import {Provider} from "react-redux";
import {Experimental_CssVarsProvider} from "@mui/material";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Experimental_CssVarsProvider>
                <BrowserRouter>
                    <Dashboard/>
                </BrowserRouter>

            </Experimental_CssVarsProvider>
        </Provider>
    );
}

export default App;

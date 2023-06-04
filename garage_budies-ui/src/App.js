import {BrowserRouter} from "react-router-dom";
import Content from "./components/content/Content";
import Dashboard from "./components/Dashboard/DashBoard";
import User from "./components/forms/User";

function App() {
  return (
    < >
        <BrowserRouter>
      <User/>
        </BrowserRouter>
    </>
  );
}

export default App;

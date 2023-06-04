import {BrowserRouter} from "react-router-dom";
import Content from "./components/content/Content";
import Dashboard from "./components/Dashboard/DashBoard";

function App() {
  return (
    < >
        <BrowserRouter>
      <Dashboard/>
        </BrowserRouter>
    </>
  );
}

export default App;

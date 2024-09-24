import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router>
        <Route path="/" exact={true} component={Home} />
      </Router>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/test"
          element={
            <>
              <h2>Pruebaaaa</h2>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

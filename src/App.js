import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import Home from "./views/Home";

//Importar Provider y envolver nuestra app
import { CartContext } from "./CartContext";
import { useItemsContext } from "./CartContext";

//Estilos
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./views/Cart";

function App() {
  const { changeMode, darkMode } = useItemsContext();
  return (
    <CartContext>
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
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContext>
  );
}

export default App;

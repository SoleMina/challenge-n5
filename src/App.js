import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components";
import Home from "./views/Home";

//Importar Provider y envolver nuestra app
import { CartContext } from "./CartContext";

//Estilos
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./views/Cart";

function App() {
  return (
    <CartContext>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartContext>
  );
}

export default App;

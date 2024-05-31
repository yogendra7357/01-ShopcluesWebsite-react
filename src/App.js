import Header from "./components/Header/Index";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import Products from "./modules/Products";
import Categories from "./components/Categories";
import Cart from "./modules/Cart";
import CategoryProducts from "./modules/CategoryProducts";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="*" element={<div>404</div>} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

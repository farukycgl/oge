
import "./index.css"
import Navbar from './layout/Navbar'
import HomePage from './pages/HomePage'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ShopPage from "./pages/ShopPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"


function App() {


  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} newestOnTop />
      <Navbar />
      <Switch>
        <Route path="/" exact ><HomePage /></Route>
        <Route path="/shop/product"><ProductDetailPage /></Route>
        <Route path="/shop"><ShopPage /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/signup"><SignupPage /></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

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
import Layout from "./layout/Layout"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"



function App() {


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact ><HomePage /></Route>
        <Route path="/shop"><ShopPage /></Route>
        <Route path="/product"><ProductDetailPage /></Route>
        <Route path="/signup"><SignupPage /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/contact"><ContactPage /></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App


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


function App() {


  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} newestOnTop />
      <Layout>
        <Switch>
          <Route path="/" exact ><HomePage /></Route>
          <Route path="/shop/product"><ProductDetailPage /></Route>
          <Route path="/shop"><ShopPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/signup"><SignupPage /></Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App

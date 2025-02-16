
import "./index.css"
import Navbar from './layout/Navbar'
import HomePage from './pages/HomePage'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ShopPage from "./pages/ShopPage"


function App() {


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact ><HomePage/></Route>
        <Route path="/shop"><ShopPage/></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

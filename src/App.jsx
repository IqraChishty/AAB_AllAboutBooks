import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./Routes/About";
import Category from "./Routes/Category";
import Contact from "./Routes/Contact";
import Home from './Routes/Home';
import Error from "./Routes/Error";
import { categories, collecion } from './assets/data/data'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
   return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>      
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about-us" element={<About />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
          <Route exact path="*" element={<Error />}></Route>

          {categories.map((categoryItem, index) => {
            return (
              <Route key={index} exact path={categoryItem.link} element={<Category category={categoryItem} />}></Route>
              )
            })}

          {collecion.map((collectionItem, index) => {
            return (
              <Route key={index} exact path={collectionItem.link} element={<Category category={collectionItem} />}></Route>
            )
          })}

        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App

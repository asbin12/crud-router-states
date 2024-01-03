import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import './router.css'
import Error from "./Error"
const Practice1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          </Route>
      </Routes>
    </>
    )
}

export default Practice1
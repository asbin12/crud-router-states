import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate=useNavigate()
  const goToHome = () => {
    navigate('/')
  }
  return (
    <>
  <section>
        <h1>Contact Page</h1>
        <button onClick={goToHome}>Go To home page</button>
  </section></>
  )
}

export default Contact
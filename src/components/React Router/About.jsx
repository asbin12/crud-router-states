import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate=useNavigate()
  const goToContact = () => {
    navigate('/contact')
  }
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
      <section>
        <h1>About Page</h1>
        <button onClick={() => goToContact()}>Go to contact page</button>
        <button onClick={goBack}>Go back</button>
  </section></>
  )
}

export default About
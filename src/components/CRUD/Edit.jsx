import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Edit = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3030/users/' + id)
      .then(res => setData(res.data))
    .catch(err=>console.log(err))
  },[])
  const handleSubmit = (e) => {
    e.preventDefault() 
    axios.put('http://localhost:3030/users/' + id,data)
      .then(res => {
        alert("data update successfully");
        navigate('/')
      })
  }
  return (
    <>
          <section className="container">
        <h2>Edit</h2>
        <form className="forms__container" onSubmit={handleSubmit}>
        <div className="form__items"> 
          <label htmlFor="name">ID:</label>
            <input type="text" disabled name='name' placeholder="Name"
              value={data.id}
             
            />
          </div>

          <div className="form__items"> 
          <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder="Name"
              value={data.name}
              onChange={e=>setData({...data,name:e.target.value})}
         
            />
          </div>
          <div className="form__items"> 
          <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder="Email"
              value={data.email}
              onChange={e=>setData({...data,email:e.target.value})}
               
            />
          </div>
          <button className="btn">Edit</button>
        </form>
    </section>
    </>
  )
}

export default Edit
// import React from 'react'

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// import { Link } from "react-router-dom"

const Create = () => {
  const [inputData, setInputData] = useState({ name: '', email: '' })
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault() 
    
    axios.post('http://localhost:3030/users', inputData)
      .then(res => {
        alert('Data Added Successfully!')
        navigate('/')
    }).catch(err=>console.log(err))
  }
  return (
    <>
        <section className="container">
        <h2>Create</h2>
        <form className="forms__container" onSubmit={handleSubmit}>
          <div className="form__items"> 
          <label>Name</label>
            <input type="text" name='name' placeholder="Name"
              required
              onChange={e=>setInputData({...inputData,name:e.target.value})}
            />
          </div>
          <div className="form__items"> 
          <label>Email</label>
            <input type="text" name='email' placeholder="Email"
              required
                  onChange={e=>setInputData({...inputData,email:e.target.value})}
            />
          </div>
          <button className="btn">Add</button>
        </form>
    </section>
    
    </>
  )
}

export default Create
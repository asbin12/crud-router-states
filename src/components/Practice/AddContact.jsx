import { useState } from "react";

const AddContact = ({addContactHandler}) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.name === ' ' || values.email === '') {
      alert('All fields are necessary')
      return
    }
    addContactHandler(values)
    setValues({name:'',email:''})
    // console.log(values)
  }
  return (
    <>
      <section className="container">
        <h2>Add Contact</h2>
        <form className="forms__container" onSubmit={handleSubmit}>
        
          <div className="form__items"> 
          <label >Name</label>
            <input type="text" name='name' placeholder="Name"
              value={values.name}
              onChange={(e) => {
                setValues((prevValues) => ({
                  ...prevValues,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form__items"> 
          <label >Email</label>
            <input type="text" name='email' placeholder="Email"
              value={values.email}
              onChange={(e) => {
                setValues((prevValues) => ({
                  ...prevValues,
                  email: e.target.value,
                }));
              }}
            />
          </div>
          <button className="btn">Add</button>
        </form>
    </section>
    </>
  )
}

export default AddContact
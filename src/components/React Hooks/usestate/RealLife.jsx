import { useState } from "react"

const RealLife = () => {
  const [value, setValue] = useState ({
    name:'',email:'',password:'',confirmPassword:''
  })
  // const [items, setItem] = useState([])
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValue((prev) => {
      return{...prev,[name]:value}
    })
  }
  return (
    <>
      <h1>Enter your form data</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter yor name"
          value={value.name }
        onChange={handleInput}/><br/>
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter yor email"  value={value.email }
        onChange={handleInput}/><br/>
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter yor password"  value={value.password }
        onChange={handleInput}/><br/>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" placeholder="Enter yor password"  value={ value.confirmPassword}
          onChange={handleInput} /><br/>
        <button type="submit">Submit</button>
      </form>
      <p>My name is {value.name} and my email is {value.email}</p>
    </>
  )
}

export default RealLife
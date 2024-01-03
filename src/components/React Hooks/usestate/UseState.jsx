import { useEffect, useState } from "react"

const UseState = () => {
  const [count, setCount] = useState(0)
  const [screenSize, setScreenSize] = useState(window.screen.width)
  useEffect(() => {
  document.title=count
  }, [count])
  const currentScreenWidth = () => {
    setScreenSize(()=>window.innerWidth)
  }
    
  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth)
    return () => {
      window.removeEventListener("resize",currentScreenWidth)
    }
  
  })
  return (
    <>
      {count}<br/>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={() => (count === 0 ? alert("Number cannot be reduce than 0") : setCount(count - 1))}>-</button>
      <h2>The size of window is <span>{ screenSize}</span></h2>
    </>
  )
}

export default UseState
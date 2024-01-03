/*
1.useState
2.useEffect
3.useLayoutEffect 
4.useRef
5.useContext 
6.useReducer
7.useMemo
8.useCallback*/

import { useContext, useEffect, useLayoutEffect, useState } from "react"
import UseState from "./usestate/UseState"
import noteContext from "../../context/notes/noteContext"

 
const Hooks = () => {
   const[num,setNum]=useState(0)
   const a = useContext(noteContext)
   useEffect(() => {
     a.update()
   },[])
   useLayoutEffect(() => {
     if(num===0) setNum(num+Math.random()*100)
   },[num])
   return (
     <>
       <h1>This is home page for now</h1>
       <p>{a.state.name} and class: {a.state.class}</p>
       
       <p>my random number {num}</p>
       <button onClick={()=>setNum(0)}>random num</button>
       <UseState />
       
     </>
     
   )
 }
 
 export default Hooks
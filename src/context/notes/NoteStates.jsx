import { useState } from "react";
import NoteContext from "./noteContext";
const NoteStates = ({ children }) => {
  const s1 = {
    name: "harry",
    class:"102"
  }
  const [state, setState] = useState(s1)
 const update = () => {
   setTimeout(() => {
     setState({
       name: "Larry",
      class:"10a"
      })
    },1000)
  }
  return <>
    <NoteContext.Provider value={{state, update}}>
      {children}
  </NoteContext.Provider>
    </>;
};

export default NoteStates;

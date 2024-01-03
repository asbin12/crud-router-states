// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Crud from "./Crud"
import Create from "./Create"
import Edit from "./Edit"

const AppRoute = () => {
  return (
      <Routes>
              <Route path="/" element={<Crud/>}></Route>
              <Route path="create" element={<Create/>}></Route>
              <Route path="update/:id" element={<Edit/>}></Route>
      </Routes>
  )
}

export default AppRoute
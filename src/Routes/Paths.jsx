import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from '../pages/Help'

const Paths = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Help/>} />
        </Routes>
    </div>
  )
}

export default Paths
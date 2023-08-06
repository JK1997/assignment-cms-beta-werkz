import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignIn from './SignIn'
import AddStaff from './staffPages/AddStaff'
import StaffList from './staffPages/StaffList'

function App () {
  return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="staffList" element={<StaffList />} />
            <Route path="addStaff" element={<AddStaff />} />
        </Routes>
  )
}

export default App

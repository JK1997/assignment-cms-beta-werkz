import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignIn from './SignIn'
import AddStaff from './staffPages/AddStaff'
import EditStaff from './staffPages/EditStaff'
import StaffList from './staffPages/StaffList'

function App () {
  return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="staffList" element={<StaffList />} />
            <Route path="addStaff" element={<AddStaff />} />
            <Route path="editStaff/:id" element={<EditStaff />} />
        </Routes>
  )
}

export default App

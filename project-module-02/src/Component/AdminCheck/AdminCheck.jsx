import React from 'react'
import './AdminCheck.css'

import CheckUser from '../CheckUser/CheckUser'
import NavbarAdmin from '../ADMIN/NavbarAdmin'
import CheckListMusic from '../CheckListMusic/CheckListMusic'



const AdminCheck = () => {
  return (
    <div className='wrapper-admin'>
        <NavbarAdmin/>
        <CheckUser/>
    </div>
  )
}

export default AdminCheck
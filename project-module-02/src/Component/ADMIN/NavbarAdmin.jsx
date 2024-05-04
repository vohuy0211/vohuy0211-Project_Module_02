import React from 'react'
import "./NavbarAdmin.css"
import { FiUserCheck } from 'react-icons/fi'
import { AiOutlineUnorderedList } from 'react-icons/ai'
const NavbarAdmin = () => {
  return (
    <div className='wrapper-admin'>
      <div className='wrapper-navbar-admin'>
        <div>
          <img src="https://seeklogo.com/images/Z/zingmp3-logo-0D5EB40D13-seeklogo.com.png" alt="" />
        </div>
        <ul>
          <li>
            <FiUserCheck /> User Management
          </li>
          <li>
            <AiOutlineUnorderedList />Manage playlists
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarAdmin
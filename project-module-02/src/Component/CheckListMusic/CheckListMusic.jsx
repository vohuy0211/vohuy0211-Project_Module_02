import React from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import NavbarAdmin from '../ADMIN/NavbarAdmin'
import './CheckListMusic.css'
const CheckListMusic = () => {
    return (

        <div>
            <div>
                <NavbarAdmin />
            </div>
            <div className='admin-CheckUser'>
                <div >
                    <h1>Quản lý người dùng</h1>
                </div>
                <div className='admin-checkUserTable'>
                    <table>
                        <thead>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tên người dùng</th>
                            <th>Email</th>
                            <th>Hành động</th>
                        </thead>
                        <tbody >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td >
                                <button>

                                </button>
                                <button>
                                    <AiOutlineDelete />
                                </button>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CheckListMusic
import React from 'react'
import './headers.css'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from "@mui/material"
import {BiUserCircle} from 'react-icons/bi'
export const Headers = () => {
    // const users = useSelector(state => state.user)
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(users);
    return (
        <div className='wrapper'>
            <div className="wrapper-header-left">
                <i class="fa-solid fa-arrow-left" style={{ color: "#595462" }}></i>
                <i class="fa-solid fa-arrow-right" style={{ color: "#595462" }}></i>
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }} />
                <input type="text" placeholder='Tìm kiếm bài hát , nghệ sĩ , lời bài hát...' />
            </div>
            <div className="wrapper-header-right">
                <button className='icon-item'>
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <h5>Tải bản Windows</h5>
                </button>
                <button className='icon-item-st'>
                    <i class="fa-solid fa-gear"></i>
                </button>
                <Link to="/sign-up">
                    {user ? (
                        <div>
                            <Avatar className='avatar-img'>{user.lastName}</Avatar>
                            <Link to="/sign-in">Đăng xuất</Link>
                        </div>
                    ) :
                        (
                            <div className='icon-user'>
                                <BiUserCircle />
                            </div>
                        )

                    }
                    {/* // <Avatar>{user.lastName}</Avatar> */}
                    {/* <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.35/static/media/user-default.3ff115bb.png" alt=""></img> */}

                </Link>
            </div>
        </div>
    )
}

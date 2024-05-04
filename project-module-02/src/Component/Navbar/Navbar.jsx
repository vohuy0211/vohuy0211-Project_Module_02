import React from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { AiFillAmazonCircle, AiOutlineWindows, AiOutlineStar } from "react-icons/ai";
import { FiStopCircle } from "react-icons/fi";
import { BsUiRadios } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { HiMusicNote } from "react-icons/hi";
export const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("users"));
    // console.log("ádasdasd", user);
    const handleCheck = () => {
        if (!user) {
            navigate('/sign-in');
        } else {
            navigate('/favorite-list')
        }
    }
    return (
        <div className='Wrapper-Navbar'>
            <div>
                <Link to='/'>
                    <img className="item-img " src='https://seeklogo.com/images/Z/zingmp3-logo-0D5EB40D13-seeklogo.com.png' />
                </Link>

            </div>
            <div className="wrapper-list">
                <ul className="box-1">
                    <li>
                        <FiStopCircle /> Khám phá
                    </li>
                    <li>
                        <AiFillAmazonCircle />#zingchart
                    </li>
                    <li>
                        <BsUiRadios /> Radio
                    </li>
                    <li>
                       <div  onClick={() => handleCheck()}>
                            <BiBookBookmark />Favorite Playlist
                        </div>
                    </li>
                </ul>
                <ul className='box-2'>
                    <li>
                        <HiMusicNote /> Nhạc mới
                    </li>
                    <li>
                        <AiOutlineWindows />Chủ đề và thể loại
                    </li>
                    <li>
                        <AiOutlineStar /> Top 100
                    </li>
                </ul>

            </div>

        </div>
    )
}

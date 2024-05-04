import React from 'react'
import { Headers } from '../Component/Headers/headers'
import { Navbar } from '../Component/Navbar/Navbar'
import { Playbar } from '../Component/Playbar/Playbar'
import Slider from '../Component/Slider/Slider'
// import { HomeMusic } from '../Component/ListMusic/HomeMusic'
import './Home.css'
import { NavLink, Outlet, Router } from 'react-router-dom'
import ChillMusic from '../Component/ChillMusic/ChillMusic'
import MusicClassic from '../Component/MusicClassic/MusicClassic'
import NavbarAdmin from '../Component/ADMIN/NavbarAdmin'
import CheckUser from '../Component/CheckUser/CheckUser'

export const Home = () => {
    return (
        <div >
            <div>
                <Navbar />
                <Headers />
                <Playbar />
                <div className='content-wrapper' style={{ paddingBottom: "100px" }}>
                    <Slider />
                    <div className='HomeMusic'>
                        <h2>Mới phát hành</h2>
                        <div className='ListHome'>
                            <div  className={Router.pathname === "/all-music" ? "active" : ""} >
                                <NavLink className='color-size' to='/all-music' >TẤT CẢ</NavLink>
                            </div>
                            <div className={Router.pathname === "/vn-music" ? "active" : ""}>
                                <NavLink className='color-size' to='/vn-music' >VIỆT NAM</NavLink>
                            </div>
                            <div className={Router.pathname === "/el-music" ? "active" : ""}>
                                <NavLink className='color-size' to='/el-music'> QUỐC TẾ</NavLink>
                            </div>
                        </div>
                        <Outlet />

                    </div>
                    <ChillMusic />
                    <MusicClassic />
                </div>
            </div>
        </div>
    )
}

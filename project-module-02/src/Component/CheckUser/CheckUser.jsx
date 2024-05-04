import React, { useEffect, useState } from 'react'
import './CheckUser.css'
import { useDispatch, useSelector } from 'react-redux'
import { UserAPI } from '../../Api/User';
import { Router } from 'react-router-dom';
import { BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
import { checkStatus } from '../../Redux/Reducer/UserSlice';


const CheckUser = () => {

    // call trực tiếp tại component 
    /*
        bước 1: em tạo ra state để lưu trữ kết quả khi call data về
        bước 2: tạo ra useEffect rồi tạo ra cái hàm callAPI, cái hàm đấy phải là bất đồng bộ 
            ==>  trong hàm bất đồng bộ phải callAPI
        
        */
       
    const [userList, setUserList] = useState([]);
    const [activeUsers, setActiveUsers] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserAPI.getAllUsers();
                setUserList(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])


    const handleActiveUser = async (id) => {
        console.log("id của tao đâu", id);
        const status = userList.find((user) => user.id == id)

        await dispatch(checkStatus(id)).unwrap();

    }

    // console.log("use", userList);
    return (
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

                    {userList.map((user, index) => {
                        return (
                            <tbody key={index}>
                                <td>{index + 1}</td>
                                <td>....</td>
                                <td>{user.firstName}</td>
                                <td>{user.email}</td>
                                <td className={activeUsers.includes(user.id) ? "Active" : "UnActive"}>
                                    <button onClick={() => handleActiveUser(user.id)}>
                                        {activeUsers.includes(user.id) ? "Unactive" : "Active"}
                                    </button>
                                    <button>
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tbody>
                        )
                    })}

                </table>
            </div>
        </div>
    )
}

export default CheckUser
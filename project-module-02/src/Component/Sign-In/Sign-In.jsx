import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Reducer/UserSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Sign-In.css'
export const SignIn = () => {
    useEffect(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('accessTokenRegister')
    }, [])
    const navigation = useNavigate()
    const [inputValue, setInputValue] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }
    const user = JSON.parse(localStorage.getItem('users'))

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await dispatch(login(inputValue)).unwrap()
            toast.success('Đăng nhập thành công', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            data && setTimeout(() => {
                if (user.email == "huyvo02112003@gmail.com") {
                    navigation("/admin")
                } else {
                    navigation("/")

                }
            }, 3000);
        } catch (error) {
            // console.log(error.message);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div>
                    <label>Email</label>
                    <input type='email'
                        name='email'
                        placeholder='Nhập Email .....'
                        onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password'
                        name='password'
                        placeholder='Nhập mật khẩu.....'
                        onChange={handleChange} />
                </div>
                <input type='submit' value='Log in' className='hover' />
                <Link to='/sign-up'>
                    Bạn chưa có tài khoản ???
                </Link>
            </form>

        </div>

    )
}

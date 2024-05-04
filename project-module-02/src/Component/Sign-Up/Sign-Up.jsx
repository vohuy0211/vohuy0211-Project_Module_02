import React from 'react';
import './Sign-Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { register } from '../../Redux/Reducer/UserSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SignUp = () => {
    const nagivation = useNavigate()
    const [inputValue, setInputValue] = useState({});
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
            active: 1
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await dispatch(register(inputValue)).unwrap();
            toast.success('Sign up successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                nagivation("/sign-in")
            }, 3000)
        } catch (err) {
            console.error(err.message)
            toast.error(err.message, {
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
                    <label>First Name</label>
                    <input type='text'
                        name='firstName'
                        placeholder='Họ.....'
                        onChange={handleInputChange} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' name='lastName' placeholder='Tên.....' onChange={handleInputChange} />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type='text' name='firstName' placeholder='Nhập số điện thoại .....' onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Nhập Email .....' onChange={handleInputChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Nhập mật khẩu mới.....' onChange={handleInputChange} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' placeholder='Xác nhận mật khẩu .....' onChange={handleInputChange} />
                </div>
                <input type='submit' value="Register" className='btn' />

                <Link to="/sign-in">
                    Bạn đã có tài khoản ???
                </Link>
            </form>


        </div>
    );
};

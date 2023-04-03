import React, { useState } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email:"",
        password:""
    });
    const API_URL = "http://localhost:5000/api/user/login";
    const inputHandler = (e) => {
        setLoginForm({...loginForm, [e.target.name] : e.target.value});
    }
    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API_URL, loginForm);
        console.log(response);
        setLoginForm({
            email:"",
            password:""
        });
    }
    return (
        <>
            <Header />
            <Meta title={"Login"} />
            <BreadCrump title="Login" />

            <div className="login-wrapper home-wrapper-2 padded-content py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Login</h3>
                                <form className="d-flex flex-column gap-15">
                                    <div>
                                        <input type="email" onChange={inputHandler} name="email" value={loginForm.email} className="form-control" placeholder="Email"/> 
                                    </div>
                                    <div className="mt-1">
                                        <input type="password" onChange={inputHandler} name="password" value={loginForm.password} className="form-control" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <Link to="/forgot-password" >Forgot Password?</Link>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                                        <button onClick={handleClick} className="blog-btn border-0">Login</button>
                                        <Link to="/SignUp" className="blog-btn signUp">SignUp</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
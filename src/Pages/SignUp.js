import React, { useState } from 'react';
import BreadCrump from '../components/BreadCrump';
import Header from '../components/Header';
import Meta from '../components/Meta';
import axios from 'axios';

const SignUp = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: ""
    });
    const API_URL = "http://localhost:5000/api/user/register";
    const inputHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
   const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API_URL, user)
        console.log("response",response);
        setUser({
            firstName:"",
            lastName:"",
            email:"",
            mobile:"",
            password:""
        });
            /* .then(response => console.log("response", response))
            .catch(error => console.log("error", error)) */
    }


    return (
        <>
            <Header />
            <Meta title={"SignUp"} />
            <BreadCrump title="SignUp" />

            <div className="signup-card-wrapper home-wrapper-2 padded-content py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="signup-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                <form className="d-flex flex-column gap-15 ">
                                    <div>
                                        <input type="text" onChange={inputHandler} name="firstName" value={user.firstName} className="form-control" placeholder="FirstName" />
                                    </div>
                                    <div>
                                        <input type="text" onChange={inputHandler} name="lastName" value={user.lastName} className="form-control" placeholder="LastName" />
                                    </div>
                                    <div>
                                        <input type="email" onChange={inputHandler} name="email" value={user.email} className="form-control" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="tel" onChange={inputHandler} name="mobile" value={user.mobile} className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="password" onChange={inputHandler} name="password" value={user.password} className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button onClick={handleClick} className="submit-btn">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;

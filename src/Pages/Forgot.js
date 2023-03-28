import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import Header from "../components/Header";
import { Link } from "react-router-dom";


const Forgot = () => {
    return(
        <>
        <Header/>
        <Meta title={"Forgot-password"}/>
        <BreadCrump title="Account"/>

        <div className="forgot-password-wrapper home-wrapper-2 padded-content py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="forgot-card">
                            <h3 className="text-center">Reset Your Password</h3>
                            <p className="text-center mt-3">We will send you an email to reset your password</p>
                            <form>
                                <input type="email" name="email" className="form-control" placeholder="Email"/>
                                <div className="d-flex flex-column align-items-center gap-15 mt-4">
                                    <button className="submit-btn  ">Submit</button>
                                    <Link to="/login">Cancel</Link>
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

export default Forgot;
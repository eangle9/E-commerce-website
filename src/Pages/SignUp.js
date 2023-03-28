import React from 'react';
import BreadCrump from '../components/BreadCrump';
import Header from '../components/Header';
import Meta from '../components/Meta';

const SignUp = () => {
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
                                        <input type="text" name="name" className="form-control" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="email" name="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input type="tel" name="mobile" className="form-control" placeholder="Mobile Number"/>
                                    </div>
                                    <div>
                                        <input type="password" name="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="submit-btn">Sign Up</button>
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

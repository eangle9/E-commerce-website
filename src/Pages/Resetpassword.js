import React from 'react';
import BreadCrump from '../components/BreadCrump';
import Header from '../components/Header';
import Meta from '../components/Meta';

const Resetpassword = () => {
    return (
        <>
            <Header />
            <Meta title={"Reset Password"} />
            <BreadCrump title="Reser Password" />

            <div className="signup-card-wrapper home-wrapper-2 padded-content py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="signup-card">
                                <h3 className="text-center mb-3">Reset Password</h3>
                                <form className="d-flex flex-column gap-15 ">
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="psssword"
                                            name="Confpassword"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="submit-btn">Ok</button>
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

export default Resetpassword;

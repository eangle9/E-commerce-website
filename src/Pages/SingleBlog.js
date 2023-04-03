import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";


const SingleBlog = () => {
    return (
        <>
            <Header />
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrump title="Dynamic Blog Name" />


            <div className="blog-wrapper home-wrapper-2 padded-content py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="category">
                                <h3>Shop By Categories</h3>
                                <div>
                                    <ul>
                                        <li>Home</li>
                                        <li>Our Store</li>
                                        <li>Blogs</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="single-blog">
                                <h3 className="blog-title">
                                    A Beutiful Sunday Morning Renaissance
                                </h3>
                                <div>
                                    <img
                                        src="images/blog-01.png.jpg"
                                        className="img-fluid w-100 py-5"
                                        alt="blog"
                                    />
                                </div>
                                <p className="blog-details">
                                    This is useful to see far objects in a clear image ,
                                    you are only as good as last collection and you must be buy it
                                    because of the security and acording to the policy of the government
                                </p>
                                <p className="mt-4 mb-5 date">11 JUN, 2022 Ethiopia</p>
                                <div className="divider">
                                    <div>
                                        <Link
                                            to="/blogs"
                                            className="d-flex align-items-center gap-10 back">
                                            <BiArrowBack className="fs-5 " />
                                               Back to blog
                                        </Link>
                                    </div>
                                    <div className="social-icons">
                                        <a href="facebook.com" target="_blank">
                                            <FaFacebook className="fs-5" />
                                        </a>
                                        <a href="twitter.com" target="_blank">
                                            <FaTwitter className="fs-5" />
                                        </a>
                                        <a href="https://github.com/eangle9/E-commerce-website" target="_blank">
                                            <FaGithub className="fs-5" />
                                        </a>
                                    </div>
                                </div>
                                <div className="comment-card">
                                    <h3 className="mb-3">Leave A Comment</h3>
                                    <form className="d-flex flex-column w-100">
                                        <div className="d-flex align-items-center gap-30 w-100 mb-5">
                                            <input type="text" name="name" className="form-control" placeholder="Name*" />
                                            <input type="email" name="email" className="form-control" placeholder="Email*" />
                                        </div>
                                        <div>
                                            <textarea rows="8" className="w-100 mb-5 comment-area" placeholder="Comments*"/>
                                        </div>
                                        <div className="d-flex align-items-center  w-100">
                                            <button className="submit-btn ">Post Comment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleBlog;
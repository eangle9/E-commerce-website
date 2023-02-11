import React from 'react';
import { BsLinkedin, BsYoutube, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className=" padded-content py-4 ">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-15 align-items-center">
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group ">
                                <input
                                    type="text" className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-2" id="basic-addon2" >
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className=" padded-content py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div className="footer-links d-flex flex-column ">
                                <address className="text-white fs-6">
                                    Addis Store <br />No. 8822 Tulu, Addis Ababa <br />Addis Ababa
                                   </address>
                                <a className="text-white mt-3 d-block mb-1" href="tel:+251-993975022">+251-993975022</a>
                                <a className="text-white mt-2 d-block mb-0" href="mail to:engdaworkyismaw9@gmail.com">engdaworkyismaw9@gmail.com</a>
                            </div>
                            <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                <a className=" text-white" href="">
                                    <BsLinkedin className="fs-4" />
                                </a>
                                <a className="text-white" href="">
                                    <BsYoutube className="fs-4" />
                                </a>
                                <a className=" text-white" href="">
                                    <BsGithub className="fs-4" />
                                </a>
                                <a className=" text-white" href="">
                                    <BsInstagram className="fs-4" />
                                </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column ">
                                <a className="text-white py-2 mb-1" href="#">Private Policy</a>
                                <a className="text-white py-2 mb-1" href="#">Refund Policy</a>
                                <a className="text-white py-2 mb-1" href="#">Shipping Policy</a>
                                <a className="text-white py-2 mb-1" href="#">Terms of Service</a>
                                <a className="text-white py-2 mb-1" href="#">Blogs</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column ">
                                <a className="text-white" href="#">Search</a>
                                <a className="text-white py-2 mb-1" href="#">About Us</a>
                                <a className="text-white py-2 mb-1" href="#">Faq</a>
                                <a className="text-white py-2 mb-1" href="#">Contact</a>
                                <a className="text-white py-2 mb-1" href="#">Size Chart</a>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column ">
                                <a className="text-white py-2 mb-1" href="#">Accessories</a>
                                <a className="text-white py-2 mb-1" href="#">Laptops</a>
                                <a className="text-white py-2 mb-1" href="#">Headphones</a>
                                <a className="text-white py-2 mb-1" href="#">Smart Watches</a>
                                <a className="text-white py-2 mb-1" href="#">Tablets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className=" padded-content py-4">
                <div className="container-xxl">
                    <div className="col-12">
                        <p className="text-center text-white mb-0">
                            &copy; {new Date().getFullYear()}; Developer by Addis;
                            </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

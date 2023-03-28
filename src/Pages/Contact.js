import React from 'react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BreadCrump from '../components/BreadCrump';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';


const Contact = (props) => {
    const { title } = props;
    return (
        <>
            <Header />
            <Meta title={"Contact"} />
            <BreadCrump title="Contact Us" />
            <div className="contact-wrapper py-5 padded-content home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 contact-inner-wrapper back-color" >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6146764.727551184!2d36.28132351014861!3d8.587938754835536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2sEthiopia!5e0!3m2!1sen!2sde!4v1679897671218!5m2!1sen!2sde"
                                width="600"
                                height="450"
                                className="border-0 w-100"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="d-flex justify-content-between contact-inner-wrapper ">
                                <div>
                                    <h3 className="contact-title">Contact</h3>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name" />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email" />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Mobile" />
                                        </div>
                                        <div>
                                            <textarea
                                                className="form-control w-100 "
                                                id=""
                                                name=""
                                                cols="30"
                                                rows="4"
                                                placeholder="Comments"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button className='blog-btn border-0'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title">Get In Touch With Us</h3>
                                    <div>
                                        <ul className="ps-0 ">
                                            <li className="mb-3 d-flex gap-15 align-items-center ">
                                                <AiOutlineHome className="fs-5" />
                                                <address className="mb-0">
                                                    Condominum Block 22:88, TuluDimtu, AddisAbaba, Ethiopia
                                                </address>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiPhoneCall className="fs-5" />
                                                <a href='tel:+251 993975022'>+251 993975022</a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiOutlineMail className="fs-5" />
                                                <a href='mail to:engdaworkyismaw9@gmail.com'>
                                                    engdaworkyismaw9@gmail.com
                                                </a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiInfoCircle className="fs-5" />
                                                <p className="mb-0">Monday-Friday 10AM-8AM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

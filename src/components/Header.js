import React from 'react';
import {  Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
    return (
        <div id="header">
            <header className="header-top-strip padded-content py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Free shipping over $100 and Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">Hotline:<a className="text-white" href="tel:+251 993975022">+251 993975022</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper padded-content py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">

                        <div className="col-2">
                            <h3>
                                <Link to='/' className="text-white">Dev Addis.</Link>
                            </h3>
                        </div>
                        <div className="col-5">
                            <div className="input-group ">
                                <input
                                    type="text" 
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-3" id="basic-addon2" >
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white" >
                                        <img src="images/compare.svg" alt="compare" />
                                        <p className="mb-0">Compare <br /> Products</p>
                                    </Link >
                                </div>
                                <div>
                                    <Link to="/wishlist"  className="d-flex align-items-center gap-10 text-white" >
                                        <img src="images/wishlist.svg" alt="wishkist" />
                                        <p className="mb-0">Favorite <br /> Wishlist</p>
                                    </Link >

                                </div>
                                <div>
                                    <Link to="/login" className="d-flex align-items-center gap-10 text-white" >
                                        <img src="images/user.svg" alt="user" />
                                        <p className="mb-0">Log in <br /> My Account</p>
                                    </Link >
                                </div>
                                <div>
                                    <Link to="/cart"  className="d-flex align-items-center gap-10 text-white" >
                                        <img src="images/cart.svg" alt="cart" />
                                        <div>
                                            <span className="badge bg-white text-dark" >0</span>
                                            <p className="mb-0">$500</p>
                                        </div>
                                    </Link >
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom padded-content py-3">
                <div className="container-xxl">
                    <div className="col-12">
                        <div className="menu-bottom d-flex align-items-center gap-30">
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/menu.svg" alt="menu" />
                                        <span className="me-5 d-inline-block">shop categories</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links d-flex align-items-center gap-15">
                                <Link to="/">Home</Link>
                                <Link to="/store">our store</Link>
                                <Link to="/blogs">blogs</Link>
                                <Link to="/contact"> contact</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Header;

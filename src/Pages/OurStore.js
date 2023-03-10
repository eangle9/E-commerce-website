import React from "react";
import Meta from '../components/Meta';
import { Link } from "react-router-dom";
import Header from '../components/Header';

const OurStore = (props) => {
    const { title } = props;
    return (
        <>
            <Header />
            <Meta title={"Our Store"} />
            <div className="BreadCrump py-5 padded-content mb-0">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0">
                                <Link
                                    to="/" className="text-dark">Home &nbsp;
                            </Link>
                                 / {title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="store-wrapper padded-content home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop by Categories</h3>
                                <div>
                                    <ul className="filter-links">
                                        <li>Home</li>
                                        <li>Our Store</li>
                                        <li>Blogs</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id=""
                                            value="" />
                                        <label className="form-check-label" htmlFor="">In Stock(2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id=""
                                            value=""
                                        />
                                        <label className="form-check-label" htmlFor="">Out of Stock(0)</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="user-email">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div class="form-floating mb-3 ">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput1"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div>
                                    <ul className="colors">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div class="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox" 
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            S (2)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox" 
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3"></div>
                            <div className="filter-card mb-3"></div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurStore;
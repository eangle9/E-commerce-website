import React, { useState } from "react";
import Meta from '../components/Meta';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";



const OurStore = () => {
    const[grid,setGrid]=useState(4);
    alert(grid);
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
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Product Tag</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Headphones
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Oppo
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Speaker
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Tablet
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Vivo
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Wire
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Random Products</h3>
                                <div>
                                    <div className="random-products ">
                                        <div className="random-1">
                                            <div className="w-50">
                                                <img className="r-headphones img-fluid" src="images/headphone.jpg" alt="headphone" />
                                            </div>

                                            <div className="w-50">
                                                <h5>Kids Headphones Bulk 10 pack Multi-colored For...</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    activeColor="#ffd700"
                                                    value="4"
                                                    edit={false}
                                                />
                                                <b> $ 100</b>
                                            </div>
                                        </div>
                                        <div className="border-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{width: "100px"}} >Sort By:</p>
                                        <select name="" className="form-control form-select" id="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best Selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-desccending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>

                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="total-products mb-0">21Products</p>
                                        <div className="d-flex align-items-center gap-10 grid">
                                            <img
                                                src="images/gr4.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                src="images/gr3.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                src="images/gr2.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                src="images/gr.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <ProductCard grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurStore;
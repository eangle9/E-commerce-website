import React, { useState } from "react";
import BreadCrump from "../components/BreadCrump";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Header />
            <Meta title={"Product Name"} />
            <BreadCrump title="Product Name" />

            <div className="main-product-wrapper padded-contet home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper padded-content py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="description" style={{ backgroundColor: "white", padding: "1rem", marginTop: "3px" }}>
                                <p>This is useful to see far objects in a clear image ,
                                you are only as good as last collection and
                                you must be buy it because of the security
                                and acording to the policy of the government, A beutiful sunday morning renaissance
                                This is useful to see far objects in a clear image
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-wrapper home-wrapper-2 padded-content py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="inner-review-wrapper">
                            <div className="review-head"
                                style={{
                                    display: "flex", justifyContent: "space-between", alignItems: "end",
                                }}>
                                <div>
                                    <h4>Customer Reviews</h4>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={4}
                                            edit={false}
                                        />
                                        <p style={{ marginBottom: "0" }}>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                <div>
                                    {orderedProduct && (
                                        <div>
                                            <a style={{ textDecoration: "underline" }} href="">Write a Review</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="review-form">
                                <h6>Write a Review</h6>
                                <form>
                                    <label>Name:</label>
                                    <input type="text" name="name" className="form-control" placeholder="Enter your name" />
                                    <label>Email:</label>
                                    <input type="email" name="email" className="form-control" placeholder="engdawork@gmail.com" />
                                </form>
                                <div style={{ margin: "10px 0px" }}>
                                    <p className="p-rating" style={{ marginBottom: "0", fontSize: "14px" }}>Rating</p>
                                    <ReactStars
                                        count={5}
                                        size={15}
                                        activeColor=""
                                        value=""
                                        edit={false}
                                    />
                                </div>
                                <form>
                                    <label>Review Title</label>
                                    <input type="text" className="form-control" placeholder="Give your review a title" />
                                    <div>
                                        <label for="">Body of Review(1500)</label>
                                        <textarea
                                            className="form-control w-100 "
                                            id=""
                                            name=""
                                            cols="30"
                                            rows="4"
                                            placeholder="Write your comments here"
                                        ></textarea>
                                    </div>
                                    <div style={{ margin: "15px 0px", display: "flex", width: "100%", justifyContent: "end" }}>
                                        <button className='blog-btn border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="review-bottom">
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "20px 0px" }}>
                                    <h6 style={{ marginBottom: "0" }}>Navdeep</h6>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={4}
                                        edit={false}
                                    />
                                </div>
                                <p>This is useful to see far objects in a clear image ,
                                you are only as good as last collection and
                                you must be buy it because of the security
                                and acording to the policy of the government,A beutiful sunday morning renaissance
                                This is useful to see far objects in a clear image
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="featured-wrapper padded-content blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingleProduct;
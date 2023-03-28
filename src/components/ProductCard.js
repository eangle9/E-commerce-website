import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {  useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const grid=props;
    let location = useLocation;
    console.log(location);
    return (
        <>
            <div className="col-2">
            {/* {`${location.pathName == "/store"}? col-${grid} : "col-3"`}  */}
                <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                            <img src="images/wish.svg" alt="wish" />
                    </div>
                    <div className="product-image">
                        <img src="images/watch.jpg" className="img-fluid" alt="product" />
                        <img src="images/headphone.jpg" alt="product" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havells</h6>
                        <h5 className="title">Made in China bejing on 2022 </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value="3"
                            edit={false}
                        />
                        <p className="price">$100</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-10">
                            <a href="#">
                                <img src="images/prodcompare.svg" alt="compare" />
                            </a>
                            <a href="#">
                                <img src="images/view.svg" alt="compare" />
                            </a>
                            <a href="#">
                                <img src="images/add-cart.svg" alt="compare" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
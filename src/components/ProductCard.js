import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
    const { grid } = props
    let location = useLocation();
    return (
        <>
            <div
                className={`${location.pathname == "/store" ? `gr-${grid}` : "col-2"}`}
            >
                <Link to="/:id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <img src="images/wish.svg" alt="wish" />
                    </div>
                    <div className="product-image">
                        <img src="images/watch.jpg" className="images-f" alt="product" />
                        <img src="images/watch-02.webp" className="img-fluid watch-02" alt="product" />
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
                </Link>
            </div>
            
        </>
    );
}

export default ProductCard;
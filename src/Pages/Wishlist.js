import React from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';


const Wishlist = () => {
    return (
        <>
            <Header />
            <Meta title={"Wishlist"} />
            <BreadCrump title="Wishlist" />

            <div className="product-wishlist-wrapper home-wrapper-2 padded-content py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="wishlist-image">
                                    <img
                                        src="images/tab.jpg"
                                        alt="speaker"
                                        className="img-fluid w-100"
                                    />
                                </div>
                            </div>
                            <div className="wishlist-product-details py-3 px-3">
                                <h5 className="wishlist-title ">
                                    Honor T17.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="wishlist-price mt-3">
                                    $100.00
                                </h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="wishlist-image">
                                    <img
                                        src="images/tab.jpg"
                                        alt="speaker"
                                        className="img-fluid w-100"
                                    />
                                </div>
                            </div>
                            <div className="wishlist-product-details py-3 px-3">
                                <h5 className="wishlist-title ">
                                    Honor T17.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="wishlist-price mt-3">
                                    $100.00
                                </h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="wishlist-image">
                                    <img
                                        src="images/tab.jpg"
                                        alt="speaker"
                                        className="img-fluid w-100"
                                    />
                                </div>
                            </div>
                            <div className="wishlist-product-details py-3 px-3">
                                <h5 className="wishlist-title ">
                                    Honor T17.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="wishlist-price mt-3">
                                    $100.00
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;
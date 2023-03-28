import React from 'react';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import Header from '../components/Header';
import Colors from '../components/Colors';

const Compare = () => {
    return (
        <>
            <Header />
            <Meta title={"Compare"} />
            <BreadCrump title="Compare" />

            <div className="compare-product-wrapper padded-content py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute "
                                />
                                <div className="product-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        alt="watch"
                                        className="img-fluid w-100"
                                    />
                                </div>
                            </div>
                            <div className="product-card-details">
                                <h5 className="title mt-3">
                                    Honor T17.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                <h6 className="price mb-3 mt-3">
                                    $ 100
                                    </h6>
                            </div>
                            <div className="product-details">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>
                            <div className="product-details">
                                <h5>SKU:</h5>
                                <p>SKU33</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Color:</h5>
                                <Colors />
                            </div>
                            <div className="product-details">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute "
                                />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                                </div>
                            </div>
                            <div className="product-card-details">
                                <h5 className="title mt-3">
                                    Honor T17.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                <h6 className="price mb-3 mt-3">
                                    $ 100
                                    </h6>
                            </div>
                            <div className="product-details">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>
                            <div className="product-details">
                                <h5>SKU:</h5>
                                <p>SKU33</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Color:</h5>
                                <Colors />
                            </div>
                            <div className="product-details">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Compare;
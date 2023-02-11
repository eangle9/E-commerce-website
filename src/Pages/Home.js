import React from 'react';

const Home = () => {
    return (
        <>
            <section className=" padded-content home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative ">
                                <img
                                    src="images/main-banner-1.jpg"
                                    className="img-fluid rounded-3"
                                    alt="main-banner"
                                />
                                <div className="main-banner-content position-absolute">
                                    <h4>supercharged for pros</h4>
                                    <h5>iPad S13+ pro.</h5>
                                    <p>From $900.00 or $41.62/mo.</p>
                                    <button>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
                                <div className="small-banner position-relative ">
                                    <img
                                        src="images/catbanner-01.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>best sale</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $1699 or <br/>$64.62/mo.</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative ">
                                    <img
                                        src="images/catbanner-02.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% off</h4>
                                        <h5>SmartWatch 7</h5>
                                        <p>Shop the latest band</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative ">
                                    <img
                                        src="images/catbanner-03.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>new arrival</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $999.00 or <br/> $41.62/mo.</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative ">
                                    <img
                                        src="images/catbanner-04.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>free engraving</h4>
                                        <h5>AirPods Max</h5>
                                        <p>High-fidelity playback</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <section className=" padded-content home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex gap-15 justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-30">
                                <img src="images/service.png" alt="service"/>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p>From all orders over $100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
}

export default Home;

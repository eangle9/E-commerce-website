import React from 'react';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

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
                                        <p>From $1699 or <br />$64.62/mo.</p>
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
                                        <p>From $999.00 or <br /> $41.62/mo.</p>
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
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service.png" alt="service" />
                                    <div>
                                        <h6>Free Shipping </h6>
                                        <p className="mb-0">From all orders over $100</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-02.png" alt="sevice" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className="mb-0">Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-03.png" alt="sevice" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className="mb-0">Shop with an expert</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-04.png" alt="sevice" />
                                    <div>
                                        <h6>Affordable prices</h6>
                                        <p className="mb-0">Get Factory Default Price</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-05.png" alt="sevice" />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className="mb-0">100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="padded-content home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="categories d-flex  flex-wrap  justify-content-between align-items-center">
                            <div className=" adda d-flex  align-items-center">
                                <div>
                                    <h6>Computers</h6>
                                    <p>8 items</p>
                                </div>
                                <img src="images/laptop.jpg" alt="laptop" />
                            </div>
                            <div className="d-flex  align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex  align-items-center">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>12 items</p>
                                </div>
                                <img src="images/tv.jpg" alt="tv" />
                            </div>
                            <div className="d-flex  align-items-center">
                                <div>
                                    <h6>Smart Headphone</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex  align-items-center">
                                <div>
                                    <h6>Computers</h6>
                                    <p>8 items</p>
                                </div>
                                <img src="images/laptop.jpg" alt="laptop" />
                            </div>
                            <div className="d-flex  align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex  align-items-center">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>12 items</p>
                                </div>
                                <img src="images/tv.jpg" alt="tv" />
                            </div>
                            <div className="d-flex  align-items-center">
                                <div>
                                    <h6>Smart Headphone</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                        </div>
                    </div>s
                </div>
            </section>
            <section className="featured-wrapper padded-content blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Featured Collection</h3>
                        </div>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </section>
            <section className="special-product-card padded-content py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Special Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        <SpecialProduct/>
                        <SpecialProduct/>
                        <SpecialProduct/>
                    </div>
                </div>
            </section>
            <section className="padded-content marquee-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-01.png" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-02.png" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-03.png" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-04.png" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-05.png" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-06.png" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-07.png" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-08.png" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     
            <section className="padded-content blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Latest Blogs</h3>
                        </div>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Home;

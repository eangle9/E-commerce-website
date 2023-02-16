import React from 'react';
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
    return (
        <div className="col-4">
            <div className="special-product">
                <div className="d-flex justify-content-between ">
                    <div>
                        <img src="images/speaker.jpg" alt="speaker" className="img-fluid" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Bajaj</h5>
                        <h6 className="title">Beoplay A1 Portable<br /> Bluetooth Speaker With...</h6>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value="4"
                            edit={false}
                        />
                        <p className="price">
                            <span>$500.00</span> &nbsp;
                            <strike>$750.00</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <div>
                                <p className="mb-0"><b>7</b>days</p>
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <span className="badge rounded-circle p-2 bg-danger">05</span>:
                                <span className="badge rounded-circle p-2 bg-danger">32</span>:
                                <span className="badge rounded-circle p-2 bg-danger">41</span>
                            </div>
                        </div>
                        <div className="prod-count my-3">
                            <p>Product:5</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                            <div>
                                <button className="btn-cart mt-3">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SpecialProduct;
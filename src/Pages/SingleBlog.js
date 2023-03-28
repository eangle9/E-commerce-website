import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import Header from "../components/Header";


const SingleBlog = () => {
    return(
        <>
        <Header/>
        <Meta title={"Dynamic Blog Name"}/>
        <BreadCrump title="Dynamic Blog Name"/>

        <div className="blog-wrapper home-wrapper-2 padded-content py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="category">
                            <h3>Shop By Categories</h3>
                            <div>
                                <ul>
                                    <li>Home</li>
                                    <li>Our Store</li>
                                    <li>Blogs</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9"></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SingleBlog;
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <>
        <div className="col-9">
            <div className="blog-card ">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className="img-fluid" w-100  alt="blog"/>
                </div>
                <div className="blog-content">
                    <p className="date">11 Jun, 2022</p>
                    <h5 className="title">A beutiful sunday morning renaissance</h5>
                    <p className="desc">This is useful to see far objects in a clear image </p>
                    <Link to="/blog/:id" className="blog-btn">Read More</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default BlogCard;
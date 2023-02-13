import React from 'react';

const BlogCard = () => {
    return (
        <>
        <div className="col-3">
            <div className="blog-card ">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className="img-fluid" alt="blog"/>
                </div>
                <div className="blog-content">
                    <p className="date">11 Jun, 2022</p>
                    <h5 className="title">A beutiful sunday morning renaissance</h5>
                    <p className="desc">This is useful to see far objects in a clear image </p>
                    <button className="blog-btn">Read More</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default BlogCard;
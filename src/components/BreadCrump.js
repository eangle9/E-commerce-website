import React from 'react';
import {Link} from 'react-router-dom';

const BreadCrump = (props) => {
    const { title } = props;
    return (
        <>
            <div className="BreadCrump py-5 padded-content mb-0">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0">
                                <Link
                                    to="/" className="text-dark">Home &nbsp;
                                </Link>
                                 / {title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreadCrump;

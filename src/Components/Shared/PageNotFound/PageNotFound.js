import React from 'react';
import notfound from '../../../Images/notfound.png'

const PageNotFound = () => {
    return (
        <div>
            <img src={notfound} className="img-fluid w-50 mt-5 pt-5" alt="" />
        </div>
    );
};

export default PageNotFound;
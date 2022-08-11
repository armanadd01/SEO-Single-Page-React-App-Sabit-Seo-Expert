import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer style={{ paddingTop: '1em', marginBottom: '0em', borderTop: '1px dashed #FFB53095' }}>
                <h6 style={{ color: '#FFB53095' }}> <FontAwesomeIcon icon={faCopyright} /> 2022- All Rights Reserved - Shabit Ahtasham Songi. </h6>
            </footer>
        </div>
    );
};

export default Footer;
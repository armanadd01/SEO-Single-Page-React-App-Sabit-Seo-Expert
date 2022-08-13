import React from 'react';
import { Col, Row } from 'react-bootstrap';
import seoBanner from '../../../Images/banner/seo-banner.png'

const SeoGuru = () => {
    return (
        <Row>
            <Col md={6}>
                <img src={seoBanner} alt="" className='img-fluid' />
            </Col>
            <Col md={6}></Col>
        </Row>
    );
};

export default SeoGuru;
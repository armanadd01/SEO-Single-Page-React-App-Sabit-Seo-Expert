import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Maps = () => {
    return (
        <Row>
            <Col md={6}>
                <h4 style={{ color: '#FFB530' }}>Located in Bangladesh</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.722844343167!2d90.4167039140507!3d23.82845268455093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e47aed2c85%3A0x84e5b46799eccbb7!2sShabit%20Ahtasham%20Songi%20-%20SEO%20Consultant%20-%20SEO%20Specialist%20and%20SEO%20Expert%20in%20Bangladesh!5e0!3m2!1sen!2sbd!4v1642882876648!5m2!1sen!2sbd"
                    style={{ width: "90%", height: "300px" }}
                    allowfullscreen=""
                    loading="lazy"></iframe>
            </Col>
            <Col md={6}>
                <h4 style={{ color: '#FFB530' }}>Located in USA</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4769749602947!2d-121.31198288544854!3d38.752762779593155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b210ee50647ad%3A0x3c3a51b08f5dc42d!2sSEO%20Expert%20in%20USA%20-%20Shabit%20Ahtasham%20Songi!5e0!3m2!1sen!2sbd!4v1642882916325!5m2!1sen!2sbd"
                    style={{ width: "90%", height: "300px" }}
                    allowfullscreen=""
                    loading="lazy"></iframe>
            </Col>
        </Row>
    );
};

export default Maps;
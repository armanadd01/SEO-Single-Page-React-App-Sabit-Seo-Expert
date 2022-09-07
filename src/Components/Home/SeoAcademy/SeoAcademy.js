import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Academy from '../../../Images/banner/academy.png';
import Typical from "react-typical";


const SeoAcademy = () => {
    return (
        <Row className='align-items-center order-columns'>
            <Col md={6} sm={12} className="">
                <Card style={{ width: '100%' }} className='Card-design'>
                    {/* <Card.Img variant="top" style={{
                    height: '150px',
                    width: '150px',
                    borderRadius: '50%',
                    border: '1px solid #FFB530',
                    margin: '20px auto !important',
                }} src={image} alt="Shabit Ahtasham Songi" /> */}
                    <Card.Body>
                        <Card.Title > <h2>SEO GURU Academy </h2> </Card.Title>

                        <Card.Title className='borders'>
                            <Typical
                                steps={[
                                    "SHABIT COACHES AND CONSULTANTS TO GROW FROM SCRATCH TO SKY",
                                    5000

                                ]}
                                loop={Infinity}
                                wrapper="h6"
                            />

                        </Card.Title>
                        <br />
                        <Card.Text>
                            <strong
                                className="autor_name">SEO GURU Academy</strong>  is a dedicated Training Center specializing in Search Engine Optimization (SEO). We help you to get the most out of your SEO efforts, including SEO training and SEO consulting.
                        </Card.Text>
                        <Button className='btn-golden mb-5'>Visit Website</Button>


                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} sm={12} className="">
                <img src={Academy} alt="" className='img-fluid' />
            </Col>
        </Row>
    );
};

export default SeoAcademy;
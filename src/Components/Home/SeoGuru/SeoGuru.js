import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import seoBanner from '../../../Images/banner/seo-banner.png';
import Typical from "react-typical";

const SeoGuru = () => {
    return (
        <Row className='align-items-center' style={{ height: '100vh' }}>
            <Col md={6}>
                <img src={seoBanner} alt="" className='img-fluid w-75' />
            </Col>
            <Col md={6}>

                <Card style={{ width: '100%' }} className='Card-design'>
                    {/* <Card.Img variant="top" style={{
                    height: '150px',
                    width: '150px',
                    borderRadius: '50%',
                    border: '1px solid #FFB530',
                    margin: '20px auto !important',
                }} src={image} alt="Shabit Ahtasham Songi" /> */}
                    <Card.Body>
                        <Card.Title > <h1> SEO GURU </h1> </Card.Title>

                        <Card.Title className='borders'>
                            <Typical
                                steps={[
                                    "Shabit Doesn’t Just Rank Websites, He Grows Businesses Too.",
                                    5000

                                ]}
                                loop={Infinity}
                                wrapper="h6"
                            />

                        </Card.Title>
                        <br />
                        <Card.Text>
                            <strong
                                className="autor_name">SEO GURU</strong> is a White Label Local SEO Agency based in Bangladesh. We help you to improve your website's search engine rankings, increase your business and get more customers. We have been providing the best Local SEO services including to our clients for the past 5 years.
                        </Card.Text>
                        <Card.Text>
                            Are you looking for a white label SEO agency to help you improve your website’s search engine rankings? If so, you may wonder if the company is reliable and affordable. There are many reputable white label SEO agencies out there. However, it is essential to do your research before signing up with any of them.
                        </Card.Text>
                        <Card.Text>
                            If you're looking for a Local SEO Agency to help you get your website listed on search engines, look no further than SEO GURU. SEO GURU is an online resource that provides tips and advice on improving your website's search engine visibility. You can also visit their blog to see how other businesses have fared concerning search engine optimization.
                        </Card.Text>
                        <Button className='btn-golden mb-5'>Apply For A Consultation</Button>

                    </Card.Body>
                </Card>

            </Col>
        </Row>
    );
};

export default SeoGuru;
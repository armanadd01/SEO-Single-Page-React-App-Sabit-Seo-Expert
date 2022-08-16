import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Typical from "react-typical";
import image from '../../../Images/Shabit Ahtasham Songi.png'

const LastSec = () => {
    return (
        <Row>
            <Col md={12} style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Card style={{ width: '60%' }} className='Card-design'>
                    <Card.Img variant="top" style={{
                        height: '150px',
                        width: '150px',
                        borderRadius: '50%',
                        border: '1px solid #FFB530',
                        margin: '20px auto !important',
                    }} src={image} alt="Shabit Ahtasham Songi" />
                    <Card.Body>
                        <Card.Title > <h2>Shabit Ahtasham Songi doesn’t fancy <br /> himself a GURU </h2> </Card.Title>

                        <Card.Title className='borders'>


                        </Card.Title>
                        <br />
                        <Card.Text>
                            <strong
                                className="autor_name">Shabit is not a GURU.</strong>  He's just a guy who knows how SEO works. He's a humble guy who made it online , one step at a time , through lengthy hours, perseverance and a sense of humor in the process. He has learned what works and what doesn't and does all can to share his knowledge with others to help them achieve success as well.

                        </Card.Text>



                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default LastSec;
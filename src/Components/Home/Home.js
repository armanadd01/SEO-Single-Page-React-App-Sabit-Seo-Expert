import React from 'react';
// import logo from './logo.svg';
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Maps from '../Maps/Maps';
import Banner from './Banner/Banner';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCompany from './HomeCompany/HomeCompany';
import LastSec from './LastSec/LastSec';
import SeoAcademy from './SeoAcademy/SeoAcademy';
import SeoGuru from './SeoGuru/SeoGuru';



const Home = () => {
    return (
        <div className='mt-5 pt-5'>
            <Banner></Banner>
            <div className="shadow">
                <Container className='mt-5 pt-5 h-100' >
                    <Row style={{ height: '100vh' }} className='align-items-center'>

                        <HomeAbout></HomeAbout>
                        <HomeCompany></HomeCompany>

                    </Row>
                </Container>
            </div>


            <div className="seo-guru-bg shadow">
                <Container style={{ marginTop: '3em', marginBottom: '4em', height: '100vh' }}>

                    <SeoGuru></SeoGuru>
                </Container>
            </div>
            <div className="shadow">
                <Container style={{ marginTop: '3em', marginBottom: '4em', height: '100vh' }} className='d-flex align-items-center'>

                    <SeoAcademy></SeoAcademy>
                </Container>
            </div>
            <div className="last">
                <Container style={{ marginTop: '3em', marginBottom: '4em', height: '60vh' }} className='d-flex align-items-center'>
                    <LastSec></LastSec>
                </Container>
            </div>


        </div>
    );
};

export default Home;
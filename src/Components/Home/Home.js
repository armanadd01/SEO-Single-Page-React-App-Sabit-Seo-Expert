import React from 'react';
// import logo from './logo.svg';
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Maps from '../Maps/Maps';
import Banner from './Banner/Banner';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCompany from './HomeCompany/HomeCompany';
import SeoGuru from './SeoGuru/SeoGuru';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container className='mt-5 pt-5'>
                <Row>

                    <HomeAbout></HomeAbout>
                    <HomeCompany></HomeCompany>

                </Row>
            </Container>
            <div className="seo-guru-bg">
                <Container style={{ marginTop: '3em', marginBottom: '4em' }}>
                    {/* <Maps></Maps> */}
                    <SeoGuru></SeoGuru>
                </Container>
            </div>


        </div>
    );
};

export default Home;
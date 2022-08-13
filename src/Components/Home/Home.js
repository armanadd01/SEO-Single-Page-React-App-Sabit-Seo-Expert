import React from 'react';
// import logo from './logo.svg';
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Maps from '../Maps/Maps';
import Banner from './Banner/Banner';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCompany from './HomeCompany/HomeCompany';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Row>

                    <HomeAbout></HomeAbout>
                    <HomeCompany></HomeCompany>

                </Row>
            </Container>
            <Container style={{ marginTop: '3em', marginBottom: '4em' }}>
                <Maps></Maps>
            </Container>

        </div>
    );
};

export default Home;
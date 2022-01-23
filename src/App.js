import logo from './logo.svg';
import image from './Images/Shabit Ahtasham Songi.png';
import './App.css';
import Typical from "react-typical";
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faDownload, faLink, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import crunchbase from './Images/crunchbase-icon.svg'
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6}>
            <Card style={{ width: '90%' }} className='Card-design'>
              <Card.Img variant="top" style={{
                height: '150px',
                width: '150px',
                borderRadius: '50%',
                border: '1px solid #FFB530',
                margin: '20px auto !important',

              }} src={image} alt="Shabit Ahtasham Songi" />
              <Card.Body>
                <Card.Title >Shabit Ahtasham Songi</Card.Title>
                <Card.Title className='borders'>
                  <Typical
                    steps={[
                      "Owner And Founder - SEO Guru",
                      5000,
                      "Owner And Founder - Marketer's Panel",
                      5000,
                      "Founder And Trainer - SEO Guru Academy",
                      5000,
                    ]}
                    loop={Infinity}
                    wrapper="p"

                  />
                </Card.Title>
                <br />
                <Card.Text>
                  Shabit Ahtasham Songi is an Internet Entrepreneur and SEO Expert based in Bangladesh, And the Founder & CEO of Multiple Online Business including SEO GURU a Local SEO and Digital Marketing Agency, Marketer's Panel a White Label SEO Agency, and SEO GURU Academy a Lead SEO Training Center where he helps to Learn SEO Practically.
                  <br /><br />
                  Shabit Ahtasham Songi Doesn’t Just Rank Websites, He Grows Businesses Too. He is a self-depended guy who found success online one step at a time through Long Hours, Dedication, and a Good Sense of Humor along the way
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <a href="https://www.facebook.com/AhtashamSongi"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="https://bd.linkedin.com/in/ahtashamsongi"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="https://www.crunchbase.com/person/shabit-ahtasham-songi"><FontAwesomeIcon icon={faLink} /></a>
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#"><FontAwesomeIcon icon={faDownload} /> Download CV</Card.Link>
                <Card.Link href="#"><FontAwesomeIcon icon={faMailBulk} /> Email Me</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <div className="main-services">
              <Row>
                <h3 className='heading-title'>Registered Online Business</h3>
                <Col>
                  <div className="Service-Box-One">
                    <div class="serviceBox orange">

                      <h3 class="title">Marketer's Panel</h3>

                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="Service-Box-two">
                    <div class="serviceBox orange">

                      <h3 class="title">SEO Guru</h3>

                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="Service-Box-three">
                    <div class="serviceBox orange">

                      <h3 class="title">SEO Guru <br /> Academy</h3>

                    </div>
                  </div>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '3em', marginBottom: '4em' }}>
        <Row>
          <Col md={6}>
            <h4 style={{ color: '#FFB530' }}>Located in Bangladesh</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.722844343167!2d90.4167039140507!3d23.82845268455093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e47aed2c85%3A0x84e5b46799eccbb7!2sShabit%20Ahtasham%20Songi%20-%20SEO%20Consultant%20-%20SEO%20Specialist%20and%20SEO%20Expert%20in%20Bangladesh!5e0!3m2!1sen!2sbd!4v1642882876648!5m2!1sen!2sbd" style={{ width: "90%", height: "300px" }} allowfullscreen="" loading="lazy"></iframe>
          </Col>
          <Col md={6}>
            <h4 style={{ color: '#FFB530' }}>Located in USA</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4769749602947!2d-121.31198288544854!3d38.752762779593155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b210ee50647ad%3A0x3c3a51b08f5dc42d!2sSEO%20Expert%20in%20USA%20-%20Shabit%20Ahtasham%20Songi!5e0!3m2!1sen!2sbd!4v1642882916325!5m2!1sen!2sbd" style={{ width: "90%", height: "300px" }} allowfullscreen="" loading="lazy"></iframe>
          </Col>
        </Row>
      </Container>

      <footer style={{ paddingTop: '1em', marginBottom: '0em', borderTop: '1px dashed #FFB53095' }}>
        <h6 style={{ color: '#FFB53095' }}> <FontAwesomeIcon icon={faCopyright} /> 2022- All Rights Reserved - Shabit Ahtasham Songi. </h6>
      </footer>
    </div>
  );
}

export default App;

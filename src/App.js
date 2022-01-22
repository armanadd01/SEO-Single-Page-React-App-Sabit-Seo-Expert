import logo from './logo.svg';
import './App.css';
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
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
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                border: '1px solid #FFB530',
                margin: '20px auto !important',

              }} src="https://ahtashamsongi.files.wordpress.com/2021/07/shabit-ahtasham-songi-2.jpg" />
              <Card.Body>
                <Card.Title>Shabit Ahtasham Songi</Card.Title>
                <br />
                <Card.Text>
                  Shabit Ahtasham Songi is an Internet Entrepreneur and SEO Expert based in Bangladesh, And the Founder & CEO of Multiple Online Business including SEO GURU a Local SEO and Digital Marketing Agency, Marketer's Panel a White Label SEO Agency, and SEO GURU Academy a Lead SEO Training Center where he helps to Learn SEO Practically.
                  <br /><br />
                  Shabit Ahtasham Songi is a self-depended guy who found success online one step at a time through Long Hours, Dedication, and a Good Sense of Humor along the way.
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
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Row>
              <h3>Registered Online Business</h3>
              <Col>
                <div className="Service-Box-One">
                  <div class="serviceBox orange">
                    <div class="service-icon">
                      <span><i class="fa fa-rocket"></i></span>
                    </div>
                    <h3 class="title">SEO Guru</h3>

                  </div>
                </div>
              </Col>
              <Col>
                <div className="Service-Box-two">
                  <div class="serviceBox orange">
                    <div class="service-icon">
                      <span><i class="fa fa-rocket"></i></span>
                    </div>
                    <h3 class="title">SEO Guru</h3>

                  </div>
                </div>
              </Col>
              <Col>
                <div className="Service-Box-three">
                  <div class="serviceBox orange">
                    <div class="service-icon">
                      <span><i class="fa fa-rocket"></i></span>
                    </div>
                    <h3 class="title">SEO Guru</h3>

                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

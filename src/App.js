import logo from './logo.svg';
import './App.css';
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md="6">
            <Card style={{ width: '90%' }}>
              <Card.Img variant="top" style={{ height: '400px' }} src="https://source.unsplash.com/3840x1000/?fashion" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Row>
              <Col>
                <div className="Service-Box-One">

                </div>
              </Col>
              <Col>
                <div className="Service-Box-two">

                </div>
              </Col>
              <Col>
                <div className="Service-Box-three">

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

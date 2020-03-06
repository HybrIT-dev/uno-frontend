import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

import Tesla from '../assets/tesla.png';


const BrandWizardScreen = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="secondary" size="lg" block>
            <img className="button-image" src={Tesla} />
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" size="lg" block>
            <img className="button-image" src={Tesla} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" size="lg" block>
            <img className="button-image" src={Tesla} />
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" size="lg" block>
            <img className="button-image" src={Tesla} />
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default BrandWizardScreen;



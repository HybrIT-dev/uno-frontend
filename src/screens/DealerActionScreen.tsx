import React from 'react';
import { Card, Button } from "react-bootstrap";
import posed from "react-pose";

import Car1 from "../assets/result1.jpg";
import Dealer from "../assets/dealer.jpg";

const DealerActionScreen = () => {

  const Container = posed.div({
    enter: { staggerChildren: 50 }
  });
  
  const CardContainer = posed.div({
    enter: { x: 0, opacity: 1},
    exit: { x: 50, opacity: 0 }
  });

  return (
    <Container>
      <CardContainer>
        <Card>
          <Card.Header>
            Uw geselecteerde auto
          </Card.Header>
        </Card>
      </CardContainer>
      <CardContainer className="result-items">
        <Card className="result-card">
          <Card.Img variant="top" src={Car1} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Megane</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Renault</Card.Subtitle>
          </Card.Body>
        </Card>
      </CardContainer>
      <CardContainer style={{ marginTop: "16px" }}>
        <Card>
          <Card.Header>
            Wij raden de volgende dealer aan
          </Card.Header>
        </Card>
      </CardContainer>
      <CardContainer className="result-items">
        <Card className="result-card">
          <Card.Img variant="top" src={Dealer} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Autobedrijf Stam Renault Utrecht</Card.Title>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-dark" size="sm" className="float-left">Afspraak maken</Button>
          <Button variant="outline-dark" size="sm" className="float-right">Bericht sturen</Button>
          </Card.Footer>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default DealerActionScreen;
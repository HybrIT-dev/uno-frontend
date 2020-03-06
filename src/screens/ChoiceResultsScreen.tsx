import React from 'react';
import posed from "react-pose";
import { Button, Card } from "react-bootstrap";

import Car1 from "../assets/result1.jpg";
import Car2 from "../assets/result2.jpg";
import Car3 from "../assets/result3.jpg";
import { Link, useHistory } from 'react-router-dom';

const ChoiceResultsScreen = () => {

  const history = useHistory();

  const Container = posed.div({
    enter: { staggerChildren: 50 }
  });
  
  const CardContainer = posed.div({
    enter: { x: 0, opacity: 1},
    exit: { x: 50, opacity: 0 }
  });

  const ProgressBar = posed.div({
    enter: { width: "100%", delay: 300 },
    exit: { width: "0%" }
  });

  const MediumProgressBar = posed.div({
    enter: { width: "75%", delay: 300 },
    exit: { width: "0%" }
  });

  const NoProgressBar = posed.div({
    enter: { width: "35%", delay: 300 },
    exit: { width: "0%" }
  });

  const gotoDealer = () => {
    history.push('/DealerAction');
  }

  return (
    <Container>
      <CardContainer>
        <Card>
          <Card.Header>
            De volgende auto's passen bij uw keuze
          </Card.Header>
        </Card>
      </CardContainer>
      <CardContainer className="result-items">
        <Card className="result-card" onClick={gotoDealer}>
          <Card.Img variant="top" src={Car1} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Megane</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Renault</Card.Subtitle>
            <Card.Text>Benzine, 5 deurs, 150pk</Card.Text>
            <div style={{ width: "100%", height: "20px", backgroundColor: "lightgray", borderRadius: "4px"}}>
            <span style={{position: "absolute", left: "39%", color: "white"}}>100% match</span>
              <ProgressBar style={{ width: "100%", height: "20px", backgroundColor: "green", color: "white", textAlign: "center", borderRadius: "4px"}} />
            </div>            
          </Card.Body>
        </Card>
      </CardContainer>
      <CardContainer className="result-items">
        <Card className="result-card">
          <Card.Img variant="top" src={Car2} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Clio</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Renault</Card.Subtitle>
            <Card.Text>Benzine, 5 deurs, 90pk</Card.Text>
            <div style={{ width: "100%", height: "20px", backgroundColor: "lightgray", borderRadius: "4px"}}>
            <span style={{position: "absolute", left: "40%", color: "white"}}>75% match</span>
              <MediumProgressBar style={{ width: "100%", height: "20px", backgroundColor: "orange", color: "white", textAlign: "center", borderRadius: "4px"}} />
            </div> 
          </Card.Body>
        </Card>
      </CardContainer>
      <CardContainer className="result-items">
        <Card className="result-card">
          <Card.Img variant="top" src={Car3} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Captur</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Renault</Card.Subtitle>
            <Card.Text>Diesel, 5 deurs, 135pk</Card.Text>
            <div style={{ width: "100%", height: "20px", backgroundColor: "lightgray", borderRadius: "4px",textAlign: "center"}}>
              <span style={{position: "absolute", left: "40%", color: "white"}}>35% match</span>
              <NoProgressBar style={{ width: "35%", height: "20px", backgroundColor: "grey", borderRadius: "4px"}} />
            </div> 
          </Card.Body>
        </Card>
      </CardContainer>
    </Container>
   )
}

export default ChoiceResultsScreen;

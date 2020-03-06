import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Car from "../assets/car.svg";
import Find from "../assets/find.svg"

const HomeScreen = () => {
  return (
    <div className="home-items">
      <Link to="/">
        <Button className="choice-button" variant="secondary" size="lg" block>
          Kies een merk
          <br />
          <br />  
          <img className="button-image" src={Car} />
        </Button>
      </Link>
      <Link to="/ChoiceWizard">
        <Button className="choice-button" variant="secondary" size="lg" block>
          Ontdek een auto
          <br />
          <br />
          <img className="button-image" src={Find} />
        </Button>
      </Link>
      <Link to="/Dashboard" className="skip-link">Sla over</Link>
    </div>
  )
}

export default HomeScreen;
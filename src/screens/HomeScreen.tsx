import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Car from "../assets/car.svg";
import Find from "../assets/find.svg"

const HomeScreen = () => {
 return (
   <div className="home-items">
    <Link to="/">
      <Button className="choice-button" variant="primary" size="lg" block>
        Kies een merk
        <img className="button-image" src={Car}/>
      </Button>
    </Link>
    <Link to="/ChoiceWizard">
    <Button variant="primary" size="lg" block>
      Ontdek een auto
      <img className="button-image" src={Find}/>
    </Button>
    </Link>
    <a href="">Sla over</a>
  </div>
 )
}

export default HomeScreen;
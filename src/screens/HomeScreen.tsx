import React from 'react';
import { Button } from "react-bootstrap";

const HomeScreen = () => {
 return (
   <div>
    <Button variant="primary" size="lg" block>Kies een merk</Button>
    <Button variant="primary" size="lg" block>Ontdek een auto</Button>
    <a href="">Sla over</a>
  </div>
 )
}

export default HomeScreen;
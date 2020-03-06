import CheckIcon from 'mdi-react/CheckIcon';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';
import React, { useEffect } from 'react';
import { Button, Card, Jumbotron } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Find from "../assets/find.svg";
import posed from 'react-pose';


const ChoiceWizardScreen = () => {

  const Container = posed.div({
    enter: { staggerChildren: 50 }
  });

  const ImageContainer = posed.img({
    enter: { opacity: 1},
    exit: { opacity: 0 }
  });

  const Header = posed.h1({
    enter: { opacity: 1},
    exit: { opacity: 0 }
  });

  const Paragraph = posed.p({
    enter: { opacity: 1},
    exit: { opacity: 0 }
  });
  const CardContainer = posed.div({
    enter: { x: 0, opacity: 1, staggerChildren: 50 },
    exit: { x: 50, opacity: 0 }
  });

  const CheckboxContainer = posed.span({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  });

  const question1 = useCheckboxState();
  const question2 = useCheckboxState();
  const question3 = useCheckboxState();
  const question4 = useCheckboxState();

  useEffect(() => {
    if (question1.state || question2.state || question3.state || question4.state) {
      // perform some side effect
      // when the state changes
    }
  }, [question1.state, question2.state, question3.state, question4.state]);

  return (
    <Container className="choice-items">
      <Jumbotron>
        <Header>Ontdek een merk</Header>
        <ImageContainer src={Find} className="App-logo" alt="logo" />
        <Paragraph>
          Beantwoord een paar vragen om te ontdekken welke auto's bij jou passen.
        </Paragraph>
      </Jumbotron>
      <CardContainer>
        <Card className="check-questions">
          <Card.Body>
            <CheckboxContainer>
              <Checkbox className="check-question" color="success" icon={<CheckIcon />} animation="tada" {...question1} name="question-1">Ik rij vaak lange afstanden.</Checkbox>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox className="check-question" color="success" icon={<CheckIcon />} animation="tada" {...question2} name="question-2">De zuinigheid van een auto vind ik belangrijk.</Checkbox>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox className="check-question" color="success" icon={<CheckIcon />} animation="tada" {...question3} name="question-3">Ik ga graag met de auto op vakantie.</Checkbox>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox className="check-question" color="success" icon={<CheckIcon />} animation="tada" {...question4} name="question-4">Ik trek regelmatig een aanhanger</Checkbox>
            </CheckboxContainer>
          </Card.Body>
        </Card>
      </CardContainer>
      <Link to="/ChoiceResult">
        <Button className="check-continue" variant="primary" size="lg" block>
          Verder
        </Button>
      </Link>
    </Container>
  )
}

export default ChoiceWizardScreen;



import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import botImage from '../assets/images/bot_cute_final.png'; 
import '../assets/styles/customStyles.css'; 

function CocktailPage() {
  return (
    // <div className="custom-background">
      <Container className="d-flex justify-content-center align-items-center custom-container py-5">
        <Card className="custom-card text-center">
          <Card.Body>
            <h2>Hola soy Bot!</h2>
            <h4>¿Te atreves a descubrir qué cóctel serías en otra vida?</h4>
            <p>Descúbrelo con nuestro test en base a la personalidad</p>

            <div className="content-container d-flex align-items-center justify-content-around">
              
              <Form.Group className="select-group">
                <Form.Label>¿Te consideras una persona más aventurera o relajada?</Form.Label>
                <Form.Select aria-label="Seleccionar">
                  <option>Seleccionar</option>
                  <option value="1">Aventurero</option>
                  <option value="2">Tranquilo</option>
                  <option value="3">Extrovertido</option>
                  <option value="4">Introvertido</option>
                </Form.Select>
              </Form.Group>

             
              <div className="bot-image-container">
                <img src={botImage} alt="Bot" className="bot-image" />
              </div>

              
              <Form.Group className="select-group">
                <Form.Label>Tu estado de ánimo en general?</Form.Label>
                <Form.Select aria-label="Seleccionar">
                  <option>Seleccionar</option>
                  <option value="1">Feliz</option>
                  <option value="2">Pensativo</option>
                  <option value="3">Emocionado</option>
                  <option value="4">Relajado</option>
                </Form.Select>
              </Form.Group>
            </div>

            
            <Button variant="warning" className="custom-button mt-4">
              Mezclar 🍸
            </Button>
          </Card.Body>
        </Card>
      </Container>
    // </div>
  );
}

export default CocktailPage;

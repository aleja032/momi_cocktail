import React, { useState } from 'react';
import { fetchRandom } from '../redux/thunkDrinks';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CardBebida from '../components/CardBebida.jsx';
import botImage from '../assets/images/bot_cute_final.webp';
import '../assets/styles/customStyles.css';

function DiscoverCocktail() {
  const dispatch = useDispatch();
  const [personType, setPersonType] = useState('');
  const [mood, setMood] = useState('');
  const [showBotImage, setShowBotImage] = useState(false);
  const [showBotton, setBotton] = useState(true);
  const randomDrink = useSelector((state) => state.drinks.discoverDrink);

  const existingDrink = randomDrink.find(
    (drink) => drink.personType === personType && drink.mood === mood
  );

  const handleMixClick = () => {
    setShowBotImage(false);
    setBotton(false);
    if (!existingDrink) {
      dispatch(fetchRandom({ personType, mood }));
    } 
  };

  const hadleagain = () => {
    setBotton(true);
    setShowBotImage(true);
  }
  return (
    <Container className="d-flex justify-content-center align-items-center custom-container py-5">
      <Card className="custom-card text-center">
        <Card.Body>
        <h2>Hi, I'm Bot!</h2>
        <h4>Dare to discover what cocktail you would be in another life?</h4>
        <p>Find out with our personality-based quiz</p>

          <div className="content-container d-flex align-items-center justify-content-around">
            <Form.Group className="select-group">
              <Form.Label >¿Qué tipo de persona te consideras?</Form.Label>
              <Form.Select
                aria-label="Seleccionar"
                value={personType}
                onChange={(e) => setPersonType(e.target.value)}
                disabled={!showBotton} 
              >
              <option value="" >Select</option>
              <option value="Adventurer">Adventurer</option>
              <option value="Relaxed">Relaxed</option>
              <option value="Creative">Creative</option>

              </Form.Select>
            </Form.Group>

            <div className="py-4 px-2 ">
              <div className="bot-image-container">

                {showBotImage ? (
                  <img src={botImage} alt="Bot" className="bot-image" />
                ) : (
                  randomDrink && randomDrink.length > 0 ? (
                    randomDrink.some(
                      (drink) => drink.personType === personType && drink.mood === mood
                    ) ? (
                      (() => {
                        const foundDrink = randomDrink.find(
                          (drink) => drink.personType === personType && drink.mood === mood
                        );
                        return (
                          <div className="d-flex flex-column">
                            <p>Serías la bebida:</p>
                            <CardBebida drink={foundDrink.drink} isFavorite={true} />
                          </div>
                        );
                      })()
                    ) : (
                      randomDrink.length > 0 && (
                        <div className="d-flex flex-column">
                          <p>You would be:</p>
                          <CardBebida drink={randomDrink[randomDrink.length - 1].drink} isFavorite={true} />
                        </div>
                      )
                    )
                  ) : (
                    <img src={botImage} alt="Bot" className="bot-image" />
                  )
                )}
              </div>

            </div>

            <Form.Group className="select-group">
              <Form.Label>Tu estado de ánimo en general?</Form.Label>
              <Form.Select
                aria-label="Seleccionar"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                disabled={!showBotton}
              >
                <option value="">Select</option>
                <option value="Happy">Happy</option>
                <option value="Thoughtful">Thoughtful</option>
                <option value="Calm">Calm</option>

              </Form.Select>
            </Form.Group>
          </div>

          {
            showBotton ?
              <Button
                variant="warning"
                className="custom-button mt-4"
                onClick={handleMixClick}
              >
               Mix it 🍸
              </Button>
              :
              <Button
                variant="warning"
                className="ms-2 custom-button mt-4"
                onClick={hadleagain}
              >
              Again
              </Button>
          }


        </Card.Body>
      </Card>
    </Container>
  );
}

export default DiscoverCocktail;


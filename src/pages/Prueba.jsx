import { useState, useEffect } from "react";
import AllDrinks from "../components/AllDrinks";
import { useLocation } from 'react-router-dom';

function Prueba() {
  const location = useLocation();
  const [section, setSection] = useState('');

  // Usamos useEffect para actualizar el estado solo cuando location.pathname cambia
  useEffect(() => {
    setSection(location.pathname);
  }, [location.pathname]);

  console.log("section", section); // Muestra el valor actualizado de 'section'

  return (
    <>
    
      <AllDrinks section={section}/>
    </>
  );
}

export default Prueba;

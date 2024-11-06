import { useState, useEffect } from "react";
import AllDrinks from "../components/AllDrinks";
import { useLocation } from 'react-router-dom';

function SeccionLayout() {
  const location = useLocation();
  const [section, setSection] = useState('');

  useEffect(() => {
    setSection(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <AllDrinks section={section}/>
    </>
  );
}

export default SeccionLayout;

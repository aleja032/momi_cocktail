import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarNavigation from '../components/BarNavigation.jsx';
import Home from '../pages/Home.jsx';
import Prueba from '../pages/prueba.jsx';
function AppRoutes() {
    return (
        <BrowserRouter>
            <BarNavigation />
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/allDrinks" element= {<Prueba />} />

            </Routes>
        </BrowserRouter>
    );
}; export default AppRoutes

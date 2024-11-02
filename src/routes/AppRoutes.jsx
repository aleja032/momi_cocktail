import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BarNavigation from '../components/BarNavigation.jsx';
import Home from '../pages/Home.jsx';
function AppRoutes() {
    return (
        <BrowserRouter>
            <BarNavigation />
            <Routes>
                <Route path="" element= {<Home />} />
            </Routes>
        </BrowserRouter>
    );
} export default AppRoutes

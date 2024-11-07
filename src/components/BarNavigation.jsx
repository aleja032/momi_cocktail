import { Link } from 'react-router-dom';
import logo from '../../public/logo.webp';
import '../assets/styles/barNavigation.css';

function BarNavigation() {
    return (
        
        <nav className="navbar navbar-expand-lg px-0 pt-4 ps-lg-5 pe-lg-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex align-items-center mx-0 me-lg-5 px-3 pe-5 ">
                    <img src={logo} alt="logo" className='img-fluid logo' />
                    <h6 className='ms-2 mb-0 text-white '>
                        Ancient Sips
                    </h6>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon custom-toggler"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center">
                        <Link to="/" className="nav-link  pe-lg-5 ">Home</Link>
                        <Link to="/allDrinks" className="nav-link  pe-lg-5  text-white ">All Drinks</Link> 
                        <Link to="/favorites" className="nav-link  pe-lg-5  text-white ">My Favorites</Link>
                        <Link to="/discover" className="nav-link me-5 text-white animated-background"> Discover your Drink </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
} export default BarNavigation
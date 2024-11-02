import { Link } from 'react-router-dom';
import search from '../assets/icons/search.svg';
function BarNavigation() {
    return (
        <nav className="navbar navbar-expand-lg px-0 pt-5 px-lg-5 ">
            <div className="container-fluid">
                <Link to="/" className={`navbar-brand d-flex align-items-end mx-0 mx-lg-5 px-3 pe-5 `}>
                    <h6 className='ms-2 mb-0 text-white '>
                        Ancient Sips
                    </h6>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon custom-toggler"></span>
                </button>
                <div className="collapse navbar-collapse border " id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center p-3 p-lg-0">
                        <Link to="/" className="nav-link ms-2 pe-5 text-white ">Home</Link>
                    </div>
                    <div className="py-2 mx-4 mx-0  d-flex justify-content-center align-items-center custom-search  ">
                        <input type="text" placeholder='Search' className='border-0 input-search' />
                        <img src={search} alt="Search" className='' />
                    </div>
                </div>
            </div>
        </nav>
    )
} export default BarNavigation
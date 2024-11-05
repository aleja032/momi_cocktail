import drink from '../assets/images/glass.png';
import '../assets/styles/header.css';
function Header() {
    return (
        <header className="row gx-0 gap-3 pt-lg-3 justify-content-center">
            <div className="col-12 col-md-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-lg-4 text-center header-title">COCKTAIL SIPS</h1>
                <p className="mb-lg-4 header-paragraph">
                    Welcome to Ancient Sips, where the mystery of ancient Egypt comes to life in every sip.
                    Explore our enchanted recipe book and uncover cocktails inspired by the magic and mystique of mummies.
                    Ready to discover the elixir of eternity or a potion that will send chills <span className="gold">down your spine?</span>
                </p>
                <button className="px-4 py-2 button-gradient">
                    Discover a Cocktail
                </button>
            </div>
            <div className="col-12 col-md-12 col-lg-4 my-lg-5 py-4 bg-header">
                <img src={drink} alt="drink" className='ms-lg-4 px-3 header-glass' />
            </div>
        </header>
    );
}; export default Header
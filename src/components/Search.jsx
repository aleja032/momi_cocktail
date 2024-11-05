import search from '../assets/icons/search.svg';
import '../assets/styles/search.css';
function Search() {
    return (
        <div className="py-2 mx-0  d-flex justify-content-center align-items-center custom-search ">
            <input type="text" placeholder='Search' className='border-0 input-search' />
            <img src={search} alt="Search" className='' />
        </div>
    );
}; export default Search
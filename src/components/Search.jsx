import search from '../assets/icons/search.svg';
import '../assets/styles/search.css';

function Search() {
    const handleChange = (e) => {
        let param = e.target.value ? e.target.value : null;

        console.log(e.target.value); 
        console.log("prueba: ", param.length);
        
    };

    return (
        <div className="py-2 mx-0 d-flex justify-content-center align-items-center custom-search">
            <input 
                type="text" 
                placeholder='Search' 
                className='border-0 input-search'
                onChange={handleChange} 
            />
            <img src={search} alt="Search" className='' />
        </div>
    );
}

export default Search;

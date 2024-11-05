import Search from './Search.jsx';
function AllDrinks() {
    return (
        <div className="mt-5 mx-5 px-5 border">
            <div className="mx-5 mb-5">
                <h2 className='mb-lg-3 text-white'>
                    Busca tu bebida favorita
                </h2>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa Sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <Search />
            </div>
            <div className="border mx-5 text-white">
                card
            </div>
        </div>
    );
}; export default AllDrinks
import React from 'react';
import shaker from '../assets/images/shaker.png';
import '../assets/styles/shakerLoader.css';

function ShakerLoader() {
    return (
        <div className="d-flex flex-column align-items-center shaker-container">
            <img src={shaker} alt="Shaker Loader" className="shaker-image" />
            <p className='mt-2'>
                Buscando bebidas...
            </p>
        </div>
    );
}; export default ShakerLoader;

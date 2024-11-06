import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/App.css'
import AppRoutes from './routes/AppRoutes.jsx';
import CardBebida from './components/CardBebida';

function App() {
  
  const handleOpenModal = () => {

    console.log("Modal abierto desde el hijo");
};

  return (
    <>
      <AppRoutes />
       <CardBebida onOpenModal={handleOpenModal} />
    </>
  )
}

export default App

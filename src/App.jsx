import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/App.css'
import AppRoutes from './routes/AppRoutes.jsx';
import CardBebida from './components/CardBebida';
function App() {

  return (
    <div className="custom-general">
      <AppRoutes />
    </div>
  )
}

export default App

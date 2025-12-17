import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Accueil from './pages/accueil.jsx';
import Saveurs from './pages/saveurs.jsx';
import Aliments from './pages/aliments.jsx';
import California from './pages/california.jsx';
import Prix from './pages/prix.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvocatCoriandre from './pages/avocatcoriandre.jsx';
import Inferieur from './pages/prix_pieces_inferieur13.jsx';

function App() {
  return (
    //router avec toutes les routes de l'application
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/saveurs" element={<Saveurs />} />
        <Route path="/saveurs_bis" element={<AvocatCoriandre />} />
        <Route path="/aliments" element={<Aliments />} />
        <Route path="/california" element={<California />} />
        <Route path="/inferieur" element={<Inferieur />} />
        <Route path="/prix" element={<Prix />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

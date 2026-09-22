import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

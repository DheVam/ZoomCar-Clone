import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />

      </Router>

    </div>
  );
}

export default App;

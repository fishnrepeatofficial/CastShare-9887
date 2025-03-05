import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import NewCast from './pages/NewCast';
import SavedCasts from './pages/SavedCasts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewCast />} />
          <Route path="/saved" element={<SavedCasts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
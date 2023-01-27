import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Category from './components/category';
import Books from './components/books';

function App() {
  return (
    <>
      <div className="p-5  main-body ">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Category />} />
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;

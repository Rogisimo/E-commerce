import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Home from './components/pages/Home'
import Nav from './components/Nav';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Books from './components/pages/Books';
import {books} from "./data"
import BooksInfo from './components/pages/BooksInfo';
import Cart from './components/pages/Cart';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/books' exact element={<Books books={books}/>}/>
        <Route path='/books/:id' element={<BooksInfo books={books}/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

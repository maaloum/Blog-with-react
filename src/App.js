
import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Components/NavBar/NavBar'
import NewBlog from './Components/NewBlog/NewBlog'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogDetails from './Components/BlogDetails/BlogDetails';
import NotFound from './Components/Not Found/NotFound';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path='/' exact element={<Home />} />
            </Routes>
            <Routes>
              <Route path='/newblog' exact element={<NewBlog />} />
            </Routes>
            <Routes>
              <Route path='/blogs/:id' exact element={<BlogDetails />} />
            </Routes>
            <Routes>
              <Route path='/*' element={<NotFound/>} />
            </Routes>

        </div>
    </Router>
  );
}

export default App;

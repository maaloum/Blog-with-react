
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
              <Route path='/newblog' exact element={<NewBlog />} />
             <Route path='/blogs/:id' exact element={<BlogDetails />} />
              <Route path='*' exact element={<NotFound />}/>
            </Routes>

        </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ListMovies from './components/ListMovies'
import CreateMovie from './components/CreateMovie'

function App() {
  return (
    <>
    <Router>

      <Navbar />
      <div className="container">
        <Route path='/' exact component={ListMovies} />
        <Route path='/edit/:id' exact component={CreateMovie} />
        <Route path='/create' exact component={CreateMovie} />
      </div>
    </Router>
    </>
  );
}

export default App;

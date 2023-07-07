import logo from './logo.svg';
import './App.css';
import MainNavication from './components/mainNavigation';
import Songs from './components/songs';
import DarkTable from './components/darkTable';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul className='App-header'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/songs'>Songs</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul> */}
        <Routes>
          <Route exact path='/' element={<MainNavication />}></Route>
          <Route exact path='/songs' element={<Songs />}></Route>
          <Route exact path='/table' element={<DarkTable />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

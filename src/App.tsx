import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

//components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='h-screen'>
      <Router>
       <NavBar />
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

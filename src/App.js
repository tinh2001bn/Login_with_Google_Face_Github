import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Post from './Pages/Post';
import Login from './Pages/Login';
function App() {
  return (
  <div >
    <Navbar></Navbar>
    <Login/>
  </div>
  );
}

export default App;

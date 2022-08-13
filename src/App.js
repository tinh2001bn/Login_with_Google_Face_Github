import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link ,Navigate} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Post from './Pages/Post';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((items) => {
         setUser(items.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

//  console.log(user)
  return (
   <BrowserRouter>
  <div >
     
        <Navbar user={user}></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login'
           element={user ? <Navigate to="/"/> : <Login/>  }>
           </Route>
          <Route path='/post/:id' 
          element={user ? <Post/> : <Navigate to="/login"/>}></Route>
        
        </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;


import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Add from './Components/Pages/User/Add';
import Show from './Components/Pages/User/Show';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';
import { useState } from 'react';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';


function App() {
  const[isLoggedIn,setLoggedIn]=useState('')
  console.log(isLoggedIn)
  return (
   <>
   <BrowserRouter>
   <Navbar isLoggedIn={isLoggedIn} />
   <Routes>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
      <Route path='/logout' element={<Logout setLoggedIn={setLoggedIn}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/user/add' element={<Add />} />
      <Route path='/user/show' element={<Show />} />
      <Route path='/user/update/:pk' element={<Update />} />
      <Route path='/user/delete/:pk' element={<Delete />} />
   </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },5000)
  },[])
  return (
<>

{
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
<Routes>
{
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/Dashboard' element={<Dashboard/>}/>}
{
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/signup' element={<Signup/>}/>}
  {
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/login' element={<Login/>}/>}
  {
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/' element={<Home/>}/>}
  {
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/works' element={<Home/>}/>}
  {
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/about' element={<Home/>}/>}
  {
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/contact' element={<Home/>}/>}
  {
loading ? <div className='loader'> 
<h1 className='loader-heading'> ERB SYSTEM </h1>
<HashLoader color={'red'} loading={loading}  size={250} />


</div> 
:
  <Route path='/services' element={<Home/>}/>}
</Routes>
}



  </>


);
}

export default App;

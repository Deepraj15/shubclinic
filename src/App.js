import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/home/Home';
import SignIn from './Components/signin/SignIn';
import SignUp from './Components/signup/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/profile/Profile';
import AddReceptionist from './Components/receptionist/AddReceptionist';
import ReceptionistList from './Components/receptionist/ReceptionistList';
import Authenticate from './Components/Protected-redux/Authenticate';
function App() {
  return <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/dashboard' element={<Authenticate><Dashboard/></Authenticate>}/>
    <Route path='/profile' element={<Authenticate><Profile/></Authenticate>}/>
    <Route path='/add-receptionist' element={<Authenticate><AddReceptionist/></Authenticate>}/>
    <Route path='/receptionist-list' element={<Authenticate><ReceptionistList/></Authenticate>}/>
   </Routes>
  </>
}

export default App;

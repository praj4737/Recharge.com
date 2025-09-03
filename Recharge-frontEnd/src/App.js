import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';

import OtpVerification from './OtpVerification';
import Header from './Header';

import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from './Profile';
import Plans from './Plans';
import Payments from './Payments';



import RechargeDetails from './RechargeDetails';
import RegisterSuccess from './RegisterSuccess';
import RegisterError from './RegisterError';
import PaymentSucess from './PaymentSucess';
import PaymentFailed from './PaymentFailed';
import LoginRegisterHeader from './LoginRegisterHeader';
import Contact from './Contact';
import About from './AboutUs';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/> 
        <Route path='/register' element={<Register />}/> 
        <Route path='/otp' element={<OtpVerification />}/>
        <Route path='/header' element={<Header />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/rechargeDetails' element={<RechargeDetails />}/>
        <Route path='/plans' element={<Plans />}/>
        <Route path='/payments' element={<Payments />}/>
        <Route path='/registerSucess' element={<RegisterSuccess />}/>
        <Route path='/registerError' element={<RegisterError />}/>

        <Route path='/paymentSucess' element={<PaymentSucess />}/>
        <Route path='/paymentFailed' element={<PaymentFailed />}/>
        <Route path='/registerLoginHeader' element={<LoginRegisterHeader />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/aboutUs' element={<About />}/>
      </ Routes>
    </BrowserRouter>
  );
}

export default App;

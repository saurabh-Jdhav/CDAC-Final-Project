import './App.css';
import Navbarcomp from './components/Navbarcomp.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js';
import Login from './components/Login.js';
import About from './components/About.js'
import Contact from './components/Contact.js'
import SignUp from './components/Signup.js'
import FooterPage from './components/FooterPage.js'
import Errorpage from './components/Errorpage.js'
import PatientDetails from './components/PatientDetails.js';
import TestBook from './components/TestBook.js';
import Payment from './components/Payment.js';
import PaymentRecipet from './components/PaymentRecipet.js';
import AdminPanel from './components/admin/AdminPanel.js';
import AdminUserBookings from './components/admin/AdminUserBookings';
import AdminDashboard from './components/admin/AdminDashboard.js';
import AdminTest from './components/admin/AdminTest.js';
import AdminPatient from './components/admin/AdminPatient.js';
import AdminLogin from './components/admin/AdminLogin.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarcomp />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Errorpage />} />
          <Route path='/patient' element={<PatientDetails />} />
          <Route path='/testbook' element={<TestBook />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/PaymentReciept' element={<PaymentRecipet />} />
          <Route exact path="/adminlogin" element={<AdminLogin/>} />
          <Route exact path="/admindash" element={<AdminDashboard />} />
          <Route exact path="/adminusers" element={<AdminPanel />} />
          <Route exact path="/adminUserbookings" element={<AdminUserBookings />} />
          <Route exact path="/adminTest" element={<AdminTest />} />
          <Route exact path="/adminPatient" element={<AdminPatient/>} />
          
        </Routes>
        <FooterPage/> 
      </BrowserRouter>
    </>
  );
}

export default App;

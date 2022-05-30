import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blogs/Blog';
import MyPortfolio from './Pages/Home/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/parts/:partsId" element={
        <RequireAuth>
          <Purchase/>
        </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddAReview></AddAReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/blogs" element={<Blog/>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;

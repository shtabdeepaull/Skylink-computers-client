import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blogs/Blog';
import MyPortfolio from './Pages/Home/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/blogs" element={<Blog/>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
 
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blogs/Blog';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/blogs" element={<Blog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

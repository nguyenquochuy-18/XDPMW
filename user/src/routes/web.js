import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../components/home'));
const Topmenu = lazy(() => import('../components/ingredient/topmenu'));
const Flooter = lazy(() => import('../components/ingredient/flooter'));
const Login = lazy(() => import('../components/login'));
const Register = lazy(() => import('../components/register'));
const Category=lazy(()=>import('../components/category'))
const Blog=lazy(()=>import('../components/blog'))
const Contact=lazy(()=>import('../components/contact'))
const Detail=lazy(()=>import('../components/productDetail'))

function onAuthRequired({ history }) {
  history.push("/login");
}
const Web = () => (
  <Router>
    <Topmenu></Topmenu>
    <Suspense fallback={<div>Loading...</div>}  redirectUri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/category' element={<Category/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product-detail/:id' element={<Detail/>}/>
      </Routes>
    </Suspense>
    <Flooter></Flooter>
  </Router>
);

export default Web;

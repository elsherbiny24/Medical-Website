import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './companats/home/Home';
import Navbars from './companats/navbar/Navbars';
import Footer from './companats/footer/Footer';
import AboutPages from './companats/about/AboutPages';
import PageNotFound from './companats/not found/PageNotFound';
import Faqs from './companats/faqs/Faqs';
import Booking from './companats/poking/Booking';
import Team from './companats/team/Team';
import Blog from './companats/blog/Blog';
import Service from './companats/service/Service';
import FormLog from './companats/form/FormLog';

const App = () => {
  return (
   <BrowserRouter>
   <Navbars />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<AboutPages />} />
    <Route path='/notfound' element={<PageNotFound />} />
    <Route path='/faqs' element={<Faqs />} />
    <Route path='/booking' element={<Booking />} />
    <Route path='/team' element={<Team />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/service' element={<Service />} />
    <Route path='/login' element={<FormLog />} />

    



    
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App

import React from 'react'
import Login from './components/Login'
import Blogs from './components/Blogs'
import SingleBlog from './components/SingleBlog'
import AddBlog from './components/AddBlog'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <>
   
   <Router>
   <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/blogs' element={<Blogs />} />
     <Route path='/addblog' element={<AddBlog />} />
     <Route path='/blogs/:id' element={<SingleBlog />} />
   </Routes>
  </Router>
   
   
   </>
  )
}

export default App

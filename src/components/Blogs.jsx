import React from 'react'
import Navbar from './Navbar'
import {getAuth} from 'firebase/auth'

const Blogs = () => {
  const auth = getAuth();
  return (

  <>
    <Navbar />

    <div className="container d-flex justify-content-center align-items-center flex-column my-3">
   <div className="container">
    <div  className= "user-content d-flex justify-content-center align-items-center" style={{width:"65%"}} >
        
       
      
          <img src={auth?.currentUser?.photoURL} alt="photourl"
          style={{width:"7%", borderRadius:"50%", margin:'0.5rem'}} />

          <h3> {auth?.currentUser?.displayName} </h3>
        </div>

        </div>

    <div class="card mb-3 bg-secondary" style={{ maxWidth:'700px' }}>
      <div class="row g-0 ">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <img src= "https://m.media-amazon.com/images/I/81LevhQnGmL._SY445_.jpg" class="img-fluid rounded-start" alt="..." style={{
            width:"70%"
          }} />
        </div>
        <div class="col-md-8">
          <div class="card-body text-center text-white">
            <h1 class="card-title">Card title</h1>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          
           <button className='btn btn-primary mx-3'>View More </button>
           <button className='btn btn-danger'>Delete </button>
           </div>
           

          </div>
        </div>
      </div>
    </div>
</>
  )
}
export default Blogs












   
import React from 'react'
import {getAuth} from 'firebase/auth'
import { useNavigate , Link , useLocation } from 'react-router-dom';

const Navbar = () => {
    // console.log(getAuth());
    const auth = getAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const logOut = () =>{
        auth.signOut();
        navigate('/')
      }


    return (
        <>
        <div  className= 'bg-primary d-flex align-items-center p-2' style={{justifyContent:'space-between'}}>
        <div  className= "user-content d-flex justify-content-center align-items-center" >
        
       
      
          <img src={auth?.currentUser?.photoURL} alt="photourl"
          style={{width:"20%",height:"90%", borderRadius:"50%"}} />

          <h3> {auth?.currentUser?.displayName} </h3>

        </div>


        <div  className= "email d-flex  justify-content-center align-items-center" style={{gap:'1rem'}} >

  {location.pathname === '/blogs' &&  <Link to={"/addblog"} type="button" class="btn btn-warning" >
  Add Blog
</Link>}

     {location.pathname !== '/blogs' &&  <Link to={"/blogs"} type="button" class="btn btn-warning" >
 Back To Blogs
</Link>}
 
      <h3>{auth?.currentUser?.email}</h3>
  

  
  </div>
  </div>
  </>
        )
  }

export default Navbar

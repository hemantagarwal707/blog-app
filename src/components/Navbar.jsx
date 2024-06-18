import React from 'react'
import {getAuth} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // console.log(getAuth());
    const auth = getAuth();
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


      <button className= 'btn btn-warning'>AddBlog </button>
      <h3>{auth?.currentUser?.email}</h3>
  
  <button 
  onClick={logOut}
  className= 'btn btn-danger'>Log Out </button>
  
  </div>
  </div>
  </>
        )
  }

export default Navbar

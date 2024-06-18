import React from 'react'
import { auth } from '../Firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const Login = () => {


    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result);



    }

  return (
    <>
    
    <div className="container">
    <div className=' d-flex justify-content-center align-items-center' style={{height: '100vh'}} >
<img
onClick={signInWithGoogle}
 src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" alt="Google Login" style={{width:'10%'}} />



</div>

</div>
    
    
    
    </>
  )
}

export default Login
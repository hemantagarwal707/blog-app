import React from 'react'
import Navbar from './Navbar'

const AddBlog = () => {
  return (
  <>
  <Navbar/>
  <div className="container my-3" style={{ padding: '2rem', width: '50%' }}>
  <form>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

      
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Short Desciption</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Full Desciption</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>



<div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Image URL</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>


    


          <button type="submit" class="btn btn-primary ">Add Blog</button>
     

  </form>
  </div>
  
  
  
  
  
  </>
  )
}

export default AddBlog
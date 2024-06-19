import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {getAuth} from 'firebase/auth'
import { db} from '../Firebase'
import { onSnapshot, collection, doc, deleteDoc} from 'firebase/firestore'
const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([])
  const auth = getAuth();
  const colleRef = collection(db, 'blog')
  useEffect(() => {

    const getdata = async () =>{

      
   await onSnapshot(colleRef, (snapshot) => {
        setAllBlogs(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
      
    }
    getdata();
    console.log(allBlogs)

  }, [])
  const deleteBlog = async (id) =>{
    alert("Document will deleted forever..!")
    const deleteData = doc(db, "blog", id)
    await deleteDoc(deleteData);
  }

  return (
    <>
    <Navbar />

    <div style={{ marginTop: '1rem', textAlign: 'center', minHeight: "100vh" }}>
    {allBlogs.map((data)=>{
      return(
        <>
       

      <div className="container  my-3 ">
        <div className='d-flex justify-content-center align-item-center flex-column '>

          <div className="author d-flex justify-content-center align-items-center"
            style={{
              width: "60%",

            }}
          >
            <img src={data.authorImg} alt="author" style={{
              width: "4%",
              borderRadius: "50%",
              margin: '1rem'
            }} />
            <h3>{data.authorName}</h3>
          </div>
          <div className='d-flex justify-content-center align-item-center'>

            <div className="card center bg-secondary" style={{ width: "70%", alignItems: "center", color: 'white' }}>
              <div className="row ">
                <div className="col-md-4 d-flex justify-content-center align-item-center">
                  <img src={data.imgUrl} className="img-fluid rounded-start" alt="..." style={{
                    width:"60%"
                  }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <h5 className="card-text">{data.shortDesc}</h5>
                    <h5 className=""><small className="text-warning">Last updated 3 mins ago</small></h5>
                    <button className='btn btn-primary mx-3' >View More</button>
                    <button className='btn btn-danger mx-3' onClick={()=>deleteBlog(data.id)}>Delete</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>





    </>
      )
    })}
    </div>
    
  </>
)
}

export default Blogs












   
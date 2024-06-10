import React, { useState } from 'react'
import Navbar from './Navbar'



const SearchStudent = () => {
    const [data,setData]=useState(
        {
            "firstname":""
        }

    )
    const inputHandler=(event)=>{
        setData=({...data,[event.target.name]:event.target.value})
    }
const readValue=()=>{
    console.log(data)
}
  return (
    <div>
     <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className=""  name='firstname' value={data.firstname} onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button class="btn btn-success" onClick={readValue}>SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SearchStudent
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const  [data,setData]=useState(
        {
            
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "address":""

           

        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
   const readValue=()=>{
    console.log(data)
    axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("SUCCESFULLY ADDED")
                
            } else {
                alert("ERROR")
            }
        }
    )
   }
    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                   
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">first</label>
                            <input type="text" className="form-control" name='firstname' value={data.first} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">last</label>
                        <input type="text" className="form-control" name='lastname' value={data.last} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">dob</label>
                            <input type="date" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">course</label>
                            <input type="text"  id="" className="form-control" name='course' value={data.course} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">mobile</label>
                            <input type="text" id="" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text"id="" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">address</label>
                            <input type="text" id="" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                            <button class="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    </div>
  )
}

export default AddStudent
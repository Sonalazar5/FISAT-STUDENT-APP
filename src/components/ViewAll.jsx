import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  const [data, setData] = useState([])
  const fetchData = () => {
    axios.get(" https://courseapplogix.onrender.com/getdata").then(
      (response) => {
        console.log(response.data)
        setData(response.data)
      }
    ).catch().finally()
  }
  useEffect(() => { fetchData() }, [])
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                 
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">College</th>
                  <th scope="col">dob</th>
                  <th scope="col">Course</th>

                </tr>
              </thead>
              <tbody>
                {data.map(
                  (value, index) => {
                    return <tr>

                      
                      <td>{value.firstname}</td>
                      <td>{value.lastname}</td>
                      <td>{value.college}</td>
                      <td>{value.dob}</td>
                      <td>{value.course}</td>

                    </tr>
                  }
                )

                }


              </tbody>
            </table></div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
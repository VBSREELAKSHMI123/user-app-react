import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'

const ViewUser = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavBar/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">DOB</th>
      <th scope="col">BLOOD GROUP</th>
      <th scope="col">MOBILE</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">PINCODE</th>
      <th scope="col">DISTRCIT</th>
      <th scope="col">PLACE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">USERNAME</th>
      <th scope="col">PASSWORD</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value, index)=>{
        return  <tr>
      
        <td>{value.name}</td>
        <td>{value.dob}</td>
        <td>{value.blood}</td>
        <td>{value.mobile}</td>
        <td>{value.adr}</td>
        <td>{value.pin}</td>
        <td>{value.dis}</td>
        <td>{value.place}</td>
        <td>{value.email}</td>
        <td>{value.uname}</td>
        <td>{value.pass}</td>
        
      </tr>
    }
   )

   }
   
  </tbody>
</table>
    </div>
  )
}

export default ViewUser
import React, { useState } from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'

const AddUser = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "dob":"",
            "blood":"",
            "mobile":"",
            "adr":"",
            "pin":"",
            "dis":"",
            "place":"",
            "email":"",
            "uname":"",
            "pass":"",
            "cpass":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                 alert("succes")   
                } else {
                 alert("error")   
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>REGISTER</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BLOOD GROUP</label>
                            <input type="text" className="form-control" name='blood' value={data.blood} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="from-label">PHONE</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ADDRESS</label>
                            <textarea  id="" className="form-control" name='adr' value={data.adr} onChange={inputHandler}>Type here</textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DISTRICT</label>
                            <select  id="" className="form-control" name='dis' value={data.dis} onChange={inputHandler}>
                                <option value="thrissur">thrissur</option>
                                <option value="eranamkulam">eranamkulam</option>
                                <option value="palakad">palakad</option>
                                <option value="kozhikode">kozhikode</option>
                                <option value="kasarkode">kasarkode</option>
                                <option value="thiruvananthapuram">thiruvananthapuram</option>
                                <option value="wayanad">wayanad</option>
                                <option value="idukki">idukki</option>
                                <option value="malappuram">malappuram</option>
                                <option value="kottayam">kottayam</option>
                                <option value="alappuzha">alappuzha</option>
                                <option value="kannur">kannur</option>
                                <option value="pathanamthitta">pathanamthitta</option>
                                <option value="kollam">kollam</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PINCODE</label>
                            <input type="text" className="form-control" name='pin' value={data.pin} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PLACE</label>
                            <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">USER NAME</label>
                            <input type="text" className="form-control" name='uname' value={data.uname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password"  id="123" className="form-control" name='pass' value={data.pass} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                            <input type="password"  id="12" className="form-control" name='cpass' value={data.cpass} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><button className="btn btn-success" onClick={readValue}>REGISTER</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser
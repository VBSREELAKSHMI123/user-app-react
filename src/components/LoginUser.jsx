import React, { useState } from 'react'
import { NavBar } from './NavBar'

const LoginUser = () => {
    const [data,setData]=useState(
        {
            "uname":"",
            "pass":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">USER NAME</label>
                    <input type="text" className="form-control" name='uname' value={data.uname} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">PASSWORD</label>
                   <input type="password" id="123" className="form-control" name='pass' value={data.pass} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">
                        <center>
                            <button className="btn btn-secondary" onClick={readValue}>LOGIN</button>
                            </center>
                    </label>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><a href="/add">Create an Account</a></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginUser
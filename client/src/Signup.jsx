import React, { Component, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from  'axios'
const Signup=()=>{
    
        const [fname, setFname]=useState()
        const [lname, setLname]=useState()
        const [dept, setDept]= useState()
        const [serialNum, setSerialNum]= useState()
        const Registerr =(e)=>{
        axios.post('http://localhost:3001/register', { fname, lname, dept, serialNum })
            .then(result => console.log(result))
            .catch(err=>console.log(err))
            alert(fname + " Is registered sucessfully")
            //navigate('/Login') */
        }
    
return(
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <form onSubmit={Registerr}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>First Name:</strong>
                    </label>
                <input type='text' className="form-control rounded-0"
                name='fname'
                placeholder='first name' 
                onChange={(e)=>setFname(e.target.value)}
                required
                autoComplete='off'
                />
                </div>
                <div className='mb-3'>
                <label htmlFor='email'>
                        <strong>Last Name:</strong>
                    </label>
                <input type='text' className="form-control rounded-0"
                name='lname'
                placeholder='last name' 
                onChange={(e)=>setLname(e.target.value)}
                required
                autoComplete='off'/>
                </div>
                <div className='mb-3'>
                <label htmlFor='email'>
                        <strong>Department:</strong>
                    </label>
                <input type='text' className="form-control rounded-0"
                name='dept'
                placeholder='department' 
                onChange={(e)=>setDept(e.target.value)}
                required
                autoComplete='off'
                /></div>
                <div className='mb-3'>
                <label htmlFor='email'>
                        <strong>Serial Number</strong>
                    </label>
                <input type='text' className="form-control rounded-0"
                name='serialNum' 
                placeholder='Serial Number' 
                onChange={(e)=>setSerialNum(e.target.value)}
                required
                autoComplete="off"/>
                </div>
                <div className='mb-3'>
                <label htmlFor='email'>
                        <strong>Select Picture</strong>
                    </label>
                <input type='file' className="form-control rounded-0"
                name='image' 
                
            />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                
            
        </form>
        <Link to="/Home">Don't have an account?
        </Link>
        
            </div>
            </div>
        
    );
}

export default Signup
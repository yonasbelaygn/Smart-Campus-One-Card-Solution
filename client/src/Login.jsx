import React, { Component, useState } from 'react'
import axios from  'axios'
import { useNavigate } from 'react-router-dom'
import styles from "./App.module.css"
function Login(){

    const[fname, setFname]=useState()
    const[lname, setLname]=useState()
    
    const navigate=useNavigate()
   
    const Regsiterr=(e)=>{
        e.preventDefault()
        
         axios.post('http://localhost:3001/login', {fname,lname})
           
            // Optionally reset the form
            .then(result =>{
                console.log(result)
                if(result.data === "Success"){
                    alert("Successfully Logged")
                   navigate("/Functions")
                    
                }
                else if(result.data ==="password error"){
                    alert("your password is incorrect")
                }
                else{
                    alert("There is no record ")
                }

            })
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            
            <div className='bg-white p-3 rounded w-25'>
            <form onSubmit={Regsiterr}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>First Name:</strong>
                    </label>
                <input type='text' className="form-control rounded-0"
                name='fname'
                placeholder='first name' 
                onChange={(e)=>setFname(e.target.value)}
                required
                />
                </div>
                <div className='mb-3'>
                <label htmlFor='email'>
                        <strong>Password:</strong>
                    </label>
                <input type='password' className="form-control rounded-0"
                name='lname'
                placeholder='password' 
                onChange={(e)=>setLname(e.target.value)}
                required/>
                </div>
                
                <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
            
            
        </form>
        <p>Already have an account?</p>
        
            </div>
            
            </div>
        
    );
}

export default Login
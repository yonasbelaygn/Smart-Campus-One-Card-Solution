import React, { Component, useEffect, useState } from 'react'
import axios from  'axios'
import styles from "./App.module.css"
function Check(){

    const[serialNum, setSerialNum]=useState()
    const [userData, setUserData]=useState([])
    const [image, setImage]= useState()
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/checks', {
                params: { serialNum },
            });
            setUserData(response.data);
            
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('Sorry, No information with this serial number.');
                
            } else {
                alert(error);
            }
        }
        
    };
    const Handling=(e)=>{
        e.preventDefault()
        fetchData();
        
         } 
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <form onSubmit={Handling}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>ልዩ ቁጥርን ያስገቡ</strong>
                    </label>
                <input type='text' className="form-control rounded-0"
                name='serialNum'
                placeholder='ልዩ ቁጥር ' 
                onChange={(e)=>setSerialNum(e.target.value)}
                required
                />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Check</button>
        </form>
       
        {userData && (
                <div>
                    <h2>የተጠቃሚ መረጃ </h2>
                    <p>የመጀመሪያው ስም: {userData.fname}</p>
                    <p>የአባት ስም: {userData.lname}</p>
                    <p>የትምህርት ክፍል: {userData.dept}</p>
                    <p>ልዩ ቁጥር: {userData.serialNum}</p>
                    ምስል<img src={userData.image} />
                </div>
            )}
            </div>
            
            </div>
        
    );
}

export default Check
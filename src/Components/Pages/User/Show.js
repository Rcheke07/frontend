import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'

export default function Show() {
    const[users,setuser]=useState([])

    

    async function fetchdata()
    {
        const result=await axios.get('http://127.0.0.1:8000/data/')
        setuser(result.data)
    }

    useEffect(()=>{fetchdata()},[])
  return (
    <>

    <table className='table table-stiped'>
        <thead>
            <tr>
                <th>PROFILE PHOTO</th>
                <th>EMPLOYEE ID</th>
                <th>EMPLOYEE NAME</th>
                <th>CONTACT NUMBER</th>
                <th>MAIL ID</th>
                <th>ACTIONS</th>

            </tr>
        </thead>
        <tbody>
           {
            users.map(obj=>{return(
                <tr>
                    <td><img src={obj.ppic} width="100px" height="100px" /></td>
                    <td>{obj.eid}</td>
                    <td>{obj.ename}</td>
                    <td>{obj.phone}</td>
                    <td>{obj.mail}</td>
                
                    <td>
                        <NavLink to={`/user/update/${obj.id}`}><button className='btn btn-warning'>UPDATE</button></NavLink>
                        <NavLink to={`/user/delete/${obj.id}`}><button className='btn btn-danger'>DELETE</button></NavLink>

                    
                    </td>
                </tr>
            )})
           }
        </tbody>
    </table>

    </>
  )
}
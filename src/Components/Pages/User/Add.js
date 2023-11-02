import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Add() {

    const {register,handleSubmit}=useForm();
    const navi=useNavigate();
    function SaveData(data){
        data.ppic=data.ppic[0]
        axios.post('http://localhost:8000/data/',data,{headers:{'Content-Type':'multipart/form-data'}})
        navi('user/show')
    }
  return (
    <>
    <div className='container'>
        <form onSubmit={handleSubmit(SaveData)} encType='multipart/form-data'>
            <label htmlFor='a'><b>Enter Employee Id :</b></label>
            <input type='number' id='a' placeholder='eg 101' className='form-control' {...register('eid')} />
            <br></br>
            <label htmlFor='b'><b>Enter Employee Name :</b></label>
            <input type='text' id='b' placeholder='eg abc' className='form-control' {...register('ename')}  />
            <br></br>
            <label htmlFor='c'><b>Enter Contact Number :</b></label>
            <input type='phone' id='c' placeholder='eg +91.........' className='form-control' {...register('phone')} />
            <br></br>
            <label htmlFor='d'><b>Enter Email ID :</b></label>
            <input type='email' id='d' placeholder='abc@gmail.com' className='form-control' {...register('mail')} />
            <br></br>
            <label><b>Upload Profile Photo :</b></label>
            <input type='file'  className='form-control' {...register('ppic')}/>
            <br/><br/>
            <input type='submit' value='Add Employee' className='btn btn-outline-success col-6 btn-lg' />
            <input type='reset' value='Reset' className='btn btn-outline-warning col-6 btn-lg' />
        </form>

    </div>
    
    </>
  )
}

export default Add
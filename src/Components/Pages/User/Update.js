import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {

    const{pk}=useParams();

    const redirect=useNavigate();

    const{register,handleSubmit,setValue}=useForm({});

   async function fetchuser()
    {
        const result=await axios.get(`http://127.0.0.1:8000/data/${pk}`)
        setValue('eid',result.data.eid)
        setValue('ename',result.data.ename)
        setValue('phone',result.data.phone)
        setValue('mail',result.data.mail)
        setValue('ppic',result.data.ppic)


    }

    function savedata(data)
    {
        data.ppic= data.ppic[0]
        axios.put(`http://127.0.0.1:8000/data/${pk}`,data,{headers:{'Content-Type':'multipart/form-data'}})
        redirect('/user/show')


    }

    useEffect(()=>{fetchuser()},[])



  return (
   <>
    <div className='container'>
        <form onSubmit={handleSubmit(savedata)} encType='multipart/form-data'>
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
            <input type='submit' value={'Update Data'} className='btn btn-outline-success col-6 btn-lg' />
            <input type='reset' value={'Reset'} className='btn btn-outline-warning col-6 btn-lg' />
            
        </form>

    </div>
    
    </>
   )
 }
 
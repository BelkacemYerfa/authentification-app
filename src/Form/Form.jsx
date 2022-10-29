import * as yup from 'yup' ;  
import {motion} from 'framer-motion'  ; 
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
export const CreateForm = ()=>{
  const schema = yup.object().shape({
    name : yup.string() , 
    bio : yup.string().max(250).min(1) , 
    phone : yup.number() , 
    email : yup.string().email() ,
    password : yup.string().min(8).max(20)
  })
  const {register , handleSubmit } = useForm({
   resolver : yupResolver(schema)
  })
  const onSubmitHandle = (data)=>{
   console.log(data)
  }
  return(
   <form action="" className='format' onSubmit={handleSubmit(onSubmitHandle)}>
    <label htmlFor="name" className='Label'>name</label>
    <input type='text' className='Input' placeholder='Enter your name' {...register('name')} />
    <label htmlFor="name" className='Label'>bio</label>
    <textarea placeholder="Enter your bio ..." {...register('bio')} style={{resize : 'none'}} className='textarea' />
    <label htmlFor="phone" className='Label'>phone</label>
    <input type='tel' className='Input' {...register('phone')} placeholder='Enter your phone number' />
    <label htmlFor="email" className='Label'>email</label>
    <input type='email' className='Input' {...register('email')} placeholder='Enter your email' />
    <label htmlFor="password" className='Label'>password</label>
    <input type='password' className='Input' {...register('password')} placeholder='Enter your password' />
    <motion.input
     whileHover={{scale : 1.1}}
     whileTap={{scale:.9}} 
    type="submit" value="Submit" className="BtnSave" />
  </form>
  ) ;

}
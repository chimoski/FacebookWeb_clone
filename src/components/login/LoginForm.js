import React from 'react'
import * as Yup from 'yup'
import { LoginInput } from "../../components/inputs/loginInput";
import { Formik,Form } from "formik";
import {useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const loginInfos ={
  email:'',
  password:''
};
export const LoginForm = ({setShowRegister}) => {
    const navigate = useNavigate();
    const [login,setLogin] = useState(loginInfos);
    const {email,password}= login;
    // console.log(login);
  
    const handleChange = (e)=>{
      const {name,value}= e.target;
      setLogin({...login,[name]:value})
      
    }
    const loginValidation  = Yup.object({
      email:Yup.string()
      .required('Please enter your email')
      .email('Please it must be a valid email'),
      password:Yup.string()
      .required('Please enter your password')
      .min(8)
      .max(20)
      });

     const loginSubmit =()=>{
       navigate('/')
     }
  return (
    <div className="login_wrap">
    <div className="login_1">
      <img src="../../icons/facebook.svg" alt="" />
      <span>
        Facebook helps you connect and share with the people in your life
      </span>
    </div>
    <div className="login_2">
      <div className="login_2_wrap">
      <Formik
      enableReinitialize
      validationSchema={loginValidation}
      onSubmit={loginSubmit}
        initialValues={{
          email,
          password
        }}
      >
     
       {
         (formik)=>(
           <Form>
             <LoginInput 
             placeholder='Email address or phone number'
             type="text"
             name="email"
             onChange={handleChange}
             
            
              />
             <LoginInput 
             placeholder='Password' 
             type="password"
             name="password"
             onChange={handleChange}
             bottom
             />
             <button type="submit"className="blue_btn" >Log In</button>
           </Form>
         )
       }
     </Formik>
     <Link className="forgot_password" to='/forgot'>Forgotten password?</Link>
     <div className="sign_splitter"></div>
       <button className="blue_btn open_signup"
       onClick={()=> setShowRegister(true)}
       >Create Account</button>
      </div>
      <Link to='/' className="sign_extra">
      <b>Create a page </b>for a celebrity, brand or business
      </Link>
      </div>
      
 </div>
  )
}

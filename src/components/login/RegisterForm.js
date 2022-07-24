import {useState} from 'react'
import { Form } from 'formik'
import { Formik } from 'formik'
import * as  Yup from 'yup'
import React from 'react'
import { RegisterInput } from '../inputs/registerInput'
import {DateOfBirth} from './DateOfBirth'
import { Gender } from './Gender'
import PacmanLoader from "react-spinners/PacmanLoader";
// import axios from 'axios'
// import Cookies from 'js-cookie'
// import { dummyUser } from '../../dummyData/data'
// import userReducer from '../../reducers/userReducer'
// import { date } from 'yup'



export const RegisterForm = ({setShowRegister}) => {
    const userInfo ={
        firstname:'',
        surname:'' ,
        email:'',
        password:'',
        bDay: new Date().getDate(),
        bMonth:new Date().getMonth()+ 1,
        bYear:new Date().getFullYear(),
        gender:'',
    }
    const [users,setUsers] = useState(userInfo);
    const {
        firstname,
        surname,
        email,
        password,
        bDay,
        bMonth,
        bYear,
        gender
        } = users;
   const years  = Array.from(new Array(100),(v,i)=>new Date().getFullYear()-i);
   const months = Array.from(new Array(12),(v,i)=>1+i);
   const getDays = ()=>{
       return new Date(bYear,bMonth,0).getDate();
   }
   const days = Array.from(new Array(getDays()),(v,i)=> 1+i);
   const registerValidation = Yup.object({
       firstname: Yup.string().required('First name is required')
       .min(3,'It must be a minimum of 3 and maximum of 20 letters')
       .max(20,'It must be a minimum of 3 and maximum of 20 letters')
       .matches(/^[aA-zZ]+$/,'Numbers, white spaces and special characters are not allowed'),
       surname: Yup.string().required('Surname is required')
       .min(3,'It must be a minimum of 3 and maximum of 20 letters')
       .max(20,'It must be a minimum of 3 and maximum of 20 letters')
       .matches(/^[aA-zZ]+$/,'Numbers, white spaces and special characters are not allowed'),
       email: Yup.string().required('For reset and recovering your password')
       .email('Please enter a valid email address'),
       password: Yup.string().required('Please enter a password')
       .min(6,'Password must be at least 6 characters')
       .max(36,"Password can't be more than 36 characters")
      
   })
    const handleChange =(e)=>{
        const {name, value} = e.target;
        setUsers({...users,[name]:value})
    }
    const [dateErrors, setDateErrors] =useState('');
    const [genderError, setGenderError] = useState('');
    const [error, setError] = useState('');
    const [success,setSuccess] = useState('');
    const [loading,setLoading]= useState(false); 
   



    // const registerSubmit = async ()=>{
    //     try {
    //         const {data} = await axios.post(
    //             `${process.env.REACT_APP_BACKEND_URL}/register`,
    //             {
    //                 firstname,
    //                 surname,
    //                 email,
    //                 password,
    //                 bDay,
    //                 bMonth,
    //                 bYear,
    //                 gender
    //                 }
    //         )
    //         setError('');
    //         setSuccess(data.message);
    //         const{ message, ...rest}  = data;
    //         setTimeout(() => {
    //             dispatch({type:LOGIN, payLoad:rest});
    //             Cookies.set('user', JSON.stringify(rest))
    //             navigate('/');
    //         }, 2000);
    //     } catch (error) {
    //         setLoading(false);
    //         setSuccess("");
    //         setError(error.response.data.message);
    //     }
    // }

//    const registerSubmit = async()=>{
//       try {
          
//           setLoading(true)
//         const data = axios.post(dummyUser, {
//             firstname : users.firstname,
//             surname : users.surname,
//             email: users.email,
//             password:users.password,
//             bDay:users.bDay,
//             bMonth:users.bMonth,
//             bYear:users.bYear,
//             gender:users.gender
//            })
//            console.log(data);
//            setError('')
//       } catch (error) {
//           setLoading(false);
//           setSuccess('');
//           setError(error);
//       }
//    }




  return (
    <div className="blur">
        <div className="register">
            <div className="register_header">
                <i className="exit_icon" onClick={()=> setShowRegister(false)}></i>
             <span>Sign Up</span>
             <span>It's quick and easy</span>
            </div>

            <Formik
            enableReinitialize
            initialValues={{
                    firstname,
                    surname ,
                    email,
                    password,
                    bDay,
                    bMonth,
                    bYear,
                    gender,   
                }}
                validationSchema={registerValidation}
                onSubmit={()=>{
                    let current_date = new Date();
                    let picked_date =  new Date(bYear,bMonth-1,bDay);
                    let atLeast14 = new Date(1970+14, 0,1);
                    let noMoreThan70 = new Date(1970+70,0,1);
                    if(current_date - picked_date < atLeast14) {
                        setDateErrors("It looks like you've entered the wrong info. please make sure that you use your real date of birth");
                    }else if(current_date - picked_date > noMoreThan70) {
                        setDateErrors("It looks like you've entered the wrong info. please make sure that you use your real date of birth");
                    } else if (gender === ''){
                        setDateErrors('');
                        setGenderError("Please choose a gender, you can change who can see this later");
                    } else{
                        setDateErrors('');
                        setGenderError('');
                        // registerSubmit();
                        // navigate('/');
                    }            
                }}
                >
                { (Formik)=>(
                        <Form className='register_form'>
                           <div className="reg_line">
                           <RegisterInput
                            placeholder="First name"
                            type="text" 
                            name="firstname"
                            onChange ={handleChange}
                             />


                              <RegisterInput
                            placeholder="Surname"
                            type="text"
                            name="surname"
                            onChange ={handleChange}
                              />
                           </div>
                           <div className="reg_line">
                           <RegisterInput
                            placeholder="Mobile number or email"
                            type="text"
                            name="email"
                            onChange ={handleChange}
                              />
                            </div>
                            <div className="reg_line">
                           <RegisterInput
                            placeholder="New password"
                            type="password"
                            name="password"
                            onChange ={handleChange}
                              />
                            </div>
                            <div className="reg_col">
                            <div className="reg_col_header">
                           Date of birth<i className="info_icon"></i>
                            </div>
                            <DateOfBirth
                           bYear={bYear}
                           bMonth={bMonth}
                           bDay={bDay}
                           years={years}
                           handleChange={handleChange}
                           days={days}
                           months={months}
                           dateErrors={dateErrors}
                            />
                            </div>
                          
                            <div className="reg_col">
                                <div className="reg_col_header">
                                    Gender <i className="info_icon"></i>
                                </div>
                               <Gender handleChange={handleChange} genderError={genderError}/>
                            </div>
                            <div className="reg_infos">
                                By clicking Sign up, you agree to our {""}
                                <span>Terms, Data Policy &nbsp;</span> 
                                and <span>Cookie Policy.</span> You may receive SMS 
                                notifications from us and can opt out at any time.
                            </div>
                            <div className="reg_btn_wrapper">
                                <button className="blue_btn open_signup btn">Sign up</button>
                            </div>
                            <PacmanLoader color="blue" loading={loading}  size={10} />
                            {error && <div className='error_text'>{error}</div>}
                            {success && <div className='success_text'>{success}</div>}
                        </Form>
                       )
                        }
            </Formik>
        </div>
    </div>
  )
}

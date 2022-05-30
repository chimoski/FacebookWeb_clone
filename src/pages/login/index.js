import './style.css';
import {useState} from'react'
import { LoginForm } from '../../components/login/LoginForm';
import { Footer } from '../../components/login/Footer';
import { RegisterForm } from '../../components/login/RegisterForm';
export const Login = () => {
 const [showRegister, setShowRegister]  = useState(false);
  return (
    <div className="login_wrapper">
        <LoginForm setShowRegister={setShowRegister} />
       {showRegister &&  <RegisterForm setShowRegister={setShowRegister} />}
       <Footer />
    </div>
  )
}





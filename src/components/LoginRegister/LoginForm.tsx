import React, { useState } from 'react'
import SignUpForm from '../../pages/LoginRegister/SignUpForm'
import SignUpFormSuccess from './SignUpFormSuccess'

const LoginForm = () => {
  const [formIsSubmitted, setFormIsSubmited] = useState(false)
  const loginForm = () => {
    setFormIsSubmited(true)
  }
  return (
        <>
           {!formIsSubmitted ? (<SignUpForm submitForm={loginForm}/>):(<SignUpFormSuccess/>)}
        </>
  )
}
export default LoginForm

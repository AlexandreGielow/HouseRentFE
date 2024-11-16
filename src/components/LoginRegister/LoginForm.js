import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import SignUpFormSuccess from './SignUpFormSuccess'

const LoginForm = () => {
  const [formIsSubmitted, setFormIsSubmited] = useState(false)
  const loginForm = () => {
    setFormIsSubmited(true)
  }
  return (
        <>
           {!formIsSubmitted ? (<SignUpForm loginForm={loginForm}/>):(<SignUpFormSuccess/>)}
        </>
  )
}
export default LoginForm

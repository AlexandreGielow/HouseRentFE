import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import SignUpFormSuccess from './SignUpFormSuccess'

const loginForm = () => {
  const [formIsSubmitted, setFormIsSubmited] = useState(false)
  const loginForm = () => {
    setFormIsSubmited(true)
  }
  return (
        <div>
           {!formIsSubmitted
             ? (
            <SignUpForm loginForm={loginForm}/>
               )
             : (
            <SignUpFormSuccess/>
               )}
        </div>
  )
}
export default loginForm

import React from 'react'
import useLoginForm from '../../components/LoginRegister/useLoginForm'
import '../../App.css'
import './SignUpForm.css'
import { Link } from 'react-router-dom'

const LoginForm = ({ loginForm }) => {
  const { handleChange, handleFormSubmit, values } = useLoginForm(
    loginForm
  )

  return (
    <div className="hero-container">
    <div className="container">
        <div className="app-wrapper">
            <h2 className="lable">Fill your credentials</h2>
        </div>
        <form className="form-wrapper">
            <div className="email">
                <label className="label">E-mail</label>
                <input className="input" type="email" name="Email" value={values.Email} onChange={handleChange}/>
            </div>
            <div className="password">
                <label className="label">Password</label>
                <input className="input" type="password" name="Password"value={values.Password} onChange={handleChange}/>
            </div>
            <div className='button'>
            <Link to='/'>
                <button className="btn--outline" onClick={handleFormSubmit}>Login</button>
                </Link>
            </div>
        </form>
    </div>
</div>
  )
}

export default LoginForm

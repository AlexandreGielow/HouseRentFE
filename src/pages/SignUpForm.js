import React, {useEffect, useState} from "react";
import useSubmitForm from "../components/useSubmitForm";
import '../App.css';
import './SignUpForm.css'



const SignUpForm =({submitForm}) =>{
    
    const{handleChange, handleFormSubmit, values,errors} = useSubmitForm(
        submitForm
        );
    return(
        <div className="hero-container">   
            <div className="container">
                <div className="app-wrapper">
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Name</label>
                        <input className="input" type="text" name="Name" value={values.Name} onChange={handleChange}/>
                        {errors.Name && <p className="error">{errors.Name}</p>}
                    </div>
                    <div className="name">
                        <label className="label">Sure Name</label>
                        <input className="input" type="text" name="SureName" value={values.SureName} onChange={handleChange}/>
                        {errors.SureName && <p className="error">{errors.SureName}</p>}
                    </div>
                    <div className="email">
                        <label className="label">E-mail</label>
                        <input className="input" type="email" name="Email" value={values.Email} onChange={handleChange}/>
                        {errors.Email && <p className="error">{errors.Email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="Password"value={values.Password} onChange={handleChange}/>
                        {errors.Password && <p className="error">{errors.Password}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Confirm Password</label>
                        <input className="input" type="password" name="ConfirmPassword"value={values.ConfirmPassword} onChange={handleChange}/>
                        {errors.ConfirmPassword && <p className="error">{errors.ConfirmPassword}</p>}
                    </div>
                    <div>
                        <button className="btn--outline" onClick={handleFormSubmit}>Create Account</button>
                    </div>

                </form>            
            </div>
        </div>
    )
};

export default SignUpForm
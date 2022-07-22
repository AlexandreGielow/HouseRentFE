import React, {useState} from "react";
import SignUpForm from "./SignUpForm";
import SignUpFormSuccess from "./SignUpFormSuccess";

const submitForm =() =>{
    const [formIsSubmitted, setFormIsSubmited]= useState(false);
    const submitForm =()=> {
        setFormIsSubmited(true);
    };
    return(
        <div>
           {!formIsSubmitted ? (
            <SignUpForm submitForm={submitForm}/>
            ) : (
            <SignUpFormSuccess/>
            )} 
        </div>
    );
}
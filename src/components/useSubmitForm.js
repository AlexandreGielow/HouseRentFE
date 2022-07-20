import React, {useState, useEffect} from "react";
import SignUpValidation from "./SignUpValidation";

const useSubmitForm =(submitForm) =>{

const [values,setValues]= useState({
    Name: "",
    SureName: "",
    Email: "",
    PassWord:"",
    ConfirmPassword:""
});

const handleChange = (event) =>{
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
const [errors,setErrors]= useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);

const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(SignUpValidation(values));
    setDataIsCorrect(true);
};


useEffect(()=>{
if(Object.keys(errors).length ===0 && dataIsCorrect){
    submitForm(true);
}
},[errors]); 

    return {handleChange,handleFormSubmit,errors,values};
};
export default useSubmitForm;
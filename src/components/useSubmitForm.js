import React, {useState, useEffect, useCallback} from "react";
import SignUpValidation from "./SignUpValidation";

const useSubmitForm =(submitForm) =>{

const [values,setValues]= useState({
    Name: "",
    SureName: "",
    Email: "",
    Password:"",
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

const  SendPerson = async (values)=> {             
        const requestOptions = {
            method: 'POST',            
            body: JSON.stringify(  {
                "id": 0,
                "name": "string",
                "sureName": "string",
                "personType": 0,
                "email": "string"
              }),
            json: true,
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
                'Content-Type': 'application/json'
            }),
          };        
          const response = await  fetch('https://localhost:44307/api/Person', requestOptions);                  
    };

const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    setErrors(SignUpValidation(values));
    setDataIsCorrect(true);
    SendPerson(values);
    
}, [setErrors,setDataIsCorrect,SendPerson,useCallback]);//depenci array(tudo que usar de metodo tem que estar aq)

useEffect(()=>{
if(Object.keys(errors).length ===0 && dataIsCorrect){
    submitForm(true);
};

},[errors]); 
    return {handleChange,handleFormSubmit,errors,values};
};


export default useSubmitForm;
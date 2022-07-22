const SignUpValidation =(values)=>{
    let errors={};
    if(!values.Name){
        errors.Name="Name is required"
    }
    if(!values.Surename){
        errors.Surename="Surename is required"
    }
    if(!values.Email){
        errors.Email="Email is required"
    }//else if(/\S+@\S+\.\S+/.test(values.Email)){
       // errors.Email="Invalid Email"
    //}
    if(!values.Password){
        errors.Password="Password is required"
    }
    if(!values.ConfirmPassword){
        errors.ConfirmPassword="Confirm Password is required"
    }else if(values.Password!=values.ConfirmPassword){
        errors.ConfirmPassword="Password and Confirmation does not match"
    }
    return errors
}
export default SignUpValidation
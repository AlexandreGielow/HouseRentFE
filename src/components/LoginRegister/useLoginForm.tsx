import React,{ useState, useEffect, useCallback, useContext } from 'react'
import {User, UserContext } from '../../context/ContextProvider'
import { SnackbarCloseReason } from '@mui/material/Snackbar';
interface LoginFormData {
  UserName: string;
  Password: string;
}
const useLoginForm = () => {
  
  const [errors, setErrors] = useState(null)
  const [values, setValues] = useState({
    UserName:'',
    Password: ''
  })

  const handleChange = (event:any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  //pega e grava usuario do contexto
  const { setUser } = useContext(UserContext);
  
  const handleFormSubmit = useCallback((event: { preventDefault: () => void }) => {
    const SendLogin = async (LoginForm:LoginFormData) => {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          username: LoginForm.UserName,
          password: LoginForm.Password,
        }),
        json: true,
        headers: new Headers({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
          'Content-Type': 'application/json'
        })
      }
      try{
        const response = await fetch('https://localhost:7023/api/Auth/Login', requestOptions)
        const responseData = await response.json()
        if(responseData.token){
          const newUser: User = {
            name: LoginForm.UserName,
            isLogged: true
          };
          setUser(newUser);
          localStorage.setItem('token', responseData.token)
          setErrors(null)
          setOpen(false);
        }else{
          throw new Error(responseData.title)
        }
      }catch(e: any){
        setOpen(true);
        setErrors(e.message)
      }   
    }
      
    event.preventDefault()
    SendLogin(values)
  }, [values,setUser])

  useEffect(() => {
  }, [errors])
  return { handleChange, handleFormSubmit, errors, values, open, handleClose }
}

export default useLoginForm

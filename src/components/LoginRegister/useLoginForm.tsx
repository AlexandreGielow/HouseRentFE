import { useState, useEffect, useCallback, useContext } from 'react'
import SignUpValidation from './SignUpValidation'
import {User, UserContext } from '../../context/ContextProvider'
interface LoginFormData {
  UserName: string;
  Password: string;
}
const useLoginForm = () => {
  
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    UserName:'',
    Password: ''
  })
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange = (event:any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  //pega e grava usuario do contexto
  const { user, setUser } = useContext(UserContext);
  
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
      const response = await fetch('https://localhost:7023/api/Auth/Login', requestOptions)
      const responseData = await response.json()

      const newUser: User = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        isLogged: true
      };
      setUser(newUser);

      console.log(user)
      localStorage.setItem('token', responseData.token)
    }
      
    event.preventDefault()
    setErrors(SignUpValidation(values))
    setDataIsCorrect(true)
    SendLogin(values)
  }, [setErrors, setDataIsCorrect, values,setUser,user])

  useEffect(() => {
    //aqui vai as validações de erro no futuro

  }, [errors, dataIsCorrect])
  return { handleChange, handleFormSubmit, errors, values }
}

export default useLoginForm

import { useState, useEffect, useCallback, useContext } from 'react'
import SignUpValidation from './SignUpValidation'
import {User, UserContext } from '../../context/ContextProvider'

const useSubmitForm = (submitForm:any) => {
  
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    Name: '',
    SureName: '',
    UserName:'',
    Email: '',
    Password: ''
  })
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange = (event:any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const { user, setUser } = useContext(UserContext);
  
  const handleFormSubmit = useCallback((event: { preventDefault: () => void }) => {
    const SendLogin = async (values:any) => {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          username: values.UserName,
          password: values.Password,
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
      setValues({
        Name: 'Alex',
        SureName: 'Gielow',
        UserName:'alexgielow',
        Email: 'alex.gielow@gmail.com',
        Password: 'cagada123'
      });
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
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true)
    }
  }, [errors, dataIsCorrect, submitForm])
  return { handleChange, handleFormSubmit, errors, values }
}

export default useSubmitForm

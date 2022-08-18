import { useState, useEffect, useCallback } from 'react'
import SignUpValidation from './SignUpValidation'
import { useDispatch } from 'react-redux'
import { changeUser } from '../../reducers/userLogged'

const useSubmitForm = (submitForm) => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    Name: '',
    SureName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  })

  const [dataIsCorrect, setDataIsCorrect] = useState(false)



  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }



  const handleFormSubmit = useCallback((event) => {
    const SendLogin = async (values) => {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          Email: values.Email,
          Name: '',
          Password: values.Password,
          SureName: ''
        }),
        json: true,
        headers: new Headers({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
          'Content-Type': 'application/json'
        })
      }
      const response = await fetch('https://localhost:44307/api/Person/authenticate', requestOptions)
      const responseData = await response.json()
      localStorage.setItem('token', responseData.token)
      dispatch(changeUser(responseData.person.name))
    }
    const handleLogin = () => {
      // eslint-disable-next-line no-restricted-globals
      dispatch(changeUser(name))
    }
    
    event.preventDefault()
    setErrors(SignUpValidation(values))
    setDataIsCorrect(true)
    SendLogin(values)
    handleLogin()
  }, [setErrors, setDataIsCorrect, values, dispatch])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true)
    }
  }, [errors, dataIsCorrect, submitForm])
  return { handleChange, handleFormSubmit, errors, values }
}

export default useSubmitForm

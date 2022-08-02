import { useState, useEffect, useCallback } from 'react'
import SignUpValidation from './SignUpValidation'
import { useDispatch } from 'react-redux'
import { changeUser } from '../../reducers/userLogged'

const useSubmitForm = (submitForm) => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(changeUser(name))
  }

  const [values, setValues] = useState({
    Name: '',
    SureName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

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
    // localStorage.setItem('userName', responseData.person.Name)
    setName(responseData.person.Name)
  }

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault()
    setErrors(SignUpValidation(values))
    setDataIsCorrect(true)
    SendLogin(values)
    handleLogin()
  }, [setErrors, setDataIsCorrect, SendLogin, useCallback, handleLogin])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true)
    }
  }, [errors])
  return { handleChange, handleFormSubmit, errors, values }
}

export default useSubmitForm

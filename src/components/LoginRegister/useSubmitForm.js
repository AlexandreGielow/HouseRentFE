import { useState, useEffect, useCallback } from 'react'

const useLoginForm = (loginForm) => {
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
        Name: values.Name,
        Password: values.Password,
        SureName: values.SureName
      }),
      json: true,
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json'
      })
    }
    await fetch('https://localhost:44307/api/v1/Person', requestOptions)
  }

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault()
    setDataIsCorrect(true)
    SendLogin(values)
  }, [setErrors, setDataIsCorrect, SendLogin, useCallback])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      loginForm(true)
    }
  }, [errors])
  return { handleChange, handleFormSubmit, errors, values }
}

export default useLoginForm

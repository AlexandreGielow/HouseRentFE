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

  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleFormSubmit = useCallback((event) => {

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
      await fetch('https://localhost:44307/api/Person', requestOptions)
    }
    event.preventDefault()
    setDataIsCorrect(true)
    SendLogin(values)
  }, [ setDataIsCorrect,values])

  useEffect(() => {
    if (dataIsCorrect) {
      loginForm(true)
    }
  }, [dataIsCorrect,loginForm])
  return { handleChange, handleFormSubmit, values }
}

export default useLoginForm

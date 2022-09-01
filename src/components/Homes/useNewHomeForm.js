import { useState, useEffect } from 'react'
import WebService from '../../api/WebService'

const useNewHomeForm = (homeForm) => {
  const [values, setValues] = useState({
    Name: ''
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = () =>{
    WebService(values,"Property")
  } 

  useEffect(() => {
  }, [])
  return { handleChange, values }
}

export default useNewHomeForm

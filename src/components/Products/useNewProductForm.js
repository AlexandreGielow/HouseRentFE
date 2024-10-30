import { useState, useEffect } from 'react'
import WebService from '../../api/WebService'

const useNewProductForm = (productForm) => {
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
    WebService(values,"Order")
  } 

  useEffect(() => {
  }, [])
  return { handleChange, values }
}

export default useNewProductForm

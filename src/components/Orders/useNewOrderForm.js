import { useState } from 'react'

const useNewOrderForm = () => {
  const [values, setValues] = useState({
    Name: ''
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  return { handleChange,handleFormSubmit, values }
}

export default useNewOrderForm

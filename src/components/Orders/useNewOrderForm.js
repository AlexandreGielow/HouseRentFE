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

  return { handleChange, values }
}

export default useNewOrderForm

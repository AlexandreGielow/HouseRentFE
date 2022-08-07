import { useState, useEffect } from 'react'

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

  useEffect(() => {
  }, [])
  return { handleChange, values }
}

export default useNewHomeForm

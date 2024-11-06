import { useState, useEffect } from 'react'
//import WebService from '../../api/WebService'

const useNewStoreForm = () => {
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

export default useNewStoreForm

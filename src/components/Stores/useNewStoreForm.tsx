import { useState, useEffect } from 'react'
//import WebService from '../../api/WebService'

const useNewStoreForm = () => {
  const [values, setValues] = useState({
    Name: ''
  })

  interface Values {
    Name: string;
  }

  interface Event {
    target: {
      name: string;
      value: string | number | null;
    };
  }

  const handleChange = (event: Event) => {
    setValues((prevValues: Values) => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }));
  }

  const handleFormSubmit = () => {  }
    
  useEffect(() => {
  }, [])
  return { handleChange,handleFormSubmit, values }
}

export default useNewStoreForm

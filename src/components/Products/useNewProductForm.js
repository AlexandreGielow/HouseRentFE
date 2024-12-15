import { useState, useEffect,useCallback} from 'react'
import Send from '../../api/WebService'
const useNewProductForm = () => {
  const [values, setValues] = useState({
    Name:'',
    Description:'',
    Status:1,
    Quantity:0,
    UnitOfMeasure:0
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = useCallback((event) =>{ 
    //workaround but works
    values.Status = parseInt(values.Status)
    values.UnitOfMeasure = parseInt(values.UnitOfMeasure)
    values.Quantity = parseFloat(values.Quantity)
    Send(values,'product')    
    event.preventDefault()
  }, [values])

  useEffect(() => {
  }, [])
  return { handleChange,handleFormSubmit, values }
}

export default useNewProductForm

import { useState, useEffect, useCallback } from 'react'

interface AccountSubmitForm {
  Name: string;
  SureName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

const useSubmitForm = () => {
  const [values, setValues] = useState<AccountSubmitForm>({
    Name: '',
    SureName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  const [errors, setErrors] = useState<FormErrors>({})
  const [dataIsCorrect, setDataIsCorrect] = useState<boolean>(false)

  const SendSubmit = async (values: AccountSubmitForm): Promise<void> => {
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify({
        Email: values.Email,
        Name: values.Name,
        Password: values.Password,
        SureName: values.SureName
      }),
      //json: true,
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json'
      })
    }
    await fetch('https://localhost:44307/api/v1/Person', requestOptions)
  }

  const handleFormSubmit = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault()
    setDataIsCorrect(true)
    SendSubmit(values)
  }, [values])

  useEffect(() => {
    //colocar validação de erros aq
  }, [dataIsCorrect, errors])
  return { handleChange, handleFormSubmit, errors, values }
}

export default useSubmitForm

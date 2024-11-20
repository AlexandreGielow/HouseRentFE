import { useState } from 'react'

const useNewOrderForm = () => {
  interface OrderSubmitForm {
    Store: number;
    Status: number;
    Description: string;
    ShippingType: number;
    ExpectedDeliveryDate: Date;
  }

  const [basicData, setBasicData] = useState<OrderSubmitForm>({
    Store: 0,
    Status: 0,
    Description: '',
    ShippingType: 0,
    ExpectedDeliveryDate: new Date()
  })
  const handleChangeBasic = (event: React.ChangeEvent<HTMLInputElement>| any) => {
    setBasicData({
      ...basicData,
      [event.target.name]: event.target.value
    })
  }

  interface FormEvent {
    preventDefault: () => void;
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    //aqui vai o código para enviar o formulário para o backend
    console.log('Form submitted')
  }

  return { handleChangeBasic,handleFormSubmit, basicData }
}

export default useNewOrderForm

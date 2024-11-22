import { useState,useEffect } from 'react'
import { MenuItem}  from '@mui/material'

const useNewOrderForm = () => {
  interface OrderSubmitForm {
    Store: number;
    Status: number;
    Description: string;
    ShippingType: number;
    ExpectedDeliveryDate: Date;
  }
  interface Product {
    id: number;
    name: string;
    description: string;
    status: number;
    value: number;
    unitOfMesure: string;
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
  const [products, setProducts] = useState<Product[]>([])
  interface FormEvent {
    preventDefault: () => void;
  }
  const [currentProduct,setCurrentProduct] = useState<Product>({ id: 1, name: 'Loading', description: 'Loading', status: 0, value: 1, unitOfMesure: 'Loading' })  
  const handleChangeProduct = (event: React.ChangeEvent<HTMLInputElement>| any) => {
    setCurrentProduct({
      ...currentProduct,
      [event.target.name]: event.target.value
    })
  }

  const FetchProducts = () => {
    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        json: true,
        headers: new Headers({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
          'Content-Type': 'application/json'
        })
      }
      console.log('chamando resultado')
      const getProducts = async () => {
        var response = await fetch('https://localhost:7023/api/v1/Products', requestOptions)         
        const json = await response.json()
        setProducts(json)
      }
      getProducts()
    }, [])
    return products.map(product => (
      <MenuItem value = {product.id}>{`${product.name} | Value:${product.value} | U.M.:${product.unitOfMesure}`}</MenuItem>
    ))
  }

  //const addProduct = (product: Product) => {  }


  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    //aqui vai o código para enviar o formulário para o backend
    console.log('Form submitted')
  }

  return { handleChangeBasic,handleFormSubmit, basicData, FetchProducts,products,currentProduct,setCurrentProduct,handleChangeProduct }
}

export default useNewOrderForm

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

  //basic form 
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

  //products
  interface Product {
    id: number;
    name: string;
    description: string;
    status: number;
    quantity: number;
    value: number;
    unitOfMesure: string;
  }
  const [products, setProducts] = useState<Product[]>([])


  const [currentProduct,setCurrentProduct] = useState<Product>({ 
    id: 0, 
    name: '', 
    description: '', 
    status: 0, 
    value: 0, 
    unitOfMesure: '', 
    quantity: 0 
  })  
  const handleChangeProduct = (event: React.ChangeEvent<HTMLInputElement>| any) => {
    setCurrentProduct({
      ...currentProduct,
      [event.target.name]: event.target.value
    });
    console.log(currentProduct);
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

  //order items
  const [orderItems, setOrderItems] = useState<Product[]>([])
  interface FormEvent {
    preventDefault: () => void;
  }
  const handleChangeOrderItems = () => {
    setOrderItems([
      ...orderItems,
      currentProduct
    ])
  }


  //general form submit
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    //aqui vai o código para enviar o formulário para o backend
    console.log('Form submitted')
  }

  return { handleChangeBasic,handleFormSubmit, basicData, FetchProducts,products,currentProduct,setCurrentProduct,handleChangeProduct,orderItems,handleChangeOrderItems }
}

export default useNewOrderForm

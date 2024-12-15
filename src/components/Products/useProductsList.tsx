import { useState,useCallback,useEffect} from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  status: number;
  unitOfMesure: number;
  value: number;
};

const useProductsList = (route:string) => {
  const [products, setProducts] = useState<Product[]>([]);
  
  const [values, setValues] = useState({
    Filter:''
  })
  
  const handleChange = (event:any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
    console.log(values.Filter.length)
    if(values.Filter.length >= 3){
      getProductListFiltered(values.Filter)
    }
  }

  const getProductList = useCallback(() => {
    const getData = async (route:string) => {
      const requestOptions = {
        method: 'GET',
        json: true,
        headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFsZXguZ2llbG93QGdtYWlsLmNvbSIsInJvbGUiOiJPd25lciIsIm5iZiI6MTczMDkwNDU5MSwiZXhwIjoxNzMwOTExNzkxLCJpYXQiOjE3MzA5MDQ1OTF9.8J21izgAYGiqsFiUYrOvrACEDjGnV2Sj1D5Gz-KK38A'
        })
      }
      const response = await fetch(''.concat('https://localhost:7023/api/v1/',route), requestOptions)
      const productList = (await response.json()) as Product[];
      setProducts(productList);
      }
      getData(route)
    }, [route]);

    const getProductListFiltered = useCallback((filter:string) => {
      const getData = async (route:string) => {
        const requestOptions = {
          method: 'GET',
          json: true,
          headers: new Headers({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods': 'GET',
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFsZXguZ2llbG93QGdtYWlsLmNvbSIsInJvbGUiOiJPd25lciIsIm5iZiI6MTczMDkwNDU5MSwiZXhwIjoxNzMwOTExNzkxLCJpYXQiOjE3MzA5MDQ1OTF9.8J21izgAYGiqsFiUYrOvrACEDjGnV2Sj1D5Gz-KK38A'
          })
        }
        const response = await fetch(''.concat('https://localhost:7023/api/v1/','FilteredProducts','?Name=',filter), requestOptions)
        const productList = (await response.json()) as Product[];
        setProducts(productList);
        }
        getData(route)
      }, [route]);

    useEffect(() => {
    }, [values])
    return { handleChange, values , getProductList,getProductListFiltered,products,}
  }
export default useProductsList
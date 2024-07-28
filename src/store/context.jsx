import { createContext, useState } from 'react'
import useSWR from 'swr'
const MyStore = createContext()

const Context = ({ children }) => {
 const [products, setProducts] = useState()
 const [url, setUrl] = useState()
 const [itemsCart, setItemsCart] = useState([])
 const fetcher = (url) => fetch(url).then((res) => res.json())
 const { data, error, isLoading } = useSWR(url, fetcher)

 const handleAddProduct = (infoProduct) => {
  // setItemsCart((prev) => [...itemsCart, infoProduct])
  setItemsCart((prevItemsCart) => {
   const existingProductIndex = prevItemsCart.findIndex(
    (item) => item.id === infoProduct.id
   )
   if (existingProductIndex !== -1) {
    // Producto existe, incrementa la cantidad
    const updatedCart = [...prevItemsCart]
    updatedCart[existingProductIndex].quantity += 1
    return updatedCart
   } else {
    // Producto no existe, agrégar al carrito
    return [...prevItemsCart, { ...infoProduct, quantity: 1 }]
   }
  })
 }
 const handleDeleteProduct = (index) => {
  return setItemsCart(itemsCart.filter((t) => t.id != index))
 }

 return (
  <MyStore.Provider
   value={{
    handleAddProduct,
    products,
    data,
    isLoading,
    setUrl,
    itemsCart,
    handleDeleteProduct,
    setItemsCart,
   }}
  >
   {children}
  </MyStore.Provider>
 )
}

export { Context, MyStore }

import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../../store/context'
import { MdDeleteForever } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'

import { Toaster, toast } from 'sonner'
import './styles.css'
const Cart = () => {
 const { itemsCart, setItemsCart, handleDeleteProduct } = useContext(MyStore)

 const total = itemsCart.reduce((acumulator, item) => {
  return acumulator + item.price * item.quantity
 }, 0)
 const handlePay = () => {
  toast('Se ha pagado correctamente', { icon: <FaCheck /> })
  setItemsCart([])
 }
 return (
  <>
   <section className="section-product-list">
    <div className="product-list-container">
     {itemsCart &&
      itemsCart.map((i) => {
       return (
        <div key={i.id} className="product-list-item">
         <div>
          <h3>{i.name}</h3>
         </div>
         <div>
          <p>{i.price}</p>
         </div>
         <div>
          <p>
           x <strong>{i.quantity} </strong>
          </p>
         </div>
         <div>
          <button
           onClick={() => {
            handleDeleteProduct(i.id)
            toast('Producto eliminado', {
             icon: <MdDeleteForever style={{ color: 'red' }} />,
            })
           }}
          >
           X
          </button>
         </div>
        </div>
       )
      })}
    </div>
   </section>

   <div className={total > 0 ? 'noPay' : 'pay'}>
    <h3>No hay productos en el carrito, sigue comprando!</h3>
   </div>
   <section className="section-total-price">
    <div className="total-price-card-container">
     <div>
      <h1>TOTAL</h1>
     </div>
     <div>
      <div>
       <span>Iva incluido</span>
       <h2> ${total.toFixed(2)}</h2>
      </div>
      <div className={total > 0 ? 'pay' : 'noPay'}>
       <button onClick={handlePay}>Pagar</button>
      </div>
     </div>
    </div>
   </section>
   <Toaster />
  </>
 )
}

export default Cart

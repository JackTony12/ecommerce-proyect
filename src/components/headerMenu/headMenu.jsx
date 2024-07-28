import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaHome } from 'react-icons/fa'
import '../../App.css'
import { useContext } from 'react'
import { MyStore } from '../../store/context'
import SingIn from '../../firebase/singnin'

const HeadMenu = () => {
 const navigate = useNavigate()
 const handlePath = (path) => {
  navigate(path)
 }

 const { itemsCart } = useContext(MyStore)
 const user = localStorage.getItem('email')
  ? localStorage.getItem('email')
  : 'Modo invitado'
 return (
  <div>
   <div className="user-cart">
    <div>
     <FaShoppingCart
      onClick={() => handlePath('/cart')}
      className="menu-icons cartIcon"
     />
     <span className="counter-items-cart">
      {itemsCart && itemsCart.length > 0 ? itemsCart.length : ' '}
     </span>
    </div>

    <FaHome
     onClick={() => {
      handlePath('/')
     }}
     className="menu-icons"
    />
    <SingIn />
   </div>
   <p style={{ fontSize: '.8em', textAlign: 'center', color: 'green' }}>
    Bienvenido {user}
   </p>
  </div>
 )
}

export default HeadMenu

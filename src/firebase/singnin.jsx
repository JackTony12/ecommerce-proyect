import React, { useEffect, useState } from 'react'
import { auth, provider } from './firebaseCredentials'
import { signInWithPopup } from 'firebase/auth'
import { FaUser } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'
import './style.css'

function SingIn() {
 const [value, setValue] = useState('')
 const handleSingnin = () => {
  signInWithPopup(auth, provider).then((data) => {
   setValue(data.user.email)
   localStorage.setItem('email', data.user.displayName)
   console.log(data.user)
  })
 }
 useEffect(() => {
  setValue(localStorage.getItem('email'))
  if (localStorage.getItem) {
   console.log(value)
  }
  console.log(value)
 }, [])

 return (
  <div>
   <button
    className={`singnin-buttom ${
     localStorage.getItem('email') ? 'hidde' : 'show'
    }`}
    onClick={handleSingnin}
   >
    <FaUser />
    Registrate
   </button>
   <button
    onClick={() => {
     if (localStorage.getItem('email')) {
      localStorage.clear()
      window.location.reload()
     }
    }}
    className={`log-uot ${localStorage.getItem('email') ? 'show' : 'hidde'}`}
   >
    <TbLogout2 />
    Log out
   </button>
  </div>
 )
}
export default SingIn

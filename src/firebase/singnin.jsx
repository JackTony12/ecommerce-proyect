import React, { useEffect, useState } from 'react'
import { auth, provider } from './firebaseCredentials'
import { signInWithPopup } from 'firebase/auth'
import { FaUser, FaCheck } from 'react-icons/fa'
import { CiWarning } from 'react-icons/ci'
import { TbLogout2 } from 'react-icons/tb'
import { toast, Toaster } from 'sonner'
import { useNavigate } from 'react-router-dom'
import './style.css'

function SingIn() {
 const [value, setValue] = useState('')
 const handleSingnin = () => {
  signInWithPopup(auth, provider).then((data) => {
   setValue(data.user.email)
   localStorage.setItem('email', data.user.displayName)
   toast('Ha iniciado sesión', { icon: <FaCheck style={{ color: 'green' }} /> })
  })
 }
 useEffect(() => {
  setValue(localStorage.getItem('email'))
  if (localStorage.getItem) {
  }
 }, [])

 const navigate = useNavigate()
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
     }
     navigate('/')
     toast('Ha salido de su cuenta', {
      icon: <CiWarning style={{ color: 'red' }} />,
     })
    }}
    className={`log-uot ${localStorage.getItem('email') ? 'show' : 'hidde'}`}
   >
    <TbLogout2 />
    Log out
   </button>
   <Toaster />
  </div>
 )
}
export default SingIn

import React from 'react'
import './home.css'
import '../../components/queries.css'
import { useEffect } from 'react'
import { IoIosPhonePortrait } from 'react-icons/io'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaRegCopyright } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa6'
import chica from '../../assets/img/img.jpg'
import hombre from '../../assets/img/hombre.jpg'
import art from '../../assets/img/arte.png'
import footer from '../../assets/img/ecomerce.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import logoAl from '../../assets/img/logoAL.png'
const Home = () => {
 useEffect(() => {
  Aos.init()
 }, [])
 return (
  <>
   <section className="home-section-container">
    <h1 data-aos="fade-left" className="home-slogan">
     Todo lo que necesitas en un solo lugar
    </h1>
    <div>
     <img src={chica} alt="" />
    </div>
    <div>
     <img src={hombre} alt="" />
    </div>
   </section>

   {/* ====================================================== */}
   <section className="home-section-2">
    <div className="home-section-2-img-container">
     <img src={art} alt="" />
    </div>
    <div className="home-section-2-text">
     <div>
      <h1 data-aos="fade-up">Encuentra tu estilo</h1>
      <p data-aos="fade-up">La manera mas facil y rapida de estar a la moda</p>
     </div>
    </div>
   </section>
   {/* ======================================================================= */}
   <section className="home-section-3">
    <div className="home-section-3-title-container">
     <h1 data-aos="fade-up">Servicios que se adaptan a ti</h1>
     <p data-aos="fade-up">Cuando sea, donde sea, como sea, ahi estaremos</p>
    </div>
    <div className="home-section-3-services-icons">
     <div data-aos="zoom-in">
      <IoIosPhonePortrait className="service-icon" />
      <span>Un solo clic</span>
     </div>
     <div data-aos="zoom-in">
      <FaHandshake className="service-icon" />
      <span>Un buen precio</span>
     </div>
     <div data-aos="zoom-in">
      <CiDeliveryTruck className="service-icon" />
      Envios nacionales
     </div>
    </div>
   </section>
   <footer>
    <div className="div-img-text-group">
     <div data-aos="fade-up" className="text-footer-container">
      <h1>El mejor sitio para tus compras</h1>
      <ul>
       <li data-aos="fade-up" data-aos-delay="100">
        <strong>E</strong>l mejor
       </li>
       <li data-aos="fade-up" data-aos-delay="200">
        <strong>C</strong>omodidad
       </li>
       <li data-aos="fade-up" data-aos-delay="300">
        <strong>O</strong>ptimismo
       </li>
       <li data-aos="fade-up" data-aos-delay="400">
        <strong>M</strong>ás seguro
       </li>
       <li data-aos="fade-up" data-aos-delay="500">
        <strong>M</strong>oderno
       </li>
       <li data-aos="fade-up" data-aos-delay="600">
        <strong>E</strong>ficiente
       </li>
       <li data-aos="fade-up" data-aos-delay="700">
        <strong>R</strong>esponsable
       </li>
       <li data-aos="fade-up" data-aos-delay="800">
        <strong>C</strong>uidadoso
       </li>
       <li data-aos="fade-up" data-aos-delay="900">
        <strong>E</strong>conómico
       </li>
      </ul>
     </div>
     <div className="img-footer-container">
      <img src={footer} alt="" />
     </div>
    </div>
    <div className="credits">
     <div style={{ textAlign: 'center' }}>
      <div className="logoAl-img">
       <img src={logoAl} alt="" />
      </div>
      <hr />
      <FaRegCopyright /> All Rights Reserved 2023-2024
      <div>
       <a target="_blank" href="https://antonyleon.com">
        AntonyLeon.com
       </a>
      </div>
     </div>
    </div>
   </footer>
  </>
 )
}

export default Home

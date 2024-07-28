import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import HeadMenu from './components/headerMenu/headMenu'
import './components/products/products.css'
import { IoIosArrowDown } from 'react-icons/io'
import Cart from './components/cart/carrito'
import Home from './components/home/home'
import Products from './components/products/products'
import { Context } from './store/context'
import { GiShoppingCart } from 'react-icons/gi'
import { useState } from 'react'
function App() {
  const navigate = useNavigate()
  const handlePath = (path) => {
    navigate(path)
  }

  const [categoryModal, setCategoryModal] = useState(false)

  return (
    <>
      <Context>
        <header>
          <h2>
            <GiShoppingCart className="cart-icon-header" />
            ECOMMERCE
          </h2>
          <HeadMenu />
        </header>
        <nav>
          <ul>
            <li className="dropdown">
              <Link
                onClick={() => setCategoryModal(!categoryModal)}
                className="link"
              >
                CATEGORIAS <IoIosArrowDown />
              </Link>

              <ul
                onClick={() => setCategoryModal(!categoryModal)}
                className={`dropdown-menu ${
                  categoryModal ? 'dropdown-menu-on' : ''
                }`}
              >
                <li
                  onClick={() => handlePath('/productos/perfumes')}
                  className="dropdown-item"
                >
                  <Link className="link" to="/productos/perfumes">
                    Perfumes
                  </Link>
                </li>

                <li
                  onClick={() => handlePath('/productos/muebles')}
                  className="dropdown-item"
                >
                  <Link className="link" to="/productos/muebles">
                    Muebles
                  </Link>
                </li>
                <li
                  onClick={() => handlePath('/productos/decoracion')}
                  className="dropdown-item"
                >
                  <Link className="link" to="/productos/decoracion">
                    Decoracion
                  </Link>
                </li>

                <li
                  onClick={() => handlePath('/productos/laptops')}
                  className="dropdown-item"
                >
                  <Link className="link" to="/productos/laptops">
                    Laptops
                  </Link>
                </li>
                <li
                  onClick={() => handlePath('/productos/relojes')}
                  className="dropdown-item"
                >
                  <Link className="link" to="/productos/relojes">
                    Relojes
                  </Link>
                </li>
              </ul>
            </li>
            <li onClick={() => handlePath('/accesorios')}>
              <Link className="link" to="/accesorios">
                ACCESORIOS
              </Link>
            </li>
            <li onClick={() => handlePath('/mujer')}>
              <Link className="link" to="/mujer">
                MUJER
              </Link>
            </li>

            <li onClick={() => handlePath('/hombres')}>
              <Link className="link" to="/hombres">
                HOMBRES
              </Link>
            </li>
          </ul>
        </nav>
        {/* Rutas========================================= */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products productos={'/products'} />}
          />
          <Route
            path="/accesorios"
            element={
              <Products productos={'/products/category/kitchen-accessories'} />
            }
          />
          <Route
            path="/mujer"
            element={<Products productos={'/products/category/womens-bags'} />}
          />
          <Route
            path="/hombres"
            element={<Products productos={'/products/category/mens-shirts'} />}
          />
          <Route
            path="/productos/perfumes"
            element={<Products productos={'/products/category/fragrances'} />}
          />
          <Route
            path="/productos/muebles"
            element={<Products productos={'/products/category/furniture'} />}
          />
          <Route
            path="/productos/laptops"
            element={<Products productos={'/products/category/laptops'} />}
          />
          <Route
            path="/productos/decoracion"
            element={
              <Products productos={'/products/category/home-decoration'} />
            }
          />
          <Route
            path="/productos/relojes"
            element={<Products productos={'/products/category/mens-watches'} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Context>
    </>
  )
}

export default App

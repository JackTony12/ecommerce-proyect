import { useContext, useEffect } from 'react'
import { MyStore } from '../../store/context'
import { FaCartPlus, FaCheck } from 'react-icons/fa'
import { Toaster, toast } from 'sonner'
import loadingImg from '../../assets/img/loading.jpg'
const Products = ({ productos }) => {
  const URL = `https://dummyjson.com${productos}`
  const { data, isLoading, setUrl, handleAddProduct } = useContext(MyStore)
  useEffect(() => {
    setUrl(URL)
    console.log(URL)
  }, [URL, setUrl])

  return (
    <>
      {!!isLoading && <h1>is loading...</h1>}

      <div className="product-container">
        {data &&
          data.products.map((p) => {
            const shortTItle = p.title.split(' ').slice(0, 2).join(' ')
            return (
              <div
                data-aos="fade-up"
                className="product-card-container"
                key={p.id}
              >
                <div className="product-img-container">
                  <img
                    src={isLoading ? loadingImg : p.images[0]}
                    alt="ProductImg"
                  />
                </div>
                <div className="product-description">
                  <h3>{shortTItle}</h3>
                  <p>${p.price}</p>
                  <p>{p.category}</p>
                  <div>
                    <button
                      onClick={() => {
                        handleAddProduct({
                          price: p.price,
                          name: shortTItle,
                          id: p.id,
                        })
                        toast('Producto agregado', {
                          icon: <FaCheck style={{ color: 'green' }} />,
                        })
                      }}
                    >
                      Añadir <FaCartPlus />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <Toaster />
    </>
  )
}

export default Products

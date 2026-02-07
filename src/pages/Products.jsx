import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function Products() {
  const { products, addCart } = useContext(ProductContext)

  return (
    <div className='flex flex-wrap gap-6'>
      {
        products.map(product => {
          return (

            <div key={product.id} className='w-[250px]   hover:shadow-lg p-6'>

              <img src={product.image} alt="product.namer" className='w-[200px] h-[150px] object-contain block m-auto' />

              {/* product info */}
              <div className='flex flex-col gap-2 my-4  h-[120px] p-2'>


                <p className='text-center font-bold'>{product.name}</p>
                <p className='text-center text-sm '>${product.price}</p>
                <p className='text-xs text-gray-500'>{product.smallDescription}</p>
              </div>
              <button className='w-full bg-blue-600 text-center text-white text-xs p-2' onClick={() => addCart(product)}>+ 
                Add To Cart </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products

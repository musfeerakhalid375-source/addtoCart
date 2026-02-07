import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import { FaCartArrowDown } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { IoIosRemoveCircleOutline } from "react-icons/io";



function Cart() {
  const { cart , invoice , removeCart } = useContext(ProductContext);
  return (
    <div className=' text-2xl justify-center p-4 gap-2'>
      {
        cart.length > 0 ?
          <div className=''>
            {
              cart.map(product => {

                return (
                  <div key={product.id} className='shadow-md p-3 flex items-center gap-4 justify-between'>
                    <img src={product.image} alt={product.name} className='w-[120px] h-[120px] object-contain ' />
                    <div className='flex flex-col gap-2 w-[450px]'>
                      <p className='font-bold'> {product.name}</p>
                      <p className='text-xs text-gray-500 '> {product.smallDescription}</p>
                      <p className='text-xs text-gray-500 '> Qty: {product.quantity}</p>
                    </div>
                    <p className='font-semibold'> ${product.price}</p>
                    <IoIosRemoveCircleOutline className='text-red-500 text-2xl cursor-pointer' onClick={()=> removeCart(product)} />
                  </div>
                )
              })
            }
            <div className='flex flex-col py-4 items-end gap-3'>

              <p className='font-bold text-sm'>Subtotal( {invoice.count } {invoice.count > 1 ? 'items':'item' } ): ${invoice.subTotal.toFixed(2)} </p>
              <button className='bg-blue-600 text-white text-xs w-[150px] rounded-md p-3'>Place Order</button>
            </div>
          </div>
          :
          <div> <span>Empty</span>
            <FaCartArrowDown className="text-xl md:text-2xl cursor-pointer" />

            <Link className='text-blue-600' to={'/'}>Add Products</Link> </div>
      }

    </div>
  )
}

export default Cart
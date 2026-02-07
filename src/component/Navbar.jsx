import { useContext, useState } from "react"
import { FaYoutube, FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { products_categories } from "../data/Product"
import ProductContext from "../context/ProductContext"

export default function Navbar() {
  const {invoice} = useContext(ProductContext);
  const [open, setOpen] = useState(false)

  const isActive = (element)=>{
   return element?.isActive ? 'text-blue-600' : ''
  }

  return (
    <div className="w-full border shadow-lg">

      <div className="h-16 md:h-20 flex items-center justify-between px-4 md:px-8 bg-white">
        <NavLink className="flex items-center gap-2" to={'/'}>
          <FaYoutube className="text-red-500 text-3xl md:text-4xl" />
          <span className="font-bold text-sm md:text-base capitalize">
            e-commerce
          </span>
        </NavLink>

        <ul className="hidden md:flex gap-6 font-medium">

          {
            products_categories.map(category => {
              return (
                <li className="capitalize " key={category.value}><NavLink className={isActive} to={`/${category.value}`}>{category.value}</NavLink></li>

              )
            }

            )
          }


        </ul>

        <Link className="flex items-center gap-4 relative" to={'/cart'}>
          <FaCartArrowDown className="text-xl md:text-2xl cursor-pointer" />
         { 
         invoice ?.count > 0 &&
          
          <div className="absolute -top-2 - right-2 w-4 h-4 text-xs bg-blue-600 text-white flex items-center justify-center rounded-full">{invoice ?.count}

          </div>}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </Link>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-100 font-medium">
          <li><NavLink onClick={() => setOpen(false)}>Mobile</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)}>Tablet</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)}>Laptop</NavLink></li>
        </ul>
      )}

      
    </div>
  )
}

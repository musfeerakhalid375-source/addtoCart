import { Outlet , useParams} from "react-router-dom";
import Navbar from "./component/Navbar";
import {useEffect , useContext} from "react"
import {ProductContext} from "./context/ProductContext"


export default function App() {
  const {filterProducts} = useContext(ProductContext);
  const {category} = useParams();

  useEffect(()=>{filterProducts(category)},[category])








 
  return (
    <div className="min-h-screen h-auto bg-slate-300 pb-40" >
      <Navbar/>
    <div className="w-[80%] m-auto my-4 bg-white p-4"> 
  <Outlet/>
    </div>
    
    </div>
     
  )
}

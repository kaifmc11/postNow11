import { useContext } from "react"
import { FaMobileAlt, FaTabletAlt } from "react-icons/fa"
import { FaLaptop } from "react-icons/fa6"
import DataContext from "./context/DataContext"


const Header = ({title})=>{
  const{width}=useContext(DataContext)
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width< 786?<FaMobileAlt/>:width<992?<FaTabletAlt/>:<FaLaptop/>}
    </header>
  )
}

export default Header
import { MdOutlineShoppingCart } from "react-icons/md"
import "./NavBar.css"

const NavBar = () => {

  return (
    <div className="navbar">
        <h1>Nina Patisserie</h1>
        <ul className="navbar-menu">
            <li>Sorvetes</li>
            <li>Deliver</li>
            <li>Doces</li>
            <li>Contatos</li>
        </ul>
        <div className="navbar-right">
            <MdOutlineShoppingCart />
        </div>
    </div>
  )
}

export default NavBar
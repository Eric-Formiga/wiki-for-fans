import { Link } from "react-router-dom"
import AkatsukiCloud from '../../public/AkatsukiCloud.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-around shadow-md">
      <div className="flex items-center gap-16" >
        <Link to="/">          
          <img src={AkatsukiCloud} alt="Akatsuki Cloud" className="h-8 w-auto mr-4" />     
        </Link>
        <Link to="/" className="text-white text-lg font-bold hover:text-gray-400 transition duration-200">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
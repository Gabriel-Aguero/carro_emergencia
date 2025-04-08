import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="flex w-full bg-gray-100 items-center justify-between p-2">
        <nav className="flex items-center justify-between w-full mx-auto py-4 px-4">            
            <div className="flex items-center">
                <h1 className="text-3xl text-gray-900 font-semibold">HospitalCart</h1>
            </div>            
            <div className="flex items-center gap-4 text-lg font-medium text-center">
                <Link to="/">Características</Link>
                <Link to="/about">Beneficios</Link>                        
                <Link to="/about">FAQ</Link>            
            </div>
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-700">Iniciar Sesión</button>
            </div>
        </nav>
    </section>
  )
}

export default Navbar
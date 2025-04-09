import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`sticky top-0 flex w-full items-center justify-between p-4 z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-gradient-to-r from-gray-900 to-gray-400 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-around w-full mx-auto py-4 px-4">
        <div className="flex items-center">
          <h1 className="text-3xl text-gray-100 font-bold">HospitalCart</h1>
        </div>
        <div className="flex items-center gap-4 text-xl text-center">
          <Link
            to="/"
            className="text-white font-bold bg-sky-700/60 rounded-2xl p-2 hover:bg-sky-900"
          >
            Características
          </Link>
          <Link
            to="/about"
            className="text-white font-bold bg-sky-700/60 rounded-2xl p-2 hover:bg-sky-900"
          >
            Beneficios
          </Link>
          <Link
            to="/preguntas-frecuentes"
            className="text-white font-bold bg-sky-700/60 rounded-2xl p-2 hover:bg-sky-900"
          >
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-700">
            Iniciar Sesión
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

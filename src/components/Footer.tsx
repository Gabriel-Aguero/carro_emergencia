import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 h-96 flex flex-col items-center justify-center">
      <section className="max-w-6xl max-auto flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto px-10 py-4 flex flex-col gap-4 items-center justify-center">
          <h4 className="text-3xl text-gray-900 font-extrabold text-center">
            Mejore la gestión de sus carros de emergencia
          </h4>
          <p className="text-gray-400 text-lg font-medium max-w-2xl text-center">
            Únase a cientos de profesionales que utilizan la aplicación y ya
            optimizan sus procesos y mejoran la seguriad de los pacientes con
            HospitalCard
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4 items-center justify-center">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-xl text-gray-900 font-bold">HospitalCart</h4>
            <p className=" text-md text-gray-400 font-medium">
              Sistema integral para la gestión y control de carrros de
              emergencia hospitalarios
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-lg text-gray-900 font-bold mt-8">Producto</h4>
            <ul className="flex flex-col items-start gap-2 text-gray-700 text-md font-medium mt-4">
              <li className="text-md text-gray-400 font-medium">
                Características
              </li>
              <li className="text-md text-gray-400 font-medium">Beneficios</li>
              <li className="text-md text-gray-400 font-medium">
                Preguntas Frecuentes
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-lg text-gray-900 font-bold">Recursos</h4>
            <ul className="flex flex-col items-start gap-2 text-gray-700 text-md font-medium mt-4">
              <li className="text-md text-gray-400 font-medium">
                Guías de uso
              </li>
              <li className="text-md text-gray-400 font-medium">
                Documentación
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-lg text-gray-900 font-bold">Contacto</h4>
            <ul className="flex flex-col items-start gap-2 text-gray-700 text-md font-medium mt-4">
              <li className="text-md text-gray-400 font-medium">Soporte</li>
              <li className="text-md text-gray-400 font-medium">Sobre Mi</li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="w-full border-gray-400 sm:mx-auto dark:border-gray-700" />
      <div className="w-full bg-gray-100 p-10 flex items-center justify-center">
        <div className="flex items-center justify-between gap-10">
          <span>©2025. Todos los derechos reservados.</span>
          <span>Creado con mucho ❤️ por Gabriel Agüero</span>

          <div className="flex gap-2">
            <Link to="/politicas-de-privacidad">Políticas de Privacidad -</Link>
            <Link to="/terminos-y-condiciones">Términos y Condiciones - </Link>
            <Link to="/politica-de-cookies">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

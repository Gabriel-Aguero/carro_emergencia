import { CircleCheckBig } from "lucide-react";

const Benefits = () => {
  const itemOptions = [
    {
      icon: <CircleCheckBig />,
      title: "Mayor seguridad para los pacientes",
      description:
        "Garantice que todos los carros de emergencia estén completamente equipados y listos para usar en situaciones críticas, mejorando la respuesta ante emergencias.",
    },
    {
      icon: <CircleCheckBig />,
      title: "Reducción de costos operativos",
      description:
        "Optiice la gestipón de inventario, evite el desperdicio de medicamentos vencidos y mejore la eficiencia del personal encargado de las verificaciones.",
    },
    {
      icon: <CircleCheckBig />,
      title: "Cumplimiento de costos operativos",
      description:
        "Facilite el cuimplimiento de normmativas y estándarres hospitalarios con registross detalladaos y trazabilidad completa de todas las verificaciones.",
    },
    {
      icon: <CircleCheckBig />,
      title: "Mejora en la toma de desiciones",
      description:
        "Obtenga información valiosa a través de reportes y estadísticas para optimizar procesos y recursos relacionados con los carrros de emergencia.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-30 bg-gradient-to-t px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto px-10 py-4 flex flex-col gap-4 items-center justify-center">
        <div className="px-10 py-4 flex flex-col gap-4 items-center justify-center">
          <h3 className="text-lg p-4 bg-gray-900 text-gray-100 font-bold rounded-xl py-1">
            Beneficios
          </h3>
          <h1 className="text-3xl text-gray-900 font-bold">
            ¿Por qué elegir HospitalCart?
          </h1>
          <p className="text-gray-400 text-lg font-medium max-w-2xl text-center">
            Nuestra solución ofrece múltiples ventajas para hospitales y el
            personal de salud, mejorando la eficiencia y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="flex items-start">
            <img
              src="/carro.webp"
              alt="Carro de emergencia"
              className="w-[420px] h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-4">
            {itemOptions.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <h3 className="text-lg text-gray-900 font-bold rounded-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-md font-medium max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

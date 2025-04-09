import {
  CircleCheckBig,
  Truck,
  ClipboardList,
  Clock,
  AlertTriangle,
  BarChart3,
  Shield,
} from "lucide-react";

const PresentationCard = () => {
  const itemsPresentation = [
    {
      title: "Gestión de Inventario",
      description:
        "Control detallado de medicacmentos y materiales descartables.",
      icon: <Truck />,
      items: [
        {
          icon: <CircleCheckBig />,
          text: "Registro completo de medicamentos con fechas de vencimiento.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Control de materiales descartables y su disponibilidad.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Alertas automáticas de stock bajo o próximo a vencer.",
        },
      ],
    },

    {
      title: "verificaciones y Controles",
      description: "Seguimiento de todas las verificacioness realizadas.",
      icon: <ClipboardList />,
      items: [
        {
          icon: <CircleCheckBig />,
          text: "Programación de verificaciones perdiódicas.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Historial completo de conntroles realizados.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Registro de responsables y acciones tomadas.",
        },
      ],
    },

    {
      title: "Seguriad y Trazabilidad",
      description: "Control de acceso y seguimiento de cambios.",
      icon: <Shield />,
      items: [
        {
          icon: <CircleCheckBig />,
          text: "Control de precintoss para garantizar la integridad.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Registro e toos los cambios realiados.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Diferentes niveles de acceso según rol ddel usuaro.",
        },
      ],
    },

    {
      title: "Sistema de Alertas",
      description: "Notificaciones automáticas para prevenir errores.",
      icon: <AlertTriangle />,
      items: [
        {
          icon: <CircleCheckBig />,
          text: "Alertas dde medicamentos próximos a vencer.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Recordatorios de verificaciones penddientes.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Notificaciones de cambios en los carros.",
        },
      ],
    },

    {
      title: "Reporte y Estadísticas",
      description: "Análisis detallada para la toma e decisiones.",
      icon: <BarChart3 />,
      items: [
        {
          icon: <CircleCheckBig />,
          text: "Reportes personalizados por servicio o período.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Estadísticas e uso y verificaciones.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Exportación de datos en múltiples formatos.",
        },
      ],
    },

    {
      title: "Acceso en Tiempo Real",
      description: "Información actualizada desde cualquier dispositivos.",
      icon: <Clock />,
      items: [
        {
          icon: <CircleCheckBig />,
          text: "Acceso desde computadoras, tablets y smartphones.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Interfaz adaptada a diferentes dispositivos.",
        },
        {
          icon: <CircleCheckBig />,
          text: "Sincronizaciónn automática de datos.",
        },
      ],
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-4 p-4 max-w-5xl mx-auto -mt-40">
      {itemsPresentation.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start border-1 border-gray-300 rounded-xl px-4 py-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <span>{item.icon}</span>
            <h3 className="text-lg text-gray-900 font-bold rounded-xl">
              {item.title}
            </h3>
          </div>
          <p className="text-gray-400 text-md font-medium max-w-2xl">
            {item.description}
          </p>
          <ul className="flex flex-col items-start gap-2 text-gray-700 text-md font-medium mt-4">
            {item.items.map((item, index) => (
              <>
                <div className="flex justify-between gap-2">
                  <li key={index} className="text-gray-700 text-md font-medium">
                    {item.icon}
                  </li>
                  <span>{item.text}</span>
                </div>
              </>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default PresentationCard;

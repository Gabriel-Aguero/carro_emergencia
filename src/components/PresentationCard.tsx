import { CircleCheckBig } from "lucide-react";
import { Truck } from "lucide-react";

const PresentationCard = () => {

  const itemsPresentation = [

    {
        "title": "Gestión de Inventario",
        "description": "Control detallado de medicacmentos y materiales descartables.",
        "icon": <Truck />,
        "items": [
            {
            "icon": <CircleCheckBig />,
            "text": "Registro completo de medicamentos con fechas de vencimiento."
            },
            {
            "icon": <CircleCheckBig />,
            "text": "Control de materiales descartables y su disponibilidad."
            }
        ]        
    },

    {
        "title": "Gestión de Inventario",
        "description": "Control detallado de medicacmentos y materiales descartables.",
        "icon": <Truck />,
        "items": [
            {
            "icon": <CircleCheckBig />,
            "text": "Registro completo de medicamentos con fechas de vencimiento."
            },
            {
            "icon": <CircleCheckBig />,
            "text": "Control de materiales descartables y su disponibilidad."
            }
        ]        
    },

    {
        "title": "Gestión de Inventario",
        "description": "Control detallado de medicacmentos y materiales descartables.",
        "icon": <Truck />,
        "items": [
            {
            "icon": <CircleCheckBig />,
            "text": "Registro completo de medicamentos con fechas de vencimiento."
            },
            {
            "icon": <CircleCheckBig />,
            "text": "Control de materiales descartables y su disponibilidad."
            }
        ]        
    }
      
  ]
  
  return (
    <section className="grid grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
      {itemsPresentation.map((item, index) => (
        <div key={index} className="flex flex-col items-start border-1 border-gray-300 rounded-xl px-4 py-6">
          <div className="flex items-center gap-2 mb-2">
            <span>{item.icon}</span>
            <h3 className="text-lg text-gray-900 font-bold rounded-xl">{item.title}</h3>          
          </div>
          <p className="text-gray-400 text-md font-medium max-w-2xl">{item.description}</p>
          <ul className="flex flex-col items-start gap-2 text-gray-700 text-md font-medium mt-4">
            {item.items.map((item, index) => (
                <>
                <div className="flex justify-between gap-2">
                    <li key={index} className="text-gray-700 text-md font-medium">{item.icon}</li>
                    <span>{item.text}</span>              
                </div>
                </>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default PresentationCard
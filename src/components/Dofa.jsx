// src/components/Dofa.jsx
import React from 'react';

const dofaData = [
  { id: 1, type: "Debilidades", items: [
    { id: 1, description: "Falta de presencia en redes sociales" },
    { id: 2, description: "Dependencia de pocos clientes" },
    { id: 3, description: "Escasa diversificación de productos" },
  ]},
  { id: 2, type: "Oportunidades", items: [
    { id: 1, description: "Creciente demanda en el mercado" },
    { id: 2, description: "Aumento del interés por productos locales" },
    { id: 3, description: "Expansión hacia nuevos mercados" },
  ]},
  { id: 3, type: "Fortalezas", items: [
    { id: 1, description: "Producto de alta calidad" },
    { id: 2, description: "Excelente relación con proveedores" },
    { id: 3, description: "Personal calificado y motivado" },
  ]},
  { id: 4, type: "Amenazas", items: [
    { id: 1, description: "Competencia creciente" },
    { id: 2, description: "Inestabilidad económica" },
    { id: 3, description: "Cambios en la legislación" },
  ]},
];

const Dofa = () => {
  return (
    <section id="DOFA" className="p-4 bg-gray-100 border-black border-2 m-4">
      <h2 className="text-xl font-bold text-center">Diagnóstico Actual (DOFA)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {dofaData.map((section) => (
          <div key={section.id} className="border-black border-2 p-4 bg-gray-700 text-white transform hover:scale-103 transition duration-300">
            <h3 className="font-bold">{section.type}</h3>
            <ul className="list-disc list-inside">
              {section.items.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dofa;

// src/components/StrategicGoals.jsx
import React from 'react';

const goalsData = [
  { id: 1, goal: "Aumentar cuota de mercado", target: 100, progress: 25, compliance: 25 },
  { id: 2, goal: "Incrementar ventas", target: 150000, progress: 50000, compliance: 33 },
  { id: 3, goal: "Expandirse a nuevos mercados", target: 100, progress: 80, compliance: 80 },
  { id: 4, goal: "Reducir costos operativos", target: 50000, progress: 20000, compliance: 40 },
  { id: 5, goal: "Mejorar satisfacción del cliente", target: 100, progress: 100, compliance: 100 },
];

const getStatus = (compliance) => {
  if (compliance <= 35) return "Crítico";
  if (compliance <= 75) return "Aceptable";
  return "Exitoso";
};

const StrategicGoals = () => {
  return (
    <section id="goals" className="bg-gray-100 p-6 border-t border-b border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-6">Objetivos Estratégicos</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-2">Código</th>
              <th className="px-4 py-2">Objetivo</th>
              <th className="px-4 py-2">Meta</th>
              <th className="px-4 py-2">Avance</th>
              <th className="px-4 py-2">Cumplimiento</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {goalsData.map((goal) => (
              <tr key={goal.id} className="border-t">
                <td className="px-4 py-2">{goal.id}</td>
                <td className="px-4 py-2">{goal.goal}</td>
                <td className="px-4 py-2">{goal.target}</td>
                <td className="px-4 py-2">{goal.progress}</td>
                <td className="px-4 py-2">{goal.compliance}%</td>
                <td className={`px-4 py-2 ${getStatus(goal.compliance) === "Crítico" ? "text-red-500" : getStatus(goal.compliance) === "Aceptable" ? "text-orange-500" : "text-green-500"}`}>
                  {getStatus(goal.compliance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StrategicGoals;

// src/components/OrganizationalIdentity.jsx
import React from "react";

const OrgID = () => {
  return (
    <section id= 'OBJETIVOS' className="p-4 bg-white text-center border-black border-2 m-4">
      <h2 className="text-xl font-bold">Identidad Organizacional</h2>
      <div className="mt-4 text-left">
        <h3 className="font-bold">Misión</h3>
        <p className="text-gray-700">
          Proveer productos de alta calidad que satisfagan las necesidades de
          nuestros clientes, basados en innovación y sostenibilidad.
        </p>

        <h3 className="font-bold mt-4">Visión</h3>
        <p className="text-gray-700">
          Ser líderes en el mercado nacional e internacional, ofreciendo
          productos únicos que promuevan la sostenibilidad.
        </p>

        <h3 className="font-bold mt-4">Políticas Corporativas</h3>
        <p className="text-gray-700">
          Cumplir con los más altos estándares de calidad y responsabilidad
          social, garantizando el bienestar de nuestros empleados y el medio
          ambiente.
        </p>
      </div>
    </section>
  );
};

export default OrgID;

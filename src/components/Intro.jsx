// src/components/Introduction.jsx
import React from "react";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="bg-white p-6 text-center border-b border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-4">Introducción</h2>
      <p className="text-gray-700 max-w-4xl mx-auto text-justify">
        Este proyecto presenta la planeación estratégica de nuestro negocio de
        venta de ropa, cuyo objetivo es establecer una estrategia efectiva que
        nos permita competir de manera eficiente en el mercado. La industria de
        la moda es altamente competitiva y en constante evolución, por lo que
        nuestro enfoque está en la innovación, calidad de productos, y
        satisfacción del cliente.
        <br />
        <br />A través del análisis DOFA, identificaremos nuestras principales
        fortalezas y oportunidades, así como las debilidades y amenazas que
        debemos afrontar. Además, estableceremos objetivos estratégicos que
        alineen nuestras metas de crecimiento con la expansión de nuestro
        negocio hacia nuevos mercados y la consolidación de nuestra marca en la
        industria.
      </p>
    </section>
  );
};

export default Introduction;

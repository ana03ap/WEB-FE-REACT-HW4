// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-700 p-4 text-white border-b-2  ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título central */}
        <h1 className="text-2xl font-bold">Planeación Estratégica</h1>

        {/* Menú de navegación (opcional para más adelante) */}
        <nav className="hidden md:flex space-x-4">
          <a href="#INTRO" className="hover:bg-custom-gray transition ease-in-out duration-300 px-1 rounded">Introducción</a>
          <a href="#DOFA" className="hover:bg-custom-gray transition ease-in-out duration-300 px-1 rounded">DOFA</a>
          <a href="#OBJETIVOS" className="hover:bg-custom-gray transition ease-in-out duration-300 px-1 rounded">Objetivos</a>
          <a href="#" className="hover:bg-custom-gray transition ease-in-out duration-300 px-1 rounded">Contacto</a>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;

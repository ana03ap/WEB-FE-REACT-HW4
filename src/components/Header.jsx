// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-700 p-4 text-white border-b-2 border-black shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título central */}
        <h1 className="text-2xl font-bold">Planeación Estratégica</h1>

        {/* Menú de navegación (opcional para más adelante) */}
        <nav className="hidden md:flex space-x-4">
          <a href="#introduccion" className="hover:text-gray-300">Introducción</a>
          <a href="#dofa" className="hover:text-gray-300">DOFA</a>
          <a href="#objetivos" className="hover:text-gray-300">Objetivos</a>
          <a href="#contacto" className="hover:text-gray-300">Contacto</a>
        </nav>

        {/* Botón de acción o ícono (si fuera necesario) */}
        
      </div>
    </header>
  );
};

export default Header;

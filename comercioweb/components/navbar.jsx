import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="space-x-4">
          <a href="/admin" className="text-white hover:text-gray-300">Admin</a>
          <a href="/" className="text-white hover:text-gray-300">Login</a>
          <a href="/registrar" className="text-white hover:text-gray-300">registrarse</a>
          <a href="/comercios" className="text-white hover:text-gray-300">Comercio</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
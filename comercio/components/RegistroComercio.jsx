"use client"
import { useState } from 'react';

export default function RegistroComercio() {
  const [nombreComercio, setNombreComercio] = useState('');
  const [CIF, setCIF] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const comercio = {
      nombreComercio,
      CIF,
      direccion,
      email,
      telefono,
    };

    fetch("/api/regisComercio", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comercio),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // router.push("/") // Si router está definido en este componente
  };

  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100 bg-primary">
      <div className="w-100 bg-info rounded-lg shadow-md border md-mt-0 sm-max-w-md xl-p-0 text-dark bg-light border-light">
        <div className="p-4 space-y-3 md-space-y-4 sm-p-5">
          <p className="text-black">Registrar comercio</p>
          <form className="space-y-3 md-space-y-4" onSubmit={handleSubmit}>
            {/* Resto del formulario */}
          </form>
        </div>
      </div>
    </section>
  );
}
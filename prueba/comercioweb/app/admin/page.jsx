"use client"

import React, { useState, useEffect } from 'react';
import RegistroComercios from '@/components/registroComercios';
import { v4 as uuidv4 } from 'uuid';

async function getUsers() {
  try {
    const res = await fetch("http://localhost:3000/api/regisComer");
    if (!res.ok) {
      throw new Error("La respuesta de la red no fue exitosa");
    }
    const data = await res.json();
    console.log(data.users);
    return data.users || [];
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
}

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm("¿Estás seguro de que quieres eliminar a este usuario?");
    if (confirmed) {
      // Continuar con la eliminación
      alert("Eliminando usuario");
      fetch("/api/regisComer", {
            method: "DELETE",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(userId)
        })
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RegistroComercios />

      <ul>
        <p>Lista de comercios</p>
        {Array.isArray(users) && users.map((user) => (
          <li key={uuidv4()} className="bg-slate-400 mb-2 p-4 rounded-md text-back flex justify-between">
            <h5 className="font-bold">{user.name}</h5>
            {/* <button onClick={() => handleDeleteUser(user)}>Eliminar</button> */}
            <button
            onClick={() => handleDeleteUser(user)}
            className=" ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
            Eliminar
            </button>
          </li>
        ))}
      </ul>

    </main>
  );
};

export default Admin;
"use client"

import RegistroComercios from '@/components/registroComercios'
import { v4 as uuidv4 } from 'uuid';

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/regisComer")
  const data = await res.json()
  console.log(data.users)
  return data.users
}

const handleDeleteUser = async (userId) => {
  alert("entro en eliminar comercio")
  fetch("/api/regisComer", {
    method: "DELETE",
    headers: {
    //Authorization: `Bearer ${tokenJWT}`
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(userId)
})
};


export default async function Admin() {

  const users = await getUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <RegistroComercios/>

       <ul>
            <p>Lista de comercios</p>
            {users.map((user) => (
                <li key={uuidv4()} className="bg-slate-400 mb-2 p-4 rounded-md text-back flex justify-between">
                        <h5 className="font-bold">{user.name}</h5>
                        <button onClick={() => handleDeleteUser(user)}>Eliminar</button>
                </li>
            ))}
        </ul>

    </main>
  )
}
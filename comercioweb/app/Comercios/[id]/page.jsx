"use client"

async function cargarComercio(id){
    const res = await fetch("http://localhost:3000/api/regisComer/CIF/${id}")
    const data = await res.json()
    console.log(data.users)
    return data.users
}


export default async function page ({params}) {
    
    const id=params;
    const datos=await cargarComercio(id)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul>
            <p>Comercio:</p>
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
import ResgistroComercio from '@/components/RegistroComercio'
//import { v4 as uuidv4 } from 'uuid';

  /*async function getUsers() {
    const res = await fetch("http://localhost:3000/api/resgistroComercio")
    const data = await res.json()
    console.log(data.users)
    return data.users
  }*/

export default async function Home() {

  //const users = await getUsers()

  return (
      <>
        <ResgistroComercio />
      {/* <ul>
        <p>Lista de comercios</p>
        {users.map((user) => (
          <li key={uuidv4()} className="bg-slate-400 mb-2 p-4 rounded-md text-back flex justify-between">
            <h5 className="font-bold">{user.nombreComercio}</h5>
            <h5 className="font-bold">{user.CIF}</h5>
            <h5 className="font-bold">{user.direccion}</h5>
            <h5 className="font-bold">{user.email}</h5>
            <h5 className="font-bold">{user.telefono}</h5>
          </li>
        ))}
      </ul> */}
    </>
  )
}
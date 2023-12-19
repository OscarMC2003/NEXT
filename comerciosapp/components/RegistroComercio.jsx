"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Resgistro() {

    const router = useRouter()

    const [nombreComercio, setNombreComercio] = useState("");
    const [CIF, setCIF] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    const comercio = {
        nombreComercio: nombreComercio,
        CIF: CIF,
        direccion: direccion,
        email: email,
        telefono: telefono,
    }

    fetch("/api/regisComercio", {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comercio)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))

    router.push("/")
    }


    return (
        <section className="flex justify-center items-center h-screen bg-[#789fdf]">
            <div className="w-full bg-blue rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-white">Regístrar comercio</p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input onChange={(e) => setNombreComercio(e.target.value)}name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre comercio" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setCIF(e.target.value)} name="password" id="password" placeholder="CIF" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setDireccion(e.target.value)}name="password" id="password" placeholder="Direccion" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)}name="password" id="password" placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setTelefono(e.target.value)}name="password" id="password" placeholder="Telefono" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <button type="submit" className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Registrar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
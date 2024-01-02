"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Page() {

    const router = useRouter();
    const CIFComercio = localStorage.getItem("CIF");
    const [comercio, setComercio] = useState(null);
    const [users, setUsers] = useState(null);

    const [formData, setFormData] = useState({
        titulo: '',
        resumen: '',
        ciudad: '',
        actividad: '',
        textos:'',
        fotos:'',
        CIF: CIFComercio
      });

      const handleInputChange = (e) => {
        const { name, value} = e.target;
      
        setFormData({
          ...formData,
          [name]: value, // Actualiza el campo correspondiente en formData
        });
      };

      const handleModificarInformacion = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/modComercio', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 200) {
            console.log("cambio de info correcta")
          } else {
            console.error('Error al actualizar la información.');
          }
        } catch (error) {
          console.error("Error en la solicitud de actualización", error);
        }
      };
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/regisComer");
                const data = await res.json();
                const comercios = data.users;
                const comercioEncontrado = comercios.find((comercio) => comercio.CIF === CIFComercio);

                if (comercioEncontrado) {
                    setComercio(comercioEncontrado);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const fetchDataExtra = async () => {
          try {
              const res = await fetch("http://localhost:3000/api/users");
              const data = await res.json();
              const userInteresados = data.users;
              const userInteresadoEncontrado = userInteresados.find((user) => user.interest === comercio.actividad);
              const userInteresadoEncontradoLegal = userInteresadoEncontrado.find((user) => user.box === "1");

              if (userInteresadoEncontradoLegal) {
                  setusers(userInteresadoEncontradoLegal);
              }
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };



        fetchData();
        fetchDataExtra();
    }, [CIFComercio]);


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
        <>
            {comercio ? (
                <div>
                    <div className=" mt-5 max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{comercio.email}</h2>
                            <p className="text-gray-600">CIF: {comercio.CIF}</p>
                            <p className="text-gray-600">Direccion: {comercio.address}</p>
                            <p className="text-gray-600">Nombre: {comercio.name}</p>
                            <p className="text-gray-600">Telefono: {comercio.phone}</p>
                            <p className="text-gray-600">Titulo: {comercio.titulo}</p>
                            <p className="text-gray-600">Resumen: {comercio.resumen}</p>
                            <p className="text-gray-600">Ciudad: {comercio.ciudad}</p>
                            <p className="text-gray-600">Actividades: {comercio.actividad}</p>
                            <p className="text-gray-600">Texto: {comercio.textos}</p>
                            <img src={`/images/${comercio.fotos}.jpg`} alt="NO IMAGENES INTRODUCIDAS" />
                            <button
                            onClick={() => handleDeleteUser(comercio)}
                            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                            Dar de baja el comercio
                            </button>

                        </div>
                    </div>

                    <form onSubmit={handleModificarInformacion} className=" mt-5 max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
                        <div className="mb-4">
                            <label htmlFor="titulo" className="block text-gray-700 font-semibold">Título:</label>
                            <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="resumen" className="block text-gray-700 font-semibold">Resumen:</label>
                            <input
                            type="text"
                            id="resumen"
                            name="resumen"
                            value={formData.resumen}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ciudad" className="block text-gray-700 font-semibold">Ciudad:</label>
                            <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="actividad" className="block text-gray-700 font-semibold">Actividad:</label>
                            <input
                            type="text"
                            id="actividad"
                            name="actividad"
                            value={formData.actividad}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="textos" className="block text-gray-700 font-semibold">Texto:</label>
                            <input
                            type="text"
                            id="textos"
                            name="textos"
                            value={formData.textos}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fotos" className="block text-gray-700 font-semibold">Foto(seleccione del 1 al 10):</label>
                            <input
                            type="number"
                            id="fotos"
                            name="fotos"
                            min="0" max="10"
                            value={formData.fotos}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                            Guardar Cambios
                        </button>
                    </form>


                    {/* <ul>
                      <p>Lista de usuarios interesados</p>
                      {Array.isArray(users) && users.map((user) => (
                        <li key={uuidv4()} className="bg-slate-400 mb-2 p-4 rounded-md text-back flex justify-between">
                          <h5 className="font-bold">{user.email}</h5>
                        </li>
                      ))}
                    </ul> */}
                    <div className="flex flex-col items-center justify-center h-screen">
                      <ul className="mb-8">
                        <p className="text-xl font-semibold mb-2">Lista de usuarios interesados:</p>
                        {Array.isArray(users) && users.map((user) => (
                          <li key={uuidv4()} className="bg-gray-800 text-white mb-2 p-4 rounded-md flex justify-between items-center w-full">
                            <h5 className="font-bold">{user.email}</h5>
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>
                
            ) : (
                <p>Comercio no encontrado</p>
            )}
        </>
    );
}
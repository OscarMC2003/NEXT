"use client"
import React, { useEffect, useState } from 'react';

export default function Page() {
    const CIFComercio = localStorage.getItem("CIF");
    const [comercio, setComercio] = useState(null);

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

        fetchData();
    }, [CIFComercio]);

    return (
        <>
            {comercio ? (
                <h1>algo: {comercio.CIF}</h1>
                
            ) : (
                <p>Comercio no encontrado</p>
            )}
        </>
    );
}
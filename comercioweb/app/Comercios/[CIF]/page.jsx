"use client"

export default function Page() {

        const CIFComercio= localStorage.getItem('CIF')
        alert(CIFComercio);
        /*const fetchBuscarComercio = async (ComercioId) =>{
            const rest = await fetch(`/api/buscarComercio/?CIF=${ComercioId}`);
            const data = await rest.json();
            if(rest.ok && data.comercio)
            {
                const comercio = data.comercio.find((c) => c.id === ComercioId);
                console.log(comercio);
                if(comercio)
                {
                    return comercio;
                }
            }
        };*/
    
   
    //const comercioEncontrado = fetchBuscarComercio(CIFComercio);

    return (
        <>
        <h1>HOLA ME LA PELA POR DIOS FUNCIONA</h1>
        
        
        </>
    )
}
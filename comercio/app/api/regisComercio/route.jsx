import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/comercios.txt"))
        const user = users.filter(user => user.nombreComercio == data.nombreComercio && user.CIF == data.CIF) //Esto no lo haremos así en el 2Q: lo haremos con JWT y con pwd cifrada
        if (user.length > 0) {
            return NextResponse.json({message: "Usuario existe...", status: 200})
        } else {
            return NextResponse.json({message: "Usuario no existe...", status: 400})
        }
    } catch(e){  
        return NextResponse.json({message: "Usuario no existe...", status: 400})
    }
}
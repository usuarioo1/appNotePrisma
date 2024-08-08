import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//se crea un interface de params

interface Params {
    params: {id:string}
}

export async function GET(request: Request, {params}: Params) {
    const task = await prisma.task.findFirst({
        where:{
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}

// export function POST(request:Request){

//     return NextResponse.json('creando tarea')
// }

export async function PUT(request: Request, {params}: Params){

    const data = await request.json()
    await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data,
    })
    return NextResponse.json('actualizando tarea ' + params.id)
}

export async function DELETE(request: Request, {params}: Params){
    const deleteTask = await prisma.task.delete({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(deleteTask)
}
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//la consulta a la base de datos debe ser una llamada a sincrona
export async function GET() {
    const tasks = await prisma.task.findMany()

    return NextResponse.json(tasks)
}

export async function POST(request:Request) {

    const data = await request.json();
    console.log(data)
    const newTask = await prisma.task.create({
        data
    })
        return NextResponse.json(newTask)
}
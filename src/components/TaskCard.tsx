'use client'
import React from 'react'
import { Task } from '@prisma/client'
import { useRouter } from 'next/navigation'

//podemos declarar la interface y los tipos de datos que esta reciviendo la card, sin embargo prisma soporta ts, por lo que podemos importar task directamente desde el schema de prisma

// interface Props {
//     task: {
//         title: string,
//         description: string
//     }
// }

//por lo tanto lo qu podemos hacer es crear el props

interface Props {
    task: Task
}

function TaskCard({task}: Props) {

    const router = useRouter();
    return (
        <div  className='bg-gray-300 rounded-md hover:bg-slate-400 hover:cursor-pointer'
        onClick={()=>{
            router.push(`/tasks/edit/${task.id}`)
        }}>

            <h3 className='font-bold text-xl'>{task.title}</h3>
            <p className='text-slate-800'>{task.description}</p>
        </div>
    )
}

export default TaskCard

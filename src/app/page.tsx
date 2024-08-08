import React from 'react'
import axios from 'axios'
import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'

//ENFOQUE HECHO CON AXIOS 
async function loadTaks() {
  //par atraer los datos podria hacer una peticion a mi backend
  //una peticion query a la bbdd
  const res = await axios.get('http://localhost:3000/api/tasks')
  console.log(res)

}

// SIN EMBARGP TAMBIEN PODRIA HACER ESTA PETICION, PERO DIRECTAMENTE A LA BASE DE DATOS POR EJEMPLO

const loadTaskFromBbdd = async() => {

  const tasksPrisma = await prisma.task.findMany()
  console.log(tasksPrisma);
  return tasksPrisma;


}


async function Inicio() {

  const tasksPrisma = await loadTaskFromBbdd()
  console.log(tasksPrisma)



  return (
    <div className='grid grid-cols-3 gap-3 mt-5'>
      {
        tasksPrisma.map(task =>(
          <TaskCard task={task} />
        ))
      }
    </div>
  )
}

export default Inicio

'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const { handleSubmit, register } = useForm()

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const res = await axios.post(`/api/tasks`, data)
        console.log(res)
        router.push('/')
    })

    return (
        <section className='h-screen flex items-center justify-center'>
            <form action="" onSubmit={onSubmit}>
                <label htmlFor='title' className='font-bold text-sm'> Nota</label>
                <input type="text" placeholder='titulo' id='title'
                    className='px-3 py-1 border-gray-300 rounded-md  shadow-sm focus:outline-none focus:ring-sky-300 text-black block mb-2'
                    {...register('title')} />
                <label htmlFor='description' className='font-bold text-sm'>Descripción</label>
                <textarea id="description" placeholder='tarea' className='px-3 py-1 border-gray-300 rounded-md  
                shadow-sm focus:outline-none focus:ring-sky-300 text-black block w-full' 
                    {...register('description')}></textarea>
                <button className='bg-sky-500 px-3 py-1 rounded-md text-white mt-2'>Crear</button>
            </form>
        </section>
    )
}

export default page

'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Page = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const { handleSubmit, register, setValue } = useForm()

    const onSubmit = handleSubmit(async data => {
        if (params) {
            await axios.put(`/api/tasks/${params.id}`, data)
        } else {
            await axios.post(`api/tasks`, data)
        }
        router.push('/')
        router.refresh()
    })

    useEffect(() => {
        if (params.id) {
            console.log('fetching')
            axios.get(`/api/tasks/${params.id}`).then(res => {
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            })
        }
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
                <div className='flex justify-between'>
                    <button type='submit' className='bg-sky-500 px-3 py-1 rounded-md text-white mt-2 ml-2'
                    >{params.id ? 'update' : 'crear'}</button>
                    <button type='button' className='bg-red-600 px-3 py-1 rounded-md text-white mt-2'
                        onClick={async () => {
                            if (confirm('estas seguro de eliminar esta tarea?')) {
                                await axios.delete(`/api/tasks/${params.id}`)
                                router.push('/')
                                router.refresh()
                            }
                        }}>delete</button>
                </div>
            </form>
        </section>
    )
}

export default Page;

import React from 'react'

interface Props {
    task: any
}

function TaskCard({task}: Props) {
    return (
        <div key={task.id} className='bg-gray-300 rounded-md'>
            <h3 className='font-bold text-xl'>{task.title}</h3>
            <p className='text-slate-800'>{task.description}</p>
        </div>
    )
}

export default TaskCard

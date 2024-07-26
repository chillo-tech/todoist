import React from 'react'
import TaskItem from '../task-item/TaskItem'

function Status({title, tasks}) {
  return (
    <div>
        <h3 className='mb-2'>{title}</h3>
        <div className='flex flex-col gap-3'>
            {tasks
            .filter(task => task.status === title)
            .map(task => <TaskItem key={task.id} task={task}/>)}
        </div>
    </div>
  )
}

export default Status
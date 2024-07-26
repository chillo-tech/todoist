import React, { useContext } from 'react'
import { ApplicationContext } from '../../context/ApplicationContextProvider'

function TaskItem({task}) {
  const {addToBasket} = useContext(ApplicationContext);
  return (
    <article className='bg-slate-100 p-2'>
        <h4>{task?.title}</h4>
        <div>{task.description}</div>
        <p className='flex justify-between items-center'>
            <span>TI: {task.it}</span>
            <span>TR: {task.rt}</span>
        </p>
      <button type="button" onClick={() => addToBasket({id: task.id})}>Ajouter au Panier</button>
    </article>
  )
}

export default TaskItem
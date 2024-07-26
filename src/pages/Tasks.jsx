import React, { useContext, useEffect, useState } from 'react'
import { STATUS, TASKS } from '../utils'
import Status from '../components/status/Status'
import { search } from '../services/scrud';
import { ApplicationContext } from '../context/ApplicationContextProvider';

function Tasks() {
  const {state: {tasks}, updateTasks} = useContext(ApplicationContext);
  useEffect(() => {
    
    const getTasks = async () => {
    /*
     const response = await search({path: "tasks"});
     const data = await response.json();*/

     updateTasks(TASKS);
    };

    getTasks();
  }, []);

  return (
    <section className='container mx-auto flex gap-2'>
        {STATUS.map(status => <Status key={status} title={status} tasks={tasks}/>)}
    </section>
  )
}

export default Tasks
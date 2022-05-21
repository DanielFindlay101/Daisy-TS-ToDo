import * as React from 'react'
import { useState } from 'react'

interface Todo {
  TodoItems?: Todo[]
  name?: string,
  completed?: boolean
}

export default function TodoForm({TodoItems}: Todo) {
  const [newTask, setNewTask] = useState({name: '', completed: false})

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    TodoItems?.push(...TodoItems, {name: newTask.name, completed: false})
    console.log(newTask)
    setNewTask({name: '', completed: false})
   }

  return (
    <React.Fragment>
        <form onSubmit={submitForm} className="flex">
          <label>
            <h1 className='text-2xl font-bold text-slate-100 text-center mb-4'>Add a new task:</h1>
            <input type="text" placeholder="Add Task:" className="input input-bordered input-accent input-lg w-full max-w-xs"
              onChange={(e) => setNewTask({name: newTask.name, completed: false})}
              value={newTask.name}
            />
          </label>
          <button className=' btn btn-primary ml-4 mt-[55px]'>Add</button>
        </form>
    </React.Fragment>
  )
}
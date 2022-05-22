import * as React  from 'react'
import { useState } from 'react'
import TodoCard from '../components/TodoCard'
// import TodoComplete from '../components/TodoComplete'
import TodoForm from '../components/TodoForm'

export interface Todo {
  name: string,
  completed: boolean
}

const TodoItems: Todo[] = [
  {name: "Clean House", completed: false},
  {name: "Walk Dog", completed: false},
  {name: "Make Dinner", completed: false}
]

export default function Home() {
  const [newTaskList, setNewTaskList] = useState<Todo[]>([])

  return (
    <div className='bg-slate-500 w-full fixed h-screen pt-28'>
      <span className='flex justify-center mb-10'>
         <TodoForm TodoItems={TodoItems} />
      </span>
      <div className=' flex justify-center'>
        <div className="flex w-4/6 justify-center">
          <TodoCard newTaskList={newTaskList} setNewTaskList={setNewTaskList} />
          <div className="divider divider-horizontal"></div>
          <TodoCard newTaskList={newTaskList} setNewTaskList={setNewTaskList} />
        </div>
      </div>
    </div> 
  )
}

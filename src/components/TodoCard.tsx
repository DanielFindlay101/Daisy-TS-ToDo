import React from 'react'
import { Todo } from "../pages/Home"
import { TrashIcon } from '@heroicons/react/solid'
import { CheckIcon } from '@heroicons/react/outline'
// interface Todo {
//   TodoItems?: Todo[]
//   name?: string,
//   completed?: boolean
// }

interface Props {
  newTaskList: Todo[],
  setNewTaskList: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoCard({newTaskList, setNewTaskList}: Props) {
  return (
    <React.Fragment>
      <div className="container flex flex-col gap-12">
        {newTaskList?.map((item, index) => (
          <div key={index} className="bg-emerald-500 rounded-box place-items-center h-24 px-5 py-8 text-xl flex justify-around">
            <ul className='text-white'>        
              <li>{item.name}</li>
            </ul>
            <span className='flex'>
            <CheckIcon className='h-5 w-5 text-white mr-6'/>
            <TrashIcon className='h-5 w-5 text-white'/>
            </span>
          </div>
        ))}
      </div>
    </React.Fragment>   
  )
}

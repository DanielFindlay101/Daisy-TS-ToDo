import React from 'react'
import { TrashIcon } from '@heroicons/react/solid'
import { CheckIcon } from '@heroicons/react/outline'
interface Todo {
  TodoItems?: Todo[]
  name?: string,
  completed?: boolean
}

export default function TodoCard({TodoItems}: Todo) {
  return (
    <React.Fragment>
      <div className="container flex flex-col gap-12">
        {TodoItems?.map((item, index) => (
          <div key={index} className="bg-emerald-500 rounded-box place-items-center h-24 px-5 py-8 text-xl flex justify-around">
            <ul className='text-white'>        
              <li>{item.name}</li>
            </ul>
            <CheckIcon className='h-5 w-5 text-white'/>
            <TrashIcon className='h-5 w-5 text-white'/>
          </div>
        ))}
      </div>
    </React.Fragment>   
  )
}

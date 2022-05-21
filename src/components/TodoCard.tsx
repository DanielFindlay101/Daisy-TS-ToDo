import React from 'react'

interface Todo {
  TodoItems?: Todo[]
  name?: string,
  completed?: boolean
}

export default function TodoCard({TodoItems}: Todo) {
  console.log(TodoItems)
  return (
    <React.Fragment>
      <div className="container flex flex-col gap-12">
        {TodoItems?.map((item, index) => (
          <div className="bg-emerald-500 rounded-box place-items-center h-24">
            <ul className='text-white'>        
              <li>{item.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </React.Fragment>   
  )
}

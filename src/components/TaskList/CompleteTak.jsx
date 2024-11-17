import React from 'react'

const CompleteTak = ({data}) => {
  
  return (
    <div className="h-[80%] shrink-0   w-[300px] bg-green-500 rounded-2xl p-5 ">
    <div className="flex items-center justify-between ">
      <h3 className="font-medium text-lg bg-red-600 rounded-md px-1">
        {data.category}
      </h3>
      <h3 className="font-medium text-lg rounded-md ">{data.taskDate}</h3>
    </div>
    <h2 className="font-bold text-2xl mt-3">{data.taskTitle}</h2>
    <p className="mt-1 leading-[18px]">
      {data.taskDescription}
    </p>

    <div className='mt-5 '>
        <button className='w-full bg-blue-600 p-2 text-sm rounded-xl'>Completed</button>
    </div>
  </div>
  )
}

export default CompleteTak
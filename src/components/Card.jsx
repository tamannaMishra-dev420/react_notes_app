import React, { useState } from 'react'


const Card = ({ id, title, details, delete: deleteNote }) => {
   const [done, setDone] = useState(false)

  return (
    <div
      className={`
        snap-start shrink-0 w-44 h-64
        rounded-2xl p-4
        shadow-amber-500
        bg-cover bg-center
        shadow-md hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
        flex flex-col justify-between
        hover:shadow-amber-700
        bg-amber-50
        ${done ? 'opacity-60 scale-95' : ''}
      `}
      
    >
      <div className='flex-1 overflow-y-auto no-scrollbar mt-2 space-y-2'>
        <p className='text-s text-white font-semibold bg-amber-600 w-9 p-2 rounded-full'>
          #{id + 1}
        </p>
      
        <h2 className='font-bold text-2xl text-gray-900 wrap-break-word '>
          {title}
        </h2>
   
        <p className='text-md text-gray-800 overflow-y-auto no-scrollbar max-h-28 leading-relaxed wrap-break-word'>
          {details}
        </p>
      </div>

      <div className='flex gap-2'>
        <button
          onClick={() => deleteNote(id)}
          className='flex-1 backdrop-blur rounded-lg text-sm py-1transition  bg-red-500 text-white'
        >
          Delete
        </button>

        <button
          onClick={() => setDone(!done)}
          className={`flex-1 rounded-lg text-sm py-1 transition ${
            done
              ? 'bg-green-500 text-white'
              : 'bg-white/80 backdrop-blur hover:bg-green-500 hover:text-white'
          }`}
        >
          Done
        </button>
      </div>
    </div>
  )
}

export default Card


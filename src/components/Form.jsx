import React from 'react'

const Form = ({ title, setTitle, details, setDetails, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} className='flex flex-col items-center w-full max-w-md'>
      <input
        className='bg-yellow-50 rounded-t-md text-lg p-2 w-full'
        type='text'
        value={title}
        placeholder='Enter Title'
        required
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className='bg-yellow-100 rounded-b-md p-2 w-full h-32'
        value={details}
        placeholder='Enter description'
        onChange={(e) => setDetails(e.target.value)}
      />

      <button className='bg-yellow-50 mt-2 px-4 py-1 rounded font-semibold'>
        Add Note
      </button>
    </form>
  )
}

export default Form

import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Card from './components/Card'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
 

  const submitHandler = (e) => {
    e.preventDefault()
    const copy = [...task, { title, details }]
    setTask(copy)
    localStorage.setItem('tasks', JSON.stringify(copy))
    setTitle('')
    setDetails('')
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks'))
    if (saved) setTask(saved)
  }, [])

  const deleteNote = (id) => {
    const copy = task.filter((_, i) => i !== id)
    setTask(copy)
    localStorage.setItem('tasks', JSON.stringify(copy))
  }

  return (
    <div className='min-h-screen flex flex-col justify-around items-center gap-6 p-4'>
      <Form
        title={title}
        setTitle={setTitle}
        details={details}
        setDetails={setDetails}
        submitHandler={submitHandler}
      />

      <div className='w-full flex  gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 md:grid md:grid-cols-4 lg:grid-cols-5 md:overflow-visible'>
        {task.map((elem, idx) => (
          <Card
            key={idx}
            id={idx}
            title={elem.title}
            details={elem.details}
            delete={deleteNote}
          />
        ))}
      </div>
    </div>
  )
}

export default App

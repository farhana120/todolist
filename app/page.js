import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='bg-slate-400 text-center text-yellow-300 font-bold p-5 text-5xl'>MY TODO LIST</h1>
    <form>
<input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter Task Here'></input>

<input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter Description Here'></input>



    </form>
    </>
    
  )
}

export default page
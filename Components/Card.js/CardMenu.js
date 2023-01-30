import React from 'react'

const Card = ({name,img}) => {
  return (
    <div className='w-full rounded-lg cursor-grab duration-300 border-2 shadow-lg border-slate-800 h- md:min-h-96 bg-slate-900 hover:scale-95 md:hover:scale-105 '>
        <div className='flex justify-center rounded-md items-center w-full md:max-h-72 aspect-w-3 aspect-h-2 '>
            <img className='rounded-t-md object-cover w-full h-full object-center'  src={img} alt="image" />
        </div>

        <div className='p-4  flex justify-center'>
           <span className='text-xl text-center font-Alegreya text-slate-300 font-semibold'>{name}</span>
        </div>
    </div>
  )
}

export default Card
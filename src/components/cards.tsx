import React from 'react'

const Cards = ({ image, title }: { image: string, title: string }) => {
  return (
    <div className='p-4 rounded-xl border-2 border-border flex flex-col'>
      <img src={image} alt={title} className='w-full h-32 object-cover rounded-md' />
      <h3 className='font-bold text-lg text-text-primary break-words mt-2'>{title}</h3>
    </div>
  )
}

export default Cards
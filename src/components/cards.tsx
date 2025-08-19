import React from 'react'
import Link from 'next/link'

const Cards = ({ image, title, link }: { image: string, title: string, link: string }) => {
  return (
    <Link href={link} className='p-4 rounded-xl border-2 border-border flex flex-col'>
      <img src={image} alt={"resim"} className='w-full h-32 object-cover rounded-md' />
      <h3 className='font-bold text-lg text-text-primary break-words mt-2'>{title}</h3>
    </Link>
  )
}

export default Cards
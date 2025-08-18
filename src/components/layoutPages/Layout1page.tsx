import React from 'react'
import Image from 'next/image'

const Layout1page = () => {
  return (
    <div className='w-full h-fit flex flex-col'>
      <div className='absolute bg-gradient-to-b from-accent-navy to-primary w-full h-150 opacity-50 -z-10'></div>
      <div className='w-full h-fit flex flex-col md:flex-row items-center justify-center p-4 gap-4'>
        <Image
          src='/default-user.png'
          alt='pp'
          width={300}
          height={300}
        />
        <div className='flex flex-col gap-4 p-2'>
          <h2 className='text-text-primary md:text-5xl text-3xl'>username</h2>
          <p className='text-text-primary md:text-2xl text-lg break-words'>açıklama açıklama açıklama ve açıklama</p>
        </div>
      </div>
      <div className='w-9/10 h-fit flex flex-col items-center justify-center p-4 gap-4 mx-auto'>
        <div className='w-full h-fit p-4 flex flex-col items-center mt-2'>
          <h2 className='text-text-primary md:text-5xl text-3xl'>hakkında</h2>
          <p className='text-text-primary md:text-2xl text-lg break-words'>Kısa bir biyografi veya açıklama buraya gelecek.</p>
        </div>
        <div className='w-full h-fit p-4 flex flex-col items-center mt-2'>
          <h2 className='text-text-primary md:text-5xl text-3xl'>okul</h2>
          <p className='text-text-primary md:text-2xl text-lg break-words'>bilmem ne üniversitesi</p>
        </div>
        <div className='w-full h-fit p-4 flex flex-col items-center mt-2'>
          <h2 className='text-text-primary md:text-5xl text-3xl'>öne çıkan projeler</h2>
          <div className='flex flex-col gap-4'>
            <div className='p-4 rounded-md'>
              <h3 className='text-text-primary md:text-3xl text-xl'>Project 1</h3>
              <p className='text-text-primary md:text-2xl text-lg break-words'>Project 1 description</p>
              <p className='text-text-primary md:text-2xl text-lg break-words'>github link</p>
            </div>
            <div className='p-4 rounded-md'>
              <h3 className='text-text-primary md:text-3xl text-xl'>Project 2</h3>
              <p className='text-text-primary md:text-2xl text-lg break-words'>Project 2 description</p>
              <p className='text-text-primary md:text-2xl text-lg break-words'>github link</p>
            </div>
            <div className='p-4 rounded-md'>
              <h3 className='text-text-primary md:text-3xl text-xl'>Project 3</h3>
              <p className='text-text-primary md:text-2xl text-lg break-words'>Project 3 description</p>
              <p className='text-text-primary md:text-2xl text-lg break-words'>github link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout1page
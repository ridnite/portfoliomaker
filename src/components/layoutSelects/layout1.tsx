'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const schema = z.object({
  photo: z.string().url(),
  name: z.string().min(2).max(100),
  description: z.string().min(10).max(500),
  about: z.string().min(10).max(500),
  school: z.string().min(2).max(100),
  project1: z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(10).max(500),
    github: z.string().url()
  }),
  project2: z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(10).max(500),
    github: z.string().url()
  }),
  project3: z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(10).max(500),
    github: z.string().url()
  })
});

const Layout1 = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      photo: session?.user?.image || '',
      description: '',
      about: '',
      school: '',
      project1: { title: '', description: '', github: '' },
      project2: { title: '', description: '', github: '' },
      project3: { title: '', description: '', github: '' }
    }
  });

  const onSubmit = form.handleSubmit((data: z.infer<typeof schema>) => {
    console.log(data);
  });

  return (
    <div className='w-9/10 md:w-8/10 h-fit flex flex-col gap-4'>
      <form onSubmit={onSubmit}>
        <div className='w-full flex flex-col md:flex-row gap-4'>
          <div className='md:w-1/2 w-full flex flex-col gap-4'>
            <input type="text" placeholder='ad soyad' {...form.register('name')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-12' />
            <textarea {...form.register('description')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-28' placeholder='açıklama'></textarea>
          </div>
          <div className='md:w-1/2 w-full flex flex-col gap-4'>
            <textarea {...form.register('about')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-20' placeholder='hakkında'></textarea>
            <textarea {...form.register('school')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-20' placeholder='okul bilgileri'></textarea>
          </div>
        </div>
        <div className='w-full h-1 bg-border mt-4 mb-4'></div>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col gap-4'>
            <input type="text" placeholder='proje adı 1' {...form.register('project1.title')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-12' />
            <textarea {...form.register('project1.description')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-20' placeholder='proje açıklaması'></textarea>
            <input type="text" placeholder='github linki' {...form.register('project1.github')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-12' />
          </div>
          <div className='flex flex-col gap-4'>
            <input type="text" placeholder='proje adı 2' {...form.register('project2.title')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-12' />
            <textarea {...form.register('project2.description')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-20' placeholder='proje açıklaması'></textarea>
            <input type="text" placeholder='github linki' {...form.register('project2.github')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-12' />
          </div>
          <div className='flex flex-col gap-4'>
            <input type="text" placeholder='proje adı 3' {...form.register('project3.title')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-12' />
            <textarea {...form.register('project3.description')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-20' placeholder='proje açıklaması'></textarea>
            <input type="text" placeholder='github linki' {...form.register('project3.github')} className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary w-full h-12' />
          </div>
        </div>
        <button type="submit" className='border-2 border-border text-white rounded-lg px-4 py-2 mx-auto mt-4'>gönder</button>
      </form>
    </div>
  )
}

export default Layout1
'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import axios from 'axios';

const schema = z.object({
  layout: z.string().min(1).max(100),
  id: z.string().min(1).max(100),
  photo: z.string().url(),
  name: z.string().min(2).max(100),
  experience: z.string().min(1, "İş deneyimi alanı boş bırakılamaz"),
  education: z.string().min(1, "Eğitim alanı boş bırakılamaz"),
  about: z.string().min(1, "Hakkımda alanı boş bırakılamaz"),
  projects: z.array(z.object({
    name: z.string().min(1, "Proje adı boş bırakılamaz"),
    description: z.string().min(1, "Proje açıklaması boş bırakılamaz"),
    githubLink: z.string().url("Geçerli bir GitHub linki girin")
  })).min(1, "En az bir proje eklenmelidir")
});

const Layout3 = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      layout: 'Gelişmiş',
      id: session?.user?.id,
      photo: session?.user?.image || '',
      name: session?.user?.name || '',
      experience: '',
      education: '',
      about: '',
      projects: [
        {
          name: '',
          description: '',
          githubLink: ''
        }
      ]
    }
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const response = await axios.post('/api/createpage', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className='w-full h-fit flex flex-col items-center justify-center'>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full md:w-4/5 mt-4 flex flex-col items-center justify-center p-4 md:border-2 border-border bg-primary rounded-xl'>
        <div className='flex flex-wrap gap-4 w-full items-center justify-center'>
          <input type="text" placeholder='iş deneyimi' className='bg-surface text-text-primary h-8 rounded-lg px-4 w-full md:w-1/4' {...form.register("experience")} />
          <input type="text" placeholder='okul' className='bg-surface text-text-primary h-8 rounded-lg px-4 w-full md:w-1/4' {...form.register("education")} />
          <input type="text" placeholder='hakkımda' className='bg-surface text-text-primary h-8 rounded-lg px-4 w-full md:max-w-2/5' {...form.register("about")} />
        </div>
        <div className='flex flex-wrap w-full items-center justify-center mt-4'>
          <div className='md:w-1/3 h-fit p-4 flex flex-col gap-4'>
            <input type="text" placeholder='proje adı' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.0.name")} />
            <input type="text" placeholder='açıklama' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.0.description")} />
            <input type="text" placeholder='github linki' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.0.githubLink")} />
          </div>
          <div className='md:w-1/3 h-fit p-4 flex flex-col gap-4'>
            <input type="text" placeholder='proje adı' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.1.name")} />
            <input type="text" placeholder='açıklama' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.1.description")} />
            <input type="text" placeholder='github linki' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.1.githubLink")} />
          </div>
          <div className='md:w-1/3 h-fit p-4 flex flex-col gap-4'>
            <input type="text" placeholder='proje adı' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.2.name")} />
            <input type="text" placeholder='açıklama' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.2.description")} />
            <input type="text" placeholder='github linki' className='bg-surface text-text-primary h-8 rounded-lg px-4' {...form.register("projects.2.githubLink")} />
          </div>
        </div>
        <button type='submit' className='border-2 border-border p-2 rounded-md bg-secondary px-4 mt-2 text-text-primary cursor-pointer active:scale-110'>gönder</button>
      </form>
    </div>
  )
}

export default Layout3
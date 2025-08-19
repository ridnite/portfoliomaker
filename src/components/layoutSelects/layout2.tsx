'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import axios from 'axios';
import { id } from 'zod/locales';

const schema = z.object({
  layout: z.string().min(1).max(100),
  id: z.string().min(1).max(100),
  photo: z.string().url(),
  name: z.string().min(2).max(100),
  description: z.string().min(10).max(500),
  about: z.string().min(10).max(500),
  school: z.string().min(2).max(100),
  skills: z.string().min(2).max(100),
  workExperience: z.string().min(2).max(100),
  colors: z.object({
    bgfirst: z.string().min(1).max(50),
    bgsec: z.string().min(1).max(50),
    bgcard: z.string().min(1).max(50)
  }),
  project1: z.object({
    title: z.string().min(2).max(100),
    github: z.string().url()
  }),
  project2: z.object({
    title: z.string().min(2).max(100),
    github: z.string().url()
  }),
  project3: z.object({
    title: z.string().min(2).max(100),
    github: z.string().url()
  })
});

const Layout2 = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      layout: 'Tasarımsal',
      id: session?.user?.id,
      photo: session?.user?.image || '',
      name: session?.user?.name || '',
      description: '',
      about: '',
      school: '',
      skills: '',
      workExperience: '',
      colors: {
        bgfirst: 'indigo-500',
        bgsec: 'purple-500',
        bgcard: 'neutral-100'
      },
      project1: {
        title: '',
        github: ''
      },
      project2: {
        title: '',
        github: ''
      },
      project3: {
        title: '',
        github: ''
      }
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
    <div className='w-full h-fit flex flex-col'>
      <form className='w-9/10 md:w-4/5 h-fit flex flex-col items-center justify-center p-4 gap-4 mx-auto border-2 border-border rounded-2xl' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='w-full flex flex-wrap gap-4 items-center justify-center'>
          <input type="text" placeholder="Hakkında" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("about")} />
          <input type="text" placeholder="Okul bilgilerin" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("school")} />
          <input type="text" placeholder="Kişisel açıklama" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("description")} />
          <input type="text" placeholder="Yetenekler" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("skills")} />
          <input type="text" placeholder="İş Deneyimi" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("workExperience")} />
        </div>
        <div className='flex flex-col gap-4 items-center justify-center w-full text-center'>
          <h3 className='text-text-primary my-4'>Renkler</h3>
          <div className='flex flex-wrap gap-4 md:gap-8 justify-center'>
            <div className='w-fit h-fit flex flex-col items-center justify-center gap-2 text-center'>
              <h3 className='text-text-primary my-4'>gradyan rengi 1</h3>
              <div onClick={() => form.setValue("colors.bgfirst", "indigo-500")} className={`w-20 h-10 bg-indigo-500 ${form.watch("colors.bgfirst") === "indigo-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgfirst", "purple-500")} className={`w-20 h-10 bg-purple-500 ${form.watch("colors.bgfirst") === "purple-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgfirst", "red-500")} className={`w-20 h-10 bg-red-500 ${form.watch("colors.bgfirst") === "red-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgfirst", "cyan-500")} className={`w-20 h-10 bg-cyan-500 ${form.watch("colors.bgfirst") === "cyan-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgfirst", "green-500")} className={`w-20 h-10 bg-green-500 ${form.watch("colors.bgfirst") === "green-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
            </div>
            <div className='w-fit h-fit flex flex-col items-center justify-center gap-2 text-center'>
              <h3 className='text-text-primary my-4'>gradyan rengi 2</h3>
              <div onClick={() => form.setValue("colors.bgsec", "indigo-500")} className={`w-20 h-10 bg-indigo-500 ${form.watch("colors.bgsec") === "indigo-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgsec", "purple-500")} className={`w-20 h-10 bg-purple-500 ${form.watch("colors.bgsec") === "purple-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgsec", "red-500")} className={`w-20 h-10 bg-red-500 ${form.watch("colors.bgsec") === "red-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgsec", "cyan-500")} className={`w-20 h-10 bg-cyan-500 ${form.watch("colors.bgsec") === "cyan-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgsec", "green-500")} className={`w-20 h-10 bg-green-500 ${form.watch("colors.bgsec") === "green-500" ? "border-4 border-amber-50" : ""} cursor-pointer hover:scale-110`}></div>
            </div>
            <div className='w-fit h-fit flex flex-col items-center justify-center gap-2 text-center'>
              <h3 className='text-text-primary my-4'>kart rengi</h3>
              <div onClick={() => form.setValue("colors.bgcard", "neutral-50")} className={`w-20 h-10 bg-neutral-50 ${form.watch("colors.bgcard") === "neutral-50" ? "border-4 border-red-300" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgcard", "neutral-100")} className={`w-20 h-10 bg-neutral-100 ${form.watch("colors.bgcard") === "neutral-100" ? "border-4 border-red-300" : ""} cursor-pointer hover:scale-110`}></div>
              <div onClick={() => form.setValue("colors.bgcard", "neutral-300")} className={`w-20 h-10 bg-neutral-300 ${form.watch("colors.bgcard") === "neutral-300" ? "border-4 border-red-300" : ""} cursor-pointer hover:scale-110`}></div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full text-center'>
          <h3 className='text-text-primary my-4'>Projects</h3>
          <div className='flex flex-wrap gap-4 md:gap-8 justify-center'>
            <div>
              <h4 className='text-text-primary my-2'>Project 1</h4>
              <input type="text" placeholder="Title" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("project1.title")} />
              <input type="text" placeholder="GitHub URL" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("project1.github")} />
            </div>
            <div>
              <h4 className='text-text-primary my-2'>Project 2</h4>
              <input type="text" placeholder="Title" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("project2.title")} />
              <input type="text" placeholder="GitHub URL" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("project2.github")} />
            </div>
            <div>
              <h4 className='text-text-primary my-2'>Project 3</h4>
              <input type="text" placeholder="Title" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("project3.title")} />
              <input type="text" placeholder="GitHub URL" className='border-2 border-border p-2 rounded-md bg-secondary px-2 text-text-primary' {...form.register("project3.github")} />
            </div>
          </div>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <button onClick={form.handleSubmit(onSubmit)} className='border-2 border-border p-2 rounded-md bg-secondary px-4 mt-2 text-text-primary cursor-pointer'>Göder</button>
      </form>
    </div>
  )
}

export default Layout2
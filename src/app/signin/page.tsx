'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const SignupSchema = z.object({
    email: z.string().email("Geçerli bir email girin"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalı").max(24, "Şifre en fazla 24 karakter olmalı"),
});

function page() {
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const router = useRouter()

    const form = useForm<z.infer<typeof SignupSchema>>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (data: z.infer<typeof SignupSchema>) => {
        setIsLoading(true)
        setMessage('')

        try {
            const result = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            })

            if (result?.error) {
                setMessage('Email veya şifre yanlış')
            } else if (result?.ok) {
                setMessage('Giriş başarılı! Yönlendiriliyorsunuz...')
                router.push('/')
            }
        } catch (error) {
            console.error('Signin error:', error)
            setMessage('Giriş sırasında hata oluştu')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='w-screen h-fit md:h-[calc(100vh-96px)] mt-12 md:mt-24 flex flex-col items-center justify-center p-2'>
            <div className="fixed w-screen h-screen -z-10 bg-primary-50 backdrop-blur-3xl"></div>
            <div className="absolute md:w-[50vh] md:h-[50vh] rounded-full translate-x-[-30%] -z-20 bg-accent-navy spin-div">
                <div className="w-1/2 h-1/2 bg-accent-navy rounded-full translate-x-[-10%] translate-y-[-10%] scale-div"></div>
                <div className="w-1/2 h-1/2 bg-accent-navy rounded-full translate-x-[-10%] translate-y-[-10%] scale-div"></div>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 text-text-primary w-full max-w-120 bg-secondary-50 border-2 border-border rounded-lg p-4 md:p-8 shadow-xl'>
                <span className='mx-auto text-2xl'>Giriş yap</span>
                <span className='mx-auto'>Kişisel hesabınla giriş yap</span>
                <input type="email" placeholder="Email" {...form.register("email")} className='bg-surface h-8 w-full rounded-lg px-4' />
                <input type="password" placeholder="Şifre" {...form.register("password")} className='bg-surface h-8 w-full rounded-lg px-4' />
                <div className='flex flex-col gap-2'>
                    {form.formState.errors.email && <span className='text-red-500'>{form.formState.errors.email.message}</span>}
                    {form.formState.errors.password && <span className='text-red-500'>{form.formState.errors.password.message}</span>}
                </div>
                <button type="submit" className='bg-accent-navy text-white rounded-lg px-4 py-2'>giriş yap</button>
                {/* <div className='flex w-full h-fit items-center justify-center gap-2 text-text-secondary'>
                    <div className='bg-border w-full h-0.5'></div>
                    <span>veya</span>
                    <div className='bg-border w-full h-0.5'></div>
                </div> */}
            </form>
        </div>
    )
}

export default page
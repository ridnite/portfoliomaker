'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import axios from 'axios';
import { useRouter } from 'next/navigation'


const SignupSchema = z.object({
    username: z.string().min(2, "Kullanıcı adı en az 2 karakter olmalı").max(24, "Kullanıcı adı en fazla 24 karakter olmalı"),
    email: z.string().email("Geçerli bir email girin"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalı").max(24, "Şifre en fazla 24 karakter olmalı"),
    confirmPassword: z.string().min(6, "Şifre en az 6 karakter olmalı").max(24, "Şifre en fazla 24 karakter olmalı"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler eşleşmiyor",
    path: ["confirmPassword"],
});

function page() {
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const router = useRouter()

    const form = useForm<z.infer<typeof SignupSchema>>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

    const onSubmit = async (data: z.infer<typeof SignupSchema>) => {
        setIsLoading(true)
        setMessage('')
        try {
            const response = await axios.post('/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password
            })

            if (response.status === 201) {
                setMessage('Hesap başarıyla oluşturuldu! Giriş sayfasına yönlendiriliyorsunuz...')
                setTimeout(() => {
                    router.push('/signin')
                }, 2000)
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.error || 'Bir hata oluştu'
            setMessage(errorMessage)
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
                <span className='mx-auto text-2xl'>Hesap oluştur</span>
                <span className='mx-auto'>Bir hesap oluştur ve tasarlamaya başla</span>
                <input type="text" placeholder="Kullanıcı Adı" {...form.register("username")} className='bg-surface h-8 w-full rounded-lg px-4' />
                <input type="email" placeholder="Email" {...form.register("email")} className="bg-surface h-8 w-full rounded-lg px-4" />
                <input type="password" placeholder="Şifre" {...form.register("password")} className='bg-surface h-8 w-full rounded-lg px-4' />
                <input type="password" placeholder="Şifre Tekrar" {...form.register("confirmPassword")} className='bg-surface h-8 w-full rounded-lg px-4' />
                <div className='flex flex-col gap-2'>
                    {form.formState.errors.username && <span className='text-red-500'>{form.formState.errors.username.message}</span>}
                    {form.formState.errors.email && <span>{form.formState.errors.email.message}</span>}
                    {form.formState.errors.password && <span className='text-red-500'>{form.formState.errors.password.message}</span>}
                    {form.formState.errors.confirmPassword && <span className='text-red-500'>{form.formState.errors.confirmPassword.message}</span>}
                </div>
                <button type="submit" className='bg-accent-navy text-white rounded-lg px-4 py-2'>Kayıt Ol</button>
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
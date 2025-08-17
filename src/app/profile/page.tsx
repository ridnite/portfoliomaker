'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image';
import Cards from '@/components/cards';

function page() {
    const { data: session } = useSession();
    return (
        <div className='w-full flex flex-col items-center select-none'>
            <div className='w-full h-fit p-4 md:p-8 flex flex-col items-center mt-12 md:mt-24'>
                <div className='w-fit h-fit p-4 md:px-12 flex flex-col md:flex-row text-center md:text-start gap-4 md:gap-8'>
                    <Image src={session?.user?.image || "/default-user.png"} alt="Profilim" width={200} height={200} className="rounded-full" />
                    <div className='flex flex-col justify-center ml-4 gap-2 md:gap-4'>
                        <span className='font-bold text-2xl md:text-4xl text-text-primary'>{session?.user?.name || "Kullanıcı Adı"}</span>
                        <span className='text-lg md:text-xl text-muted text-text-secondary'>{session?.user?.email || "Kullanıcı Email"}</span>
                    </div>
                </div>
                <div className='w-4/5 h-1 bg-border mt-4 md:mt-8'></div>
                <div className='w-4/5 h-fit py-4 grid grid-col-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
                    <div className='p-4 rounded-xl border-2 border-border flex flex-col items-center justify-center cursor-pointer bg-primary hover:bg-secondary text-text-secondary hover:text-text-primary transition-all'>
                        <h3 className='font-bold text-7xl break-words'>+</h3>
                        <p className='text-lg'>Yeni içerik Ekle</p>
                    </div>
                    <Cards image={"/null-photo.jpg"} title={"Card Title"} />
                </div>
            </div>
        </div>
    )
}

export default page
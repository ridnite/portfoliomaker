'use client'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import axios from 'axios';

function page() {
    const { data: session } = useSession();
    const [image, setImage] = useState<File | null>(null);

    async function handleUpload() {
        if (!image || !session?.user?.id) return;

        const formData = new FormData();
        formData.append("file", image);
        formData.append("userId", session.user.id);

        const res = await axios.post("/api/chanceimage", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log(res.data);
    }

    return (
        <div className='w-full h-fit flex flex-col mt-14 md:mt-26'>
            <div className='w-full md:w-4/5 flex flex-col items-center justify-center mx-auto gap-4 p-4 border-2 border-border rounded-xl'>
                <div className='w-full h-fit flex flex-col items-center justify-center text-center md:text-start'>
                    <h2 className='text-text-primary text-2xl'>Profil ayarları</h2>
                    <div className='w-full h-fit flex flex-col md:flex-row items-center md:items-end gap-4 mt-4'>
                        <div className='w-fit flex flex-col items-center justify-center gap-4'>
                            <Image src={session?.user?.image || "/default-user.png"} alt="Profil Resmi" width={100} height={100} className="rounded-full" />
                            <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} className='bg-surface text-text-secondary w-50 h-8 rounded-lg' />
                        </div>
                        <button onClick={handleUpload} className='bg-accent-navy text-text-primary w-50 h-8 rounded-lg px-4 cursor-pointer active:scale-110'>Güncelle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
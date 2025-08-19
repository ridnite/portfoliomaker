'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { data: session } = useSession();

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <nav className='w-screen h-12 md:h-24 fixed top-0 bg-primary-50 backdrop-blur-2xl border-b-2 border-border text-text-primary md:text-lg flex flex-col items-center justify-center whitespace-nowrap select-none'>
            <div className='w-full h-full md:h-1/2 flex items-center justify-between lg:px-12 md:px-8 px-2'>
                <span className='font-bold'>Portfolio Maker</span>
                {
                    session ? (
                        <div className='w-hit h-full hidden md:flex items-center justify-center'>
                            <div className="relative" ref={menuRef}>
                                <button onClick={() => setOpen(!open)} className="flex items-center gap-4 hover:bg-surface transition-all rounded-md px-4 py-1 cursor-pointer">
                                    <span>{session.user?.name || 'Kullanıcı Adı'}</span>
                                    <Image src={session.user?.image || "/default-user.png"} alt="Profilim" width={30} height={30} className="rounded-full" />
                                </button>
                                {open && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-secondary shadow-lg border border-border p-2 flex flex-col">
                                        <Link href='/profile' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Profilim</Link>
                                        <Link href='/' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Ayarlar</Link>
                                        <Link href='/' onClick={() => signOut()} className='hover:bg-surface transition-all rounded-md px-4 py-1'>Çıkış yap</Link>
                                    </div>
                                )}
                            </div>
                        </div>) : (
                        <div className='w-hit h-full hidden md:flex items-center justify-center gap-4'>
                            <Link href='/signin' className='hover:bg-surface border-2 border-border transition-all rounded-md px-4 py-1'>Giriş yap</Link>
                            <Link href='/signup' className='hover:bg-accent-navy border-2 border-border transition-all rounded-md px-4 py-1'>Kayıt ol</Link>
                        </div>
                    )
                }
            </div>
            <div className='w-full hidden h-1/2 md:flex items-center px-4 lg:px-8 gap-4 text-text-secondary overflow-x-scroll custom-scroll'>
                <Link href='/' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Ana Sayfa</Link>
                <Link href='/' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Keşfet</Link>
                <Link href='/' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Öne Çıkanlar</Link>
                <Link href='/' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Kategoriler</Link>
                <Link href='/' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Dökümantasyon</Link>
                <Link href='https://github.com/ridnite/portfoliomaker' className='hover:bg-surface transition-all rounded-md px-4 py-1'>Github</Link>
            </div>
        </nav>
    )
}

export default Header
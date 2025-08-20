'use client'
import React from 'react'
import Image from 'next/image'

function Layout3page({ layoutData }: { layoutData: any }) {
    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>
            <div style={{ backgroundImage: "url('/bg.jpg')" }} className='w-full h-100 flex flex-col items-center justify-center fixed top-12 md:top-24 -z-10'>
                <Image src={layoutData?.content?.photo || "/default-user.png"} alt="Description" width={250} height={250} className='rounded-full'/>
                <p className='text-text-primary text-4xl'>{layoutData?.content?.name || "Kullanıcı Adı"}</p>
            </div>
            <div className='w-full h-fit mt-100 bg-primary-50 backdrop-blur-3xl'>
                <div className='w-full md:w-4/5 h-fit flex flex-col md:flex-row items-center justify-center mx-auto gap-4 py-4'>
                    <div className='w-full md:w-1/2 border-2 border-border bg-primary p-4 rounded-xl'>
                        <h2 className='text-text-primary text-2xl'>iş deneyimi</h2>
                        <p className='text-text-secondary text-lg'>{layoutData?.content?.experience || "İş deneyimi bilgisi yok."}</p>
                    </div>
                    <div className='w-full md:w-1/2 border-2 border-border bg-primary p-4 rounded-xl'>
                        <h2 className='text-text-primary text-2xl'>eğitim</h2>
                        <p className='text-text-secondary text-lg'>{layoutData?.content?.education || "Eğitim bilgisi yok."}</p>
                    </div>
                </div>
                <div className='w-full md:w-4/5 h-fit mt-4 mx-auto flex flex-col items-center justify-center gap-4 border-2 border-border bg-primary p-4 rounded-xl'>
                    <h2 className='text-text-primary text-2xl'>Hakkımda</h2>
                    <p className='text-text-secondary text-lg'>{layoutData?.content?.about || "Hakkımda bilgisi yok."}</p>
                </div>
                <div className='w-full md:w-4/5 h-fit flex flex-col md:flex-row items-center justify-center mx-auto gap-4 py-4'>
                    <div className='w-full md:w-1/3 border-2 border-border bg-primary p-4 rounded-xl'>
                        <h2 className='text-text-primary text-2xl'>proje 1</h2>
                        <p className='text-text-secondary text-lg'>{layoutData?.content?.projects[0]?.description || "Proje 1 açıklaması yok."}</p>
                    </div>
                    <div className='w-full md:w-1/3 border-2 border-border bg-primary p-4 rounded-xl'>
                        <h2 className='text-text-primary text-2xl'>proje 2</h2>
                        <p className='text-text-secondary text-lg'>{layoutData?.content?.projects[1]?.description || "Proje 2 açıklaması yok."}</p>
                    </div>
                    <div className='w-full md:w-1/3 border-2 border-border bg-primary p-4 rounded-xl'>
                        <h2 className='text-text-primary text-2xl'>proje 3</h2>
                        <p className='text-text-secondary text-lg'>{layoutData?.content?.projects[2]?.description || "Proje 3 açıklaması yok."}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout3page
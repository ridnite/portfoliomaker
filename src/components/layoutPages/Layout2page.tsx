import React from 'react'
import Image from 'next/image'

const Layout2page = ({ layoutData }: { layoutData: any }) => {

    const colorMap: Record<string, string> = {
        "red-500": "#ef4444",
        "purple-500": "#a855f7",
        "blue-500": "#3b82f6",
        "green-500": "#22c55e",
    };
    const bgFirst = colorMap[layoutData?.content?.colors?.bgfirst] || "#a855f7";
    const bgSec = colorMap[layoutData?.content?.colors?.bgsec] || "#a855f7";

    return (
        <div className='w-full h-100 flex flex-col'>
            <div className={`fixed w-screen md:h-[calc(100vh-96px)] h-[calc(100vh-48px)] bg-gradient-to-tr -z-50`} style={{
                backgroundImage: `linear-gradient(to top right, ${bgFirst}, ${bgSec})`,
            }}></div>
            <div className='w-full h-fit flex flex-col md:flex-row'>
                <div className='w-full md:w-1/3 h-fit md:h-[calc(100vh-96px)] md:sticky md:top-24
             flex flex-col items-center justify-center p-4 '>
                    <div className={`w-full h-fit md:h-full bg-${layoutData?.content?.colors?.bgcard || "white"} rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center p-4 overflow-y-scroll`}>
                        <Image src={layoutData?.content?.photo || "/default-user.png"} alt="Default" width={200} height={200} className='rounded-full' />
                        <h2 className='text-neutral-950 md:text-3xl text-xl font-bold mt-4'>{layoutData?.content?.name || "Kullanıcı Adı"}</h2>
                        <p className='text-neutral-700 md:text-xl text-lg mt-2'>{layoutData?.content?.description || "Kullanıcı açıklaması buraya gelecek."}</p>
                    </div>
                </div>
                <div className='w-full md:w-2/3 h-fit flex flex-col items-center justify-center p-4 gap-4 '>
                    <div className={`w-full h-fit p-4 flex flex-col bg-${layoutData?.content?.colors?.bgcard || "white"} rounded-2xl shadow-2xl`}>
                        <h2 className='text-neutral-900 md:text-3xl text-xl '>Eğitim bilgilerim</h2>
                        <p className='text-neutral-700 md:text-xl text-lg mt-2'>{layoutData?.content?.school || "Okul bilgileri buraya gelecek."}</p>
                    </div>
                    <div className={`w-full h-fit p-4 flex flex-col bg-${layoutData?.content?.colors?.bgcard || "white"} to-neutral-200 rounded-2xl shadow-2xl`}>
                        <h2 className='text-neutral-900 md:text-3xl text-xl '>Çalışma geçmişim</h2>
                        <p className='text-neutral-700 md:text-xl text-lg mt-2'>{layoutData?.content?.workExperience || "Çalışma bilgileri buraya gelecek."}</p>
                    </div>
                    <div className={`w-full h-fit p-4 flex flex-col bg-${layoutData?.content?.colors?.bgcard || "white"} to-neutral-200 rounded-2xl shadow-2xl`}>
                        <h2 className='text-neutral-900 md:text-3xl text-xl '>Yeteneklerim</h2>
                        <p className='text-neutral-700 md:text-xl text-lg mt-2'>{layoutData?.content?.skills || "Yetenekler bilgileri buraya gelecek."}</p>
                    </div>
                    <div className={`w-full h-fit p-4 flex flex-col bg-${layoutData?.content?.colors?.bgcard || "white"} to-neutral-200 rounded-2xl shadow-2xl`}>
                        <h2 className='text-neutral-900 md:text-3xl text-xl '>Projelerim</h2>
                        <div className='w-full h-fit flex flex-wrap gap-4'>
                            <div className='flex flex-col h-fit w-fit items-center justify-center p-4 border-neutral-700 border-2 rounded-2xl'>
                                <p>{layoutData?.content?.project1?.title || "Proje 1"}</p>
                                <p>{layoutData?.content?.project1?.github || "GitHub linki..."}</p>
                            </div>
                            <div className='flex flex-col h-fit w-fit items-center justify-center p-4 border-neutral-700 border-2 rounded-2xl'>
                                <p>{layoutData?.content?.project2?.title || "Proje 2"}</p>
                                <p>{layoutData?.content?.project2?.github || "GitHub linki..."}</p>
                            </div>
                            <div className='flex flex-col h-fit w-fit items-center justify-center p-4 border-neutral-700 border-2 rounded-2xl'>
                                <p>{layoutData?.content?.project3?.title || "Proje 3"}</p>
                                <p>{layoutData?.content?.project3?.github || "GitHub linki..."}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout2page
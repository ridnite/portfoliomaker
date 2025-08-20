'use client'
import React, { useState } from 'react'
import Layout1 from '@/components/layoutSelects/layout1';
import Layout2 from '@/components/layoutSelects/layout2';
import Layout3 from '@/components/layoutSelects/layout3';

function page() {
    const [selectedLayout, setSelectedLayout] = useState<string | null>("");

    const layouts = [
        "Basit",
        "Tasarımsal",
        "Gelişmiş",
    ]

    const handleLayoutSelect = (layout: string) => {
        setSelectedLayout(layout);
    }

    const renderLayout = () => {
        switch (selectedLayout) {
            case 'Basit':
                return <Layout1 />;
            case 'Tasarımsal':
                return <Layout2 />;
            case 'Gelişmiş':
                return <Layout3 />;
            default:
                return null;
        }
    }

    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>
            <div className='w-9/10 md:w-4/5 h-fit mt-12 md:mt-24 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
                {layouts.map((layout, index) => (
                    <div key={index} onClick={() => handleLayoutSelect(layout)} className='border-2 border-border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer bg-primary hover:bg-secondary transition-all'>
                        <span className='text-text-primary'>{layout}</span>
                    </div>
                ))}
            </div>
                {renderLayout()}
        </div>
    )
}

export default page
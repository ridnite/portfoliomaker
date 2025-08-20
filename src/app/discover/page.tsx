'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Cards from '@/components/cards';
import Link from 'next/link';
import axios from 'axios';

function page() {
    const { data: session } = useSession();
    const [carddata, setCardData] = useState<[] | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/discoverpage');
            setCardData(response.data);
        }
        fetchData();
    }, []);
    return (
        <main className='w-full h-fit flex items-center justify-center select-none'>
            <div className='w-full md:w-4/5 mt-12 md:mt-24 h-fit flex flex-wrap items-center justify-center gap-4 p-4'>
                {
                    carddata?.map((card: any) => (
                        <Cards key={card.id} image={card.image} title={card.users.username} link={`/prfts/${card.id}`} />
                    ))
                }
            </div>
        </main>
    )
}

export default page
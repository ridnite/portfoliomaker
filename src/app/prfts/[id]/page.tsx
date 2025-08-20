'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Layout1page from '@/components/layoutPages/Layout1page'
import Layout2page from '@/components/layoutPages/Layout2page'
import Layout3page from '@/components/layoutPages/Layout3page'
import axios from 'axios';

function page() {
  const params = useParams();
  const id = params.id as string;
  const [selectedLayout, setSelectedLayout] = useState<string | null>("");
  const [layoutData, setLayoutData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/getpage/${id}`);
        console.log(response.data);
        setSelectedLayout(response.data.content.layout);
        setLayoutData(response.data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, []);

  const renderLayout = () => {
    switch (selectedLayout) {
      case 'Basit':
        return <Layout1page layoutData={layoutData} />;
      case 'Tasarımsal':
        return <Layout2page layoutData={layoutData} />;
      case 'Gelişmiş':
        return <Layout3page layoutData={layoutData}/>;
      default:
        return null;
    }
  }

  return (
    <div className='w-full h-fit mt-12 md:mt-24'>
       {renderLayout()}
    </div>
  )
}

export default page
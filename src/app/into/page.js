"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Loading from '@/components/reusable/Loading';

export default function into() {
  useEffect(()=>{
    const router = useRouter()
    router.push('/into/profiles')
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className='w-full h-screen fixed bg-white flex justify-center z-50'>
            <Loading/>
        </div>
    </main>
  );
  }
  
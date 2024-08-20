"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Loading from '@/components/reusable/Loading';

export default function into() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/into/profiles')
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
        <div className='w-full h-screen fixed bg-black flex justify-center z-50'>
            <Loading/>
        </div>
    </main>
  );
  }
  
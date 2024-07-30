"use client"
import { useRouter } from 'next/navigation'
import Loading from '@/components/reusable/Loading';

export default function into() {
    const router = useRouter()
    router.push('/into/profiles')
    return (
      <main className="flex min-h-screen flex-col items-center justify-between ">
            <div className='w-full h-screen fixed bg-white flex justify-center z-50'>
                <Loading/>
            </div>
      </main>
    );
  }
  
"use client"
import React from 'react'
import NotFoundImg from './assets/svg/NotFoundImg'
import { useRouter } from 'next/navigation'

export default function GlobalError() {
  const router = useRouter()
  return (
    <html>
      <body>
        <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
          <NotFoundImg />
          <button onClick={() => router.push('/market')} className='bg-blue-500 rounded-lg p-3 text-white hover:bg-blue-600 active:bg-blue-700'>Back to Market</button>
        </div>
      </body>
    </html>
  )
}

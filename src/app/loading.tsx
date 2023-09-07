'use client'
import Lottie from 'lottie-react'

import loadingAnimation from '../../public/assets/animations/loading.json'

export default function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <Lottie
        animationData={loadingAnimation}
        width={300}
        height={300}
        allowTransparency
      />
    </div>
  )
}

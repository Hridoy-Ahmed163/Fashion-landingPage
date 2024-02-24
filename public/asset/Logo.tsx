import React from 'react'
import Image from 'next/image'
import Vector from '@/public/asset/Vector.png'
const Logo = () => {
  return (
    <div>
      <Image
        src={Vector}
        alt='logo'
        height={15}
        width={16}
      />
    </div>
  )
}

export default Logo
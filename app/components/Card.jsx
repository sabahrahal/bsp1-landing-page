import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Card = ({href, text, img }) => {
  return (
    <Link href={href} className="rounded drop-shadow-lg">
    <Image className="rounded-t-lg" src={img} width={400} height={400} alt="touch phone" />
    <div className="p-4 bg-main rounded-b-lg hover:bg-secondary duration-300">
        <span className="text-2xl font-bold text-white uppercase text-center">{text}</span>
    </div>
    </Link>
  )
}

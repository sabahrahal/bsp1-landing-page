import Link from 'next/link'

export const NotAuthPage = () => {
  return (
    <div className="bg-slate-300 rounded p-8 lg:max-w-[50%] mx-auto flex items-center flex-col">
      <p className="text-center text-3xl font-bold uppercase mb-8 text-main">You are not authorized to enter this page.</p>
      <Link href="/" className="bg-main hover:bg-secondary font-bold p-3 rounded text-white hover:bg-maindark hover:duration-300 duration-300">return home</Link>
    </div>
  )
}
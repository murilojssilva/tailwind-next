import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 h-screen flex flex-col items-center text-center'>
      <div className='max-w-app'>
        <h1 className='font-bold text-rocketseat text-3xl sm:text-5xl lg:text-6xl flex justify-center items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500'>Hello Tailwind</h1>
        <p className='mt-4 dark:text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum voluptas labore alias, impedit laudantium recusandae voluptate sit deserunt architecto atque tenetur id cum sint porro nihil? Ea, obcaecati id?</p>

        <button className='bg-sky-500 text-white dark:bg-sky-400 dark:text-sky-950 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed'>
          Sign In
        </button>
      </div>
    </div>
  )
}

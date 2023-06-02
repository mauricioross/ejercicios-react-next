import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='p-0 m-0'>Proyectos ejemplo</h1>
      <ul>
        <li className='w-80 p-8 my-10 rounded-xl bg-violet-300 text-black hover:bg-violet-800 hover:text-white cursor-pointer'><Link href={'/componente-reutilizable'}>Componente Reutilizable</Link></li>
        <li className='w-80 p-8 my-10 rounded-xl bg-violet-300 text-black hover:bg-violet-800 hover:text-white cursor-pointer'><Link href={'/pagina-dinamica'}>Pagina Dinamica</Link></li>
        <li className='w-80 p-8 my-10 rounded-xl bg-violet-300 text-black hover:bg-violet-800 hover:text-white cursor-pointer'><Link href={'/pagina-privada'}>Pagina Privada</Link></li>
      </ul>

    </main>
  )
}

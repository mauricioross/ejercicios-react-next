import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Proyectos</h1>
      <Link href={'/componente-reutilizable'}>Componente Reutilizable</Link>
      <Link href={'/pagina-dinamica'}>Pagina Dinamica</Link>
    </main>
  )
}

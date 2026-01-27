import { createFileRoute, Link } from '@tanstack/react-router'
import '@/styles/global.css'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <main className='w-full flex flex-col gap-1 items-center justify-center'>
        <div className='font-normal text-red-500'>Hello "/"!</div>
        <Button variant={'to-black'}>
          <Link to='/about'>Clique aqui</Link>
        </Button>
      </main>
    </>
  )
}
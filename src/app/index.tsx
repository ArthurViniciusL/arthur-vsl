import { createFileRoute, Link } from '@tanstack/react-router'
import '@/styles/global.css'
import { Button } from '@/components/ui/button'
import Main from '@/components/layout/main'
import AboutMe from '@/components/app/home/aboutMe'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Main className=''>
        <div className='font-normal text-red-500'>Hello "/"!</div>
        <Button variant={'to-art'}>
          <Link to='/about'>Clique aqui</Link>
        </Button>
        <AboutMe/>
      </Main>
    </>
  )
}
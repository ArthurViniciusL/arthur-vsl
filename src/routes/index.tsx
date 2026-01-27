import { createFileRoute, Link } from '@tanstack/react-router'
import '@/App.css'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <div>Hello "/"!</div>
      <Link to='/about'>Clique aqui</Link>
    </>
  )
}
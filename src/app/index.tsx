import { createFileRoute } from '@tanstack/react-router';
import Main from '@/components/layout/main';
import AboutMe from '@/components/app/home/AboutMe';
import Section from '@/components/layout/section';

import '@/styles/global.css';
import MyLinks from '@/components/app/home/MyLinks';

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Main>
        {/* <Button variant={'app'}>
          <Link to='/about'>Clique aqui</Link>
        </Button> */}
        <Section direction='col' className='border-b border-border pb-4'>
          <AboutMe />
          <MyLinks />
        </Section>
        <Section direction='col'>
          {/*TODO: Add my professional history*/}
        </Section>
        <Section direction='col'>
          {/* TODO: Add my projects section */}
        </Section>
      </Main>
    </>
  )
}

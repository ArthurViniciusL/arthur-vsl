import { createFileRoute } from '@tanstack/react-router';
import Main from '@/components/layout/main';
import AboutMe from '@/components/app/home/AboutMe';
import Section from '@/components/layout/section';

import '@/styles/global.css';
import MyLinks from '@/components/app/home/MyLinks';
import { MyProjects } from '@/components/app/home/MyProjects';
import MyProfessionalJourney from '@/components/app/home/MyProfessionalJourney';

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
        <Section direction='col' className='border-b border-border pb-4'>
          {/*TODO: Add my professional history*/}
          <MyProfessionalJourney />
        </Section>
        <Section direction='col' className='border-b border-border pb-4'>
          <MyProjects />
        </Section>
      </Main>
    </>
  )
}

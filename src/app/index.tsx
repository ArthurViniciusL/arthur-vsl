import { createFileRoute } from '@tanstack/react-router';

import AboutMe from '@/components/app/home/AboutMe';
import MyLinks from '@/components/app/home/MyLinks';
import MyProfessionalJourney from '@/components/app/home/MyProfessionalJourney';
import '@/styles/global.css';
import { MyProjects } from '@/components/app/home/MyProjects';
import Main from '@/components/layout/main';
import Section from '@/components/layout/section';

export const Route = createFileRoute('/')({
  component: Home,
});

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
  );
}

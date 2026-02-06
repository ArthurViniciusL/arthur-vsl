import { createFileRoute } from '@tanstack/react-router';
import Main from '@/components/layout/main';
import AboutMe from '@/components/app/home/AboutMe';
import Section from '@/components/layout/section';

import '@/styles/global.css';
import MyLinks from '@/components/app/home/MyLinks';
import P from '@/components/typography/p';

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Main className='mt-'>
        {/* <Button variant={'app'}>
          <Link to='/about'>Clique aqui</Link>
        </Button> */}
        <Section direction='col' className='border-b border-border pb-4 relative'>
          <AboutMe />
          <MyLinks />
        </Section>
        <Section direction='col'>
            <P>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet deleniti voluptate asperiores voluptatem autem provident, minus ipsum placeat, delectus repudiandae distinctio cumque a voluptas. Fuga dolorum tenetur ducimus debitis voluptate?
            </P>
        </Section>
      </Main>
    </>
  )
}
import { createFileRoute, Link } from '@tanstack/react-router'
import '@/styles/global.css'
import { Button } from '@/components/ui/button'
import Main from '@/components/layout/main'
import AboutMe from '@/components/app/home/aboutMe'
import P from '@/components/typography/p'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Main className=''>
        <div className='font-normal text-red-500'>Hello "/"!</div>

        <Button variant={'app'}>
          <Link to='/about'>Clique aqui</Link>
        </Button>

        <section className='w-full h-full border border-green-400'>
          <P>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam asperiores fuga dolorum inventore, ab temporibus expedita repudiandae perspiciatis quibusdam recusandae quia, autem ex voluptatibus quasi velit quis provident porro natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit laborum velit ducimus dolorum officia dolores minus eveniet aliquid expedita, quidem voluptate reiciendis. Necessitatibus quae nesciunt at ipsam deserunt quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora natus eaque itaque, iusto doloribus excepturi, quos a consectetur sapiente cum dignissimos nemo id delectus debitis illum sed quasi magni.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad aliquam qui perferendis cum tempora, tempore dignissimos nobis. Soluta sit quasi quibusdam, fugiat iste deserunt amet omnis nostrum molestias tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in error nisi natus quibusdam officiis quidem earum iusto minima consequatur architecto tenetur animi quasi adipisci nihil, deleniti illo maiores iste!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi perferendis esse impedit dicta commodi dolore quaerat libero totam assumenda corrupti amet accusamus veniam, placeat laborum cumque nemo porro quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, soluta voluptates esse nam modi atque, quasi sapiente eum rem, placeat libero reiciendis mollitia? Ipsum quaerat, soluta iure dolorum perferendis beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa necessitatibus consectetur ipsam at ab nostrum ea veritatis ipsum a, non totam tempore deleniti rem natus praesentium dolores qui perspiciatis obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis recusandae ipsum neque! Eos unde reiciendis eum ullam provident ea error animi nostrum quis, facilis optio. Ducimus, consequatur quidem! Blanditiis, illo!
          </P>
        </section>
      </Main>
    </>
  )
}
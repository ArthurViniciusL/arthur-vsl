import { createFileRoute, Link } from '@tanstack/react-router'
import '@/styles/global.css'
import { Button } from '@/components/ui/button'
import Main from '@/components/layout/main'
import P from '@/components/typography/p'

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
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quae earum magnam iste pariatur. Ipsa quisquam odit expedita vitae? Ea alias odit quidem rem itaque. Dolorum dolores veniam deserunt nesciunt!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil, distinctio exercitationem minus blanditiis excepturi assumenda obcaecati repellat culpa iusto qui autem iure, natus asperiores quas doloribus necessitatibus eligendi labore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At temporibus perferendis a aspernatur officiis possimus et atque, harum maxime facilis autem adipisci sint consequatur veritatis accusamus mollitia ut qui id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere soluta dolorem, placeat est sapiente libero ex optio similique? Modi adipisci nesciunt aliquam pariatur asperiores voluptatem nisi saepe eius ipsum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi quibusdam dolor? Adipisci at nihil amet soluta magni harum minima? Molestias nostrum odio consequatur pariatur a eos at voluptatum odit!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aperiam a, amet accusamus animi quos dolorem. Vel totam exercitationem excepturi, veritatis quod aliquid temporibus explicabo, eaque rerum autem debitis saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio magni quibusdam eos sed dicta, ut, in cumque voluptatum repellendus consequatur numquam beatae explicabo repudiandae et quasi. Error, saepe tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio ab harum eaque dolorem neque eos excepturi reiciendis eum. Alias repellat quod inventore. Iure ipsum perferendis laudantium esse qui eligendi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum dolorum nostrum nobis quae nihil cum aliquid ut minima suscipit optio pariatur, molestias natus, illum et nesciunt, voluptas ipsa praesentium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam aliquid natus, dolore, amet dolorum repellendus totam saepe ratione iste, reiciendis aspernatur magni beatae mollitia enim? Cumque, cum porro! Voluptatem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam vero amet delectus minus animi dolorem, error magnam eius obcaecati quisquam, illo odio perferendis ea earum unde? Nesciunt, consequatur asperiores.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolores illo quam ad, pariatur quasi numquam nulla porro voluptate? Reiciendis adipisci qui reprehenderit, provident suscipit at. Molestiae ea consectetur alias?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ad temporibus minima libero explicabo quo qui a quibusdam necessitatibus quia praesentium, quas nesciunt? Laudantium praesentium distinctio provident recusandae quae vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga, rem harum voluptatibus facere in recusandae? Ipsum debitis quae, iste hic modi amet laudantium doloremque quis doloribus voluptates minus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque necessitatibus expedita dolorum accusantium quae doloremque impedit. Exercitationem consequuntur illo, tempore corporis ad necessitatibus! Architecto aliquid illum distinctio cum vero.
        </P>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quae earum magnam iste pariatur. Ipsa quisquam odit expedita vitae? Ea alias odit quidem rem itaque. Dolorum dolores veniam deserunt nesciunt!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil, distinctio exercitationem minus blanditiis excepturi assumenda obcaecati repellat culpa iusto qui autem iure, natus asperiores quas doloribus necessitatibus eligendi labore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At temporibus perferendis a aspernatur officiis possimus et atque, harum maxime facilis autem adipisci sint consequatur veritatis accusamus mollitia ut qui id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere soluta dolorem, placeat est sapiente libero ex optio similique? Modi adipisci nesciunt aliquam pariatur asperiores voluptatem nisi saepe eius ipsum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi quibusdam dolor? Adipisci at nihil amet soluta magni harum minima? Molestias nostrum odio consequatur pariatur a eos at voluptatum odit!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aperiam a, amet accusamus animi quos dolorem. Vel totam exercitationem excepturi, veritatis quod aliquid temporibus explicabo, eaque rerum autem debitis saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio magni quibusdam eos sed dicta, ut, in cumque voluptatum repellendus consequatur numquam beatae explicabo repudiandae et quasi. Error, saepe tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio ab harum eaque dolorem neque eos excepturi reiciendis eum. Alias repellat quod inventore. Iure ipsum perferendis laudantium esse qui eligendi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum dolorum nostrum nobis quae nihil cum aliquid ut minima suscipit optio pariatur, molestias natus, illum et nesciunt, voluptas ipsa praesentium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam aliquid natus, dolore, amet dolorum repellendus totam saepe ratione iste, reiciendis aspernatur magni beatae mollitia enim? Cumque, cum porro! Voluptatem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam vero amet delectus minus animi dolorem, error magnam eius obcaecati quisquam, illo odio perferendis ea earum unde? Nesciunt, consequatur asperiores.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolores illo quam ad, pariatur quasi numquam nulla porro voluptate? Reiciendis adipisci qui reprehenderit, provident suscipit at. Molestiae ea consectetur alias?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ad temporibus minima libero explicabo quo qui a quibusdam necessitatibus quia praesentium, quas nesciunt? Laudantium praesentium distinctio provident recusandae quae vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga, rem harum voluptatibus facere in recusandae? Ipsum debitis quae, iste hic modi amet laudantium doloremque quis doloribus voluptates minus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque necessitatibus expedita dolorum accusantium quae doloremque impedit. Exercitationem consequuntur illo, tempore corporis ad necessitatibus! Architecto aliquid illum distinctio cum vero.
        </P>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quae earum magnam iste pariatur. Ipsa quisquam odit expedita vitae? Ea alias odit quidem rem itaque. Dolorum dolores veniam deserunt nesciunt!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil, distinctio exercitationem minus blanditiis excepturi assumenda obcaecati repellat culpa iusto qui autem iure, natus asperiores quas doloribus necessitatibus eligendi labore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At temporibus perferendis a aspernatur officiis possimus et atque, harum maxime facilis autem adipisci sint consequatur veritatis accusamus mollitia ut qui id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere soluta dolorem, placeat est sapiente libero ex optio similique? Modi adipisci nesciunt aliquam pariatur asperiores voluptatem nisi saepe eius ipsum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi quibusdam dolor? Adipisci at nihil amet soluta magni harum minima? Molestias nostrum odio consequatur pariatur a eos at voluptatum odit!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aperiam a, amet accusamus animi quos dolorem. Vel totam exercitationem excepturi, veritatis quod aliquid temporibus explicabo, eaque rerum autem debitis saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio magni quibusdam eos sed dicta, ut, in cumque voluptatum repellendus consequatur numquam beatae explicabo repudiandae et quasi. Error, saepe tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio ab harum eaque dolorem neque eos excepturi reiciendis eum. Alias repellat quod inventore. Iure ipsum perferendis laudantium esse qui eligendi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum dolorum nostrum nobis quae nihil cum aliquid ut minima suscipit optio pariatur, molestias natus, illum et nesciunt, voluptas ipsa praesentium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam aliquid natus, dolore, amet dolorum repellendus totam saepe ratione iste, reiciendis aspernatur magni beatae mollitia enim? Cumque, cum porro! Voluptatem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam vero amet delectus minus animi dolorem, error magnam eius obcaecati quisquam, illo odio perferendis ea earum unde? Nesciunt, consequatur asperiores.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolores illo quam ad, pariatur quasi numquam nulla porro voluptate? Reiciendis adipisci qui reprehenderit, provident suscipit at. Molestiae ea consectetur alias?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ad temporibus minima libero explicabo quo qui a quibusdam necessitatibus quia praesentium, quas nesciunt? Laudantium praesentium distinctio provident recusandae quae vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga, rem harum voluptatibus facere in recusandae? Ipsum debitis quae, iste hic modi amet laudantium doloremque quis doloribus voluptates minus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque necessitatibus expedita dolorum accusantium quae doloremque impedit. Exercitationem consequuntur illo, tempore corporis ad necessitatibus! Architecto aliquid illum distinctio cum vero.
        </P>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quae earum magnam iste pariatur. Ipsa quisquam odit expedita vitae? Ea alias odit quidem rem itaque. Dolorum dolores veniam deserunt nesciunt!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil, distinctio exercitationem minus blanditiis excepturi assumenda obcaecati repellat culpa iusto qui autem iure, natus asperiores quas doloribus necessitatibus eligendi labore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At temporibus perferendis a aspernatur officiis possimus et atque, harum maxime facilis autem adipisci sint consequatur veritatis accusamus mollitia ut qui id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere soluta dolorem, placeat est sapiente libero ex optio similique? Modi adipisci nesciunt aliquam pariatur asperiores voluptatem nisi saepe eius ipsum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi quibusdam dolor? Adipisci at nihil amet soluta magni harum minima? Molestias nostrum odio consequatur pariatur a eos at voluptatum odit!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aperiam a, amet accusamus animi quos dolorem. Vel totam exercitationem excepturi, veritatis quod aliquid temporibus explicabo, eaque rerum autem debitis saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio magni quibusdam eos sed dicta, ut, in cumque voluptatum repellendus consequatur numquam beatae explicabo repudiandae et quasi. Error, saepe tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio ab harum eaque dolorem neque eos excepturi reiciendis eum. Alias repellat quod inventore. Iure ipsum perferendis laudantium esse qui eligendi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum dolorum nostrum nobis quae nihil cum aliquid ut minima suscipit optio pariatur, molestias natus, illum et nesciunt, voluptas ipsa praesentium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam aliquid natus, dolore, amet dolorum repellendus totam saepe ratione iste, reiciendis aspernatur magni beatae mollitia enim? Cumque, cum porro! Voluptatem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam vero amet delectus minus animi dolorem, error magnam eius obcaecati quisquam, illo odio perferendis ea earum unde? Nesciunt, consequatur asperiores.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolores illo quam ad, pariatur quasi numquam nulla porro voluptate? Reiciendis adipisci qui reprehenderit, provident suscipit at. Molestiae ea consectetur alias?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ad temporibus minima libero explicabo quo qui a quibusdam necessitatibus quia praesentium, quas nesciunt? Laudantium praesentium distinctio provident recusandae quae vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga, rem harum voluptatibus facere in recusandae? Ipsum debitis quae, iste hic modi amet laudantium doloremque quis doloribus voluptates minus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque necessitatibus expedita dolorum accusantium quae doloremque impedit. Exercitationem consequuntur illo, tempore corporis ad necessitatibus! Architecto aliquid illum distinctio cum vero.
        </P>
      </Main>
    </>
  )
}
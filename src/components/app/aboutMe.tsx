import P from '@/components/typography/p'

export default function AboutMe() {

    function repeate() {
        const elements = [];
        for (let index = 0; index <= 10; index++) {
            elements.push(<P key={index}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis animi tempora sed fugiat libero voluptas, consequuntur dicta reiciendis vel quis cumque! Magnam officia dolore unde quo dolorem explicabo voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit veniam natus. Esse minima suscipit cumque molestiae ad quisquam, ratione vitae, quos odit, minus ullam magnam! Perspiciatis reprehenderit eius architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempora aperiam necessitatibus libero quidem et, laudantium velit voluptatem eaque excepturi obcaecati nobis ex repellendus a corrupti hic voluptas sed. Inventore.</P>);
        }
        return elements;
    }

    return (
        <>
            {repeate()}
        </>
    );
}
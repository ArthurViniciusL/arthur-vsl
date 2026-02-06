import TooltipApp from "@/components/tooltip";
import { cn } from "@/lib/utils";
import { IcGithub, IcLinkedin, IcMyEmail } from "@/utils/modules/icons";

export default function MyLinks() {

    const links = [
        {
            href: 'https://www.linkedin.com/in/arthur-lucena-79a8441b6/',
            icon: <IcLinkedin fill="white" />,
            name: 'LinkedIn',
            style: 'bg-gradient-to-b from-[#278DF4] to-[#0A66C2] hover:bg-none'
        },
        {
            href: 'https://github.com/ArthurViniciusL/',
            icon: <IcGithub fill="white" />,
            name: 'Github',
            style: 'bg-gradient-to-b from-[#3A3A3A] to-[#000000] hover:bg-none'
        },
        {
            href: 'mailto:arthur.vsl.contato@gmail.com?subject=Estou entrando em contato porque:[motivo]&body=Olá Arthur, eu sou [seu nome] e gostaria de falar com você porque [motivo]',
            icon: <IcMyEmail />,
            name: 'E-mail',
            style: 'bg-gradient-to-b from-[#C13A2A] to-[#DC483B] hover:bg-none'
        },
    ];

    return (
        <>
            <ul className="flex flex-row gap-3">
                {
                    links.map((link, key) => (
                        <>
                            <TooltipApp msg={link.name} side="bottom">
                                <li key={key} className='border-b border-transparent hover:border-border'>
                                    <a href={link.href} target='_blank'>
                                        <button
                                            className={cn('text-white hover:bg-yellow-400 cursor-pointer p-4 rounded-lg transition-all ease-linear duration-200 hover:-translate-y-2', link.style)}
                                        >
                                            {link.icon}
                                        </button>
                                    </a>
                                </li>
                            </TooltipApp>
                        </>
                    )
                    )}
            </ul>
        </>
    );
}
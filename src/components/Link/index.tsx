interface LinkProps {
    newTab?: boolean;
    className?: string;
    href: string;
    children: React.ReactNode;
}

export function Link({ className, href, newTab, children }: LinkProps) {
    const external = newTab ? "_blank" : '';
    return (
        <>
            <a className={`
                ${className}
                art:cursor:pointer
                art:font-size:normal-01
                art:font-color:black-01
                art:border-radius:r-01
                art:bg:white-02
                art:hover:bg:white-03
                art:hover:underline
                art:p-01
            `} href={href} target={external}>
                {children}
            </a>
        </>
    );
}
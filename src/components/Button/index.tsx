interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

export function Button({ onClick, className, children }: ButtonProps) {
    return (
        <>
            <button 
                onClick={onClick}
                className={`
                    ${className}
                    art:cursor:pointer
                    art:p-01
                    art:border-radius:r-01
                    art:font-size:normal-01
                    art:font-color:black-01
                    art:hover:font-color:white-02
                    art:bg:white-02
                    art:hover:bg:black-01
                `}>
                {children}
            </button>
        </>
    );
}
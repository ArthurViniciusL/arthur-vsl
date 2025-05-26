import styles from "./button.module.css";

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
                    ${styles.button}
                    art:cursor:pointer
                    art:p-01
                    art:border:r-02
                    art:font:normal-01
                    art:font:black-01
                    art:bg:white-02
                    
                    art:bg:font-color:white-01
                    art:hover:bg:black-01
                    ${className}
                `}>
                {children}
            </button>
        </>
    );
}
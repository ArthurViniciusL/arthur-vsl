import styles from "./footer.module.css"

export function Footer() {
    return (
        <>
            <footer className={`${styles.footer} art:bg:white-02`}>
                <div className={styles.content}>
                    <p className="art:ft:normal-01">
                        © 2025 Arthur Lucena. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </>
    )
}
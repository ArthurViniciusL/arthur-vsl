import "./styles/global.css";
import styles from "./styles/Home.module.css";
import ProfilePicture from "./components/profile-picture";
import { Header } from "./components/Header";
import { ListSocialNetwork } from "./components/SocialNetwork";



/* Home */
export default function Index() {


  return (
    <html className={styles.html}>
      <body className={styles.body}>

        <main className={styles.main}>
          <Header title="Início" />

          <section className={styles.section}>
            <div className={styles.sec01Content}>

              <div className={styles.pictureContainer} >
                <ProfilePicture />
              </div>

              <div className={styles.sec01TextContent}>

                <h2 className={styles.h2} >Sobre mim</h2>

                <p className={styles.p}>Desenvolvedor Full Stack focado com: React js , Node.js, Java Spring Framework, Python, SQL e Docker. E também graduando de Sistemas de Informação.</p>
              </div>

            </div>
          </section>

          <section className={styles.section}>

            <h2 className={styles.h2} >Section 2</h2>
            {/*  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=arthurviniciusl&locale=en&hide_title=true&layout=compact&card_width=320&langs_count=7&hide_border=true&order=2" height="300" alt="languages graph" /> */}
          </section>

          <section className={styles.section}>

            <h2 className={styles.h2} >Minhas redes</h2>
            <ListSocialNetwork />


            <footer className={styles.footer}>
              <p>
                &copy; 2024 Arthur Lucena. Todos os direitos reservados.
              </p>
            </footer>
          </section>
        </main>
      </body>
    </html>
  );
}

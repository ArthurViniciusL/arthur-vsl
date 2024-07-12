// 'use server';

import '../../styles/global.css'
import styles from "../../styles/Home.module.css"
import ProfilePicture from "../../components/profile-picture";
import { Header } from "../../components/Header";

export default function Page2() {
  return (
    <main className={styles.main}>
      <Header title="Página 2" />

      <section className={styles.section}>

      <h2 className={styles.h2} >Section 1</h2>

      </section>

      <section className={styles.section}>
        <h2 className={styles.h2} >Section 2</h2>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2} >Section 3</h2>

      </section>


    </main>
  );
}

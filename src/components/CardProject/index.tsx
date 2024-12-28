import { Link } from "lucide-react";
import styles from "./card-project.module.css";
import { CurrentLink } from "@/modules/app.modules";

export function CardProject() {
    return (
        <>
            <div className={styles.box}>
                <a className={`
                    ${styles.card}
                    art:cursor:pointer
                    art:font-size:normal-01
                    art:bg:white-01
                    
                    art:border-style:solid
                    art:border-size:s-01
                    art:border-color:white-03

                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                    `}>
                    <h2 className="art:font-size:subtitle-02">
                        Card 01

                    </h2>
                    <div className={styles.textArea}>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officia quisquam obcaecati ab dicta dolor, illum voluptate placeat? Cum reiciendis ut amet id eos hic dolor optio aliquid est nostrum!

                        </p>
                    </div>

                    <CurrentLink />
                </a>

                <a className={`
                    ${styles.card}
                    art:cursor:pointer
                    art:font-size:normal-01
                    art:bg:white-01
                    
                    art:border-style:solid
                    art:border-size:s-01
                    art:border-color:white-03

                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                    `}>
                    <h2 className="art:font-size:subtitle-02">
                        Card 02
                    </h2>
                    <div className={styles.textArea}>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officia quisquam obcaecati ab dicta dolor, illum voluptate placeat? Cum reiciendis ut amet id eos hic dolor optio aliquid est nostrum!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea consequatur perspiciatis quos aliquam quis cupiditate mollitia, voluptas earum illum numquam consectetur a incidunt quaerat minus eveniet nulla dolorem sint.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt id aliquid odio necessitatibus at suscipit, itaque molestiae delectus pariatur dolorem quisquam! Deleniti sapiente, quod dolore sunt est aliquid! Neque?
                        </p>
                    </div>
                </a>

                <a className={`
                    ${styles.card}
                    art:cursor:pointer
                    art:font-size:normal-01
                    art:bg:white-01
                    
                    art:border-style:solid
                    art:border-size:s-01
                    art:border-color:white-03

                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                    `}>
                    <h2 className="art:font-size:subtitle-02">
                        Card 03
                    </h2>
                    <div className={styles.textArea}>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officia quisquam obcaecati ab dicta dolor, illum voluptate placeat? Cum reiciendis ut amet id eos hic dolor optio aliquid est nostrum!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea consequatur perspiciatis quos aliquam quis cupiditate mollitia, voluptas earum illum numquam consectetur a incidunt quaerat minus eveniet nulla dolorem sint.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt id aliquid odio necessitatibus at suscipit, itaque molestiae delectus pariatur dolorem quisquam! Deleniti sapiente, quod dolore sunt est aliquid! Neque?
                        </p>
                    </div>
                </a>

                <a className={`
                    ${styles.card}
                    art:cursor:pointer
                    art:font-size:normal-01
                    art:bg:white-01
                    
                    art:border-style:solid
                    art:border-size:s-01
                    art:border-color:white-03

                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                    `}>
                    <h2 className="art:font-size:subtitle-02">
                        Card 04
                    </h2>
                    <div className={styles.textArea}>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officia quisquam obcaecati ab dicta dolor, illum voluptate placeat? Cum reiciendis ut amet id eos hic dolor optio aliquid est nostrum!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea consequatur perspiciatis quos aliquam quis cupiditate mollitia, voluptas earum illum numquam consectetur a incidunt quaerat minus eveniet nulla dolorem sint.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt id aliquid odio necessitatibus at suscipit, itaque molestiae delectus pariatur dolorem quisquam! Deleniti sapiente, quod dolore sunt est aliquid! Neque?
                        </p>
                    </div>
                </a>
            </div>

        </>
    );
}
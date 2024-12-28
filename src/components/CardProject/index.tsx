import { Link } from "lucide-react";
import styles from "./card-project.module.css";

export function CardProject() {
    return (
        <>
            <div className={styles.box}>
                <a className={`
                    ${styles.link}
                    art:cursor:pointer
                    art:bg:white-02
                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                    `}>
                    <h2 className="art:font-size:subtitle-02">
                        Card 01
                    </h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officia quisquam obcaecati ab dicta dolor, illum voluptate placeat? Cum reiciendis ut amet id eos hic dolor optio aliquid est nostrum!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea consequatur perspiciatis quos aliquam quis cupiditate mollitia, voluptas earum illum numquam consectetur a incidunt quaerat minus eveniet nulla dolorem sint.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt id aliquid odio necessitatibus at suscipit, itaque molestiae delectus pariatur dolorem quisquam! Deleniti sapiente, quod dolore sunt est aliquid! Neque?
                    </p>
                </a>

                <a className={`
                    ${styles.link}
                    art:cursor:pointer
                    art:bg:white-02
                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                `}>
                    <div>
                        <h2 className="art:font-size:subtitle-02">
                            Card 01
                        </h2>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officia quisquam obcaecati ab dicta dolor, illum voluptate placeat? Cum reiciendis ut amet id eos hic dolor optio aliquid est nostrum!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea consequatur perspiciatis quos aliquam quis cupiditate mollitia, voluptas earum illum numquam consectetur a incidunt quaerat minus eveniet nulla dolorem sint.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt id aliquid odio necessitatibus at suscipit, itaque molestiae delectus pariatur dolorem quisquam! Deleniti sapiente, quod dolore sunt est aliquid! Neque?
                        </p>
                    </div>
                </a>

                <a className={`
                    ${styles.link}
                    art:cursor:pointer
                    art:bg:white-02
                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                `}>
                    <div>
                        <h2 className="art:font-size:subtitle-02">
                            Card 01
                        </h2>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officia quisquam obcaecati ab dicta dolor, illum voluptate placeat? Cum reiciendis ut amet id eos hic dolor optio aliquid est nostrum!
                        </p>
                    </div>
                </a>

                <a className={`
                    ${styles.link}
                    art:cursor:pointer
                    art:bg:white-02
                    art:hover:bg:white-03
                    art:border-radius:r-01
                    art:p-01
                `}>
                    <div>
                        <h2 className="art:font-size:subtitle-02">
                            Card 01
                        </h2>
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
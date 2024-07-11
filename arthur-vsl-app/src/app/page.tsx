import "./styles/global.css";
import './styles/Home.css';
import ProfilePicture from "./components/profile-picture";

export default function Home() {
  return (
    <main>
      <section className="homeSection">
        <div className="sec01Content">
          <ProfilePicture />
          <div className="sec01TextContent">
            <h2>Sobre mim</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sed sint dicta aperiam, laboriosam error unde asperiores et dolorum iste tempora nobis facere minus tempore. Doloribus id laborum corrupti voluptatem?
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi? Totam, assumenda qui tempora ipsa voluptatem aperiam deleniti quod, doloribus quos mollitia autem aliquid possimus molestias, nostrum commodi reiciendis odio.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi? Totam, assumenda qui tempora ipsa voluptatem aperiam deleniti quod, doloribus quos mollitia autem aliquid possimus molestias, nostrum commodi reiciendis odio.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi? Totam, assumenda qui tempora ipsa voluptatem aperiam deleniti quod, doloribus quos mollitia autem aliquid possimus molestias, nostrum commodi reiciendis odio.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi? Totam, assumenda qui tempora ipsa voluptatem aperiam deleniti quod, doloribus quos mollitia autem aliquid possimus molestias, nostrum commodi reiciendis odio.
            </p>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <h2>Section 2</h2>
      </section>

      <section className="homeSection">
        <h2>Section 3</h2>
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=arthurviniciusl&locale=en&hide_title=true&layout=compact&card_width=320&langs_count=7&hide_border=true&order=2" height="300" alt="languages graph" />
        <footer></footer>
      </section>


    </main>
  );
}

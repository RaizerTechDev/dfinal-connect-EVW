import style from "./Usuario.module.scss";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineCalendarToday } from "react-icons/md";
const Usuario = () => {
  return (
    <main className={style.main}>
      <section>
        <img className={style.avatar} 
        src="https://media.licdn.com/dms/image/v2/D4E03AQGZrIgB7Q36Ow/profile-displayphoto-scale_400_400/B4EZlOtr7LIIAg-/0/1757962229693?e=2147483647&v=beta&t=eH_Z3ktVkGbSIxa9AAJNwUKblxjJ6DN_NjJ0RNTX59k"
                              alt="Avatar do usuário"
        />
        <div className={style.div}>
          <h1>Rafael Raizer</h1>
          <h2>Voluntário Ativo</h2>
          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <ul>
            <li>
              <LuMapPin /> Gaspar, SC
            </li>
            <li>
              <MdOutlineEmail /> rafael.dev.raizer@gmail.com
            </li>
            <li>
              <MdOutlineCalendarToday /> Membro desde Fevereiro 2026
            </li>
          </ul>

          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Usuario;

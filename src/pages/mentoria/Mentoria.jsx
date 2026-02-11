import style from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import mentoria from "../../assets/images/mentoria/mentoria.png";
import cExperiencia from "../../assets/images/mentoria/cExperiencia.png";
import Acompanhamento from "../../assets/images/mentoria/acompanhamento.png";

const Mentoria = () => {
  return (
    <main className={style.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
            img={mentoria}
            alt="Imagem com as mãos de três pessoas em uma mesa."
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo1="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            btn="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={cExperiencia}
            alt="Imagem com cinco pessoas compartilhando experiências."
            subtitulo="Compartilhe Experiência"
            paragrafo1="Oriente jovens e profissionais iniciantes em sua área."
            btn="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={Acompanhamento}
            alt="Imagem com duas mulheres fazendo acompanhamento."
            subtitulo="Acompanhamento"
            paragrafo1="Participe como guia em jornadas de aprendizado e desenvolvimento."
            btn="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Mentoria;

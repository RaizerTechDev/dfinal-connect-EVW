import s from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import Reciclagem from "../../assets/images/voluntariado/reciclagem.png";
import aulasTech from "../../assets/images/voluntariado/aulasTech.png";
import Esporte from "../../assets/images//voluntariado/esporte.png";

const Voluntariado = () => {
  return (
    <main className={s.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard
            img={Reciclagem}
            alt="Imagem de três pessoas carregando caixas de reciclagem."
            subtitulo="Mutirão de reciclagem"
            paragrafo1="Coletar materiais recicláveis e orientar sobre descarte consciente."
            btn="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={aulasTech}
            alt="Imagem de três pessoas fazendo aula de informática."
            subtitulo="Aulas de Tecnologia"
            paragrafo1="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            btn="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={Esporte}
            alt="Imagem de pessoas se exercitando."
            subtitulo="Esporte e Inclusão"
            paragrafo1="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            btn="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Voluntariado;

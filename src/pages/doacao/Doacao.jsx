import style from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import igFamilia from "../../assets/images/doacao/igFamilia.png";
import pgEscola from "../../assets/images/doacao/pgEscola.png";
import Conecta from "../../assets/images/doacao/conecta.png";

const Doacao = () => {
  return (
    <main className={style.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
            img={igFamilia}
            alt= "Imagem de uma pessoa carregando uma caixa com alimentos."
            subtitulo= "Instituto grande familia"
            paragrafo1= "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            btn = "Quero Doar"
             alertMessage="Doado com sucesso!"
          />
        </article>
        <article>
          <InfoCard
            img={pgEscola}
            alt="Imagem de com cinco livros e uma estante de livros ao fundo."
            subtitulo="Projeto Futuro na Escola"
            paragrafo1="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            btn="Quero Doar"
             alertMessage="Doado com sucesso!"
          />
        </article>
        <article>
          <InfoCard
            img={Conecta}
            alt="Imagem com duas pessoas montando computadores."
            subtitulo="Instituto Conecta Jovem"
            paragrafo1="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            btn="Quero Doar"
             alertMessage="Doado com sucesso!"
          />
        </article>
      </section>
    </main>
  );
};

export default Doacao;

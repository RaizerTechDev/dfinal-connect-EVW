import style from "./paginainicial.module.scss";
import banner from "../../assets/images/banner.png";
const PaginaInicial = () => {
  return (
    <main className={style.main}>

      <section className={style.info}>
        <h1>Projetos Sociais que transformam</h1>
        <p>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
        <button>Cadastrar Empresa ➔</button>

        <section className={style.infoDados}>
          <article>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
          </article>
          <article>
            <h2>1.2K+</h2>
            <h3>Projetos Realizados</h3>
          </article>
          <article>
            <h2>50K+</h2>
            <h3>Vidas Impactadas</h3>
          </article>
        </section>
      </section>
      <img
        src={banner}
        alt="Impacto social e conexão global"
      />
    </main>
  );
};

export default PaginaInicial;

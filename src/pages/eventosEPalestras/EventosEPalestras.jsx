import style from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import jovensFuturo from "../../assets/images/eventos/jovensFuturo.png";
import Tecnologia from "../../assets/images/eventos/tecnologia.png";
import Carreira from "../../assets/images/eventos/carreira.png";

const EventosEPalestras = () => {
  return (
      <main className={style.main}>
            <h1>Eventos & Palestras</h1>
                  <section>
                          <article>
                                    <InfoCard
                                                img={jovensFuturo}
                                                            alt="Imagem com as mãos de três pessoas em uma mesa."
                                                                        subtitulo="Empoderando Jovens para o Futuro"
                                                                                    paragrafo1="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
                                                                                                paragrafo2="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
                                                                                                            btn="Quero Participar"
                                                                                                                      />
                                                                                                                              </article>
                                                                                                                                      <article>
                                                                                                                                                <InfoCard
                                                                                                                                                            img={Tecnologia}
                                                                                                                                                                        alt="Imagem com cinco pessoas compartilhando experiências."
                                                                                                                                                                                    subtitulo="Tecnologia que Transforma"
                                                                                                                                                                                                paragrafo1="Atividade: Workshop de introdução à programação e inovação digital."
                                                                                                                                                                                                            paragrafo2="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
                                                                                                                                                                                                                        btn="Quero Participar"
                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                          </article>
                                                                                                                                                                                                                                                  <article>
                                                                                                                                                                                                                                                            <InfoCard
                                                                                                                                                                                                                                                                        img={Carreira}
                                                                                                                                                                                                                                                                                    alt="Imagem com duas mulheres fazendo acompanhamento."
                                                                                                                                                                                                                                                                                                subtitulo="Carreira e Primeiro Emprego"
                                                                                                                                                                                                                                                                                                            paragrafo1="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
                                                                                                                                                                                                                                                                                                                        paragrafo2="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
                                                                                                                                                                                                                                                                                                                                    btn="Quero Participar"
                                                                                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                                                                                      </article>
                                                                                                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                                                                                                                </main>
                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                  };

                                                                                                                                                                                                                                                                                                                                                                  export default EventosEPalestras;
                                                                                                                                                                                                                                                                                                                                                                  
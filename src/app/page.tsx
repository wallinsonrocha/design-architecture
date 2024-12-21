"use client"
import './page.css'
import Galery from "./galery";

export default function Home() {
  return (
    <div>
      <main>
        <section id="servico">
          <div className="servico__titulo">
            <p className="tagline">Grandes Projetos</p>
            <h3>Descubra como podemos ajudar você a criar ambientes únicos e funcionais.</h3>
            <p>
              Oferecemos um serviço de arquitetura completo e personalizado, onde cada projeto é pensado para
              atender às suas necessidades. Do conceito à execução, trabalhamos com cuidado, criatividade e
              precisão para oferecer resultados além das expectativas.
            </p>
          </div>

          <div className="servico__container">
            <div className="servico__cards">
              <div className="servico__content">
                <div className="servico__serv">
                  <p>Projetos Residenciais</p>
                </div>
                <h3>Transformando Espaços com Elegância e Funcionalidade</h3>
                <p>
                  Nós acreditamos que cada espaço deve refletir quem você é. Seja em sua casa, 
                  escritório ou em um ambiente comercial, nossa missão é transformar sonhos em realidade, 
                  criando lugares sofisticados e funcionais.
                </p>
              </div>
            </div>
            <div id="proj-residencial">
              <Galery name="interior design" />
            </div>
          </div>

          <div className="servico__container">
            <div className="servico__cards">
              <div className="servico__content">
                <div className="servico__serv">
                  <p>Projetos Comercial</p>
                </div>
                <h3>Soluções arquitetônicas para empresas</h3>
                <p>
                  Cada ambiente reflete um pouco de quem você é. Nós transformamos sonhos em realidade,
                  criando espaços únicos e personalizados para você viver, trabalhar e relaxar, com
                  sofisticação e funcionalidade.
                </p>
              </div>
            </div>
            <div id="proj-comercial">
              <Galery name="commercial architecture" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import './page.css'
import Galery from "./galery";

export default function Home() {
  return (
    <div>
      <main>
        <section id="servico">
          <div className="servico__titulo">
            <p className="tagline">Nossos Serviços</p>
            <h3>Descubra Como Podemos Ajudar Você</h3>
            <p>
              Oferecemos soluções completas e personalizadas para atender às suas necessidades. Cada etapa é
              planejada com cuidado e executada com excelência, garantindo resultados acima das expectativas.
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
                  Cada ambiente reflete um pouco de quem você é. Nós transformamos sonhos em realidade,
                  criando espaços únicos e personalizados para você viver, trabalhar e relaxar, com
                  sofisticação e funcionalidade.
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
                <h3>Transformando Espaços com Elegância e Funcionalidade</h3>
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

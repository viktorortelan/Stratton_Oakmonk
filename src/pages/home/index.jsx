import './index.scss'
import Banner from '../../assets/images/banner.png';

export default function Home() {
    
    return (
        <div className='pagina-Home'>
            <div className='cabecalho'>
                <img src="/assets/images/logo.png" alt="" />
                <p>Home</p>
                <p>Modelos</p>
            </div>

            <div className='banner' style={{backgroundImage:  `url(${Banner})` }}>
               
                <div className='risco'></div>

                <div className="cubo">
                
                    <div className="infos">
                        <h1>Crie um site sem limites</h1>
                        <p>Crie e dimensione com confiança. De um poderoso criador de sites a soluções empresariais avançadas — nós temos tudo o que você precisa.</p>
                        <button>Iniciar</button>
                    </div>

                    <img src="/assets/images/fotoBanner.png" alt="." />

                </div>
            </div>

            <div className='menu-info'>
                <h1>Uma plataforma, infinitas possibilidades</h1>

                <div className='cards-menu'>
                    <div className='card'>
                        <hr/>

                        <h3>Crie um site</h3>
                        <p>Crie com um conjunto completo de ferramentas intuitivas com nossa equipe poderosa para criar o site que você deseja. </p>

                    </div>

                    <div className='card'>
                        <hr/>

                        <h3>Gerencie seu negócio</h3>
                        <p>Simplifique seu dia a dia com soluções empresariais integradas, adaptadas às suas necessidades.</p>

                    </div>

                    <div className='card'>
                        <hr/>

                        <h3>Cresça online</h3>
                        <p>Expanda seu alcance e monetize seu site com ferramentas integradas criadas para seu sucesso.</p>

                    </div>
                </div>

                <button>Iniciar</button>
            </div>

            <div className='menu-modelos'>
  <h1>Modelos de sites que preparam você para o sucesso</h1>
  <p>Comece sua jornada com Stratton Oakmont e personalize, estrategicamente pesquisados ​​e adaptados para cada setor — ou comece do zero com nossa equipe.</p>
  <button>Iniciar</button>

  <div className='carousel'>
    <div className='carousel-track'>
      <div className="card">
        <img className='carousel-slide' src="/assets/images/porte.png" alt="Portfolio" />
        <p>Portfolio</p>
      </div>
      <div className="card">
        <img className='carousel-slide' src="/assets/images/negocios.png" alt="Negócios" />
        <p>Negócios</p>
      </div>
      <div className="card">
        <img className='carousel-slide' src="/assets/images/food.png" alt="Restaurantes" />
        <p>Restaurantes</p>
      </div>
      <div className="card">
        <img className='carousel-slide' src="/assets/images/porte.png" alt="Portfolio" />
        <p>Portfolio</p>
      </div>
      <div className="card">
        <img className='carousel-slide' src="/assets/images/negocios.png" alt="Negócios" />
        <p>Negócios</p>
      </div>
      
      <div className="card">
        <img className='carousel-slide' src="/assets/images/porte.png" alt="Portfolio" />
        <p>Portfolio</p>
      </div>
      <div className="card">
        <img className='carousel-slide' src="/assets/images/negocios.png" alt="Negócios" />
        <p>Negócios</p>
      </div>
      <div className="card">
        <img className='carousel-slide' src="/assets/images/food.png" alt="Restaurantes" />
        <p>Restaurantes</p>
      </div>
    </div>
  </div>
</div>

            <div className='info-final'>

                <div>
                    <h1>Crie mais do que um site</h1>
                </div>

                <div className='info'>
                    <p>Obtenha hospedagem web segura, um domínio personalizado e uma solução empresarial completa sob medida para suas necessidades. Então, não importa se você está vendendo online, iniciando um blog, construindo uma comunidade ou qualquer outra coisa — seu site fará mais do que apenas ter uma boa aparência, ele será o cerne do seu negócio.</p>
                    <button>Iniciar</button>
                </div>

            </div>

            <div className='rodape'>
                <div className='top'>
                    <p>Stratton Oakmonk</p>

                    <div className='images'>
                        <img src="/assets/images/insta.png" alt="" />
                        <img src="/assets/images/linkedin.png" alt="" />
                        <img src="/assets/images/zap.png" alt="" />
                    </div>
                </div>

                <div className='mid'>
                    <h4>Paginas</h4>
                    <p>Home</p>
                    <p>Modelos</p>
                </div>

                <hr/>

                <div className='bot'>
                    <p>FEEL GOOD INC - Stratton oakmont S/A. – CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo</p>
                </div>
            </div>
        </div>
    );

}
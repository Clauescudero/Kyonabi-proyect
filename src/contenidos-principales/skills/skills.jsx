const Skills = () => {
    return (
        <div id="Skills-container" className="contenidos-materiales">
          <div className='title-creatividad'>
            <h1>Habilidades Blandas</h1>
              <p>
              Las habilidades blandas o Soft Skills son un conjunto de competencias que van más allá de nuestros conocimientos técnicos y académicos. Son las cualidades personales que nos definen como individuos y nos permiten relacionarnos de manera efectiva con los demás en diferentes situaciones.
              </p>
          </div>
          <div className="main-content">
            <div className="cards-container">
              <div className="card">
                <div className="card-content">
                  <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                  />
                  <div className="card-text">
                    <h1>video 1</h1>
                    <p>Texto descriptivo del video, imagen o enlace</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                  />
                  <div className="card-text">
                    <h1>video 2</h1>
                    <p>Texto descriptivo del video, imagen o enlace</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                  />
                  <div className="card-text">
                    <h1>video 3</h1>
                    <p>Texto descriptivo del video, imagen o enlace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Skills;

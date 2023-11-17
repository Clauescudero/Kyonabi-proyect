const Matematica = () => {
    return (
        <div id="Matematica-container" className="contenidos-materiales">
          <div className='title-creatividad'>
            <h1>Matematicas</h1>
              <p>
              Las matemáticas son una ciencia formal, que estudia la relación entre entes o elementos abstractos, como son los números, los signos y las figuras.
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
            <aside className='sidebar'>
              Recuerda usar nuestro foro si tienes alguna duda o quieres saber más a fondo!
            </aside>
          </div>
        </div>
      );
    };

export default Matematica;

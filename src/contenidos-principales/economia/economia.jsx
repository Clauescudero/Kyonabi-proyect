const Economia = () => {
    return (
        <div id="Economia-container" className="contenidos-materiales">
          <div className='title-creatividad'>
            <h1>Economia Personal</h1>
              <p>
              La economía personal es la administración de los recursos financieros de una persona para satisfacer sus necesidades y objetivos financieros.
              <br /> Incluye la planificación financiera, el presupuesto, el ahorro, la inversión y la gestión de la deuda.
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

export default Economia;

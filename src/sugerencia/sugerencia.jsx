import './sugerencia.css'
import Button from './boton';
const Suger = () => {
  return (
    <>

      <div className='formurario'>
        <section className='seccion-sugerencia-text'>
          <h1>Sugerencias</h1>
          <div>
            <p>
              ¡Tu opinión es importante para nosotros! Por eso, hemos dispuesto este canal para recibir tus sugerencias, reclamos y comentarios en el siguiente formulario.
              <br />
              Completa y entréganos el máximo de antecedentes, esto nos permitirá canalizarlos de mejor forma.
            </p>
          </div>
        </section>
        <div className='container-suge'>
          <form className='form'>
            <div className='input'>
              <label > Nombre</label><span>*</span>
              <br />
              <input type='text' placeholder='nombre' name='busqueda' autoComplete='off' />
            </div>
            <div className='input'>
              <label > Apellido </label><span>*</span>
              <br />
              <input type='text' placeholder="apellido" name='busqueda' autoComplete='off' />
            </div>
            <div className='input'>
              <label For="email" > Email</label><span>*</span>
              <br />
              <input id="email" type='text' placeholder='ejemplo@gmail.com' name='busqueda' autoComplete='off' />
            </div>
            <br />

            <div className='seccion-text-area'>
              <textarea className="text-area" placeholder="Escribe tu sugerencia..." name="ingresar" id="" cols="40" rows="4">
              </textarea>
              <br />
              <Button />
            </div>
          </form>
        </div>
      </div>
    </>



  )
}

export default Suger;
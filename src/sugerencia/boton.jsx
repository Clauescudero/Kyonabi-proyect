import './boton.css'

const Button = () => {
    return(
      <div className='botones'>
         <button type="submit" id='btnf'>
            <span>enviar</span>
            </button>
          <button type='reset' id='btnf'>
            <span>resetear</span>
            </button>
      </div>

    )
}

export default Button;
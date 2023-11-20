import './boton.css'

const Button = () => {
  return (
    <div className='botones'>
      <button type="submit" id='btnf'>
        <span>Enviar</span>
      </button>
      <button type='reset' id='btnf'>
        <span>Resetear</span>
      </button>
    </div>

  )
}

export default Button;
import {Link} from 'react-router-dom'
function CardRazaPerros({nombreRaza, imagen}){
    return(
      <li className="bleedCard backGroundCard" >
        <Link to='/aboutB'>
       <div className="contenedorImagen"><img src={imagen} alt={nombreRaza}/>
        </div>
        </Link>
        <span className="bleedTitle">{nombreRaza}</span>
        
      </li>
    )
  }

  export default CardRazaPerros;
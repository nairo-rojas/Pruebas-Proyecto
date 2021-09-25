
import logo from 'media/logo.ico';

const header = ()=>{return(
<div>
<ul className="navbar">
          <li><img src={logo} alt="imagen" className="logo"></img>
          </li>
          <li><button className="botonGenerico mainButton ">Nuevo Post</button></li>
          <li>
            <div className="buscar">
               <input placeholder="Buscar una raza" type="" value=""></input>
              <i className="fas fa-search botonGenerico iconeBusqueda"></i>
            </div>
          </li>
            <li><button className="botonGenerico secundaryButton ">Login</button>
            </li>
            <li><button className="botonGenerico mainButton ">Registrarse</button>
            </li>
        </ul>
</div>
)}

export default header;

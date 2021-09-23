import './styles/App.css';
import logo from './media/logo.ico';
import borderCollie from './media/Border-collie.ico';
import rodesian from './media/Rodesian.ico';
function App() {
  return (
    <div classNameName="App">
      <header>
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
      </header>   

      <body>
        <section>
            <h1 className="title">Razas de Perros</h1>
            <ul className="bleedCardContainer ">
                <li className="bleedCard">
                    <div className="contenedorImagen"><img src={borderCollie} alt=" "></img>
                    </div>
                    <span className="bleedTitle">Border-collie</span>
                </li>
                <li className="bleedCard ">
                    <div className="contenedorImagen"><img src={rodesian} alt=" "></img>
                    </div>
                    <span className="bleedTitle">Rodesian</span>
                </li>
            </ul>
        </section>
        <section></section>
      </body>
    <footer></footer>
   </div>
  );
}

export default App;

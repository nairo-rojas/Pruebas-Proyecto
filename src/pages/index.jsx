import CardRazaPerros from 'components/cardRazaPerros';
import Rhodesian from 'media/Rodesian.ico';
import BorderCollie from 'media/Border-collie.ico';


function Index(){
    return(
     <section>
      <h1 className="title">Razas de Perros</h1>
        <ul className="bleedCardContainer ">
         <CardRazaPerros nombreRaza= "Border-collie" imagen = {BorderCollie}/>
         <CardRazaPerros nombreRaza= "Rhodesia" imagen = {Rhodesian}/>
         <CardRazaPerros nombreRaza= "Rhodesia" imagen = {Rhodesian}/>
         <CardRazaPerros nombreRaza= "Rhodesia" imagen = {Rhodesian}/>
        </ul>
     </section>
         
     
    )
}
export default Index;
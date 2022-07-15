import emoticon from '../Imagenes/emoticon.png';

const Titulo = () => (
    <div className='titulo-contenedor'>
      <h1 className='letraTitulo'>Mi Proyecto de Calculadora</h1>
        <img 
          src={emoticon}
          className='emoticon'
          alt='Smile Face :)' />
       </div>
);

export default Titulo;
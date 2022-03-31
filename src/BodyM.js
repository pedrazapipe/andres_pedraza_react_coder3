import imgCarruselUno from './carrusel1.jpg';

import imgCarruselDos from './carrusel2.jpg';

import imgCarruselTres from './carrusel3.jpg';

import imgCarruselCuatro from './carrusel4.jpg';

import imgCarruselCinco from './carrusel5.jpg';

const BodyM = () => {

    return(

        <>
            <div className="body__main">

                <h1 className="titulo__pedidos">Productos más pedidos</h1>

                    <ul>

                        <li>

                            <img src={imgCarruselUno}/>

                        </li>


                        <li>

                            <img src={imgCarruselDos}/>

                        </li>

                        <li>

                            <img src={imgCarruselTres}/>

                        </li>

                        <li>

                            <img src={imgCarruselCuatro}/>

                        </li>

                        <li>

                            <img src={imgCarruselCinco}/>

                        </li>


                    </ul>

            </div>


        </>

    );
};

export default BodyM;
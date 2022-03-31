/* Inicio Header pagina */

import CartWidget from "./CartWidget";

const Navbar = () => {

    return (

        <header>
    
            <h1 className="header__titulo">FunkoPops<a href=""></a></h1>

                <nav className="header__navegacion">

                    <ul>

                        <li><a href="">Redes sociales</a></li>              
                        <li><a href="">Productos</a></li>  
                        <li><a href="">Contacto</a></li>  
        
                    </ul>

                    <div className="header__carrito">

                        {CartWidget}

                    </div>

                </nav>

        
        </header>

    );

};

export default Navbar;

/* Final Header pagina */

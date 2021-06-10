import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4 padding-bottom-4 padding-top-2 ">
    {/* //<nav className="navbar navbar-expand-lg navbar-dark bg-primary"> */}
        <div className="container">
            <Link to="/" className="navbar-brand text-light font-weight-bold">A.C.V.R.N.R.</Link>
            {/* <a className="navbar-brand text-light font-weight-bold">CRM</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
                        {/* <Link to="/cliente/nuevo" className="btn btn-success mr-2">
                            Nuevo cliente
                        </Link>
                         // <a className="btn btn-success">Nuevo Cliente</a> 
                        <Link to="/productos/nuevo" className="btn btn-success">
                            Nuevo producto
                        </Link> */}
                        <Link className="nav-link active" to="/" href="/">Home
                            <span className="visually-hidden">(current)</span>
                        </Link>
                       
                    </li>
                    <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
                        <button
                            className="nav-link dropdown-toogle btn btn-block btn-primary"
                            data-toggle="dropdown" //para ejecutar el codigo de bootstrap - menu colapsable
                        >
                            Ingresar Caso
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navegacion" >  
                            <Link to="/ingresar-homicidio" className="dropdown-item">
                                Homicidio
                            </Link>
                            <Link to="/ingresar-incendio" className="dropdown-item">
                                Incendio/Bombardeo
                            </Link>
                            <Link to="/en-progreso" className="dropdown-item">
                                Violación/Agresión Sexual
                            </Link>
                            <Link to="/en-progreso" className="dropdown-item">
                                No letales
                            </Link>
                            <Link to="/en-progreso" className="dropdown-item">
                                Delito Informático
                            </Link>
                        </div>
                    </li>   
                    <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
                        <button
                            className="nav-link dropdown-toogle btn btn-block btn-primary"
                            data-toggle="dropdown" //para ejecutar el codigo de bootstrap - menu colapsable
                        >
                            Buscar Caso
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navegacion" >  
                            <Link to="/en-progreso" className="dropdown-item">
                                Homicidio
                            </Link>
                            <Link to="/en-progreso" className="dropdown-item">
                                Incendio/Bombardeo
                            </Link>
                            <Link to="/en-progreso" className="dropdown-item">
                                Violación/Agresión Sexual
                            </Link>
                            <Link to="/en-progreso" className="dropdown-item">
                                No letales
                            </Link>
                            <Link to="/en-progreso" className="dropdown-item">
                                Delito Informático
                            </Link>
                        </div>

                    </li>
                    <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
                        <button
                            className="nav-link dropdown-toogle btn btn-block btn-primary"
                            data-toggle="dropdown" //para ejecutar el codigo de bootstrap - menu colapsable
                        >
                            Casos fríos
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navegacion" >  
                            <Link to="/productos" className="dropdown-item">
                                Ingresar
                            </Link>
                            <Link to="/productos/nuevo" className="dropdown-item">
                                Buscar
                            </Link>
                            
                        </div>

                    </li>
                    <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
                        <button
                            className="nav-link dropdown-toogle btn btn-block btn-danger"
                            data-toggle="dropdown" //para ejecutar el codigo de bootstrap - menu colapsable
                        >
                            Salir
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
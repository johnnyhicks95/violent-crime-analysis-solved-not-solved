import React from 'react'
import CausaDeMuerte from './CausaDeMuerte'
import EscenaCrimen from './EscenaCrimen'
import PistasForenses from './PistasForenses'
import SobreAgresor from './SobreAgresor'
import Victimologia from './Victimologia'

const Homicidio = () => {
    return (
        <>
        <form >
            <div className="container mb-5">
                <div className="row">
                    <div className="col">
                        <h2>Homicidio</h2>
                        <span>Código: 100 - 199</span>
                    </div>
                    <div className="col">
                        <label htmlFor="homicidio-subc" >Subcategoría:</label>
                        <select className="form-select" aria-label="Default select example" id="homicidio-subc" >
                            <option selected>Seleccione la agrupación </option>
                            <option value="100">100: Asociación Criminal</option>
                            <option value="101">101: Asesinato por contrato</option>
                            <option value="102">102: Secuestro asesinato</option>
                            <option value="103">103: Asesinato mayor</option>
                            <option value="104">104: Asesinato por drogas</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="espec">Específico:</label>
                        <select className="form-select" aria-label="Default select example" id="espec">
                            <option selected>Seleccione la clasificación específica</option>
                            <option value="1">.01: Asesinato indiscrimando</option>
                            <option value="2">.02: Asesinato situacional</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="form-row mb-2">
                <div className="row">
                    <div className="col">
                        <Victimologia/>
                        
                    </div>
                    <div className="col">
                        <EscenaCrimen />
                    </div>
                    <div className="col">
                        <CausaDeMuerte />
                    </div>
                </div>
            </div>
            <hr/>
            <div className="form-row mb-2">
                <div className="row">
                    <div className="col">
                        <PistasForenses />
                    </div>
                    <div className="col">
                        <SobreAgresor/> 
                    </div>
                </div>
            </div>
            <div className="offset-8 mt-2">
                <input type="reset" className="rounded-2 "></input>
                <buton type="submit" className="btn btn-info float-right">Enviar</buton>
            </div>
        </form>


    </>
    )
}

export default Homicidio


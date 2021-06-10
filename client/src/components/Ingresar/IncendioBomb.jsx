import React from 'react'
import LugarIncendio from './LugarIncendio'
import SobreAgresor from './SobreAgresor'
import Victimologia from './Victimologia'

const IncendioBomb = () => {
    return (
        <>
            

            <form>
            <div className="container mb-5">
                <div className="row">
                    <div className="col">
                        <h2>Incendio/Bombardeo</h2>
                        <span>Código: 200 - 299</span>
                    </div>
                    <div className="col">
                        <label htmlFor="homicidio-subc" >Subcategoría:</label>
                        <select className="form-select" aria-label="Default select example" id="homicidio-subc" >
                            <option selected>Seleccione la agrupación </option>
                            <option value="200">200: Incendio provocado por vandalismo</option>
                            <option value="201">201: Travesuras intencionales y maliciosas</option>
                            <option value="202">202: Presión de grupo</option>
                            <option value="210">210: Incendio provocado por la emoción</option>
                            <option value="220">220: Incendio provocado por venganza</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="espec">Específico:</label>
                        <select className="form-select" aria-label="Default select example" id="espec">
                            <option selected>Seleccione la clasificación específica</option>
                            <option value="1">.01: Experimentación con fuego/explosivos</option>
                            <option value="2">.02: Informar/provocar falsas alarmas</option>
                            <option value="">.03: Dispositivos de engaño</option>
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
                        <LugarIncendio  />
                    </div>
                    <div className="col">
                        <SobreAgresor />
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

export default IncendioBomb

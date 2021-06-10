import React from 'react'

const Homicidio = () => {
    return (
        <>
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col">
                        <h2>Homicidio</h2>
                        <span>Código: 100 - 199</span>
                    </div>
                    <div className="col">
                        <span>Subcategoría:</span>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Seleccione la agrupación </option>
                            <option value="100">100: Asociación Criminal</option>
                            <option value="101">101: Asesinato por contrato</option>
                            <option value="102">102: Secuestro asesinato</option>
                            <option value="103">103: Asesinato mayor</option>
                            <option value="104">104: Asesinato por drogas</option>
                        </select>
                    </div>
                    <div className="col">
                        <span>Específico:</span>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Seleccione la clasificación específica</option>
                            <option value="1">.01: Asesinato indiscrimando</option>
                            <option value="2">.02: Asesinato situacional</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container mb-2">
                <div className="row">
                    <div className="col">
                        <h3>Victimología</h3>
                    </div>
                    <div className="col">
                        <h3>Lugar del crimen</h3>
                    </div>
                    <div className="col">
                        <h3>Escena</h3>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container mb-2">
                <div className="row">
                    <div className="col">
                        <h3>Pistas forenses</h3>
                    </div>
                    <div className="col">
                        <h3>Sobre el agresor</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Homicidio


import React from 'react'

const EscenaCrimen = () => {
    return (
        <>
            <h3>Escena del crimen</h3>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label>Cuántas víctimas? </label>
                        {/* <div className="input-group-text">#</div> */}
                    </div>
                    <input
                        type="number"
                        name="precio"
                        className="form-control"
                        placeholder="Número de víctimas"
                        // onChange={this.actualizarState}
                    />
                    </div>
                </div>
            <div className="mt-2">
                <h5>Lugar del hecho</h5>
                <div >
                    <label>Provincia</label>
                    <select className="form-control"
                        
                    >
                        <option value="">Elegir...</option>
                        <option value="PICHINCHA">Pichincha</option>
                        <option value="CHIMBORAZO">Chimborazo</option>
                        <option value="TUNGURAHUA">Tungurahua</option>
                    </select>
                </div>
                <div >
                    <label>Ciudad</label>
                    <select className="form-control"
                        
                    >
                        <option value="">Elegir...</option>
                        <option value="QUITO">Quito</option>
                        <option value="AMBATO">Ambato</option>
                        <option value="RIOBAMBA">Riobamba</option>
                    </select>
                </div>

                <div className="mt-2">
                    <fieldset class="row">
                        <legend class="col-form-label">Tipo de organización :</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="tipo-agresion" value="organizado" />
                                <label class="form-check-label" for="tipo-agresion">
                                Organizado
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="tipo-agresion" value="desorganizado" />
                                <label class="form-check-label" for="tipo-agresion">
                                Desorganizado
                                </label>
                            </div>
                        
                        </div>
                    </fieldset>
                </div>

                <div className="mt-2">
                    <label>Disposición corporal</label>
                    <select className="form-control"
                        
                    >
                        <option value="">Elegir...</option>
                        <option value="ABIERTO">Abierto</option>
                        <option value="ESCONDIDO">Escondido</option>
                    </select>
                </div>

                <div className="mt-2">
                    <label>Testigos</label>
                    <select className="form-control"
                        
                    >
                        <option value="">Elegir...</option>
                        <option value="NIGUNO">Ninguno</option>
                        <option value="ALMENOSUNO">Al menos uno</option>
                        <option value="VARIOS">Varios</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default EscenaCrimen

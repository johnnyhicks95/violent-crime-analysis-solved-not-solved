import React from 'react'

const Victimologia = () => {
    return (
        <>
            <h3>Victimología</h3>
            <div >
                <label>Estilo de vida</label>
                <select className="form-control"
                    
                >
                    <option value="">Elegir...</option>
                    <option value="INTROVERTIDO">Dominante(agresivo,poco social)</option>
                    <option value="EXTROVERTIDO">Obtenedor(pide, nuna da)</option>
                    <option value="EXTROVERTIDO">Evitativo(no afronta)</option>
                    <option value="EXTROVERTIDO">Útil (interés social)</option>
                </select>
            </div>

            <div className="mt-2">
                <label>Empleo</label>
                <select className="form-control"
                    
                >
                    <option value="">Elegir...</option>
                    <option value="EMPLEADO">Empleado</option>
                    <option value="BRERO">Obrero</option>
                    <option value="SINTRABAJO">Sin trabajo</option>
                </select>
            </div>

            <div className="mt-2">
                <label>Personalidad</label>
                <select className="form-control"
                    
                >
                    <option value="">Elegir...</option>
                    <option value="REFLEXEXTRAVERTIDO">Reflexivo Extravertido</option>
                    <option value="REFLEXINTROVERTIDO">Reflexivo Introvertido</option>
                    <option value="SENTIEXTRAVERTIDO">Sentimental Extravertido</option>
                    <option value="SENTIINTROVERTIDO">Sentimental Introvertido</option>
                </select>
            </div>

            <div className="mt-2">
                <fieldset class="row">
                    <legend class="col-form-label">Uso de alcohol/drogas :</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="alcohol/drogas" value="sí-drogas" />
                            <label class="form-check-label" for="alcohol/drogas">
                            Sí
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="alcohol/drogas" value="no-drogas" checked/>
                            <label class="form-check-label" for="alcohol/drogas">
                            No
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </div>
            <div className="mt-2">
                <fieldset class="row">
                    <legend class="col-form-label">Tiene historial criminal :</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="historialcriminal" id="historialcriminal" value="sí-historial" />
                            <label class="form-check-label" for="historialcriminal">
                            Sí
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="historialcriminal" id="historialcriminal" value="no-historial" checked/>
                            <label class="form-check-label" for="gridRadios2">
                            No
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </div>

            <div className="mt-2">
                <label>Posibilidad de ser víctima :</label>
                <select className="form-control"
                    
                >
                    <option value="">Elegir...</option>
                    <option value="NINGUNO">Ninguno</option>
                    <option value="BAJO">Bajo</option>
                    <option value="ALTO">Alto</option>
                </select>
            </div>

        </>
    )
}

export default Victimologia

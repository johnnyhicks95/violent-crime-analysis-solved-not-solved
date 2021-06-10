import React from 'react'

const SobreAgresor = () => {
    return (
        <>
            <h3>Sobre el agresor</h3>

            <div className="mt-2">
                <fieldset class="row">
                    <legend class="col-form-label">Víctima conocida por el agresor :</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="historialcriminal" id="victimaconocida" value="sí" />
                            <label class="form-check-label" for="victimaconocida">
                            Sí
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="victimaconocida" id="victimaconocida" value="no"/>
                            <label class="form-check-label" for="gridRadios2">
                            No
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </div>

            <div className="mt-2">
                <fieldset class="row">
                    <legend class="col-form-label">Arma usada por el agresor :</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="historialcriminal" id="arma-usada" value="sí" />
                            <label class="form-check-label" for="arma-usada">
                            Escogida
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="arma-usada" id="arma-usada" value="no"/>
                            <label class="form-check-label" for="gridRadios2">
                            Oportuna
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="arma-usada" id="arma-usada" value="no"/>
                            <label class="form-check-label" for="gridRadios2">
                            Ausente
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </div>

            <div className="mt-2">
                <label>Tipo de arma usada</label>
                <select className="form-control"
                    
                >
                    <option value="">Elegir...</option>
                    <option value="NIGUNO">Arrojamiento</option>
                    <option value="PROYECCION">Proyección</option>
                    <option value="FUEGO">Fuego</option>
                    <option value="CORTOPUNZANTE">Cortopunzante</option>
                    <option value="VARIOS">Varios</option>
                </select>
            </div>

            <div className="mt-2">
                <fieldset class="row">
                    <legend class="col-form-label">Hora del día :</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="historialcriminal" id="hora-dia" value="día" />
                            <label class="form-check-label" for="hora-dia">
                            Día
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="hora-dia" id="hora-dia" value="noche"/>
                            <label class="form-check-label" for="gridRadios2">
                            Noche
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </div>

            <div className="mt-2 mb-4">
                <label>Cuánto permaneció en la escena</label>
                <select className="form-control"
                    
                >
                    <option value="">Elegir...</option>
                    <option value="MINUTOS">Minutos</option>
                    <option value="HORAS">Horas</option>
                    <option value="DÍAS">Días</option>
                </select>
            </div>

            <div className="mt-2 ">
                <fieldset class="row">
                    <legend class="col-form-label">Nivel de sofisticación :</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="historialcriminal" id="hora-dia" value="organizado" />
                            <label class="form-check-label" for="hora-dia">
                            Organizado
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="hora-dia" id="hora-dia" value="desorganizado"/>
                            <label class="form-check-label" for="gridRadios2">
                            Desorganizado
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </div>

            <div class="form-group mb-2">
                <label for="indicador-personalidad" class="form-label mt-4">Indicadores de personalidad</label>
                <textarea class="form-control" id="indicador-personalidad" placeholder="Describa los posibles indicadores" rows="3"></textarea>
            </div>

        </>
    )
}

export default SobreAgresor

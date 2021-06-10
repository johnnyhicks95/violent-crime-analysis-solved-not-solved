import React from 'react'

const LugarIncendio = () => {
    return (
        <div>
            <h3>Lugar del crimen</h3>

            <div className="mt-2">
                    <fieldset class="row">
                        <legend class="col-form-label">Propiedad objetivo :</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="residencial" value="residencial" />
                                <label class="form-check-label" for="residencial">
                                Residencial
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="residencial" value="comercial" />
                                <label class="form-check-label" for="residencial">
                                Comercial
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="residencial" value="educativo" />
                                <label class="form-check-label" for="residencial">
                                Educativo
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="residencial" value="vehiculo" />
                                <label class="form-check-label" for="residencial">
                                Vehículo
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="residencial" value="bosque" />
                                <label class="form-check-label" for="residencial">
                                Bosque
                                </label>
                            </div>
                        
                        </div>
                    </fieldset>
                </div>
        </div>
    )
}

export default LugarIncendio

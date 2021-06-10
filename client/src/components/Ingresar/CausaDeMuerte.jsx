import React from 'react'

const Escena = () => {
    return (
        <div>
            <h3>Escena</h3>

            <div>
                <fieldset class="row">
                    <legend class="col-form-label">Cómo se encontró a la víctima :</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="causamuerte" value="muerte-natural" />
                            <label class="form-check-label" for="causamuerte">
                            Muerte natural
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="causamuerte" value="accidental" />
                            <label class="form-check-label" for="causamuerte">
                            Accidental
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="causamuerte" value="suicidio" />
                            <label class="form-check-label" for="causamuerte">
                            Suicidio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="causamuerte" value="criminal" />
                            <label class="form-check-label" for="causamuerte">
                            Criminal
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </div>

        </div>
    )
}

export default Escena

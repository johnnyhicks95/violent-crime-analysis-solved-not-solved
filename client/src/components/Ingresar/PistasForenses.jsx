import React from "react";

const PistasForenses = () => {
  return (
    <>
      <h3>Análisis forense</h3>

      <div>
        <fieldset class="row">
          <legend class="col-form-label">
            Pistas encontradas :
          </legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="gridRadios"
                id="pistas-forenses"
                value="muerte-natural"
              />
              <label class="form-check-label" for="pistas-forenses">
                Cabello/fibras
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="gridRadios"
                id="pistas-forenses"
                value="accidental"
              />
              <label class="form-check-label" for="pistas-forenses">
                Sangre
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="gridRadios"
                id="pistas-forenses"
                value="suicidio"
              />
              <label class="form-check-label" for="pistas-forenses">
                Semen
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="gridRadios"
                id="pistas-forenses"
                value="criminal"
              />
              <label class="form-check-label" for="pistas-forenses">
                Saliva
              </label>
            </div>
          </div>
        </fieldset>
      </div>


    </>
  );
};

export default PistasForenses;

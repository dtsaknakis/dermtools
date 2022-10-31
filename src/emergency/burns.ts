/* Parkland Formula for Burns */
// Sources: https://www.mdcalc.com/calc/83/parkland-formula-burns

/** 
 * Calculates fluid requirements, in liters, for burn patients in the 
 * first 24h.
 * Accepts the patient's weight in kg and the estimated total body 
 * surface area burned in %. Returns the total amount of fluids 
 * required in the first 24 hours, half of which is given the first 
 * 8 hours from the burn, the second half of which should be given in 
 * the next 16 hours.
 */
export const parkland = (weight: number, totalBSA: number) => {
    if (weight < 0 || totalBSA < 0 || totalBSA > 100) {
        return undefined;
    } else {
        let result = (totalBSA * weight * 4) / 1000;
        return result;
    }
};


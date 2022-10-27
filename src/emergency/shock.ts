/* Shock Index */
// Sources: https://www.mdcalc.com/calc/1316/shock-index#evidence
//          https://www.mdcalc.com/calc/10058/shock-index-pediatric-age-adjusted-sipa


export type SIPAChildAge = 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

/** 
 * Roughly estimates the possibility of occult shock in adults, especially 
 * in trauma or acute hemorrhage.
 */
export const si = (heart_rate: number, systolic_BP: number) => {
    return heart_rate / systolic_BP;
};


export const sipa = (age: SIPAChildAge, max_heart_rate: number, min_systolic_BP: number) => {
    if (age < 4 || age > 16) {
        return -1;
    }
    return "sipa function called";
};


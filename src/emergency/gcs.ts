/* Glasgow Coma Scale */
// See https://www.mdcalc.com/calc/64/glasgow-coma-scale-score-gcs

interface GCSResult {
    E: 0 | 1 | 2 | 3 | 4;
    V: 0 | 1 | 2 | 3 | 4;
    M: 0 | 1 | 2 | 3 | 4;
    total: number;
};

export const gcs = (
    eye_response: number, 
    verbal_response: number, 
    motor_response: number
): GCSResult => {
    return {
        total: eye_response + verbal_response + motor_response;
        E: eye_response,
        V: verbal_response,
        M: motor_response,
    };
};

console.log(gcs(4, 2, 3));


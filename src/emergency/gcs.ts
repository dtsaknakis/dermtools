/* Glasgow Coma Scale */
// See https://www.mdcalc.com/calc/64/glasgow-coma-scale-score-gcs


export type GCSEyeEntry = 0 | 1 | 2 | 3 | 4;
export type GCSVerbalEntry = 0 | 1 | 2 | 3 | 4 | 5;
export type GCSMotorEntry = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type PGCSEyeEntry = 1 | 2 | 3 | 4;
export type PGCSVerbalEntry = 1 | 2 | 3 | 4 | 5;
export type PGCSMotorEntry = 1 | 2 | 3 | 4 | 5 | 6;

export interface GCSResult {
    e: GCSEyeEntry;
    v: GCSVerbalEntry;
    m: GCSMotorEntry;
    score: number;
};
export interface PGCSResult {
    e: PGCSEyeEntry;
    v: PGCSVerbalEntry;
    m: PGCSMotorEntry;
    score: number;
};

/** Glasgow Coma Scale calculation. */
export const gcs = (
    eye_response: GCSEyeEntry,
    verbal_response: GCSVerbalEntry,
    motor_response: GCSMotorEntry
): GCSResult | -1 => {
    if (eye_response > 4 || eye_response < 0 || verbal_response > 5 || verbal_response < 0 || motor_response > 6 || motor_response < 0) {
        return -1;
    }
    return {
        score: eye_response + verbal_response + motor_response,
        e: eye_response,
        v: verbal_response,
        m: motor_response,
    };
};

/** Pediatric Glasgow Coma Scale calculation (for < 2 years old). */
export const pgcs = (
    eye_response: PGCSEyeEntry,
    verbal_response: PGCSVerbalEntry,
    motor_response: PGCSMotorEntry
): PGCSResult | -1 => {
    if (eye_response > 4 || eye_response < 1 || verbal_response > 5 || verbal_response < 1 || motor_response > 6 || motor_response < 1) {
        return -1;
    }
    return {
        score: eye_response + verbal_response + motor_response,
        e: eye_response,
        v: verbal_response,
        m: motor_response,
    };
};

// // Test
// console.log(gcs(3, 3, 4)); // Should output {score: 10, e: 3, v: 3, m: 4}
// console.log(pgcs(4, 3, 4)); // Should output {score: 11, e: 4, v: 3, m: 4}


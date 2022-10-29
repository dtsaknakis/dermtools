/* Tools relevant to psoriasis */

// PASI


export type AreaData = [number, number, number, number];

/** helper function that calculates an area's pasi */
const calcAreaScore = (area_array: AreaData) => {
    let severity = 0;
    for (let i = 0; i < 3; i++) {
        severity = severity + area_array[i];
    }
    return severity * area_array[3];
};



export const pasi = (head_neck: AreaData, upper_limbs: AreaData, trunk: AreaData, lower_limbs: AreaData) =>  {
    //
    const headScore = calcAreaScore(head_neck) * 0.1;
    const armsScore = calcAreaScore(upper_limbs) * 0.2;
    const trunkScore = calcAreaScore(trunk) * 0.3;
    const legsScore = calcAreaScore(lower_limbs) * 0.4;
    const PASI = headScore + armsScore + trunkScore + legsScore;
    return PASI;
};




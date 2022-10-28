/* Tools relevant to botulinum toxin */

/** Returns the total Units per vial of a botulinum toxin brand */
export const brandUnits = (brandName: string = "botox"): number => {
    const brand = brandName.trim().toLowerCase();
    // If brand name not included in values below return 0
    switch(brand) {
        case "botox":
            return 100;
        case "dysport":
            return 500;
        case "bocouture":
            return 50;
        default:
            return 0;
    }
};


/** 
* Returns units in a syringe of a given size, given the BoNT-A brand and 
* its dilution 
* */
export const syringeUnits = (brandName: string = "botox", dilution: number = 2.5, syringeVolume: number = 0.5) => {
    const brand = brandName.trim().toLowerCase();
    const totalUnits = brandUnits(brand);
    return (syringeVolume * totalUnits) / dilution;
};


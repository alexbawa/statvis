const SAMPLES = 2500;

const UniversalUtility = {
    generateNormalDist(mean = 0, variance = 1) {
        let normalPoints = [];
        for(let i = 0; i < SAMPLES; ++i) { // Samples distribution SAMPLES times
            normalPoints.push(this.generateNormalSample());
        }

        for(let i = 0; i < SAMPLES; ++i) { // Scales distribution with provided parameters
            normalPoints[i] = (normalPoints[i] + mean) * variance;
        }

        let valCounts = {};
        for(let i = 0; i < SAMPLES; ++i) { // Counts occurences of all values
            if(valCounts[normalPoints[i]] >= 1) {
                valCounts[normalPoints[i]] += 1
            } else {
                valCounts[normalPoints[i]] = 1;
            }
        }

        let normalData = []
        for (const value in valCounts) { // Transforms value counts to paired data
            normalData.push({x: value, y: valCounts[value]});
        }
        return normalData;
    },

    generateNormalSample() { // Currently distribution is 0 to 1, need to make -3 to 3
        let u = 0;
        let v = 0;

        while(u === 0) { // Makes lower bound exclusive
            u = Math.random();
        }
        while(v === 0) {
            v = Math.random();
        }

        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v); // Box-Muller transform
        if (num > 3.5 || num < -3.5) {
            return this.generateNormalSample();
        }

        return num;
    }
}

export default UniversalUtility;
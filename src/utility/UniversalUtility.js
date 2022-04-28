const SAMPLES = 5000;

class UniversalUtility {
    generateNormalDist() {
        let normalData = [];
        for(let i = 0; i < SAMPLES; ++i) { // Samples distribution SAMPLES times
            normalData.append(this.generateNormalSample());
        }


        return normalData;
    }

    generateNormalSample() { // Currently distribution is 0 to 1, need to make -3 to 3
        let u = 0;
        let v = 0;

        while(u == 0) { // Makes lower bound exclusive
            u = Math.random();
        }
        while(v == 0) {
            v = Math.random();
        }

        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v); // Box-Muller transform
        num = num / 10.0 + 0.5
        if (num > 1 || num < 0) {
            return this.generateNormalSample();
        }

        return num;
    }

    scaleNormal(startData, mean, variance) {

    }
}
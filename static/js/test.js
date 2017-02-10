'use strict';

function sequenceSum(begin, end, step) {
    if (begin > end && step > 0) return 0;
    if (begin < end && begin < 0 && end < 0 && step < 0) return 0;
    var result = 0;
    
    } else {
        result = (begin + (end - end%step))/2*((end-end%step-begin)/step + 1);        
    }
    return result;
}

// https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/train/javascript

// sequenceSum(-1, -5, -3), -5)

// Math.exp(Math.log(81) / 2).toFixed(5)
'use strict';

function DNAStrand(dna){
    //let arr = dna.split('');
    /*for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'A') {
            arr[i] = 'T';
        } else if (arr[i] == 'T') {
            arr[i] = 'A';
        } else if (arr[i] == 'C') {
            arr[i] = 'G';
        } else if (arr[i] == 'G') {
            arr[i] = 'C';
        }
    }*/
    return dna.split('').map(function(y){ return (y == 'A') ? 'T' : (y == 'T') ? 'A' : (y == 'C') ? 'G' : 'C'}).join('');
}

// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

// DNAStrand("ATTGC"),"TAACG","String ATTGC is" A -> T && C -> G

// Math.exp(Math.log(81) / 2).toFixed(5)
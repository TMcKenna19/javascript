//Write a fucntion that takes in a weight and checks it to weight limit 
const loadLT = 20000;

function scaleCheck(loadWeight) {
    if(loadWeight <= loadLT){
        return `under ${loadLT - loadWeight} lbs,  ${loadWeight} / ${loadLT}`
    }else{
        return `OVER ${loadWeight - loadLT} lbs,  ${loadWeight} / ${loadLT}`
    }
}

console.log(scaleCheck(487))
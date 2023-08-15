const sumAll = function(firstNum, lastNum) {
    function somar(primeiro, ultimo){
        let result = 0;

        for(let i = 0; i < ultimo; i++){
            result += primeiro + i;
        }

        return result;
    }

    if((typeof firstNum === "number") && (typeof lastNum === "number") && (firstNum > 0) && (lastNum > 0)){
        if(firstNum < lastNum){
            return somar(firstNum, lastNum);
        } else {
            return somar(lastNum, firstNum);
        }
    }  else {
        return "ERROR";
    }  
}
// Do not edit below this line
module.exports = sumAll;

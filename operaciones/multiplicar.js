const multiplicar = function(a, b){
    if(a === 0 || b === 0){
        return "incorrecto, recuerda que todo numero por cero, nos da cero."
    }else{
    return a * b
    }
};

module.exports = multiplicar;
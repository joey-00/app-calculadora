 const dividir = function(a, b){
    if(a === 0 || b === 0){
       return "incorrecto, ya que no se puede dividir un numero por cero."
    }else{
    return a / b
    }
};

module.exports = dividir;
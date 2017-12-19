
Math.generaApuestas = function (intNumeroApuestas) {

    function generaCombinacion(){
        var aNumeros=[];
        for (var intI = 0; intI < 49; intI++) {
            aNumeros[intI] = intI + 1;
        }
        var aNumerosUnaCombinacion=[];
        for( intI=0; intI<6; intI++){
           aNumerosUnaCombinacion.push(aNumeros.splice(Math.random()*aNumeros.length,1)[0]);
        }
        return aNumerosUnaCombinacion.sort(function(a,b){return a-b;});
    }
    
    function compruebaSiEsta(aNuevaCombinacion){
        return aCombinaciones.indexOf(aNuevaCombinacion.toString())!==-1;
    }
    
    
    if (!/^[1-9][0-9]?$/.test(intNumeroApuestas))
        throw new Error("El dato introducido debe ser un valor positivo entre 0-99");
    
    var aCombinaciones=[];
    for (var intI = 0; intI < intNumeroApuestas; intI++) {
       var aCombinacion= generaCombinacion();
       if(compruebaSiEsta(aCombinacion))intI--;
       else aCombinaciones.push(aCombinacion.toString());
    }
    return aCombinaciones.sort(function(a,b){return parseInt(a.replace(/,/g,""))-parseInt(b.replace(/,/g,""));});
};




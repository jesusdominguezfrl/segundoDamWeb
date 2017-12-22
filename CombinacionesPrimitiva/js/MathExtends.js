
Math.generaApuestas = function (intNumeroApuestas) {

    function generaCombinacion(){
        var aNumeros=[];
        for (var intI = 0; intI < 49; intI++) {
            aNumeros[intI] = intI + 1;
        }
        var aNumerosUnaCombinacion=[];
        for( intI=0; intI<6; intI++){
           aNumerosUnaCombinacion.push(aNumeros/*.sort(function(a,b){return Math.random();})*/.splice(Math.random()*aNumeros.length,1)[0]);
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
    return aCombinaciones.sort(function(a,b){
        var aCoincidenciasA=a.match(/([1-4]?[0-9])/g);
        var aCoincidenciasB=b.match(/([1-4]?[0-9])/g);
        var intI=0;
        while(parseInt(aCoincidenciasA[intI])-parseInt(aCoincidenciasB[intI])===0)intI++;
        return parseInt(aCoincidenciasA[intI])-parseInt(aCoincidenciasB[intI]);
    });
};




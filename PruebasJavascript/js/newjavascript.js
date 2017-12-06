/* Combinacion de 6 numeros entre 1 y 49 sin repetir*/

//Definicion de variables
var aNumeros=[], intI ;

/**
 * Carga el array aNumeros con os numeros 1-49
 */
for(intI=0;intI<49;intI++){
    aNumeros[intI]=intI+1;
}


/*
//Generacion de numeros aleatoriamente con tendencia a salir muchos numeros pequeños.
aNumeros.sort( 
    function (a,b){
        return Math.random()-0.5;
    }
);

aNumeros.splice(6,aNumeros.length);


alert(aNumeros.sort(
    function (a,b){
        return (a-b);
    }));

 **/

aNumeros.sort(
    function (a,b){
        return (a-b);
    });
var aNumerosSorteo=[] ;
for (intI=0; intI<6; intI++){
    aNumerosSorteo.push(aNumeros.splice(parseInt(Math.random()*aNumeros.length),1)[0]); 
}

alert(aNumerosSorteo.sort(function (a,b){
        return (a-b);
    }));

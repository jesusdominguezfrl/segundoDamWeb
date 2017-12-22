/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

try{
    document.querySelector("body").innerHTML = Math.generaApuestas(window.prompt("Introduzca el número de combinaciones de primitiva que quiere generar.")).toHTMLString().replace(/(\<tr\>\<td\>)([0-9]+)(\<\/td\>)/g, function (a, b, c, d, e, f) {return b + (parseInt(c) + 1) + d;});
}catch (ex){
    alert("Upss!!! Se produjo un error el valor debe ser un valor numérico entre 1 y 99.");
}
//document.querySelector("body").innerHTML = Math.generaApuestas("22").toHTMLString().replace(/(\<tr\>\<td\>)([0-9]+)(\<\/td\>)/g, function (a, b, c, d, e, f) {return b + (parseInt(c) + 1) + d;});
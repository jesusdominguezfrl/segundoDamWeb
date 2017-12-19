/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




document.querySelector("body").innerHTML= Math.generaApuestas(99).toHTMLString().replace(/(\<tr\>\<td\>)([0-9]+)(\<\/td\>)/g,function(a,b,c,d,e,f){return b+(parseInt(c)+1)+d});



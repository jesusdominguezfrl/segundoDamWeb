
Array.prototype.toHTMLString=function(){
    //if(!this.length>=0)throw new Error ("Se necesita una tabla con longitud igual o mayor que 0");
    strHTMLTable="<table>";
    for(var intI=0; intI<this.length; intI++){
        strHTMLTable+="<tr><td>"+intI+"</td>"+"<td>"+this[intI]+"</td></tr>";
    }
    return strHTMLTable+"</table>";
};


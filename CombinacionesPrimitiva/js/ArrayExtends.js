
Array.prototype.toHTMLString=function(){
    strHTMLTable="<table>";
    for(var intI=0; intI<this.length; intI++){
        strHTMLTable+="<tr><td>"+intI+"</td>"+"<td>"+this[intI]+"</td></tr>";
    }
    return strHTMLTable+"</table>";
};


function distal(g,f){var j=function(){};j.prototype=f;var f=new j,j=distal.resolve,c=g,u=g.ownerDocument,n=!!g.querySelectorAll,v="innerText"in g?"innerText":"textContent",D={className:1,"class":1,innerHTML:1,style:1,src:1,href:1,id:1,value:1,checked:1,selected:1,label:1,htmlFor:1,text:1,title:1,disabled:1},E={BUTTON:1,LABEL:1,LEGEND:1,FIELDSET:1,OPTION:1},i=distal,w=i.beforeAttr,x=i.beforeText,y=i.qif||"data-qif",t=i.qrepeat||"data-qrepeat",z=i.qattr||"data-qattr",A=i.qtext||"data-qtext",r=i.qdup||"data-qdup",B=i.format,i=i.qdef||"data-qdef",s="*["+[i,y,t,z,A].join("],*[")+"]",b,F=function(a){return this[a]},d=g.parentNode;for(;(c=g.nextSibling)&&(c.qdup||1==c.nodeType&&c.getAttribute(r));)d.removeChild(c);var p,q=[0],m,l=0,a,e,C={}._;if(n){for(m=g.querySelectorAll("*["+r+"]");c=m[l++];)c.parentNode.removeChild(c);l=0}p=[n?g.querySelectorAll(s):g.getElementsByTagName("*")];for(m=[g];;){for(c=m[l++];!c&&(m=p.pop());)l=q.pop(),c=m[l++];if(!c)break;if(a=c.getAttribute(i)){a=a.split(" ");b=j(f,a[1]);if(e=a[2])f["#"]=parseInt(e)+1,b=b[e];f[a[0]]=b}if(a=c.getAttribute(y)){a=a.split(" ");0==a[0].indexOf("not:")&&(a=[a[0].substr(4),"not",0]);if((b=j(f,a[0]))&&b.join&&-1<b.length)b=b.length;if(2<a.length)switch(a[3]&&(a[2]=a.slice(2).join(" ")),"number"==typeof b&&(a[2]*=1),a[1]){case"not":a=!b;break;case"eq":a=b==a[2];break;case"ne":a=b!=a[2];break;case"gt":a=b>a[2];break;case"lt":a=b<a[2];break;case"cn":a=b&&0<=b.indexOf(a[2]);break;case"nc":a=b&&0>b.indexOf(a[2]);break;default:throw c;}else a=b;if(a)c.style.display="";else{c.style.display="none";l=n?l+c.querySelectorAll(s).length:l+c.getElementsByTagName("*").length;continue}}if(a=c.getAttribute(t)){e=a.split(" ");if(!n)for(b=c.parentNode;(d=c.nextSibling)&&(d.qdup||1==d.nodeType&&d.getAttribute(r));)b.removeChild(d);if(!e[1])throw e;if((b=j(f,e[1]))&&b.length)c.style.display="",f[e[0]]=b[0],f["#"]=1;else{c.style.display="none";l=n?l+c.querySelectorAll(s).length:l+c.getElementsByTagName("*").length;continue}if(1<b.length){b=Array(b.length-1);for(var k=d=b.length;0<k;k--)b[d-k]=k;d=c.cloneNode(!0);"form"in d&&(d.checked=!1);d.setAttribute(i,a);d.removeAttribute(t);d.setAttribute(r,"1");var d=d.outerHTML||u.createElement("div").appendChild(d).parentNode.innerHTML,h=d.indexOf(" "+i+'="'+a+'"');-1==h&&(h=d.indexOf(" "+i+"='"+a+"'"));h=h+i.length+3+a.length;b=d.substr(0,h)+" "+b.join(d.substr(h)+d.substr(0,h)+" ")+d.substr(h);d=u.createElement("div");"cells"in c&&!("tBodies"in c)?(d.innerHTML="<table>"+b+"</table>",d=d.firstChild.tBodies[0].childNodes):"cellIndex"in c?(d.innerHTML="<table><tr>"+b+"</tr></table>",d=d.firstChild.tBodies[0].firstChild.childNodes):"selected"in c&&"text"in c?(d.innerHTML="<select>"+b+"</select>",d=d.firstChild.childNodes):(d.innerHTML=b,d=d.childNodes);h=c.parentNode;e=c.nextSibling;if(n||c==g){p.push(m);q.push(l);m={getAttribute:F};m[i]=a+" 0";p.push([m]);q.push(0);m=[];for(k=d.length-1;0<=k;k--)b=d[k],p.push(n?b.querySelectorAll(s):b.getElementsByTagName("*")),q.push(0),p.push([b]),q.push(0),b.qdup=1,h.insertBefore(b,e)}else for(k=d.length-1;0<=k;k--)b=d[k],b.qdup=1,h.insertBefore(b,e);h.selectedIndex=-1}}if(a=c.getAttribute(z)){b=a.split("; ");for(k=b.length-1;0<=k;k--){a=b[k].split(" ");e=a[0];if(!a[1])throw a;h=j(f,a[1]);h==C&&(h="");w&&w(c,e,h);if(a=a[2]&&B[a[2]])h=a(h);if(D[e])switch(e){case"innerHTML":throw c;case"disabled":case"checked":case"selected":c[e]=!!h;break;case"style":c.style.cssText=h;break;case"text":c[n?e:v]=h;break;case"class":e="className";default:c[e]=h}else c.setAttribute(e,h)}}if(a=c.getAttribute(A)){a=a.split(" ");b="html"==a[0];e=j(f,a[b?1:0]);e==C&&(e="");x&&x(c,e);if((a=a[b?2:1])&&(a=B[a]))e=a(e);b?c.innerHTML=e:c["form"in c&&!E[c.tagName]?"value":v]=e}}}distal.resolve=function(g,f,j,c){if(j=g[f])return"function"==typeof j?j.call(g,f):j;f=f.split(".");for(j=0;f[j]&&(c=g)&&(g=g[f[j++]]););return"function"==typeof g?g.call(c,f.join(".")):g};distal.format={",.":function(g,f){f=1*g;return isNaN(f)?g:(f%1?f.toFixed(2):parseInt(f,10)+"").replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g,"$1,")}};"function"==typeof define&&define.amd&&define("distal",function(){return distal});
jQuery.fn.distal = function (json) {
    return this.each( function () { distal(this, json) } )
};
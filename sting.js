export function spatha() {
	window["🗡"] || (window["🗡"] = !function(){
HTMLElement.prototype.html = function(templateObject, ...substs) { 
const raw = templateObject.raw;
let result = '';
let elemEvents=[], strMatch;
substs.forEach((subst, i) => { 
let lit = raw[i];
 if (Array.isArray(subst)) { 
 subst = subst.join('');
 }
 if (typeof subst === "object" && lit.slice(-7) === 'style="') {
 subst = JSON.stringify(subst).replace(/,/g,";");
}
if (typeof subst === "function" && (strMatch = lit.slice(-15).match(/\son.*=["']$/))) {
  let eventType = strMatch[0].slice(3, -2);  
  let _attrID = '_spt-fauxid-'+lit.hashCode();
  let hashValue = _attrID.hashCode();
elemEvents.push({_attrID, hashValue, fn: subst, eventType});
subst=`' ${_attrID}='"${hashValue}`;
}
 if (lit.endsWith('!')) { 
 subst = htmlEscape(subst); 
 lit = lit.slice(0, -1);
 }
 result += lit; result += subst; 
 });
 result += raw[raw.length-1];
 console.log(elemEvents);
  this.innerHTML = result;
  for ( evt of elemEvents) {
    let elem = this.querySelector(`[${evt._attrID}]`);
    elem.addEventListener(elem.eventType, elem.fn);
  }
}
}());
}

function htmlEscape(str) { return str.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/`/g, '&#96;'); }
String.prototype.hashCode = function () { var text = ""; var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; for (var i = 0; i < 15; i++) text += possible.charAt(Math.floor(Math.random() * possible.length)); return text; } 



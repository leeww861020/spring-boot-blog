var DecorationsT,JobT,SourceSpansT,IN_GLOBAL_SCOPE=!1,PR;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;!function(){function e(e){function n(e){var n=e.charCodeAt(0);if(92!==n)return n;var t=e.charAt(1);return n=p[t],n?n:t>="0"&&"7">=t?parseInt(e.substring(1),8):"u"===t||"x"===t?parseInt(e.substring(2),16):e.charCodeAt(1)}function t(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);var n=String.fromCharCode(e);return"\\"===n||"-"===n||"]"===n||"^"===n?"\\"+n:n}function r(e){var r=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),a=[],s="^"===r[0],l=["["];s&&l.push("^");for(var i=s?1:0,o=r.length;o>i;++i){var u=r[i];if(/\\[bdsw]/i.test(u))l.push(u);else{var c,p=n(u);o>i+2&&"-"===r[i+1]?(c=n(r[i+2]),i+=2):c=p,a.push([p,c]),65>c||p>122||(65>c||p>90||a.push([32|Math.max(65,p),32|Math.min(c,90)]),97>c||p>122||a.push([-33&Math.max(97,p),-33&Math.min(c,122)]))}}a.sort(function(e,n){return e[0]-n[0]||n[1]-e[1]});for(var d=[],f=[],i=0;i<a.length;++i){var h=a[i];h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):d.push(f=h)}for(var i=0;i<d.length;++i){var h=d[i];l.push(t(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&l.push("-"),l.push(t(h[1])))}return l.push("]"),l.join("")}function a(e){for(var n=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=n.length,i=[],o=0,u=0;a>o;++o){var c=n[o];if("("===c)++u;else if("\\"===c.charAt(0)){var p=+c.substring(1);p&&(u>=p?i[p]=-1:n[o]=t(p))}}for(var o=1;o<i.length;++o)-1===i[o]&&(i[o]=++s);for(var o=0,u=0;a>o;++o){var c=n[o];if("("===c)++u,i[u]||(n[o]="(?:");else if("\\"===c.charAt(0)){var p=+c.substring(1);p&&u>=p&&(n[o]="\\"+i[p])}}for(var o=0;a>o;++o)"^"===n[o]&&"^"!==n[o+1]&&(n[o]="");if(e.ignoreCase&&l)for(var o=0;a>o;++o){var c=n[o],d=c.charAt(0);c.length>=2&&"["===d?n[o]=r(c):"\\"!==d&&(n[o]=c.replace(/[a-zA-Z]/g,function(e){var n=e.charCodeAt(0);return"["+String.fromCharCode(-33&n,32|n)+"]"}))}return n.join("")}for(var s=0,l=!1,i=!1,o=0,u=e.length;u>o;++o){var c=e[o];if(c.ignoreCase)i=!0;else if(/[a-z]/i.test(c.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){l=!0,i=!1;break}}for(var p={b:8,t:9,n:10,v:11,f:12,r:13},d=[],o=0,u=e.length;u>o;++o){var c=e[o];if(c.global||c.multiline)throw new Error(""+c);d.push("(?:"+a(c)+")")}return new RegExp(d.join("|"),i?"gi":"g")}function n(e,n){function t(e){var o=e.nodeType;if(1==o){if(r.test(e.className))return;for(var u=e.firstChild;u;u=u.nextSibling)t(u);var c=e.nodeName.toLowerCase();("br"===c||"li"===c)&&(a[i]="\n",l[i<<1]=s++,l[i++<<1|1]=e)}else if(3==o||4==o){var p=e.nodeValue;p.length&&(p=n?p.replace(/\r\n?/g,"\n"):p.replace(/[ \t\r\n]+/g," "),a[i]=p,l[i<<1]=s,s+=p.length,l[i++<<1|1]=e)}}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],s=0,l=[],i=0;return t(e),{sourceCode:a.join("").replace(/\n$/,""),spans:l}}function t(e,n,t,r,a){if(t){var s={sourceNode:e,pre:1,langExtension:null,numberLines:null,sourceCode:t,spans:null,basePos:n,decorations:null};r(s),a.push.apply(a,s.decorations)}}function r(e){for(var n=void 0,t=e.firstChild;t;t=t.nextSibling){var r=t.nodeType;n=1===r?n?e:t:3===r&&V.test(t.nodeValue)?e:n}return n===e?void 0:n}function a(n,r){var a,s={};!function(){for(var t=n.concat(r),l=[],i={},o=0,u=t.length;u>o;++o){var c=t[o],p=c[3];if(p)for(var d=p.length;--d>=0;)s[p.charAt(d)]=c;var f=c[1],h=""+f;i.hasOwnProperty(h)||(l.push(f),i[h]=null)}l.push(/[\0-\uffff]/),a=e(l)}();var l=r.length,i=function(e){for(var n=e.sourceCode,o=e.basePos,c=e.sourceNode,p=[o,O],d=0,f=n.match(a)||[],h={},g=0,m=f.length;m>g;++g){var v,y=f[g],b=h[y],x=void 0;if("string"==typeof b)v=!1;else{var w=s[y.charAt(0)];if(w)x=y.match(w[1]),b=w[0];else{for(var S=0;l>S;++S)if(w=r[S],x=y.match(w[1])){b=w[0];break}x||(b=O)}v=b.length>=5&&"lang-"===b.substring(0,5),!v||x&&"string"==typeof x[1]||(v=!1,b=z),v||(h[y]=b)}var C=d;if(d+=y.length,v){var N=x[1],_=y.indexOf(N),P=_+N.length;x[2]&&(P=y.length-x[2].length,_=P-N.length);var E=b.substring(5);t(c,o+C,y.substring(0,_),i,p),t(c,o+C+_,N,u(E,N),p),t(c,o+C+P,y.substring(P),i,p)}else p.push(o+C,b)}e.decorations=p};return i}function s(e){var n=[],t=[];e.tripleQuotedStrings?n.push([L,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?n.push([L,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):n.push([L,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&t.push([L,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(r>1?n.push([T,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):n.push([T,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),t.push([L,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):n.push([T,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(t.push([T,/^\/\/[^\r\n]*/,null]),t.push([T,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var s=e.regexLiterals;if(s){var l=s>1?"":"\n\r",i=l?".":"[\\S\\s]",o="/(?=[^/*"+l+"])(?:[^/\\x5B\\x5C"+l+"]|\\x5C"+i+"|\\x5B(?:[^\\x5C\\x5D"+l+"]|\\x5C"+i+")*(?:\\x5D|$))+/";t.push(["lang-regex",RegExp("^"+U+"("+o+")")])}var u=e.types;u&&t.push([R,u]);var c=(""+e.keywords).replace(/^ | $/g,"");c.length&&t.push([A,new RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]),n.push([O,/^\s+/,null," \r\n	 "]);var p="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(p+="(?!s*/)"),t.push([k,/^@[a-z_$][a-z_$@0-9]*/i,null],[R,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[O,/^[a-z_$][a-z_$@0-9]*/i,null],[k,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[O,/^\\[\s\S]?/,null],[$,new RegExp(p),null]),a(n,t)}function l(e,n,t){function r(e){var n=e.nodeType;if(1!=n||s.test(e.className)){if((3==n||4==n)&&t){var o=e.nodeValue,u=o.match(l);if(u){var c=o.substring(0,u.index);e.nodeValue=c;var p=o.substring(u.index+u[0].length);if(p){var d=e.parentNode;d.insertBefore(i.createTextNode(p),e.nextSibling)}a(e),c||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(var f=e.firstChild;f;f=f.nextSibling)r(f)}function a(e){function n(e,t){var r=t?e.cloneNode(!1):e,a=e.parentNode;if(a){var s=n(a,1),l=e.nextSibling;s.appendChild(r);for(var i=l;i;i=l)l=i.nextSibling,s.appendChild(i)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var t,r=n(e.nextSibling,0);(t=r.parentNode)&&1===t.nodeType;)r=t;u.push(r)}for(var s=/(?:^|\s)nocode(?:\s|$)/,l=/\r\n?|\n/,i=e.ownerDocument,o=i.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var u=[o],c=0;c<u.length;++c)r(u[c]);n===(0|n)&&u[0].setAttribute("value",n);var p=i.createElement("ol");p.className="linenums";for(var d=Math.max(0,n-1|0)||0,c=0,f=u.length;f>c;++c)o=u[c],o.className="L"+(c+d)%10,o.firstChild||o.appendChild(i.createTextNode(" ")),p.appendChild(o);e.appendChild(p)}function i(e){var n=/\bMSIE\s(\d+)/.exec(navigator.userAgent);n=n&&+n[1]<=8;var t=/\n/g,r=e.sourceCode,a=r.length,s=0,l=e.spans,i=l.length,o=0,u=e.decorations,c=u.length,p=0;u[c]=a;var d,f;for(f=d=0;c>f;)u[f]!==u[f+2]?(u[d++]=u[f++],u[d++]=u[f++]):f+=2;for(c=d,f=d=0;c>f;){for(var h=u[f],g=u[f+1],m=f+2;c>=m+2&&u[m+1]===g;)m+=2;u[d++]=h,u[d++]=g,f=m}c=u.length=d;var v=e.sourceNode,y="";v&&(y=v.style.display,v.style.display="none");try{for(;i>o;){var b,x=(l[o],l[o+2]||a),w=u[p+2]||a,m=Math.min(x,w),S=l[o+1];if(1!==S.nodeType&&(b=r.substring(s,m))){n&&(b=b.replace(t,"\r")),S.nodeValue=b;var C=S.ownerDocument,N=C.createElement("span");N.className=u[p+1];var _=S.parentNode;_.replaceChild(N,S),N.appendChild(S),x>s&&(l[o+1]=S=C.createTextNode(r.substring(m,x)),_.insertBefore(S,N.nextSibling))}s=m,s>=x&&(o+=2),s>=w&&(p+=2)}}finally{v&&(v.style.display=y)}}function o(e,n){for(var t=n.length;--t>=0;){var r=n[t];F.hasOwnProperty(r)?f.console&&console.warn("cannot override language handler %s",r):F[r]=e}}function u(e,n){return e&&F.hasOwnProperty(e)||(e=/^\s*</.test(n)?"default-markup":"default-code"),F[e]}function c(e){var t=e.langExtension;try{var r=n(e.sourceNode,e.pre),a=r.sourceCode;e.sourceCode=a,e.spans=r.spans,e.basePos=0,u(t,a)(e),i(e)}catch(s){f.console&&console.log(s&&s.stack||s)}}function p(e,n,t){var r=t||!1,a=n||null,s=document.createElement("div");s.innerHTML="<pre>"+e+"</pre>",s=s.firstChild,r&&l(s,r,!0);var i={langExtension:a,numberLines:r,sourceNode:s,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null};return c(i),s.innerHTML}function d(e,n){function t(e){return s.getElementsByTagName(e)}function a(){for(var n=f.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;m<u.length&&g.now()<n;m++){for(var t=u[m],s=C,o=t;o=o.previousSibling;){var p=o.nodeType,d=(7===p||8===p)&&o.nodeValue;if(d?!/^\??prettify\b/.test(d):3!==p||/\S/.test(o.nodeValue))break;if(d){s={},d.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,n,t){s[n]=t});break}}var h=t.className;if((s!==C||y.test(h))&&!b.test(h)){for(var N=!1,_=t.parentNode;_;_=_.parentNode){var P=_.tagName;if(S.test(P)&&_.className&&y.test(_.className)){N=!0;break}}if(!N){t.className+=" prettyprinted";var E=s.lang;if(!E){E=h.match(v);var L;!E&&(L=r(t))&&w.test(L.tagName)&&(E=L.className.match(v)),E&&(E=E[1])}var A;if(x.test(t.tagName))A=1;else{var T=t.currentStyle,R=i.defaultView,k=T?T.whiteSpace:R&&R.getComputedStyle?R.getComputedStyle(t,null).getPropertyValue("white-space"):0;A=k&&"pre"===k.substring(0,3)}var $=s.linenums;($="true"===$||+$)||($=h.match(/\blinenums\b(?::(\d+))?/),$=$?$[1]&&$[1].length?+$[1]:!0:!1),$&&l(t,$,A);var O={langExtension:E,sourceNode:t,numberLines:$,pre:A,sourceCode:null,basePos:null,spans:null,decorations:null};c(O)}}}m<u.length?f.setTimeout(a,250):"function"==typeof e&&e()}for(var s=n||document.body,i=s.ownerDocument||document,o=[t("pre"),t("code"),t("xmp")],u=[],p=0;p<o.length;++p)for(var d=0,h=o[p].length;h>d;++d)u.push(o[p][d]);o=null;var g=Date;g.now||(g={now:function(){return+new Date}});var m=0,v=/\blang(?:uage)?-([\w.]+)(?!\S)/,y=/\bprettyprint\b/,b=/\bprettyprinted\b/,x=/pre|xmp/i,w=/^code$/i,S=/^(?:pre|code|xmp)$/i,C={};a()}var f=window,h=["break,continue,do,else,for,if,return,while"],g=[h,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],m=[g,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],v=[m,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],y=[m,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],b=[m,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],x="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",w=[m,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],S="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",C=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],N=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],_=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],P=[v,b,y,w,S,C,N,_],E=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,L="str",A="kwd",T="com",R="typ",k="lit",$="pun",O="pln",I="tag",D="dec",z="src",j="atn",B="atv",M="nocode",U="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",V=/\S/,G=s({keywords:P,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};o(G,["default-code"]),o(a([],[[O,/^[^<?]+/],[D,/^<!\w[^>]*(?:>|$)/],[T,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[$,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),o(a([[O,/^[\s]+/,null," 	\r\n"],[B,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[I,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[j,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[$,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),o(a([],[[B,/^[\s\S]+/]]),["uq.val"]),o(s({keywords:v,hashComments:!0,cStyleComments:!0,types:E}),["c","cc","cpp","cxx","cyc","m"]),o(s({keywords:"null,true,false"}),["json"]),o(s({keywords:b,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:E}),["cs"]),o(s({keywords:y,cStyleComments:!0}),["java"]),o(s({keywords:_,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),o(s({keywords:C,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),o(s({keywords:S,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),o(s({keywords:N,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),o(s({keywords:w,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),o(s({keywords:x,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),o(a([],[[L,/^[\s\S]+/]]),["regex"]);var H=f.PR={createSimpleLexer:a,registerLangHandler:o,sourceDecorator:s,PR_ATTRIB_NAME:j,PR_ATTRIB_VALUE:B,PR_COMMENT:T,PR_DECLARATION:D,PR_KEYWORD:A,PR_LITERAL:k,PR_NOCODE:M,PR_PLAIN:O,PR_PUNCTUATION:$,PR_SOURCE:z,PR_STRING:L,PR_TAG:I,PR_TYPE:R,prettyPrintOne:IN_GLOBAL_SCOPE?f.prettyPrintOne=p:prettyPrintOne=p,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?f.prettyPrint=d:prettyPrint=d},q=f.define;"function"==typeof q&&q.amd&&q("google-code-prettify",[],function(){return H})}();
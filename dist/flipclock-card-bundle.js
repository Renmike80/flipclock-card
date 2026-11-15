var Jn=Object.create;var Ae=Object.defineProperty;var ct=Object.getOwnPropertyDescriptor;var Zn=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,Xn=Object.prototype.hasOwnProperty;var Qn=(l,e)=>()=>{try{return e||l((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}};var er=(l,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of Zn(e))!Xn.call(l,u)&&u!==r&&Ae(l,u,{get:()=>e[u],enumerable:!(a=ct(e,u))||a.enumerable});return l};var tr=(l,e,r)=>(r=l!=null?Jn(Kn(l)):{},er(e||!l||!l.__esModule?Ae(r,"default",{value:l,enumerable:!0}):r,l));var ge=(l,e,r,a)=>{for(var u=a>1?void 0:a?ct(e,r):e,f=l.length-1,d;f>=0;f--)(d=l[f])&&(u=(a?d(e,r,u):d(u))||u);return a&&u&&Ae(e,r,u),u};var Nt=Qn((We,Be)=>{"use strict";(function(l,e){typeof We=="object"&&typeof Be!="undefined"?Be.exports=e():typeof define=="function"&&define.amd?define(e):(l=l||self,l.FlipClock=e())})(We,(function(){"use strict";function l(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(n){return typeof n}:l=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var s=0;s<n.length;s++){var o=n[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,n,s){return n&&r(t.prototype,n),s&&r(t,s),t}function u(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&d(t,n)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},f(t)}function d(t,n){return d=Object.setPrototypeOf||function(o,i){return o.__proto__=i,o},d(t,n)}function p(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function g(t,n,s){return p()?g=Reflect.construct:g=function(i,c,m){var y=[null];y.push.apply(y,c);var v=Function.bind.apply(i,y),k=new v;return m&&d(k,m.prototype),k},g.apply(null,arguments)}function _(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t,n){return n&&(typeof n=="object"||typeof n=="function")?n:_(t)}function h(t){return function(){var n=f(t),s;if(p()){var o=f(this).constructor;s=Reflect.construct(n,arguments,o)}else s=n.apply(this,arguments);return w(this,s)}}function T(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&(t=f(t),t!==null););return t}function S(t,n,s){return typeof Reflect!="undefined"&&Reflect.get?S=Reflect.get:S=function(i,c,m){var y=T(i,c);if(y){var v=Object.getOwnPropertyDescriptor(y,c);return v.get?v.get.call(m):v.value}},S(t,n,s||t)}function b(t){throw Error(t)}function x(t){if(ne(t)){for(var n=arguments.length,s=new Array(n>1?n-1:0),o=1;o<n;o++)s[o-1]=arguments[o];return t.call.apply(t,[this].concat(s))}}function V(t){return Ye(t=Dt(t)?Math.ceil(t):Math.floor(t))?("-"+t).toString():t}function L(t){return!H(t)&&!J(t)}function O(t,n){return function(){return n(t())}}function $(t){return function(n){return n.map(t).reduce(function(s,o){return s.concat(o)},[])}}function Te(t){return $(function(n){return n})(t)}function fe(t){return $(function(n){return Array.isArray(n)?fe(n):n})(t)}function zt(t){return fe(t).length}function Ye(t){return 1/Math.round(t)===-1/0}function Dt(t){return Ye(t)||t<0}function J(t){return t===null}function H(t){return typeof t=="undefined"}function Lt(t){return t instanceof Function&&!!t.name}function Ne(t){return typeof t=="string"}function de(t){return t instanceof Array}function P(t){var n=l(t);return t!=null&&!de(t)&&(n=="object"||n=="function")}function ne(t){return t instanceof Function}function Ce(t){return!isNaN(t)}function Ot(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}var pe=(function(){function t(n){e(this,t),this.setAttribute(Object.assign({events:{}},n))}return a(t,[{key:"emit",value:function(s){for(var o=this,i=arguments.length,c=new Array(i>1?i-1:0),m=1;m<i;m++)c[m-1]=arguments[m];return this.events[s]&&this.events[s].forEach(function(y){y.apply(o,c)}),this}},{key:"on",value:function(s,o){return this.events[s]||(this.events[s]=[]),this.events[s].push(o),this}},{key:"off",value:function(s,o){return this.events[s]&&o?this.events[s]=this.events[s].filter(function(i){return i!==o}):this.events[s]=[],this}},{key:"once",value:function(s,o){var i=this;return o=O(o,function(){return i.off(s,o)}),this.on(s,o,!0)}},{key:"getAttribute",value:function(s){return this.hasOwnProperty(s)?this[s]:null}},{key:"getAttributes",value:function(){var s=this,o={};return Object.getOwnPropertyNames(this).forEach(function(i){o[i]=s.getAttribute(i)}),o}},{key:"getPublicAttributes",value:function(){var s=this;return Object.keys(this.getAttributes()).filter(function(o){return!o.match(/^\$/)}).reduce(function(o,i){return o[i]=s.getAttribute(i),o},{})}},{key:"setAttribute",value:function(s,o){P(s)?this.setAttributes(s):this[s]=o}},{key:"setAttributes",value:function(s){for(var o in s)this.setAttribute(o,s[o])}},{key:"callback",value:function(s){return x.call(this,s)}},{key:"name",get:function(){return this.constructor.defineName instanceof Function||b("Every class must define its name."),this.constructor.defineName()}},{key:"events",get:function(){return this.$events||{}},set:function(s){this.$events=s}}],[{key:"make",value:function(){for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return g(this,o)}}]),t})();function Et(t,n){n=Object.assign({minimumDigits:0,prependLeadingZero:!0},n);function s(i){var c=n.prependLeadingZero&&i.toString().split("").length===1;return(c?"0":"").concat(i)}function o(i,c){var m=fe(i).length;if(m<c)for(var y=0;y<c-m;y++)i[0].unshift("0");return i}return o(Te([t]).map(function(i){return Te(fe([i]).map(function(c){return s(c).split("")}))}),n.minimumDigits||0)}var he=[{min:48,max:57},{min:65,max:90},{min:97,max:122}];function Je(t,n){return n==="number"?parseFloat(t):t}function Mt(t){for(var n in he){var s=t.toString().charCodeAt(0);if(he[n].min<=s&&he[n].max>=s)return he[n]}return null}function Ze(t,n){return String.fromCharCode(n(Mt(t),t.charCodeAt(0)))}function jt(t){var n=t.toString().split("").map(function(s){return Ze(s,function(o,i){return!o||i<o.max?i+1:o.min})}).join("");return Je(n,l(t))}function Vt(t){var n=t.toString().split("").map(function(s){return Ze(s,function(o,i){return!o||i>o.min?i-1:o.max})}).join("");return Je(n,l(t))}var me=(function(t){u(s,t);var n=h(s);function s(o,i){var c;return e(this,s),c=n.call(this,Object.assign({format:function(y){return y},prependLeadingZero:!0,minimumDigits:0},i)),c.value||(c.value=o),c}return a(s,[{key:"isNaN",value:(function(o){function i(){return o.apply(this,arguments)}return i.toString=function(){return o.toString()},i})(function(){return isNaN(this.value)})},{key:"isNumber",value:function(){return Ce()}},{key:"clone",value:function(i,c){return new this.constructor(i,Object.assign(this.getPublicAttributes(),c))}},{key:"digits",get:function(){return this.$digits},set:function(i){this.$digits=i,this.minimumDigits=Math.max(this.minimumDigits,zt(i))}},{key:"value",get:function(){return this.$value},set:function(i){this.$value=i,this.digits=Et(this.format(i),{minimumDigits:this.minimumDigits,prependLeadingZero:this.prependLeadingZero})}}],[{key:"defineName",value:function(){return"FaceValue"}}]),s})(pe);function E(t){for(var n=!1,s=arguments.length,o=new Array(s>1?s-1:0),i=1;i<s;i++)o[i-1]=arguments[i];return Te(o).forEach(function(c){(J(t)&&J(c)||P(c)&&t instanceof c||ne(c)&&!Lt(c)&&c(t)===!0||Ne(c)&&l(t)===c)&&(n=!0)}),n}var M={className:"The className() is not defined.",items:"The items property must be an array.",theme:"The theme property must be an object.",language:"The language must be an object.",date:"The value must be an instance of a Date.",face:"The face must be an instance of a Face class.",element:"The element must be an instance of an HTMLElement",faceValue:"The face must be an instance of a FaceValue class.",timer:"The timer property must be an instance of a Timer class."},re=(function(t){u(s,t);var n=h(s);function s(o,i){var c;return e(this,s),!(o instanceof me)&&P(o)&&(i=o,o=void 0),c=n.call(this),c.setAttributes(Object.assign({autoStart:!0,countdown:!1,animationRate:500},c.defaultAttributes(),i||{})),(J(o)||H(o))&&(o=c.defaultValue()),o&&(c.value=o),c}return a(s,[{key:"interval",value:function(i,c){return this.countdown?this.decrement(i):this.increment(i),x.call(i,c),this.shouldStop(i)&&i.stop(),i.emit("interval")}},{key:"shouldStop",value:function(i){return H(this.stopAt)?!1:this.stopAt===i.value.value}},{key:"format",value:function(i,c){return c}},{key:"defaultValue",value:function(){}},{key:"defaultAttributes",value:function(){}},{key:"defaultDataType",value:function(){}},{key:"increment",value:function(i,c){}},{key:"decrement",value:function(i,c){}},{key:"started",value:function(i){}},{key:"stopped",value:function(i){}},{key:"reset",value:function(i){}},{key:"initialized",value:function(i){}},{key:"rendered",value:function(i){}},{key:"mounted",value:function(i){this.autoStart&&i.timer.isStopped&&window.requestAnimationFrame(function(){return i.start(i)})}},{key:"createFaceValue",value:function(i,c){var m=this;return me.make(ne(c)&&!c.name?c():c,{minimumDigits:this.minimumDigits,format:function(v){return m.format(i,v)}})}},{key:"dataType",get:function(){return this.defaultDataType()}},{key:"value",get:function(){return this.$value},set:function(i){i instanceof me||(i=this.createFaceValue(i)),this.$value=i}},{key:"stopAt",get:function(){return this.$stopAt},set:function(i){this.$stopAt=i}},{key:"originalValue",get:function(){return this.$originalValue},set:function(i){this.$originalValue=i}}]),s})(pe),Rt={years:"\u0633\u0646\u0648\u0627\u062A",months:"\u0634\u0647\u0648\u0631",days:"\u0623\u064A\u0627\u0645",hours:"\u0633\u0627\u0639\u0627\u062A",minutes:"\u062F\u0642\u0627\u0626\u0642",seconds:"\u062B\u0648\u0627\u0646\u064A"},Ft=["ar","ar-ar","arabic"],Ht=Object.freeze({__proto__:null,dictionary:Rt,aliases:Ft}),It={years:"Anys",months:"Mesos",days:"Dies",hours:"Hores",minutes:"Minuts",seconds:"Segons"},Ut=["ca","ca-es","catalan"],qt=Object.freeze({__proto__:null,dictionary:It,aliases:Ut}),Wt={years:"Roky",months:"M\u011Bs\xEDce",days:"Dny",hours:"Hodiny",minutes:"Minuty",seconds:"Sekundy"},Bt=["cs","cs-cz","cz","cz-cs","czech"],Gt=Object.freeze({__proto__:null,dictionary:Wt,aliases:Bt}),Yt={years:"\xC5r",months:"M\xE5neder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},Jt=["da","da-dk","danish"],Zt=Object.freeze({__proto__:null,dictionary:Yt,aliases:Jt}),Kt={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},Xt=["de","de-de","german"],Qt=Object.freeze({__proto__:null,dictionary:Kt,aliases:Xt}),ei={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},ti=["en","en-us","english"],Ke=Object.freeze({__proto__:null,dictionary:ei,aliases:ti}),ii={years:"A\xF1os",months:"Meses",days:"D\xEDas",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},ni=["es","es-es","spanish"],ri=Object.freeze({__proto__:null,dictionary:ii,aliases:ni}),oi={years:"\u0633\u0627\u0644",months:"\u0645\u0627\u0647",days:"\u0631\u0648\u0632",hours:"\u0633\u0627\u0639\u062A",minutes:"\u062F\u0642\u06CC\u0642\u0647",seconds:"\u062B\u0627\u0646\u06CC\u0647"},si=["fa","fa-ir","persian"],ai=Object.freeze({__proto__:null,dictionary:oi,aliases:si}),li={years:"Vuotta",months:"Kuukautta",days:"P\xE4iv\xE4\xE4",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},ci=["fi","fi-fi","finnish"],ui=Object.freeze({__proto__:null,dictionary:li,aliases:ci}),fi={years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},di=["fr","fr-ca","french"],pi=Object.freeze({__proto__:null,dictionary:fi,aliases:di}),hi={years:"\u05E9\u05E0\u05D9\u05DD",months:"\u05D7\u05D5\u05D3\u05E9",days:"\u05D9\u05DE\u05D9\u05DD",hours:"\u05E9\u05E2\u05D5\u05EA",minutes:"\u05D3\u05E7\u05D5\u05EA",seconds:"\u05E9\u05E0\u05D9\u05D5\u05EA"},mi=["il","he-il","hebrew"],gi=Object.freeze({__proto__:null,dictionary:hi,aliases:mi}),yi={years:"\xC9v",months:"H\xF3nap",days:"Nap",hours:"\xD3ra",minutes:"Perc",seconds:"M\xE1sodperc"},vi=["hu","hu-hu","hungarian"],ki=Object.freeze({__proto__:null,dictionary:yi,aliases:vi}),_i={years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},bi=["da","da-dk","danish"],wi=Object.freeze({__proto__:null,dictionary:_i,aliases:bi}),Si={years:"\u5E74",months:"\u6708",days:"\u65E5",hours:"\u6642",minutes:"\u5206",seconds:"\u79D2"},xi=["jp","ja-jp","japanese"],Ti=Object.freeze({__proto__:null,dictionary:Si,aliases:xi}),Ni={years:"\uB144",months:"\uC6D4",days:"\uC77C",hours:"\uC2DC",minutes:"\uBD84",seconds:"\uCD08"},Ci=["ko","ko-kr","korean"],Ai=Object.freeze({__proto__:null,dictionary:Ni,aliases:Ci}),$i={years:"Gadi",months:"M\u0113ne\u0161i",days:"Dienas",hours:"Stundas",minutes:"Min\u016Btes",seconds:"Sekundes"},Pi=["lv","lv-lv","latvian"],zi=Object.freeze({__proto__:null,dictionary:$i,aliases:Pi}),Di={years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},Li=["nl","nl-be","dutch"],Oi=Object.freeze({__proto__:null,dictionary:Di,aliases:Li}),Ei={years:"\xC5r",months:"M\xE5neder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},Mi=["no","nb","no-nb","norwegian"],ji=Object.freeze({__proto__:null,dictionary:Ei,aliases:Mi}),Vi={years:"Lat",months:"Miesi\u0119cy",days:"Dni",hours:"Godziny",minutes:"Minuty",seconds:"Sekundy"},Ri=["pl","pl-pl","polish"],Fi=Object.freeze({__proto__:null,dictionary:Vi,aliases:Ri}),Hi={years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},Ii=["pt","pt-br","portuguese"],Ui=Object.freeze({__proto__:null,dictionary:Hi,aliases:Ii}),qi={years:"Ani",months:"Luni",days:"Zile",hours:"Ore",minutes:"Minute",seconds:"sSecunde"},Wi=["ro","ro-ro","romana"],Bi=Object.freeze({__proto__:null,dictionary:qi,aliases:Wi}),Gi={years:"\u043B\u0435\u0442",months:"\u043C\u0435\u0441\u044F\u0446\u0435\u0432",days:"\u0434\u043D\u0435\u0439",hours:"\u0447\u0430\u0441\u043E\u0432",minutes:"\u043C\u0438\u043D\u0443\u0442",seconds:"\u0441\u0435\u043A\u0443\u043D\u0434"},Yi=["ru","ru-ru","russian"],Ji=Object.freeze({__proto__:null,dictionary:Gi,aliases:Yi}),Zi={years:"Roky",months:"Mesiace",days:"Dni",hours:"Hodiny",minutes:"Min\xFAty",seconds:"Sekundy"},Ki=["sk","sk-sk","slovak"],Xi=Object.freeze({__proto__:null,dictionary:Zi,aliases:Ki}),Qi={years:"\xC5r",months:"M\xE5nader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},en=["sv","sv-se","swedish"],tn=Object.freeze({__proto__:null,dictionary:Qi,aliases:en}),nn={years:"\u0E1B\u0E35",months:"\u0E40\u0E14\u0E37\u0E2D\u0E19",days:"\u0E27\u0E31\u0E19",hours:"\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",minutes:"\u0E19\u0E32\u0E17\u0E35",seconds:"\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"},rn=["th","th-th","thai"],on=Object.freeze({__proto__:null,dictionary:nn,aliases:rn}),sn={years:"Y\u0131l",months:"Ay",days:"G\xFCn",hours:"Saat",minutes:"Dakika",seconds:"Saniye"},an=["tr","tr-tr","turkish"],ln=Object.freeze({__proto__:null,dictionary:sn,aliases:an}),cn={years:"\u0440\u043E\u043A\u0438",months:"\u043C\u0456\u0441\u044F\u0446\u0456",days:"\u0434\u043D\u0456",hours:"\u0433\u043E\u0434\u0438\u043D\u0438",minutes:"\u0445\u0432\u0438\u043B\u0438\u043D\u0438",seconds:"\u0441\u0435\u043A\u0443\u043D\u0434\u0438"},un=["ua","ua-ua","ukraine"],fn=Object.freeze({__proto__:null,dictionary:cn,aliases:un}),dn={years:"N\u0103m",months:"Th\xE1ng",days:"Ng\xE0y",hours:"Gi\u1EDD",minutes:"Ph\xFAt",seconds:"Gi\xE2y"},pn=["vn","vn-vn","vietnamese"],hn=Object.freeze({__proto__:null,dictionary:dn,aliases:pn}),mn={years:"\u5E74",months:"\u6708",days:"\u65E5",hours:"\u65F6",minutes:"\u5206",seconds:"\u79D2"},gn=["zh","zh-cn","chinese"],yn=Object.freeze({__proto__:null,dictionary:mn,aliases:gn}),vn={years:"\u5E74",months:"\u6708",days:"\u65E5",hours:"\u6642",minutes:"\u5206",seconds:"\u79D2"},kn=["zh-tw"],_n=Object.freeze({__proto__:null,dictionary:vn,aliases:kn}),Xe=Object.freeze({__proto__:null,Arabic:Ht,Catalan:qt,Czech:Gt,Danish:Zt,German:Qt,English:Ke,Spanish:ri,Persian:ai,Finnish:ui,French:pi,Hebrew:gi,Hungarian:ki,Italian:wi,Japanese:Ti,Korean:Ai,Latvian:zi,Dutch:Oi,Norwegian:ji,Polish:Fi,Portuguese:Ui,Romanian:Bi,Russian:Ji,Slovak:Xi,Swedish:tn,Thai:on,Turkish:ln,Ukrainian:fn,Vietnamese:hn,Chinese:yn,TraditionalChinese:_n});function Qe(t){return t?Xe[t.toLowerCase()]||Object.values(Xe).find(function(n){return n.aliases.indexOf(t)!==-1}):null}function bn(t,n){var s=Ne(n)?Qe(n):n,o=s.dictionary||s;return o[t]||t}function wn(t,n){return n.parentNode?(n.parentNode.replaceChild(t,n),t):n}function Sn(t,n){if(P(n))for(var s in n)t.setAttribute(s,n[s]);return t}function Z(t,n){return de(n)&&n.filter(L).forEach(function(s){s instanceof HTMLElement&&t.appendChild(s)}),t}function K(t,n,s){return t instanceof HTMLElement||(t=document.createElement(t)),Sn(t,P(n)?n:s),!P(n)&&!de(n)?t.innerHTML=n:Z(t,n),t}var X=(function(t){u(s,t);var n=h(s);function s(o){var i;if(e(this,s),i=n.call(this,Object.assign({parent:null},o)),i.theme||b("".concat(i.name," does not have a theme defined.")),i.language||b("".concat(i.name," does not have a language defined.")),!i.theme[i.name])throw new Error("".concat(i.name," cannot be rendered because it has no template."));return i}return a(s,[{key:"translate",value:function(i){return bn(i,this.language)}},{key:"t",value:function(i){return this.translate(i)}},{key:"render",value:function(){var i=K("div",{class:this.className==="flip-clock"?this.className:"flip-clock-"+this.className});return this.theme[this.name](i,this),this.el?this.el.innerHTML!==i.innerHTML&&(this.el=wn(i,this.el)):this.el=i,this.el}},{key:"mount",value:function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this.render(),this.parent=i,c?this.parent.insertBefore(this.el,c):this.parent.appendChild(this.el),this.el}},{key:"className",get:function(){return Ot(this.constructor.defineName())}},{key:"el",get:function(){return this.$el},set:function(i){E(i,null,HTMLElement)||b(M.element),this.$el=i}},{key:"parent",get:function(){return this.$parent},set:function(i){this.$parent=i}},{key:"theme",get:function(){return this.$theme},set:function(i){E(i,"object")||b(M.value),this.$theme=i}},{key:"language",get:function(){return this.$language},set:function(i){Ne(i)&&(i=Qe(i)),E(i,"object")||b(M.language),this.$language=i}}]),s})(pe),xn=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,null,[{key:"defineName",value:function(){return"Divider"}}]),s})(X),Tn=(function(t){u(s,t);var n=h(s);function s(o,i){return e(this,s),n.call(this,Object.assign({value:o},P(o)?o:null,i))}return a(s,null,[{key:"defineName",value:function(){return"ListItem"}}]),s})(X),Nn=(function(t){u(s,t);var n=h(s);function s(o,i){return e(this,s),n.call(this,Object.assign({value:o,items:[]},P(o)?o:null,i))}return a(s,[{key:"createListItem",value:function(i,c){var m=new Tn(i,Object.assign({theme:this.theme,language:this.language},c));return this.$items.push(m),m}},{key:"value",get:function(){return this.$value},set:function(i){this.$value=i}},{key:"items",get:function(){return this.$items},set:function(i){this.$items=i}}],[{key:"defineName",value:function(){return"List"}}]),s})(X),Cn=(function(t){u(s,t);var n=h(s);function s(o,i){return e(this,s),n.call(this,Object.assign({items:de(o)?o:[]},P(o)?o:null,i))}return a(s,null,[{key:"defineName",value:function(){return"Group"}}]),s})(X),An=(function(t){u(s,t);var n=h(s);function s(o,i){return e(this,s),n.call(this,Object.assign({label:o},P(o)?o:null,i))}return a(s,null,[{key:"defineName",value:function(){return"Label"}}]),s})(X),et=(function(t){u(s,t);var n=h(s);function s(o){return e(this,s),n.call(this,Object.assign({count:0,handle:null,started:null,running:!1,interval:Ce(o)?o:null},P(o)?o:null))}return a(s,[{key:"reset",value:function(i){var c=this;return this.stop(function(){c.count=0,c.start(function(){return x.call(c,i)}),c.emit("reset")}),this}},{key:"start",value:function(i){var c=this;this.started=new Date,this.lastLoop=Date.now(),this.running=!0,this.emit("start");var m=function y(){return Date.now()-c.lastLoop>=c.interval&&(x.call(c,i),c.lastLoop=Date.now(),c.emit("interval"),c.count++),c.handle=window.requestAnimationFrame(y),c};return m()}},{key:"stop",value:function(i){var c=this;return this.isRunning&&setTimeout(function(){window.cancelAnimationFrame(c.handle),c.running=!1,x.call(c,i),c.emit("stop")}),this}},{key:"elapsed",get:function(){return this.lastLoop?this.lastLoop-(this.started?this.started.getTime():new Date().getTime()):0}},{key:"isRunning",get:function(){return this.running===!0}},{key:"isStopped",get:function(){return this.running===!1}}],[{key:"defineName",value:function(){return"Timer"}}]),s})(pe),tt=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"increment",value:function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;i.value=this.value.value+c}},{key:"decrement",value:function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;i.value=this.value.value-c}}],[{key:"defineName",value:function(){return"Counter"}}]),s})(re),it=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!0}}},{key:"shouldStop",value:function(i){if(J(i.stopAt)||H(i.stopAt))return!1;if(this.stopAt instanceof Date)return this.countdown?this.stopAt.getTime()>=this.value.value.getTime():this.stopAt.getTime()<=this.value.value.getTime();if(Ce(this.stopAt)){var c=Math.floor((this.value.value.getTime()-this.originalValue.getTime())/1e3);return this.countdown?this.stopAt>=c:this.stopAt<=c}throw new Error("the stopAt property must be an instance of Date or Number.")}},{key:"increment",value:function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;i.value=new Date(this.value.value.getTime()+c+(new Date().getTime()-i.timer.lastLoop))}},{key:"decrement",value:function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;i.value=new Date(this.value.value.getTime()-c-(new Date().getTime()-i.timer.lastLoop))}},{key:"format",value:function(i,c){var m=i.timer.isRunning?i.timer.started:new Date;return[[this.getMinutes(c,m)],this.showSeconds?[this.getSeconds(c,m)]:null].filter(L)}},{key:"getMinutes",value:function(i,c){return V(this.getTotalSeconds(i,c)/60)}},{key:"getSeconds",value:function(i,c){var m=this.getTotalSeconds(i,c);return Math.abs(Math.ceil(m===60?0:m%60))}},{key:"getTotalSeconds",value:function(i,c){return i.getTime()===c.getTime()?0:Math.round((i.getTime()-c.getTime())/1e3)}}],[{key:"defineName",value:function(){return"MinuteCounter"}}]),s})(re),nt=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"format",value:function(i,c){var m=i.timer.started?i.timer.started:new Date,y=c||i.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,C=[[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&C.push([this.getSeconds(v,k)]),C}},{key:"getMinutes",value:function(i,c){return Math.abs(S(f(s.prototype),"getMinutes",this).call(this,i,c)%60)}},{key:"getHours",value:function(i,c){return Math.floor(this.getTotalSeconds(i,c)/60/60)}}],[{key:"defineName",value:function(){return"HourCounter"}}]),s})(it),rt=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"format",value:function(i,c){var m=i.started?c:new Date,y=c||i.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,C=[[this.getDays(v,k)],[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&C.push([this.getSeconds(v,k)]),C}},{key:"getDays",value:function(i,c){return Math.floor(this.getTotalSeconds(i,c)/60/60/24)}},{key:"getHours",value:function(i,c){return Math.abs(S(f(s.prototype),"getHours",this).call(this,i,c)%24)}}],[{key:"defineName",value:function(){return"DayCounter"}}]),s})(nt),ot=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultValue",value:function(){return new Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!1}}},{key:"format",value:function(i,c){c||(c=new Date);var m=[[c.getHours()],[c.getMinutes()]];return this.showSeconds&&m.push([c.getSeconds()]),m}},{key:"increment",value:function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;i.value=new Date(this.value.value.getTime()+c+(new Date().getTime()-i.timer.lastLoop))}},{key:"decrement",value:function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;i.value=new Date(this.value.value.getTime()-c-(new Date().getTime()-i.timer.lastLoop))}}],[{key:"defineName",value:function(){return"TwentyFourHourClock"}}]),s})(re),$n=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"defaultAttributes",value:function(){return{showLabels:!1,showSeconds:!0,showMeridium:!0}}},{key:"format",value:function(i,c){c||(c=new Date);var m=c.getHours(),y=[m>12?m-12:m===0?12:m,c.getMinutes()];return this.meridium=m>12?"pm":"am",this.showSeconds&&y.push(c.getSeconds()),y}}],[{key:"defineName",value:function(){return"TwelveHourClock"}}]),s})(ot),st=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"format",value:function(i,c){var m=i.timer.started?c:new Date,y=c||i.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,C=[[this.getWeeks(v,k)],[this.getDays(v,k)],[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&C.push([this.getSeconds(v,k)]),C}},{key:"getWeeks",value:function(i,c){return Math.floor(this.getTotalSeconds(i,c)/60/60/24/7)}},{key:"getDays",value:function(i,c){return Math.abs(S(f(s.prototype),"getDays",this).call(this,i,c)%7)}}],[{key:"defineName",value:function(){return"WeekCounter"}}]),s})(rt),Pn=(function(t){u(s,t);var n=h(s);function s(){return e(this,s),n.apply(this,arguments)}return a(s,[{key:"format",value:function(i,c){var m=i.timer.started?c:new Date,y=c||i.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,C=[[this.getYears(v,k)],[this.getWeeks(v,k)],[this.getDays(v,k)],[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&C.push([this.getSeconds(v,k)]),C}},{key:"getYears",value:function(i,c){return Math.floor(Math.max(0,this.getTotalSeconds(i,c)/60/60/24/7/52))}},{key:"getWeeks",value:function(i,c){return Math.abs(S(f(s.prototype),"getWeeks",this).call(this,i,c)%52)}}],[{key:"defineName",value:function(){return"YearCounter"}}]),s})(st),zn=Object.freeze({__proto__:null,Counter:tt,DayCounter:rt,MinuteCounter:it,HourCounter:nt,TwelveHourClock:$n,TwentyFourHourClock:ot,WeekCounter:st,YearCounter:Pn});function Dn(t,n){Z(t,[K("div",{class:"flip-clock-dot top"}),K("div",{class:"flip-clock-dot bottom"})])}function at(t,n){return t?t.childNodes?t.childNodes[n]:t[n]:null}function Ln(t){return t?t.querySelector(".flip-clock-list-item:first-child .top").innerHTML:null}function On(t,n){var s=n.value.digits.map(function(i,c){var m=at(n.el?n.el.querySelectorAll(".flip-clock-group"):null,c),y=i.map(function(v,k){var C=at(m?m.querySelectorAll(".flip-clock-list"):null,k),Yn=Ln(C);return n.createList(v,{domValue:Yn,countdown:n.countdown,animationRate:n.face.animationRate||n.face.delay})});return n.createGroup(y)}),o=s.map(function(i){return i.render()});Z(t,o)}function En(t,n){var s=n.items.map(function(o){return o.render()});Z(t,s)}function Mn(t,n){t.innerHTML=n.t(n.label)}function jn(t,n){var s=n.domValue||(n.countdown?jt(n.value):Vt(n.value));n.domValue&&n.domValue!==n.value&&t.classList.add("flip"),t.style.animationDelay="".concat(n.animationRate/2,"ms"),t.style.animationDuration="".concat(n.animationRate/2,"ms"),n.items=[n.createListItem(n.value,{active:!0}),n.createListItem(s,{active:!1})],Z(t,n.items.map(function(o){return o.render()}))}function Vn(t,n){var s=n.active===!0?"active":n.active===!1?"before":null;t.classList.add(s),Z(t,[K("div",[K("div",n.value,{class:"top"}),K("div",n.value,{class:"bottom"})],{class:"flip-clock-list-item-inner"})])}function Rn(t,n){n.createDivider().mount(t,t.childNodes[1]),n.createDivider().mount(t,t.childNodes[3]),n.face.showSeconds&&n.createDivider().mount(t,t.childNodes[5]),n.face.showLabels&&(n.createLabel("days").mount(t.childNodes[0]),n.createLabel("hours").mount(t.childNodes[2]),n.createLabel("minutes").mount(t.childNodes[4]),n.face.showSeconds&&n.createLabel("seconds").mount(t.childNodes[6]))}function Fn(t,n){n.createDivider().mount(t,t.childNodes[1]),n.face.showSeconds&&n.createDivider().mount(t,t.childNodes[3]),n.face.showLabels&&(n.createLabel("hours").mount(t.childNodes[0]),n.createLabel("minutes").mount(t.childNodes[2]),n.face.showSeconds&&n.createLabel("seconds").mount(t.childNodes[4]))}function Hn(t,n){n.face.showSeconds&&n.createDivider().mount(t,t.childNodes[1]),n.face.showLabels&&(n.createLabel("minutes").mount(t.childNodes[0]),n.face.showSeconds&&n.createLabel("seconds").mount(t.childNodes[2]))}function lt(t,n){n.createDivider().mount(t,t.childNodes[1]),n.face.showSeconds&&n.createDivider().mount(t,t.childNodes[3]),n.face.showLabels&&(n.createLabel("hours").mount(t.childNodes[0]),n.createLabel("minutes").mount(t.childNodes[2]),n.face.showSeconds&&n.createLabel("seconds").mount(t.childNodes[4]))}function In(t,n){if(lt(t,n),n.face.showMeridium&&n.face.meridium){var s=n.createLabel(n.face.meridium),o=t.childNodes[t.childNodes.length-1];s.mount(o).classList.add("flip-clock-meridium")}}function Un(t,n){n.createDivider().mount(t,t.childNodes[1]),n.createDivider().mount(t,t.childNodes[3]),n.createDivider().mount(t,t.childNodes[5]),n.face.showSeconds&&n.createDivider().mount(t,t.childNodes[7]),n.face.showLabels&&(n.createLabel("weeks").mount(t.childNodes[0]),n.createLabel("days").mount(t.childNodes[2]),n.createLabel("hours").mount(t.childNodes[4]),n.createLabel("minutes").mount(t.childNodes[6]),n.face.showSeconds&&n.createLabel("seconds").mount(t.childNodes[8]))}function qn(t,n){n.createDivider().mount(t,t.childNodes[1]),n.createDivider().mount(t,t.childNodes[3]),n.createDivider().mount(t,t.childNodes[5]),n.createDivider().mount(t,t.childNodes[7]),n.face.showSeconds&&n.createDivider().mount(t,t.childNodes[9]),n.face.showLabels&&(n.createLabel("years").mount(t.childNodes[0]),n.createLabel("weeks").mount(t.childNodes[2]),n.createLabel("days").mount(t.childNodes[4]),n.createLabel("hours").mount(t.childNodes[6]),n.createLabel("minutes").mount(t.childNodes[8]),n.face.showSeconds&&n.createLabel("seconds").mount(t.childNodes[10]))}var Wn=Object.freeze({__proto__:null,DayCounter:Rn,HourCounter:Fn,MinuteCounter:Hn,TwelveHourClock:In,TwentyFourHourClock:lt,WeekCounter:Un,YearCounter:qn}),Bn={Divider:Dn,FlipClock:On,Group:En,Label:Mn,List:jn,ListItem:Vn,faces:Wn},I={face:tt,theme:Bn,language:Ke},Gn=(function(t){u(s,t);var n=h(s);function s(o,i,c){var m;e(this,s),E(o,HTMLElement)||b(M.element),P(i)&&!c&&(c=i,i=void 0);var y=c.face||I.face;return delete c.face,m=n.call(this,Object.assign({originalValue:i,theme:I.theme,language:I.language,timer:et.make(c.interval||1e3)},c)),m.face||(m.face=y),m.mount(o),m}return a(s,[{key:"mount",value:function(i){return S(f(s.prototype),"mount",this).call(this,i),this.face.mounted(this),this}},{key:"render",value:function(){return S(f(s.prototype),"render",this).call(this),this.theme.faces[this.face.name]&&this.theme.faces[this.face.name](this.el,this),this.face.rendered(this),this.el}},{key:"start",value:function(i){var c=this;return this.timer.started||(this.value=this.originalValue),H(this.face.stopAt)&&(this.face.stopAt=this.stopAt),H(this.face.originalValue)&&(this.face.originalValue=this.originalValue),this.timer.start(function(){c.face.interval(c,i)}),this.face.started(this),this.emit("start")}},{key:"stop",value:function(i){return this.timer.stop(i),this.face.stopped(this),this.emit("stop")}},{key:"reset",value:function(i){var c=this;return this.value=this.originalValue,this.timer.reset(function(){return c.interval(c,i)}),this.face.reset(this),this.emit("reset")}},{key:"increment",value:function(i){return this.face.increment(this,i),this}},{key:"decrement",value:function(i){return this.face.decrement(this,i),this}},{key:"createDivider",value:function(i){return xn.make(Object.assign({theme:this.theme,language:this.language},i))}},{key:"createList",value:function(i,c){return Nn.make(i,Object.assign({theme:this.theme,language:this.language},c))}},{key:"createLabel",value:function(i,c){return An.make(i,Object.assign({theme:this.theme,language:this.language},c))}},{key:"createGroup",value:function(i,c){return Cn.make(i,Object.assign({theme:this.theme,language:this.language},c))}},{key:"face",get:function(){return this.$face},set:function(i){E(i,[re,"string","function"])||b(M.face),this.$face=(zn[i]||i).make(Object.assign(this.getPublicAttributes(),{originalValue:this.face?this.face.originalValue:void 0})),this.$face.initialized(this),this.value?this.$face.value=this.face.createFaceValue(this,this.value.value):this.value||(this.value=this.originalValue),this.el&&this.render()}},{key:"stopAt",get:function(){return ne(this.$stopAt)?this.$stopAt(this):this.$stopAt},set:function(i){this.$stopAt=i}},{key:"timer",get:function(){return this.$timer},set:function(i){E(i,et)||b(M.timer),this.$timer=i}},{key:"value",get:function(){return this.face?this.face.value:null},set:function(i){if(!this.face)throw new Error("A face must be set before setting a value.");i instanceof me?this.face.value=i:this.value?this.face.value=this.face.value.clone(i):this.face.value=this.face.createFaceValue(this,i),this.el&&this.render()}},{key:"originalValue",get:function(){return ne(this.$originalValue)&&!this.$originalValue.name?this.$originalValue():!H(this.$originalValue)&&!J(this.$originalValue)?this.$originalValue:this.face?this.face.defaultValue():void 0},set:function(i){this.$originalValue=i}}],[{key:"defineName",value:function(){return"FlipClock"}},{key:"setDefaultFace",value:function(i){E(i,re)||b(M.face),I.face=i}},{key:"setDefaultTheme",value:function(i){E(i,"object")||b(M.theme),I.theme=i}},{key:"setDefaultLanguage",value:function(i){E(i,"object")||b(M.language),I.language=i}},{key:"defaults",get:function(){return I}}]),s})(X);return Gn}))});var $e=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var U=(l,e,r=null)=>{for(;e!==r;){let a=e.nextSibling;l.removeChild(e),e=a}};var z=`{{lit-${String(Math.random()).slice(2)}}}`,Pe=`<!--${z}-->`,ut=new RegExp(`${z}|${Pe}`),Q="$lit$",q=class{constructor(e,r){this.parts=[],this.element=r;let a=[],u=[],f=document.createTreeWalker(r.content,133,null,!1),d=0,p=-1,g=0,{strings:_,values:{length:w}}=e;for(;g<w;){let h=f.nextNode();if(h===null){f.currentNode=u.pop();continue}if(p++,h.nodeType===1){if(h.hasAttributes()){let T=h.attributes,{length:S}=T,b=0;for(let x=0;x<S;x++)ft(T[x].name,Q)&&b++;for(;b-- >0;){let x=_[g],V=ye.exec(x)[2],L=V.toLowerCase()+Q,O=h.getAttribute(L);h.removeAttribute(L);let $=O.split(ut);this.parts.push({type:"attribute",index:p,name:V,strings:$}),g+=$.length-1}}h.tagName==="TEMPLATE"&&(u.push(h),f.currentNode=h.content)}else if(h.nodeType===3){let T=h.data;if(T.indexOf(z)>=0){let S=h.parentNode,b=T.split(ut),x=b.length-1;for(let V=0;V<x;V++){let L,O=b[V];if(O==="")L=D();else{let $=ye.exec(O);$!==null&&ft($[2],Q)&&(O=O.slice(0,$.index)+$[1]+$[2].slice(0,-Q.length)+$[3]),L=document.createTextNode(O)}S.insertBefore(L,h),this.parts.push({type:"node",index:++p})}b[x]===""?(S.insertBefore(D(),h),a.push(h)):h.data=b[x],g+=x}}else if(h.nodeType===8)if(h.data===z){let T=h.parentNode;(h.previousSibling===null||p===d)&&(p++,T.insertBefore(D(),h)),d=p,this.parts.push({type:"node",index:p}),h.nextSibling===null?h.data="":(a.push(h),p--),g++}else{let T=-1;for(;(T=h.data.indexOf(z,T+1))!==-1;)this.parts.push({type:"node",index:-1}),g++}}for(let h of a)h.parentNode.removeChild(h)}},ft=(l,e)=>{let r=l.length-e.length;return r>=0&&l.slice(r)===e},oe=l=>l.index!==-1,D=()=>document.createComment(""),ye=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var ze=133;function De(l,e){let{element:{content:r},parts:a}=l,u=document.createTreeWalker(r,ze,null,!1),f=se(a),d=a[f],p=-1,g=0,_=[],w=null;for(;u.nextNode();){p++;let h=u.currentNode;for(h.previousSibling===w&&(w=null),e.has(h)&&(_.push(h),w===null&&(w=h)),w!==null&&g++;d!==void 0&&d.index===p;)d.index=w!==null?-1:d.index-g,f=se(a,f),d=a[f]}_.forEach(h=>h.parentNode.removeChild(h))}var ir=l=>{let e=l.nodeType===11?0:1,r=document.createTreeWalker(l,ze,null,!1);for(;r.nextNode();)e++;return e},se=(l,e=-1)=>{for(let r=e+1;r<l.length;r++){let a=l[r];if(oe(a))return r}return-1};function dt(l,e,r=null){let{element:{content:a},parts:u}=l;if(r==null){a.appendChild(e);return}let f=document.createTreeWalker(a,ze,null,!1),d=se(u),p=0,g=-1;for(;f.nextNode();)for(g++,f.currentNode===r&&(p=ir(e),r.parentNode.insertBefore(e,r));d!==-1&&u[d].index===g;){if(p>0){for(;d!==-1;)u[d].index+=p,d=se(u,d);return}d=se(u,d)}}var nr=new WeakMap;var W=l=>typeof l=="function"&&nr.has(l);var A={},ve={};var R=class{constructor(e,r,a){this.__parts=[],this.template=e,this.processor=r,this.options=a}update(e){let r=0;for(let a of this.__parts)a!==void 0&&a.setValue(e[r]),r++;for(let a of this.__parts)a!==void 0&&a.commit()}_clone(){let e=$e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],a=this.template.parts,u=document.createTreeWalker(e,133,null,!1),f=0,d=0,p,g=u.nextNode();for(;f<a.length;){if(p=a[f],!oe(p)){this.__parts.push(void 0),f++;continue}for(;d<p.index;)d++,g.nodeName==="TEMPLATE"&&(r.push(g),u.currentNode=g.content),(g=u.nextNode())===null&&(u.currentNode=r.pop(),g=u.nextNode());if(p.type==="node"){let _=this.processor.handleTextExpression(this.options);_.insertAfterNode(g.previousSibling),this.__parts.push(_)}else this.__parts.push(...this.processor.handleAttributeExpressions(g,p.name,p.strings,this.options));f++}return $e&&(document.adoptNode(e),customElements.upgrade(e)),e}};var pt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:l=>l}),or=` ${z} `,j=class{constructor(e,r,a,u){this.strings=e,this.values=r,this.type=a,this.processor=u}getHTML(){let e=this.strings.length-1,r="",a=!1;for(let u=0;u<e;u++){let f=this.strings[u],d=f.lastIndexOf("<!--");a=(d>-1||a)&&f.indexOf("-->",d+1)===-1;let p=ye.exec(f);p===null?r+=f+(a?or:Pe):r+=f.substr(0,p.index)+p[1]+p[2]+Q+p[3]+z}return r+=this.strings[e],r}getTemplateElement(){let e=document.createElement("template"),r=this.getHTML();return pt!==void 0&&(r=pt.createHTML(r)),e.innerHTML=r,e}};var be=l=>l===null||!(typeof l=="object"||typeof l=="function"),ke=l=>Array.isArray(l)||!!(l&&l[Symbol.iterator]),ee=class{constructor(e,r,a){this.dirty=!0,this.element=e,this.name=r,this.strings=a,this.parts=[];for(let u=0;u<a.length-1;u++)this.parts[u]=this._createPart()}_createPart(){return new ae(this)}_getValue(){let e=this.strings,r=e.length-1,a=this.parts;if(r===1&&e[0]===""&&e[1]===""){let f=a[0].value;if(typeof f=="symbol")return String(f);if(typeof f=="string"||!ke(f))return f}let u="";for(let f=0;f<r;f++){u+=e[f];let d=a[f];if(d!==void 0){let p=d.value;if(be(p)||!ke(p))u+=typeof p=="string"?p:String(p);else for(let g of p)u+=typeof g=="string"?g:String(g)}}return u+=e[r],u}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},ae=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==A&&(!be(e)||e!==this.value)&&(this.value=e,W(e)||(this.committer.dirty=!0))}commit(){for(;W(this.value);){let e=this.value;this.value=A,e(this)}this.value!==A&&this.committer.commit()}},B=class l{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(D()),this.endNode=e.appendChild(D())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=D()),e.__insert(this.endNode=D())}insertAfterPart(e){e.__insert(this.startNode=D()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;W(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=A,r(this)}let e=this.__pendingValue;e!==A&&(be(e)?e!==this.value&&this.__commitText(e):e instanceof j?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):ke(e)?this.__commitIterable(e):e===ve?(this.value=ve,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let r=this.startNode.nextSibling;e=e==null?"":e;let a=typeof e=="string"?e:String(e);r===this.endNode.previousSibling&&r.nodeType===3?r.data=a:this.__commitNode(document.createTextNode(a)),this.value=e}__commitTemplateResult(e){let r=this.options.templateFactory(e);if(this.value instanceof R&&this.value.template===r)this.value.update(e.values);else{let a=new R(r,e.processor,this.options),u=a._clone();a.update(e.values),this.__commitNode(u),this.value=a}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let r=this.value,a=0,u;for(let f of e)u=r[a],u===void 0&&(u=new l(this.options),r.push(u),a===0?u.appendIntoPart(this):u.insertAfterPart(r[a-1])),u.setValue(f),u.commit(),a++;a<r.length&&(r.length=a,this.clear(u&&u.endNode))}clear(e=this.startNode){U(this.startNode.parentNode,e.nextSibling,this.endNode)}},le=class{constructor(e,r,a){if(this.value=void 0,this.__pendingValue=void 0,a.length!==2||a[0]!==""||a[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=a}setValue(e){this.__pendingValue=e}commit(){for(;W(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=A,r(this)}if(this.__pendingValue===A)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=A}},ce=class extends ee{constructor(e,r,a){super(e,r,a),this.single=a.length===2&&a[0]===""&&a[1]===""}_createPart(){return new _e(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},_e=class extends ae{},ht=!1;(()=>{try{let l={get capture(){return ht=!0,!1}};window.addEventListener("test",l,l),window.removeEventListener("test",l,l)}catch(l){}})();var ue=class{constructor(e,r,a){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=a,this.__boundHandleEvent=u=>this.handleEvent(u)}setValue(e){this.__pendingValue=e}commit(){for(;W(this.__pendingValue);){let f=this.__pendingValue;this.__pendingValue=A,f(this)}if(this.__pendingValue===A)return;let e=this.__pendingValue,r=this.value,a=e==null||r!=null&&(e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive),u=e!=null&&(r==null||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),u&&(this.__options=sr(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=A}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}},sr=l=>l&&(ht?{capture:l.capture,passive:l.passive,once:l.once}:l.capture);function Le(l){let e=G.get(l.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},G.set(l.type,e));let r=e.stringsArray.get(l.strings);if(r!==void 0)return r;let a=l.strings.join(z);return r=e.keyString.get(a),r===void 0&&(r=new q(l,l.getTemplateElement()),e.keyString.set(a,r)),e.stringsArray.set(l.strings,r),r}var G=new Map;var F=new WeakMap,Oe=(l,e,r)=>{let a=F.get(e);a===void 0&&(U(e,e.firstChild),F.set(e,a=new B(Object.assign({templateFactory:Le},r))),a.appendInto(e)),a.setValue(l),a.commit()};var we=class{handleAttributeExpressions(e,r,a,u){let f=r[0];return f==="."?new ce(e,r.slice(1),a).parts:f==="@"?[new ue(e,r.slice(1),u.eventContext)]:f==="?"?[new le(e,r.slice(1),a)]:new ee(e,r,a).parts}handleTextExpression(e){return new B(e)}},Ee=new we;typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var N=(l,...e)=>new j(l,e,"html",Ee);var gt=(l,e)=>`${l}--${e}`,Se=!0;typeof window.ShadyCSS=="undefined"?Se=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Se=!1);var lr=l=>e=>{let r=gt(e.type,l),a=G.get(r);a===void 0&&(a={stringsArray:new WeakMap,keyString:new Map},G.set(r,a));let u=a.stringsArray.get(e.strings);if(u!==void 0)return u;let f=e.strings.join(z);if(u=a.keyString.get(f),u===void 0){let d=e.getTemplateElement();Se&&window.ShadyCSS.prepareTemplateDom(d,l),u=new q(e,d),a.keyString.set(f,u)}return a.stringsArray.set(e.strings,u),u},cr=["html","svg"],ur=l=>{cr.forEach(e=>{let r=G.get(gt(e,l));r!==void 0&&r.keyString.forEach(a=>{let{element:{content:u}}=a,f=new Set;Array.from(u.querySelectorAll("style")).forEach(d=>{f.add(d)}),De(a,f)})})},yt=new Set,fr=(l,e,r)=>{yt.add(l);let a=r?r.element:document.createElement("template"),u=e.querySelectorAll("style"),{length:f}=u;if(f===0){window.ShadyCSS.prepareTemplateStyles(a,l);return}let d=document.createElement("style");for(let _=0;_<f;_++){let w=u[_];w.parentNode.removeChild(w),d.textContent+=w.textContent}ur(l);let p=a.content;r?dt(r,d,p.firstChild):p.insertBefore(d,p.firstChild),window.ShadyCSS.prepareTemplateStyles(a,l);let g=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&g!==null)e.insertBefore(g.cloneNode(!0),e.firstChild);else if(r){p.insertBefore(d,p.firstChild);let _=new Set;_.add(d),De(r,_)}},vt=(l,e,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");let a=r.scopeName,u=F.has(e),f=Se&&e.nodeType===11&&!!e.host,d=f&&!yt.has(a),p=d?document.createDocumentFragment():e;if(Oe(l,p,Object.assign({templateFactory:lr(a)},r)),d){let g=F.get(p);F.delete(p);let _=g.value instanceof R?g.value.template:void 0;fr(a,p,_),U(e,e.firstChild),e.appendChild(p),F.set(e,g)}!u&&f&&window.ShadyCSS.styleElement(e.host)};var kt;window.JSCompiler_renameProperty=(l,e)=>l;var He={toAttribute(l,e){switch(e){case Boolean:return l?"":null;case Object:case Array:return l==null?l:JSON.stringify(l)}return l},fromAttribute(l,e){switch(e){case Boolean:return l!==null;case Number:return l===null?null:Number(l);case Object:case Array:return JSON.parse(l)}return l}},_t=(l,e)=>e!==l&&(e===e||l===l),Me={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:_t},je=1,Ve=4,Re=8,Fe=16,Ie="finalized",te=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((r,a)=>{let u=this._attributeNameForProperty(a,r);u!==void 0&&(this._attributeToPropertyMap.set(u,a),e.push(u))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((r,a)=>this._classProperties.set(a,r))}}static createProperty(e,r=Me){if(this._ensureClassProperties(),this._classProperties.set(e,r),r.noAccessor||this.prototype.hasOwnProperty(e))return;let a=typeof e=="symbol"?Symbol():`__${e}`,u=this.getPropertyDescriptor(e,a,r);u!==void 0&&Object.defineProperty(this.prototype,e,u)}static getPropertyDescriptor(e,r,a){return{get(){return this[r]},set(u){let f=this[e];this[r]=u,this.requestUpdateInternal(e,f,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Me}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Ie)||e.finalize(),this[Ie]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let r=this.properties,a=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(let u of a)this.createProperty(u,r[u])}}static _attributeNameForProperty(e,r){let a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,r,a=_t){return a(e,r)}static _propertyValueFromAttribute(e,r){let a=r.type,u=r.converter||He,f=typeof u=="function"?u:u.fromAttribute;return f?f(e,a):e}static _propertyValueToAttribute(e,r){if(r.reflect===void 0)return;let a=r.type,u=r.converter;return(u&&u.toAttribute||He.toAttribute)(e,a)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,r)=>{if(this.hasOwnProperty(r)){let a=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,a)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,r)=>this[r]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,r,a){r!==a&&this._attributeToProperty(e,a)}_propertyToAttribute(e,r,a=Me){let u=this.constructor,f=u._attributeNameForProperty(e,a);if(f!==void 0){let d=u._propertyValueToAttribute(r,a);if(d===void 0)return;this._updateState=this._updateState|Re,d==null?this.removeAttribute(f):this.setAttribute(f,d),this._updateState=this._updateState&~Re}}_attributeToProperty(e,r){if(this._updateState&Re)return;let a=this.constructor,u=a._attributeToPropertyMap.get(e);if(u!==void 0){let f=a.getPropertyOptions(u);this._updateState=this._updateState|Fe,this[u]=a._propertyValueFromAttribute(r,f),this._updateState=this._updateState&~Fe}}requestUpdateInternal(e,r,a){let u=!0;if(e!==void 0){let f=this.constructor;a=a||f.getPropertyOptions(e),f._valueHasChanged(this[e],r,a.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,r),a.reflect===!0&&!(this._updateState&Fe)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,a))):u=!1}!this._hasRequestedUpdate&&u&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,r){return this.requestUpdateInternal(e,r),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|Ve;try{await this._updatePromise}catch(r){}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&Ve}get hasUpdated(){return this._updateState&je}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,r=this._changedProperties;try{e=this.shouldUpdate(r),e?this.update(r):this._markUpdated()}catch(a){throw e=!1,this._markUpdated(),a}e&&(this._updateState&je||(this._updateState=this._updateState|je,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ve}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,a)=>this._propertyToAttribute(a,this[a],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};kt=Ie;te[kt]=!0;var dr=(l,e)=>(window.customElements.define(l,e),e),pr=(l,e)=>{let{kind:r,elements:a}=e;return{kind:r,elements:a,finisher(u){window.customElements.define(l,u)}}},wt=l=>e=>typeof e=="function"?dr(l,e):pr(l,e),hr=(l,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(r){r.createProperty(e.key,l)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,l)}},mr=(l,e,r)=>{e.constructor.createProperty(r,l)};function Ue(l){return(e,r)=>r!==void 0?mr(l,e,r):hr(l,e)}var bt=Element.prototype,go=bt.msMatchesSelector||bt.webkitMatchesSelector;var xe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),qe=class{constructor(e,r){if(r!==St)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(xe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},xt=l=>new qe(String(l),St);(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var Tt={},Y=class extends te{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let r=(f,d)=>f.reduceRight((p,g)=>Array.isArray(g)?r(g,p):(p.add(g),p),d),a=r(e,new Set),u=[];a.forEach(f=>u.unshift(f)),this._styles=u}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(r=>{if(r instanceof CSSStyleSheet&&!xe){let a=Array.prototype.slice.call(r.cssRules).reduce((u,f)=>u+f.cssText,"");return xt(a)}return r})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(r=>r.cssText),this.localName):xe?this.renderRoot.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let r=this.render();super.update(e),r!==Tt&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(a=>{let u=document.createElement("style");u.textContent=a.cssText,this.renderRoot.appendChild(u)}))}render(){return Tt}};Y.finalized=!0;Y.render=vt;Y.shadowRootOptions={mode:"open"};var Pt=tr(Nt());var Ct=N`
  <style>
    :host {
      display: block;
      height: 100%;
    }

    ha-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .fc-content {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-areas:
        'fc-header fc-header fc-header'
        'fc-time fc-time fc-time'
        'fc-date fc-date fc-date'
        'fc-timezone fc-timezone fc-timezone';
      grid-template-columns: auto auto auto;
      grid-template-rows: auto 1fr auto auto;
    }

    .fc-header,
    .fc-date {
      grid-area: fc-header;
      color: var(--ha-card-header-color, --primary-text-color);
      font-family: var(--ha-card-header-font-family, inherit);
      font-size: var(--ha-card-header-font-size, 24px);
      font-weight: var(--paper-font-headline_-_font-weight);
      letter-spacing: var(--paper-font-headline_-_letter-spacing);
      line-height: var(--paper-font-headline_-_line-height);
      text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
      -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
      display: block;
    }

    .fc-header {
      padding: 24px 16px 16px;
    }

    .fc-date {
      text-align: center;
    }

    .fc-time {
      grid-area: fc-time;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fc-date {
      grid-area: fc-date;
    }

    .fc-timezone {
      grid-area: fc-timezone;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1em;
      color: var(--secondary-text-color);
    }

    .fc-timezone .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: initial;
    }

    .tz-time {
      margin-left: 40px;
    }

    .tz {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    }

    .tz .tz-icon {
      flex: 0 0 40px;
    }

    .tz .tz-locale {
      flex: 1 0 60px;
    }

    .flip-clock {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .flip-clock {
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 16px;
      -webkit-user-select: none;
      text-align: center;
      position: relative;
      display: flex;
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      box-sizing: border-box;
      align-items: flex-end;
      padding: 1em;
    }
    .flip-clock .flip-clock-group {
      display: flex;
      position: relative;
    }
    .flip-clock .flip-clock-group .flip-clock-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      font-size: 1em;
      height: 2em;
      line-height: 2em;
      font-weight: 400;
      text-transform: capitalize;
      transform: translateY(-100%);
    }
    .flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium {
      font-size: 1.75em;
      line-height: 1.75em;
      top: 50%;
      left: 100%;
      flex: 0;
      width: auto;
      text-transform: uppercase;
      font-weight: 200;
      transform: translate(0.5em, -50%);
    }
    .flip-clock .flip-clock-group .flip-clock-list {
      width: 4em;
      height: 6em;
      position: relative;
      border-radius: 0.75rem;
      box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.24), 0 3px 8px rgba(0, 0, 0, 0.05);
      font-weight: bold;
      color: #ccc;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(:last-child) {
      margin-right: 0.333em;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .active .flip-clock-list-item-inner {
      z-index: 4;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .top:after,
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .bottom:after {
      display: none;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip {
      animation-delay: 500ms;
      animation-duration: 500ms;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .flip-clock-list-item-inner {
      perspective: 15em;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div {
      animation-delay: inherit;
      animation-fill-mode: forwards;
      animation-duration: inherit;
      animation-timing-function: ease-in;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div:after {
      animation-duration: inherit;
      animation-fill-mode: inherit;
      animation-timing-function: inherit;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before {
      animation-delay: 0s;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top {
      animation-name: flip-top;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .bottom:after {
      animation-name: show-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div {
      animation-name: indexing;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom:after {
      animation-delay: calc(500ms * 0.15);
      animation-name: hide-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom {
      animation-name: flip-bottom;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active .bottom {
      z-index: 2;
      transform-origin: top center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before {
      z-index: 3;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top {
      z-index: 2;
      transform-origin: bottom center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top:after {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .bottom:after {
      background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: rotateX(0.0001deg);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner:first-child {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom {
      width: 100%;
      height: 50%;
      overflow: hidden;
      position: relative;
      font-size: 4.5em;
      background: #333;
      box-shadow: inset 0 0 0.2em rgba(0, 0, 0, 0.5);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:after,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:before,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:before {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top {
      border-radius: 0.75rem 0.75rem 0 0;
      line-height: 1.33333;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:after {
      border-radius: 0.75rem 0.75rem 0 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:before {
      background: #333;
      opacity: 0.4;
      bottom: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom {
      border-radius: 0 0 0.75rem 0.75rem;
      line-height: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:after {
      border-radius: 0 0 0.75rem 0.75rem;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:before {
      background: #ccc;
      opacity: 0.1;
    }
    .flip-clock .flip-clock-divider {
      position: relative;
      width: 1.5em;
      height: 6em;
    }
    .flip-clock .flip-clock-divider:before,
    .flip-clock .flip-clock-divider:after {
      content: ' ';
      display: block;
      width: 0.75em;
      height: 0.75em;
      background: #333;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .flip-clock .flip-clock-divider:before {
      transform: translate(-50%, 75%);
    }
    .flip-clock .flip-clock-divider:after {
      transform: translate(-50%, -175%);
    }

    @keyframes indexing {
      0% {
        z-index: 2;
      }
      1% {
        z-index: 3;
      }
      100% {
        z-index: 4;
      }
    }

    @keyframes flip-bottom {
      0% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }

    @keyframes flip-top {
      0% {
        transform: rotateX(0);
      }
      100% {
        transform: rotateX(-90deg);
      }
    }

    @keyframes show-shadow {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes hide-shadow {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  </style>
`;function At(l){var g,_,w,h,T,S;let e=(g=l==null?void 0:l.date)==null?void 0:g.fontSize,r=(_=l==null?void 0:l.date)==null?void 0:_.fontFamily,a=(w=l==null?void 0:l.time)==null?void 0:w.meridiemFontSize,u=(h=l==null?void 0:l.time)==null?void 0:h.meridiemFontFamily,f=(T=l==null?void 0:l.time)==null?void 0:T.meridiemOffset,d=(S=l==null?void 0:l.time)==null?void 0:S.cardSize,p=[e?`.fc-date { font-size: ${e}; }`:"",r?`.fc-date { font-family: ${r}; }`:"",d?`.flip-clock { font-size: ${d}; }`:"",a?`.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { font-size: ${a}; }`:"",u?`.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { font-family: ${u}; }`:"",f?`.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { transform: translate(${f}, -50%); }`:""].filter(Boolean).join(`
`);return N`<style>${p}</style>`}function Ge(...l){let e=r=>r&&typeof r=="object";return l.reduce((r,a)=>(Object.keys(a).forEach(u=>{let f=r[u],d=a[u];Array.isArray(f)&&Array.isArray(d)?r[u]=f.concat(...d):e(f)&&e(d)?r[u]=Ge(f,d):r[u]=d}),r),{})}var $t="0.0.1";console.info(`%c  FLIPCLOCK-CARD 
%c  Version ${$t}  `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");var ie=class extends Y{constructor(){super(...arguments);this._clockFaces=["TwentyFourHourClock","TwelveHourClock"];this._firstUpdated=!1}set hass(r){this._hass=r,this._date=new Date,setInterval(this.updateTimezones.bind(this),500)}setConfig(r){if(!r)throw new Error("Invalid configuration");this._config=Ge({title:null,time:{face:"TwentyFourHourClock",showSeconds:!1,meridiemFontSize:null,meridiemFontFamily:null,meridiemOffset:null,cardSize:null},timezones:[],date:{format:{weekday:"long",day:"numeric",month:"long",year:"numeric"},hidden:!1,locale:null,fontSize:null,fontFamily:null}},r),this._timezones=[],this._config.timezones.forEach(a=>{this._timezones.push({id:typeof a=="string"?a:a.id,title:typeof a=="string"?a:a.title})})}shouldUpdate(){return!this._firstUpdated}firstUpdated(){this._firstUpdated=!0}render(){return!this._config||!this._hass?N``:N`
      <ha-card>
        <div class="fc-content">
          ${this.showValue(this._config.title)?N`
                <div class="fc-header">
                  ${this._config.title}
                </div>
              `:""}
          <div class="fc-time">
            ${this.renderClock()}
          </div>
          ${this.renderDate()} ${this.renderTimezones()}
        </div>
      </ha-card>
      ${Ct} ${At(this._config)}
    `}getCardSize(){return 3}showValue(r){return typeof r!="undefined"&&r!==null}renderClock(){if(this._clockFaces.includes(this._config.time.face)){let r=document.createElement("div");return r.className="fc-now",new Pt.default(r,this._date,{face:this._config.time.face,showSeconds:this._config.time.showSeconds}),N`${r}`}return N``}renderDate(){return this._config.date.hidden?N``:N` <div class="fc-date">
        ${this.formatDate(this._date)}
      </div>`}formatDate(r,a){var d;let u=this._config.date.locale||((d=this._hass)==null?void 0:d.language),f=a||this._config.date.format;return r.toLocaleDateString(u,f)}formatTimezone(r){return this.formatDate(this._date,{hour:"numeric",minute:"numeric",timeZone:r,weekday:"short"})}renderTimezones(){return N`
      <div class="fc-timezone" id="fc_timezone">
        ${this._timezones.map((r,a)=>N`
            <div class="item">
              <div class="tz">
                <ha-icon class="tz-icon" icon="mdi:clock-outline"></ha-icon>
                <div class="tz-locale">${r.title}</div>
              </div>
              <div class="tz-time" id="tz_${a}">
                ${this.formatTimezone(r.id)}
              </div>
            </div>
          `)}
      </div>
    `}updateTimezones(){this._timezones.map((r,a)=>{var f;let u=(f=this.shadowRoot)==null?void 0:f.getElementById(`tz_${a}`);u&&(u.innerHTML=this.formatTimezone(r.id))})}};ge([Ue()],ie.prototype,"_hass",2),ge([Ue()],ie.prototype,"_config",2),ie=ge([wt("flipclock-card")],ie);export{ie as FlipClockCard};
/*! Bundled license information:

lit-html/lib/dom.js:
lit-html/lib/template.js:
lit-html/lib/modify-template.js:
lit-html/lib/directive.js:
lit-html/lib/template-instance.js:
lit-html/lib/template-result.js:
lit-html/lib/parts.js:
lit-html/lib/template-factory.js:
lit-html/lib/render.js:
lit-html/lib/default-template-processor.js:
lit-html/lit-html.js:
lit-html/lib/shady-render.js:
lit-element/lib/updating-element.js:
lit-element/lib/decorators.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   *)

lit-html/lib/part.js:
  (**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   *)

lit-element/lib/css-tag.js:
  (**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)
*/

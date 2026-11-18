var Jn=Object.create;var $e=Object.defineProperty;var ct=Object.getOwnPropertyDescriptor;var Zn=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,Xn=Object.prototype.hasOwnProperty;var Qn=(l,e)=>()=>{try{return e||l((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var er=(l,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of Zn(e))!Xn.call(l,c)&&c!==t&&$e(l,c,{get:()=>e[c],enumerable:!(s=ct(e,c))||s.enumerable});return l};var tr=(l,e,t)=>(t=l!=null?Jn(Kn(l)):{},er(e||!l||!l.__esModule?$e(t,"default",{value:l,enumerable:!0}):t,l));var ge=(l,e,t,s)=>{for(var c=s>1?void 0:s?ct(e,t):e,f=l.length-1,d;f>=0;f--)(d=l[f])&&(c=(s?d(e,t,c):d(c))||c);return s&&c&&$e(e,t,c),c};var Ct=Qn((qe,We)=>{"use strict";(function(l,e){typeof qe=="object"&&typeof We!="undefined"?We.exports=e():typeof define=="function"&&define.amd?define(e):(l=l||self,l.FlipClock=e())})(qe,(function(){"use strict";function l(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(r){return typeof r}:l=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l(i)}function e(i,r){if(!(i instanceof r))throw new TypeError("Cannot call a class as a function")}function t(i,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function s(i,r,a){return r&&t(i.prototype,r),a&&t(i,a),i}function c(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(r&&r.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),r&&d(i,r)}function f(i){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},f(i)}function d(i,r){return d=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},d(i,r)}function p(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(i){return!1}}function g(i,r,a){return p()?g=Reflect.construct:g=function(n,u,m){var y=[null];y.push.apply(y,u);var v=Function.bind.apply(n,y),k=new v;return m&&d(k,m.prototype),k},g.apply(null,arguments)}function b(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function w(i,r){return r&&(typeof r=="object"||typeof r=="function")?r:b(i)}function h(i){return function(){var r=f(i),a;if(p()){var o=f(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return w(this,a)}}function C(i,r){for(;!Object.prototype.hasOwnProperty.call(i,r)&&(i=f(i),i!==null););return i}function x(i,r,a){return typeof Reflect!="undefined"&&Reflect.get?x=Reflect.get:x=function(n,u,m){var y=C(n,u);if(y){var v=Object.getOwnPropertyDescriptor(y,u);return v.get?v.get.call(m):v.value}},x(i,r,a||i)}function _(i){throw Error(i)}function S(i){if(ne(i)){for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return i.call.apply(i,[this].concat(a))}}function D(i){return Ye(i=zt(i)?Math.ceil(i):Math.floor(i))?("-"+i).toString():i}function P(i){return!H(i)&&!J(i)}function L(i,r){return function(){return r(i())}}function N(i){return function(r){return r.map(i).reduce(function(a,o){return a.concat(o)},[])}}function Te(i){return N(function(r){return r})(i)}function fe(i){return N(function(r){return Array.isArray(r)?fe(r):r})(i)}function Lt(i){return fe(i).length}function Ye(i){return 1/Math.round(i)===-1/0}function zt(i){return Ye(i)||i<0}function J(i){return i===null}function H(i){return typeof i=="undefined"}function Et(i){return i instanceof Function&&!!i.name}function Ce(i){return typeof i=="string"}function de(i){return i instanceof Array}function z(i){var r=l(i);return i!=null&&!de(i)&&(r=="object"||r=="function")}function ne(i){return i instanceof Function}function Ne(i){return!isNaN(i)}function Dt(i){return i.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}var pe=(function(){function i(r){e(this,i),this.setAttribute(Object.assign({events:{}},r))}return s(i,[{key:"emit",value:function(a){for(var o=this,n=arguments.length,u=new Array(n>1?n-1:0),m=1;m<n;m++)u[m-1]=arguments[m];return this.events[a]&&this.events[a].forEach(function(y){y.apply(o,u)}),this}},{key:"on",value:function(a,o){return this.events[a]||(this.events[a]=[]),this.events[a].push(o),this}},{key:"off",value:function(a,o){return this.events[a]&&o?this.events[a]=this.events[a].filter(function(n){return n!==o}):this.events[a]=[],this}},{key:"once",value:function(a,o){var n=this;return o=L(o,function(){return n.off(a,o)}),this.on(a,o,!0)}},{key:"getAttribute",value:function(a){return this.hasOwnProperty(a)?this[a]:null}},{key:"getAttributes",value:function(){var a=this,o={};return Object.getOwnPropertyNames(this).forEach(function(n){o[n]=a.getAttribute(n)}),o}},{key:"getPublicAttributes",value:function(){var a=this;return Object.keys(this.getAttributes()).filter(function(o){return!o.match(/^\$/)}).reduce(function(o,n){return o[n]=a.getAttribute(n),o},{})}},{key:"setAttribute",value:function(a,o){z(a)?this.setAttributes(a):this[a]=o}},{key:"setAttributes",value:function(a){for(var o in a)this.setAttribute(o,a[o])}},{key:"callback",value:function(a){return S.call(this,a)}},{key:"name",get:function(){return this.constructor.defineName instanceof Function||_("Every class must define its name."),this.constructor.defineName()}},{key:"events",get:function(){return this.$events||{}},set:function(a){this.$events=a}}],[{key:"make",value:function(){for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return g(this,o)}}]),i})();function Mt(i,r){r=Object.assign({minimumDigits:0,prependLeadingZero:!0},r);function a(n){var u=r.prependLeadingZero&&n.toString().split("").length===1;return(u?"0":"").concat(n)}function o(n,u){var m=fe(n).length;if(m<u)for(var y=0;y<u-m;y++)n[0].unshift("0");return n}return o(Te([i]).map(function(n){return Te(fe([n]).map(function(u){return a(u).split("")}))}),r.minimumDigits||0)}var he=[{min:48,max:57},{min:65,max:90},{min:97,max:122}];function Je(i,r){return r==="number"?parseFloat(i):i}function Ot(i){for(var r in he){var a=i.toString().charCodeAt(0);if(he[r].min<=a&&he[r].max>=a)return he[r]}return null}function Ze(i,r){return String.fromCharCode(r(Ot(i),i.charCodeAt(0)))}function jt(i){var r=i.toString().split("").map(function(a){return Ze(a,function(o,n){return!o||n<o.max?n+1:o.min})}).join("");return Je(r,l(i))}function Rt(i){var r=i.toString().split("").map(function(a){return Ze(a,function(o,n){return!o||n>o.min?n-1:o.max})}).join("");return Je(r,l(i))}var me=(function(i){c(a,i);var r=h(a);function a(o,n){var u;return e(this,a),u=r.call(this,Object.assign({format:function(y){return y},prependLeadingZero:!0,minimumDigits:0},n)),u.value||(u.value=o),u}return s(a,[{key:"isNaN",value:(function(o){function n(){return o.apply(this,arguments)}return n.toString=function(){return o.toString()},n})(function(){return isNaN(this.value)})},{key:"isNumber",value:function(){return Ne()}},{key:"clone",value:function(n,u){return new this.constructor(n,Object.assign(this.getPublicAttributes(),u))}},{key:"digits",get:function(){return this.$digits},set:function(n){this.$digits=n,this.minimumDigits=Math.max(this.minimumDigits,Lt(n))}},{key:"value",get:function(){return this.$value},set:function(n){this.$value=n,this.digits=Mt(this.format(n),{minimumDigits:this.minimumDigits,prependLeadingZero:this.prependLeadingZero})}}],[{key:"defineName",value:function(){return"FaceValue"}}]),a})(pe);function O(i){for(var r=!1,a=arguments.length,o=new Array(a>1?a-1:0),n=1;n<a;n++)o[n-1]=arguments[n];return Te(o).forEach(function(u){(J(i)&&J(u)||z(u)&&i instanceof u||ne(u)&&!Et(u)&&u(i)===!0||Ce(u)&&l(i)===u)&&(r=!0)}),r}var j={className:"The className() is not defined.",items:"The items property must be an array.",theme:"The theme property must be an object.",language:"The language must be an object.",date:"The value must be an instance of a Date.",face:"The face must be an instance of a Face class.",element:"The element must be an instance of an HTMLElement",faceValue:"The face must be an instance of a FaceValue class.",timer:"The timer property must be an instance of a Timer class."},re=(function(i){c(a,i);var r=h(a);function a(o,n){var u;return e(this,a),!(o instanceof me)&&z(o)&&(n=o,o=void 0),u=r.call(this),u.setAttributes(Object.assign({autoStart:!0,countdown:!1,animationRate:500},u.defaultAttributes(),n||{})),(J(o)||H(o))&&(o=u.defaultValue()),o&&(u.value=o),u}return s(a,[{key:"interval",value:function(n,u){return this.countdown?this.decrement(n):this.increment(n),S.call(n,u),this.shouldStop(n)&&n.stop(),n.emit("interval")}},{key:"shouldStop",value:function(n){return H(this.stopAt)?!1:this.stopAt===n.value.value}},{key:"format",value:function(n,u){return u}},{key:"defaultValue",value:function(){}},{key:"defaultAttributes",value:function(){}},{key:"defaultDataType",value:function(){}},{key:"increment",value:function(n,u){}},{key:"decrement",value:function(n,u){}},{key:"started",value:function(n){}},{key:"stopped",value:function(n){}},{key:"reset",value:function(n){}},{key:"initialized",value:function(n){}},{key:"rendered",value:function(n){}},{key:"mounted",value:function(n){this.autoStart&&n.timer.isStopped&&window.requestAnimationFrame(function(){return n.start(n)})}},{key:"createFaceValue",value:function(n,u){var m=this;return me.make(ne(u)&&!u.name?u():u,{minimumDigits:this.minimumDigits,format:function(v){return m.format(n,v)}})}},{key:"dataType",get:function(){return this.defaultDataType()}},{key:"value",get:function(){return this.$value},set:function(n){n instanceof me||(n=this.createFaceValue(n)),this.$value=n}},{key:"stopAt",get:function(){return this.$stopAt},set:function(n){this.$stopAt=n}},{key:"originalValue",get:function(){return this.$originalValue},set:function(n){this.$originalValue=n}}]),a})(pe),Vt={years:"\u0633\u0646\u0648\u0627\u062A",months:"\u0634\u0647\u0648\u0631",days:"\u0623\u064A\u0627\u0645",hours:"\u0633\u0627\u0639\u0627\u062A",minutes:"\u062F\u0642\u0627\u0626\u0642",seconds:"\u062B\u0648\u0627\u0646\u064A"},Ft=["ar","ar-ar","arabic"],Ht=Object.freeze({__proto__:null,dictionary:Vt,aliases:Ft}),It={years:"Anys",months:"Mesos",days:"Dies",hours:"Hores",minutes:"Minuts",seconds:"Segons"},Ut=["ca","ca-es","catalan"],Bt=Object.freeze({__proto__:null,dictionary:It,aliases:Ut}),qt={years:"Roky",months:"M\u011Bs\xEDce",days:"Dny",hours:"Hodiny",minutes:"Minuty",seconds:"Sekundy"},Wt=["cs","cs-cz","cz","cz-cs","czech"],Gt=Object.freeze({__proto__:null,dictionary:qt,aliases:Wt}),Yt={years:"\xC5r",months:"M\xE5neder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},Jt=["da","da-dk","danish"],Zt=Object.freeze({__proto__:null,dictionary:Yt,aliases:Jt}),Kt={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},Xt=["de","de-de","german"],Qt=Object.freeze({__proto__:null,dictionary:Kt,aliases:Xt}),ei={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},ti=["en","en-us","english"],Ke=Object.freeze({__proto__:null,dictionary:ei,aliases:ti}),ii={years:"A\xF1os",months:"Meses",days:"D\xEDas",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},ni=["es","es-es","spanish"],ri=Object.freeze({__proto__:null,dictionary:ii,aliases:ni}),oi={years:"\u0633\u0627\u0644",months:"\u0645\u0627\u0647",days:"\u0631\u0648\u0632",hours:"\u0633\u0627\u0639\u062A",minutes:"\u062F\u0642\u06CC\u0642\u0647",seconds:"\u062B\u0627\u0646\u06CC\u0647"},si=["fa","fa-ir","persian"],ai=Object.freeze({__proto__:null,dictionary:oi,aliases:si}),li={years:"Vuotta",months:"Kuukautta",days:"P\xE4iv\xE4\xE4",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},ci=["fi","fi-fi","finnish"],ui=Object.freeze({__proto__:null,dictionary:li,aliases:ci}),fi={years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},di=["fr","fr-ca","french"],pi=Object.freeze({__proto__:null,dictionary:fi,aliases:di}),hi={years:"\u05E9\u05E0\u05D9\u05DD",months:"\u05D7\u05D5\u05D3\u05E9",days:"\u05D9\u05DE\u05D9\u05DD",hours:"\u05E9\u05E2\u05D5\u05EA",minutes:"\u05D3\u05E7\u05D5\u05EA",seconds:"\u05E9\u05E0\u05D9\u05D5\u05EA"},mi=["il","he-il","hebrew"],gi=Object.freeze({__proto__:null,dictionary:hi,aliases:mi}),yi={years:"\xC9v",months:"H\xF3nap",days:"Nap",hours:"\xD3ra",minutes:"Perc",seconds:"M\xE1sodperc"},vi=["hu","hu-hu","hungarian"],ki=Object.freeze({__proto__:null,dictionary:yi,aliases:vi}),bi={years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},_i=["da","da-dk","danish"],wi=Object.freeze({__proto__:null,dictionary:bi,aliases:_i}),Si={years:"\u5E74",months:"\u6708",days:"\u65E5",hours:"\u6642",minutes:"\u5206",seconds:"\u79D2"},xi=["jp","ja-jp","japanese"],Ti=Object.freeze({__proto__:null,dictionary:Si,aliases:xi}),Ci={years:"\uB144",months:"\uC6D4",days:"\uC77C",hours:"\uC2DC",minutes:"\uBD84",seconds:"\uCD08"},Ni=["ko","ko-kr","korean"],$i=Object.freeze({__proto__:null,dictionary:Ci,aliases:Ni}),Ai={years:"Gadi",months:"M\u0113ne\u0161i",days:"Dienas",hours:"Stundas",minutes:"Min\u016Btes",seconds:"Sekundes"},Pi=["lv","lv-lv","latvian"],Li=Object.freeze({__proto__:null,dictionary:Ai,aliases:Pi}),zi={years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},Ei=["nl","nl-be","dutch"],Di=Object.freeze({__proto__:null,dictionary:zi,aliases:Ei}),Mi={years:"\xC5r",months:"M\xE5neder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},Oi=["no","nb","no-nb","norwegian"],ji=Object.freeze({__proto__:null,dictionary:Mi,aliases:Oi}),Ri={years:"Lat",months:"Miesi\u0119cy",days:"Dni",hours:"Godziny",minutes:"Minuty",seconds:"Sekundy"},Vi=["pl","pl-pl","polish"],Fi=Object.freeze({__proto__:null,dictionary:Ri,aliases:Vi}),Hi={years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},Ii=["pt","pt-br","portuguese"],Ui=Object.freeze({__proto__:null,dictionary:Hi,aliases:Ii}),Bi={years:"Ani",months:"Luni",days:"Zile",hours:"Ore",minutes:"Minute",seconds:"sSecunde"},qi=["ro","ro-ro","romana"],Wi=Object.freeze({__proto__:null,dictionary:Bi,aliases:qi}),Gi={years:"\u043B\u0435\u0442",months:"\u043C\u0435\u0441\u044F\u0446\u0435\u0432",days:"\u0434\u043D\u0435\u0439",hours:"\u0447\u0430\u0441\u043E\u0432",minutes:"\u043C\u0438\u043D\u0443\u0442",seconds:"\u0441\u0435\u043A\u0443\u043D\u0434"},Yi=["ru","ru-ru","russian"],Ji=Object.freeze({__proto__:null,dictionary:Gi,aliases:Yi}),Zi={years:"Roky",months:"Mesiace",days:"Dni",hours:"Hodiny",minutes:"Min\xFAty",seconds:"Sekundy"},Ki=["sk","sk-sk","slovak"],Xi=Object.freeze({__proto__:null,dictionary:Zi,aliases:Ki}),Qi={years:"\xC5r",months:"M\xE5nader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},en=["sv","sv-se","swedish"],tn=Object.freeze({__proto__:null,dictionary:Qi,aliases:en}),nn={years:"\u0E1B\u0E35",months:"\u0E40\u0E14\u0E37\u0E2D\u0E19",days:"\u0E27\u0E31\u0E19",hours:"\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",minutes:"\u0E19\u0E32\u0E17\u0E35",seconds:"\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"},rn=["th","th-th","thai"],on=Object.freeze({__proto__:null,dictionary:nn,aliases:rn}),sn={years:"Y\u0131l",months:"Ay",days:"G\xFCn",hours:"Saat",minutes:"Dakika",seconds:"Saniye"},an=["tr","tr-tr","turkish"],ln=Object.freeze({__proto__:null,dictionary:sn,aliases:an}),cn={years:"\u0440\u043E\u043A\u0438",months:"\u043C\u0456\u0441\u044F\u0446\u0456",days:"\u0434\u043D\u0456",hours:"\u0433\u043E\u0434\u0438\u043D\u0438",minutes:"\u0445\u0432\u0438\u043B\u0438\u043D\u0438",seconds:"\u0441\u0435\u043A\u0443\u043D\u0434\u0438"},un=["ua","ua-ua","ukraine"],fn=Object.freeze({__proto__:null,dictionary:cn,aliases:un}),dn={years:"N\u0103m",months:"Th\xE1ng",days:"Ng\xE0y",hours:"Gi\u1EDD",minutes:"Ph\xFAt",seconds:"Gi\xE2y"},pn=["vn","vn-vn","vietnamese"],hn=Object.freeze({__proto__:null,dictionary:dn,aliases:pn}),mn={years:"\u5E74",months:"\u6708",days:"\u65E5",hours:"\u65F6",minutes:"\u5206",seconds:"\u79D2"},gn=["zh","zh-cn","chinese"],yn=Object.freeze({__proto__:null,dictionary:mn,aliases:gn}),vn={years:"\u5E74",months:"\u6708",days:"\u65E5",hours:"\u6642",minutes:"\u5206",seconds:"\u79D2"},kn=["zh-tw"],bn=Object.freeze({__proto__:null,dictionary:vn,aliases:kn}),Xe=Object.freeze({__proto__:null,Arabic:Ht,Catalan:Bt,Czech:Gt,Danish:Zt,German:Qt,English:Ke,Spanish:ri,Persian:ai,Finnish:ui,French:pi,Hebrew:gi,Hungarian:ki,Italian:wi,Japanese:Ti,Korean:$i,Latvian:Li,Dutch:Di,Norwegian:ji,Polish:Fi,Portuguese:Ui,Romanian:Wi,Russian:Ji,Slovak:Xi,Swedish:tn,Thai:on,Turkish:ln,Ukrainian:fn,Vietnamese:hn,Chinese:yn,TraditionalChinese:bn});function Qe(i){return i?Xe[i.toLowerCase()]||Object.values(Xe).find(function(r){return r.aliases.indexOf(i)!==-1}):null}function _n(i,r){var a=Ce(r)?Qe(r):r,o=a.dictionary||a;return o[i]||i}function wn(i,r){return r.parentNode?(r.parentNode.replaceChild(i,r),i):r}function Sn(i,r){if(z(r))for(var a in r)i.setAttribute(a,r[a]);return i}function Z(i,r){return de(r)&&r.filter(P).forEach(function(a){a instanceof HTMLElement&&i.appendChild(a)}),i}function K(i,r,a){return i instanceof HTMLElement||(i=document.createElement(i)),Sn(i,z(r)?r:a),!z(r)&&!de(r)?i.innerHTML=r:Z(i,r),i}var X=(function(i){c(a,i);var r=h(a);function a(o){var n;if(e(this,a),n=r.call(this,Object.assign({parent:null},o)),n.theme||_("".concat(n.name," does not have a theme defined.")),n.language||_("".concat(n.name," does not have a language defined.")),!n.theme[n.name])throw new Error("".concat(n.name," cannot be rendered because it has no template."));return n}return s(a,[{key:"translate",value:function(n){return _n(n,this.language)}},{key:"t",value:function(n){return this.translate(n)}},{key:"render",value:function(){var n=K("div",{class:this.className==="flip-clock"?this.className:"flip-clock-"+this.className});return this.theme[this.name](n,this),this.el?this.el.innerHTML!==n.innerHTML&&(this.el=wn(n,this.el)):this.el=n,this.el}},{key:"mount",value:function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this.render(),this.parent=n,u?this.parent.insertBefore(this.el,u):this.parent.appendChild(this.el),this.el}},{key:"className",get:function(){return Dt(this.constructor.defineName())}},{key:"el",get:function(){return this.$el},set:function(n){O(n,null,HTMLElement)||_(j.element),this.$el=n}},{key:"parent",get:function(){return this.$parent},set:function(n){this.$parent=n}},{key:"theme",get:function(){return this.$theme},set:function(n){O(n,"object")||_(j.value),this.$theme=n}},{key:"language",get:function(){return this.$language},set:function(n){Ce(n)&&(n=Qe(n)),O(n,"object")||_(j.language),this.$language=n}}]),a})(pe),xn=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,null,[{key:"defineName",value:function(){return"Divider"}}]),a})(X),Tn=(function(i){c(a,i);var r=h(a);function a(o,n){return e(this,a),r.call(this,Object.assign({value:o},z(o)?o:null,n))}return s(a,null,[{key:"defineName",value:function(){return"ListItem"}}]),a})(X),Cn=(function(i){c(a,i);var r=h(a);function a(o,n){return e(this,a),r.call(this,Object.assign({value:o,items:[]},z(o)?o:null,n))}return s(a,[{key:"createListItem",value:function(n,u){var m=new Tn(n,Object.assign({theme:this.theme,language:this.language},u));return this.$items.push(m),m}},{key:"value",get:function(){return this.$value},set:function(n){this.$value=n}},{key:"items",get:function(){return this.$items},set:function(n){this.$items=n}}],[{key:"defineName",value:function(){return"List"}}]),a})(X),Nn=(function(i){c(a,i);var r=h(a);function a(o,n){return e(this,a),r.call(this,Object.assign({items:de(o)?o:[]},z(o)?o:null,n))}return s(a,null,[{key:"defineName",value:function(){return"Group"}}]),a})(X),$n=(function(i){c(a,i);var r=h(a);function a(o,n){return e(this,a),r.call(this,Object.assign({label:o},z(o)?o:null,n))}return s(a,null,[{key:"defineName",value:function(){return"Label"}}]),a})(X),et=(function(i){c(a,i);var r=h(a);function a(o){return e(this,a),r.call(this,Object.assign({count:0,handle:null,started:null,running:!1,interval:Ne(o)?o:null},z(o)?o:null))}return s(a,[{key:"reset",value:function(n){var u=this;return this.stop(function(){u.count=0,u.start(function(){return S.call(u,n)}),u.emit("reset")}),this}},{key:"start",value:function(n){var u=this;this.started=new Date,this.lastLoop=Date.now(),this.running=!0,this.emit("start");var m=function y(){return Date.now()-u.lastLoop>=u.interval&&(S.call(u,n),u.lastLoop=Date.now(),u.emit("interval"),u.count++),u.handle=window.requestAnimationFrame(y),u};return m()}},{key:"stop",value:function(n){var u=this;return this.isRunning&&setTimeout(function(){window.cancelAnimationFrame(u.handle),u.running=!1,S.call(u,n),u.emit("stop")}),this}},{key:"elapsed",get:function(){return this.lastLoop?this.lastLoop-(this.started?this.started.getTime():new Date().getTime()):0}},{key:"isRunning",get:function(){return this.running===!0}},{key:"isStopped",get:function(){return this.running===!1}}],[{key:"defineName",value:function(){return"Timer"}}]),a})(pe),tt=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"increment",value:function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;n.value=this.value.value+u}},{key:"decrement",value:function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;n.value=this.value.value-u}}],[{key:"defineName",value:function(){return"Counter"}}]),a})(re),it=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!0}}},{key:"shouldStop",value:function(n){if(J(n.stopAt)||H(n.stopAt))return!1;if(this.stopAt instanceof Date)return this.countdown?this.stopAt.getTime()>=this.value.value.getTime():this.stopAt.getTime()<=this.value.value.getTime();if(Ne(this.stopAt)){var u=Math.floor((this.value.value.getTime()-this.originalValue.getTime())/1e3);return this.countdown?this.stopAt>=u:this.stopAt<=u}throw new Error("the stopAt property must be an instance of Date or Number.")}},{key:"increment",value:function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;n.value=new Date(this.value.value.getTime()+u+(new Date().getTime()-n.timer.lastLoop))}},{key:"decrement",value:function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;n.value=new Date(this.value.value.getTime()-u-(new Date().getTime()-n.timer.lastLoop))}},{key:"format",value:function(n,u){var m=n.timer.isRunning?n.timer.started:new Date;return[[this.getMinutes(u,m)],this.showSeconds?[this.getSeconds(u,m)]:null].filter(P)}},{key:"getMinutes",value:function(n,u){return D(this.getTotalSeconds(n,u)/60)}},{key:"getSeconds",value:function(n,u){var m=this.getTotalSeconds(n,u);return Math.abs(Math.ceil(m===60?0:m%60))}},{key:"getTotalSeconds",value:function(n,u){return n.getTime()===u.getTime()?0:Math.round((n.getTime()-u.getTime())/1e3)}}],[{key:"defineName",value:function(){return"MinuteCounter"}}]),a})(re),nt=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"format",value:function(n,u){var m=n.timer.started?n.timer.started:new Date,y=u||n.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,$=[[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&$.push([this.getSeconds(v,k)]),$}},{key:"getMinutes",value:function(n,u){return Math.abs(x(f(a.prototype),"getMinutes",this).call(this,n,u)%60)}},{key:"getHours",value:function(n,u){return Math.floor(this.getTotalSeconds(n,u)/60/60)}}],[{key:"defineName",value:function(){return"HourCounter"}}]),a})(it),rt=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"format",value:function(n,u){var m=n.started?u:new Date,y=u||n.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,$=[[this.getDays(v,k)],[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&$.push([this.getSeconds(v,k)]),$}},{key:"getDays",value:function(n,u){return Math.floor(this.getTotalSeconds(n,u)/60/60/24)}},{key:"getHours",value:function(n,u){return Math.abs(x(f(a.prototype),"getHours",this).call(this,n,u)%24)}}],[{key:"defineName",value:function(){return"DayCounter"}}]),a})(nt),ot=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultValue",value:function(){return new Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!1}}},{key:"format",value:function(n,u){u||(u=new Date);var m=[[u.getHours()],[u.getMinutes()]];return this.showSeconds&&m.push([u.getSeconds()]),m}},{key:"increment",value:function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;n.value=new Date(this.value.value.getTime()+u+(new Date().getTime()-n.timer.lastLoop))}},{key:"decrement",value:function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;n.value=new Date(this.value.value.getTime()-u-(new Date().getTime()-n.timer.lastLoop))}}],[{key:"defineName",value:function(){return"TwentyFourHourClock"}}]),a})(re),An=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"defaultAttributes",value:function(){return{showLabels:!1,showSeconds:!0,showMeridium:!0}}},{key:"format",value:function(n,u){u||(u=new Date);var m=u.getHours(),y=[m>12?m-12:m===0?12:m,u.getMinutes()];return this.meridium=m>12?"pm":"am",this.showSeconds&&y.push(u.getSeconds()),y}}],[{key:"defineName",value:function(){return"TwelveHourClock"}}]),a})(ot),st=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"format",value:function(n,u){var m=n.timer.started?u:new Date,y=u||n.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,$=[[this.getWeeks(v,k)],[this.getDays(v,k)],[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&$.push([this.getSeconds(v,k)]),$}},{key:"getWeeks",value:function(n,u){return Math.floor(this.getTotalSeconds(n,u)/60/60/24/7)}},{key:"getDays",value:function(n,u){return Math.abs(x(f(a.prototype),"getDays",this).call(this,n,u)%7)}}],[{key:"defineName",value:function(){return"WeekCounter"}}]),a})(rt),Pn=(function(i){c(a,i);var r=h(a);function a(){return e(this,a),r.apply(this,arguments)}return s(a,[{key:"format",value:function(n,u){var m=n.timer.started?u:new Date,y=u||n.originalValue,v=this.countdown?y:m,k=this.countdown?m:y,$=[[this.getYears(v,k)],[this.getWeeks(v,k)],[this.getDays(v,k)],[this.getHours(v,k)],[this.getMinutes(v,k)]];return this.showSeconds&&$.push([this.getSeconds(v,k)]),$}},{key:"getYears",value:function(n,u){return Math.floor(Math.max(0,this.getTotalSeconds(n,u)/60/60/24/7/52))}},{key:"getWeeks",value:function(n,u){return Math.abs(x(f(a.prototype),"getWeeks",this).call(this,n,u)%52)}}],[{key:"defineName",value:function(){return"YearCounter"}}]),a})(st),Ln=Object.freeze({__proto__:null,Counter:tt,DayCounter:rt,MinuteCounter:it,HourCounter:nt,TwelveHourClock:An,TwentyFourHourClock:ot,WeekCounter:st,YearCounter:Pn});function zn(i,r){Z(i,[K("div",{class:"flip-clock-dot top"}),K("div",{class:"flip-clock-dot bottom"})])}function at(i,r){return i?i.childNodes?i.childNodes[r]:i[r]:null}function En(i){return i?i.querySelector(".flip-clock-list-item:first-child .top").innerHTML:null}function Dn(i,r){var a=r.value.digits.map(function(n,u){var m=at(r.el?r.el.querySelectorAll(".flip-clock-group"):null,u),y=n.map(function(v,k){var $=at(m?m.querySelectorAll(".flip-clock-list"):null,k),Yn=En($);return r.createList(v,{domValue:Yn,countdown:r.countdown,animationRate:r.face.animationRate||r.face.delay})});return r.createGroup(y)}),o=a.map(function(n){return n.render()});Z(i,o)}function Mn(i,r){var a=r.items.map(function(o){return o.render()});Z(i,a)}function On(i,r){i.innerHTML=r.t(r.label)}function jn(i,r){var a=r.domValue||(r.countdown?jt(r.value):Rt(r.value));r.domValue&&r.domValue!==r.value&&i.classList.add("flip"),i.style.animationDelay="".concat(r.animationRate/2,"ms"),i.style.animationDuration="".concat(r.animationRate/2,"ms"),r.items=[r.createListItem(r.value,{active:!0}),r.createListItem(a,{active:!1})],Z(i,r.items.map(function(o){return o.render()}))}function Rn(i,r){var a=r.active===!0?"active":r.active===!1?"before":null;i.classList.add(a),Z(i,[K("div",[K("div",r.value,{class:"top"}),K("div",r.value,{class:"bottom"})],{class:"flip-clock-list-item-inner"})])}function Vn(i,r){r.createDivider().mount(i,i.childNodes[1]),r.createDivider().mount(i,i.childNodes[3]),r.face.showSeconds&&r.createDivider().mount(i,i.childNodes[5]),r.face.showLabels&&(r.createLabel("days").mount(i.childNodes[0]),r.createLabel("hours").mount(i.childNodes[2]),r.createLabel("minutes").mount(i.childNodes[4]),r.face.showSeconds&&r.createLabel("seconds").mount(i.childNodes[6]))}function Fn(i,r){r.createDivider().mount(i,i.childNodes[1]),r.face.showSeconds&&r.createDivider().mount(i,i.childNodes[3]),r.face.showLabels&&(r.createLabel("hours").mount(i.childNodes[0]),r.createLabel("minutes").mount(i.childNodes[2]),r.face.showSeconds&&r.createLabel("seconds").mount(i.childNodes[4]))}function Hn(i,r){r.face.showSeconds&&r.createDivider().mount(i,i.childNodes[1]),r.face.showLabels&&(r.createLabel("minutes").mount(i.childNodes[0]),r.face.showSeconds&&r.createLabel("seconds").mount(i.childNodes[2]))}function lt(i,r){r.createDivider().mount(i,i.childNodes[1]),r.face.showSeconds&&r.createDivider().mount(i,i.childNodes[3]),r.face.showLabels&&(r.createLabel("hours").mount(i.childNodes[0]),r.createLabel("minutes").mount(i.childNodes[2]),r.face.showSeconds&&r.createLabel("seconds").mount(i.childNodes[4]))}function In(i,r){if(lt(i,r),r.face.showMeridium&&r.face.meridium){var a=r.createLabel(r.face.meridium),o=i.childNodes[i.childNodes.length-1];a.mount(o).classList.add("flip-clock-meridium")}}function Un(i,r){r.createDivider().mount(i,i.childNodes[1]),r.createDivider().mount(i,i.childNodes[3]),r.createDivider().mount(i,i.childNodes[5]),r.face.showSeconds&&r.createDivider().mount(i,i.childNodes[7]),r.face.showLabels&&(r.createLabel("weeks").mount(i.childNodes[0]),r.createLabel("days").mount(i.childNodes[2]),r.createLabel("hours").mount(i.childNodes[4]),r.createLabel("minutes").mount(i.childNodes[6]),r.face.showSeconds&&r.createLabel("seconds").mount(i.childNodes[8]))}function Bn(i,r){r.createDivider().mount(i,i.childNodes[1]),r.createDivider().mount(i,i.childNodes[3]),r.createDivider().mount(i,i.childNodes[5]),r.createDivider().mount(i,i.childNodes[7]),r.face.showSeconds&&r.createDivider().mount(i,i.childNodes[9]),r.face.showLabels&&(r.createLabel("years").mount(i.childNodes[0]),r.createLabel("weeks").mount(i.childNodes[2]),r.createLabel("days").mount(i.childNodes[4]),r.createLabel("hours").mount(i.childNodes[6]),r.createLabel("minutes").mount(i.childNodes[8]),r.face.showSeconds&&r.createLabel("seconds").mount(i.childNodes[10]))}var qn=Object.freeze({__proto__:null,DayCounter:Vn,HourCounter:Fn,MinuteCounter:Hn,TwelveHourClock:In,TwentyFourHourClock:lt,WeekCounter:Un,YearCounter:Bn}),Wn={Divider:zn,FlipClock:Dn,Group:Mn,Label:On,List:jn,ListItem:Rn,faces:qn},I={face:tt,theme:Wn,language:Ke},Gn=(function(i){c(a,i);var r=h(a);function a(o,n,u){var m;e(this,a),O(o,HTMLElement)||_(j.element),z(n)&&!u&&(u=n,n=void 0);var y=u.face||I.face;return delete u.face,m=r.call(this,Object.assign({originalValue:n,theme:I.theme,language:I.language,timer:et.make(u.interval||1e3)},u)),m.face||(m.face=y),m.mount(o),m}return s(a,[{key:"mount",value:function(n){return x(f(a.prototype),"mount",this).call(this,n),this.face.mounted(this),this}},{key:"render",value:function(){return x(f(a.prototype),"render",this).call(this),this.theme.faces[this.face.name]&&this.theme.faces[this.face.name](this.el,this),this.face.rendered(this),this.el}},{key:"start",value:function(n){var u=this;return this.timer.started||(this.value=this.originalValue),H(this.face.stopAt)&&(this.face.stopAt=this.stopAt),H(this.face.originalValue)&&(this.face.originalValue=this.originalValue),this.timer.start(function(){u.face.interval(u,n)}),this.face.started(this),this.emit("start")}},{key:"stop",value:function(n){return this.timer.stop(n),this.face.stopped(this),this.emit("stop")}},{key:"reset",value:function(n){var u=this;return this.value=this.originalValue,this.timer.reset(function(){return u.interval(u,n)}),this.face.reset(this),this.emit("reset")}},{key:"increment",value:function(n){return this.face.increment(this,n),this}},{key:"decrement",value:function(n){return this.face.decrement(this,n),this}},{key:"createDivider",value:function(n){return xn.make(Object.assign({theme:this.theme,language:this.language},n))}},{key:"createList",value:function(n,u){return Cn.make(n,Object.assign({theme:this.theme,language:this.language},u))}},{key:"createLabel",value:function(n,u){return $n.make(n,Object.assign({theme:this.theme,language:this.language},u))}},{key:"createGroup",value:function(n,u){return Nn.make(n,Object.assign({theme:this.theme,language:this.language},u))}},{key:"face",get:function(){return this.$face},set:function(n){O(n,[re,"string","function"])||_(j.face),this.$face=(Ln[n]||n).make(Object.assign(this.getPublicAttributes(),{originalValue:this.face?this.face.originalValue:void 0})),this.$face.initialized(this),this.value?this.$face.value=this.face.createFaceValue(this,this.value.value):this.value||(this.value=this.originalValue),this.el&&this.render()}},{key:"stopAt",get:function(){return ne(this.$stopAt)?this.$stopAt(this):this.$stopAt},set:function(n){this.$stopAt=n}},{key:"timer",get:function(){return this.$timer},set:function(n){O(n,et)||_(j.timer),this.$timer=n}},{key:"value",get:function(){return this.face?this.face.value:null},set:function(n){if(!this.face)throw new Error("A face must be set before setting a value.");n instanceof me?this.face.value=n:this.value?this.face.value=this.face.value.clone(n):this.face.value=this.face.createFaceValue(this,n),this.el&&this.render()}},{key:"originalValue",get:function(){return ne(this.$originalValue)&&!this.$originalValue.name?this.$originalValue():!H(this.$originalValue)&&!J(this.$originalValue)?this.$originalValue:this.face?this.face.defaultValue():void 0},set:function(n){this.$originalValue=n}}],[{key:"defineName",value:function(){return"FlipClock"}},{key:"setDefaultFace",value:function(n){O(n,re)||_(j.face),I.face=n}},{key:"setDefaultTheme",value:function(n){O(n,"object")||_(j.theme),I.theme=n}},{key:"setDefaultLanguage",value:function(n){O(n,"object")||_(j.language),I.language=n}},{key:"defaults",get:function(){return I}}]),a})(X);return Gn}))});var Ae=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var U=(l,e,t=null)=>{for(;e!==t;){let s=e.nextSibling;l.removeChild(e),e=s}};var E=`{{lit-${String(Math.random()).slice(2)}}}`,Pe=`<!--${E}-->`,ut=new RegExp(`${E}|${Pe}`),Q="$lit$",B=class{constructor(e,t){this.parts=[],this.element=t;let s=[],c=[],f=document.createTreeWalker(t.content,133,null,!1),d=0,p=-1,g=0,{strings:b,values:{length:w}}=e;for(;g<w;){let h=f.nextNode();if(h===null){f.currentNode=c.pop();continue}if(p++,h.nodeType===1){if(h.hasAttributes()){let C=h.attributes,{length:x}=C,_=0;for(let S=0;S<x;S++)ft(C[S].name,Q)&&_++;for(;_-- >0;){let S=b[g],D=ye.exec(S)[2],P=D.toLowerCase()+Q,L=h.getAttribute(P);h.removeAttribute(P);let N=L.split(ut);this.parts.push({type:"attribute",index:p,name:D,strings:N}),g+=N.length-1}}h.tagName==="TEMPLATE"&&(c.push(h),f.currentNode=h.content)}else if(h.nodeType===3){let C=h.data;if(C.indexOf(E)>=0){let x=h.parentNode,_=C.split(ut),S=_.length-1;for(let D=0;D<S;D++){let P,L=_[D];if(L==="")P=M();else{let N=ye.exec(L);N!==null&&ft(N[2],Q)&&(L=L.slice(0,N.index)+N[1]+N[2].slice(0,-Q.length)+N[3]),P=document.createTextNode(L)}x.insertBefore(P,h),this.parts.push({type:"node",index:++p})}_[S]===""?(x.insertBefore(M(),h),s.push(h)):h.data=_[S],g+=S}}else if(h.nodeType===8)if(h.data===E){let C=h.parentNode;(h.previousSibling===null||p===d)&&(p++,C.insertBefore(M(),h)),d=p,this.parts.push({type:"node",index:p}),h.nextSibling===null?h.data="":(s.push(h),p--),g++}else{let C=-1;for(;(C=h.data.indexOf(E,C+1))!==-1;)this.parts.push({type:"node",index:-1}),g++}}for(let h of s)h.parentNode.removeChild(h)}},ft=(l,e)=>{let t=l.length-e.length;return t>=0&&l.slice(t)===e},oe=l=>l.index!==-1,M=()=>document.createComment(""),ye=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var Le=133;function ze(l,e){let{element:{content:t},parts:s}=l,c=document.createTreeWalker(t,Le,null,!1),f=se(s),d=s[f],p=-1,g=0,b=[],w=null;for(;c.nextNode();){p++;let h=c.currentNode;for(h.previousSibling===w&&(w=null),e.has(h)&&(b.push(h),w===null&&(w=h)),w!==null&&g++;d!==void 0&&d.index===p;)d.index=w!==null?-1:d.index-g,f=se(s,f),d=s[f]}b.forEach(h=>h.parentNode.removeChild(h))}var ir=l=>{let e=l.nodeType===11?0:1,t=document.createTreeWalker(l,Le,null,!1);for(;t.nextNode();)e++;return e},se=(l,e=-1)=>{for(let t=e+1;t<l.length;t++){let s=l[t];if(oe(s))return t}return-1};function dt(l,e,t=null){let{element:{content:s},parts:c}=l;if(t==null){s.appendChild(e);return}let f=document.createTreeWalker(s,Le,null,!1),d=se(c),p=0,g=-1;for(;f.nextNode();)for(g++,f.currentNode===t&&(p=ir(e),t.parentNode.insertBefore(e,t));d!==-1&&c[d].index===g;){if(p>0){for(;d!==-1;)c[d].index+=p,d=se(c,d);return}d=se(c,d)}}var nr=new WeakMap;var q=l=>typeof l=="function"&&nr.has(l);var A={},ve={};var V=class{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(let s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(let s of this.__parts)s!==void 0&&s.commit()}_clone(){let e=Ae?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,c=document.createTreeWalker(e,133,null,!1),f=0,d=0,p,g=c.nextNode();for(;f<s.length;){if(p=s[f],!oe(p)){this.__parts.push(void 0),f++;continue}for(;d<p.index;)d++,g.nodeName==="TEMPLATE"&&(t.push(g),c.currentNode=g.content),(g=c.nextNode())===null&&(c.currentNode=t.pop(),g=c.nextNode());if(p.type==="node"){let b=this.processor.handleTextExpression(this.options);b.insertAfterNode(g.previousSibling),this.__parts.push(b)}else this.__parts.push(...this.processor.handleAttributeExpressions(g,p.name,p.strings,this.options));f++}return Ae&&(document.adoptNode(e),customElements.upgrade(e)),e}};var pt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:l=>l}),or=` ${E} `,R=class{constructor(e,t,s,c){this.strings=e,this.values=t,this.type=s,this.processor=c}getHTML(){let e=this.strings.length-1,t="",s=!1;for(let c=0;c<e;c++){let f=this.strings[c],d=f.lastIndexOf("<!--");s=(d>-1||s)&&f.indexOf("-->",d+1)===-1;let p=ye.exec(f);p===null?t+=f+(s?or:Pe):t+=f.substr(0,p.index)+p[1]+p[2]+Q+p[3]+E}return t+=this.strings[e],t}getTemplateElement(){let e=document.createElement("template"),t=this.getHTML();return pt!==void 0&&(t=pt.createHTML(t)),e.innerHTML=t,e}};var _e=l=>l===null||!(typeof l=="object"||typeof l=="function"),ke=l=>Array.isArray(l)||!!(l&&l[Symbol.iterator]),ee=class{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let c=0;c<s.length-1;c++)this.parts[c]=this._createPart()}_createPart(){return new ae(this)}_getValue(){let e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){let f=s[0].value;if(typeof f=="symbol")return String(f);if(typeof f=="string"||!ke(f))return f}let c="";for(let f=0;f<t;f++){c+=e[f];let d=s[f];if(d!==void 0){let p=d.value;if(_e(p)||!ke(p))c+=typeof p=="string"?p:String(p);else for(let g of p)c+=typeof g=="string"?g:String(g)}}return c+=e[t],c}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},ae=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==A&&(!_e(e)||e!==this.value)&&(this.value=e,q(e)||(this.committer.dirty=!0))}commit(){for(;q(this.value);){let e=this.value;this.value=A,e(this)}this.value!==A&&this.committer.commit()}},W=class l{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(M()),this.endNode=e.appendChild(M())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=M()),e.__insert(this.endNode=M())}insertAfterPart(e){e.__insert(this.startNode=M()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;q(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=A,t(this)}let e=this.__pendingValue;e!==A&&(_e(e)?e!==this.value&&this.__commitText(e):e instanceof R?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):ke(e)?this.__commitIterable(e):e===ve?(this.value=ve,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let t=this.startNode.nextSibling;e=e==null?"":e;let s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){let t=this.options.templateFactory(e);if(this.value instanceof V&&this.value.template===t)this.value.update(e.values);else{let s=new V(t,e.processor,this.options),c=s._clone();s.update(e.values),this.__commitNode(c),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let t=this.value,s=0,c;for(let f of e)c=t[s],c===void 0&&(c=new l(this.options),t.push(c),s===0?c.appendIntoPart(this):c.insertAfterPart(t[s-1])),c.setValue(f),c.commit(),s++;s<t.length&&(t.length=s,this.clear(c&&c.endNode))}clear(e=this.startNode){U(this.startNode.parentNode,e.nextSibling,this.endNode)}},le=class{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;q(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=A,t(this)}if(this.__pendingValue===A)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=A}},ce=class extends ee{constructor(e,t,s){super(e,t,s),this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new be(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},be=class extends ae{},ht=!1;(()=>{try{let l={get capture(){return ht=!0,!1}};window.addEventListener("test",l,l),window.removeEventListener("test",l,l)}catch(l){}})();var ue=class{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=c=>this.handleEvent(c)}setValue(e){this.__pendingValue=e}commit(){for(;q(this.__pendingValue);){let f=this.__pendingValue;this.__pendingValue=A,f(this)}if(this.__pendingValue===A)return;let e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),c=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),c&&(this.__options=sr(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=A}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}},sr=l=>l&&(ht?{capture:l.capture,passive:l.passive,once:l.once}:l.capture);function Ee(l){let e=G.get(l.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},G.set(l.type,e));let t=e.stringsArray.get(l.strings);if(t!==void 0)return t;let s=l.strings.join(E);return t=e.keyString.get(s),t===void 0&&(t=new B(l,l.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(l.strings,t),t}var G=new Map;var F=new WeakMap,De=(l,e,t)=>{let s=F.get(e);s===void 0&&(U(e,e.firstChild),F.set(e,s=new W(Object.assign({templateFactory:Ee},t))),s.appendInto(e)),s.setValue(l),s.commit()};var we=class{handleAttributeExpressions(e,t,s,c){let f=t[0];return f==="."?new ce(e,t.slice(1),s).parts:f==="@"?[new ue(e,t.slice(1),c.eventContext)]:f==="?"?[new le(e,t.slice(1),s)]:new ee(e,t,s).parts}handleTextExpression(e){return new W(e)}},Me=new we;typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var T=(l,...e)=>new R(l,e,"html",Me);var gt=(l,e)=>`${l}--${e}`,Se=!0;typeof window.ShadyCSS=="undefined"?Se=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Se=!1);var lr=l=>e=>{let t=gt(e.type,l),s=G.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},G.set(t,s));let c=s.stringsArray.get(e.strings);if(c!==void 0)return c;let f=e.strings.join(E);if(c=s.keyString.get(f),c===void 0){let d=e.getTemplateElement();Se&&window.ShadyCSS.prepareTemplateDom(d,l),c=new B(e,d),s.keyString.set(f,c)}return s.stringsArray.set(e.strings,c),c},cr=["html","svg"],ur=l=>{cr.forEach(e=>{let t=G.get(gt(e,l));t!==void 0&&t.keyString.forEach(s=>{let{element:{content:c}}=s,f=new Set;Array.from(c.querySelectorAll("style")).forEach(d=>{f.add(d)}),ze(s,f)})})},yt=new Set,fr=(l,e,t)=>{yt.add(l);let s=t?t.element:document.createElement("template"),c=e.querySelectorAll("style"),{length:f}=c;if(f===0){window.ShadyCSS.prepareTemplateStyles(s,l);return}let d=document.createElement("style");for(let b=0;b<f;b++){let w=c[b];w.parentNode.removeChild(w),d.textContent+=w.textContent}ur(l);let p=s.content;t?dt(t,d,p.firstChild):p.insertBefore(d,p.firstChild),window.ShadyCSS.prepareTemplateStyles(s,l);let g=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&g!==null)e.insertBefore(g.cloneNode(!0),e.firstChild);else if(t){p.insertBefore(d,p.firstChild);let b=new Set;b.add(d),ze(t,b)}},vt=(l,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");let s=t.scopeName,c=F.has(e),f=Se&&e.nodeType===11&&!!e.host,d=f&&!yt.has(s),p=d?document.createDocumentFragment():e;if(De(l,p,Object.assign({templateFactory:lr(s)},t)),d){let g=F.get(p);F.delete(p);let b=g.value instanceof V?g.value.template:void 0;fr(s,p,b),U(e,e.firstChild),e.appendChild(p),F.set(e,g)}!c&&f&&window.ShadyCSS.styleElement(e.host)};var kt;window.JSCompiler_renameProperty=(l,e)=>l;var He={toAttribute(l,e){switch(e){case Boolean:return l?"":null;case Object:case Array:return l==null?l:JSON.stringify(l)}return l},fromAttribute(l,e){switch(e){case Boolean:return l!==null;case Number:return l===null?null:Number(l);case Object:case Array:return JSON.parse(l)}return l}},bt=(l,e)=>e!==l&&(e===e||l===l),Oe={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:bt},je=1,Re=4,Ve=8,Fe=16,Ie="finalized",te=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((t,s)=>{let c=this._attributeNameForProperty(s,t);c!==void 0&&(this._attributeToPropertyMap.set(c,s),e.push(c))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=Oe){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;let s=typeof e=="symbol"?Symbol():`__${e}`,c=this.getPropertyDescriptor(e,s,t);c!==void 0&&Object.defineProperty(this.prototype,e,c)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(c){let f=this[e];this[t]=c,this.requestUpdateInternal(e,f,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Oe}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Ie)||e.finalize(),this[Ie]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(let c of s)this.createProperty(c,t[c])}}static _attributeNameForProperty(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=bt){return s(e,t)}static _propertyValueFromAttribute(e,t){let s=t.type,c=t.converter||He,f=typeof c=="function"?c:c.fromAttribute;return f?f(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;let s=t.type,c=t.converter;return(c&&c.toAttribute||He.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){let s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=Oe){let c=this.constructor,f=c._attributeNameForProperty(e,s);if(f!==void 0){let d=c._propertyValueToAttribute(t,s);if(d===void 0)return;this._updateState=this._updateState|Ve,d==null?this.removeAttribute(f):this.setAttribute(f,d),this._updateState=this._updateState&~Ve}}_attributeToProperty(e,t){if(this._updateState&Ve)return;let s=this.constructor,c=s._attributeToPropertyMap.get(e);if(c!==void 0){let f=s.getPropertyOptions(c);this._updateState=this._updateState|Fe,this[c]=s._propertyValueFromAttribute(t,f),this._updateState=this._updateState&~Fe}}requestUpdateInternal(e,t,s){let c=!0;if(e!==void 0){let f=this.constructor;s=s||f.getPropertyOptions(e),f._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&Fe)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):c=!1}!this._hasRequestedUpdate&&c&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|Re;try{await this._updatePromise}catch(t){}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&Re}get hasUpdated(){return this._updateState&je}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&je||(this._updateState=this._updateState|je,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Re}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};kt=Ie;te[kt]=!0;var dr=(l,e)=>(window.customElements.define(l,e),e),pr=(l,e)=>{let{kind:t,elements:s}=e;return{kind:t,elements:s,finisher(c){window.customElements.define(l,c)}}},wt=l=>e=>typeof e=="function"?dr(l,e):pr(l,e),hr=(l,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,l)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,l)}},mr=(l,e,t)=>{e.constructor.createProperty(t,l)};function Ue(l){return(e,t)=>t!==void 0?mr(l,e,t):hr(l,e)}var _t=Element.prototype,vo=_t.msMatchesSelector||_t.webkitMatchesSelector;var xe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),Be=class{constructor(e,t){if(t!==St)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(xe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},xt=l=>new Be(String(l),St);(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var Tt={},Y=class extends te{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let t=(f,d)=>f.reduceRight((p,g)=>Array.isArray(g)?t(g,p):(p.add(g),p),d),s=t(e,new Set),c=[];s.forEach(f=>c.unshift(f)),this._styles=c}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!xe){let s=Array.prototype.slice.call(t.cssRules).reduce((c,f)=>c+f.cssText,"");return xt(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):xe?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let t=this.render();super.update(e),t!==Tt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{let c=document.createElement("style");c.textContent=s.cssText,this.renderRoot.appendChild(c)}))}render(){return Tt}};Y.finalized=!0;Y.render=vt;Y.shadowRootOptions={mode:"open"};var Pt=tr(Ct());var Nt=T`
  <style>
    :host {
      display: block;
      height: 100%;
    }

    ha-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .fc-notification {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      display: flex;
      align-items: baseline;
      gap: 0.5em;
      padding: 0.6em 1em;
      background: rgba(20, 22, 26, 0.92);
      color: #f0f0f0;
      transform: translateY(-100%);
      transition: transform 0.35s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    }

    .fc-notification.visible {
      transform: translateY(0);
    }

    .fc-notification-title {
      font-weight: 700;
      font-size: 1.1em;
      white-space: nowrap;
    }

    .fc-notification-message {
      font-weight: 300;
      font-size: 1em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .fc-notif-fab {
      position: absolute;
      right: 0.7em;
      bottom: 0.7em;
      z-index: 11;
      width: 2.4em;
      height: 2.4em;
      border-radius: 50%;
      background: rgba(20, 22, 26, 0.85);
      color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      cursor: pointer;
    }

    .fc-format-toggle {
      position: absolute;
      left: 0.7em;
      bottom: 0.7em;
      z-index: 11;
      width: 2.4em;
      height: 2.4em;
      border-radius: 50%;
      background: rgba(20, 22, 26, 0.85);
      color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      cursor: pointer;
    }

    .fc-format-toggle ha-icon {
      --mdc-icon-size: 1.3em;
    }

    .fc-notif-fab ha-icon {
      --mdc-icon-size: 1.3em;
    }

    .fc-notif-badge {
      position: absolute;
      top: -0.2em;
      right: -0.2em;
      min-width: 1.3em;
      height: 1.3em;
      padding: 0 0.2em;
      border-radius: 1em;
      background: #e04b4b;
      color: #fff;
      font-size: 0.65em;
      font-weight: 700;
      display: none;
      align-items: center;
      justify-content: center;
    }

    .fc-notif-badge.visible {
      display: flex;
    }

    .fc-notif-list {
      position: absolute;
      right: 0.7em;
      bottom: 3.4em;
      z-index: 11;
      width: min(16em, 70%);
      max-height: 50%;
      overflow-y: auto;
      background: rgba(20, 22, 26, 0.95);
      color: #f0f0f0;
      border-radius: 0.6em;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      padding: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(0.5em);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .fc-notif-list.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    .fc-notif-item {
      padding: 0.6em 0.8em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.8em;
    }

    .fc-notif-item:last-child {
      border-bottom: none;
    }

    .fc-notif-item-row {
      display: flex;
      justify-content: space-between;
      gap: 0.5em;
    }

    .fc-notif-item-title {
      font-weight: 700;
    }

    .fc-notif-item-time {
      opacity: 0.6;
      white-space: nowrap;
    }

    .fc-notif-item-message {
      margin-top: 0.2em;
      opacity: 0.85;
      font-weight: 300;
    }

    .fc-notif-empty {
      padding: 0.8em;
      font-size: 0.8em;
      opacity: 0.7;
      text-align: center;
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
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 0.5em;
    }

    .fc-meridiem-bottom {
      font-size: 1.2em;
      font-weight: 700;
      text-transform: uppercase;
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
      padding: 0.4em;
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
      position: absolute;
      z-index: 10;
      font-size: 0.7em;
      line-height: 1;
      top: auto;
      bottom: 0.3em;
      left: auto;
      right: 0.6em;
      flex: 0;
      width: 1.8em;
      overflow: visible;
      text-transform: uppercase;
      font-weight: 700;
      text-align: right;
      transform: none;
      color: #ccc;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    }
    .flip-clock .flip-clock-group .flip-clock-list {
      width: 4.7em;
      height: 8.4em;
      position: relative;
      border-radius: 0.75rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 6px 14px rgba(0, 0, 0, 0.3);
      font-weight: bold;
      color: #ccc;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(:last-child) {
      margin-right: 0.18em;
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
      font-size: 6.3em;
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
      width: 1.1em;
      height: 8.4em;
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

    @keyframes fc-bg-shift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  </style>
`,gr={aurora:["#0f2027","#2c5364","#00c6a7","#2c5364"],sunset:["#355c7d","#6c5b7b","#c06c84","#f67280"],ocean:["#1e3c72","#2193b0","#6dd5ed","#2193b0"],midnight:["#000000","#0f0c29","#302b63","#24243e"]};function yr(l){let e=l==null?void 0:l.background;if(!e||!e.type)return"";if(e.type==="solid"&&e.color)return`ha-card { background: ${e.color}; }`;if(e.type==="dark-outline"){let p=e.color||"#0a0a0a",g="rgba(255, 255, 255, 0.35)";return`
      ha-card { background: ${p}; }
      .flip-clock .flip-clock-group .flip-clock-list {
        box-sizing: border-box;
        border: 1px solid ${g};
      }
      .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top,
      .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom,
      .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:before {
        background: ${p};
      }
      .flip-clock .flip-clock-divider:before,
      .flip-clock .flip-clock-divider:after {
        background: ${g};
      }
      .fc-notif-fab,
      .fc-format-toggle {
        box-sizing: border-box;
        border: 1px solid ${g};
        background: ${p};
      }
      .fc-notification {
        border-bottom: 1px solid ${g};
      }
    `}let t;if(e.type==="gradient"&&e.colors&&e.colors.length>=2?t=e.colors:e.type==="preset"&&e.preset&&(t=gr[e.preset]),!t)return"";let c=`linear-gradient(${e.direction||"45deg"}, ${t.join(", ")})`;if(!(e.animate!==void 0?e.animate:e.type==="preset"))return`ha-card { background: ${c}; }`;let d=e.animationDuration||"18s";return`
    ha-card {
      background: ${c};
      background-size: 400% 400%;
      animation: fc-bg-shift ${d} ease infinite;
    }
  `}function $t(l){var h,C,x,_,S,D,P,L,N;let e=(h=l==null?void 0:l.date)==null?void 0:h.fontSize,t=(C=l==null?void 0:l.date)==null?void 0:C.fontFamily,s=(x=l==null?void 0:l.date)==null?void 0:x.color,c=(_=l==null?void 0:l.time)==null?void 0:_.meridiemFontSize,f=(S=l==null?void 0:l.time)==null?void 0:S.meridiemFontFamily,d=(D=l==null?void 0:l.time)==null?void 0:D.meridiemOffset,p=(P=l==null?void 0:l.time)==null?void 0:P.meridiemColor,g=((L=l==null?void 0:l.time)==null?void 0:L.meridiemPosition)==="bottom",b=(N=l==null?void 0:l.time)==null?void 0:N.cardSize,w=[e?`.fc-date { font-size: ${e}; }`:"",t?`.fc-date { font-family: ${t}; }`:"",s?`.fc-date { color: ${s}; }`:"",b?`.flip-clock { font-size: ${b}; }`:"",g?".flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { display: none; }":"",c?`.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { font-size: ${c}; }
         .fc-meridiem-bottom { font-size: ${c}; }`:"",f?`.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { font-family: ${f}; }
         .fc-meridiem-bottom { font-family: ${f}; }`:"",d&&!g?`.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { transform: translate(${d}, -50%); }`:"",p?`.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { color: ${p}; }
         .fc-meridiem-bottom { color: ${p}; }`:"",yr(l)].filter(Boolean).join(`
`);return T`<style>${w}</style>`}function Ge(...l){let e=t=>t&&typeof t=="object";return l.reduce((t,s)=>(Object.keys(s).forEach(c=>{let f=t[c],d=s[c];Array.isArray(f)&&Array.isArray(d)?t[c]=f.concat(...d):e(f)&&e(d)?t[c]=Ge(f,d):t[c]=d}),t),{})}var At="0.2.2";console.info(`%c  FLIPCLOCK-CARD 
%c  Version ${At}  `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");var ie=class extends Y{constructor(){super(...arguments);this._clockFaces=["TwentyFourHourClock","TwelveHourClock"];this._firstUpdated=!1;this._notificationHistory=[];this._lastNotificationChanged=null;this._unreadCount=0;this._notifListOpen=!1;this._bannerHideTimeout=null;this._intervalsStarted=!1}set hass(t){this._hass=t,this._date=new Date,this._intervalsStarted||(this._intervalsStarted=!0,setInterval(this.updateTimezones.bind(this),500),setInterval(this.updateMeridiemBottom.bind(this),500),setInterval(this.updateNotificationBanner.bind(this),500),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.resyncClock()}),setInterval(this.resyncClock.bind(this),3e4))}resyncClock(){this._date=new Date,this.rebuildClock()}setConfig(t){if(!t)throw new Error("Invalid configuration");if(this._config=Ge({title:null,time:{face:"TwentyFourHourClock",showSeconds:!1,meridiemFontSize:null,meridiemFontFamily:null,meridiemOffset:null,meridiemColor:null,meridiemPosition:"inline",cardSize:null},timezones:[],date:{format:{weekday:"long",day:"numeric",month:"long",year:"numeric"},hidden:!1,locale:null,fontSize:null,fontFamily:null,color:null},background:{type:null}},t),this._timezones=[],this._config.timezones.forEach(s=>{this._timezones.push({id:typeof s=="string"?s:s.id,title:typeof s=="string"?s:s.title})}),!this._effectiveFace){let s=this.getSavedFace();this._effectiveFace=s&&this._clockFaces.includes(s)?s:this._config.time.face}}getSavedFace(){try{return localStorage.getItem("flipclock-card-time-format")}catch(t){return null}}saveFace(t){try{localStorage.setItem("flipclock-card-time-format",t)}catch(s){}}toggleTimeFormat(){this._effectiveFace=this._effectiveFace==="TwelveHourClock"?"TwentyFourHourClock":"TwelveHourClock",this.saveFace(this._effectiveFace),this.rebuildClock()}rebuildClock(){var c;let t=(c=this.shadowRoot)==null?void 0:c.querySelector(".fc-time");if(!t)return;t.innerHTML="";let s=this.createClockElement();s&&t.appendChild(s)}createClockElement(){if(!this._clockFaces.includes(this._effectiveFace))return null;let t=document.createElement("div");return t.className="fc-now",new Pt.default(t,this._date,{face:this._effectiveFace,showSeconds:this._config.time.showSeconds}),t}shouldUpdate(){return!this._firstUpdated}firstUpdated(){var t,s,c,f;this._firstUpdated=!0,(s=(t=this.shadowRoot)==null?void 0:t.getElementById("fc_notif_fab"))==null||s.addEventListener("click",()=>this.toggleNotificationList()),(f=(c=this.shadowRoot)==null?void 0:c.getElementById("fc_format_toggle"))==null||f.addEventListener("click",()=>this.toggleTimeFormat())}render(){return!this._config||!this._hass?T``:T`
      <ha-card>
        <div class="fc-notification" id="fc_notification">
          <span class="fc-notification-title" id="fc_notification_title"></span>
          <span class="fc-notification-message" id="fc_notification_message"></span>
        </div>
        <div class="fc-notif-fab" id="fc_notif_fab">
          <ha-icon icon="mdi:bell-outline"></ha-icon>
          <span class="fc-notif-badge" id="fc_notif_badge"></span>
        </div>
        <div class="fc-notif-list" id="fc_notif_list"></div>
        <div class="fc-format-toggle" id="fc_format_toggle">
          <ha-icon icon="mdi:clock-time-four-outline"></ha-icon>
        </div>
        <div class="fc-content">
          ${this.showValue(this._config.title)?T`
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
      ${Nt} ${$t(this._config)}
    `}getCardSize(){return 3}showValue(t){return typeof t!="undefined"&&t!==null}renderClock(){let t=this.createClockElement();return t?T`${t}`:T``}renderDate(){if(this._config.date.hidden)return T``;let t=this._config.time.meridiemPosition==="bottom"&&this._effectiveFace==="TwelveHourClock";return T` <div class="fc-date">
      ${t?T`<span class="fc-meridiem-bottom" id="fc_meridiem_bottom">${this.formatMeridiem(this._date)}</span>`:""}
      <span class="fc-date-text">${this.formatDate(this._date)}</span>
    </div>`}formatDate(t,s){var d;let c=this._config.date.locale||((d=this._hass)==null?void 0:d.language),f=s||this._config.date.format;return t.toLocaleDateString(c,f)}formatMeridiem(t){var d;let s=this._config.date.locale||((d=this._hass)==null?void 0:d.language),f=new Intl.DateTimeFormat(s,{hour:"numeric",hour12:!0}).formatToParts(t).find(p=>p.type==="dayPeriod");return f?f.value:""}updateMeridiemBottom(){var s,c,f;if(((c=(s=this._config)==null?void 0:s.time)==null?void 0:c.meridiemPosition)!=="bottom")return;let t=(f=this.shadowRoot)==null?void 0:f.getElementById("fc_meridiem_bottom");t&&(t.innerHTML=this.formatMeridiem(new Date))}updateNotificationBanner(){var b,w,h;if(!this._hass)return;let t=this._hass.states["input_text.dashboard_last_notification_title"],s=this._hass.states["input_text.dashboard_last_notification_message"];if(!t||!t.state)return;let c=t.last_changed;if(!(c&&c!==this._lastNotificationChanged))return;this._lastNotificationChanged=c,this._notificationHistory.unshift({title:t.state,message:(s==null?void 0:s.state)||"",time:Date.now()}),this._notificationHistory=this._notificationHistory.slice(0,20),this._notifListOpen?this.renderNotifList():(this._unreadCount++,this.updateNotifBadge());let d=(b=this.shadowRoot)==null?void 0:b.getElementById("fc_notification"),p=(w=this.shadowRoot)==null?void 0:w.getElementById("fc_notification_title"),g=(h=this.shadowRoot)==null?void 0:h.getElementById("fc_notification_message");p&&(p.textContent=t.state),g&&(g.textContent=(s==null?void 0:s.state)||""),d==null||d.classList.add("visible"),this._bannerHideTimeout&&clearTimeout(this._bannerHideTimeout),this._bannerHideTimeout=setTimeout(()=>{d==null||d.classList.remove("visible")},6e3)}updateNotifBadge(){var s;let t=(s=this.shadowRoot)==null?void 0:s.getElementById("fc_notif_badge");t&&(this._unreadCount>0?(t.textContent=this._unreadCount>9?"9+":String(this._unreadCount),t.classList.add("visible")):t.classList.remove("visible"))}toggleNotificationList(){var s;this._notifListOpen=!this._notifListOpen;let t=(s=this.shadowRoot)==null?void 0:s.getElementById("fc_notif_list");t==null||t.classList.toggle("open",this._notifListOpen),this._notifListOpen&&(this._unreadCount=0,this.updateNotifBadge(),this.renderNotifList())}renderNotifList(){var s;let t=(s=this.shadowRoot)==null?void 0:s.getElementById("fc_notif_list");if(t){if(this._notificationHistory.length===0){t.innerHTML='<div class="fc-notif-empty">No notifications yet</div>';return}t.innerHTML=this._notificationHistory.map(c=>{let f=new Date(c.time).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),d=this.escapeHtml(c.title),p=this.escapeHtml(c.message);return`<div class="fc-notif-item">
          <div class="fc-notif-item-row"><span class="fc-notif-item-title">${d}</span><span class="fc-notif-item-time">${f}</span></div>
          ${p?`<div class="fc-notif-item-message">${p}</div>`:""}
        </div>`}).join("")}}escapeHtml(t){let s=document.createElement("div");return s.textContent=t,s.innerHTML}formatTimezone(t){return this.formatDate(this._date,{hour:"numeric",minute:"numeric",timeZone:t,weekday:"short"})}renderTimezones(){return T`
      <div class="fc-timezone" id="fc_timezone">
        ${this._timezones.map((t,s)=>T`
            <div class="item">
              <div class="tz">
                <ha-icon class="tz-icon" icon="mdi:clock-outline"></ha-icon>
                <div class="tz-locale">${t.title}</div>
              </div>
              <div class="tz-time" id="tz_${s}">
                ${this.formatTimezone(t.id)}
              </div>
            </div>
          `)}
      </div>
    `}updateTimezones(){this._timezones.map((t,s)=>{var f;let c=(f=this.shadowRoot)==null?void 0:f.getElementById(`tz_${s}`);c&&(c.innerHTML=this.formatTimezone(t.id))})}};ge([Ue()],ie.prototype,"_hass",2),ge([Ue()],ie.prototype,"_config",2),ie=ge([wt("flipclock-card")],ie);export{ie as FlipClockCard};
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

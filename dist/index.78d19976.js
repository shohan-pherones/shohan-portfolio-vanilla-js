function e(e){return e&&e.__esModule?e.default:e}var t,n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i=function(e){return e&&e.Math==Math&&e};o=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")();var a,s;a=!(s=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var c,u={};c=!s((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var l,p=Function.prototype.call;u=c?p.bind(p):function(){return p.apply(p,arguments)};var f={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,h=d&&!f.call({1:2},1);l=h?function(e){var t=d(this,e);return!!t&&t.enumerable}:f;var v;v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var m,y,g,b,w={},S=Function.prototype,E=S.call,T=c&&S.bind.bind(E,E),O=(b=function(e){return c?T(e):function(){return E.apply(e,arguments)}})({}.toString),k=b("".slice);g=function(e){return k(O(e),8,-1)},y=function(e){if("Function"===g(e))return b(e)};var j=Object,A=y("".split);w=s((function(){return!j("z").propertyIsEnumerable(0)}))?function(e){return"String"==g(e)?A(e,""):j(e)}:j;var M,_;_=function(e){return null==e};var C=TypeError;M=function(e){if(_(e))throw C("Can't call method on "+e);return e},m=function(e){return w(M(e))};var L,P,x,N={},I={},D="object"==typeof document&&document.all,F=(x={all:D,IS_HTMLDDA:void 0===D&&void 0!==D}).all;I=x.IS_HTMLDDA?function(e){return"function"==typeof e||e===F}:function(e){return"function"==typeof e};var R=x.all;N=x.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:I(e)||e===R}:function(e){return"object"==typeof e?null!==e:I(e)};var z,$={},H=function(e){return I(e)?e:void 0};z=function(e,t){return arguments.length<2?H(o[e]):o[e]&&o[e][t]};var q={};q=y({}.isPrototypeOf);var Q,Y,W,X={};X=z("navigator","userAgent")||"";var G,U,B=o.process,V=o.Deno,J=B&&B.versions||V&&V.version,K=J&&J.v8;K&&(U=(G=K.split("."))[0]>0&&G[0]<4?1:+(G[0]+G[1])),!U&&X&&(!(G=X.match(/Edge\/(\d+)/))||G[1]>=74)&&(G=X.match(/Chrome\/(\d+)/))&&(U=+G[1]),W=U,Y=!!Object.getOwnPropertySymbols&&!s((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&W&&W<41})),Q=Y&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var Z=Object;$=Q?function(e){return"symbol"==typeof e}:function(e){var t=z("Symbol");return I(t)&&q(t.prototype,Z(e))};var ee,te,ne,re=String;ne=function(e){try{return re(e)}catch(e){return"Object"}};var oe=TypeError;te=function(e){if(I(e))return e;throw oe(ne(e)+" is not a function")},ee=function(e,t){var n=e[t];return _(n)?void 0:te(n)};var ie,ae=TypeError;ie=function(e,t){var n,r;if("string"===t&&I(n=e.toString)&&!N(r=u(n,e)))return r;if(I(n=e.valueOf)&&!N(r=u(n,e)))return r;if("string"!==t&&I(n=e.toString)&&!N(r=u(n,e)))return r;throw ae("Can't convert object to primitive value")};var se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(o,e,{value:t,configurable:!0,writable:!0})}catch(n){o[e]=t}return t};var pe=o["__core-js_shared__"]||ce("__core-js_shared__",{});ue=pe,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var fe,de={},he=Object;fe=function(e){return he(M(e))};var ve=y({}.hasOwnProperty);de=Object.hasOwn||function(e,t){return ve(fe(e),t)};var me,ye=0,ge=Math.random(),be=y(1..toString);me=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+ge,36)};var we=se("wks"),Se=o.Symbol,Ee=Se&&Se.for,Te=Q?Se:Se&&Se.withoutSetter||me,Oe=TypeError,ke=function(e){if(!de(we,e)||!Y&&"string"!=typeof we[e]){var t="Symbol."+e;Y&&de(Se,e)?we[e]=Se[e]:we[e]=Q&&Ee?Ee(t):Te(t)}return we[e]}("toPrimitive");P=function(e,t){if(!N(e)||$(e))return e;var n,r=ee(e,ke);if(r){if(void 0===t&&(t="default"),n=u(r,e,t),!N(n)||$(n))return n;throw Oe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},L=function(e){var t=P(e,"string");return $(t)?t:t+""};var je,Ae,Me=o.document,_e=N(Me)&&N(Me.createElement);Ae=function(e){return _e?Me.createElement(e):{}},je=!a&&!s((function(){return 7!=Object.defineProperty(Ae("div"),"a",{get:function(){return 7}}).a}));var Ce,Le,Pe=Object.getOwnPropertyDescriptor,xe=n=a?Pe:function(e,t){if(e=m(e),t=L(t),je)try{return Pe(e,t)}catch(e){}if(de(e,t))return v(!u(l,e,t),e[t])},Ne={};Le=a&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ie,De=String,Fe=TypeError;Ie=function(e){if(N(e))return e;throw Fe(De(e)+" is not an object")};var Re=TypeError,ze=Object.defineProperty,$e=Object.getOwnPropertyDescriptor;Ce=a?Le?function(e,t,n){if(Ie(e),t=L(t),Ie(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=$e(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return ze(e,t,n)}:ze:function(e,t,n){if(Ie(e),t=L(t),Ie(n),je)try{return ze(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Re("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ne=a?function(e,t,n){return Ce(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e};var He,qe,Qe=Function.prototype,Ye=a&&Object.getOwnPropertyDescriptor,We=de(Qe,"name"),Xe={EXISTS:We,PROPER:We&&"something"===function(){}.name,CONFIGURABLE:We&&(!a||a&&Ye(Qe,"name").configurable)}.CONFIGURABLE,Ge={},Ue=y(Function.toString);I(ue.inspectSource)||(ue.inspectSource=function(e){return Ue(e)}),Ge=ue.inspectSource;var Be,Ve,Je=o.WeakMap;Ve=I(Je)&&/native code/.test(String(Je));var Ke,Ze=se("keys");Ke=function(e){return Ze[e]||(Ze[e]=me(e))};var et={};et={};var tt,nt,rt,ot=o.TypeError,it=o.WeakMap;if(Ve||ue.state){var at=ue.state||(ue.state=new it);at.get=at.get,at.has=at.has,at.set=at.set,tt=function(e,t){if(at.has(e))throw ot("Object already initialized");return t.facade=e,at.set(e,t),t},nt=function(e){return at.get(e)||{}},rt=function(e){return at.has(e)}}else{var st=Ke("state");et[st]=!0,tt=function(e,t){if(de(e,st))throw ot("Object already initialized");return t.facade=e,Ne(e,st,t),t},nt=function(e){return de(e,st)?e[st]:{}},rt=function(e){return de(e,st)}}var ct=(Be={set:tt,get:nt,has:rt,enforce:function(e){return rt(e)?nt(e):tt(e,{})},getterFor:function(e){return function(t){var n;if(!N(t)||(n=nt(t)).type!==e)throw ot("Incompatible receiver, "+e+" required");return n}}}).enforce,ut=Be.get,lt=Object.defineProperty,pt=a&&!s((function(){return 8!==lt((function(){}),"length",{value:8}).length})),ft=String(String).split("String"),dt=qe=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!de(e,"name")||Xe&&e.name!==t)&&(a?lt(e,"name",{value:t,configurable:!0}):e.name=t),pt&&n&&de(n,"arity")&&e.length!==n.arity&&lt(e,"length",{value:n.arity});try{n&&de(n,"constructor")&&n.constructor?a&&lt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=ct(e);return de(r,"source")||(r.source=ft.join("string"==typeof t?t:"")),e};Function.prototype.toString=dt((function(){return I(this)&&ut(this).source||Ge(this)}),"toString"),He=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;if(I(n)&&qe(n,i,r),r.global)o?e[t]=n:ce(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:Ce(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var ht,vt,mt,yt,gt,bt={},wt={},St=Math.ceil,Et=Math.floor;wt=Math.trunc||function(e){var t=+e;return(t>0?Et:St)(t)},gt=function(e){var t=+e;return t!=t||0===t?0:wt(t)};var Tt=Math.max,Ot=Math.min;yt=function(e,t){var n=gt(e);return n<0?Tt(n+t,0):Ot(n,t)};var kt,jt,At=Math.min;jt=function(e){return e>0?At(gt(e),9007199254740991):0},kt=function(e){return jt(e.length)};var Mt=function(e){return function(t,n,r){var o,i=m(t),a=kt(i),s=yt(r,a);if(e&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===n)return e||s||0;return!e&&-1}},_t={includes:Mt(!0),indexOf:Mt(!1)}.indexOf,Ct=y([].push);mt=function(e,t){var n,r=m(e),o=0,i=[];for(n in r)!de(et,n)&&de(r,n)&&Ct(i,n);for(;t.length>o;)de(r,n=t[o++])&&(~_t(i,n)||Ct(i,n));return i};var Lt,Pt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");vt=Object.getOwnPropertyNames||function(e){return mt(e,Pt)},Lt=Object.getOwnPropertySymbols;var xt=y([].concat);bt=z("Reflect","ownKeys")||function(e){var t=vt(Ie(e));return Lt?xt(t,Lt(e)):t},ht=function(e,t,r){for(var o=bt(t),i=Ce,a=n,s=0;s<o.length;s++){var c=o[s];de(e,c)||r&&de(r,c)||i(e,c,a(t,c))}};var Nt={},It=/#|\.prototype\./,Dt=function(e,t){var n=Rt[Ft(e)];return n==$t||n!=zt&&(I(t)?s(t):!!t)},Ft=Dt.normalize=function(e){return String(e).replace(It,".").toLowerCase()},Rt=Dt.data={},zt=Dt.NATIVE="N",$t=Dt.POLYFILL="P";Nt=Dt,t=function(e,t){var n,r,i,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?o:l?o[c]||ce(c,{}):(o[c]||{}).prototype)for(r in t){if(a=t[r],i=e.dontCallGetSet?(s=xe(n,r))&&s.value:n[r],!Nt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;ht(a,i)}(e.sham||i&&i.sham)&&Ne(a,"sham",!0),He(n,r,a,e)}};var Ht,qt={},Qt=Function.prototype,Yt=Qt.apply,Wt=Qt.call;qt="object"==typeof Reflect&&Reflect.apply||(c?Wt.bind(Yt):function(){return Wt.apply(Yt,arguments)});var Xt,Gt=y(y.bind);Xt=function(e,t){return te(e),void 0===t?e:c?Gt(e,t):function(){return e.apply(t,arguments)}};var Ut={};Ut=z("document","documentElement");var Bt={};Bt=y([].slice);var Vt,Jt=TypeError;Vt=function(e,t){if(e<t)throw Jt("Not enough arguments");return e};var Kt;Kt=/(?:ipad|iphone|ipod).*applewebkit/i.test(X);var Zt;Zt="process"==g(o.process);var en,tn,nn,rn,on=o.setImmediate,an=o.clearImmediate,sn=o.process,cn=o.Dispatch,un=o.Function,ln=o.MessageChannel,pn=o.String,fn=0,dn={};try{en=o.location}catch(e){}var hn=function(e){if(de(dn,e)){var t=dn[e];delete dn[e],t()}},vn=function(e){return function(){hn(e)}},mn=function(e){hn(e.data)},yn=function(e){o.postMessage(pn(e),en.protocol+"//"+en.host)};on&&an||(on=function(e){Vt(arguments.length,1);var t=I(e)?e:un(e),n=Bt(arguments,1);return dn[++fn]=function(){qt(t,void 0,n)},tn(fn),fn},an=function(e){delete dn[e]},Zt?tn=function(e){sn.nextTick(vn(e))}:cn&&cn.now?tn=function(e){cn.now(vn(e))}:ln&&!Kt?(rn=(nn=new ln).port2,nn.port1.onmessage=mn,tn=Xt(rn.postMessage,rn)):o.addEventListener&&I(o.postMessage)&&!o.importScripts&&en&&"file:"!==en.protocol&&!s(yn)?(tn=yn,o.addEventListener("message",mn,!1)):tn="onreadystatechange"in Ae("script")?function(e){Ut.appendChild(Ae("script")).onreadystatechange=function(){Ut.removeChild(this),hn(e)}}:function(e){setTimeout(vn(e),0)});var gn=(Ht={set:on,clear:an}).clear;t({global:!0,bind:!0,enumerable:!0,forced:o.clearImmediate!==gn},{clearImmediate:gn});var bn=Ht.set;t({global:!0,bind:!0,enumerable:!0,forced:o.setImmediate!==bn},{setImmediate:bn});var wn,Sn,En={},Tn={},On=Tn={};function kn(){throw new Error("setTimeout has not been defined")}function jn(){throw new Error("clearTimeout has not been defined")}function An(e){if(wn===setTimeout)return setTimeout(e,0);if((wn===kn||!wn)&&setTimeout)return wn=setTimeout,setTimeout(e,0);try{return wn(e,0)}catch(t){try{return wn.call(null,e,0)}catch(t){return wn.call(this,e,0)}}}!function(){try{wn="function"==typeof setTimeout?setTimeout:kn}catch(e){wn=kn}try{Sn="function"==typeof clearTimeout?clearTimeout:jn}catch(e){Sn=jn}}();var Mn,_n,Cn=[],Ln=!1,Pn=-1;function xn(){Ln&&Mn&&(Ln=!1,Mn.length?Cn=Mn.concat(Cn):Pn=-1,Cn.length&&Nn())}function Nn(){if(!Ln){var e=An(xn);Ln=!0;for(var t=Cn.length;t;){for(Mn=Cn,Cn=[];++Pn<t;)Mn&&Mn[Pn].run();Pn=-1,t=Cn.length}Mn=null,Ln=!1,function(e){if(Sn===clearTimeout)return clearTimeout(e);if((Sn===jn||!Sn)&&clearTimeout)return Sn=clearTimeout,clearTimeout(e);try{Sn(e)}catch(t){try{return Sn.call(null,e)}catch(t){return Sn.call(this,e)}}}(e)}}function In(e,t){this.fun=e,this.array=t}function Dn(){}On.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Cn.push(new In(e,t)),1!==Cn.length||Ln||An(Nn)},In.prototype.run=function(){this.fun.apply(null,this.array)},On.title="browser",On.browser=!0,On.env={},On.argv=[],On.version="",On.versions={},On.on=Dn,On.addListener=Dn,On.once=Dn,On.off=Dn,On.removeListener=Dn,On.removeAllListeners=Dn,On.emit=Dn,On.prependListener=Dn,On.prependOnceListener=Dn,On.listeners=function(e){return[]},On.binding=function(e){throw new Error("process.binding is not supported")},On.cwd=function(){return"/"},On.chdir=function(e){throw new Error("process.chdir is not supported")},On.umask=function(){return 0},"undefined"!=typeof self&&self,_n=()=>(()=>{var e={75:function(e){(function(){var t,n,r,o,i,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=Tn&&Tn.hrtime?(e.exports=function(){return(t()-i)/1e6},n=Tn.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*Tn.uptime(),i=o-a):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,i=["moz","webkit"],a="AnimationFrame",s=o["request"+a],c=o["cancel"+a]||o["cancelRequest"+a],u=0;!s&&u<i.length;u++)s=o[i[u]+"Request"+a],c=o[i[u]+"Cancel"+a]||o[i[u]+"CancelRequest"+a];if(!s||!c){var l=0,p=0,f=[];s=function(e){if(0===f.length){var t=r(),n=Math.max(0,16.666666666666668-(t-l));l=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return f.push({handle:++p,callback:e,cancelled:!1}),p},c=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{n.d(r,{default:()=>O});var e=n(4087),t=n.n(e);const o=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var s="TYPE_CHARACTER",c="REMOVE_CHARACTER",u="REMOVE_ALL",l="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",f="CALL_FUNCTION",d="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",v="CHANGE_DELAY",m="CHANGE_CURSOR",y="PASTE_STRING",g="HTML_TAG";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const O=function(){function n(r,b){var E=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),T(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),T(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),T(this,"setupWrapperElement",(function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))})),T(this,"start",(function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E})),T(this,"pause",(function(){return E.state.eventLoopPaused=!0,E})),T(this,"stop",(function(){return E.state.eventLoop&&((0,e.cancel)(E.state.eventLoop),E.state.eventLoop=null),E})),T(this,"pauseFor",(function(e){return E.addEventToQueue(p,{ms:e}),E})),T(this,"typeOutAllStrings",(function(){return"string"==typeof E.options.strings?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach((function(e){E.typeString(e).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)})),E)})),T(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(o(e))return E.typeOutHTMLString(e,t);if(e){var n=E.options||{},r=n.stringSplitter,i="function"==typeof r?r(e):e.split("");E.typeCharacters(i,t)}return E})),T(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o(e)?E.typeOutHTMLString(e,t,!0):(e&&E.addEventToQueue(y,{character:e,node:t}),E)})),T(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",E.addEventToQueue(d,{node:a,parentNode:t}),n?E.pasteString(s,a):E.typeString(s,a)):a.textContent&&(n?E.pasteString(a.textContent,t):E.typeString(a.textContent,t))}return E})),T(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return E.addEventToQueue(u,{speed:e}),E})),T(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return E.addEventToQueue(h,{speed:e}),E})),T(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return E.addEventToQueue(v,{delay:e}),E})),T(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return E.addEventToQueue(m,{cursor:e}),E})),T(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)E.addEventToQueue(c);return E})),T(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return E.addEventToQueue(f,{cb:e,thisArg:t}),E})),T(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){E.addEventToQueue(s,{character:e,node:t})})),E})),T(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){E.addEventToQueue(c)})),E})),T(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E.addEventToStateProperty(e,t,n,"eventQueue")})),T(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=E.options.loop;return r?E.addEventToStateProperty(e,t,n,"reverseCalledEvents"):E})),T(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return E.state[r]=n?[o].concat(S(E.state[r])):[].concat(S(E.state[r]),[o]),E})),T(this,"runEventLoop",(function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var e=Date.now(),n=e-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=S(E.state.calledEvents),E.state.calledEvents=[],E.options=w({},E.state.initialOptions)}if(E.state.eventLoop=t()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(e<E.state.pauseUntil)return;E.state.pauseUntil=null}var r,o=S(E.state.eventQueue),i=o.shift();if(!(n<=(r=i.eventName===l||i.eventName===c?"natural"===E.options.deleteSpeed?a(40,80):E.options.deleteSpeed:"natural"===E.options.delay?a(120,160):E.options.delay))){var b=i.eventName,T=i.eventArgs;switch(E.logInDevMode({currentEvent:i,state:E.state,delay:r}),b){case y:case s:var O=T.character,k=T.node,j=document.createTextNode(O),A=j;E.options.onCreateTextNode&&"function"==typeof E.options.onCreateTextNode&&(A=E.options.onCreateTextNode(O,j)),A&&(k?k.appendChild(A):E.state.elements.wrapper.appendChild(A)),E.state.visibleNodes=[].concat(S(E.state.visibleNodes),[{type:"TEXT_NODE",character:O,node:A}]);break;case c:o.unshift({eventName:l,eventArgs:{removingCharacterNode:!0}});break;case p:var M=i.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(M);break;case f:var _=i.eventArgs,C=_.cb,L=_.thisArg;C.call(L,{elements:E.state.elements});break;case d:var P=i.eventArgs,x=P.node,N=P.parentNode;N?N.appendChild(x):E.state.elements.wrapper.appendChild(x),E.state.visibleNodes=[].concat(S(E.state.visibleNodes),[{type:g,node:x,parentNode:N||E.state.elements.wrapper}]);break;case u:var I=E.state.visibleNodes,D=T.speed,F=[];D&&F.push({eventName:h,eventArgs:{speed:D,temp:!0}});for(var R=0,z=I.length;R<z;R++)F.push({eventName:l,eventArgs:{removingCharacterNode:!1}});D&&F.push({eventName:h,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),o.unshift.apply(o,F);break;case l:var $=i.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var H=E.state.visibleNodes.pop(),q=H.type,Q=H.node,Y=H.character;E.options.onRemoveNode&&"function"==typeof E.options.onRemoveNode&&E.options.onRemoveNode({node:Q,character:Y}),Q&&Q.parentNode.removeChild(Q),q===g&&$&&o.unshift({eventName:l,eventArgs:{}})}break;case h:E.options.deleteSpeed=i.eventArgs.speed;break;case v:E.options.delay=i.eventArgs.delay;break;case m:E.options.cursor=i.eventArgs.cursor,E.state.elements.cursor.innerHTML=i.eventArgs.cursor}E.options.loop&&(i.eventName===l||i.eventArgs&&i.eventArgs.temp||(E.state.calledEvents=[].concat(S(E.state.calledEvents),[i]))),E.state.eventQueue=o,E.state.lastFrameTime=e}}})),r)if("string"==typeof r){var O=document.querySelector(r);if(!O)throw new Error("Could not find container element");this.state.elements.container=O}else this.state.elements.container=r;b&&(this.options=w(w({},this.options),b)),this.state.initialOptions=w({},this.options),this.init()}var r,b;return b=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}((r=n).prototype,b),Object.defineProperty(r,"prototype",{writable:!1}),n}()})(),r.default})(),En=_n();var Fn={};
/*!
 * TagCloud.js v2.2.0
 * Copyright (c) 2016-2021 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */Fn=function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;e(this,t);var i=this;if(!n||1!==n.nodeType)return new Error("Incorrect element type");i.$container=n,i.texts=r||[],i.config=a(a({},t._defaultConfig),o||{}),i.radius=i.config.radius,i.depth=2*i.radius,i.size=1.5*i.radius,i.maxSpeed=t._getMaxSpeed(i.config.maxSpeed),i.initSpeed=t._getInitSpeed(i.config.initSpeed),i.direction=i.config.direction,i.keep=i.config.keep,i.paused=!1,i._createElment(),i._init(),t.list.push({el:i.$el,container:n,instance:i})}return n(t,[{key:"_createElment",value:function(){var e=this,t=document.createElement("div");t.className=e.config.containerClass,e.config.useContainerInlineStyles&&(t.style.position="relative",t.style.width="".concat(2*e.radius,"px"),t.style.height="".concat(2*e.radius,"px")),e.items=[],e.texts.forEach((function(n,r){var o=e._createTextItem(n,r);t.appendChild(o.el),e.items.push(o)})),e.$container.appendChild(t),e.$el=t}},{key:"_createTextItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this,r=document.createElement("span");if(r.className=n.config.itemClass,n.config.useItemInlineStyles){r.style.willChange="transform, opacity, filter",r.style.position="absolute",r.style.top="50%",r.style.left="50%",r.style.zIndex=t+1,r.style.filter="alpha(opacity=0)",r.style.opacity=0;var o="50% 50%";r.style.WebkitTransformOrigin=o,r.style.MozTransformOrigin=o,r.style.OTransformOrigin=o,r.style.transformOrigin=o;var i="translate3d(-50%, -50%, 0) scale(1)";r.style.WebkitTransform=i,r.style.MozTransform=i,r.style.OTransform=i,r.style.transform=i}return r.innerText=e,a({el:r},n._computePosition(t))}},{key:"_computePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,r=n.texts.length;t&&(e=Math.floor(Math.random()*(r+1)));var o=Math.acos((2*e+1)/r-1),i=Math.sqrt((r+1)*Math.PI)*o;return{x:n.size*Math.cos(i)*Math.sin(o)/2,y:n.size*Math.sin(i)*Math.sin(o)/2,z:n.size*Math.cos(o)/2}}},{key:"_requestInterval",value:function(e,t){var n=window.requestAnimationFrame,r=(new Date).getTime(),o={};function i(){o.value=n(i),(new Date).getTime()-r>=t&&(e.call(),r=(new Date).getTime())}return o.value=n(i),o}},{key:"_init",value:function(){var e=this;e.active=!1,e.mouseX0=e.initSpeed*Math.sin(e.direction*(Math.PI/180)),e.mouseY0=-e.initSpeed*Math.cos(e.direction*(Math.PI/180)),e.mouseX=e.mouseX0,e.mouseY=e.mouseY0,t._on(e.$el,"mouseover",(function(){e.active=!0})),t._on(e.$el,"mouseout",(function(){e.active=!1})),t._on(e.keep?window:e.$el,"mousemove",(function(t){t=t||window.event;var n=e.$el.getBoundingClientRect();e.mouseX=(t.clientX-(n.left+n.width/2))/5,e.mouseY=(t.clientY-(n.top+n.height/2))/5})),e._next(),e.interval=e._requestInterval((function(){e._next.call(e)}),10)}},{key:"_next",value:function(){var e=this;if(!e.paused){e.keep||e.active||(e.mouseX=Math.abs(e.mouseX-e.mouseX0)<1?e.mouseX0:(e.mouseX+e.mouseX0)/2,e.mouseY=Math.abs(e.mouseY-e.mouseY0)<1?e.mouseY0:(e.mouseY+e.mouseY0)/2);var t=-Math.min(Math.max(-e.mouseY,-e.size),e.size)/e.radius*e.maxSpeed,n=Math.min(Math.max(-e.mouseX,-e.size),e.size)/e.radius*e.maxSpeed;if(!(Math.abs(t)<=.01&&Math.abs(n)<=.01)){var r=Math.PI/180,o=[Math.sin(t*r),Math.cos(t*r),Math.sin(n*r),Math.cos(n*r)];e.items.forEach((function(t){var n=t.x,r=t.y*o[1]+t.z*-o[0],i=t.y*o[0]+t.z*o[1],a=n*o[3]+i*o[2],s=r,c=i*o[3]-n*o[2],u=2*e.depth/(2*e.depth+c);t.x=a,t.y=s,t.z=c,t.scale=u.toFixed(3);var l=u*u-.25;l=(l>1?1:l).toFixed(3);var p=t.el,f=(t.x-p.offsetWidth/2).toFixed(2),d=(t.y-p.offsetHeight/2).toFixed(2),h="translate3d(".concat(f,"px, ").concat(d,"px, 0) scale(").concat(t.scale,")");p.style.WebkitTransform=h,p.style.MozTransform=h,p.style.OTransform=h,p.style.transform=h,p.style.filter="alpha(opacity=".concat(100*l,")"),p.style.opacity=l}))}}}},{key:"update",value:function(e){var t=this;t.texts=e||[],t.texts.forEach((function(e,n){var r=t.items[n];r||(o(r=t._createTextItem(e,n),t._computePosition(n,!0)),t.$el.appendChild(r.el),t.items.push(r)),r.el.innerText=e}));var n=t.texts.length,r=t.items.length;n<r&&t.items.splice(n,r-n).forEach((function(e){t.$el.removeChild(e.el)}))}},{key:"destroy",value:function(){var e=this;e.interval=null;var n=t.list.findIndex((function(t){return t.el===e.$el}));-1!==n&&t.list.splice(n,1),e.$container&&e.$el&&e.$container.removeChild(e.$el)}},{key:"pause",value:function(){this.paused=!0}},{key:"resume",value:function(){this.paused=!1}}],[{key:"_on",value:function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n}}]),t}();return s.list=[],s._defaultConfig={radius:100,maxSpeed:"normal",initSpeed:"normal",direction:135,keep:!0,useContainerInlineStyles:!0,useItemInlineStyles:!0,containerClass:"tagcloud",itemClass:"tagcloud--item"},s._getMaxSpeed=function(e){return{slow:.5,normal:1,fast:2}[e]||1},s._getInitSpeed=function(e){return{slow:16,normal:32,fast:80}[e]||32},function(e,t,n){"string"==typeof e&&(e=document.querySelectorAll(e)),e.forEach||(e=[e]);var r=[];return e.forEach((function(e){e&&r.push(new s(e,t,n))})),r.length<=1?r[0]:r}}();var Rn;Rn=JSON.parse('[{"title":"Spectra Bank - An online bank application","description":"Spectra Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What\'s more: we\'ve made sure the experience of using Spectra Bank is as seamless as possible. With a modern UI and UX, it\'s not hard to see why many people are switching their banking to Spectra Bank!","image":"https://pbs.twimg.com/media/FeSw4W6VIAEDuOg?format=jpg&name=large","tools":"html, css, js, parcel","liveLink":"https://spectra-bank.netlify.app","githubLink":"https://github.com/shohan-pherones/spectra-bank"},{"title":"Tera Guard - An anti-virus website","description":"A mix of pure simplicity and functional elegance, Tera Guard is a web-based security solution that provides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.","image":"https://pbs.twimg.com/media/FeSw8ekVEAEK797?format=jpg&name=large","tools":"html, css, js, parcel","liveLink":"https://tera-guard.netlify.app","githubLink":"https://github.com/shohan-pherones/tera-guard"},{"title":"Map - Pro: A workout mapping application","description":"Fitness and health have never been more accessible. Map - Pro offers an interactive workout mapping app for athletes and fitness enthusiasts who love tracking their workouts and seeing the change in their fitness. Map - Pro is an easy-to-use fitness app that provides safe and effective workouts in the form of mapped routes from different levels of intensity, suitable for all levels of fitness. Take a post-workout walk or jog with your colleagues, go on a bike ride with the family on weekends or even try taking the stairs to work!","image":"https://pbs.twimg.com/media/FeSw_tdVsAA4JxI?format=jpg&name=large","tools":"html, css, js, leaflet.js, parcel","liveLink":"https://map-pro-shohan.netlify.app","githubLink":"https://github.com/shohan-pherones/map-pro"}]');const zn=document.querySelector("header"),$n=document.querySelector(".navbar"),Hn=document.querySelector(".links"),qn=document.querySelectorAll(".link"),Qn=document.querySelector(".toggle"),Yn=document.getElementById("app"),Wn=document.querySelector(".projects"),Xn=$n.getBoundingClientRect().height;function Gn(){Qn.classList.remove("toggle-close"),Hn.style.animation="mobileNavDisappear 0.35s 1",setTimeout((()=>Hn.classList.remove("links-open")),300),document.querySelector("html").style.overflow="visible"}new IntersectionObserver((function(e){e[0].isIntersecting?zn.classList.remove("sticky"):zn.classList.add("sticky")}),{root:null,threshold:0,rootMargin:`-${Xn}px`}).observe(zn),qn.forEach((e=>e.addEventListener("click",(e=>{const t=e.target;t.closest(".links").querySelectorAll(".link").forEach((e=>{e.style.color=e===t?"rgb(20, 184, 166)":"rgb(209, 213, 219)"}))})))),Qn.addEventListener("click",(()=>{Qn.classList.contains("toggle-close")?Gn():(Qn.classList.add("toggle-close"),Hn.classList.add("links-open"),Hn.style.animation="mobileNavAppear 0.3s 1",document.querySelector("html").style.overflow="hidden")})),Hn.addEventListener("click",(()=>{Hn.classList.contains("links-open")&&Gn()}));e(Fn)(".content",["HTML","CSS","Bootstrap","Tailwind CSS","Git","GitHub","Netlify","JavaScript (ES6+)","AJAX","Fetch API","NPM","Parcel","Flowbite","Daisy UI","Vercel"],{radius:375,maxSpeed:"fast",initSpeed:"normal",direction:135,keep:!0});new(e(En))(Yn,{loop:!0}).pauseFor(1500).typeString("I am a web developer.").pauseFor(3e3).deleteChars(19).typeString("build amazing things for the web.").pauseFor(3e3).deleteChars(33).typeString("can also design creative & unique websites.").pauseFor(3e3).start(),Rn.forEach((e=>{const t=`\n        <div class="project">\n          <div class="project-img">\n            <img\n              src="${e.image}"\n              alt="Photo of ${e.title}"\n            />\n          </div>\n          <h3 class="project-title">\n          ${e.title}\n          </h3>\n          <p class="project-details">\n            ${e.description}\n          </p>\n          <p class="project-tools">\n            Tools: <span>${e.tools}</span>\n          </p>\n          <div class="project-btns">\n            <a href="${e.liveLink}" target="_blank"\n              >Live Site &rarr;</a\n            >\n            <a\n              href="${e.githubLink}"\n              target="_blank"\n              >GitHub &rarr;</a\n            >\n          </div>\n        </div>\n    `;Wn.insertAdjacentHTML("afterbegin",t)})),function(){const e=document.querySelector(".full-name");for(const t of"Shohanur Rahman."){const n=`<span class="ch">${t}</span>`;e.insertAdjacentHTML("beforeend",n)}document.querySelectorAll(".ch").forEach((e=>{e.addEventListener("mouseover",(function(e){e.target.classList.contains("bounce")?e.target.classList.remove("bounce"):e.target.classList.add("bounce")}))}))}();
//# sourceMappingURL=index.78d19976.js.map
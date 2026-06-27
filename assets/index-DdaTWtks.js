(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var E0={exports:{}},qc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mS=Symbol.for("react.transitional.element"),gS=Symbol.for("react.fragment");function b0(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:mS,type:e,key:i,ref:t!==void 0?t:null,props:n}}qc.Fragment=gS;qc.jsx=b0;qc.jsxs=b0;E0.exports=qc;var W=E0.exports,T0={exports:{}},Ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=Symbol.for("react.transitional.element"),_S=Symbol.for("react.portal"),vS=Symbol.for("react.fragment"),xS=Symbol.for("react.strict_mode"),SS=Symbol.for("react.profiler"),yS=Symbol.for("react.consumer"),MS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),bS=Symbol.for("react.suspense"),TS=Symbol.for("react.memo"),A0=Symbol.for("react.lazy"),AS=Symbol.for("react.activity"),jp=Symbol.iterator;function RS(e){return e===null||typeof e!="object"?null:(e=jp&&e[jp]||e["@@iterator"],typeof e=="function"?e:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C0=Object.assign,w0={};function Cs(e,t,n){this.props=e,this.context=t,this.refs=w0,this.updater=n||R0}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function D0(){}D0.prototype=Cs.prototype;function Ah(e,t,n){this.props=e,this.context=t,this.refs=w0,this.updater=n||R0}var Rh=Ah.prototype=new D0;Rh.constructor=Ah;C0(Rh,Cs.prototype);Rh.isPureReactComponent=!0;var Zp=Array.isArray;function Ff(){}var Me={H:null,A:null,T:null,S:null},U0=Object.prototype.hasOwnProperty;function Ch(e,t,n){var i=n.ref;return{$$typeof:Th,type:e,key:t,ref:i!==void 0?i:null,props:n}}function CS(e,t){return Ch(e.type,t,e.props)}function wh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Th}function wS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kp=/\/+/g;function vu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wS(""+e.key):t.toString(36)}function DS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ff,Ff):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Vr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Th:case _S:s=!0;break;case A0:return s=e._init,Vr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+vu(e,0):i,Zp(a)?(n="",s!=null&&(n=s.replace(Kp,"$&/")+"/"),Vr(a,t,n,"",function(c){return c})):a!=null&&(wh(a)&&(a=CS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Kp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(Zp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+vu(i,l),s+=Vr(i,t,n,r,a);else if(l=RS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+vu(i,l++),s+=Vr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Vr(DS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function al(e,t,n){if(e==null)return e;var i=[],a=0;return Vr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function US(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},LS={map:al,forEach:function(e,t,n){al(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return al(e,function(){t++}),t},toArray:function(e){return al(e,function(t){return t})||[]},only:function(e){if(!wh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ot.Activity=AS;Ot.Children=LS;Ot.Component=Cs;Ot.Fragment=vS;Ot.Profiler=SS;Ot.PureComponent=Ah;Ot.StrictMode=xS;Ot.Suspense=bS;Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Ot.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};Ot.cache=function(e){return function(){return e.apply(null,arguments)}};Ot.cacheSignal=function(){return null};Ot.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=C0({},e.props),a=e.key;if(t!=null)for(r in t.key!==void 0&&(a=""+t.key),t)!U0.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return Ch(e.type,a,i)};Ot.createContext=function(e){return e={$$typeof:MS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:yS,_context:e},e};Ot.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)U0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Ch(e,r,a)};Ot.createRef=function(){return{current:null}};Ot.forwardRef=function(e){return{$$typeof:ES,render:e}};Ot.isValidElement=wh;Ot.lazy=function(e){return{$$typeof:A0,_payload:{_status:-1,_result:e},_init:US}};Ot.memo=function(e,t){return{$$typeof:TS,type:e,compare:t===void 0?null:t}};Ot.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),a=Me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ff,Qp)}catch(r){Qp(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Me.T=t}};Ot.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Ot.use=function(e){return Me.H.use(e)};Ot.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Ot.useCallback=function(e,t){return Me.H.useCallback(e,t)};Ot.useContext=function(e){return Me.H.useContext(e)};Ot.useDebugValue=function(){};Ot.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Ot.useEffect=function(e,t){return Me.H.useEffect(e,t)};Ot.useEffectEvent=function(e){return Me.H.useEffectEvent(e)};Ot.useId=function(){return Me.H.useId()};Ot.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Ot.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Ot.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Ot.useMemo=function(e,t){return Me.H.useMemo(e,t)};Ot.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Ot.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Ot.useRef=function(e){return Me.H.useRef(e)};Ot.useState=function(e){return Me.H.useState(e)};Ot.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Ot.useTransition=function(){return Me.H.useTransition()};Ot.version="19.2.4";T0.exports=Ot;var Ie=T0.exports,L0={exports:{}},Yc={},N0={exports:{}},O0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,L){var q=D.length;D.push(L);t:for(;0<q;){var Z=q-1>>>1,nt=D[Z];if(0<a(nt,L))D[Z]=L,D[q]=nt,q=Z;else break t}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var L=D[0],q=D.pop();if(q!==L){D[0]=q;t:for(var Z=0,nt=D.length,pt=nt>>>1;Z<pt;){var dt=2*(Z+1)-1,Lt=D[dt],Qt=dt+1,ie=D[Qt];if(0>a(Lt,q))Qt<nt&&0>a(ie,Lt)?(D[Z]=ie,D[Qt]=q,Z=Qt):(D[Z]=Lt,D[dt]=q,Z=dt);else if(Qt<nt&&0>a(ie,q))D[Z]=ie,D[Qt]=q,Z=Qt;else break t}}return L}function a(D,L){var q=D.sortIndex-L.sortIndex;return q!==0?q:D.id-L.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,p=null,u=3,d=!1,v=!1,M=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function y(D){for(var L=n(c);L!==null;){if(L.callback===null)i(c);else if(L.startTime<=D)i(c),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(c)}}function R(D){if(M=!1,y(D),!v)if(n(l)!==null)v=!0,T||(T=!0,z());else{var L=n(c);L!==null&&I(R,L.startTime-D)}}var T=!1,A=-1,_=5,b=-1;function F(){return g?!0:!(e.unstable_now()-b<_)}function w(){if(g=!1,T){var D=e.unstable_now();b=D;var L=!0;try{t:{v=!1,M&&(M=!1,m(A),A=-1),d=!0;var q=u;try{e:{for(y(D),p=n(l);p!==null&&!(p.expirationTime>D&&F());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,u=p.priorityLevel;var nt=Z(p.expirationTime<=D);if(D=e.unstable_now(),typeof nt=="function"){p.callback=nt,y(D),L=!0;break e}p===n(l)&&i(l),y(D)}else i(l);p=n(l)}if(p!==null)L=!0;else{var pt=n(c);pt!==null&&I(R,pt.startTime-D),L=!1}}break t}finally{p=null,u=q,d=!1}L=void 0}}finally{L?z():T=!1}}}var z;if(typeof x=="function")z=function(){x(w)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,k=B.port2;B.port1.onmessage=w,z=function(){k.postMessage(null)}}else z=function(){f(w,0)};function I(D,L){A=f(function(){D(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(D){switch(u){case 1:case 2:case 3:var L=3;break;default:L=u}var q=u;u=L;try{return D()}finally{u=q}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(D,L){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=u;u=D;try{return L()}finally{u=q}},e.unstable_scheduleCallback=function(D,L,q){var Z=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Z+q:Z):q=Z,D){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=q+nt,D={id:h++,callback:L,priorityLevel:D,startTime:q,expirationTime:nt,sortIndex:-1},q>Z?(D.sortIndex=q,t(c,D),n(l)===null&&D===n(c)&&(M?(m(A),A=-1):M=!0,I(R,q-Z))):(D.sortIndex=nt,t(l,D),v||d||(v=!0,T||(T=!0,z()))),D},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(D){var L=u;return function(){var q=u;u=L;try{return D.apply(this,arguments)}finally{u=q}}}})(O0);N0.exports=O0;var NS=N0.exports,P0={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=Ie;function z0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function oa(){}var fn={d:{f:oa,r:function(){throw Error(z0(522))},D:oa,C:oa,L:oa,m:oa,X:oa,S:oa,M:oa},p:0,findDOMNode:null},PS=Symbol.for("react.portal");function zS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:PS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var lo=OS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function jc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fn;pn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(z0(299));return zS(e,t,null,n)};pn.flushSync=function(e){var t=lo.T,n=fn.p;try{if(lo.T=null,fn.p=2,e)return e()}finally{lo.T=t,fn.p=n,fn.d.f()}};pn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,fn.d.C(e,t))};pn.prefetchDNS=function(e){typeof e=="string"&&fn.d.D(e)};pn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=jc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?fn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&fn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};pn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=jc(t.as,t.crossOrigin);fn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&fn.d.M(e)};pn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=jc(n,t.crossOrigin);fn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};pn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=jc(t.as,t.crossOrigin);fn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else fn.d.m(e)};pn.requestFormReset=function(e){fn.d.r(e)};pn.unstable_batchedUpdates=function(e,t){return e(t)};pn.useFormState=function(e,t,n){return lo.H.useFormState(e,t,n)};pn.useFormStatus=function(){return lo.H.useHostTransitionStatus()};pn.version="19.2.4";function F0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0)}catch(e){console.error(e)}}F0(),P0.exports=pn;var FS=P0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=NS,B0=Ie,BS=FS;function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function I0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function H0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jp(e){if(Go(e)!==e)throw Error(J(188))}function IS(e){var t=e.alternate;if(!t){if(t=Go(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Jp(a),e;if(r===i)return Jp(a),t;r=r.sibling}throw Error(J(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function V0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V0(e),t!==null)return t;e=e.sibling}return null}var Ee=Object.assign,HS=Symbol.for("react.element"),rl=Symbol.for("react.transitional.element"),eo=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),k0=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),X0=Symbol.for("react.consumer"),Vi=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),pa=Symbol.for("react.lazy"),Gf=Symbol.for("react.activity"),GS=Symbol.for("react.memo_cache_sentinel"),$p=Symbol.iterator;function Hs(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var VS=Symbol.for("react.client.reference");function Vf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===VS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case Bf:return"Profiler";case k0:return"StrictMode";case If:return"Suspense";case Hf:return"SuspenseList";case Gf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case eo:return"Portal";case Vi:return e.displayName||"Context";case X0:return(e._context.displayName||"Context")+".Consumer";case Dh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uh:return t=e.displayName||null,t!==null?t:Vf(e.type)||"Memo";case pa:t=e._payload,e=e._init;try{return Vf(e(t))}catch{}}return null}var no=Array.isArray,wt=B0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=BS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lr={pending:!1,data:null,method:null,action:null},kf=[],qr=-1;function Ti(e){return{current:e}}function Ke(e){0>qr||(e.current=kf[qr],kf[qr]=null,qr--)}function xe(e,t){qr++,kf[qr]=e.current,e.current=t}var _i=Ti(null),Eo=Ti(null),Ra=Ti(null),dc=Ti(null);function hc(e,t){switch(xe(Ra,t),xe(Eo,e),xe(_i,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rg(t),e=ux(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(_i),xe(_i,e)}function ds(){Ke(_i),Ke(Eo),Ke(Ra)}function Xf(e){e.memoizedState!==null&&xe(dc,e);var t=_i.current,n=ux(t,e.type);t!==n&&(xe(Eo,e),xe(_i,n))}function pc(e){Eo.current===e&&(Ke(_i),Ke(Eo)),dc.current===e&&(Ke(dc),Oo._currentValue=lr)}var xu,tm;function $a(e){if(xu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xu=t&&t[1]||"",tm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xu+e+tm}var Su=!1;function yu(e,t){if(!e||Su)return"";Su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Su=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$a(n):""}function kS(e,t){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return e.child!==t&&t!==null?$a("Suspense Fallback"):$a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return yu(e.type,!1);case 11:return yu(e.type.render,!1);case 1:return yu(e.type,!0);case 31:return $a("Activity");default:return""}}function em(e){try{var t="",n=null;do t+=kS(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Wf=Object.prototype.hasOwnProperty,Lh=Ve.unstable_scheduleCallback,Mu=Ve.unstable_cancelCallback,XS=Ve.unstable_shouldYield,WS=Ve.unstable_requestPaint,Nn=Ve.unstable_now,qS=Ve.unstable_getCurrentPriorityLevel,W0=Ve.unstable_ImmediatePriority,q0=Ve.unstable_UserBlockingPriority,mc=Ve.unstable_NormalPriority,YS=Ve.unstable_LowPriority,Y0=Ve.unstable_IdlePriority,jS=Ve.log,ZS=Ve.unstable_setDisableYieldValue,Vo=null,On=null;function ya(e){if(typeof jS=="function"&&ZS(e),On&&typeof On.setStrictMode=="function")try{On.setStrictMode(Vo,e)}catch{}}var Pn=Math.clz32?Math.clz32:JS,KS=Math.log,QS=Math.LN2;function JS(e){return e>>>=0,e===0?32:31-(KS(e)/QS|0)|0}var sl=256,ol=262144,ll=4194304;function tr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=tr(i):(s&=o,s!==0?a=tr(s):n||(n=o&~e,n!==0&&(a=tr(n))))):(o=i&~r,o!==0?a=tr(o):s!==0?a=tr(s):n||(n=i&~e,n!==0&&(a=tr(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function ko(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $S(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j0(){var e=ll;return ll<<=1,!(ll&62914560)&&(ll=4194304),e}function Eu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ty(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-Pn(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Z0(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Z0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Pn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function K0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Pn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Q0(e,t){var n=t&-t;return n=n&42?1:Nh(n),n&(e.suspendedLanes|t)?0:n}function Nh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function J0(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:yx(e.type))}function nm(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var Ga=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ga,Mn="__reactProps$"+Ga,ws="__reactContainer$"+Ga,qf="__reactEvents$"+Ga,ey="__reactListeners$"+Ga,ny="__reactHandles$"+Ga,im="__reactResources$"+Ga,Wo="__reactMarker$"+Ga;function Ph(e){delete e[$e],delete e[Mn],delete e[qf],delete e[ey],delete e[ny]}function Yr(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ws]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ug(e);e!==null;){if(n=e[$e])return n;e=ug(e)}return t}e=n,n=e.parentNode}return null}function Ds(e){if(e=e[$e]||e[ws]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function io(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function is(e){var t=e[im];return t||(t=e[im]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Wo]=!0}var $0=new Set,t_={};function xr(e,t){hs(e,t),hs(e+"Capture",t)}function hs(e,t){for(t_[e]=t,e=0;e<t.length;e++)$0.add(t[e])}var iy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),am={},rm={};function ay(e){return Wf.call(rm,e)?!0:Wf.call(am,e)?!1:iy.test(e)?rm[e]=!0:(am[e]=!0,!1)}function Wl(e,t,n){if(ay(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function cl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function e_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ry(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yf(e){if(!e._valueTracker){var t=e_(e)?"checked":"value";e._valueTracker=ry(e,t,""+e[t])}}function n_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=e_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function gc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sy=/[\n"\\]/g;function qn(e){return e.replace(sy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kn(t)):e.value!==""+kn(t)&&(e.value=""+kn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Zf(e,s,kn(t)):n!=null?Zf(e,s,kn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+kn(o):e.removeAttribute("name")}function i_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Yf(e);return}n=n!=null?""+kn(n):"",t=t!=null?""+kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Yf(e)}function Zf(e,t,n){t==="number"&&gc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function as(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function a_(e,t,n){if(t!=null&&(t=""+kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kn(n):""}function r_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(no(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Yf(e)}function ps(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||oy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function s_(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&sm(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&sm(e,r,t[r])}function zh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ly=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(e){return cy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Kf=null;function Fh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jr=null,rs=null;function om(e){var t=Ds(e);if(t&&(e=t.stateNode)){var n=e[Mn]||null;t:switch(e=t.stateNode,t.type){case"input":if(jf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Mn]||null;if(!a)throw Error(J(90));jf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&n_(i)}break t;case"textarea":a_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&as(e,!!n.multiple,t,!1)}}}var bu=!1;function o_(e,t,n){if(bu)return e(t,n);bu=!0;try{var i=e(t);return i}finally{if(bu=!1,(jr!==null||rs!==null)&&(ou(),jr&&(t=jr,e=rs,rs=jr=null,om(t),e)))for(t=0;t<e.length;t++)om(e[t])}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Mn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qf=!1;if(Qi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Qf=!1}var Ma=null,Bh=null,Yl=null;function l_(){if(Yl)return Yl;var e,t=Bh,n=t.length,i,a="value"in Ma?Ma.value:Ma.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Yl=a.slice(e,1<i?1-i:void 0)}function jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function lm(){return!1}function En(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ul:lm,this.isPropagationStopped=lm,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=En(Sr),qo=Ee({},Sr,{view:0,detail:0}),uy=En(qo),Tu,Au,Vs,Qc=Ee({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ih,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(Tu=e.screenX-Vs.screenX,Au=e.screenY-Vs.screenY):Au=Tu=0,Vs=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),cm=En(Qc),fy=Ee({},Qc,{dataTransfer:0}),dy=En(fy),hy=Ee({},qo,{relatedTarget:0}),Ru=En(hy),py=Ee({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),my=En(py),gy=Ee({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_y=En(gy),vy=Ee({},Sr,{data:0}),um=En(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function My(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yy[e])?!!t[e]:!1}function Ih(){return My}var Ey=Ee({},qo,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ih,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),by=En(Ey),Ty=Ee({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=En(Ty),Ay=Ee({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ih}),Ry=En(Ay),Cy=Ee({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=En(Cy),Dy=Ee({},Qc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=En(Dy),Ly=Ee({},Sr,{newState:0,oldState:0}),Ny=En(Ly),Oy=[9,13,27,32],Hh=Qi&&"CompositionEvent"in window,co=null;Qi&&"documentMode"in document&&(co=document.documentMode);var Py=Qi&&"TextEvent"in window&&!co,c_=Qi&&(!Hh||co&&8<co&&11>=co),dm=" ",hm=!1;function u_(e,t){switch(e){case"keyup":return Oy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function zy(e,t){switch(e){case"compositionend":return f_(t);case"keypress":return t.which!==32?null:(hm=!0,dm);case"textInput":return e=t.data,e===dm&&hm?null:e;default:return null}}function Fy(e,t){if(Zr)return e==="compositionend"||!Hh&&u_(e,t)?(e=l_(),Yl=Bh=Ma=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c_&&t.locale!=="ko"?null:t.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!By[e.type]:t==="textarea"}function d_(e,t,n,i){jr?rs?rs.push(i):rs=[i]:jr=i,t=Oc(t,"onChange"),0<t.length&&(n=new Kc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var uo=null,To=null;function Iy(e){ox(e,0)}function Jc(e){var t=io(e);if(n_(t))return e}function mm(e,t){if(e==="change")return t}var h_=!1;if(Qi){var Cu;if(Qi){var wu="oninput"in document;if(!wu){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),wu=typeof gm.oninput=="function"}Cu=wu}else Cu=!1;h_=Cu&&(!document.documentMode||9<document.documentMode)}function _m(){uo&&(uo.detachEvent("onpropertychange",p_),To=uo=null)}function p_(e){if(e.propertyName==="value"&&Jc(To)){var t=[];d_(t,To,e,Fh(e)),o_(Iy,t)}}function Hy(e,t,n){e==="focusin"?(_m(),uo=t,To=n,uo.attachEvent("onpropertychange",p_)):e==="focusout"&&_m()}function Gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jc(To)}function Vy(e,t){if(e==="click")return Jc(t)}function ky(e,t){if(e==="input"||e==="change")return Jc(t)}function Xy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bn=typeof Object.is=="function"?Object.is:Xy;function Ao(e,t){if(Bn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Wf.call(t,a)||!Bn(e[a],t[a]))return!1}return!0}function vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xm(e,t){var n=vm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=vm(n)}}function m_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?m_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function g_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gc(e.document)}return t}function Gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wy=Qi&&"documentMode"in document&&11>=document.documentMode,Kr=null,Jf=null,fo=null,$f=!1;function Sm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$f||Kr==null||Kr!==gc(i)||(i=Kr,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&Ao(fo,i)||(fo=i,i=Oc(Jf,"onSelect"),0<i.length&&(t=new Kc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Kr)))}function Wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Du={},__={};Qi&&(__=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function yr(e){if(Du[e])return Du[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in __)return Du[e]=t[n];return e}var v_=yr("animationend"),x_=yr("animationiteration"),S_=yr("animationstart"),qy=yr("transitionrun"),Yy=yr("transitionstart"),jy=yr("transitioncancel"),y_=yr("transitionend"),M_=new Map,td="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");td.push("scrollEnd");function oi(e,t){M_.set(e,t),xr(t,[e])}var _c=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gn=[],Jr=0,Vh=0;function $c(){for(var e=Jr,t=Vh=Jr=0;t<e;){var n=Gn[t];Gn[t++]=null;var i=Gn[t];Gn[t++]=null;var a=Gn[t];Gn[t++]=null;var r=Gn[t];if(Gn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&E_(n,a,r)}}function tu(e,t,n,i){Gn[Jr++]=e,Gn[Jr++]=t,Gn[Jr++]=n,Gn[Jr++]=i,Vh|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function kh(e,t,n,i){return tu(e,t,n,i),vc(e)}function Mr(e,t){return tu(e,null,null,t),vc(e)}function E_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Pn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function vc(e){if(50<yo)throw yo=0,yd=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $r={};function Zy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,t,n,i){return new Zy(e,t,n,i)}function Xh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,t){var n=e.alternate;return n===null?(n=Dn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function b_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zl(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")Xh(e)&&(s=1);else if(typeof e=="string")s=tE(e,n,_i.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Gf:return e=Dn(31,n,t,a),e.elementType=Gf,e.lanes=r,e;case Wr:return cr(n.children,a,r,t);case k0:s=8,a|=24;break;case Bf:return e=Dn(12,n,t,a|2),e.elementType=Bf,e.lanes=r,e;case If:return e=Dn(13,n,t,a),e.elementType=If,e.lanes=r,e;case Hf:return e=Dn(19,n,t,a),e.elementType=Hf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vi:s=10;break t;case X0:s=9;break t;case Dh:s=11;break t;case Uh:s=14;break t;case pa:s=16,i=null;break t}s=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=Dn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function cr(e,t,n,i){return e=Dn(7,e,i,t),e.lanes=n,e}function Uu(e,t,n){return e=Dn(6,e,null,t),e.lanes=n,e}function T_(e){var t=Dn(18,null,null,0);return t.stateNode=e,t}function Lu(e,t,n){return t=Dn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ym=new WeakMap;function Yn(e,t){if(typeof e=="object"&&e!==null){var n=ym.get(e);return n!==void 0?n:(t={value:e,source:t,stack:em(t)},ym.set(e,t),t)}return{value:e,source:t,stack:em(t)}}var ts=[],es=0,xc=null,Ro=0,Xn=[],Wn=0,za=null,di=1,hi="";function Ii(e,t){ts[es++]=Ro,ts[es++]=xc,xc=e,Ro=t}function A_(e,t,n){Xn[Wn++]=di,Xn[Wn++]=hi,Xn[Wn++]=za,za=e;var i=di;e=hi;var a=32-Pn(i)-1;i&=~(1<<a),n+=1;var r=32-Pn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,di=1<<32-Pn(t)+a|n<<a|i,hi=r+e}else di=1<<r|n<<a|i,hi=e}function Wh(e){e.return!==null&&(Ii(e,1),A_(e,1,0))}function qh(e){for(;e===xc;)xc=ts[--es],ts[es]=null,Ro=ts[--es],ts[es]=null;for(;e===za;)za=Xn[--Wn],Xn[Wn]=null,hi=Xn[--Wn],Xn[Wn]=null,di=Xn[--Wn],Xn[Wn]=null}function R_(e,t){Xn[Wn++]=di,Xn[Wn++]=hi,Xn[Wn++]=za,di=t.id,hi=t.overflow,za=e}var tn=null,ye=null,Yt=!1,Ca=null,jn=!1,ed=Error(J(519));function Fa(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(Yn(t,e)),ed}function Mm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[Mn]=i,n){case"dialog":kt("cancel",t),kt("close",t);break;case"iframe":case"object":case"embed":kt("load",t);break;case"video":case"audio":for(n=0;n<Lo.length;n++)kt(Lo[n],t);break;case"source":kt("error",t);break;case"img":case"image":case"link":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"input":kt("invalid",t),i_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":kt("invalid",t);break;case"textarea":kt("invalid",t),r_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||cx(t.textContent,n)?(i.popover!=null&&(kt("beforetoggle",t),kt("toggle",t)),i.onScroll!=null&&kt("scroll",t),i.onScrollEnd!=null&&kt("scrollend",t),i.onClick!=null&&(t.onclick=ki),t=!0):t=!1,t||Fa(e,!0)}function Em(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:jn=!1;return;case 27:case 3:jn=!0;return;default:tn=tn.return}}function Ar(e){if(e!==tn)return!1;if(!Yt)return Em(e),Yt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ad(e.type,e.memoizedProps)),n=!n),n&&ye&&Fa(e),Em(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));ye=cg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));ye=cg(e)}else t===27?(t=ye,Va(e.type)?(e=Dd,Dd=null,ye=e):ye=t):ye=tn?Kn(e.stateNode.nextSibling):null;return!0}function hr(){ye=tn=null,Yt=!1}function Nu(){var e=Ca;return e!==null&&(xn===null?xn=e:xn.push.apply(xn,e),Ca=null),e}function Co(e){Ca===null?Ca=[e]:Ca.push(e)}var nd=Ti(null),Er=null,Xi=null;function ga(e,t,n){xe(nd,t._currentValue),t._currentValue=n}function Yi(e){e._currentValue=nd.current,Ke(nd)}function id(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ad(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),id(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(J(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),id(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Us(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(J(387));if(s=s.memoizedProps,s!==null){var o=a.type;Bn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===dc.current){if(s=a.alternate,s===null)throw Error(J(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}a=a.return}e!==null&&ad(t,e,n,i),t.flags|=262144}function Sc(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){Er=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return C_(Er,e)}function fl(e,t){return Er===null&&pr(e),C_(e,t)}function C_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(J(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var Ky=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Qy=Ve.unstable_scheduleCallback,Jy=Ve.unstable_NormalPriority,Be={$$typeof:Vi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yh(){return{controller:new Ky,data:new Map,refCount:0}}function Yo(e){e.refCount--,e.refCount===0&&Qy(Jy,function(){e.controller.abort()})}var ho=null,rd=0,ms=0,ss=null;function $y(e,t){if(ho===null){var n=ho=[];rd=0,ms=vp(),ss={status:"pending",value:void 0,then:function(i){n.push(i)}}}return rd++,t.then(bm,bm),t}function bm(){if(--rd===0&&ho!==null){ss!==null&&(ss.status="fulfilled");var e=ho;ho=null,ms=0,ss=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Tm=wt.S;wt.S=function(e,t){Vv=Nn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&$y(e,t),Tm!==null&&Tm(e,t)};var ur=Ti(null);function jh(){var e=ur.current;return e!==null?e:ge.pooledCache}function Kl(e,t){t===null?xe(ur,ur.current):xe(ur,t.pool)}function w_(){var e=jh();return e===null?null:{parent:Be._currentValue,pool:e}}var Ls=Error(J(460)),Zh=Error(J(474)),eu=Error(J(542)),yc={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function D_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ki,ki),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cm(e),e;default:if(typeof t.status=="string")t.then(ki,ki);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cm(e),e}throw fr=t,Ls}}function er(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fr=n,Ls):n}}var fr=null;function Rm(){if(fr===null)throw Error(J(459));var e=fr;return fr=null,e}function Cm(e){if(e===Ls||e===eu)throw Error(J(483))}var os=null,wo=0;function dl(e){var t=wo;return wo+=1,os===null&&(os=[]),D_(os,e,t)}function ks(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hl(e,t){throw t.$$typeof===HS?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function U_(e){function t(f,m){if(e){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=qi(f,m),f.index=0,f.sibling=null,f}function r(f,m,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=67108866,m):x):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,x,y){return m===null||m.tag!==6?(m=Uu(x,f.mode,y),m.return=f,m):(m=a(m,x),m.return=f,m)}function l(f,m,x,y){var R=x.type;return R===Wr?h(f,m,x.props.children,y,x.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===pa&&er(R)===m.type)?(m=a(m,x.props),ks(m,x),m.return=f,m):(m=Zl(x.type,x.key,x.props,null,f.mode,y),ks(m,x),m.return=f,m)}function c(f,m,x,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Lu(x,f.mode,y),m.return=f,m):(m=a(m,x.children||[]),m.return=f,m)}function h(f,m,x,y,R){return m===null||m.tag!==7?(m=cr(x,f.mode,y,R),m.return=f,m):(m=a(m,x),m.return=f,m)}function p(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Uu(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case rl:return x=Zl(m.type,m.key,m.props,null,f.mode,x),ks(x,m),x.return=f,x;case eo:return m=Lu(m,f.mode,x),m.return=f,m;case pa:return m=er(m),p(f,m,x)}if(no(m)||Hs(m))return m=cr(m,f.mode,x,null),m.return=f,m;if(typeof m.then=="function")return p(f,dl(m),x);if(m.$$typeof===Vi)return p(f,fl(f,m),x);hl(f,m)}return null}function u(f,m,x,y){var R=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return R!==null?null:o(f,m,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:return x.key===R?l(f,m,x,y):null;case eo:return x.key===R?c(f,m,x,y):null;case pa:return x=er(x),u(f,m,x,y)}if(no(x)||Hs(x))return R!==null?null:h(f,m,x,y,null);if(typeof x.then=="function")return u(f,m,dl(x),y);if(x.$$typeof===Vi)return u(f,m,fl(f,x),y);hl(f,x)}return null}function d(f,m,x,y,R){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(x)||null,o(m,f,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rl:return f=f.get(y.key===null?x:y.key)||null,l(m,f,y,R);case eo:return f=f.get(y.key===null?x:y.key)||null,c(m,f,y,R);case pa:return y=er(y),d(f,m,x,y,R)}if(no(y)||Hs(y))return f=f.get(x)||null,h(m,f,y,R,null);if(typeof y.then=="function")return d(f,m,x,dl(y),R);if(y.$$typeof===Vi)return d(f,m,x,fl(m,y),R);hl(m,y)}return null}function v(f,m,x,y){for(var R=null,T=null,A=m,_=m=0,b=null;A!==null&&_<x.length;_++){A.index>_?(b=A,A=null):b=A.sibling;var F=u(f,A,x[_],y);if(F===null){A===null&&(A=b);break}e&&A&&F.alternate===null&&t(f,A),m=r(F,m,_),T===null?R=F:T.sibling=F,T=F,A=b}if(_===x.length)return n(f,A),Yt&&Ii(f,_),R;if(A===null){for(;_<x.length;_++)A=p(f,x[_],y),A!==null&&(m=r(A,m,_),T===null?R=A:T.sibling=A,T=A);return Yt&&Ii(f,_),R}for(A=i(A);_<x.length;_++)b=d(A,f,_,x[_],y),b!==null&&(e&&b.alternate!==null&&A.delete(b.key===null?_:b.key),m=r(b,m,_),T===null?R=b:T.sibling=b,T=b);return e&&A.forEach(function(w){return t(f,w)}),Yt&&Ii(f,_),R}function M(f,m,x,y){if(x==null)throw Error(J(151));for(var R=null,T=null,A=m,_=m=0,b=null,F=x.next();A!==null&&!F.done;_++,F=x.next()){A.index>_?(b=A,A=null):b=A.sibling;var w=u(f,A,F.value,y);if(w===null){A===null&&(A=b);break}e&&A&&w.alternate===null&&t(f,A),m=r(w,m,_),T===null?R=w:T.sibling=w,T=w,A=b}if(F.done)return n(f,A),Yt&&Ii(f,_),R;if(A===null){for(;!F.done;_++,F=x.next())F=p(f,F.value,y),F!==null&&(m=r(F,m,_),T===null?R=F:T.sibling=F,T=F);return Yt&&Ii(f,_),R}for(A=i(A);!F.done;_++,F=x.next())F=d(A,f,_,F.value,y),F!==null&&(e&&F.alternate!==null&&A.delete(F.key===null?_:F.key),m=r(F,m,_),T===null?R=F:T.sibling=F,T=F);return e&&A.forEach(function(z){return t(f,z)}),Yt&&Ii(f,_),R}function g(f,m,x,y){if(typeof x=="object"&&x!==null&&x.type===Wr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:t:{for(var R=x.key;m!==null;){if(m.key===R){if(R=x.type,R===Wr){if(m.tag===7){n(f,m.sibling),y=a(m,x.props.children),y.return=f,f=y;break t}}else if(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===pa&&er(R)===m.type){n(f,m.sibling),y=a(m,x.props),ks(y,x),y.return=f,f=y;break t}n(f,m);break}else t(f,m);m=m.sibling}x.type===Wr?(y=cr(x.props.children,f.mode,y,x.key),y.return=f,f=y):(y=Zl(x.type,x.key,x.props,null,f.mode,y),ks(y,x),y.return=f,f=y)}return s(f);case eo:t:{for(R=x.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),y=a(m,x.children||[]),y.return=f,f=y;break t}else{n(f,m);break}else t(f,m);m=m.sibling}y=Lu(x,f.mode,y),y.return=f,f=y}return s(f);case pa:return x=er(x),g(f,m,x,y)}if(no(x))return v(f,m,x,y);if(Hs(x)){if(R=Hs(x),typeof R!="function")throw Error(J(150));return x=R.call(x),M(f,m,x,y)}if(typeof x.then=="function")return g(f,m,dl(x),y);if(x.$$typeof===Vi)return g(f,m,fl(f,x),y);hl(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),y=a(m,x),y.return=f,f=y):(n(f,m),y=Uu(x,f.mode,y),y.return=f,f=y),s(f)):n(f,m)}return function(f,m,x,y){try{wo=0;var R=g(f,m,x,y);return os=null,R}catch(A){if(A===Ls||A===eu)throw A;var T=Dn(29,A,null,f.mode);return T.lanes=y,T.return=f,T}finally{}}}var mr=U_(!0),L_=U_(!1),ma=!1;function Kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,te&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=vc(e),E_(e,null,n),t}return tu(e,i,t,n),vc(e)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,K0(e,n)}}function Ou(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var od=!1;function mo(){if(od){var e=ss;if(e!==null)throw e}}function go(e,t,n,i){od=!1;var a=e.updateQueue;ma=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,h=c=l=null,o=r;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Wt&u)===u:(i&u)===u){u!==0&&u===ms&&(od=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=Ee({},p,u);break t;case 2:ma=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,s|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),Ia|=s,e.lanes=s,e.memoizedState=p}}function N_(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function O_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)N_(n[e],t)}var gs=Ti(null),Mc=Ti(0);function wm(e,t){e=ea,xe(Mc,e),xe(gs,t),ea=e|t.baseLanes}function ld(){xe(Mc,ea),xe(gs,gs.current)}function Qh(){ea=Mc.current,Ke(gs),Ke(Mc)}var In=Ti(null),Zn=null;function _a(e){var t=e.alternate;xe(Le,Le.current&1),xe(In,e),Zn===null&&(t===null||gs.current!==null||t.memoizedState!==null)&&(Zn=e)}function cd(e){xe(Le,Le.current),xe(In,e),Zn===null&&(Zn=e)}function P_(e){e.tag===22?(xe(Le,Le.current),xe(In,e),Zn===null&&(Zn=e)):va()}function va(){xe(Le,Le.current),xe(In,In.current)}function Cn(e){Ke(In),Zn===e&&(Zn=null),Ke(Le)}var Le=Ti(0);function Ec(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Cd(n)||wd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ji=0,zt=null,he=null,ze=null,bc=!1,ls=!1,gr=!1,Tc=0,Do=0,cs=null,eM=0;function Re(){throw Error(J(321))}function Jh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bn(e[n],t[n]))return!1;return!0}function $h(e,t,n,i,a,r){return Ji=r,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wt.H=e===null||e.memoizedState===null?dv:up,gr=!1,r=n(i,a),gr=!1,ls&&(r=F_(t,n,i,a)),z_(e),r}function z_(e){wt.H=Uo;var t=he!==null&&he.next!==null;if(Ji=0,ze=he=zt=null,bc=!1,Do=0,cs=null,t)throw Error(J(300));e===null||He||(e=e.dependencies,e!==null&&Sc(e)&&(He=!0))}function F_(e,t,n,i){zt=e;var a=0;do{if(ls&&(cs=null),Do=0,ls=!1,25<=a)throw Error(J(301));if(a+=1,ze=he=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}wt.H=hv,r=t(n,i)}while(ls);return r}function nM(){var e=wt.H,t=e.useState()[0];return t=typeof t.then=="function"?jo(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(zt.flags|=1024),t}function tp(){var e=Tc!==0;return Tc=0,e}function ep(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function np(e){if(bc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bc=!1}Ji=0,ze=he=zt=null,ls=!1,Do=Tc=0,cs=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?zt.memoizedState=ze=e:ze=ze.next=e,ze}function Ne(){if(he===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ze===null?zt.memoizedState:ze.next;if(t!==null)ze=t,he=e;else{if(e===null)throw zt.alternate===null?Error(J(467)):Error(J(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ze===null?zt.memoizedState=ze=e:ze=ze.next=e}return ze}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=Do;return Do+=1,cs===null&&(cs=[]),e=D_(cs,e,t),t=zt,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,wt.H=t===null||t.memoizedState===null?dv:up),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===Vi)return en(e)}throw Error(J(438,String(e)))}function ip(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=nu(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=GS;return t.index++,n}function $i(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Ne();return ap(t,he,e)}function ap(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Wt&p)===p:(Ji&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===ms&&(h=!0);else if((Ji&u)===u){c=c.next,u===ms&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,s=r):l=l.next=p,zt.lanes|=u,Ia|=u;p=c.action,gr&&n(r,p),r=c.hasEagerState?c.eagerState:n(r,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,s=r):l=l.next=u,zt.lanes|=p,Ia|=p;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Bn(r,e.memoizedState)&&(He=!0,h&&(n=ss,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Pu(e){var t=Ne(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Bn(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function B_(e,t,n){var i=zt,a=Ne(),r=Yt;if(r){if(n===void 0)throw Error(J(407));n=n()}else n=t();var s=!Bn((he||a).memoizedState,n);if(s&&(a.memoizedState=n,He=!0),a=a.queue,rp(G_.bind(null,i,a,e),[e]),a.getSnapshot!==t||s||ze!==null&&ze.memoizedState.tag&1){if(i.flags|=2048,_s(9,{destroy:void 0},H_.bind(null,i,a,n,t),null),ge===null)throw Error(J(349));r||Ji&127||I_(i,t,n)}return n}function I_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=nu(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function H_(e,t,n,i){t.value=n,t.getSnapshot=i,V_(t)&&k_(e)}function G_(e,t,n){return n(function(){V_(t)&&k_(e)})}function V_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bn(e,n)}catch{return!0}}function k_(e){var t=Mr(e,2);t!==null&&Sn(t,e,2)}function ud(e){var t=un();if(typeof e=="function"){var n=e;if(e=n(),gr){ya(!0);try{n()}finally{ya(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t}function X_(e,t,n,i){return e.baseState=n,ap(e,he,typeof i=="function"?i:$i)}function iM(e,t,n,i,a){if(ru(e))throw Error(J(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};wt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,W_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function W_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=wt.T,s={};wt.T=s;try{var o=n(a,i),l=wt.S;l!==null&&l(s,o),Dm(e,t,o)}catch(c){fd(e,t,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),wt.T=r}}else try{r=n(a,i),Dm(e,t,r)}catch(c){fd(e,t,c)}}function Dm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Um(e,t,i)},function(i){return fd(e,t,i)}):Um(e,t,n)}function Um(e,t,n){t.status="fulfilled",t.value=n,q_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,W_(e,n)))}function fd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,q_(t),t=t.next;while(t!==i)}e.action=null}function q_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Y_(e,t){return t}function Lm(e,t){if(Yt){var n=ge.formState;if(n!==null){t:{var i=zt;if(Yt){if(ye){e:{for(var a=ye,r=jn;a.nodeType!==8;){if(!r){a=null;break e}if(a=Kn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){ye=Kn(a.nextSibling),i=a.data==="F!";break t}}Fa(i)}i=!1}i&&(t=n[0])}}return n=un(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y_,lastRenderedState:t},n.queue=i,n=cv.bind(null,zt,i),i.dispatch=n,i=ud(!1),r=cp.bind(null,zt,!1,i.queue),i=un(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=iM.bind(null,zt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Nm(e){var t=Ne();return j_(t,he,e)}function j_(e,t,n){if(t=ap(e,t,Y_)[0],e=Ql($i)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=jo(t)}catch(s){throw s===Ls?eu:s}else i=t;t=Ne();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,_s(9,{destroy:void 0},aM.bind(null,a,n),null)),[i,r,e]}function aM(e,t){e.action=t}function Om(e){var t=Ne(),n=he;if(n!==null)return j_(t,n,e);Ne(),t=t.memoizedState,n=Ne();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function _s(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=nu(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Z_(){return Ne().memoizedState}function Jl(e,t,n,i){var a=un();zt.flags|=e,a.memoizedState=_s(1|t,{destroy:void 0},n,i===void 0?null:i)}function au(e,t,n,i){var a=Ne();i=i===void 0?null:i;var r=a.memoizedState.inst;he!==null&&i!==null&&Jh(i,he.memoizedState.deps)?a.memoizedState=_s(t,r,n,i):(zt.flags|=e,a.memoizedState=_s(1|t,r,n,i))}function Pm(e,t){Jl(8390656,8,e,t)}function rp(e,t){au(2048,8,e,t)}function rM(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=nu(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function K_(e){var t=Ne().memoizedState;return rM({ref:t,nextImpl:e}),function(){if(te&2)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function Q_(e,t){return au(4,2,e,t)}function J_(e,t){return au(4,4,e,t)}function $_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tv(e,t,n){n=n!=null?n.concat([e]):null,au(4,4,$_.bind(null,t,e),n)}function sp(){}function ev(e,t){var n=Ne();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Jh(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function nv(e,t){var n=Ne();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Jh(t,i[1]))return i[0];if(i=e(),gr){ya(!0);try{e()}finally{ya(!1)}}return n.memoizedState=[i,t],i}function op(e,t,n){return n===void 0||Ji&1073741824&&!(Wt&261930)?e.memoizedState=t:(e.memoizedState=n,e=Xv(),zt.lanes|=e,Ia|=e,n)}function iv(e,t,n,i){return Bn(n,t)?n:gs.current!==null?(e=op(e,n,i),Bn(e,t)||(He=!0),e):!(Ji&42)||Ji&1073741824&&!(Wt&261930)?(He=!0,e.memoizedState=n):(e=Xv(),zt.lanes|=e,Ia|=e,t)}function av(e,t,n,i,a){var r=ee.p;ee.p=r!==0&&8>r?r:8;var s=wt.T,o={};wt.T=o,cp(e,!1,t,n);try{var l=a(),c=wt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=tM(l,i);_o(e,t,h,zn(e))}else _o(e,t,i,zn(e))}catch(p){_o(e,t,{then:function(){},status:"rejected",reason:p},zn())}finally{ee.p=r,s!==null&&o.types!==null&&(s.types=o.types),wt.T=s}}function sM(){}function dd(e,t,n,i){if(e.tag!==5)throw Error(J(476));var a=rv(e).queue;av(e,a,t,lr,n===null?sM:function(){return sv(e),n(i)})}function rv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:lr,baseState:lr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:lr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sv(e){var t=rv(e);t.next===null&&(t=e.alternate.memoizedState),_o(e,t.next.queue,{},zn())}function lp(){return en(Oo)}function ov(){return Ne().memoizedState}function lv(){return Ne().memoizedState}function oM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zn();e=wa(n);var i=Da(t,e,n);i!==null&&(Sn(i,t,n),po(i,t,n)),t={cache:Yh()},e.payload=t;return}t=t.return}}function lM(e,t,n){var i=zn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ru(e)?uv(t,n):(n=kh(e,t,n,i),n!==null&&(Sn(n,e,i),fv(n,t,i)))}function cv(e,t,n){var i=zn();_o(e,t,n,i)}function _o(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ru(e))uv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Bn(o,s))return tu(e,t,a,0),ge===null&&$c(),!1}catch{}finally{}if(n=kh(e,t,a,i),n!==null)return Sn(n,e,i),fv(n,t,i),!0}return!1}function cp(e,t,n,i){if(i={lane:2,revertLane:vp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ru(e)){if(t)throw Error(J(479))}else t=kh(e,n,i,2),t!==null&&Sn(t,e,2)}function ru(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function uv(e,t){ls=bc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,K0(e,n)}}var Uo={readContext:en,use:iu,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};Uo.useEffectEvent=Re;var dv={readContext:en,use:iu,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:Pm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Jl(4194308,4,$_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){Jl(4,2,e,t)},useMemo:function(e,t){var n=un();t=t===void 0?null:t;var i=e();if(gr){ya(!0);try{e()}finally{ya(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=un();if(n!==void 0){var a=n(t);if(gr){ya(!0);try{n(t)}finally{ya(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=lM.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:function(e){e=ud(e);var t=e.queue,n=cv.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:sp,useDeferredValue:function(e,t){var n=un();return op(n,e,t)},useTransition:function(){var e=ud(!1);return e=av.bind(null,zt,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,a=un();if(Yt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),ge===null)throw Error(J(349));Wt&127||I_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Pm(G_.bind(null,i,r,e),[e]),i.flags|=2048,_s(9,{destroy:void 0},H_.bind(null,i,r,n,t),null),n},useId:function(){var e=un(),t=ge.identifierPrefix;if(Yt){var n=hi,i=di;n=(i&~(1<<32-Pn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Tc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=eM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lp,useFormState:Lm,useActionState:Lm,useOptimistic:function(e){var t=un();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=cp.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:ip,useCacheRefresh:function(){return un().memoizedState=oM.bind(null,zt)},useEffectEvent:function(e){var t=un(),n={impl:e};return t.memoizedState=n,function(){if(te&2)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},up={readContext:en,use:iu,useCallback:ev,useContext:en,useEffect:rp,useImperativeHandle:tv,useInsertionEffect:Q_,useLayoutEffect:J_,useMemo:nv,useReducer:Ql,useRef:Z_,useState:function(){return Ql($i)},useDebugValue:sp,useDeferredValue:function(e,t){var n=Ne();return iv(n,he.memoizedState,e,t)},useTransition:function(){var e=Ql($i)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:jo(e),t]},useSyncExternalStore:B_,useId:ov,useHostTransitionStatus:lp,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,t){var n=Ne();return X_(n,he,e,t)},useMemoCache:ip,useCacheRefresh:lv};up.useEffectEvent=K_;var hv={readContext:en,use:iu,useCallback:ev,useContext:en,useEffect:rp,useImperativeHandle:tv,useInsertionEffect:Q_,useLayoutEffect:J_,useMemo:nv,useReducer:Pu,useRef:Z_,useState:function(){return Pu($i)},useDebugValue:sp,useDeferredValue:function(e,t){var n=Ne();return he===null?op(n,e,t):iv(n,he.memoizedState,e,t)},useTransition:function(){var e=Pu($i)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:jo(e),t]},useSyncExternalStore:B_,useId:ov,useHostTransitionStatus:lp,useFormState:Om,useActionState:Om,useOptimistic:function(e,t){var n=Ne();return he!==null?X_(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ip,useCacheRefresh:lv};hv.useEffectEvent=K_;function zu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=zn(),a=wa(i);a.payload=t,n!=null&&(a.callback=n),t=Da(e,a,i),t!==null&&(Sn(t,e,i),po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=zn(),a=wa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Da(e,a,i),t!==null&&(Sn(t,e,i),po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zn(),i=wa(n);i.tag=2,t!=null&&(i.callback=t),t=Da(e,i,n),t!==null&&(Sn(t,e,n),po(t,e,n))}};function zm(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!Ao(n,i)||!Ao(a,r):!0}function Fm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&hd.enqueueReplaceState(t,t.state,null)}function _r(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ee({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function pv(e){_c(e)}function mv(e){console.error(e)}function gv(e){_c(e)}function Ac(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Bm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function pd(e,t,n){return n=wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ac(e,t)},n}function _v(e){return e=wa(e),e.tag=3,e}function vv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Bm(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Bm(t,n,i),typeof a!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function cM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Us(t,n,a,!0),n=In.current,n!==null){switch(n.tag){case 31:case 13:return Zn===null?Uc():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===yc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Yu(e,i,a)),!1;case 22:return n.flags|=65536,i===yc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Yu(e,i,a)),!1}throw Error(J(435,n.tag))}return Yu(e,i,a),Uc(),!1}if(Yt)return t=In.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==ed&&(e=Error(J(422),{cause:i}),Co(Yn(e,n)))):(i!==ed&&(t=Error(J(423),{cause:i}),Co(Yn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Yn(i,n),a=pd(e.stateNode,i,a),Ou(e,a),Ce!==4&&(Ce=2)),!1;var r=Error(J(520),{cause:i});if(r=Yn(r,n),So===null?So=[r]:So.push(r),Ce!==4&&(Ce=2),t===null)return!0;i=Yn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=pd(n.stateNode,i,e),Ou(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ua===null||!Ua.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=_v(a),vv(a,e,n,i),Ou(n,a),!1}n=n.return}while(n!==null);return!1}var fp=Error(J(461)),He=!1;function Je(e,t,n,i){t.child=e===null?L_(t,null,n,i):mr(t,e.child,n,i)}function Im(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return pr(t),i=$h(e,t,n,s,r,a),o=tp(),e!==null&&!He?(ep(e,t,a),ta(e,t,a)):(Yt&&o&&Wh(t),t.flags|=1,Je(e,t,i,a),t.child)}function Hm(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!Xh(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,xv(e,t,r,i,a)):(e=Zl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!dp(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(s,i)&&e.ref===t.ref)return ta(e,t,a)}return t.flags|=1,e=qi(r,i),e.ref=t.ref,e.return=t,t.child=e}function xv(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(Ao(r,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=r,dp(e,a))e.flags&131072&&(He=!0);else return t.lanes=e.lanes,ta(e,t,a)}return md(e,t,n,i,a)}function Sv(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return Gm(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kl(t,r!==null?r.cachePool:null),r!==null?wm(t,r):ld(),P_(t);else return i=t.lanes=536870912,Gm(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Kl(t,r.cachePool),wm(t,r),va(),t.memoizedState=null):(e!==null&&Kl(t,null),ld(),va());return Je(e,t,a,n),t.child}function ao(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gm(e,t,n,i,a){var r=jh();return r=r===null?null:{parent:Be._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Kl(t,null),ld(),P_(t),e!==null&&Us(e,t,i,!0),t.childLanes=a,null}function $l(e,t){return t=Rc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Vm(e,t,n){return mr(t,e.child,null,n),e=$l(t,t.pendingProps),e.flags|=2,Cn(t),t.memoizedState=null,e}function uM(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Yt){if(i.mode==="hidden")return e=$l(t,i),t.lanes=536870912,ao(null,e);if(cd(t),(e=ye)?(e=dx(e,jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:di,overflow:hi}:null,retryLane:536870912,hydrationErrors:null},n=T_(e),n.return=t,t.child=n,tn=t,ye=null)):e=null,e===null)throw Fa(t);return t.lanes=536870912,null}return $l(t,i)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(cd(t),a)if(t.flags&256)t.flags&=-257,t=Vm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(He||Us(e,t,n,!1),a=(n&e.childLanes)!==0,He||a){if(i=ge,i!==null&&(s=Q0(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Mr(e,s),Sn(i,e,s),fp;Uc(),t=Vm(e,t,n)}else e=r.treeContext,ye=Kn(s.nextSibling),tn=t,Yt=!0,Ca=null,jn=!1,e!==null&&R_(t,e),t=$l(t,i),t.flags|=4096;return t}return e=qi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function tc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function md(e,t,n,i,a){return pr(t),n=$h(e,t,n,i,void 0,a),i=tp(),e!==null&&!He?(ep(e,t,a),ta(e,t,a)):(Yt&&i&&Wh(t),t.flags|=1,Je(e,t,n,a),t.child)}function km(e,t,n,i,a,r){return pr(t),t.updateQueue=null,n=F_(t,i,n,a),z_(e),i=tp(),e!==null&&!He?(ep(e,t,r),ta(e,t,r)):(Yt&&i&&Wh(t),t.flags|=1,Je(e,t,n,r),t.child)}function Xm(e,t,n,i,a){if(pr(t),t.stateNode===null){var r=$r,s=n.contextType;typeof s=="object"&&s!==null&&(r=en(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=hd,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Kh(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?en(s):$r,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(zu(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&hd.enqueueReplaceState(r,r.state,null),go(t,i,r,a),mo(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=_r(n,o);r.props=l;var c=r.context,h=n.contextType;s=$r,typeof h=="object"&&h!==null&&(s=en(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&Fm(t,r,i,s),ma=!1;var u=t.memoizedState;r.state=u,go(t,i,r,a),mo(),c=t.memoizedState,o||u!==c||ma?(typeof p=="function"&&(zu(t,n,p,i),c=t.memoizedState),(l=ma||zm(t,n,l,i,u,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,sd(e,t),s=t.memoizedProps,h=_r(n,s),r.props=h,p=t.pendingProps,u=r.context,c=n.contextType,l=$r,typeof c=="object"&&c!==null&&(l=en(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||u!==l)&&Fm(t,r,i,l),ma=!1,u=t.memoizedState,r.state=u,go(t,i,r,a),mo();var d=t.memoizedState;s!==p||u!==d||ma||e!==null&&e.dependencies!==null&&Sc(e.dependencies)?(typeof o=="function"&&(zu(t,n,o,i),d=t.memoizedState),(h=ma||zm(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Sc(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,d,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),r.props=i,r.state=d,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,tc(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=mr(t,e.child,null,a),t.child=mr(t,null,n,a)):Je(e,t,n,a),t.memoizedState=r.state,e=t.child):e=ta(e,t,a),e}function Wm(e,t,n,i){return hr(),t.flags|=256,Je(e,t,n,i),t.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bu(e){return{baseLanes:e,cachePool:w_()}}function Iu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ln),e}function yv(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Yt){if(a?_a(t):va(),(e=ye)?(e=dx(e,jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:di,overflow:hi}:null,retryLane:536870912,hydrationErrors:null},n=T_(e),n.return=t,t.child=n,tn=t,ye=null)):e=null,e===null)throw Fa(t);return wd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(va(),a=t.mode,o=Rc({mode:"hidden",children:o},a),i=cr(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Bu(n),i.childLanes=Iu(e,s,n),t.memoizedState=Fu,ao(null,i)):(_a(t),gd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(_a(t),t.flags&=-257,t=Hu(e,t,n)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,t=null):(va(),o=i.fallback,a=t.mode,i=Rc({mode:"visible",children:i.children},a),o=cr(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,mr(t,e.child,null,n),i=t.child,i.memoizedState=Bu(n),i.childLanes=Iu(e,s,n),t.memoizedState=Fu,t=ao(null,i));else if(_a(t),wd(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(J(419)),i.stack="",i.digest=s,Co({value:i,source:null,stack:null}),t=Hu(e,t,n)}else if(He||Us(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(s=ge,s!==null&&(i=Q0(s,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Mr(e,i),Sn(s,e,i),fp;Cd(o)||Uc(),t=Hu(e,t,n)}else Cd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ye=Kn(o.nextSibling),tn=t,Yt=!0,Ca=null,jn=!1,e!==null&&R_(t,e),t=gd(t,i.children),t.flags|=4096);return t}return a?(va(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=qi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=qi(c,o):(o=cr(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,ao(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Bu(n):(a=o.cachePool,a!==null?(l=Be._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=w_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Iu(e,s,n),t.memoizedState=Fu,ao(e.child,i)):(_a(t),n=e.child,e=n.sibling,n=qi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function gd(e,t){return t=Rc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Rc(e,t){return e=Dn(22,e,null,t),e.lanes=0,e}function Hu(e,t,n){return mr(t,e.child,null,n),e=gd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),id(e.return,t,n)}function Gu(e,t,n,i,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function Mv(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=Le.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,xe(Le,s),Je(e,t,i,n),i=Yt?Ro:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qm(e,n,t);else if(e.tag===19)qm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ec(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Gu(t,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ec(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Gu(t,!0,n,null,r,i);break;case"together":Gu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ta(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ia|=t.lanes,!(n&t.childLanes))if(e!==null){if(Us(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=qi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Sc(e)))}function fM(e,t,n){switch(t.tag){case 3:hc(t,t.stateNode.containerInfo),ga(t,Be,e.memoizedState.cache),hr();break;case 27:case 5:Xf(t);break;case 4:hc(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(_a(t),t.flags|=128,null):n&t.child.childLanes?yv(e,t,n):(_a(t),e=ta(e,t,n),e!==null?e.sibling:null);_a(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Us(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Mv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xe(Le,Le.current),i)break;return null;case 22:return t.lanes=0,Sv(e,t,n,t.pendingProps);case 24:ga(t,Be,e.memoizedState.cache)}return ta(e,t,n)}function Ev(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!dp(e,n)&&!(t.flags&128))return He=!1,fM(e,t,n);He=!!(e.flags&131072)}else He=!1,Yt&&t.flags&1048576&&A_(t,Ro,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=er(t.elementType),t.type=e,typeof e=="function")Xh(e)?(i=_r(e,i),t.tag=1,t=Xm(null,t,e,i,n)):(t.tag=0,t=md(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Dh){t.tag=11,t=Im(null,t,e,i,n);break t}else if(a===Uh){t.tag=14,t=Hm(null,t,e,i,n);break t}}throw t=Vf(e)||e,Error(J(306,t,""))}}return t;case 0:return md(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=_r(i,t.pendingProps),Xm(e,t,i,a,n);case 3:t:{if(hc(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,sd(e,t),go(t,i,null,n);var s=t.memoizedState;if(i=s.cache,ga(t,Be,i),i!==r.cache&&ad(t,[Be],n,!0),mo(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Wm(e,t,i,n);break t}else if(i!==a){a=Yn(Error(J(424)),t),Co(a),t=Wm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=Kn(e.firstChild),tn=t,Yt=!0,Ca=null,jn=!0,n=L_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hr(),i===a){t=ta(e,t,n);break t}Je(e,t,i,n)}t=t.child}return t;case 26:return tc(e,t),e===null?(n=dg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Yt||(n=t.type,e=t.pendingProps,i=Pc(Ra.current).createElement(n),i[$e]=t,i[Mn]=e,an(i,n,e),Ze(i),t.stateNode=i):t.memoizedState=dg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Xf(t),e===null&&Yt&&(i=t.stateNode=hx(t.type,t.pendingProps,Ra.current),tn=t,jn=!0,a=ye,Va(t.type)?(Dd=a,ye=Kn(i.firstChild)):ye=a),Je(e,t,t.pendingProps.children,n),tc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Yt&&((a=i=ye)&&(i=GM(i,t.type,t.pendingProps,jn),i!==null?(t.stateNode=i,tn=t,ye=Kn(i.firstChild),jn=!1,a=!0):a=!1),a||Fa(t)),Xf(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,Ad(a,r)?i=null:s!==null&&Ad(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=$h(e,t,nM,null,null,n),Oo._currentValue=a),tc(e,t),Je(e,t,i,n),t.child;case 6:return e===null&&Yt&&((e=n=ye)&&(n=VM(n,t.pendingProps,jn),n!==null?(t.stateNode=n,tn=t,ye=null,e=!0):e=!1),e||Fa(t)),null;case 13:return yv(e,t,n);case 4:return hc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=mr(t,null,i,n):Je(e,t,i,n),t.child;case 11:return Im(e,t,t.type,t.pendingProps,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ga(t,t.type,i.value),Je(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,pr(t),a=en(a),i=i(a),t.flags|=1,Je(e,t,i,n),t.child;case 14:return Hm(e,t,t.type,t.pendingProps,n);case 15:return xv(e,t,t.type,t.pendingProps,n);case 19:return Mv(e,t,n);case 31:return uM(e,t,n);case 22:return Sv(e,t,n,t.pendingProps);case 24:return pr(t),i=en(Be),e===null?(a=jh(),a===null&&(a=ge,r=Yh(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},Kh(t),ga(t,Be,a)):(e.lanes&n&&(sd(e,t),go(t,null,null,n),mo()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ga(t,Be,i)):(i=r.cache,ga(t,Be,i),i!==a.cache&&ad(t,[Be],n,!0))),Je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function Di(e){e.flags|=4}function Vu(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Yv())e.flags|=8192;else throw fr=yc,Zh}else e.flags&=-16777217}function Ym(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!gx(t))if(Yv())e.flags|=8192;else throw fr=yc,Zh}function pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?j0():536870912,e.lanes|=t,vs|=t)}function Xs(e,t){if(!Yt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function dM(e,t,n){var i=t.pendingProps;switch(qh(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yi(Be),ds(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?Di(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nu())),Se(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(Di(t),r!==null?(Se(t),Ym(t,r)):(Se(t),Vu(t,a,null,i,n))):r?r!==e.memoizedState?(Di(t),Se(t),Ym(t,r)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Di(t),Se(t),Vu(t,a,e,i,n)),null;case 27:if(pc(t),n=Ra.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Di(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Se(t),null}e=_i.current,Ar(t)?Mm(t):(e=hx(a,i,n),t.stateNode=e,Di(t))}return Se(t),null;case 5:if(pc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Di(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Se(t),null}if(r=_i.current,Ar(t))Mm(t);else{var s=Pc(Ra.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[$e]=t,r[Mn]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;t:switch(an(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Di(t)}}return Se(t),Vu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Di(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=Ra.current,Ar(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=tn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||cx(e.nodeValue,n)),e||Fa(t,!0)}else e=Pc(e).createTextNode(i),e[$e]=t,t.stateNode=e}return Se(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ar(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[$e]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else n=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Cn(t),t):(Cn(t),null);if(t.flags&128)throw Error(J(558))}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ar(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[$e]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else a=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Cn(t),t):(Cn(t),null)}return Cn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pl(t,t.updateQueue),Se(t),null);case 4:return ds(),e===null&&xp(t.stateNode.containerInfo),Se(t),null;case 10:return Yi(t.type),Se(t),null;case 19:if(Ke(Le),i=t.memoizedState,i===null)return Se(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Xs(i,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Ec(e),r!==null){for(t.flags|=128,Xs(i,!1),e=r.updateQueue,t.updateQueue=e,pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)b_(n,e),n=n.sibling;return xe(Le,Le.current&1|2),Yt&&Ii(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Nn()>wc&&(t.flags|=128,a=!0,Xs(i,!1),t.lanes=4194304)}else{if(!a)if(e=Ec(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,pl(t,e),Xs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Yt)return Se(t),null}else 2*Nn()-i.renderingStartTime>wc&&n!==536870912&&(t.flags|=128,a=!0,Xs(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Nn(),e.sibling=null,n=Le.current,xe(Le,a?n&1|2:n&1),Yt&&Ii(t,i.treeForkCount),e):(Se(t),null);case 22:case 23:return Cn(t),Qh(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ke(ur),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yi(Be),Se(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function hM(e,t){switch(qh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(Be),ds(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pc(t),null;case 31:if(t.memoizedState!==null){if(Cn(t),t.alternate===null)throw Error(J(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Cn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(Le),null;case 4:return ds(),null;case 10:return Yi(t.type),null;case 22:case 23:return Cn(t),Qh(),e!==null&&Ke(ur),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yi(Be),null;case 25:return null;default:return null}}function bv(e,t){switch(qh(t),t.tag){case 3:Yi(Be),ds();break;case 26:case 27:case 5:pc(t);break;case 4:ds();break;case 31:t.memoizedState!==null&&Cn(t);break;case 13:Cn(t);break;case 19:Ke(Le);break;case 10:Yi(t.type);break;case 22:case 23:Cn(t),Qh(),e!==null&&Ke(ur);break;case 24:Yi(Be)}}function Zo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){ce(t,t.return,o)}}function Ba(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){ce(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){ce(t,t.return,h)}}function Tv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{O_(t,n)}catch(i){ce(e,e.return,i)}}}function Av(e,t,n){n.props=_r(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function vo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ce(e,t,a)}}function pi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ce(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ce(e,t,a)}else n.current=null}function Rv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ce(e,e.return,a)}}function ku(e,t,n){try{var i=e.stateNode;PM(i,e.type,n,t),i[Mn]=t}catch(a){ce(e,e.return,a)}}function Cv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Xu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ki));else if(i!==4&&(i===27&&Va(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(_d(e,t,n),e=e.sibling;e!==null;)_d(e,t,n),e=e.sibling}function Cc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Va(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}function wv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);an(t,i,n),t[$e]=e,t[Mn]=n}catch(r){ce(e,e.return,r)}}var Hi=!1,Fe=!1,Wu=!1,jm=typeof WeakSet=="function"?WeakSet:Set,je=null;function pM(e,t){if(e=e.containerInfo,bd=Ic,e=g_(e),Gh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,h=0,p=e,u=null;e:for(;;){for(var d;p!==n||a!==0&&p.nodeType!==3||(o=s+a),p!==r||i!==0&&p.nodeType!==3||(l=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===a&&(o=s),u===r&&++h===i&&(l=s),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:e,selectionRange:n},Ic=!1,je=t;je!==null;)if(t=je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,je=e;else for(;je!==null;){switch(t=je,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var v=_r(n.type,a);e=i.getSnapshotBeforeUpdate(v,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){ce(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Rd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,je=e;break}je=t.return}}function Dv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n),i&4&&Zo(5,n);break;case 1:if(Li(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){ce(n,n.return,s)}else{var a=_r(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ce(n,n.return,s)}}i&64&&Tv(n),i&512&&vo(n,n.return);break;case 3:if(Li(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{O_(e,t)}catch(s){ce(n,n.return,s)}}break;case 27:t===null&&i&4&&wv(n);case 26:case 5:Li(e,n),t===null&&i&4&&Rv(n),i&512&&vo(n,n.return);break;case 12:Li(e,n);break;case 31:Li(e,n),i&4&&Nv(e,n);break;case 13:Li(e,n),i&4&&Ov(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=EM.bind(null,n),kM(e,n))));break;case 22:if(i=n.memoizedState!==null||Hi,!i){t=t!==null&&t.memoizedState!==null||Fe,a=Hi;var r=Fe;Hi=i,(Fe=t)&&!r?Bi(e,n,(n.subtreeFlags&8772)!==0):Li(e,n),Hi=a,Fe=r}break;case 30:break;default:Li(e,n)}}function Uv(e){var t=e.alternate;t!==null&&(e.alternate=null,Uv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ph(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,vn=!1;function Ui(e,t,n){for(n=n.child;n!==null;)Lv(e,t,n),n=n.sibling}function Lv(e,t,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 26:Fe||pi(n,t),Ui(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||pi(n,t);var i=be,a=vn;Va(n.type)&&(be=n.stateNode,vn=!1),Ui(e,t,n),Mo(n.stateNode),be=i,vn=a;break;case 5:Fe||pi(n,t);case 6:if(i=be,a=vn,be=null,Ui(e,t,n),be=i,vn=a,be!==null)if(vn)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(n.stateNode)}catch(r){ce(n,t,r)}else try{be.removeChild(n.stateNode)}catch(r){ce(n,t,r)}break;case 18:be!==null&&(vn?(e=be,og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ms(e)):og(be,n.stateNode));break;case 4:i=be,a=vn,be=n.stateNode.containerInfo,vn=!0,Ui(e,t,n),be=i,vn=a;break;case 0:case 11:case 14:case 15:Ba(2,n,t),Fe||Ba(4,n,t),Ui(e,t,n);break;case 1:Fe||(pi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Av(n,t,i)),Ui(e,t,n);break;case 21:Ui(e,t,n);break;case 22:Fe=(i=Fe)||n.memoizedState!==null,Ui(e,t,n),Fe=i;break;default:Ui(e,t,n)}}function Nv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ms(e)}catch(n){ce(t,t.return,n)}}}function Ov(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ms(e)}catch(n){ce(t,t.return,n)}}function mM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jm),t;default:throw Error(J(435,e.tag))}}function ml(e,t){var n=mM(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=bM.bind(null,e,i);i.then(a,a)}})}function mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Va(o.type)){be=o.stateNode,vn=!1;break t}break;case 5:be=o.stateNode,vn=!1;break t;case 3:case 4:be=o.stateNode.containerInfo,vn=!0;break t}o=o.return}if(be===null)throw Error(J(160));Lv(r,s,a),be=null,vn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pv(t,e),t=t.sibling}var ai=null;function Pv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(t,e),gn(e),i&4&&(Ba(3,e,e.return),Zo(3,e),Ba(5,e,e.return));break;case 1:mn(t,e),gn(e),i&512&&(Fe||n===null||pi(n,n.return)),i&64&&Hi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ai;if(mn(t,e),gn(e),i&512&&(Fe||n===null||pi(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Wo]||r[$e]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),an(r,i,n),r[$e]=e,Ze(r),i=r;break t;case"link":var s=pg("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),an(r,i,n),a.head.appendChild(r);break;case"meta":if(s=pg("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),an(r,i,n),a.head.appendChild(r);break;default:throw Error(J(468,i))}r[$e]=e,Ze(r),i=r}e.stateNode=i}else mg(a,e.type,e.stateNode);else e.stateNode=hg(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?mg(a,e.type,e.stateNode):hg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ku(e,e.memoizedProps,n.memoizedProps)}break;case 27:mn(t,e),gn(e),i&512&&(Fe||n===null||pi(n,n.return)),n!==null&&i&4&&ku(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mn(t,e),gn(e),i&512&&(Fe||n===null||pi(n,n.return)),e.flags&32){a=e.stateNode;try{ps(a,"")}catch(v){ce(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,ku(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Wu=!0);break;case 6:if(mn(t,e),gn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){ce(e,e.return,v)}}break;case 3:if(ic=null,a=ai,ai=zc(t.containerInfo),mn(t,e),ai=a,gn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(t.containerInfo)}catch(v){ce(e,e.return,v)}Wu&&(Wu=!1,zv(e));break;case 4:i=ai,ai=zc(e.stateNode.containerInfo),mn(t,e),gn(e),ai=i;break;case 12:mn(t,e),gn(e);break;case 31:mn(t,e),gn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ml(e,i)));break;case 13:mn(t,e),gn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(su=Nn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ml(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Hi,h=Fe;if(Hi=c||a,Fe=h||l,mn(t,e),Fe=h,Hi=c,gn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Hi||Fe||nr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){ce(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){ce(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;a?lg(d,!0):lg(l.stateNode,!1)}catch(v){ce(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ml(e,n))));break;case 19:mn(t,e),gn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ml(e,i)));break;case 30:break;case 21:break;default:mn(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Cv(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var a=n.stateNode,r=Xu(e);Cc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(ps(s,""),n.flags&=-33);var o=Xu(e);Cc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Xu(e);_d(e,c,l);break;default:throw Error(J(161))}}catch(h){ce(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Li(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dv(e,t.alternate,t),t=t.sibling}function nr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ba(4,t,t.return),nr(t);break;case 1:pi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Av(t,t.return,n),nr(t);break;case 27:Mo(t.stateNode);case 26:case 5:pi(t,t.return),nr(t);break;case 22:t.memoizedState===null&&nr(t);break;case 30:nr(t);break;default:nr(t)}e=e.sibling}}function Bi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Bi(a,r,n),Zo(4,r);break;case 1:if(Bi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ce(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)N_(l[a],o)}catch(c){ce(i,i.return,c)}}n&&s&64&&Tv(r),vo(r,r.return);break;case 27:wv(r);case 26:case 5:Bi(a,r,n),n&&i===null&&s&4&&Rv(r),vo(r,r.return);break;case 12:Bi(a,r,n);break;case 31:Bi(a,r,n),n&&s&4&&Nv(a,r);break;case 13:Bi(a,r,n),n&&s&4&&Ov(a,r);break;case 22:r.memoizedState===null&&Bi(a,r,n),vo(r,r.return);break;case 30:break;default:Bi(a,r,n)}t=t.sibling}}function hp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Yo(n))}function pp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yo(e))}function ti(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fv(e,t,n,i),t=t.sibling}function Fv(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ti(e,t,n,i),a&2048&&Zo(9,t);break;case 1:ti(e,t,n,i);break;case 3:ti(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yo(e)));break;case 12:if(a&2048){ti(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else ti(e,t,n,i);break;case 31:ti(e,t,n,i);break;case 13:ti(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ti(e,t,n,i):xo(e,t):r._visibility&2?ti(e,t,n,i):(r._visibility|=2,kr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&hp(s,t);break;case 24:ti(e,t,n,i),a&2048&&pp(t.alternate,t);break;default:ti(e,t,n,i)}}function kr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:kr(r,s,o,l,a),Zo(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?kr(r,s,o,l,a):xo(r,s):(h._visibility|=2,kr(r,s,o,l,a)),a&&c&2048&&hp(s.alternate,s);break;case 24:kr(r,s,o,l,a),a&&c&2048&&pp(s.alternate,s);break;default:kr(r,s,o,l,a)}t=t.sibling}}function xo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:xo(n,i),a&2048&&hp(i.alternate,i);break;case 24:xo(n,i),a&2048&&pp(i.alternate,i);break;default:xo(n,i)}t=t.sibling}}var ro=8192;function Rr(e,t,n){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)Bv(e,t,n),e=e.sibling}function Bv(e,t,n){switch(e.tag){case 26:Rr(e,t,n),e.flags&ro&&e.memoizedState!==null&&eE(n,ai,e.memoizedState,e.memoizedProps);break;case 5:Rr(e,t,n);break;case 3:case 4:var i=ai;ai=zc(e.stateNode.containerInfo),Rr(e,t,n),ai=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ro,ro=16777216,Rr(e,t,n),ro=i):Rr(e,t,n));break;default:Rr(e,t,n)}}function Iv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ws(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,Gv(i,e)}Iv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hv(e),e=e.sibling}function Hv(e){switch(e.tag){case 0:case 11:case 15:Ws(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Ws(e);break;case 12:Ws(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ec(e)):Ws(e);break;default:Ws(e)}}function ec(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,Gv(i,e)}Iv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ba(8,t,t.return),ec(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ec(t));break;default:ec(t)}e=e.sibling}}function Gv(e,t){for(;je!==null;){var n=je;switch(n.tag){case 0:case 11:case 15:Ba(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,je=i;else t:for(n=e;je!==null;){i=je;var a=i.sibling,r=i.return;if(Uv(i),i===n){je=null;break t}if(a!==null){a.return=r,je=a;break t}je=r}}}var gM={getCacheForType:function(e){var t=en(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return en(Be).controller.signal}},_M=typeof WeakMap=="function"?WeakMap:Map,te=0,ge=null,Xt=null,Wt=0,le=0,Rn=null,Ea=!1,Ns=!1,mp=!1,ea=0,Ce=0,Ia=0,dr=0,gp=0,Ln=0,vs=0,So=null,xn=null,vd=!1,su=0,Vv=0,wc=1/0,Dc=null,Ua=null,Ge=0,La=null,xs=null,ji=0,xd=0,Sd=null,kv=null,yo=0,yd=null;function zn(){return te&2&&Wt!==0?Wt&-Wt:wt.T!==null?vp():J0()}function Xv(){if(Ln===0)if(!(Wt&536870912)||Yt){var e=ol;ol<<=1,!(ol&3932160)&&(ol=262144),Ln=e}else Ln=536870912;return e=In.current,e!==null&&(e.flags|=32),Ln}function Sn(e,t,n){(e===ge&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Ss(e,0),ba(e,Wt,Ln,!1)),Xo(e,n),(!(te&2)||e!==ge)&&(e===ge&&(!(te&2)&&(dr|=n),Ce===4&&ba(e,Wt,Ln,!1)),Ai(e))}function Wv(e,t,n){if(te&6)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ko(e,t),a=i?SM(e,t):qu(e,t,!0),r=i;do{if(a===0){Ns&&!i&&ba(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!vM(n)){a=qu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=So;var l=o.current.memoizedState.isDehydrated;if(l&&(Ss(o,s).flags|=256),s=qu(o,s,!1),s!==2){if(mp&&!l){o.errorRecoveryDisabledLanes|=r,dr|=r,a=4;break t}r=xn,xn=a,r!==null&&(xn===null?xn=r:xn.push.apply(xn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Ss(e,0),ba(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:ba(i,t,Ln,!Ea);break t;case 2:xn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(a=su+300-Nn(),10<a)){if(ba(i,t,Ln,!Ea),Zc(i,0,!0)!==0)break t;ji=t,i.timeoutHandle=fx(Zm.bind(null,i,n,xn,Dc,vd,t,Ln,dr,vs,Ea,r,"Throttled",-0,0),a);break t}Zm(i,n,xn,Dc,vd,t,Ln,dr,vs,Ea,r,null,-0,0)}}break}while(!0);Ai(e)}function Zm(e,t,n,i,a,r,s,o,l,c,h,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},Bv(t,r,p);var v=(r&62914560)===r?su-Nn():(r&4194048)===r?Vv-Nn():0;if(v=nE(p,v),v!==null){ji=r,e.cancelPendingCommit=v(Qm.bind(null,e,t,r,n,i,a,s,o,l,h,p,null,u,d)),ba(e,r,s,!c);return}}Qm(e,t,r,n,i,a,s,o,l)}function vM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Bn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ba(e,t,n,i){t&=~gp,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Pn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Z0(e,n,t)}function ou(){return te&6?!0:(Ko(0),!1)}function _p(){if(Xt!==null){if(le===0)var e=Xt.return;else e=Xt,Xi=Er=null,np(e),os=null,wo=0,e=Xt;for(;e!==null;)bv(e.alternate,e),e=e.return;Xt=null}}function Ss(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,BM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ji=0,_p(),ge=e,Xt=n=qi(e.current,null),Wt=t,le=0,Rn=null,Ea=!1,Ns=ko(e,t),mp=!1,vs=Ln=gp=dr=Ia=Ce=0,xn=So=null,vd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Pn(i),r=1<<a;t|=e[a],i&=~r}return ea=t,$c(),n}function qv(e,t){zt=null,wt.H=Uo,t===Ls||t===eu?(t=Rm(),le=3):t===Zh?(t=Rm(),le=4):le=t===fp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rn=t,Xt===null&&(Ce=1,Ac(e,Yn(t,e.current)))}function Yv(){var e=In.current;return e===null?!0:(Wt&4194048)===Wt?Zn===null:(Wt&62914560)===Wt||Wt&536870912?e===Zn:!1}function jv(){var e=wt.H;return wt.H=Uo,e===null?Uo:e}function Zv(){var e=wt.A;return wt.A=gM,e}function Uc(){Ce=4,Ea||(Wt&4194048)!==Wt&&In.current!==null||(Ns=!0),!(Ia&134217727)&&!(dr&134217727)||ge===null||ba(ge,Wt,Ln,!1)}function qu(e,t,n){var i=te;te|=2;var a=jv(),r=Zv();(ge!==e||Wt!==t)&&(Dc=null,Ss(e,t)),t=!1;var s=Ce;t:do try{if(le!==0&&Xt!==null){var o=Xt,l=Rn;switch(le){case 8:_p(),s=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(t=!0);var c=le;if(le=0,Rn=null,ns(e,o,l,c),n&&Ns){s=0;break t}break;default:c=le,le=0,Rn=null,ns(e,o,l,c)}}xM(),s=Ce;break}catch(h){qv(e,h)}while(!0);return t&&e.shellSuspendCounter++,Xi=Er=null,te=i,wt.H=a,wt.A=r,Xt===null&&(ge=null,Wt=0,$c()),s}function xM(){for(;Xt!==null;)Kv(Xt)}function SM(e,t){var n=te;te|=2;var i=jv(),a=Zv();ge!==e||Wt!==t?(Dc=null,wc=Nn()+500,Ss(e,t)):Ns=ko(e,t);t:do try{if(le!==0&&Xt!==null){t=Xt;var r=Rn;e:switch(le){case 1:le=0,Rn=null,ns(e,t,r,1);break;case 2:case 9:if(Am(r)){le=0,Rn=null,Km(t);break}t=function(){le!==2&&le!==9||ge!==e||(le=7),Ai(e)},r.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:Am(r)?(le=0,Rn=null,Km(t)):(le=0,Rn=null,ns(e,t,r,7));break;case 5:var s=null;switch(Xt.tag){case 26:s=Xt.memoizedState;case 5:case 27:var o=Xt;if(s?gx(s):o.stateNode.complete){le=0,Rn=null;var l=o.sibling;if(l!==null)Xt=l;else{var c=o.return;c!==null?(Xt=c,lu(c)):Xt=null}break e}}le=0,Rn=null,ns(e,t,r,5);break;case 6:le=0,Rn=null,ns(e,t,r,6);break;case 8:_p(),Ce=6;break t;default:throw Error(J(462))}}yM();break}catch(h){qv(e,h)}while(!0);return Xi=Er=null,wt.H=i,wt.A=a,te=n,Xt!==null?0:(ge=null,Wt=0,$c(),Ce)}function yM(){for(;Xt!==null&&!XS();)Kv(Xt)}function Kv(e){var t=Ev(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?lu(e):Xt=t}function Km(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=km(n,t,t.pendingProps,t.type,void 0,Wt);break;case 11:t=km(n,t,t.pendingProps,t.type.render,t.ref,Wt);break;case 5:np(t);default:bv(n,t),t=Xt=b_(t,ea),t=Ev(n,t,ea)}e.memoizedProps=e.pendingProps,t===null?lu(e):Xt=t}function ns(e,t,n,i){Xi=Er=null,np(t),os=null,wo=0;var a=t.return;try{if(cM(e,a,t,n,Wt)){Ce=1,Ac(e,Yn(n,e.current)),Xt=null;return}}catch(r){if(a!==null)throw Xt=a,r;Ce=1,Ac(e,Yn(n,e.current)),Xt=null;return}t.flags&32768?(Yt||i===1?e=!0:Ns||Wt&536870912?e=!1:(Ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=In.current,i!==null&&i.tag===13&&(i.flags|=16384))),Qv(t,e)):lu(t)}function lu(e){var t=e;do{if(t.flags&32768){Qv(t,Ea);return}e=t.return;var n=dM(t.alternate,t,ea);if(n!==null){Xt=n;return}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);Ce===0&&(Ce=5)}function Qv(e,t){do{var n=hM(e.alternate,e);if(n!==null){n.flags&=32767,Xt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=n}while(e!==null);Ce=6,Xt=null}function Qm(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do cu();while(Ge!==0);if(te&6)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(r=t.lanes|t.childLanes,r|=Vh,ty(e,n,r,s,o,l),e===ge&&(Xt=ge=null,Wt=0),xs=t,La=e,ji=n,xd=r,Sd=a,kv=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,TM(mc,function(){return nx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=wt.T,wt.T=null,a=ee.p,ee.p=2,s=te,te|=4;try{pM(e,t,n)}finally{te=s,ee.p=a,wt.T=i}}Ge=1,Jv(),$v(),tx()}}function Jv(){if(Ge===1){Ge=0;var e=La,t=xs,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=wt.T,wt.T=null;var i=ee.p;ee.p=2;var a=te;te|=4;try{Pv(t,e);var r=Td,s=g_(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&m_(o.ownerDocument.documentElement,o)){if(l!==null&&Gh(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!d.extend&&M>g&&(s=g,g=M,M=s);var f=xm(o,M),m=xm(o,g);if(f&&m&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(f.node,f.offset),d.removeAllRanges(),M>g?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Ic=!!bd,Td=bd=null}finally{te=a,ee.p=i,wt.T=n}}e.current=t,Ge=2}}function $v(){if(Ge===2){Ge=0;var e=La,t=xs,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=wt.T,wt.T=null;var i=ee.p;ee.p=2;var a=te;te|=4;try{Dv(e,t.alternate,t)}finally{te=a,ee.p=i,wt.T=n}}Ge=3}}function tx(){if(Ge===4||Ge===3){Ge=0,WS();var e=La,t=xs,n=ji,i=kv;t.subtreeFlags&10256||t.flags&10256?Ge=5:(Ge=0,xs=La=null,ex(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ua=null),Oh(n),t=t.stateNode,On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=wt.T,a=ee.p,ee.p=2,wt.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{wt.T=t,ee.p=a}}ji&3&&cu(),Ai(e),a=e.pendingLanes,n&261930&&a&42?e===yd?yo++:(yo=0,yd=e):yo=0,Ko(0)}}function ex(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yo(t)))}function cu(){return Jv(),$v(),tx(),nx()}function nx(){if(Ge!==5)return!1;var e=La,t=xd;xd=0;var n=Oh(ji),i=wt.T,a=ee.p;try{ee.p=32>n?32:n,wt.T=null,n=Sd,Sd=null;var r=La,s=ji;if(Ge=0,xs=La=null,ji=0,te&6)throw Error(J(331));var o=te;if(te|=4,Hv(r.current),Fv(r,r.current,s,n),te=o,Ko(0,!1),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Vo,r)}catch{}return!0}finally{ee.p=a,wt.T=i,ex(e,t)}}function Jm(e,t,n){t=Yn(n,t),t=pd(e.stateNode,t,2),e=Da(e,t,2),e!==null&&(Xo(e,2),Ai(e))}function ce(e,t,n){if(e.tag===3)Jm(e,e,n);else for(;t!==null;){if(t.tag===3){Jm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ua===null||!Ua.has(i))){e=Yn(n,e),n=_v(2),i=Da(t,n,2),i!==null&&(vv(n,i,t,e),Xo(i,2),Ai(i));break}}t=t.return}}function Yu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new _M;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(mp=!0,a.add(n),e=MM.bind(null,e,t,n),t.then(e,e))}function MM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(Wt&n)===n&&(Ce===4||Ce===3&&(Wt&62914560)===Wt&&300>Nn()-su?!(te&2)&&Ss(e,0):gp|=n,vs===Wt&&(vs=0)),Ai(e)}function ix(e,t){t===0&&(t=j0()),e=Mr(e,t),e!==null&&(Xo(e,t),Ai(e))}function EM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ix(e,n)}function bM(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),ix(e,n)}function TM(e,t){return Lh(e,t)}var Lc=null,Xr=null,Md=!1,Nc=!1,ju=!1,Ta=0;function Ai(e){e!==Xr&&e.next===null&&(Xr===null?Lc=Xr=e:Xr=Xr.next=e),Nc=!0,Md||(Md=!0,RM())}function Ko(e,t){if(!ju&&Nc){ju=!0;do for(var n=!1,i=Lc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Pn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,$m(i,r))}else r=Wt,r=Zc(i,i===ge?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||ko(i,r)||(n=!0,$m(i,r));i=i.next}while(n);ju=!1}}function AM(){ax()}function ax(){Nc=Md=!1;var e=0;Ta!==0&&FM()&&(e=Ta);for(var t=Nn(),n=null,i=Lc;i!==null;){var a=i.next,r=rx(i,t);r===0?(i.next=null,n===null?Lc=a:n.next=a,a===null&&(Xr=n)):(n=i,(e!==0||r&3)&&(Nc=!0)),i=a}Ge!==0&&Ge!==5||Ko(e),Ta!==0&&(Ta=0)}function rx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Pn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=$S(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=ge,n=Wt,n=Zc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Mu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ko(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Mu(i),Oh(n)){case 2:case 8:n=q0;break;case 32:n=mc;break;case 268435456:n=Y0;break;default:n=mc}return i=sx.bind(null,e),n=Lh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Mu(i),e.callbackPriority=2,e.callbackNode=null,2}function sx(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(cu()&&e.callbackNode!==n)return null;var i=Wt;return i=Zc(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Wv(e,i,t),rx(e,Nn()),e.callbackNode!=null&&e.callbackNode===n?sx.bind(null,e):null)}function $m(e,t){if(cu())return null;Wv(e,t,!0)}function RM(){IM(function(){te&6?Lh(W0,AM):ax()})}function vp(){if(Ta===0){var e=ms;e===0&&(e=sl,sl<<=1,!(sl&261888)&&(sl=256)),Ta=e}return Ta}function tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ql(""+e)}function eg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function CM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=tg((a[Mn]||null).action),s=i.submitter;s&&(t=(t=s[Mn]||null)?tg(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Kc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ta!==0){var l=s?eg(a,s):new FormData(a);dd(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?eg(a,s):new FormData(a),dd(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Zu=0;Zu<td.length;Zu++){var Ku=td[Zu],wM=Ku.toLowerCase(),DM=Ku[0].toUpperCase()+Ku.slice(1);oi(wM,"on"+DM)}oi(v_,"onAnimationEnd");oi(x_,"onAnimationIteration");oi(S_,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(qy,"onTransitionRun");oi(Yy,"onTransitionStart");oi(jy,"onTransitionCancel");oi(y_,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function ox(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){_c(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){_c(h)}a.currentTarget=null,r=l}}}}function kt(e,t){var n=t[qf];n===void 0&&(n=t[qf]=new Set);var i=e+"__bubble";n.has(i)||(lx(t,e,2,!1),n.add(i))}function Qu(e,t,n){var i=0;t&&(i|=4),lx(n,e,i,t)}var gl="_reactListening"+Math.random().toString(36).slice(2);function xp(e){if(!e[gl]){e[gl]=!0,$0.forEach(function(n){n!=="selectionchange"&&(UM.has(n)||Qu(n,!1,e),Qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gl]||(t[gl]=!0,Qu("selectionchange",!1,t))}}function lx(e,t,n,i){switch(yx(t)){case 2:var a=rE;break;case 8:a=sE;break;default:a=Ep}n=a.bind(null,t,n,e),a=void 0,!Qf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ju(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Yr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}o_(function(){var c=r,h=Fh(n),p=[];t:{var u=M_.get(e);if(u!==void 0){var d=Kc,v=e;switch(e){case"keypress":if(jl(n)===0)break t;case"keydown":case"keyup":d=by;break;case"focusin":v="focus",d=Ru;break;case"focusout":v="blur",d=Ru;break;case"beforeblur":case"afterblur":d=Ru;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Ry;break;case v_:case x_:case S_:d=my;break;case y_:d=wy;break;case"scroll":case"scrollend":d=uy;break;case"wheel":d=Uy;break;case"copy":case"cut":case"paste":d=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=fm;break;case"toggle":case"beforetoggle":d=Ny}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,x;m!==null;){var y=m;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||f===null||(y=bo(m,f),y!=null&&M.push(No(m,y,x))),g)break;m=m.return}0<M.length&&(u=new d(u,v,null,n,h),p.push({event:u,listeners:M}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Kf&&(v=n.relatedTarget||n.fromElement)&&(Yr(v)||v[ws]))break t;if((d||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,d?(v=n.relatedTarget||n.toElement,d=c,v=v?Yr(v):null,v!==null&&(g=Go(v),M=v.tag,v!==g||M!==5&&M!==27&&M!==6)&&(v=null)):(d=null,v=c),d!==v)){if(M=cm,y="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=fm,y="onPointerLeave",f="onPointerEnter",m="pointer"),g=d==null?u:io(d),x=v==null?u:io(v),u=new M(y,m+"leave",d,n,h),u.target=g,u.relatedTarget=x,y=null,Yr(h)===c&&(M=new M(f,m+"enter",v,n,h),M.target=x,M.relatedTarget=g,y=M),g=y,d&&v)e:{for(M=LM,f=d,m=v,x=0,y=f;y;y=M(y))x++;y=0;for(var R=m;R;R=M(R))y++;for(;0<x-y;)f=M(f),x--;for(;0<y-x;)m=M(m),y--;for(;x--;){if(f===m||m!==null&&f===m.alternate){M=f;break e}f=M(f),m=M(m)}M=null}else M=null;d!==null&&ng(p,u,d,M,!1),v!==null&&g!==null&&ng(p,g,v,M,!0)}}t:{if(u=c?io(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=mm;else if(pm(u))if(h_)T=ky;else{T=Gy;var A=Hy}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&zh(c.elementType)&&(T=mm):T=Vy;if(T&&(T=T(e,c))){d_(p,T,n,h);break t}A&&A(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Zf(u,"number",u.value)}switch(A=c?io(c):window,e){case"focusin":(pm(A)||A.contentEditable==="true")&&(Kr=A,Jf=c,fo=null);break;case"focusout":fo=Jf=Kr=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,Sm(p,n,h);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":Sm(p,n,h)}var _;if(Hh)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else Zr?u_(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(c_&&n.locale!=="ko"&&(Zr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Zr&&(_=l_()):(Ma=h,Bh="value"in Ma?Ma.value:Ma.textContent,Zr=!0)),A=Oc(c,b),0<A.length&&(b=new um(b,e,null,n,h),p.push({event:b,listeners:A}),_?b.data=_:(_=f_(n),_!==null&&(b.data=_)))),(_=Py?zy(e,n):Fy(e,n))&&(b=Oc(c,"onBeforeInput"),0<b.length&&(A=new um("onBeforeInput","beforeinput",null,n,h),p.push({event:A,listeners:b}),A.data=_)),CM(p,e,c,n,h)}ox(p,t)})}function No(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=bo(e,n),a!=null&&i.unshift(No(e,a,r)),a=bo(e,t),a!=null&&i.push(No(e,a,r))),e.tag===3)return i;e=e.return}return[]}function LM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ng(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=bo(n,r),c!=null&&s.unshift(No(n,c,l))):a||(c=bo(n,r),c!=null&&s.push(No(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var NM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function ig(e){return(typeof e=="string"?e:""+e).replace(NM,`
`).replace(OM,"")}function cx(e,t){return t=ig(t),ig(e)===t}function de(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ps(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ps(e,""+i);break;case"className":cl(e,"class",i);break;case"tabIndex":cl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cl(e,n,i);break;case"style":s_(e,i,r);break;case"data":if(t!=="object"){cl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ql(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",a.name,a,null),de(e,t,"formEncType",a.formEncType,a,null),de(e,t,"formMethod",a.formMethod,a,null),de(e,t,"formTarget",a.formTarget,a,null)):(de(e,t,"encType",a.encType,a,null),de(e,t,"method",a.method,a,null),de(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ql(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ki);break;case"onScroll":i!=null&&kt("scroll",e);break;case"onScrollEnd":i!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ql(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":kt("beforetoggle",e),kt("toggle",e),Wl(e,"popover",i);break;case"xlinkActuate":wi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ly.get(n)||n,Wl(e,n,i))}}function Ed(e,t,n,i,a,r){switch(n){case"style":s_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ps(e,i):(typeof i=="number"||typeof i=="bigint")&&ps(e,""+i);break;case"onScroll":i!=null&&kt("scroll",e);break;case"onScrollEnd":i!=null&&kt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!t_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[Mn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Wl(e,n,i)}}}function an(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:de(e,t,r,s,n,null)}}a&&de(e,t,"srcSet",n.srcSet,n,null),i&&de(e,t,"src",n.src,n,null);return;case"input":kt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:de(e,t,i,h,n,null)}}i_(e,r,o,l,c,s,a,!1);return;case"select":kt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:de(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?as(e,!!i,t,!1):n!=null&&as(e,!!i,n,!0);return;case"textarea":kt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:de(e,t,s,o,n,null)}r_(e,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:de(e,t,l,i,n,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(i=0;i<Lo.length;i++)kt(Lo[i],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:de(e,t,c,i,n,null)}return;default:if(zh(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Ed(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&de(e,t,o,i,n,null))}function PM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||de(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":r=d;break;case"name":a=d;break;case"checked":c=d;break;case"defaultChecked":h=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,t));break;default:d!==p&&de(e,t,u,d,i,p)}}jf(e,s,o,l,c,h,r,a);return;case"select":d=s=o=u=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(r)||de(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":u=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&de(e,t,a,r,i,l)}t=o,n=s,i=d,u!=null?as(e,!!n,u,!1):!!i!=!!n&&(t!=null?as(e,!!n,t,!0):as(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:de(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":u=a;break;case"defaultValue":d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(J(91));break;default:a!==r&&de(e,t,s,a,i,r)}a_(e,u,d);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:de(e,t,v,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:de(e,t,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&de(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:de(e,t,c,u,i,d)}return;default:if(zh(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Ed(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||Ed(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&de(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||de(e,t,p,u,i,d)}function ag(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&ag(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&ag(p)&&(l=l.responseEnd,s+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bd=null,Td=null;function Pc(e){return e.nodeType===9?e:e.ownerDocument}function rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ux(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ad(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=null;function FM(){var e=window.event;return e&&e.type==="popstate"?e===$u?!1:($u=e,!0):($u=null,!1)}var fx=typeof setTimeout=="function"?setTimeout:void 0,BM=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,IM=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(e){return sg.resolve(null).then(e).catch(HM)}:fx;function HM(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function og(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ms(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Mo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Mo(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[Wo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Mo(e.ownerDocument.body);n=a}while(n);Ms(t)}function lg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Rd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Rd(n),Ph(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function GM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Wo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Kn(e.nextSibling),e===null)break}return null}function VM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kn(e.nextSibling),e===null))return null;return e}function dx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kn(e.nextSibling),e===null))return null;return e}function Cd(e){return e.data==="$?"||e.data==="$~"}function wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kM(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dd=null;function cg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Kn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ug(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function hx(e,t,n){switch(t=Pc(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Mo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ph(e)}var Qn=new Map,fg=new Set;function zc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=ee.d;ee.d={f:XM,r:WM,D:qM,C:YM,L:jM,m:ZM,X:QM,S:KM,M:JM};function XM(){var e=aa.f(),t=ou();return e||t}function WM(e){var t=Ds(e);t!==null&&t.tag===5&&t.type==="form"?sv(t):aa.r(e)}var Os=typeof document>"u"?null:document;function px(e,t,n){var i=Os;if(i&&typeof t=="string"&&t){var a=qn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),fg.has(a)||(fg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),an(t,"link",e),Ze(t),i.head.appendChild(t)))}}function qM(e){aa.D(e),px("dns-prefetch",e,null)}function YM(e,t){aa.C(e,t),px("preconnect",e,t)}function jM(e,t,n){aa.L(e,t,n);var i=Os;if(i&&e&&t){var a='link[rel="preload"][as="'+qn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+qn(n.imageSizes)+'"]')):a+='[href="'+qn(e)+'"]';var r=a;switch(t){case"style":r=ys(e);break;case"script":r=Ps(e)}Qn.has(r)||(e=Ee({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Qo(r))||t==="script"&&i.querySelector(Jo(r))||(t=i.createElement("link"),an(t,"link",e),Ze(t),i.head.appendChild(t)))}}function ZM(e,t){aa.m(e,t);var n=Os;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+qn(i)+'"][href="'+qn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ps(e)}if(!Qn.has(r)&&(e=Ee({rel:"modulepreload",href:e},t),Qn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jo(r)))return}i=n.createElement("link"),an(i,"link",e),Ze(i),n.head.appendChild(i)}}}function KM(e,t,n){aa.S(e,t,n);var i=Os;if(i&&e){var a=is(i).hoistableStyles,r=ys(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Qo(r)))o.loading=5;else{e=Ee({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qn.get(r))&&Sp(e,n);var l=s=i.createElement("link");Ze(l),an(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,nc(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function QM(e,t){aa.X(e,t);var n=Os;if(n&&e){var i=is(n).hoistableScripts,a=Ps(e),r=i.get(a);r||(r=n.querySelector(Jo(a)),r||(e=Ee({src:e,async:!0},t),(t=Qn.get(a))&&yp(e,t),r=n.createElement("script"),Ze(r),an(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function JM(e,t){aa.M(e,t);var n=Os;if(n&&e){var i=is(n).hoistableScripts,a=Ps(e),r=i.get(a);r||(r=n.querySelector(Jo(a)),r||(e=Ee({src:e,async:!0,type:"module"},t),(t=Qn.get(a))&&yp(e,t),r=n.createElement("script"),Ze(r),an(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function dg(e,t,n,i){var a=(a=Ra.current)?zc(a):null;if(!a)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ys(n.href),n=is(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ys(n.href);var r=is(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Qo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Qn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qn.set(e,n),r||$M(a,e,n,s.state))),t&&i===null)throw Error(J(528,""));return s}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ps(n),n=is(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function ys(e){return'href="'+qn(e)+'"'}function Qo(e){return'link[rel="stylesheet"]['+e+"]"}function mx(e){return Ee({},e,{"data-precedence":e.precedence,precedence:null})}function $M(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),an(t,"link",n),Ze(t),e.head.appendChild(t))}function Ps(e){return'[src="'+qn(e)+'"]'}function Jo(e){return"script[async]"+e}function hg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+qn(n.href)+'"]');if(i)return t.instance=i,Ze(i),i;var a=Ee({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ze(i),an(i,"style",a),nc(i,n.precedence,e),t.instance=i;case"stylesheet":a=ys(n.href);var r=e.querySelector(Qo(a));if(r)return t.state.loading|=4,t.instance=r,Ze(r),r;i=mx(n),(a=Qn.get(a))&&Sp(i,a),r=(e.ownerDocument||e).createElement("link"),Ze(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),an(r,"link",i),t.state.loading|=4,nc(r,n.precedence,e),t.instance=r;case"script":return r=Ps(n.src),(a=e.querySelector(Jo(r)))?(t.instance=a,Ze(a),a):(i=n,(a=Qn.get(r))&&(i=Ee({},n),yp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ze(a),an(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,nc(i,n.precedence,e));return t.instance}function nc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ic=null;function pg(e,t,n){if(ic===null){var i=new Map,a=ic=new Map;a.set(n,i)}else a=ic,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Wo]||r[$e]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function mg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function tE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gx(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function eE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=ys(i.href),r=t.querySelector(Qo(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Ze(r);return}r=t.ownerDocument||t,i=mx(i),(a=Qn.get(a))&&Sp(i,a),r=r.createElement("link"),Ze(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),an(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Fc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var tf=0;function nE(e,t){return e.stylesheets&&e.count===0&&ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&tf===0&&(tf=62500*zM());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>tf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bc=null;function ac(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,t.forEach(iE,e),Bc=null,Fc.call(e))}function iE(e,t){if(!(t.state.loading&4)){var n=Bc.get(e);if(n)var i=n.get(null);else{n=new Map,Bc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Fc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Oo={$$typeof:Vi,Provider:null,Consumer:null,_currentValue:lr,_currentValue2:lr,_threadCount:0};function aE(e,t,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.hiddenUpdates=Eu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function _x(e,t,n,i,a,r,s,o,l,c,h,p){return e=new aE(e,t,n,s,l,c,h,p,o),t=1,r===!0&&(t|=24),r=Dn(3,null,null,t),e.current=r,r.stateNode=e,t=Yh(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Kh(r),e}function vx(e){return e?(e=$r,e):$r}function xx(e,t,n,i,a,r){a=vx(a),i.context===null?i.context=a:i.pendingContext=a,i=wa(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Da(e,i,t),n!==null&&(Sn(n,e,t),po(n,e,t))}function gg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mp(e,t){gg(e,t),(e=e.alternate)&&gg(e,t)}function Sx(e){if(e.tag===13||e.tag===31){var t=Mr(e,67108864);t!==null&&Sn(t,e,67108864),Mp(e,67108864)}}function _g(e){if(e.tag===13||e.tag===31){var t=zn();t=Nh(t);var n=Mr(e,t);n!==null&&Sn(n,e,t),Mp(e,t)}}var Ic=!0;function rE(e,t,n,i){var a=wt.T;wt.T=null;var r=ee.p;try{ee.p=2,Ep(e,t,n,i)}finally{ee.p=r,wt.T=a}}function sE(e,t,n,i){var a=wt.T;wt.T=null;var r=ee.p;try{ee.p=8,Ep(e,t,n,i)}finally{ee.p=r,wt.T=a}}function Ep(e,t,n,i){if(Ic){var a=Ud(i);if(a===null)Ju(e,t,i,Hc,n),vg(e,i);else if(lE(a,e,t,n,i))i.stopPropagation();else if(vg(e,i),t&4&&-1<oE.indexOf(e)){for(;a!==null;){var r=Ds(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=tr(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Pn(s);o.entanglements[1]|=l,s&=~l}Ai(r),!(te&6)&&(wc=Nn()+500,Ko(0))}}break;case 31:case 13:o=Mr(r,2),o!==null&&Sn(o,r,2),ou(),Mp(r,2)}if(r=Ud(i),r===null&&Ju(e,t,i,Hc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Ju(e,t,i,null,n)}}function Ud(e){return e=Fh(e),bp(e)}var Hc=null;function bp(e){if(Hc=null,e=Yr(e),e!==null){var t=Go(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=H0(t),e!==null)return e;e=null}else if(n===31){if(e=G0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hc=e,null}function yx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qS()){case W0:return 2;case q0:return 8;case mc:case YS:return 32;case Y0:return 268435456;default:return 32}default:return 32}}var Ld=!1,Na=null,Oa=null,Pa=null,Po=new Map,zo=new Map,xa=[],oE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vg(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":Po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function qs(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Ds(t),t!==null&&Sx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function lE(e,t,n,i,a){switch(t){case"focusin":return Na=qs(Na,e,t,n,i,a),!0;case"dragenter":return Oa=qs(Oa,e,t,n,i,a),!0;case"mouseover":return Pa=qs(Pa,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Po.set(r,qs(Po.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,zo.set(r,qs(zo.get(r)||null,e,t,n,i,a)),!0}return!1}function Mx(e){var t=Yr(e.target);if(t!==null){var n=Go(t);if(n!==null){if(t=n.tag,t===13){if(t=H0(n),t!==null){e.blockedOn=t,nm(e.priority,function(){_g(n)});return}}else if(t===31){if(t=G0(n),t!==null){e.blockedOn=t,nm(e.priority,function(){_g(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ud(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Kf=i,n.target.dispatchEvent(i),Kf=null}else return t=Ds(n),t!==null&&Sx(t),e.blockedOn=n,!1;t.shift()}return!0}function xg(e,t,n){rc(e)&&n.delete(t)}function cE(){Ld=!1,Na!==null&&rc(Na)&&(Na=null),Oa!==null&&rc(Oa)&&(Oa=null),Pa!==null&&rc(Pa)&&(Pa=null),Po.forEach(xg),zo.forEach(xg)}function _l(e,t){e.blockedOn===t&&(e.blockedOn=null,Ld||(Ld=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,cE)))}var vl=null;function Sg(e){vl!==e&&(vl=e,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,function(){vl===e&&(vl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(bp(i||n)===null)continue;break}var r=Ds(n);r!==null&&(e.splice(t,3),t-=3,dd(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ms(e){function t(l){return _l(l,e)}Na!==null&&_l(Na,e),Oa!==null&&_l(Oa,e),Pa!==null&&_l(Pa,e),Po.forEach(t),zo.forEach(t);for(var n=0;n<xa.length;n++){var i=xa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xa.length&&(n=xa[0],n.blockedOn===null);)Mx(n),n.blockedOn===null&&xa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[Mn]||null;if(typeof r=="function")s||Sg(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[Mn]||null)o=s.formAction;else if(bp(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Sg(n)}}}function Ex(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Tp(e){this._internalRoot=e}uu.prototype.render=Tp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=zn();xx(n,i,e,t,null,null)};uu.prototype.unmount=Tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xx(e.current,2,null,e,null,null),ou(),t[ws]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=J0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xa.length&&t!==0&&t<xa[n].priority;n++);xa.splice(n,0,e),n===0&&Mx(e)}};var yg=B0.version;if(yg!=="19.2.4")throw Error(J(527,yg,"19.2.4"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=IS(t),e=e!==null?V0(e):null,e=e===null?null:e.stateNode,e};var uE={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Vo=xl.inject(uE),On=xl}catch{}}Yc.createRoot=function(e,t){if(!I0(e))throw Error(J(299));var n=!1,i="",a=pv,r=mv,s=gv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=_x(e,1,!1,null,null,n,i,null,a,r,s,Ex),e[ws]=t.current,xp(e),new Tp(t)};Yc.hydrateRoot=function(e,t,n){if(!I0(e))throw Error(J(299));var i=!1,a="",r=pv,s=mv,o=gv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=_x(e,1,!0,t,n??null,i,a,l,r,s,o,Ex),t.context=vx(null),n=t.current,i=zn(),i=Nh(i),a=wa(i),a.callback=null,Da(n,a,i),n=i,t.current.lanes=n,Xo(t,n),Ai(t),e[ws]=t.current,xp(e),new uu(t)};Yc.version="19.2.4";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(e){console.error(e)}}bx(),L0.exports=Yc;var fE=L0.exports;const dE=["Pipeline","Axioms","Skills","Install"];function hE(){const[e,t]=Ie.useState("dark"),[n,i]=Ie.useState(!1),a=()=>{const r=e==="dark"?"light":"dark";t(r),document.documentElement.setAttribute("data-theme",r)};return W.jsx("header",{style:{position:"sticky",top:0,zIndex:100,background:"color-mix(in oklch, var(--color-bg) 88%, transparent)",backdropFilter:"blur(18px) saturate(1.3)",borderBottom:"1px solid var(--color-divider)"},children:W.jsxs("div",{style:{maxWidth:"var(--content-wide)",margin:"0 auto",padding:"var(--space-4) var(--space-6)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[W.jsxs("a",{href:"#",style:{textDecoration:"none",color:"var(--color-text)",fontFamily:"var(--font-display)",fontSize:"var(--text-lg)",fontWeight:500,letterSpacing:"-0.02em",display:"flex",alignItems:"center",gap:"var(--space-3)"},children:[W.jsx("span",{style:{color:"var(--color-primary)"},children:"~"})," driftwave"]}),W.jsx("button",{className:"dw-nav-menu-btn","aria-label":"Toggle menu",onClick:()=>i(r=>!r),children:n?"✕":"☰"}),W.jsxs("nav",{className:`dw-nav-links${n?" open":""}`,style:{display:"flex",alignItems:"center",gap:"var(--space-8)"},children:[dE.map(r=>W.jsx("a",{href:`#${r.toLowerCase()}`,style:{fontSize:"var(--text-sm)",fontWeight:500,textDecoration:"none",color:"var(--color-text-muted)",letterSpacing:"0.025em",textTransform:"uppercase"},children:r},r)),W.jsx("button",{onClick:a,"aria-label":"Toggle theme",style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius-full)",color:"var(--color-text-muted)",background:"none",border:"none",cursor:"pointer"},children:e==="dark"?"☀":"☾"})]})]})})}function pE(){return W.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:"92vh",display:"flex",alignItems:"flex-end",paddingBottom:"clamp(3rem, 8vw, 6rem)"},children:[W.jsxs("div",{style:{position:"absolute",inset:0,zIndex:0},children:[W.jsx("img",{src:"/driftwave/images/Hero_banner_—_mathematician's_cosmos_with_Doberman_silhouett.jpg",alt:"",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 25%",filter:"brightness(0.3) saturate(0.65)"}}),W.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 0%, rgba(15,13,8,0.25) 45%, var(--color-bg) 100%)"}})]}),W.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:820,padding:"0 var(--space-6)",margin:"0 auto"},children:[W.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--color-primary)",marginBottom:"var(--space-6)"},children:[W.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--color-primary)",animation:"pdot 2.4s ease-in-out infinite"}}),"Adaptive Topological Field Theory"]}),W.jsxs("h1",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-3xl)",fontWeight:400,letterSpacing:"-0.035em",lineHeight:1.05,marginBottom:"var(--space-6)"},children:[W.jsx("em",{style:{fontStyle:"italic",color:"var(--color-primary)"},children:"driftwave"}),W.jsx("br",{}),"Topology as Cognition"]}),W.jsx("p",{style:{fontSize:"var(--text-lg)",color:"var(--color-text-muted)",maxWidth:"58ch",marginBottom:"var(--space-10)",lineHeight:1.65},children:"A Claude Code plugin built around H₀ persistent-homology clustering, with topology-inspired checks layered above. Five axioms. Four layers. One principle: shape over count."}),W.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-4)",marginBottom:"var(--space-12)"},children:[W.jsx("a",{href:"#install",style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",padding:"var(--space-3) var(--space-8)",background:"var(--color-primary)",color:"var(--color-bg)",borderRadius:"var(--radius-full)",fontSize:"var(--text-sm)",fontWeight:700,textDecoration:"none"},children:"Install Plugin →"}),W.jsx("a",{href:"#pipeline",style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",padding:"var(--space-3) var(--space-8)",border:"1px solid var(--color-border)",color:"var(--color-text-muted)",borderRadius:"var(--radius-full)",fontSize:"var(--text-sm)",fontWeight:600,textDecoration:"none"},children:"How It Works"})]}),W.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-8)"},children:[{value:"4",label:"Abstraction Layers"},{value:"5",label:"Governing Axioms"},{value:"6",label:"Skills"}].map(e=>W.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:[W.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xl)",fontWeight:500,color:"var(--color-primary)",letterSpacing:"-0.02em"},children:e.value}),W.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--color-text-faint)"},children:e.label})]},e.label))})]}),W.jsx("style",{children:"@keyframes pdot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.45;transform:scale(0.65)}}"})]})}const mE=[{id:"L0",name:"Raw Ingestion",command:"/dw-map",color:"var(--color-text-faint)",image:"Spectral_sum_heatmap_—_sigma_sweep_showing_peak_at_critical_.jpg",desc:"Ingest raw artifacts into an unaveraged point cloud. Each datum is a discrete point. The variance structure IS the topological signal.",detail:"Entropy gate rejects zero-variance inputs. NO_AVERAGING axiom enforced. One question at a time, one probe at a time."},{id:"L1",name:"Persistent Clustering",command:"/dw-filter",color:"var(--color-teal)",image:"Vietoris-Rips_simplicial_complex_over_zeta_zeros.jpg",desc:"Vietoris-Rips filtration identifies stable H₀ clusters. Long bars = real modules. Short bars = noise.",detail:"Adaptive scale: the cluster threshold is the median persistence lifetime of the H₀ bars. Number of clusters determined by data geometry, not fixed."},{id:"L2",name:"Topological Synthesis",command:"/dw-ascend",color:"var(--color-primary)",image:"Betti_number_evolution_curves_—_zeta_vs_GUE_vs_Poisson.jpg",desc:'Cross-section consistency is checked by an LLM — an "H₁ loop" analogy, not computed homology. The Gini trajectory tracks how the structure hierarchifies.',detail:"Positive Gini slope → ASCEND. Negative → REPROBE. Waypoints > 3 → SPLIT. Shape dominates count."},{id:"L3",name:"Sheaf-Valued Review",command:"/dw-ascend --sheaf",color:"var(--color-success)",image:"Sheaf_fiber_bundle_over_simplicial_complex_—_gauge_connectio.jpg",desc:"An LLM reviews whether the parts compose globally — a sheaf-consistency analogy, not a computed Laplacian kernel.",detail:"Local sections must be compatible under restriction maps. Iterate until convergence. Surface to human if obstruction is fundamental."}];function gE(){return W.jsx("section",{id:"pipeline",style:{padding:"clamp(3rem, 8vw, 6rem) 0"},children:W.jsxs("div",{style:{maxWidth:"var(--content-wide)",margin:"0 auto",padding:"0 var(--space-6)"},children:[W.jsxs("div",{style:{marginBottom:"var(--space-12)"},children:[W.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-primary)",marginBottom:"var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-3)"},children:["The Pipeline",W.jsx("span",{style:{flex:1,maxWidth:"3rem",height:1,background:"var(--color-primary)",opacity:.4}})]}),W.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",fontWeight:500,letterSpacing:"-0.03em",lineHeight:1.08},children:"L0 → L1 → L2 → L3"}),W.jsx("p",{style:{fontSize:"var(--text-base)",color:"var(--color-text-muted)",marginTop:"var(--space-4)",maxWidth:"58ch",lineHeight:1.75},children:"Information flows upward through persistent homology. Each layer transition is gated by a topological phase transition — not a timer, not a checklist."})]}),W.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-16)"},children:mE.map((e,t)=>W.jsxs("div",{className:"dw-pipeline-row",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(2rem, 5vw, 4rem)",alignItems:"center",direction:t%2===1?"rtl":"ltr"},children:[W.jsxs("div",{style:{direction:"ltr"},children:[W.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",padding:"var(--space-1) var(--space-3)",background:"var(--color-primary-highlight)",color:"var(--color-primary)",borderRadius:"var(--radius-full)",fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"var(--space-4)"},children:[W.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:e.color}}),e.id]}),W.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-xl)",fontWeight:500,letterSpacing:"-0.025em",marginBottom:"var(--space-4)"},children:e.name}),W.jsx("p",{style:{fontSize:"var(--text-base)",color:"var(--color-text-muted)",lineHeight:1.8,marginBottom:"var(--space-4)"},children:e.desc}),W.jsx("div",{style:{background:"var(--color-surface-offset)",borderRadius:"var(--radius-md)",padding:"var(--space-3) var(--space-5)",fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:"var(--color-teal)",letterSpacing:"0.04em",marginBottom:"var(--space-4)"},children:e.command}),W.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--color-text-faint)",lineHeight:1.72},children:e.detail})]}),W.jsx("div",{style:{borderRadius:"var(--radius-xl)",overflow:"hidden",aspectRatio:"4/3",boxShadow:"var(--shadow-lg)",direction:"ltr"},children:W.jsx("img",{src:`/driftwave/images/${e.image}`,alt:e.name,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover"}})})]},e.id))})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="183",_E=0,Mg=1,vE=2,sc=1,xE=2,so=3,Ha=0,yn=1,Gi=2,Zi=0,us=1,Eg=2,bg=3,Tg=4,SE=5,ar=100,yE=101,ME=102,EE=103,bE=104,TE=200,AE=201,RE=202,CE=203,Nd=204,Od=205,wE=206,DE=207,UE=208,LE=209,NE=210,OE=211,PE=212,zE=213,FE=214,Pd=0,zd=1,Fd=2,Es=3,Bd=4,Id=5,Hd=6,Gd=7,Rp=0,BE=1,IE=2,vi=0,Tx=1,Ax=2,Rx=3,Cx=4,wx=5,Dx=6,Ux=7,Lx=300,vr=301,bs=302,ef=303,nf=304,fu=306,Vd=1e3,Wi=1001,kd=1002,nn=1003,HE=1004,Sl=1005,ln=1006,af=1007,sr=1008,Un=1009,Nx=1010,Ox=1011,Fo=1012,Cp=1013,yi=1014,mi=1015,na=1016,wp=1017,Dp=1018,Bo=1020,Px=35902,zx=35899,Fx=1021,Bx=1022,si=1023,ia=1026,or=1027,Ix=1028,Up=1029,Ts=1030,Lp=1031,Np=1033,oc=33776,lc=33777,cc=33778,uc=33779,Xd=35840,Wd=35841,qd=35842,Yd=35843,jd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,$d=37490,th=37491,eh=37808,nh=37809,ih=37810,ah=37811,rh=37812,sh=37813,oh=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,gh=36494,_h=36495,vh=36283,xh=36284,Sh=36285,yh=36286,GE=3200,Hx=0,VE=1,Sa="",Vn="srgb",As="srgb-linear",Gc="linear",oe="srgb",Cr=7680,Ag=519,kE=512,XE=513,WE=514,Op=515,qE=516,YE=517,Pp=518,jE=519,Rg=35044,Cg="300 es",gi=2e3,Io=2001;function ZE(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Vc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function KE(){const e=Vc("canvas");return e.style.display="block",e}const wg={};function Dg(...e){const t="THREE."+e.shift();console.log(t,...e)}function Gx(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ut(...e){e=Gx(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function $t(...e){e=Gx(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function kc(...e){const t=e.join(" ");t in wg||(wg[t]=!0,Ut(...e))}function QE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const JE={[Pd]:zd,[Fd]:Hd,[Bd]:Gd,[Es]:Id,[zd]:Pd,[Hd]:Fd,[Gd]:Bd,[Id]:Es};class zs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,Mh=180/Math.PI;function $o(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[e&255]+sn[e>>8&255]+sn[e>>16&255]+sn[e>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function qt(e,t,n){return Math.max(t,Math.min(n,e))}function $E(e,t){return(e%t+t)%t}function sf(e,t,n){return(1-n)*e+n*t}function Ys(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function _n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,n=0){ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=r[s+0],d=r[s+1],v=r[s+2],M=r[s+3];if(p!==M||l!==u||c!==d||h!==v){let g=l*u+c*d+h*v+p*M;g<0&&(u=-u,d=-d,v=-v,M=-M,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),x=Math.sin(m);f=Math.sin(f*m)/x,o=Math.sin(o*m)/x,l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+M*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+M*o;const m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=r[s],u=r[s+1],d=r[s+2],v=r[s+3];return t[n]=o*v+h*p+l*d-c*u,t[n+1]=l*v+h*u+c*p-o*d,t[n+2]=c*v+h*d+o*u-l*p,t[n+3]=h*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(r/2),u=l(i/2),d=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"YXZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"ZXY":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"ZYX":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"YZX":this._x=u*h*p+c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p-u*d*v;break;case"XZY":this._x=u*h*p-c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p+u*d*v;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(s-a)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+s)/d,this._z=(r+c)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(r-c)/d,this._x=(a+s)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(s-a)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,r=t._z,s=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,n=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ug.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ug.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*c+s*p-o*h,this.y=i+l*h+o*c-r*p,this.z=a+l*p+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return of.copy(this).projectOnVector(t),this.sub(of)}reflect(t){return this.sub(of.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const of=new G,Ug=new Fs;class Bt{constructor(t,n,i,a,r,s,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],v=i[8],M=a[0],g=a[3],f=a[6],m=a[1],x=a[4],y=a[7],R=a[2],T=a[5],A=a[8];return r[0]=s*M+o*m+l*R,r[3]=s*g+o*x+l*T,r[6]=s*f+o*y+l*A,r[1]=c*M+h*m+p*R,r[4]=c*g+h*x+p*T,r[7]=c*f+h*y+p*A,r[2]=u*M+d*m+v*R,r[5]=u*g+d*x+v*T,r[8]=u*f+d*y+v*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*s-o*c,u=o*l-h*r,d=c*r-s*l,v=n*p+i*u+a*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=p*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*s)*M,t[3]=u*M,t[4]=(h*n-a*l)*M,t[5]=(a*r-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(s*n-i*r)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(lf.makeScale(t,n)),this}rotate(t){return this.premultiply(lf.makeRotation(-t)),this}translate(t,n){return this.premultiply(lf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lf=new Bt,Lg=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ng=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tb(){const e={enabled:!0,workingColorSpace:As,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===oe&&(a.r=Ki(a.r),a.g=Ki(a.g),a.b=Ki(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===oe&&(a.r=fs(a.r),a.g=fs(a.g),a.b=fs(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sa?Gc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return kc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return kc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[As]:{primaries:t,whitePoint:i,transfer:Gc,toXYZ:Lg,fromXYZ:Ng,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:Lg,fromXYZ:Ng,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),e}const Kt=tb();function Ki(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function fs(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let wr;class eb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{wr===void 0&&(wr=Vc("canvas")),wr.width=t.width,wr.height=t.height;const a=wr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=wr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Vc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Ki(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nb=0;class zp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(cf(a[s].image)):r.push(cf(a[s]))}else r=cf(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function cf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?eb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let ib=0;const uf=new G;class dn extends zs{constructor(t=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Wi,a=Wi,r=ln,s=sr,o=si,l=Un,c=dn.DEFAULT_ANISOTROPY,h=Sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=$o(),this.name="",this.source=new zp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ut(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vd:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vd:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Lx;dn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,n=0,i=0,a=1){we.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],v=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(d+1)/2,R=(f+1)/2,T=(h+u)/4,A=(p+M)/4,_=(v+g)/4;return x>y&&x>R?x<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(x),a=T/i,r=A/i):y>R?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=T/a,r=_/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=A/r,a=_/r),this.set(i,a,r,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-M)/m,this.z=(u-h)/m,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this.w=qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this.w=qt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ab extends zs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new we(0,0,t,n),this.scissorTest=!1,this.viewport=new we(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},r=new dn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new zp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends ab{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Vx extends dn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rb extends dn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Te{constructor(t,n,i,a,r,s,o,l,c,h,p,u,d,v,M,g){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,p,u,d,v,M,g)}set(t,n,i,a,r,s,o,l,c,h,p,u,d,v,M,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Dr.setFromMatrixColumn(t,0).length(),r=1/Dr.setFromMatrixColumn(t,1).length(),s=1/Dr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const u=s*h,d=s*p,v=o*h,M=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+d*c,n[10]=s*l}else if(t.order==="YXZ"){const u=l*h,d=l*p,v=c*h,M=c*p;n[0]=u+M*o,n[4]=v*o-d,n[8]=s*c,n[1]=s*p,n[5]=s*h,n[9]=-o,n[2]=d*o-v,n[6]=M+u*o,n[10]=s*l}else if(t.order==="ZXY"){const u=l*h,d=l*p,v=c*h,M=c*p;n[0]=u-M*o,n[4]=-s*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=s*h,n[9]=M-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const u=s*h,d=s*p,v=o*h,M=o*p;n[0]=l*h,n[4]=v*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const u=s*l,d=s*c,v=o*l,M=o*c;n[0]=l*h,n[4]=M-u*p,n[8]=v*p+d,n[1]=p,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+v,n[10]=u-M*p}else if(t.order==="XZY"){const u=s*l,d=s*c,v=o*l,M=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+M,n[5]=s*h,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*h,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sb,t,ob)}lookAt(t,n,i){const a=this.elements;return Tn.subVectors(t,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),la.crossVectors(i,Tn),la.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),la.crossVectors(i,Tn)),la.normalize(),yl.crossVectors(Tn,la),a[0]=la.x,a[4]=yl.x,a[8]=Tn.x,a[1]=la.y,a[5]=yl.y,a[9]=Tn.y,a[2]=la.z,a[6]=yl.z,a[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],v=i[2],M=i[6],g=i[10],f=i[14],m=i[3],x=i[7],y=i[11],R=i[15],T=a[0],A=a[4],_=a[8],b=a[12],F=a[1],w=a[5],z=a[9],B=a[13],k=a[2],I=a[6],D=a[10],L=a[14],q=a[3],Z=a[7],nt=a[11],pt=a[15];return r[0]=s*T+o*F+l*k+c*q,r[4]=s*A+o*w+l*I+c*Z,r[8]=s*_+o*z+l*D+c*nt,r[12]=s*b+o*B+l*L+c*pt,r[1]=h*T+p*F+u*k+d*q,r[5]=h*A+p*w+u*I+d*Z,r[9]=h*_+p*z+u*D+d*nt,r[13]=h*b+p*B+u*L+d*pt,r[2]=v*T+M*F+g*k+f*q,r[6]=v*A+M*w+g*I+f*Z,r[10]=v*_+M*z+g*D+f*nt,r[14]=v*b+M*B+g*L+f*pt,r[3]=m*T+x*F+y*k+R*q,r[7]=m*A+x*w+y*I+R*Z,r[11]=m*_+x*z+y*D+R*nt,r[15]=m*b+x*B+y*L+R*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],v=t[3],M=t[7],g=t[11],f=t[15],m=l*d-c*u,x=o*d-c*p,y=o*u-l*p,R=s*d-c*h,T=s*u-l*h,A=s*p-o*h;return n*(M*m-g*x+f*y)-i*(v*m-g*R+f*T)+a*(v*x-M*R+f*A)-r*(v*y-M*T+g*A)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],v=t[12],M=t[13],g=t[14],f=t[15],m=n*o-i*s,x=n*l-a*s,y=n*c-r*s,R=i*l-a*o,T=i*c-r*o,A=a*c-r*l,_=h*M-p*v,b=h*g-u*v,F=h*f-d*v,w=p*g-u*M,z=p*f-d*M,B=u*f-d*g,k=m*B-x*z+y*w+R*F-T*b+A*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=(o*B-l*z+c*w)*I,t[1]=(a*z-i*B-r*w)*I,t[2]=(M*A-g*T+f*R)*I,t[3]=(u*T-p*A-d*R)*I,t[4]=(l*F-s*B-c*b)*I,t[5]=(n*B-a*F+r*b)*I,t[6]=(g*y-v*A-f*x)*I,t[7]=(h*A-u*y+d*x)*I,t[8]=(s*z-o*F+c*_)*I,t[9]=(i*F-n*z-r*_)*I,t[10]=(v*T-M*y+f*m)*I,t[11]=(p*y-h*T-d*m)*I,t[12]=(o*b-s*w-l*_)*I,t[13]=(n*w-i*b+a*_)*I,t[14]=(M*x-v*R-g*m)*I,t[15]=(h*R-p*x+u*m)*I,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,p=o+o,u=r*c,d=r*h,v=r*p,M=s*h,g=s*p,f=o*p,m=l*c,x=l*h,y=l*p,R=i.x,T=i.y,A=i.z;return a[0]=(1-(M+f))*R,a[1]=(d+y)*R,a[2]=(v-x)*R,a[3]=0,a[4]=(d-y)*T,a[5]=(1-(u+f))*T,a[6]=(g+m)*T,a[7]=0,a[8]=(v+x)*A,a[9]=(g-m)*A,a[10]=(1-(u+M))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let s=Dr.set(a[0],a[1],a[2]).length();const o=Dr.set(a[4],a[5],a[6]).length(),l=Dr.set(a[8],a[9],a[10]).length();r<0&&(s=-s),ei.copy(this);const c=1/s,h=1/o,p=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=p,ei.elements[9]*=p,ei.elements[10]*=p,n.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=l,this}makePerspective(t,n,i,a,r,s,o=gi,l=!1){const c=this.elements,h=2*r/(n-t),p=2*r/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a);let v,M;if(l)v=r/(s-r),M=s*r/(s-r);else if(o===gi)v=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(o===Io)v=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=gi,l=!1){const c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a);let v,M;if(l)v=1/(s-r),M=s/(s-r);else if(o===gi)v=-2/(s-r),M=-(s+r)/(s-r);else if(o===Io)v=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Dr=new G,ei=new Te,sb=new G(0,0,0),ob=new G(1,1,1),la=new G,yl=new G,Tn=new G,Og=new Te,Pg=new Fs;class Mi{constructor(t=0,n=0,i=0,a=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Og.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Og,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Pg.setFromEuler(this),this.setFromQuaternion(Pg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class kx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lb=0;const zg=new G,Ur=new Fs,Ni=new Te,Ml=new G,js=new G,cb=new G,ub=new Fs,Fg=new G(1,0,0),Bg=new G(0,1,0),Ig=new G(0,0,1),Hg={type:"added"},fb={type:"removed"},Lr={type:"childadded",child:null},ff={type:"childremoved",child:null};class hn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new G,n=new Mi,i=new Fs,a=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Te},normalMatrix:{value:new Bt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ur.setFromAxisAngle(t,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,n){return Ur.setFromAxisAngle(t,n),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(Fg,t)}rotateY(t){return this.rotateOnAxis(Bg,t)}rotateZ(t){return this.rotateOnAxis(Ig,t)}translateOnAxis(t,n){return zg.copy(t).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Fg,t)}translateY(t){return this.translateOnAxis(Bg,t)}translateZ(t){return this.translateOnAxis(Ig,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ml.copy(t):Ml.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(js,Ml,this.up):Ni.lookAt(Ml,js,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ur.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hg),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(fb),ff.child=t,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hg),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,cb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,ub,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),p=s(t.shapes),u=s(t.skeletons),d=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}hn.DEFAULT_UP=new G(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const M of t.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(db)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ca={h:0,s:0,l:0},bl={h:0,s:0,l:0};function hf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Kt.workingColorSpace){if(t=$E(t,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=hf(s,r,t+1/3),this.g=hf(s,r,t),this.b=hf(s,r,t-1/3)}return Kt.colorSpaceToWorking(this,a),this}setStyle(t,n=Vn){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ut("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Vn){const i=Xx[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return Kt.workingToColorSpace(on.copy(this),t),Math.round(qt(on.r*255,0,255))*65536+Math.round(qt(on.g*255,0,255))*256+Math.round(qt(on.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(on.copy(this),n);const i=on.r,a=on.g,r=on.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=h<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(on.copy(this),n),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Vn){Kt.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,a=on.b;return t!==Vn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ca),this.setHSL(ca.h+t,ca.s+n,ca.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ca),t.getHSL(bl);const i=sf(ca.h,bl.h,n),a=sf(ca.s,bl.s,n),r=sf(ca.l,bl.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new jt;jt.NAMES=Xx;class hb extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ni=new G,Oi=new G,pf=new G,Pi=new G,Nr=new G,Or=new G,Gg=new G,mf=new G,gf=new G,_f=new G,vf=new we,xf=new we,Sf=new we;class ri{constructor(t=new G,n=new G,i=new G){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ni.subVectors(t,n),a.cross(ni);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){ni.subVectors(a,n),Oi.subVectors(i,n),pf.subVectors(t,n);const s=ni.dot(ni),o=ni.dot(Oi),l=ni.dot(pf),c=Oi.dot(Oi),h=Oi.dot(pf),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,d=(c*l-o*h)*u,v=(s*h-o*l)*u;return r.set(1-d-v,v,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(s,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return vf.setScalar(0),xf.setScalar(0),Sf.setScalar(0),vf.fromBufferAttribute(t,n),xf.fromBufferAttribute(t,i),Sf.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(vf,r.x),s.addScaledVector(xf,r.y),s.addScaledVector(Sf,r.z),s}static isFrontFacing(t,n,i,a){return ni.subVectors(i,n),Oi.subVectors(t,n),ni.cross(Oi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ni.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ri.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return ri.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;Nr.subVectors(a,i),Or.subVectors(r,i),mf.subVectors(t,i);const l=Nr.dot(mf),c=Or.dot(mf);if(l<=0&&c<=0)return n.copy(i);gf.subVectors(t,a);const h=Nr.dot(gf),p=Or.dot(gf);if(h>=0&&p<=h)return n.copy(a);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(Nr,s);_f.subVectors(t,r);const d=Nr.dot(_f),v=Or.dot(_f);if(v>=0&&d<=v)return n.copy(r);const M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Or,o);const g=h*v-d*p;if(g<=0&&p-h>=0&&d-v>=0)return Gg.subVectors(r,a),o=(p-h)/(p-h+(d-v)),n.copy(a).addScaledVector(Gg,o);const f=1/(g+M+u);return s=M*f,o=u*f,n.copy(i).addScaledVector(Nr,s).addScaledVector(Or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class tl{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ii.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,ii):ii.fromBufferAttribute(r,s),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(t.matrixWorld),this.union(Tl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Al.subVectors(this.max,Zs),Pr.subVectors(t.a,Zs),zr.subVectors(t.b,Zs),Fr.subVectors(t.c,Zs),ua.subVectors(zr,Pr),fa.subVectors(Fr,zr),qa.subVectors(Pr,Fr);let n=[0,-ua.z,ua.y,0,-fa.z,fa.y,0,-qa.z,qa.y,ua.z,0,-ua.x,fa.z,0,-fa.x,qa.z,0,-qa.x,-ua.y,ua.x,0,-fa.y,fa.x,0,-qa.y,qa.x,0];return!yf(n,Pr,zr,Fr,Al)||(n=[1,0,0,0,1,0,0,0,1],!yf(n,Pr,zr,Fr,Al))?!1:(Rl.crossVectors(ua,fa),n=[Rl.x,Rl.y,Rl.z],yf(n,Pr,zr,Fr,Al))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zi=[new G,new G,new G,new G,new G,new G,new G,new G],ii=new G,Tl=new tl,Pr=new G,zr=new G,Fr=new G,ua=new G,fa=new G,qa=new G,Zs=new G,Al=new G,Rl=new G,Ya=new G;function yf(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Ya.fromArray(e,r);const o=a.x*Math.abs(Ya.x)+a.y*Math.abs(Ya.y)+a.z*Math.abs(Ya.z),l=t.dot(Ya),c=n.dot(Ya),h=i.dot(Ya);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Pe=new G,Cl=new ne;let pb=0;class Si{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rg,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(t),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyMatrix3(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyMatrix4(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyNormalMatrix(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.transformDirection(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array),r=_n(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rg&&(t.usage=this.usage),t}}class Wx extends Si{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class qx extends Si{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Fn extends Si{constructor(t,n,i){super(new Float32Array(t),n,i)}}const mb=new tl,Ks=new G,Mf=new G;class du{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):mb.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ks,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Mf)),this.expandByPoint(Ks.copy(t.center).sub(Mf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let gb=0;const Hn=new Te,Ef=new hn,Br=new G,An=new tl,Qs=new tl,Ye=new G;class Jn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ZE(t)?qx:Wx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,n,i){return Hn.makeTranslation(t,n,i),this.applyMatrix4(Hn),this}scale(t,n,i){return Hn.makeScale(t,n,i),this.applyMatrix4(Hn),this}lookAt(t){return Ef.lookAt(t),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(An.min,Qs.min),An.expandByPoint(Ye),Ye.addVectors(An.max,Qs.max),An.expandByPoint(Ye)):(An.expandByPoint(Qs.min),An.expandByPoint(Qs.max))}An.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ye.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ye));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(t,c),Ye.add(Br)),a=Math.max(a,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new G,l[_]=new G;const c=new G,h=new G,p=new G,u=new ne,d=new ne,v=new ne,M=new G,g=new G;function f(_,b,F){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,b),p.fromBufferAttribute(i,F),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),v.fromBufferAttribute(r,F),h.sub(c),p.sub(c),d.sub(u),v.sub(u);const w=1/(d.x*v.y-v.x*d.y);isFinite(w)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(w),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(w),o[_].add(M),o[b].add(M),o[F].add(M),l[_].add(g),l[b].add(g),l[F].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let _=0,b=m.length;_<b;++_){const F=m[_],w=F.start,z=F.count;for(let B=w,k=w+z;B<k;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new G,y=new G,R=new G,T=new G;function A(_){R.fromBufferAttribute(a,_),T.copy(R);const b=o[_];x.copy(b),x.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(T,b);const w=y.dot(l[_])<0?-1:1;s.setXYZW(_,x.x,x.y,x.z,w)}for(let _=0,b=m.length;_<b;++_){const F=m[_],w=F.start,z=F.count;for(let B=w,k=w+z;B<k;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const a=new G,r=new G,s=new G,o=new G,l=new G,c=new G,h=new G,p=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){const v=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,g),h.subVectors(s,r),p.subVectors(a,r),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),h.subVectors(s,r),p.subVectors(a,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ye.fromBufferAttribute(t,n),Ye.normalize(),t.setXYZ(n,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let d=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let f=0;f<h;f++)u[v++]=c[d++]}return new Si(u,h,p)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,h=s.length;c<h;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _b=0;class Bs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=us,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ut(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==Ha&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nd&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Fi=new G,bf=new G,wl=new G,da=new G,Tf=new G,Dl=new G,Af=new G;class Yx{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Fi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){bf.copy(t).add(n).multiplyScalar(.5),wl.copy(n).sub(t).normalize(),da.copy(this.origin).sub(bf);const r=t.distanceTo(n)*.5,s=-this.direction.dot(wl),o=da.dot(this.direction),l=-da.dot(wl),c=da.lengthSq(),h=Math.abs(1-s*s);let p,u,d,v;if(h>0)if(p=s*l-o,u=s*o-l,v=r*h,p>=0)if(u>=-v)if(u<=v){const M=1/h;p*=M,u*=M,d=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(bf).addScaledVector(wl,u),d}intersectSphere(t,n){Fi.subVectors(t.center,this.origin);const i=Fi.dot(this.direction),a=Fi.dot(Fi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,s=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,s=(t.min.y-u.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,n,i,a,r){Tf.subVectors(n,t),Dl.subVectors(i,t),Af.crossVectors(Tf,Dl);let s=this.direction.dot(Af),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;da.subVectors(this.origin,t);const l=o*this.direction.dot(Dl.crossVectors(da,Dl));if(l<0)return null;const c=o*this.direction.dot(Tf.cross(da));if(c<0||l+c>s)return null;const h=-o*da.dot(Af);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jx extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Vg=new Te,ja=new Yx,Ul=new du,kg=new G,Ll=new G,Nl=new G,Ol=new G,Rf=new G,Pl=new G,Xg=new G,zl=new G;class Ei extends hn{constructor(t=new Jn,n=new jx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){Pl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],p=r[l];h!==0&&(Rf.fromBufferAttribute(p,t),s?Pl.addScaledVector(Rf,h):Pl.addScaledVector(Rf.sub(n),h))}n.add(Pl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),ja.copy(t.ray).recast(t.near),!(Ul.containsPoint(ja.origin)===!1&&(ja.intersectSphere(Ul,kg)===null||ja.origin.distanceToSquared(kg)>(t.far-t.near)**2))&&(Vg.copy(r).invert(),ja.copy(t.ray).applyMatrix4(Vg),!(i.boundingBox!==null&&ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ja)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,M=u.length;v<M;v++){const g=u[v],f=s[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,R=x;y<R;y+=3){const T=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);a=Fl(this,f,t,i,c,h,p,T,A,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=v,f=M;g<f;g+=3){const m=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);a=Fl(this,s,t,i,c,h,p,m,x,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,M=u.length;v<M;v++){const g=u[v],f=s[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,R=x;y<R;y+=3){const T=y,A=y+1,_=y+2;a=Fl(this,f,t,i,c,h,p,T,A,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=v,f=M;g<f;g+=3){const m=g,x=g+1,y=g+2;a=Fl(this,s,t,i,c,h,p,m,x,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function vb(e,t,n,i,a,r,s,o){let l;if(t.side===yn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ha,o),l===null)return null;zl.copy(o),zl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(zl);return c<n.near||c>n.far?null:{distance:c,point:zl.clone(),object:e}}function Fl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,Ll),e.getVertexPosition(l,Nl),e.getVertexPosition(c,Ol);const h=vb(e,t,n,i,Ll,Nl,Ol,Xg);if(h){const p=new G;ri.getBarycoord(Xg,Ll,Nl,Ol,p),a&&(h.uv=ri.getInterpolatedAttribute(a,o,l,c,p,new ne)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,p,new ne)),s&&(h.normal=ri.getInterpolatedAttribute(s,o,l,c,p,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};ri.getNormal(Ll,Nl,Ol,u.normal),h.face=u,h.barycoord=p}return h}class xb extends dn{constructor(t=null,n=1,i=1,a,r,s,o,l,c=nn,h=nn,p,u){super(null,s,o,l,c,h,a,r,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new G,Sb=new G,yb=new Bt;class ir{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Cf.subVectors(i,n).cross(Sb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Cf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||yb.getNormalMatrix(t),a=this.coplanarPoint(Cf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Za=new du,Mb=new ne(.5,.5),Bl=new G;class Fp{constructor(t=new ir,n=new ir,i=new ir,a=new ir,r=new ir,s=new ir){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=gi,i=!1){const a=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],v=r[8],M=r[9],g=r[10],f=r[11],m=r[12],x=r[13],y=r[14],R=r[15];if(a[0].setComponents(c-s,d-h,f-v,R-m).normalize(),a[1].setComponents(c+s,d+h,f+v,R+m).normalize(),a[2].setComponents(c+o,d+p,f+M,R+x).normalize(),a[3].setComponents(c-o,d-p,f-M,R-x).normalize(),i)a[4].setComponents(l,u,g,y).normalize(),a[5].setComponents(c-l,d-u,f-g,R-y).normalize();else if(a[4].setComponents(c-l,d-u,f-g,R-y).normalize(),n===gi)a[5].setComponents(c+l,d+u,f+g,R+y).normalize();else if(n===Io)a[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Za)}intersectsSprite(t){Za.center.set(0,0,0);const n=Mb.distanceTo(t.center);return Za.radius=.7071067811865476+n,Za.applyMatrix4(t.matrixWorld),this.intersectsSphere(Za)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Bl.x=a.normal.x>0?t.max.x:t.min.x,Bl.y=a.normal.y>0?t.max.y:t.min.y,Bl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zx extends Bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xc=new G,Wc=new G,Wg=new Te,Js=new Yx,Il=new du,wf=new G,qg=new G;class Eb extends hn{constructor(t=new Jn,n=new Zx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,r=n.count;a<r;a++)Xc.fromBufferAttribute(n,a-1),Wc.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Xc.distanceTo(Wc);t.setAttribute("lineDistance",new Fn(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,r=t.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(a),Il.radius+=r,t.ray.intersectsSphere(Il)===!1)return;Wg.copy(a).invert(),Js.copy(t.ray).applyMatrix4(Wg);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,s.start),v=Math.min(h.count,s.start+s.count);for(let M=d,g=v-1;M<g;M+=c){const f=h.getX(M),m=h.getX(M+1),x=Hl(this,t,Js,l,f,m,M);x&&n.push(x)}if(this.isLineLoop){const M=h.getX(v-1),g=h.getX(d),f=Hl(this,t,Js,l,M,g,v-1);f&&n.push(f)}}else{const d=Math.max(0,s.start),v=Math.min(u.count,s.start+s.count);for(let M=d,g=v-1;M<g;M+=c){const f=Hl(this,t,Js,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){const M=Hl(this,t,Js,l,v-1,d,v-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hl(e,t,n,i,a,r,s){const o=e.geometry.attributes.position;if(Xc.fromBufferAttribute(o,a),Wc.fromBufferAttribute(o,r),n.distanceSqToSegment(Xc,Wc,wf,qg)>i)return;wf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(wf);if(!(c<t.near||c>t.far))return{distance:c,point:qg.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}class Kx extends dn{constructor(t=[],n=vr,i,a,r,s,o,l,c,h){super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ho extends dn{constructor(t,n,i=yi,a,r,s,o=nn,l=nn,c,h=ia,p=1){if(h!==ia&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:p};super(u,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bb extends Ho{constructor(t,n=yi,i=vr,a,r,s=nn,o=nn,l,c=ia){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qx extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class el extends Jn{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],p=[];let u=0,d=0;v("z","y","x",-1,-1,i,n,t,s,r,0),v("z","y","x",1,-1,i,n,-t,s,r,1),v("x","z","y",1,1,t,i,n,a,s,2),v("x","z","y",1,-1,t,i,-n,a,s,3),v("x","y","z",1,-1,t,n,i,a,r,4),v("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(h,3)),this.setAttribute("uv",new Fn(p,2));function v(M,g,f,m,x,y,R,T,A,_,b){const F=y/A,w=R/_,z=y/2,B=R/2,k=T/2,I=A+1,D=_+1;let L=0,q=0;const Z=new G;for(let nt=0;nt<D;nt++){const pt=nt*w-B;for(let dt=0;dt<I;dt++){const Lt=dt*F-z;Z[M]=Lt*m,Z[g]=pt*x,Z[f]=k,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[g]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(dt/A),p.push(1-nt/_),L+=1}}for(let nt=0;nt<_;nt++)for(let pt=0;pt<A;pt++){const dt=u+pt+I*nt,Lt=u+pt+I*(nt+1),Qt=u+(pt+1)+I*(nt+1),ie=u+(pt+1)+I*nt;l.push(dt,Lt,ie),l.push(Lt,Qt,ie),q+=6}o.addGroup(d,q,b),d+=q,u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class hu extends Jn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,d=[],v=[],M=[],g=[];for(let f=0;f<h;f++){const m=f*u-s;for(let x=0;x<c;x++){const y=x*p-r;v.push(y,-m,0),M.push(0,0,1),g.push(x/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const x=m+c*f,y=m+c*(f+1),R=m+1+c*(f+1),T=m+1+c*f;d.push(x,y,T),d.push(y,R,T)}this.setIndex(d),this.setAttribute("position",new Fn(v,3)),this.setAttribute("normal",new Fn(M,3)),this.setAttribute("uv",new Fn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bp extends Jn{constructor(t=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],p=new G,u=new G,d=[],v=[],M=[],g=[];for(let f=0;f<=i;f++){const m=[],x=f/i;let y=0;f===0&&s===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let R=0;R<=n;R++){const T=R/n;p.x=-t*Math.cos(a+T*r)*Math.sin(s+x*o),p.y=t*Math.cos(s+x*o),p.z=t*Math.sin(a+T*r)*Math.sin(s+x*o),v.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),g.push(T+y,1-x),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const x=h[f][m+1],y=h[f][m],R=h[f+1][m],T=h[f+1][m+1];(f!==0||s>0)&&d.push(x,y,T),(f!==i-1||l<Math.PI)&&d.push(y,R,T)}this.setIndex(d),this.setAttribute("position",new Fn(v,3)),this.setAttribute("normal",new Fn(M,3)),this.setAttribute("uv",new Fn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Rs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function cn(e){const t={};for(let n=0;n<e.length;n++){const i=Rs(e[n]);for(const a in i)t[a]=i[a]}return t}function Tb(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jx(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Ab={clone:Rs,merge:cn};var Rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rb,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Tb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wb extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Db extends Bs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new jt(16777215),this.specular=new jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hx,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Rp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ub extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lb extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $x extends hn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Df=new Te,Yg=new G,jg=new G;class Nb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fp,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Yg.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yg),jg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(jg),n.updateMatrixWorld(),Df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Io||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Df)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gl=new G,Vl=new Fs,ci=new G;class tS extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gl,Vl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,ci.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Gl,Vl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ha=new G,Zg=new ne,Kg=new ne;class wn extends tS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Mh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ha.x,ha.y).multiplyScalar(-t/ha.z),ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ha.x,ha.y).multiplyScalar(-t/ha.z)}getViewSize(t,n){return this.getViewBounds(t,Zg,Kg),n.subVectors(Kg,Zg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(rf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ob extends Nb{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class Pb extends $x{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Ob}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class eS extends tS{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zb extends $x{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ir=-90,Hr=1;class Fb extends hn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wn(Ir,Hr,t,n);a.layers=this.layers,this.add(a);const r=new wn(Ir,Hr,t,n);r.layers=this.layers,this.add(r);const s=new wn(Ir,Hr,t,n);s.layers=this.layers,this.add(s);const o=new wn(Ir,Hr,t,n);o.layers=this.layers,this.add(o);const l=new wn(Ir,Hr,t,n);l.layers=this.layers,this.add(l);const c=new wn(Ir,Hr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Bb extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Qg(e,t,n,i){const a=Ib(i);switch(n){case Fx:return e*t;case Ix:return e*t/a.components*a.byteLength;case Up:return e*t/a.components*a.byteLength;case Ts:return e*t*2/a.components*a.byteLength;case Lp:return e*t*2/a.components*a.byteLength;case Bx:return e*t*3/a.components*a.byteLength;case si:return e*t*4/a.components*a.byteLength;case Np:return e*t*4/a.components*a.byteLength;case oc:case lc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cc:case uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wd:case Yd:return Math.max(e,16)*Math.max(t,8)/4;case Xd:case qd:return Math.max(e,8)*Math.max(t,8)/2;case jd:case Zd:case Qd:case Jd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Kd:case $d:case th:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ah:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case rh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case sh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case oh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case lh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ch:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case uh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case fh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case mh:case gh:case _h:return Math.ceil(e/4)*Math.ceil(t/4)*16;case vh:case xh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Sh:case yh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ib(e){switch(e){case Un:case Nx:return{byteLength:1,components:1};case Fo:case Ox:case na:return{byteLength:2,components:1};case wp:case Dp:return{byteLength:2,components:4};case yi:case Cp:case mi:return{byteLength:4,components:1};case Px:case zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nS(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Hb(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){const v=p[u],M=p[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){const M=p[d];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$b=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",vT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:Gb,alphahash_pars_fragment:Vb,alphamap_fragment:kb,alphamap_pars_fragment:Xb,alphatest_fragment:Wb,alphatest_pars_fragment:qb,aomap_fragment:Yb,aomap_pars_fragment:jb,batching_pars_vertex:Zb,batching_vertex:Kb,begin_vertex:Qb,beginnormal_vertex:Jb,bsdfs:$b,iridescence_fragment:tT,bumpmap_pars_fragment:eT,clipping_planes_fragment:nT,clipping_planes_pars_fragment:iT,clipping_planes_pars_vertex:aT,clipping_planes_vertex:rT,color_fragment:sT,color_pars_fragment:oT,color_pars_vertex:lT,color_vertex:cT,common:uT,cube_uv_reflection_fragment:fT,defaultnormal_vertex:dT,displacementmap_pars_vertex:hT,displacementmap_vertex:pT,emissivemap_fragment:mT,emissivemap_pars_fragment:gT,colorspace_fragment:_T,colorspace_pars_fragment:vT,envmap_fragment:xT,envmap_common_pars_fragment:ST,envmap_pars_fragment:yT,envmap_pars_vertex:MT,envmap_physical_pars_fragment:NT,envmap_vertex:ET,fog_vertex:bT,fog_pars_vertex:TT,fog_fragment:AT,fog_pars_fragment:RT,gradientmap_pars_fragment:CT,lightmap_pars_fragment:wT,lights_lambert_fragment:DT,lights_lambert_pars_fragment:UT,lights_pars_begin:LT,lights_toon_fragment:OT,lights_toon_pars_fragment:PT,lights_phong_fragment:zT,lights_phong_pars_fragment:FT,lights_physical_fragment:BT,lights_physical_pars_fragment:IT,lights_fragment_begin:HT,lights_fragment_maps:GT,lights_fragment_end:VT,logdepthbuf_fragment:kT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:WT,logdepthbuf_vertex:qT,map_fragment:YT,map_pars_fragment:jT,map_particle_fragment:ZT,map_particle_pars_fragment:KT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:JT,morphinstance_vertex:$T,morphcolor_vertex:t1,morphnormal_vertex:e1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:a1,normal_fragment_maps:r1,normal_pars_fragment:s1,normal_pars_vertex:o1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:d1,iridescence_pars_fragment:h1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:_1,dithering_fragment:v1,dithering_pars_fragment:x1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:E1,shadowmap_vertex:b1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:w1,specularmap_fragment:D1,specularmap_pars_fragment:U1,tonemapping_fragment:L1,tonemapping_pars_fragment:N1,transmission_fragment:O1,transmission_pars_fragment:P1,uv_pars_fragment:z1,uv_pars_vertex:F1,uv_vertex:B1,worldpos_vertex:I1,background_vert:H1,background_frag:G1,backgroundCube_vert:V1,backgroundCube_frag:k1,cube_vert:X1,cube_frag:W1,depth_vert:q1,depth_frag:Y1,distance_vert:j1,distance_frag:Z1,equirect_vert:K1,equirect_frag:Q1,linedashed_vert:J1,linedashed_frag:$1,meshbasic_vert:tA,meshbasic_frag:eA,meshlambert_vert:nA,meshlambert_frag:iA,meshmatcap_vert:aA,meshmatcap_frag:rA,meshnormal_vert:sA,meshnormal_frag:oA,meshphong_vert:lA,meshphong_frag:cA,meshphysical_vert:uA,meshphysical_frag:fA,meshtoon_vert:dA,meshtoon_frag:hA,points_vert:pA,points_frag:mA,shadow_vert:gA,shadow_frag:_A,sprite_vert:vA,sprite_frag:xA},ct={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},fi={basic:{uniforms:cn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:cn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:cn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:cn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:cn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:cn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:cn([ct.points,ct.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:cn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:cn([ct.common,ct.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:cn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:cn([ct.sprite,ct.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:cn([ct.common,ct.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:cn([ct.lights,ct.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};fi.physical={uniforms:cn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const kl={r:0,b:0,g:0},Ka=new Mi,SA=new Te;function yA(e,t,n,i,a,r){const s=new jt(0);let o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const y=m.backgroundBlurriness>0;x=t.get(x,y)}return x}function v(m){let x=!1;const y=d(m);y===null?g(s,o):y&&y.isColor&&(g(y,1),x=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,x){const y=d(x);y&&(y.isCubeTexture||y.mapping===fu)?(c===void 0&&(c=new Ei(new el(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Rs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ka.copy(x.backgroundRotation),Ka.x*=-1,Ka.y*=-1,Ka.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ka.y*=-1,Ka.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Ka)),c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==oe,(h!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ei(new hu(2,2),new bi({name:"BackgroundMaterial",uniforms:Rs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(kl,Jx(e)),n.buffers.color.setClear(kl.r,kl.g,kl.b,x,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(m,x=1){s.set(m),o=x,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(s,o)},render:v,addToRenderList:M,dispose:f}}function MA(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(w,z,B,k,I){let D=!1;const L=p(w,k,B,z);r!==L&&(r=L,c(r.object)),D=d(w,k,B,I),D&&v(w,k,B,I),I!==null&&t.update(I,e.ELEMENT_ARRAY_BUFFER),(D||s)&&(s=!1,y(w,z,B,k),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return e.createVertexArray()}function c(w){return e.bindVertexArray(w)}function h(w){return e.deleteVertexArray(w)}function p(w,z,B,k){const I=k.wireframe===!0;let D=i[z.id];D===void 0&&(D={},i[z.id]=D);const L=w.isInstancedMesh===!0?w.id:0;let q=D[L];q===void 0&&(q={},D[L]=q);let Z=q[B.id];Z===void 0&&(Z={},q[B.id]=Z);let nt=Z[I];return nt===void 0&&(nt=u(l()),Z[I]=nt),nt}function u(w){const z=[],B=[],k=[];for(let I=0;I<n;I++)z[I]=0,B[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:k,object:w,attributes:{},index:null}}function d(w,z,B,k){const I=r.attributes,D=z.attributes;let L=0;const q=B.getAttributes();for(const Z in q)if(q[Z].location>=0){const pt=I[Z];let dt=D[Z];if(dt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),pt===void 0||pt.attribute!==dt||dt&&pt.data!==dt.data)return!0;L++}return r.attributesNum!==L||r.index!==k}function v(w,z,B,k){const I={},D=z.attributes;let L=0;const q=B.getAttributes();for(const Z in q)if(q[Z].location>=0){let pt=D[Z];pt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor));const dt={};dt.attribute=pt,pt&&pt.data&&(dt.data=pt.data),I[Z]=dt,L++}r.attributes=I,r.attributesNum=L,r.index=k}function M(){const w=r.newAttributes;for(let z=0,B=w.length;z<B;z++)w[z]=0}function g(w){f(w,0)}function f(w,z){const B=r.newAttributes,k=r.enabledAttributes,I=r.attributeDivisors;B[w]=1,k[w]===0&&(e.enableVertexAttribArray(w),k[w]=1),I[w]!==z&&(e.vertexAttribDivisor(w,z),I[w]=z)}function m(){const w=r.newAttributes,z=r.enabledAttributes;for(let B=0,k=z.length;B<k;B++)z[B]!==w[B]&&(e.disableVertexAttribArray(B),z[B]=0)}function x(w,z,B,k,I,D,L){L===!0?e.vertexAttribIPointer(w,z,B,I,D):e.vertexAttribPointer(w,z,B,k,I,D)}function y(w,z,B,k){M();const I=k.attributes,D=B.getAttributes(),L=z.defaultAttributeValues;for(const q in D){const Z=D[q];if(Z.location>=0){let nt=I[q];if(nt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor)),nt!==void 0){const pt=nt.normalized,dt=nt.itemSize,Lt=t.get(nt);if(Lt===void 0)continue;const Qt=Lt.buffer,ie=Lt.type,Q=Lt.bytesPerElement,rt=ie===e.INT||ie===e.UNSIGNED_INT||nt.gpuType===Cp;if(nt.isInterleavedBufferAttribute){const lt=nt.data,Ft=lt.stride,Rt=nt.offset;if(lt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Z.locationSize;Dt++)f(Z.location+Dt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)g(Z.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let Dt=0;Dt<Z.locationSize;Dt++)x(Z.location+Dt,dt/Z.locationSize,ie,pt,Ft*Q,(Rt+dt/Z.locationSize*Dt)*Q,rt)}else{if(nt.isInstancedBufferAttribute){for(let lt=0;lt<Z.locationSize;lt++)f(Z.location+lt,nt.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let lt=0;lt<Z.locationSize;lt++)g(Z.location+lt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let lt=0;lt<Z.locationSize;lt++)x(Z.location+lt,dt/Z.locationSize,ie,pt,dt*Q,dt/Z.locationSize*lt*Q,rt)}}else if(L!==void 0){const pt=L[q];if(pt!==void 0)switch(pt.length){case 2:e.vertexAttrib2fv(Z.location,pt);break;case 3:e.vertexAttrib3fv(Z.location,pt);break;case 4:e.vertexAttrib4fv(Z.location,pt);break;default:e.vertexAttrib1fv(Z.location,pt)}}}}m()}function R(){b();for(const w in i){const z=i[w];for(const B in z){const k=z[B];for(const I in k){const D=k[I];for(const L in D)h(D[L].object),delete D[L];delete k[I]}}delete i[w]}}function T(w){if(i[w.id]===void 0)return;const z=i[w.id];for(const B in z){const k=z[B];for(const I in k){const D=k[I];for(const L in D)h(D[L].object),delete D[L];delete k[I]}}delete i[w.id]}function A(w){for(const z in i){const B=i[z];for(const k in B){const I=B[k];if(I[w.id]===void 0)continue;const D=I[w.id];for(const L in D)h(D[L].object),delete D[L];delete I[w.id]}}}function _(w){for(const z in i){const B=i[z],k=w.isInstancedMesh===!0?w.id:0,I=B[k];if(I!==void 0){for(const D in I){const L=I[D];for(const q in L)h(L[q].object),delete L[q];delete I[D]}delete B[k],Object.keys(B).length===0&&delete i[z]}}}function b(){F(),s=!0,r!==a&&(r=a,c(r.object))}function F(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function EA(e,t,n){let i;function a(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,p){p!==0&&(e.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let d=0;for(let v=0;v<p;v++)d+=h[v];n.update(d,i,1)}function l(c,h,p,u){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)s(c[v],h[v],u[v]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,p);let v=0;for(let M=0;M<p;M++)v+=h[M]*u[M];n.update(v,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bA(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==si&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Un&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mi&&!_)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,maxSamples:R,samples:T}}function TA(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new ir,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){const v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||v===null||v.length===0||r&&!g)r?h(null):c();else{const m=r?0:i,x=m*4;let y=f.clippingState||null;l.value=y,y=h(v,u,x,d);for(let R=0;R!==x;++R)y[R]=n[R];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,v){const M=p!==null?p.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const f=d+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,y=d;x!==M;++x,y+=4)s.copy(p[x]).applyMatrix4(m,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const Aa=4,Jg=[.125,.215,.35,.446,.526,.582],rr=20,AA=256,$s=new eS,$g=new jt;let Uf=null,Lf=0,Nf=0,Of=!1;const RA=new G;class t0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=RA}=r;Uf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uf,Lf,Nf),this._renderer.xr.enabled=Of,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vr||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:na,format:si,colorSpace:As,depthBuffer:!1},a=e0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CA(r)),this._blurMaterial=DA(r,t,n),this._ggxMaterial=wA(r,t,n)}return a}_compileMaterial(t){const n=new Ei(new Jn,t);this._renderer.compile(n,$s)}_sceneToCubeUV(t,n,i,a,r){const l=new wn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor($g),p.toneMapping=vi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ei(new el,new jx({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy($g),f=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const R=this._cubeSize;Gr(a,y*R,x>2?R:0,R,R),p.setRenderTarget(a),f&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===vr||t.mapping===bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Gr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,$s)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,d=p*u,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-Aa?i-v+Aa:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,Gr(r,g,f,3*M,2*M),a.setRenderTarget(r),a.render(o,$s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,Gr(t,g,f,3*M,2*M),a.setRenderTarget(t),a.render(o,$s)}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&$t("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rr-1),M=r/v,g=isFinite(r)?1+Math.floor(h*M):rr;g>rr&&Ut(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${rr}`);const f=[];let m=0;for(let A=0;A<rr;++A){const _=A/M,b=Math.exp(-_*_/2);f.push(b),A===0?m+=b:A<g&&(m+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=v,u.mipInt.value=x-i;const y=this._sizeLods[a],R=3*y*(a>x-Aa?a-x+Aa:0),T=4*(this._cubeSize-y);Gr(n,R,T,3*y,2*y),l.setRenderTarget(n),l.render(p,$s)}}function CA(e){const t=[],n=[],i=[];let a=e;const r=e-Aa+1+Jg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);t.push(o);let l=1/o;s>e-Aa?l=Jg[s-e+Aa-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,v=6,M=3,g=2,f=1,m=new Float32Array(M*v*d),x=new Float32Array(g*v*d),y=new Float32Array(f*v*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,_=T>2?0:-1,b=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];m.set(b,M*v*T),x.set(u,g*v*T);const F=[T,T,T,T,T,T];y.set(F,f*v*T)}const R=new Jn;R.setAttribute("position",new Si(m,M)),R.setAttribute("uv",new Si(x,g)),R.setAttribute("faceIndex",new Si(y,f)),i.push(new Ei(R,null)),a>Aa&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function e0(e,t,n){const i=new xi(e,t,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function wA(e,t,n){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function DA(e,t,n){const i=new Float32Array(rr),a=new G(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function n0(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function i0(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class iS extends xi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Kx(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new el(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Zi});r.uniforms.tEquirect.value=n;const s=new Ei(a,r),o=n.minFilter;return n.minFilter===sr&&(n.minFilter=ln),new Fb(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}function UA(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?s(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===ef||d===nf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const M=new iS(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const d=u.mapping,v=d===ef||d===nf,M=d===vr||d===bs;if(v||M){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new t0(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new t0(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===ef?u.mapping=vr:d===nf&&(u.mapping=bs),u}function l(u){let d=0;const v=6;for(let M=0;M<v;M++)u[M]!==void 0&&d++;return d===v}function c(u){const d=u.target;d.removeEventListener("dispose",c);const v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function LA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&kc("WebGLRenderer: "+i+" extension not supported."),a}}}function NA(e,t,n,i){const a={},r=new WeakMap;function s(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){const u=[],d=p.index,v=p.attributes.position;let M=0;if(v===void 0)return;if(d!==null){const m=d.array;M=d.version;for(let x=0,y=m.length;x<y;x+=3){const R=m[x+0],T=m[x+1],A=m[x+2];u.push(R,T,T,A,A,R)}}else{const m=v.array;M=v.version;for(let x=0,y=m.length/3-1;x<y;x+=3){const R=x+0,T=x+1,A=x+2;u.push(R,T,T,A,A,R)}}const g=new(v.count>=65535?qx:Wx)(u,1);g.version=M;const f=r.get(p);f&&t.remove(f),r.set(p,g)}function h(p){const u=r.get(p);if(u){const d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function OA(e,t,n){let i;function a(u){i=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function l(u,d){e.drawElements(i,d,r,u*s),n.update(d,i,1)}function c(u,d,v){v!==0&&(e.drawElementsInstanced(i,d,r,u*s,v),n.update(d,i,v))}function h(u,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,v);let g=0;for(let f=0;f<v;f++)g+=d[f];n.update(g,i,1)}function p(u,d,v,M){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<u.length;f++)c(u[f]/s,d[f],M[f]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,M,0,v);let f=0;for(let m=0;m<v;m++)f+=d[m]*M[m];n.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function PA(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:$t("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function zA(e,t,n){const i=new WeakMap,a=new we;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let F=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var d=F;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let R=o.attributes.position.count*y,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*T*4*p),_=new Vx(A,R,T,p);_.type=mi,_.needsUpdate=!0;const b=y*4;for(let w=0;w<p;w++){const z=f[w],B=m[w],k=x[w],I=R*T*4*w;for(let D=0;D<z.count;D++){const L=D*b;v===!0&&(a.fromBufferAttribute(z,D),A[I+L+0]=a.x,A[I+L+1]=a.y,A[I+L+2]=a.z,A[I+L+3]=0),M===!0&&(a.fromBufferAttribute(B,D),A[I+L+4]=a.x,A[I+L+5]=a.y,A[I+L+6]=a.z,A[I+L+7]=0),g===!0&&(a.fromBufferAttribute(k,D),A[I+L+8]=a.x,A[I+L+9]=a.y,A[I+L+10]=a.z,A[I+L+11]=k.itemSize===4?a.w:1)}}u={count:p,texture:_,size:new ne(R,T)},i.set(o,u),o.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function FA(e,t,n,i,a){let r=new WeakMap;function s(c){const h=a.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:s,dispose:o}}const BA={[Tx]:"LINEAR_TONE_MAPPING",[Ax]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Cx]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Ux]:"NEUTRAL_TONE_MAPPING",[wx]:"CUSTOM_TONE_MAPPING"};function IA(e,t,n,i,a){const r=new xi(t,n,{type:e,depthBuffer:i,stencilBuffer:a}),s=new xi(t,n,{type:na,depthBuffer:!1,stencilBuffer:!1}),o=new Jn;o.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const l=new wb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ei(o,l),h=new eS(-1,1,1,-1,0,1);let p=null,u=null,d=!1,v,M=null,g=[],f=!1;this.setSize=function(m,x){r.setSize(m,x),s.setSize(m,x);for(let y=0;y<g.length;y++){const R=g[y];R.setSize&&R.setSize(m,x)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const x=r.width,y=r.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(x,y)}},this.begin=function(m,x){if(d||m.toneMapping===vi&&g.length===0)return!1;if(M=x,x!==null){const y=x.width,R=x.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return f===!1&&m.setRenderTarget(r),v=m.toneMapping,m.toneMapping=vi,!0},this.hasRenderPass=function(){return f},this.end=function(m,x){m.toneMapping=v,d=!0;let y=r,R=s;for(let T=0;T<g.length;T++){const A=g[T];if(A.enabled!==!1&&(A.render(m,R,y,x),A.needsSwap!==!1)){const _=y;y=R,R=_}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},Kt.getTransfer(p)===oe&&(l.defines.SRGB_TRANSFER="");const T=BA[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,m.setRenderTarget(M),m.render(c,h),M=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),s.dispose(),o.dispose(),l.dispose()}}const aS=new dn,Eh=new Ho(1,1),rS=new Vx,sS=new rb,oS=new Kx,a0=[],r0=[],s0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function Is(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=a0[a];if(r===void 0&&(r=new Float32Array(a),a0[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Xe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function mu(e,t){let n=r0[t];n===void 0&&(n=new Int32Array(t),r0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function HA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function GA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2fv(this.addr,t),Xe(n,t)}}function VA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ke(n,t))return;e.uniform3fv(this.addr,t),Xe(n,t)}}function kA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4fv(this.addr,t),Xe(n,t)}}function XA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xe(n,t)}else{if(ke(n,i))return;l0.set(i),e.uniformMatrix2fv(this.addr,!1,l0),Xe(n,i)}}function WA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xe(n,t)}else{if(ke(n,i))return;o0.set(i),e.uniformMatrix3fv(this.addr,!1,o0),Xe(n,i)}}function qA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xe(n,t)}else{if(ke(n,i))return;s0.set(i),e.uniformMatrix4fv(this.addr,!1,s0),Xe(n,i)}}function YA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2iv(this.addr,t),Xe(n,t)}}function ZA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3iv(this.addr,t),Xe(n,t)}}function KA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4iv(this.addr,t),Xe(n,t)}}function QA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function JA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2uiv(this.addr,t),Xe(n,t)}}function $A(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3uiv(this.addr,t),Xe(n,t)}}function tR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4uiv(this.addr,t),Xe(n,t)}}function eR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Eh.compareFunction=n.isReversedDepthBuffer()?Pp:Op,r=Eh):r=aS,n.setTexture2D(t||r,a)}function nR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||sS,a)}function iR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||oS,a)}function aR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||rS,a)}function rR(e){switch(e){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return kA;case 35674:return XA;case 35675:return WA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return jA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return $A;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return aR}}function sR(e,t){e.uniform1fv(this.addr,t)}function oR(e,t){const n=Is(t,this.size,2);e.uniform2fv(this.addr,n)}function lR(e,t){const n=Is(t,this.size,3);e.uniform3fv(this.addr,n)}function cR(e,t){const n=Is(t,this.size,4);e.uniform4fv(this.addr,n)}function uR(e,t){const n=Is(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fR(e,t){const n=Is(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dR(e,t){const n=Is(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function hR(e,t){e.uniform1iv(this.addr,t)}function pR(e,t){e.uniform2iv(this.addr,t)}function mR(e,t){e.uniform3iv(this.addr,t)}function gR(e,t){e.uniform4iv(this.addr,t)}function _R(e,t){e.uniform1uiv(this.addr,t)}function vR(e,t){e.uniform2uiv(this.addr,t)}function xR(e,t){e.uniform3uiv(this.addr,t)}function SR(e,t){e.uniform4uiv(this.addr,t)}function yR(e,t,n){const i=this.cache,a=t.length,r=mu(n,a);ke(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));let s;this.type===e.SAMPLER_2D_SHADOW?s=Eh:s=aS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||s,r[o])}function MR(e,t,n){const i=this.cache,a=t.length,r=mu(n,a);ke(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||sS,r[s])}function ER(e,t,n){const i=this.cache,a=t.length,r=mu(n,a);ke(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||oS,r[s])}function bR(e,t,n){const i=this.cache,a=t.length,r=mu(n,a);ke(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||rS,r[s])}function TR(e){switch(e){case 5126:return sR;case 35664:return oR;case 35665:return lR;case 35666:return cR;case 35674:return uR;case 35675:return fR;case 35676:return dR;case 5124:case 35670:return hR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return bR}}class AR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rR(n.type)}}class RR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TR(n.type)}}class CR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function c0(e,t){e.seq.push(t),e.map[t.id]=t}function wR(e,t,n){const i=e.name,a=i.length;for(Pf.lastIndex=0;;){const r=Pf.exec(i),s=Pf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){c0(n,c===void 0?new AR(o,e,t):new RR(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new CR(o),c0(n,p)),n=p}}}class fc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(n,s),l=t.getUniformLocation(n,o.name);wR(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function u0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const DR=37297;let UR=0;function LR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const f0=new Bt;function NR(e){Kt._getMatrix(f0,Kt.workingColorSpace,e);const t=`mat3( ${f0.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case Gc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function d0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LR(e.getShaderSource(t),o)}else return r}function OR(e,t){const n=NR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const PR={[Tx]:"Linear",[Ax]:"Reinhard",[Rx]:"Cineon",[Cx]:"ACESFilmic",[Dx]:"AgX",[Ux]:"Neutral",[wx]:"Custom"};function zR(e,t){const n=PR[t];return n===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xl=new G;function FR(){Kt.getLuminanceCoefficients(Xl);const e=Xl.x.toFixed(4),t=Xl.y.toFixed(4),n=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function IR(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function HR(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function oo(e){return e!==""}function h0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(e){return e.replace(GR,kR)}const VR=new Map;function kR(e,t){let n=It[t];if(n===void 0){const i=VR.get(t);if(i!==void 0)n=It[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bh(n)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(e){return e.replace(XR,WR)}function WR(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function g0(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const qR={[sc]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function YR(e){return qR[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jR={[vr]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function ZR(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":jR[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const KR={[bs]:"ENVMAP_MODE_REFRACTION"};function QR(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":KR[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JR={[Rp]:"ENVMAP_BLENDING_MULTIPLY",[BE]:"ENVMAP_BLENDING_MIX",[IE]:"ENVMAP_BLENDING_ADD"};function $R(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":JR[e.combine]||"ENVMAP_BLENDING_NONE"}function t3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function e3(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=YR(n),c=ZR(n),h=QR(n),p=$R(n),u=t3(n),d=BR(n),v=IR(r),M=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oo).join(`
`),f.length>0&&(f+=`
`)):(g=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),f=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?It.tonemapping_pars_fragment:"",n.toneMapping!==vi?zR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,OR("linearToOutputTexel",n.outputColorSpace),FR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oo).join(`
`)),s=bh(s),s=h0(s,n),s=p0(s,n),o=bh(o),o=h0(o,n),o=p0(o,n),s=m0(s),o=m0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=m+g+s,y=m+f+o,R=u0(a,a.VERTEX_SHADER,x),T=u0(a,a.FRAGMENT_SHADER,y);a.attachShader(M,R),a.attachShader(M,T),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function A(w){if(e.debug.checkShaderErrors){const z=a.getProgramInfoLog(M)||"",B=a.getShaderInfoLog(R)||"",k=a.getShaderInfoLog(T)||"",I=z.trim(),D=B.trim(),L=k.trim();let q=!0,Z=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,R,T);else{const nt=d0(a,R,"vertex"),pt=d0(a,T,"fragment");$t("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+nt+`
`+pt)}else I!==""?Ut("WebGLProgram: Program Info Log:",I):(D===""||L==="")&&(Z=!1);Z&&(w.diagnostics={runnable:q,programLog:I,vertexShader:{log:D,prefix:g},fragmentShader:{log:L,prefix:f}})}a.deleteShader(R),a.deleteShader(T),_=new fc(a,M),b=HR(a,M)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=a.getProgramParameter(M,DR)),F},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=T,this}let n3=0;class i3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new a3(t),n.set(t,i)),i}}class a3{constructor(t){this.id=n3++,this.code=t,this.usedTimes=0}}function r3(e,t,n,i,a,r){const s=new kx,o=new i3,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,b,F,w,z){const B=w.fog,k=z.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,L=t.get(_.envMap||I,D),q=L&&L.mapping===fu?L.image.height:null,Z=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pt=nt!==void 0?nt.length:0;let dt=0;k.morphAttributes.position!==void 0&&(dt=1),k.morphAttributes.normal!==void 0&&(dt=2),k.morphAttributes.color!==void 0&&(dt=3);let Lt,Qt,ie,Q;if(Z){const se=fi[Z];Lt=se.vertexShader,Qt=se.fragmentShader}else Lt=_.vertexShader,Qt=_.fragmentShader,o.update(_),ie=o.getVertexShaderID(_),Q=o.getFragmentShaderID(_);const rt=e.getRenderTarget(),lt=e.state.buffers.depth.getReversed(),Ft=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,Dt=!!_.map,We=!!_.matcap,Zt=!!L,re=!!_.aoMap,pe=!!_.lightMap,Ht=!!_.bumpMap,De=!!_.normalMap,U=!!_.displacementMap,Oe=!!_.emissiveMap,ae=!!_.metalnessMap,_e=!!_.roughnessMap,Mt=_.anisotropy>0,C=_.clearcoat>0,S=_.dispersion>0,O=_.iridescence>0,K=_.sheen>0,$=_.transmission>0,j=Mt&&!!_.anisotropyMap,_t=C&&!!_.clearcoatMap,st=C&&!!_.clearcoatNormalMap,At=C&&!!_.clearcoatRoughnessMap,Ct=O&&!!_.iridescenceMap,tt=O&&!!_.iridescenceThicknessMap,it=K&&!!_.sheenColorMap,vt=K&&!!_.sheenRoughnessMap,St=!!_.specularMap,ht=!!_.specularColorMap,Gt=!!_.specularIntensityMap,N=$&&!!_.transmissionMap,ot=$&&!!_.thicknessMap,at=!!_.gradientMap,gt=!!_.alphaMap,et=_.alphaTest>0,Y=!!_.alphaHash,xt=!!_.extensions;let Nt=vi;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Nt=e.toneMapping);const ve={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Lt,fragmentShader:Qt,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&z.instanceColor!==null,instancingMorph:Ft&&z.morphTexture!==null,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:As,alphaToCoverage:!!_.alphaToCoverage,map:Dt,matcap:We,envMap:Zt,envMapMode:Zt&&L.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:pe,bumpMap:Ht,normalMap:De,displacementMap:U,emissiveMap:Oe,normalMapObjectSpace:De&&_.normalMapType===VE,normalMapTangentSpace:De&&_.normalMapType===Hx,metalnessMap:ae,roughnessMap:_e,anisotropy:Mt,anisotropyMap:j,clearcoat:C,clearcoatMap:_t,clearcoatNormalMap:st,clearcoatRoughnessMap:At,dispersion:S,iridescence:O,iridescenceMap:Ct,iridescenceThicknessMap:tt,sheen:K,sheenColorMap:it,sheenRoughnessMap:vt,specularMap:St,specularColorMap:ht,specularIntensityMap:Gt,transmission:$,transmissionMap:N,thicknessMap:ot,gradientMap:at,opaque:_.transparent===!1&&_.blending===us&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:et,alphaHash:Y,combine:_.combine,mapUv:Dt&&v(_.map.channel),aoMapUv:re&&v(_.aoMap.channel),lightMapUv:pe&&v(_.lightMap.channel),bumpMapUv:Ht&&v(_.bumpMap.channel),normalMapUv:De&&v(_.normalMap.channel),displacementMapUv:U&&v(_.displacementMap.channel),emissiveMapUv:Oe&&v(_.emissiveMap.channel),metalnessMapUv:ae&&v(_.metalnessMap.channel),roughnessMapUv:_e&&v(_.roughnessMap.channel),anisotropyMapUv:j&&v(_.anisotropyMap.channel),clearcoatMapUv:_t&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:it&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(_.sheenRoughnessMap.channel),specularMapUv:St&&v(_.specularMap.channel),specularColorMapUv:ht&&v(_.specularColorMap.channel),specularIntensityMapUv:Gt&&v(_.specularIntensityMap.channel),transmissionMapUv:N&&v(_.transmissionMap.channel),thicknessMapUv:ot&&v(_.thicknessMap.channel),alphaMapUv:gt&&v(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(De||Mt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Dt||gt),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&De===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:lt,skinning:z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===oe,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gi,flipSided:_.side===yn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function g(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)b.push(F),b.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(f(b,_),m(b,_),b.push(e.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),_.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),_.push(s.mask)}function x(_){const b=d[_.type];let F;if(b){const w=fi[b];F=Ab.clone(w.uniforms)}else F=_.uniforms;return F}function y(_,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new e3(e,b,_,a),c.push(F),h.set(b,F)),F}function R(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:x,acquireProgram:y,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:A}}function s3(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function o3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function _0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function v0(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,M,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=s(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,d,v,M,g,f){const m=o(u,d,v,M,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,d,v,M,g,f){const m=o(u,d,v,M,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,d){n.length>1&&n.sort(u||o3),i.length>1&&i.sort(d||_0),a.length>1&&a.sort(d||_0)}function p(){for(let u=t,d=e.length;u<d;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:p,sort:h}}function l3(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new v0,e.set(i,[s])):a>=r.length?(s=new v0,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function c3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new G,color:new jt};break;case"SpotLight":n={position:new G,direction:new G,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new G,halfWidth:new G,halfHeight:new G};break}return e[t.id]=n,n}}}function u3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let f3=0;function d3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function h3(e){const t=new c3,n=u3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const a=new G,r=new Te,s=new Te;function o(c){let h=0,p=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,v=0,M=0,g=0,f=0,m=0,x=0,y=0,R=0,T=0,A=0;c.sort(d3);for(let b=0,F=c.length;b<F;b++){const w=c[b],z=w.color,B=w.intensity,k=w.distance;let I=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ts?I=w.shadow.map.texture:I=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=z.r*B,p+=z.g*B,u+=z.b*B;else if(w.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(w.sh.coefficients[D],B);A++}else if(w.isDirectionalLight){const D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const L=w.shadow,q=n.get(w);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=w.shadow.matrix,m++}i.directional[d]=D,d++}else if(w.isSpotLight){const D=t.get(w);D.position.setFromMatrixPosition(w.matrixWorld),D.color.copy(z).multiplyScalar(B),D.distance=k,D.coneCos=Math.cos(w.angle),D.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),D.decay=w.decay,i.spot[M]=D;const L=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,L.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[M]=L.matrix,w.castShadow){const q=n.get(w);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,i.spotShadow[M]=q,i.spotShadowMap[M]=I,y++}M++}else if(w.isRectAreaLight){const D=t.get(w);D.color.copy(z).multiplyScalar(B),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=D,g++}else if(w.isPointLight){const D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),D.distance=w.distance,D.decay=w.decay,w.castShadow){const L=w.shadow,q=n.get(w);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,q.shadowCameraNear=L.camera.near,q.shadowCameraFar=L.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=w.shadow.matrix,x++}i.point[v]=D,v++}else if(w.isHemisphereLight){const D=t.get(w);D.skyColor.copy(w.color).multiplyScalar(B),D.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[f]=D,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==d||_.pointLength!==v||_.spotLength!==M||_.rectAreaLength!==g||_.hemiLength!==f||_.numDirectionalShadows!==m||_.numPointShadows!==x||_.numSpotShadows!==y||_.numSpotMaps!==R||_.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,_.directionalLength=d,_.pointLength=v,_.spotLength=M,_.rectAreaLength=g,_.hemiLength=f,_.numDirectionalShadows=m,_.numPointShadows=x,_.numSpotShadows=y,_.numSpotMaps=R,_.numLightProbes=A,i.version=f3++)}function l(c,h){let p=0,u=0,d=0,v=0,M=0;const g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const x=c[f];if(x.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),p++}else if(x.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),s.identity(),r.copy(x.matrixWorld),r.premultiply(g),s.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function x0(e){const t=new h3(e),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function p3(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new x0(e),t.set(a,[o])):r>=s.length?(o=new x0(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const m3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_3=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],v3=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],S0=new Te,to=new G,zf=new G;function x3(e,t,n){let i=new Fp;const a=new ne,r=new ne,s=new we,o=new Ub,l=new Lb,c={},h=n.maxTextureSize,p={[Ha]:yn,[yn]:Ha,[Gi]:Gi},u=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:m3,fragmentShader:g3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const v=new Jn;v.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ei(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let f=this.type;this.render=function(T,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===xE&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sc);const b=e.getRenderTarget(),F=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Zi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==this.type;B&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(I=>I.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,I=T.length;k<I;k++){const D=T[k],L=D.shadow;if(L===void 0){Ut("WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;a.copy(L.mapSize);const q=L.getFrameExtents();a.multiply(q),r.copy(L.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/q.x),a.x=r.x*q.x,L.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/q.y),a.y=r.y*q.y,L.mapSize.y=r.y));const Z=e.state.buffers.depth.getReversed();if(L.camera._reversedDepth=Z,L.map===null||B===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===so){if(D.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new xi(a.x,a.y,{format:Ts,type:na,minFilter:ln,magFilter:ln,generateMipmaps:!1}),L.map.texture.name=D.name+".shadowMap",L.map.depthTexture=new Ho(a.x,a.y,mi),L.map.depthTexture.name=D.name+".shadowMapDepth",L.map.depthTexture.format=ia,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=nn,L.map.depthTexture.magFilter=nn}else D.isPointLight?(L.map=new iS(a.x),L.map.depthTexture=new bb(a.x,yi)):(L.map=new xi(a.x,a.y),L.map.depthTexture=new Ho(a.x,a.y,yi)),L.map.depthTexture.name=D.name+".shadowMap",L.map.depthTexture.format=ia,this.type===sc?(L.map.depthTexture.compareFunction=Z?Pp:Op,L.map.depthTexture.minFilter=ln,L.map.depthTexture.magFilter=ln):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=nn,L.map.depthTexture.magFilter=nn);L.camera.updateProjectionMatrix()}const nt=L.map.isWebGLCubeRenderTarget?6:1;for(let pt=0;pt<nt;pt++){if(L.map.isWebGLCubeRenderTarget)e.setRenderTarget(L.map,pt),e.clear();else{pt===0&&(e.setRenderTarget(L.map),e.clear());const dt=L.getViewport(pt);s.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),z.viewport(s)}if(D.isPointLight){const dt=L.camera,Lt=L.matrix,Qt=D.distance||dt.far;Qt!==dt.far&&(dt.far=Qt,dt.updateProjectionMatrix()),to.setFromMatrixPosition(D.matrixWorld),dt.position.copy(to),zf.copy(dt.position),zf.add(_3[pt]),dt.up.copy(v3[pt]),dt.lookAt(zf),dt.updateMatrixWorld(),Lt.makeTranslation(-to.x,-to.y,-to.z),S0.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),L._frustum.setFromProjectionMatrix(S0,dt.coordinateSystem,dt.reversedDepth)}else L.updateMatrices(D);i=L.getFrustum(),y(A,_,L.camera,D,this.type)}L.isPointLightShadow!==!0&&this.type===so&&m(L,_),L.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(b,F,w)};function m(T,A){const _=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xi(a.x,a.y,{format:Ts,type:na})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(A,null,_,u,M,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(A,null,_,d,M,null)}function x(T,A,_,b){let F=null;const w=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)F=w;else if(F=_.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=F.uuid,B=A.uuid;let k=c[z];k===void 0&&(k={},c[z]=k);let I=k[B];I===void 0&&(I=F.clone(),k[B]=I,A.addEventListener("dispose",R)),F=I}if(F.visible=A.visible,F.wireframe=A.wireframe,b===so?F.side=A.shadowSide!==null?A.shadowSide:A.side:F.side=A.shadowSide!==null?A.shadowSide:p[A.side],F.alphaMap=A.alphaMap,F.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,F.map=A.map,F.clipShadows=A.clipShadows,F.clippingPlanes=A.clippingPlanes,F.clipIntersection=A.clipIntersection,F.displacementMap=A.displacementMap,F.displacementScale=A.displacementScale,F.displacementBias=A.displacementBias,F.wireframeLinewidth=A.wireframeLinewidth,F.linewidth=A.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=e.properties.get(F);z.light=_}return F}function y(T,A,_,b,F){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===so)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const B=t.update(T),k=T.material;if(Array.isArray(k)){const I=B.groups;for(let D=0,L=I.length;D<L;D++){const q=I[D],Z=k[q.materialIndex];if(Z&&Z.visible){const nt=x(T,Z,b,F);T.onBeforeShadow(e,T,A,_,B,nt,q),e.renderBufferDirect(_,null,B,nt,T,q),T.onAfterShadow(e,T,A,_,B,nt,q)}}}else if(k.visible){const I=x(T,k,b,F);T.onBeforeShadow(e,T,A,_,B,I,null),e.renderBufferDirect(_,null,B,I,T,null),T.onAfterShadow(e,T,A,_,B,I,null)}}const z=T.children;for(let B=0,k=z.length;B<k;B++)y(z[B],A,_,b,F)}function R(T){T.target.removeEventListener("dispose",R);for(const _ in c){const b=c[_],F=T.target.uuid;F in b&&(b[F].dispose(),delete b[F])}}}function S3(e,t){function n(){let N=!1;const ot=new we;let at=null;const gt=new we(0,0,0,0);return{setMask:function(et){at!==et&&!N&&(e.colorMask(et,et,et,et),at=et)},setLocked:function(et){N=et},setClear:function(et,Y,xt,Nt,ve){ve===!0&&(et*=Nt,Y*=Nt,xt*=Nt),ot.set(et,Y,xt,Nt),gt.equals(ot)===!1&&(e.clearColor(et,Y,xt,Nt),gt.copy(ot))},reset:function(){N=!1,at=null,gt.set(-1,0,0,0)}}}function i(){let N=!1,ot=!1,at=null,gt=null,et=null;return{setReversed:function(Y){if(ot!==Y){const xt=t.get("EXT_clip_control");Y?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),ot=Y;const Nt=et;et=null,this.setClear(Nt)}},getReversed:function(){return ot},setTest:function(Y){Y?rt(e.DEPTH_TEST):lt(e.DEPTH_TEST)},setMask:function(Y){at!==Y&&!N&&(e.depthMask(Y),at=Y)},setFunc:function(Y){if(ot&&(Y=JE[Y]),gt!==Y){switch(Y){case Pd:e.depthFunc(e.NEVER);break;case zd:e.depthFunc(e.ALWAYS);break;case Fd:e.depthFunc(e.LESS);break;case Es:e.depthFunc(e.LEQUAL);break;case Bd:e.depthFunc(e.EQUAL);break;case Id:e.depthFunc(e.GEQUAL);break;case Hd:e.depthFunc(e.GREATER);break;case Gd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}gt=Y}},setLocked:function(Y){N=Y},setClear:function(Y){et!==Y&&(et=Y,ot&&(Y=1-Y),e.clearDepth(Y))},reset:function(){N=!1,at=null,gt=null,et=null,ot=!1}}}function a(){let N=!1,ot=null,at=null,gt=null,et=null,Y=null,xt=null,Nt=null,ve=null;return{setTest:function(se){N||(se?rt(e.STENCIL_TEST):lt(e.STENCIL_TEST))},setMask:function(se){ot!==se&&!N&&(e.stencilMask(se),ot=se)},setFunc:function(se,Ri,Ci){(at!==se||gt!==Ri||et!==Ci)&&(e.stencilFunc(se,Ri,Ci),at=se,gt=Ri,et=Ci)},setOp:function(se,Ri,Ci){(Y!==se||xt!==Ri||Nt!==Ci)&&(e.stencilOp(se,Ri,Ci),Y=se,xt=Ri,Nt=Ci)},setLocked:function(se){N=se},setClear:function(se){ve!==se&&(e.clearStencil(se),ve=se)},reset:function(){N=!1,ot=null,at=null,gt=null,et=null,Y=null,xt=null,Nt=null,ve=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},p={},u=new WeakMap,d=[],v=null,M=!1,g=null,f=null,m=null,x=null,y=null,R=null,T=null,A=new jt(0,0,0),_=0,b=!1,F=null,w=null,z=null,B=null,k=null;const I=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,L=0;const q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=L>=1):q.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=L>=2);let Z=null,nt={};const pt=e.getParameter(e.SCISSOR_BOX),dt=e.getParameter(e.VIEWPORT),Lt=new we().fromArray(pt),Qt=new we().fromArray(dt);function ie(N,ot,at,gt){const et=new Uint8Array(4),Y=e.createTexture();e.bindTexture(N,Y),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xt=0;xt<at;xt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ot,0,e.RGBA,1,1,gt,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(ot+xt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return Y}const Q={};Q[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),Q[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Q[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),rt(e.DEPTH_TEST),s.setFunc(Es),Ht(!1),De(Mg),rt(e.CULL_FACE),re(Zi);function rt(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function lt(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function Ft(N,ot){return p[N]!==ot?(e.bindFramebuffer(N,ot),p[N]=ot,N===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ot),N===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ot),!0):!1}function Rt(N,ot){let at=d,gt=!1;if(N){at=u.get(ot),at===void 0&&(at=[],u.set(ot,at));const et=N.textures;if(at.length!==et.length||at[0]!==e.COLOR_ATTACHMENT0){for(let Y=0,xt=et.length;Y<xt;Y++)at[Y]=e.COLOR_ATTACHMENT0+Y;at.length=et.length,gt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,gt=!0);gt&&e.drawBuffers(at)}function Dt(N){return v!==N?(e.useProgram(N),v=N,!0):!1}const We={[ar]:e.FUNC_ADD,[yE]:e.FUNC_SUBTRACT,[ME]:e.FUNC_REVERSE_SUBTRACT};We[EE]=e.MIN,We[bE]=e.MAX;const Zt={[TE]:e.ZERO,[AE]:e.ONE,[RE]:e.SRC_COLOR,[Nd]:e.SRC_ALPHA,[NE]:e.SRC_ALPHA_SATURATE,[UE]:e.DST_COLOR,[wE]:e.DST_ALPHA,[CE]:e.ONE_MINUS_SRC_COLOR,[Od]:e.ONE_MINUS_SRC_ALPHA,[LE]:e.ONE_MINUS_DST_COLOR,[DE]:e.ONE_MINUS_DST_ALPHA,[OE]:e.CONSTANT_COLOR,[PE]:e.ONE_MINUS_CONSTANT_COLOR,[zE]:e.CONSTANT_ALPHA,[FE]:e.ONE_MINUS_CONSTANT_ALPHA};function re(N,ot,at,gt,et,Y,xt,Nt,ve,se){if(N===Zi){M===!0&&(lt(e.BLEND),M=!1);return}if(M===!1&&(rt(e.BLEND),M=!0),N!==SE){if(N!==g||se!==b){if((f!==ar||y!==ar)&&(e.blendEquation(e.FUNC_ADD),f=ar,y=ar),se)switch(N){case us:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Eg:e.blendFunc(e.ONE,e.ONE);break;case bg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Tg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:$t("WebGLState: Invalid blending: ",N);break}else switch(N){case us:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Eg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case bg:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tg:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",N);break}m=null,x=null,R=null,T=null,A.set(0,0,0),_=0,g=N,b=se}return}et=et||ot,Y=Y||at,xt=xt||gt,(ot!==f||et!==y)&&(e.blendEquationSeparate(We[ot],We[et]),f=ot,y=et),(at!==m||gt!==x||Y!==R||xt!==T)&&(e.blendFuncSeparate(Zt[at],Zt[gt],Zt[Y],Zt[xt]),m=at,x=gt,R=Y,T=xt),(Nt.equals(A)===!1||ve!==_)&&(e.blendColor(Nt.r,Nt.g,Nt.b,ve),A.copy(Nt),_=ve),g=N,b=!1}function pe(N,ot){N.side===Gi?lt(e.CULL_FACE):rt(e.CULL_FACE);let at=N.side===yn;ot&&(at=!at),Ht(at),N.blending===us&&N.transparent===!1?re(Zi):re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const gt=N.stencilWrite;o.setTest(gt),gt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(e.SAMPLE_ALPHA_TO_COVERAGE):lt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(N){F!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),F=N)}function De(N){N!==_E?(rt(e.CULL_FACE),N!==w&&(N===Mg?e.cullFace(e.BACK):N===vE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):lt(e.CULL_FACE),w=N}function U(N){N!==z&&(D&&e.lineWidth(N),z=N)}function Oe(N,ot,at){N?(rt(e.POLYGON_OFFSET_FILL),(B!==ot||k!==at)&&(B=ot,k=at,s.getReversed()&&(ot=-ot),e.polygonOffset(ot,at))):lt(e.POLYGON_OFFSET_FILL)}function ae(N){N?rt(e.SCISSOR_TEST):lt(e.SCISSOR_TEST)}function _e(N){N===void 0&&(N=e.TEXTURE0+I-1),Z!==N&&(e.activeTexture(N),Z=N)}function Mt(N,ot,at){at===void 0&&(Z===null?at=e.TEXTURE0+I-1:at=Z);let gt=nt[at];gt===void 0&&(gt={type:void 0,texture:void 0},nt[at]=gt),(gt.type!==N||gt.texture!==ot)&&(Z!==at&&(e.activeTexture(at),Z=at),e.bindTexture(N,ot||Q[N]),gt.type=N,gt.texture=ot)}function C(){const N=nt[Z];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function O(){try{e.compressedTexImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function K(){try{e.texSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function $(){try{e.texSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function _t(){try{e.compressedTexSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function st(){try{e.texStorage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function At(){try{e.texStorage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function Ct(){try{e.texImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function tt(){try{e.texImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function it(N){Lt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function vt(N){Qt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Qt.copy(N))}function St(N,ot){let at=c.get(ot);at===void 0&&(at=new WeakMap,c.set(ot,at));let gt=at.get(N);gt===void 0&&(gt=e.getUniformBlockIndex(ot,N.name),at.set(N,gt))}function ht(N,ot){const gt=c.get(ot).get(N);l.get(ot)!==gt&&(e.uniformBlockBinding(ot,gt,N.__bindingPointIndex),l.set(ot,gt))}function Gt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},Z=null,nt={},p={},u=new WeakMap,d=[],v=null,M=!1,g=null,f=null,m=null,x=null,y=null,R=null,T=null,A=new jt(0,0,0),_=0,b=!1,F=null,w=null,z=null,B=null,k=null,Lt.set(0,0,e.canvas.width,e.canvas.height),Qt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:rt,disable:lt,bindFramebuffer:Ft,drawBuffers:Rt,useProgram:Dt,setBlending:re,setMaterial:pe,setFlipSided:Ht,setCullFace:De,setLineWidth:U,setPolygonOffset:Oe,setScissorTest:ae,activeTexture:_e,bindTexture:Mt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Ct,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:ht,texStorage2D:st,texStorage3D:At,texSubImage2D:K,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:_t,scissor:it,viewport:vt,reset:Gt}}function y3(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap;let p;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return d?new OffscreenCanvas(C,S):Vc("canvas")}function M(C,S,O){let K=1;const $=Mt(C);if(($.width>O||$.height>O)&&(K=O/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*$.width),_t=Math.floor(K*$.height);p===void 0&&(p=v(j,_t));const st=S?v(j,_t):p;return st.width=j,st.height=_t,st.getContext("2d").drawImage(C,0,0,j,_t),Ut("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+_t+")."),st}else return"data"in C&&Ut("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function g(C){return C.generateMipmaps}function f(C){e.generateMipmap(C)}function m(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(C,S,O,K,$=!1){if(C!==null){if(e[C]!==void 0)return e[C];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=S;if(S===e.RED&&(O===e.FLOAT&&(j=e.R32F),O===e.HALF_FLOAT&&(j=e.R16F),O===e.UNSIGNED_BYTE&&(j=e.R8)),S===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(j=e.R8UI),O===e.UNSIGNED_SHORT&&(j=e.R16UI),O===e.UNSIGNED_INT&&(j=e.R32UI),O===e.BYTE&&(j=e.R8I),O===e.SHORT&&(j=e.R16I),O===e.INT&&(j=e.R32I)),S===e.RG&&(O===e.FLOAT&&(j=e.RG32F),O===e.HALF_FLOAT&&(j=e.RG16F),O===e.UNSIGNED_BYTE&&(j=e.RG8)),S===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(j=e.RG8UI),O===e.UNSIGNED_SHORT&&(j=e.RG16UI),O===e.UNSIGNED_INT&&(j=e.RG32UI),O===e.BYTE&&(j=e.RG8I),O===e.SHORT&&(j=e.RG16I),O===e.INT&&(j=e.RG32I)),S===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(j=e.RGB8UI),O===e.UNSIGNED_SHORT&&(j=e.RGB16UI),O===e.UNSIGNED_INT&&(j=e.RGB32UI),O===e.BYTE&&(j=e.RGB8I),O===e.SHORT&&(j=e.RGB16I),O===e.INT&&(j=e.RGB32I)),S===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),O===e.UNSIGNED_INT&&(j=e.RGBA32UI),O===e.BYTE&&(j=e.RGBA8I),O===e.SHORT&&(j=e.RGBA16I),O===e.INT&&(j=e.RGBA32I)),S===e.RGB&&(O===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),S===e.RGBA){const _t=$?Gc:Kt.getTransfer(K);O===e.FLOAT&&(j=e.RGBA32F),O===e.HALF_FLOAT&&(j=e.RGBA16F),O===e.UNSIGNED_BYTE&&(j=_t===oe?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(C,S){let O;return C?S===null||S===yi||S===Bo?O=e.DEPTH24_STENCIL8:S===mi?O=e.DEPTH32F_STENCIL8:S===Fo&&(O=e.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===yi||S===Bo?O=e.DEPTH_COMPONENT24:S===mi?O=e.DEPTH_COMPONENT32F:S===Fo&&(O=e.DEPTH_COMPONENT16),O}function R(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),_(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),F(S)}function _(C){const S=i.get(C);if(S.__webglInit===void 0)return;const O=C.source,K=u.get(O);if(K){const $=K[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(C),Object.keys(K).length===0&&u.delete(O)}i.remove(C)}function b(C){const S=i.get(C);e.deleteTexture(S.__webglTexture);const O=C.source,K=u.get(O);delete K[S.__cacheKey],s.memory.textures--}function F(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let $=0;$<S.__webglFramebuffer[K].length;$++)e.deleteFramebuffer(S.__webglFramebuffer[K][$]);else e.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)e.deleteFramebuffer(S.__webglFramebuffer[K]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let K=0,$=O.length;K<$;K++){const j=i.get(O[K]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(O[K])}i.remove(C)}let w=0;function z(){w=0}function B(){const C=w;return C>=a.maxTextures&&Ut("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),w+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function I(C,S){const O=i.get(C);if(C.isVideoTexture&&ae(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const K=C.image;if(K===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,C,S);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+S)}function D(C,S){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Q(O,C,S);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+S)}function L(C,S){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Q(O,C,S);return}n.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+S)}function q(C,S){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){rt(O,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+S)}const Z={[Vd]:e.REPEAT,[Wi]:e.CLAMP_TO_EDGE,[kd]:e.MIRRORED_REPEAT},nt={[nn]:e.NEAREST,[HE]:e.NEAREST_MIPMAP_NEAREST,[Sl]:e.NEAREST_MIPMAP_LINEAR,[ln]:e.LINEAR,[af]:e.LINEAR_MIPMAP_NEAREST,[sr]:e.LINEAR_MIPMAP_LINEAR},pt={[kE]:e.NEVER,[jE]:e.ALWAYS,[XE]:e.LESS,[Op]:e.LEQUAL,[WE]:e.EQUAL,[Pp]:e.GEQUAL,[qE]:e.GREATER,[YE]:e.NOTEQUAL};function dt(C,S){if(S.type===mi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===af||S.magFilter===Sl||S.magFilter===sr||S.minFilter===ln||S.minFilter===af||S.minFilter===Sl||S.minFilter===sr)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Z[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Z[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Z[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,nt[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,nt[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Sl&&S.minFilter!==sr||S.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let $=u.get(K);$===void 0&&($={},u.set(K,$));const j=k(S);if(j!==C.__cacheKey){$[j]===void 0&&($[j]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,O=!0),$[j].usedTimes++;const _t=$[C.__cacheKey];_t!==void 0&&($[C.__cacheKey].usedTimes--,_t.usedTimes===0&&b(S)),C.__cacheKey=j,C.__webglTexture=$[j].texture}return O}function Qt(C,S,O){return Math.floor(Math.floor(C/O)/S)}function ie(C,S,O,K){const j=C.updateRanges;if(j.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,O,K,S.data);else{j.sort((tt,it)=>tt.start-it.start);let _t=0;for(let tt=1;tt<j.length;tt++){const it=j[_t],vt=j[tt],St=it.start+it.count,ht=Qt(vt.start,S.width,4),Gt=Qt(it.start,S.width,4);vt.start<=St+1&&ht===Gt&&Qt(vt.start+vt.count-1,S.width,4)===ht?it.count=Math.max(it.count,vt.start+vt.count-it.start):(++_t,j[_t]=vt)}j.length=_t+1;const st=e.getParameter(e.UNPACK_ROW_LENGTH),At=e.getParameter(e.UNPACK_SKIP_PIXELS),Ct=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let tt=0,it=j.length;tt<it;tt++){const vt=j[tt],St=Math.floor(vt.start/4),ht=Math.ceil(vt.count/4),Gt=St%S.width,N=Math.floor(St/S.width),ot=ht,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Gt,N,ot,at,O,K,S.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,At),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ct)}}function Q(C,S,O){let K=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=e.TEXTURE_3D);const $=Lt(C,S),j=S.source;n.bindTexture(K,C.__webglTexture,e.TEXTURE0+O);const _t=i.get(j);if(j.version!==_t.__version||$===!0){n.activeTexture(e.TEXTURE0+O);const st=Kt.getPrimaries(Kt.workingColorSpace),At=S.colorSpace===Sa?null:Kt.getPrimaries(S.colorSpace),Ct=S.colorSpace===Sa||st===At?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let tt=M(S.image,!1,a.maxTextureSize);tt=_e(S,tt);const it=r.convert(S.format,S.colorSpace),vt=r.convert(S.type);let St=x(S.internalFormat,it,vt,S.colorSpace,S.isVideoTexture);dt(K,S);let ht;const Gt=S.mipmaps,N=S.isVideoTexture!==!0,ot=_t.__version===void 0||$===!0,at=j.dataReady,gt=R(S,tt);if(S.isDepthTexture)St=y(S.format===or,S.type),ot&&(N?n.texStorage2D(e.TEXTURE_2D,1,St,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,St,tt.width,tt.height,0,it,vt,null));else if(S.isDataTexture)if(Gt.length>0){N&&ot&&n.texStorage2D(e.TEXTURE_2D,gt,St,Gt[0].width,Gt[0].height);for(let et=0,Y=Gt.length;et<Y;et++)ht=Gt[et],N?at&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ht.width,ht.height,it,vt,ht.data):n.texImage2D(e.TEXTURE_2D,et,St,ht.width,ht.height,0,it,vt,ht.data);S.generateMipmaps=!1}else N?(ot&&n.texStorage2D(e.TEXTURE_2D,gt,St,tt.width,tt.height),at&&ie(S,tt,it,vt)):n.texImage2D(e.TEXTURE_2D,0,St,tt.width,tt.height,0,it,vt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,gt,St,Gt[0].width,Gt[0].height,tt.depth);for(let et=0,Y=Gt.length;et<Y;et++)if(ht=Gt[et],S.format!==si)if(it!==null)if(N){if(at)if(S.layerUpdates.size>0){const xt=Qg(ht.width,ht.height,S.format,S.type);for(const Nt of S.layerUpdates){const ve=ht.data.subarray(Nt*xt/ht.data.BYTES_PER_ELEMENT,(Nt+1)*xt/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Nt,ht.width,ht.height,1,it,ve)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,tt.depth,it,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,St,ht.width,ht.height,tt.depth,0,ht.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,tt.depth,it,vt,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,St,ht.width,ht.height,tt.depth,0,it,vt,ht.data)}else{N&&ot&&n.texStorage2D(e.TEXTURE_2D,gt,St,Gt[0].width,Gt[0].height);for(let et=0,Y=Gt.length;et<Y;et++)ht=Gt[et],S.format!==si?it!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,ht.width,ht.height,it,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,et,St,ht.width,ht.height,0,ht.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?at&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ht.width,ht.height,it,vt,ht.data):n.texImage2D(e.TEXTURE_2D,et,St,ht.width,ht.height,0,it,vt,ht.data)}else if(S.isDataArrayTexture)if(N){if(ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,gt,St,tt.width,tt.height,tt.depth),at)if(S.layerUpdates.size>0){const et=Qg(tt.width,tt.height,S.format,S.type);for(const Y of S.layerUpdates){const xt=tt.data.subarray(Y*et/tt.data.BYTES_PER_ELEMENT,(Y+1)*et/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Y,tt.width,tt.height,1,it,vt,xt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,it,vt,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,it,vt,tt.data);else if(S.isData3DTexture)N?(ot&&n.texStorage3D(e.TEXTURE_3D,gt,St,tt.width,tt.height,tt.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,it,vt,tt.data)):n.texImage3D(e.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,it,vt,tt.data);else if(S.isFramebufferTexture){if(ot)if(N)n.texStorage2D(e.TEXTURE_2D,gt,St,tt.width,tt.height);else{let et=tt.width,Y=tt.height;for(let xt=0;xt<gt;xt++)n.texImage2D(e.TEXTURE_2D,xt,St,et,Y,0,it,vt,null),et>>=1,Y>>=1}}else if(Gt.length>0){if(N&&ot){const et=Mt(Gt[0]);n.texStorage2D(e.TEXTURE_2D,gt,St,et.width,et.height)}for(let et=0,Y=Gt.length;et<Y;et++)ht=Gt[et],N?at&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,it,vt,ht):n.texImage2D(e.TEXTURE_2D,et,St,it,vt,ht);S.generateMipmaps=!1}else if(N){if(ot){const et=Mt(tt);n.texStorage2D(e.TEXTURE_2D,gt,St,et.width,et.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,it,vt,tt)}else n.texImage2D(e.TEXTURE_2D,0,St,it,vt,tt);g(S)&&f(K),_t.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function rt(C,S,O){if(S.image.length!==6)return;const K=Lt(C,S),$=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+O);const j=i.get($);if($.version!==j.__version||K===!0){n.activeTexture(e.TEXTURE0+O);const _t=Kt.getPrimaries(Kt.workingColorSpace),st=S.colorSpace===Sa?null:Kt.getPrimaries(S.colorSpace),At=S.colorSpace===Sa||_t===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ct=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,it=[];for(let Y=0;Y<6;Y++)!Ct&&!tt?it[Y]=M(S.image[Y],!0,a.maxCubemapSize):it[Y]=tt?S.image[Y].image:S.image[Y],it[Y]=_e(S,it[Y]);const vt=it[0],St=r.convert(S.format,S.colorSpace),ht=r.convert(S.type),Gt=x(S.internalFormat,St,ht,S.colorSpace),N=S.isVideoTexture!==!0,ot=j.__version===void 0||K===!0,at=$.dataReady;let gt=R(S,vt);dt(e.TEXTURE_CUBE_MAP,S);let et;if(Ct){N&&ot&&n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Gt,vt.width,vt.height);for(let Y=0;Y<6;Y++){et=it[Y].mipmaps;for(let xt=0;xt<et.length;xt++){const Nt=et[xt];S.format!==si?St!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt,0,0,Nt.width,Nt.height,St,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt,Gt,Nt.width,Nt.height,0,Nt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt,0,0,Nt.width,Nt.height,St,ht,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt,Gt,Nt.width,Nt.height,0,St,ht,Nt.data)}}}else{if(et=S.mipmaps,N&&ot){et.length>0&&gt++;const Y=Mt(it[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Gt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,it[Y].width,it[Y].height,St,ht,it[Y].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Gt,it[Y].width,it[Y].height,0,St,ht,it[Y].data);for(let xt=0;xt<et.length;xt++){const ve=et[xt].image[Y].image;N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt+1,0,0,ve.width,ve.height,St,ht,ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt+1,Gt,ve.width,ve.height,0,St,ht,ve.data)}}else{N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,St,ht,it[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Gt,St,ht,it[Y]);for(let xt=0;xt<et.length;xt++){const Nt=et[xt];N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt+1,0,0,St,ht,Nt.image[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xt+1,Gt,St,ht,Nt.image[Y])}}}g(S)&&f(e.TEXTURE_CUBE_MAP),j.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function lt(C,S,O,K,$,j){const _t=r.convert(O.format,O.colorSpace),st=r.convert(O.type),At=x(O.internalFormat,_t,st,O.colorSpace),Ct=i.get(S),tt=i.get(O);if(tt.__renderTarget=S,!Ct.__hasExternalTextures){const it=Math.max(1,S.width>>j),vt=Math.max(1,S.height>>j);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,j,At,it,vt,S.depth,0,_t,st,null):n.texImage2D($,j,At,it,vt,0,_t,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Oe(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,$,tt.__webglTexture,0,U(S)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,$,tt.__webglTexture,j),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ft(C,S,O){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,$=K&&K.isDepthTexture?K.type:null,j=y(S.stencilBuffer,$),_t=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,U(S),j,S.width,S.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,U(S),j,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,j,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,_t,e.RENDERBUFFER,C)}else{const K=S.textures;for(let $=0;$<K.length;$++){const j=K[$],_t=r.convert(j.format,j.colorSpace),st=r.convert(j.type),At=x(j.internalFormat,_t,st,j.colorSpace);Oe(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,U(S),At,S.width,S.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,U(S),At,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,At,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Rt(C,S,O){const K=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),dt(e.TEXTURE_CUBE_MAP,S.depthTexture);const Ct=r.convert(S.depthTexture.format),tt=r.convert(S.depthTexture.type);let it;S.depthTexture.format===ia?it=e.DEPTH_COMPONENT24:S.depthTexture.format===or&&(it=e.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,it,S.width,S.height,0,Ct,tt,null)}}else I(S.depthTexture,0);const j=$.__webglTexture,_t=U(S),st=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,At=S.depthTexture.format===or?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===ia)Oe(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,At,st,j,0,_t):e.framebufferTexture2D(e.FRAMEBUFFER,At,st,j,0);else if(S.depthTexture.format===or)Oe(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,At,st,j,0,_t):e.framebufferTexture2D(e.FRAMEBUFFER,At,st,j,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const S=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)Rt(S.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?Rt(S.__webglFramebuffer[0],C,0):Rt(S.__webglFramebuffer,C,0)}else if(O){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=e.createRenderbuffer(),Ft(S.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,j)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ft(S.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,j)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function We(C,S,O){const K=i.get(C);S!==void 0&&lt(K.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&Dt(C)}function Zt(C){const S=C.texture,O=i.get(C),K=i.get(S);C.addEventListener("dispose",A);const $=C.textures,j=C.isWebGLCubeRenderTarget===!0,_t=$.length>1;if(_t||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=S.version,s.memory.textures++),j){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let At=0;At<S.mipmaps.length;At++)O.__webglFramebuffer[st][At]=e.createFramebuffer()}else O.__webglFramebuffer[st]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)O.__webglFramebuffer[st]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(_t)for(let st=0,At=$.length;st<At;st++){const Ct=i.get($[st]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=e.createTexture(),s.memory.textures++)}if(C.samples>0&&Oe(C)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<$.length;st++){const At=$[st];O.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const Ct=r.convert(At.format,At.colorSpace),tt=r.convert(At.type),it=x(At.internalFormat,Ct,tt,At.colorSpace,C.isXRRenderTarget===!0),vt=U(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,vt,it,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,O.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),Ft(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(j){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),dt(e.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)lt(O.__webglFramebuffer[st][At],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,At);else lt(O.__webglFramebuffer[st],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(S)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_t){for(let st=0,At=$.length;st<At;st++){const Ct=$[st],tt=i.get(Ct);let it=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,tt.__webglTexture),dt(it,Ct),lt(O.__webglFramebuffer,C,Ct,e.COLOR_ATTACHMENT0+st,it,0),g(Ct)&&f(it)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,K.__webglTexture),dt(st,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)lt(O.__webglFramebuffer[At],C,S,e.COLOR_ATTACHMENT0,st,At);else lt(O.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,st,0);g(S)&&f(st),n.unbindTexture()}C.depthBuffer&&Dt(C)}function re(C){const S=C.textures;for(let O=0,K=S.length;O<K;O++){const $=S[O];if(g($)){const j=m(C),_t=i.get($).__webglTexture;n.bindTexture(j,_t),f(j),n.unbindTexture()}}}const pe=[],Ht=[];function De(C){if(C.samples>0){if(Oe(C)===!1){const S=C.textures,O=C.width,K=C.height;let $=e.COLOR_BUFFER_BIT;const j=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_t=i.get(C),st=S.length>1;if(st)for(let Ct=0;Ct<S.length;Ct++)n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const At=C.texture.mipmaps;At&&At.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,_t.__webglColorRenderbuffer[Ct]);const tt=i.get(S[Ct]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,tt,0)}e.blitFramebuffer(0,0,O,K,0,0,O,K,$,e.NEAREST),l===!0&&(pe.length=0,Ht.length=0,pe.push(e.COLOR_ATTACHMENT0+Ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(j),Ht.push(j),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let Ct=0;Ct<S.length;Ct++){n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.RENDERBUFFER,_t.__webglColorRenderbuffer[Ct]);const tt=i.get(S[Ct]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.TEXTURE_2D,tt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function U(C){return Math.min(a.maxSamples,C.samples)}function Oe(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(C){const S=s.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function _e(C,S){const O=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==As&&O!==Sa&&(Kt.getTransfer(O)===oe?(K!==si||$!==Un)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",O)),S}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=I,this.setTexture2DArray=D,this.setTexture3D=L,this.setTextureCube=q,this.rebindTextures=We,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function M3(e,t){function n(i,a=Sa){let r;const s=Kt.getTransfer(a);if(i===Un)return e.UNSIGNED_BYTE;if(i===wp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Dp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Px)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===zx)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nx)return e.BYTE;if(i===Ox)return e.SHORT;if(i===Fo)return e.UNSIGNED_SHORT;if(i===Cp)return e.INT;if(i===yi)return e.UNSIGNED_INT;if(i===mi)return e.FLOAT;if(i===na)return e.HALF_FLOAT;if(i===Fx)return e.ALPHA;if(i===Bx)return e.RGB;if(i===si)return e.RGBA;if(i===ia)return e.DEPTH_COMPONENT;if(i===or)return e.DEPTH_STENCIL;if(i===Ix)return e.RED;if(i===Up)return e.RED_INTEGER;if(i===Ts)return e.RG;if(i===Lp)return e.RG_INTEGER;if(i===Np)return e.RGBA_INTEGER;if(i===oc||i===lc||i===cc||i===uc)if(s===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xd||i===Wd||i===qd||i===Yd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jd||i===Zd||i===Kd||i===Qd||i===Jd||i===$d||i===th)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jd||i===Zd)return s===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Kd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qd)return r.COMPRESSED_R11_EAC;if(i===Jd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$d)return r.COMPRESSED_RG11_EAC;if(i===th)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===eh||i===nh||i===ih||i===ah||i===rh||i===sh||i===oh||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh||i===ph)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===eh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ih)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ch)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ph)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mh||i===gh||i===_h)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mh)return s===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vh||i===xh||i===Sh||i===yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===vh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const E3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new Qx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new bi({vertexShader:E3,fragmentShader:b3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ei(new hu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A3 extends zs{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,v=null;const M=typeof XRWebGLBinding<"u",g=new T3,f={},m=n.getContextAttributes();let x=null,y=null;const R=[],T=[],A=new ne;let _=null;const b=new wn;b.viewport=new we;const F=new wn;F.viewport=new we;const w=[b,F],z=new Bb;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=R[Q];return rt===void 0&&(rt=new df,R[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=R[Q];return rt===void 0&&(rt=new df,R[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=R[Q];return rt===void 0&&(rt=new df,R[Q]=rt),rt.getHandSpace()};function I(Q){const rt=T.indexOf(Q.inputSource);if(rt===-1)return;const lt=R[rt];lt!==void 0&&(lt.update(Q.inputSource,Q.frame,c||s),lt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function D(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",D),a.removeEventListener("inputsourceschange",L);for(let Q=0;Q<R.length;Q++){const rt=T[Q];rt!==null&&(T[Q]=null,R[Q].disconnect(rt))}B=null,k=null,g.reset();for(const Q in f)delete f[Q];t.setRenderTarget(x),d=null,u=null,p=null,a=null,y=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(x=t.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",D),a.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Ft=null,Rt=null;m.depth&&(Rt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,lt=m.stencil?or:ia,Ft=m.stencil?Bo:yi);const Dt={colorFormat:n.RGBA8,depthFormat:Rt,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Dt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new xi(u.textureWidth,u.textureHeight,{format:si,type:Un,depthTexture:new Ho(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(a,n,lt),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new xi(d.framebufferWidth,d.framebufferHeight,{format:si,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),ie.setContext(a),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function L(Q){for(let rt=0;rt<Q.removed.length;rt++){const lt=Q.removed[rt],Ft=T.indexOf(lt);Ft>=0&&(T[Ft]=null,R[Ft].disconnect(lt))}for(let rt=0;rt<Q.added.length;rt++){const lt=Q.added[rt];let Ft=T.indexOf(lt);if(Ft===-1){for(let Dt=0;Dt<R.length;Dt++)if(Dt>=T.length){T.push(lt),Ft=Dt;break}else if(T[Dt]===null){T[Dt]=lt,Ft=Dt;break}if(Ft===-1)break}const Rt=R[Ft];Rt&&Rt.connect(lt)}}const q=new G,Z=new G;function nt(Q,rt,lt){q.setFromMatrixPosition(rt.matrixWorld),Z.setFromMatrixPosition(lt.matrixWorld);const Ft=q.distanceTo(Z),Rt=rt.projectionMatrix.elements,Dt=lt.projectionMatrix.elements,We=Rt[14]/(Rt[10]-1),Zt=Rt[14]/(Rt[10]+1),re=(Rt[9]+1)/Rt[5],pe=(Rt[9]-1)/Rt[5],Ht=(Rt[8]-1)/Rt[0],De=(Dt[8]+1)/Dt[0],U=We*Ht,Oe=We*De,ae=Ft/(-Ht+De),_e=ae*-Ht;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Rt[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Mt=We+ae,C=Zt+ae,S=U-_e,O=Oe+(Ft-_e),K=re*Zt/C*Mt,$=pe*Zt/C*Mt;Q.projectionMatrix.makePerspective(S,O,K,$,Mt,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pt(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let rt=Q.near,lt=Q.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(lt=g.depthFar)),z.near=F.near=b.near=rt,z.far=F.far=b.far=lt,(B!==z.near||k!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,k=z.far),z.layers.mask=Q.layers.mask|6,b.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const Ft=Q.parent,Rt=z.cameras;pt(z,Ft);for(let Dt=0;Dt<Rt.length;Dt++)pt(Rt[Dt],Ft);Rt.length===2?nt(z,b,F):z.projectionMatrix.copy(b.projectionMatrix),dt(Q,z,Ft)};function dt(Q,rt,lt){lt===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(lt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Mh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Q){return f[Q]};let Lt=null;function Qt(Q,rt){if(h=rt.getViewerPose(c||s),v=rt,h!==null){const lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ft=!1;lt.length!==z.cameras.length&&(z.cameras.length=0,Ft=!0);for(let Zt=0;Zt<lt.length;Zt++){const re=lt[Zt];let pe=null;if(d!==null)pe=d.getViewport(re);else{const De=p.getViewSubImage(u,re);pe=De.viewport,Zt===0&&(t.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(y))}let Ht=w[Zt];Ht===void 0&&(Ht=new wn,Ht.layers.enable(Zt),Ht.viewport=new we,w[Zt]=Ht),Ht.matrix.fromArray(re.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(re.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(pe.x,pe.y,pe.width,pe.height),Zt===0&&(z.matrix.copy(Ht.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ft===!0&&z.cameras.push(Ht)}const Rt=a.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const Zt=p.getDepthInformation(lt[0]);Zt&&Zt.isValid&&Zt.texture&&g.init(Zt,a.renderState)}if(Rt&&Rt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Zt=0;Zt<lt.length;Zt++){const re=lt[Zt].camera;if(re){let pe=f[re];pe||(pe=new Qx,f[re]=pe);const Ht=p.getCameraImage(re);pe.sourceTexture=Ht}}}}for(let lt=0;lt<R.length;lt++){const Ft=T[lt],Rt=R[lt];Ft!==null&&Rt!==void 0&&Rt.update(Ft,rt,c||s)}Lt&&Lt(Q,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),v=null}const ie=new nS;ie.setAnimationLoop(Qt),this.setAnimationLoop=function(Q){Lt=Q},this.dispose=function(){}}}const Qa=new Mi,R3=new Te;function C3(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Jx(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,x,y){f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),v(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),M(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===yn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===yn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),x=m.envMap,y=m.envMapRotation;x&&(g.envMap.value=x,Qa.copy(y),Qa.x*=-1,Qa.y*=-1,Qa.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qa.y*=-1,Qa.z*=-1),g.envMapRotation.value.setFromMatrix4(R3.makeRotationFromEuler(Qa)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=x*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function w3(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const y=x.program;i.uniformBlockBinding(m,y)}function c(m,x){let y=a[m.id];y===void 0&&(v(m),y=h(m),a[m.id]=y,m.addEventListener("dispose",g));const R=x.program;i.updateUBOMapping(m,R);const T=t.render.frame;r[m.id]!==T&&(u(m),r[m.id]=T)}function h(m){const x=p();m.__bindingPointIndex=x;const y=e.createBuffer(),R=m.__size,T=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,R,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,y),y}function p(){for(let m=0;m<o;m++)if(s.indexOf(m)===-1)return s.push(m),m;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const x=a[m.id],y=m.uniforms,R=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let T=0,A=y.length;T<A;T++){const _=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,F=_.length;b<F;b++){const w=_[b];if(d(w,T,b,R)===!0){const z=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let I=0;I<B.length;I++){const D=B[I],L=M(D);typeof D=="number"||typeof D=="boolean"?(w.__data[0]=D,e.bufferSubData(e.UNIFORM_BUFFER,z+k,w.__data)):D.isMatrix3?(w.__data[0]=D.elements[0],w.__data[1]=D.elements[1],w.__data[2]=D.elements[2],w.__data[3]=0,w.__data[4]=D.elements[3],w.__data[5]=D.elements[4],w.__data[6]=D.elements[5],w.__data[7]=0,w.__data[8]=D.elements[6],w.__data[9]=D.elements[7],w.__data[10]=D.elements[8],w.__data[11]=0):(D.toArray(w.__data,k),k+=L.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(m,x,y,R){const T=m.value,A=x+"_"+y;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const _=R[A];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return R[A]=T,!0}else if(_.equals(T)===!1)return _.copy(T),!0}return!1}function v(m){const x=m.uniforms;let y=0;const R=16;for(let A=0,_=x.length;A<_;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let F=0,w=b.length;F<w;F++){const z=b[F],B=Array.isArray(z.value)?z.value:[z.value];for(let k=0,I=B.length;k<I;k++){const D=B[k],L=M(D),q=y%R,Z=q%L.boundary,nt=q+Z;y+=Z,nt!==0&&R-nt<L.storage&&(y+=R-nt),z.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=L.storage}}}const T=y%R;return T>0&&(y+=R-T),m.__size=y,m.__cache={},this}function M(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ut("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);s=[],a={},r={}}return{bind:l,update:c,dispose:f}}const D3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function U3(){return ui===null&&(ui=new xb(D3,16,16,Ts,na),ui.name="DFG_LUT",ui.minFilter=ln,ui.magFilter=ln,ui.wrapS=Wi,ui.wrapT=Wi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class L3{constructor(t={}){const{canvas:n=KE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Un}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const M=d,g=new Set([Np,Lp,Up]),f=new Set([Un,yi,Fo,Bo,wp,Dp]),m=new Uint32Array(4),x=new Int32Array(4);let y=null,R=null;const T=[],A=[];let _=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let F=!1;this._outputColorSpace=Vn;let w=0,z=0,B=null,k=-1,I=null;const D=new we,L=new we;let q=null;const Z=new jt(0);let nt=0,pt=n.width,dt=n.height,Lt=1,Qt=null,ie=null;const Q=new we(0,0,pt,dt),rt=new we(0,0,pt,dt);let lt=!1;const Ft=new Fp;let Rt=!1,Dt=!1;const We=new Te,Zt=new G,re=new we,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function De(){return B===null?Lt:1}let U=i;function Oe(E,P){return n.getContext(E,P)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ap}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",ve,!1),U===null){const P="webgl2";if(U=Oe(P,E),U===null)throw Oe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw $t("WebGLRenderer: "+E.message),E}let ae,_e,Mt,C,S,O,K,$,j,_t,st,At,Ct,tt,it,vt,St,ht,Gt,N,ot,at,gt;function et(){ae=new LA(U),ae.init(),ot=new M3(U,ae),_e=new bA(U,ae,t,ot),Mt=new S3(U,ae),_e.reversedDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),C=new PA(U),S=new s3,O=new y3(U,ae,Mt,S,_e,ot,C),K=new UA(b),$=new Hb(U),at=new MA(U,$),j=new NA(U,$,C,at),_t=new FA(U,j,$,at,C),ht=new zA(U,_e,O),it=new TA(S),st=new r3(b,K,ae,_e,at,it),At=new C3(b,S),Ct=new l3,tt=new p3(ae),St=new yA(b,K,Mt,_t,v,l),vt=new x3(b,_t,_e),gt=new w3(U,C,_e,Mt),Gt=new EA(U,ae,C),N=new OA(U,ae,C),C.programs=st.programs,b.capabilities=_e,b.extensions=ae,b.properties=S,b.renderLists=Ct,b.shadowMap=vt,b.state=Mt,b.info=C}et(),M!==Un&&(_=new IA(M,n.width,n.height,a,r));const Y=new A3(b,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(E){E!==void 0&&(Lt=E,this.setSize(pt,dt,!1))},this.getSize=function(E){return E.set(pt,dt)},this.setSize=function(E,P,X=!0){if(Y.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=E,dt=P,n.width=Math.floor(E*Lt),n.height=Math.floor(P*Lt),X===!0&&(n.style.width=E+"px",n.style.height=P+"px"),_!==null&&_.setSize(n.width,n.height),this.setViewport(0,0,E,P)},this.getDrawingBufferSize=function(E){return E.set(pt*Lt,dt*Lt).floor()},this.setDrawingBufferSize=function(E,P,X){pt=E,dt=P,Lt=X,n.width=Math.floor(E*X),n.height=Math.floor(P*X),this.setViewport(0,0,E,P)},this.setEffects=function(E){if(M===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let P=0;P<E.length;P++)if(E[P].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,P,X,V){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,P,X,V),Mt.viewport(D.copy(Q).multiplyScalar(Lt).round())},this.getScissor=function(E){return E.copy(rt)},this.setScissor=function(E,P,X,V){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,P,X,V),Mt.scissor(L.copy(rt).multiplyScalar(Lt).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){Mt.setScissorTest(lt=E)},this.setOpaqueSort=function(E){Qt=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(E=!0,P=!0,X=!0){let V=0;if(E){let H=!1;if(B!==null){const ut=B.texture.format;H=g.has(ut)}if(H){const ut=B.texture.type,mt=f.has(ut),ft=St.getClearColor(),yt=St.getClearAlpha(),bt=ft.r,Pt=ft.g,Vt=ft.b;mt?(m[0]=bt,m[1]=Pt,m[2]=Vt,m[3]=yt,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=bt,x[1]=Pt,x[2]=Vt,x[3]=yt,U.clearBufferiv(U.COLOR,0,x))}else V|=U.COLOR_BUFFER_BIT}P&&(V|=U.DEPTH_BUFFER_BIT),X&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),St.dispose(),Ct.dispose(),tt.dispose(),S.dispose(),K.dispose(),_t.dispose(),at.dispose(),gt.dispose(),st.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Hp),Y.removeEventListener("sessionend",Gp),ka.stop()};function xt(E){E.preventDefault(),Dg("WebGLRenderer: Context Lost."),F=!0}function Nt(){Dg("WebGLRenderer: Context Restored."),F=!1;const E=C.autoReset,P=vt.enabled,X=vt.autoUpdate,V=vt.needsUpdate,H=vt.type;et(),C.autoReset=E,vt.enabled=P,vt.autoUpdate=X,vt.needsUpdate=V,vt.type=H}function ve(E){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const P=E.target;P.removeEventListener("dispose",se),Ri(P)}function Ri(E){Ci(E),S.remove(E)}function Ci(E){const P=S.get(E).programs;P!==void 0&&(P.forEach(function(X){st.releaseProgram(X)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,P,X,V,H,ut){P===null&&(P=pe);const mt=H.isMesh&&H.matrixWorld.determinant()<0,ft=cS(E,P,X,V,H);Mt.setMaterial(V,mt);let yt=X.index,bt=1;if(V.wireframe===!0){if(yt=j.getWireframeAttribute(X),yt===void 0)return;bt=2}const Pt=X.drawRange,Vt=X.attributes.position;let Tt=Pt.start*bt,ue=(Pt.start+Pt.count)*bt;ut!==null&&(Tt=Math.max(Tt,ut.start*bt),ue=Math.min(ue,(ut.start+ut.count)*bt)),yt!==null?(Tt=Math.max(Tt,0),ue=Math.min(ue,yt.count)):Vt!=null&&(Tt=Math.max(Tt,0),ue=Math.min(ue,Vt.count));const Ue=ue-Tt;if(Ue<0||Ue===1/0)return;at.setup(H,V,ft,X,yt);let Ae,fe=Gt;if(yt!==null&&(Ae=$.get(yt),fe=N,fe.setIndex(Ae)),H.isMesh)V.wireframe===!0?(Mt.setLineWidth(V.wireframeLinewidth*De()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(H.isLine){let rn=V.linewidth;rn===void 0&&(rn=1),Mt.setLineWidth(rn*De()),H.isLineSegments?fe.setMode(U.LINES):H.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else H.isPoints?fe.setMode(U.POINTS):H.isSprite&&fe.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)kc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))fe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const rn=H._multiDrawStarts,Et=H._multiDrawCounts,bn=H._multiDrawCount,Jt=yt?$.get(yt).bytesPerElement:1,$n=S.get(V).currentProgram.getUniforms();for(let li=0;li<bn;li++)$n.setValue(U,"_gl_DrawID",li),fe.render(rn[li]/Jt,Et[li])}else if(H.isInstancedMesh)fe.renderInstances(Tt,Ue,H.count);else if(X.isInstancedBufferGeometry){const rn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,rn);fe.renderInstances(Tt,Ue,Et)}else fe.render(Tt,Ue)};function Ip(E,P,X){E.transparent===!0&&E.side===Gi&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,il(E,P,X),E.side=Ha,E.needsUpdate=!0,il(E,P,X),E.side=Gi):il(E,P,X)}this.compile=function(E,P,X=null){X===null&&(X=E),R=tt.get(X),R.init(P),A.push(R),X.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ut=H.material;if(ut)if(Array.isArray(ut))for(let mt=0;mt<ut.length;mt++){const ft=ut[mt];Ip(ft,X,H),V.add(ft)}else Ip(ut,X,H),V.add(ut)}),R=A.pop(),V},this.compileAsync=function(E,P,X=null){const V=this.compile(E,P,X);return new Promise(H=>{function ut(){if(V.forEach(function(mt){S.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){H(E);return}setTimeout(ut,10)}ae.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let gu=null;function lS(E){gu&&gu(E)}function Hp(){ka.stop()}function Gp(){ka.start()}const ka=new nS;ka.setAnimationLoop(lS),typeof self<"u"&&ka.setContext(self),this.setAnimationLoop=function(E){gu=E,Y.setAnimationLoop(E),E===null?ka.stop():ka.start()},Y.addEventListener("sessionstart",Hp),Y.addEventListener("sessionend",Gp),this.render=function(E,P){if(P!==void 0&&P.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const X=Y.enabled===!0&&Y.isPresenting===!0,V=_!==null&&(B===null||X)&&_.begin(b,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(P),P=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,P,B),R=tt.get(E,A.length),R.init(P),A.push(R),We.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ft.setFromProjectionMatrix(We,gi,P.reversedDepth),Dt=this.localClippingEnabled,Rt=it.init(this.clippingPlanes,Dt),y=Ct.get(E,T.length),y.init(),T.push(y),Y.enabled===!0&&Y.isPresenting===!0){const mt=b.xr.getDepthSensingMesh();mt!==null&&_u(mt,P,-1/0,b.sortObjects)}_u(E,P,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(Qt,ie),Ht=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ht&&St.addToRenderList(y,E),this.info.render.frame++,Rt===!0&&it.beginShadows();const H=R.state.shadowsArray;if(vt.render(H,E,P),Rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&_.hasRenderPass())===!1){const mt=y.opaque,ft=y.transmissive;if(R.setupLights(),P.isArrayCamera){const yt=P.cameras;if(ft.length>0)for(let bt=0,Pt=yt.length;bt<Pt;bt++){const Vt=yt[bt];kp(mt,ft,E,Vt)}Ht&&St.render(E);for(let bt=0,Pt=yt.length;bt<Pt;bt++){const Vt=yt[bt];Vp(y,E,Vt,Vt.viewport)}}else ft.length>0&&kp(mt,ft,E,P),Ht&&St.render(E),Vp(y,E,P)}B!==null&&z===0&&(O.updateMultisampleRenderTarget(B),O.updateRenderTargetMipmap(B)),V&&_.end(b),E.isScene===!0&&E.onAfterRender(b,E,P),at.resetDefaultState(),k=-1,I=null,A.pop(),A.length>0?(R=A[A.length-1],Rt===!0&&it.setGlobalState(b.clippingPlanes,R.state.camera)):R=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function _u(E,P,X,V){if(E.visible===!1)return;if(E.layers.test(P.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(P);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ft.intersectsSprite(E)){V&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(We);const mt=_t.update(E),ft=E.material;ft.visible&&y.push(E,mt,ft,X,re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ft.intersectsObject(E))){const mt=_t.update(E),ft=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),re.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),re.copy(mt.boundingSphere.center)),re.applyMatrix4(E.matrixWorld).applyMatrix4(We)),Array.isArray(ft)){const yt=mt.groups;for(let bt=0,Pt=yt.length;bt<Pt;bt++){const Vt=yt[bt],Tt=ft[Vt.materialIndex];Tt&&Tt.visible&&y.push(E,mt,Tt,X,re.z,Vt)}}else ft.visible&&y.push(E,mt,ft,X,re.z,null)}}const ut=E.children;for(let mt=0,ft=ut.length;mt<ft;mt++)_u(ut[mt],P,X,V)}function Vp(E,P,X,V){const{opaque:H,transmissive:ut,transparent:mt}=E;R.setupLightsView(X),Rt===!0&&it.setGlobalState(b.clippingPlanes,X),V&&Mt.viewport(D.copy(V)),H.length>0&&nl(H,P,X),ut.length>0&&nl(ut,P,X),mt.length>0&&nl(mt,P,X),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function kp(E,P,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[V.id]===void 0){const Tt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[V.id]=new xi(1,1,{generateMipmaps:!0,type:Tt?na:Un,minFilter:sr,samples:Math.max(4,_e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const ut=R.state.transmissionRenderTarget[V.id],mt=V.viewport||D;ut.setSize(mt.z*b.transmissionResolutionScale,mt.w*b.transmissionResolutionScale);const ft=b.getRenderTarget(),yt=b.getActiveCubeFace(),bt=b.getActiveMipmapLevel();b.setRenderTarget(ut),b.getClearColor(Z),nt=b.getClearAlpha(),nt<1&&b.setClearColor(16777215,.5),b.clear(),Ht&&St.render(X);const Pt=b.toneMapping;b.toneMapping=vi;const Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),R.setupLightsView(V),Rt===!0&&it.setGlobalState(b.clippingPlanes,V),nl(E,X,V),O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ue=0,Ue=P.length;ue<Ue;ue++){const Ae=P[ue],{object:fe,geometry:rn,material:Et,group:bn}=Ae;if(Et.side===Gi&&fe.layers.test(V.layers)){const Jt=Et.side;Et.side=yn,Et.needsUpdate=!0,Xp(fe,X,V,rn,Et,bn),Et.side=Jt,Et.needsUpdate=!0,Tt=!0}}Tt===!0&&(O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut))}b.setRenderTarget(ft,yt,bt),b.setClearColor(Z,nt),Vt!==void 0&&(V.viewport=Vt),b.toneMapping=Pt}function nl(E,P,X){const V=P.isScene===!0?P.overrideMaterial:null;for(let H=0,ut=E.length;H<ut;H++){const mt=E[H],{object:ft,geometry:yt,group:bt}=mt;let Pt=mt.material;Pt.allowOverride===!0&&V!==null&&(Pt=V),ft.layers.test(X.layers)&&Xp(ft,P,X,yt,Pt,bt)}}function Xp(E,P,X,V,H,ut){E.onBeforeRender(b,P,X,V,H,ut),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(b,P,X,V,E,ut),H.transparent===!0&&H.side===Gi&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,b.renderBufferDirect(X,P,V,H,E,ut),H.side=Ha,H.needsUpdate=!0,b.renderBufferDirect(X,P,V,H,E,ut),H.side=Gi):b.renderBufferDirect(X,P,V,H,E,ut),E.onAfterRender(b,P,X,V,H,ut)}function il(E,P,X){P.isScene!==!0&&(P=pe);const V=S.get(E),H=R.state.lights,ut=R.state.shadowsArray,mt=H.state.version,ft=st.getParameters(E,H.state,ut,P,X),yt=st.getProgramCacheKey(ft);let bt=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?P.environment:null,V.fog=P.fog;const Pt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=K.get(E.envMap||V.environment,Pt),V.envMapRotation=V.environment!==null&&E.envMap===null?P.environmentRotation:E.envMapRotation,bt===void 0&&(E.addEventListener("dispose",se),bt=new Map,V.programs=bt);let Vt=bt.get(yt);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===mt)return qp(E,ft),Vt}else ft.uniforms=st.getUniforms(E),E.onBeforeCompile(ft,b),Vt=st.acquireProgram(ft,yt),bt.set(yt,Vt),V.uniforms=ft.uniforms;const Tt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=it.uniform),qp(E,ft),V.needsLights=fS(E),V.lightsStateVersion=mt,V.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function Wp(E){if(E.uniformsList===null){const P=E.currentProgram.getUniforms();E.uniformsList=fc.seqWithValue(P.seq,E.uniforms)}return E.uniformsList}function qp(E,P){const X=S.get(E);X.outputColorSpace=P.outputColorSpace,X.batching=P.batching,X.batchingColor=P.batchingColor,X.instancing=P.instancing,X.instancingColor=P.instancingColor,X.instancingMorph=P.instancingMorph,X.skinning=P.skinning,X.morphTargets=P.morphTargets,X.morphNormals=P.morphNormals,X.morphColors=P.morphColors,X.morphTargetsCount=P.morphTargetsCount,X.numClippingPlanes=P.numClippingPlanes,X.numIntersection=P.numClipIntersection,X.vertexAlphas=P.vertexAlphas,X.vertexTangents=P.vertexTangents,X.toneMapping=P.toneMapping}function cS(E,P,X,V,H){P.isScene!==!0&&(P=pe),O.resetTextureUnits();const ut=P.fog,mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?P.environment:null,ft=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:As,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,bt=K.get(V.envMap||mt,yt),Pt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Ue=!!X.morphAttributes.color;let Ae=vi;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ae=b.toneMapping);const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rn=fe!==void 0?fe.length:0,Et=S.get(V),bn=R.state.lights;if(Rt===!0&&(Dt===!0||E!==I)){const qe=E===I&&V.id===k;it.setState(V,E,qe)}let Jt=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==bn.state.version||Et.outputColorSpace!==ft||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==bt||V.fog===!0&&Et.fog!==ut||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Pt||Et.vertexTangents!==Vt||Et.morphTargets!==Tt||Et.morphNormals!==ue||Et.morphColors!==Ue||Et.toneMapping!==Ae||Et.morphTargetsCount!==rn)&&(Jt=!0):(Jt=!0,Et.__version=V.version);let $n=Et.currentProgram;Jt===!0&&($n=il(V,P,H));let li=!1,Xa=!1,br=!1;const me=$n.getUniforms(),Qe=Et.uniforms;if(Mt.useProgram($n.program)&&(li=!0,Xa=!0,br=!0),V.id!==k&&(k=V.id,Xa=!0),li||I!==E){Mt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(U,"projectionMatrix",E.projectionMatrix),me.setValue(U,"viewMatrix",E.matrixWorldInverse);const sa=me.map.cameraPosition;sa!==void 0&&sa.setValue(U,Zt.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&me.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,Xa=!0,br=!0)}if(Et.needsLights&&(bn.state.directionalShadowMap.length>0&&me.setValue(U,"directionalShadowMap",bn.state.directionalShadowMap,O),bn.state.spotShadowMap.length>0&&me.setValue(U,"spotShadowMap",bn.state.spotShadowMap,O),bn.state.pointShadowMap.length>0&&me.setValue(U,"pointShadowMap",bn.state.pointShadowMap,O)),H.isSkinnedMesh){me.setOptional(U,H,"bindMatrix"),me.setOptional(U,H,"bindMatrixInverse");const qe=H.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),me.setValue(U,"boneTexture",qe.boneTexture,O))}H.isBatchedMesh&&(me.setOptional(U,H,"batchingTexture"),me.setValue(U,"batchingTexture",H._matricesTexture,O),me.setOptional(U,H,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",H._indirectTexture,O),me.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",H._colorsTexture,O));const ra=X.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&ht.update(H,X,$n),(Xa||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,me.setValue(U,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&P.environment!==null&&(Qe.envMapIntensity.value=P.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=U3()),Xa&&(me.setValue(U,"toneMappingExposure",b.toneMappingExposure),Et.needsLights&&uS(Qe,br),ut&&V.fog===!0&&At.refreshFogUniforms(Qe,ut),At.refreshMaterialUniforms(Qe,V,Lt,dt,R.state.transmissionRenderTarget[E.id]),fc.upload(U,Wp(Et),Qe,O)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fc.upload(U,Wp(Et),Qe,O),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&me.setValue(U,"center",H.center),me.setValue(U,"modelViewMatrix",H.modelViewMatrix),me.setValue(U,"normalMatrix",H.normalMatrix),me.setValue(U,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const qe=V.uniformsGroups;for(let sa=0,Tr=qe.length;sa<Tr;sa++){const Yp=qe[sa];gt.update(Yp,$n),gt.bind(Yp,$n)}}return $n}function uS(E,P){E.ambientLightColor.needsUpdate=P,E.lightProbe.needsUpdate=P,E.directionalLights.needsUpdate=P,E.directionalLightShadows.needsUpdate=P,E.pointLights.needsUpdate=P,E.pointLightShadows.needsUpdate=P,E.spotLights.needsUpdate=P,E.spotLightShadows.needsUpdate=P,E.rectAreaLights.needsUpdate=P,E.hemisphereLights.needsUpdate=P}function fS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,P,X){const V=S.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=P,S.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,P){const X=S.get(E);X.__webglFramebuffer=P,X.__useDefaultFramebuffer=P===void 0};const dS=U.createFramebuffer();this.setRenderTarget=function(E,P=0,X=0){B=E,w=P,z=X;let V=null,H=!1,ut=!1;if(E){const ft=S.get(E);if(ft.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),D.copy(E.viewport),L.copy(E.scissor),q=E.scissorTest,Mt.viewport(D),Mt.scissor(L),Mt.setScissorTest(q),k=-1;return}else if(ft.__webglFramebuffer===void 0)O.setupRenderTarget(E);else if(ft.__hasExternalTextures)O.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pt=E.depthTexture;if(ft.__boundDepthTexture!==Pt){if(Pt!==null&&S.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(E)}}const yt=E.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ut=!0);const bt=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(bt[P])?V=bt[P][X]:V=bt[P],H=!0):E.samples>0&&O.useMultisampledRTT(E)===!1?V=S.get(E).__webglMultisampledFramebuffer:Array.isArray(bt)?V=bt[X]:V=bt,D.copy(E.viewport),L.copy(E.scissor),q=E.scissorTest}else D.copy(Q).multiplyScalar(Lt).floor(),L.copy(rt).multiplyScalar(Lt).floor(),q=lt;if(X!==0&&(V=dS),Mt.bindFramebuffer(U.FRAMEBUFFER,V)&&Mt.drawBuffers(E,V),Mt.viewport(D),Mt.scissor(L),Mt.setScissorTest(q),H){const ft=S.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,ft.__webglTexture,X)}else if(ut){const ft=P;for(let yt=0;yt<E.textures.length;yt++){const bt=S.get(E.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,bt.__webglTexture,X,ft)}}else if(E!==null&&X!==0){const ft=S.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,X)}k=-1},this.readRenderTargetPixels=function(E,P,X,V,H,ut,mt,ft=0){if(!(E&&E.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt){Mt.bindFramebuffer(U.FRAMEBUFFER,yt);try{const bt=E.textures[ft],Pt=bt.format,Vt=bt.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft),!_e.textureFormatReadable(Pt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Vt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=E.width-V&&X>=0&&X<=E.height-H&&U.readPixels(P,X,V,H,ot.convert(Pt),ot.convert(Vt),ut)}finally{const bt=B!==null?S.get(B).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,P,X,V,H,ut,mt,ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt)if(P>=0&&P<=E.width-V&&X>=0&&X<=E.height-H){Mt.bindFramebuffer(U.FRAMEBUFFER,yt);const bt=E.textures[ft],Pt=bt.format,Vt=bt.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft),!_e.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.bufferData(U.PIXEL_PACK_BUFFER,ut.byteLength,U.STREAM_READ),U.readPixels(P,X,V,H,ot.convert(Pt),ot.convert(Vt),0);const ue=B!==null?S.get(B).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,ue);const Ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await QE(U,Ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ut),U.deleteBuffer(Tt),U.deleteSync(Ue),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,P=null,X=0){const V=Math.pow(2,-X),H=Math.floor(E.image.width*V),ut=Math.floor(E.image.height*V),mt=P!==null?P.x:0,ft=P!==null?P.y:0;O.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,mt,ft,H,ut),Mt.unbindTexture()};const hS=U.createFramebuffer(),pS=U.createFramebuffer();this.copyTextureToTexture=function(E,P,X=null,V=null,H=0,ut=0){let mt,ft,yt,bt,Pt,Vt,Tt,ue,Ue;const Ae=E.isCompressedTexture?E.mipmaps[ut]:E.image;if(X!==null)mt=X.max.x-X.min.x,ft=X.max.y-X.min.y,yt=X.isBox3?X.max.z-X.min.z:1,bt=X.min.x,Pt=X.min.y,Vt=X.isBox3?X.min.z:0;else{const Qe=Math.pow(2,-H);mt=Math.floor(Ae.width*Qe),ft=Math.floor(Ae.height*Qe),E.isDataArrayTexture?yt=Ae.depth:E.isData3DTexture?yt=Math.floor(Ae.depth*Qe):yt=1,bt=0,Pt=0,Vt=0}V!==null?(Tt=V.x,ue=V.y,Ue=V.z):(Tt=0,ue=0,Ue=0);const fe=ot.convert(P.format),rn=ot.convert(P.type);let Et;P.isData3DTexture?(O.setTexture3D(P,0),Et=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(O.setTexture2DArray(P,0),Et=U.TEXTURE_2D_ARRAY):(O.setTexture2D(P,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const bn=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$n=U.getParameter(U.UNPACK_SKIP_PIXELS),li=U.getParameter(U.UNPACK_SKIP_ROWS),Xa=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);const br=E.isDataArrayTexture||E.isData3DTexture,me=P.isDataArrayTexture||P.isData3DTexture;if(E.isDepthTexture){const Qe=S.get(E),ra=S.get(P),qe=S.get(Qe.__renderTarget),sa=S.get(ra.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,qe.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,sa.__webglFramebuffer);for(let Tr=0;Tr<yt;Tr++)br&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(E).__webglTexture,H,Vt+Tr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(P).__webglTexture,ut,Ue+Tr)),U.blitFramebuffer(bt,Pt,mt,ft,Tt,ue,mt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||S.has(E)){const Qe=S.get(E),ra=S.get(P);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,hS),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,pS);for(let qe=0;qe<yt;qe++)br?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qe.__webglTexture,H,Vt+qe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qe.__webglTexture,H),me?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ra.__webglTexture,ut,Ue+qe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ra.__webglTexture,ut),H!==0?U.blitFramebuffer(bt,Pt,mt,ft,Tt,ue,mt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):me?U.copyTexSubImage3D(Et,ut,Tt,ue,Ue+qe,bt,Pt,mt,ft):U.copyTexSubImage2D(Et,ut,Tt,ue,bt,Pt,mt,ft);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Et,ut,Tt,ue,Ue,mt,ft,yt,fe,rn,Ae.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,ut,Tt,ue,Ue,mt,ft,yt,fe,Ae.data):U.texSubImage3D(Et,ut,Tt,ue,Ue,mt,ft,yt,fe,rn,Ae):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ut,Tt,ue,mt,ft,fe,rn,Ae.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ut,Tt,ue,Ae.width,Ae.height,fe,Ae.data):U.texSubImage2D(U.TEXTURE_2D,ut,Tt,ue,mt,ft,fe,rn,Ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,bn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$n),U.pixelStorei(U.UNPACK_SKIP_ROWS,li),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xa),ut===0&&P.generateMipmaps&&U.generateMipmap(Et),Mt.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&O.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?O.setTextureCube(E,0):E.isData3DTexture?O.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?O.setTexture2DArray(E,0):O.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){w=0,z=0,B=null,Mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}}const N3={clusters:[{id:0,label:"Topology Engine",members:["sheaf_laplacian.py","transport_maps.py","torch_sheaf.py","spectral.py","persistence.py"],bar_length:.85},{id:1,label:"Experiment Pipeline",members:["phase3c.py","phase3d.py","sweep.py"],bar_length:.72},{id:2,label:"Visualization",members:["plots.py","dashboard.py"],bar_length:.45}],noise:["scratch.py","old_test.py"],distances:null},Ja={gold:13666856,teal:4565168,gray:5525310,bg:986376,edge:3485982,glow:15573056};function y0(e,t,n,i,a=.15){const r=new Bp(a,16,16),s=new Db({color:i,emissive:i,emissiveIntensity:.3}),o=new Ei(r,s);return o.position.set(e,t,n),o}function M0(e,t,n,i=.3){const a=[e.position.clone(),t.position.clone()],r=new Jn().setFromPoints(a),s=new Zx({color:n,transparent:!0,opacity:i});return new Eb(r,s)}function O3(){var r;const e=Ie.useRef(null),[t,n]=Ie.useState(N3),[i,a]=Ie.useState("demo");return Ie.useEffect(()=>{fetch("/api/artifact/filtered").then(s=>s.ok?s.json():null).then(s=>{s&&s.clusters&&(n(s),a("live"))}).catch(()=>{})},[]),Ie.useEffect(()=>{if(!e.current)return;const s=e.current,o=s.clientWidth,l=400,c=new hb;c.background=new jt(Ja.bg);const h=new wn(50,o/l,.1,100);h.position.set(0,0,8);const p=new L3({antialias:!0});p.setSize(o,l),p.setPixelRatio(window.devicePixelRatio),s.innerHTML="",s.appendChild(p.domElement),c.add(new zb(4473924));const u=new Pb(Ja.gold,1,20);u.position.set(3,3,5),c.add(u);const d=[],v=[Ja.gold,Ja.teal,Ja.glow,7187013];t.clusters.forEach((T,A)=>{const _=v[A%v.length],b=A/t.clusters.length*Math.PI*2,F=2.5;T.members.forEach((w,z)=>{const k=b+(z-T.members.length/2)*.3,I=Math.cos(k)*F+(Math.random()-.5)*.8,D=Math.sin(k)*F+(Math.random()-.5)*.8,L=(Math.random()-.5)*.8,q=.1+T.bar_length*.1,Z=y0(I,D,L,_,q);Z.userData={label:w,cluster:A},d.push(Z),c.add(Z)})}),(t.noise||[]).forEach(T=>{const A=(Math.random()-.5)*6,_=(Math.random()-.5)*6,b=(Math.random()-.5)*2,F=y0(A,_,b,Ja.gray,.06);F.userData={label:T,cluster:-1},d.push(F),c.add(F)});const M=[];for(let T=0;T<d.length;T++)for(let A=T+1;A<d.length;A++){const _=d[T].userData.cluster,b=d[A].userData.cluster;if(_===-1||b===-1)continue;const F=d[T].position.distanceTo(d[A].position);if(_===b&&F<3){const w=v[_%v.length],z=M0(d[T],d[A],w,.4);z.userData.from=d[T],z.userData.to=d[A],M.push(z),c.add(z)}else if(_!==b&&F<2){const w=M0(d[T],d[A],Ja.edge,.15);w.userData.from=d[T],w.userData.to=d[A],M.push(w),c.add(w)}}const g=d.map(()=>new G);let f=0;function m(){for(let w=0;w<d.length;w++){const z=d[w].position,B=g[w];B.x-=z.x*.01,B.y-=z.y*.01,B.z-=z.z*.01;for(let k=0;k<d.length;k++){if(w===k)continue;const I=z.x-d[k].position.x,D=z.y-d[k].position.y,L=z.z-d[k].position.z,Z=.5/(I*I+D*D+L*L+.01);B.x+=I*Z*.016,B.y+=D*Z*.016,B.z+=L*Z*.016}for(let k=0;k<d.length;k++)if(w!==k&&d[w].userData.cluster===d[k].userData.cluster&&d[w].userData.cluster!==-1){const I=d[k].position.x-z.x,D=d[k].position.y-z.y,L=d[k].position.z-z.z;B.x+=I*.02*.016,B.y+=D*.02*.016,B.z+=L*.02*.016}B.multiplyScalar(.92)}for(let w=0;w<d.length;w++)d[w].position.add(g[w]);M.forEach(w=>{const{from:z,to:B}=w.userData;if(!z||!B)return;const k=w.geometry.attributes.position;k.setXYZ(0,z.position.x,z.position.y,z.position.z),k.setXYZ(1,B.position.x,B.position.y,B.position.z),k.needsUpdate=!0})}let x;function y(){x=requestAnimationFrame(y),f++,f<300&&m(),c.rotation.y+=.002,d.forEach(T=>{if(T.userData.cluster>=0){const A=1+.05*Math.sin(f*.02+T.userData.cluster);T.scale.setScalar(A)}}),p.render(c,h)}y();const R=()=>{const T=s.clientWidth;h.aspect=T/l,h.updateProjectionMatrix(),p.setSize(T,l)};return window.addEventListener("resize",R),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",R),p.dispose()}},[t]),W.jsx("section",{style:{padding:"var(--space-16) 0"},children:W.jsxs("div",{style:{maxWidth:"var(--content-wide)",margin:"0 auto",padding:"0 var(--space-6)"},children:[W.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-primary)",marginBottom:"var(--space-4)"},children:"Topology Visualization"}),W.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",fontWeight:500,letterSpacing:"-0.03em",marginBottom:"var(--space-4)"},children:"Artifact Space"}),W.jsxs("p",{style:{fontSize:"var(--text-base)",color:"var(--color-text-muted)",marginBottom:"var(--space-8)",maxWidth:"58ch"},children:["Each node is a file. Clusters form from persistent homology — the same math that finds structure in zeta zeros, applied to your codebase. ",i==="live"?"🟢 Live data from pipeline.":"⚪ Demo data — run /wavefront to see your project."]}),W.jsx("div",{ref:e,style:{width:"100%",height:400,borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border)",overflow:"hidden"}}),W.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",marginTop:"var(--space-4)",flexWrap:"wrap"},children:[t.clusters.map((s,o)=>W.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:["var(--color-primary)","var(--color-teal)","#eda040","var(--color-success)"][o%4],padding:"2px 8px",border:"1px solid",borderRadius:"var(--radius-full)"},children:[s.label," (",s.members.length,")"]},s.id)),((r=t.noise)==null?void 0:r.length)>0&&W.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:"var(--color-text-faint)",padding:"2px 8px",border:"1px solid var(--color-border)",borderRadius:"var(--radius-full)"},children:["noise (",t.noise.length,")"]})]})]})})}const P3=[{birth:0,death:.001,dimension:0},{birth:0,death:.007,dimension:0},{birth:0,death:.02,dimension:0},{birth:0,death:.048,dimension:0},{birth:0,death:.05,dimension:0},{birth:0,death:.082,dimension:0},{birth:0,death:.155,dimension:0},{birth:0,death:.21,dimension:0},{birth:0,death:.319,dimension:0},{birth:0,death:1/0,dimension:0},{birth:0,death:1/0,dimension:0}];function z3(){const e=Ie.useRef(null),[t,n]=Ie.useState(P3);return Ie.useEffect(()=>{fetch("/api/artifact/filtered").then(i=>i.ok?i.json():null).then(i=>{i&&i.barcode&&n(i.barcode)}).catch(()=>{})},[]),Ie.useEffect(()=>{const i=e.current;if(!i)return;const a=i.getContext("2d"),r=window.devicePixelRatio||1,s=i.offsetWidth,o=i.offsetHeight;i.width=s*r,i.height=o*r,a.setTransform(r,0,0,r,0,0);const l=getComputedStyle(document.documentElement),c={bg:l.getPropertyValue("--color-surface").trim()||"#16140d",gold:l.getPropertyValue("--color-primary").trim()||"#d08a28",teal:l.getPropertyValue("--color-teal").trim()||"#45a8b0",gray:l.getPropertyValue("--color-text-faint").trim()||"#544f3e",text:l.getPropertyValue("--color-text-muted").trim()||"#817a66",border:l.getPropertyValue("--color-border").trim()||"#35311e"};a.fillStyle=c.bg,a.fillRect(0,0,s,o);const h=t.filter(T=>isFinite(T.death)),p=h.length>0?Math.max(...h.map(T=>T.death)):1,u=h.length>0?[...h].sort((T,A)=>T.death-T.birth-(A.death-A.birth))[Math.floor(h.length/2)].death:p/2,d={top:30,bottom:30,left:60,right:20},v=s-d.left-d.right,M=o-d.top-d.bottom,g=Math.min(14,M/t.length-2),f=2,m=[...t].sort((T,A)=>{const _=isFinite(T.death)?T.death-T.birth:1/0;return(isFinite(A.death)?A.death-A.birth:1/0)-_}),x=T=>d.left+Math.min(T,p*1.1)/(p*1.1)*v;a.strokeStyle=c.gray,a.lineWidth=1,a.setLineDash([4,4]);const y=x(u);a.beginPath(),a.moveTo(y,d.top),a.lineTo(y,o-d.bottom),a.stroke(),a.setLineDash([]),a.fillStyle=c.gray,a.font='10px "JetBrains Mono", monospace',a.textAlign="center",a.fillText("median",y,d.top-8),m.forEach((T,A)=>{const _=d.top+A*(g+f),b=x(T.birth),F=T.death-T.birth,w=isFinite(F)?F>u:!0,z=isFinite(T.death)?x(T.death):s-d.right;let B;isFinite(T.death)?w?B=c.gold:B=c.gray:B=c.teal,a.fillStyle=B,a.globalAlpha=w?.9:.4,a.fillRect(b,_,Math.max(z-b,2),g),a.globalAlpha=1,isFinite(T.death)||(a.fillStyle=c.teal,a.beginPath(),a.moveTo(s-d.right,_+g/2),a.lineTo(s-d.right-6,_+1),a.lineTo(s-d.right-6,_+g-1),a.fill()),a.fillStyle=c.text,a.font='9px "JetBrains Mono", monospace',a.textAlign="right",a.fillText(`H${T.dimension}`,d.left-8,_+g-2)}),a.strokeStyle=c.border,a.lineWidth=1,a.beginPath(),a.moveTo(d.left,o-d.bottom),a.lineTo(s-d.right,o-d.bottom),a.stroke(),a.fillStyle=c.text,a.font='10px "JetBrains Mono", monospace',a.textAlign="center";const R=5;for(let T=0;T<=R;T++){const A=T/R*p*1.1;a.fillText(A.toFixed(2),x(A),o-d.bottom+16)}a.fillText("ε (filtration parameter)",s/2,o-4)},[t]),W.jsx("section",{style:{padding:"var(--space-12) 0"},children:W.jsxs("div",{style:{maxWidth:"var(--content-wide)",margin:"0 auto",padding:"0 var(--space-6)"},children:[W.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-teal)",marginBottom:"var(--space-4)"},children:"Persistence Barcode"}),W.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-xl)",fontWeight:500,letterSpacing:"-0.02em",marginBottom:"var(--space-4)"},children:"What Survived Filtration"}),W.jsxs("p",{style:{fontSize:"var(--text-sm)",color:"var(--color-text-muted)",marginBottom:"var(--space-6)",maxWidth:"55ch",lineHeight:1.8},children:["Each bar is a topological feature. ",W.jsx("span",{style:{color:"var(--color-primary)"},children:"Long gold bars"})," = real structure (persistent clusters). ",W.jsx("span",{style:{color:"var(--color-text-faint)"},children:"Short gray bars"})," = noise (filtered out). ",W.jsx("span",{style:{color:"var(--color-teal)"},children:"Teal arrows"})," = components that never die (connected components of the whole)."]}),W.jsx("div",{style:{width:"100%",height:280,borderRadius:"var(--radius-lg)",border:"1px solid var(--color-border)",overflow:"hidden"},children:W.jsx("canvas",{ref:e,style:{width:"100%",height:"100%"},"aria-label":"Persistence barcode showing birth and death of topological features"})})]})})}const F3=[.25,.28,.31,.35,.38,.41,.43,.44,.45],B3=["init","scan","cluster_0","cluster_1","cluster_2","merge","refine","synthesize","review"];function I3(){const e=Ie.useRef(null),[t,n]=Ie.useState(F3),[i,a]=Ie.useState(B3);return Ie.useEffect(()=>{fetch("/api/artifact/synthesis").then(r=>r.ok?r.json():null).then(r=>{r&&r.trajectory&&r.trajectory.length>1&&(n(r.trajectory),a(r.sections?r.sections.map(s=>s.title.slice(0,12)):r.trajectory.map((s,o)=>`step_${o}`)))}).catch(()=>{})},[]),Ie.useEffect(()=>{const r=e.current;if(!r)return;const s=r.getContext("2d"),o=window.devicePixelRatio||1,l=r.offsetWidth,c=r.offsetHeight;r.width=l*o,r.height=c*o,s.setTransform(o,0,0,o,0,0);const h=getComputedStyle(document.documentElement),p={bg:h.getPropertyValue("--color-surface").trim()||"#16140d",gold:h.getPropertyValue("--color-primary").trim()||"#d08a28",green:h.getPropertyValue("--color-success").trim()||"#6daa45",red:h.getPropertyValue("--color-red").trim()||"#e74c3c",text:h.getPropertyValue("--color-text-muted").trim()||"#817a66",border:h.getPropertyValue("--color-border").trim()||"#35311e",faint:h.getPropertyValue("--color-text-faint").trim()||"#544f3e"};s.fillStyle=p.bg,s.fillRect(0,0,l,c);const u={top:30,bottom:50,left:50,right:20},d=l-u.left-u.right,v=c-u.top-u.bottom,M=Math.min(...t)*.9,g=Math.max(...t)*1.1,f=t.length,m=g-M||1;function x(_){return u.left+(f>1?_/(f-1):.5)*d}function y(_){return u.top+v-(_-M)/m*v}s.strokeStyle=p.border,s.lineWidth=.5;for(let _=0;_<5;_++){const b=u.top+_/4*v;s.beginPath(),s.moveTo(u.left,b),s.lineTo(l-u.right,b),s.stroke()}for(let _=1;_<f;_++){const b=t[_]-t[_-1],F=x(_-1),w=x(_),z=y(t[_-1]),B=y(t[_]);s.globalAlpha=.08,s.fillStyle=b>=0?p.green:p.red,s.beginPath(),s.moveTo(F,z),s.lineTo(w,B),s.lineTo(w,u.top+v),s.lineTo(F,u.top+v),s.closePath(),s.fill(),s.globalAlpha=1}s.strokeStyle=p.gold,s.lineWidth=2.5,s.beginPath();for(let _=0;_<f;_++){const b=x(_),F=y(t[_]);_===0?s.moveTo(b,F):s.lineTo(b,F)}s.stroke();for(let _=0;_<f;_++){const b=x(_),F=y(t[_]);if(s.beginPath(),s.arc(b,F,4,0,Math.PI*2),_>0){const w=t[_]-t[_-1];s.fillStyle=w>=0?p.green:p.red}else s.fillStyle=p.gold;if(s.fill(),_>0){const w=t[_]-t[_-1];s.fillStyle=w>=0?p.green:p.red,s.font="12px sans-serif",s.textAlign="center",s.fillText(w>=.01?"▲":w<=-.01?"▼":"─",b,F-10)}}s.fillStyle=p.faint,s.font='9px "JetBrains Mono", monospace',s.textAlign="center";for(let _=0;_<f;_++)f>10&&_%2!==0&&_!==f-1||(s.save(),s.translate(x(_),c-u.bottom+14),s.rotate(-.4),s.fillText(i[_]||`${_}`,0,0),s.restore());s.fillStyle=p.text,s.font='10px "JetBrains Mono", monospace',s.textAlign="right";for(let _=0;_<5;_++){const b=M+_/4*(g-M);s.fillText(b.toFixed(2),u.left-8,u.top+v-_/4*v+4)}s.save(),s.translate(12,u.top+v/2),s.rotate(-Math.PI/2),s.textAlign="center",s.fillStyle=p.text,s.font='10px "JetBrains Mono", monospace',s.fillText("Gini coefficient",0,0),s.restore();const R=f>1?t[f-1]-t[f-2]:0,T=R>=.01?"HIERARCHIFYING ▲":R<=-.01?"FLATTENING ▼":"STABLE ─",A=R>=.01?p.green:R<=-.01?p.red:p.gold;s.fillStyle=A,s.font='bold 11px "JetBrains Mono", monospace',s.textAlign="right",s.fillText(T,l-u.right,u.top-8)},[t,i]),W.jsx("section",{style:{padding:"var(--space-12) 0"},children:W.jsxs("div",{style:{maxWidth:"var(--content-wide)",margin:"0 auto",padding:"0 var(--space-6)"},children:[W.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-success)",marginBottom:"var(--space-4)"},children:"Gini Trajectory"}),W.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-xl)",fontWeight:500,letterSpacing:"-0.02em",marginBottom:"var(--space-4)"},children:"Shape Over Count"}),W.jsxs("p",{style:{fontSize:"var(--text-sm)",color:"var(--color-text-muted)",marginBottom:"var(--space-6)",maxWidth:"55ch",lineHeight:1.8},children:["The Gini coefficient tracks whether dominant features are emerging (",W.jsx("span",{style:{color:"var(--color-success)"},children:"▲ hierarchifying"}),") or all features are equally weighted (",W.jsx("span",{style:{color:"var(--color-red)"},children:"▼ flattening"}),"). A rising trajectory means the design is converging. A falling one means it's losing focus."]}),W.jsx("div",{style:{width:"100%",height:250,borderRadius:"var(--radius-lg)",border:"1px solid var(--color-border)",overflow:"hidden"},children:W.jsx("canvas",{ref:e,style:{width:"100%",height:"100%"},"aria-label":"Gini trajectory chart showing hierarchy evolution during design synthesis"})})]})})}const H3=[{id:1,name:"NO_AVERAGING",short:"Preserve Variance",desc:"Raw probes never averaged before filtration. The variance structure IS the topological signal. Premature summarization is a category error.",color:"var(--color-red)"},{id:2,name:"UPWARD_FLOW",short:"No Layer Skipping",desc:"L0 → L1 → L2 → L3. No implementation without design. No design without approaches. No approaches without raw context.",color:"var(--color-primary)"},{id:3,name:"WAYPOINT_ROUTING",short:"Phase Transition Gates",desc:"Every routing decision is a topological phase transition. Transitions fire when persistence diagrams exhibit qualitative change — not on a timer.",color:"var(--color-teal)"},{id:4,name:"SHAPE_OVER_COUNT",short:"Gini > Betti",desc:"The Gini trajectory of topological evolution matters more than feature count. 3 coherent sections outperform 12 scattered ones.",color:"var(--color-success)"},{id:5,name:"ADAPTIVE_SCALE",short:"Data-Driven Thresholds",desc:"The cluster threshold is extracted from the data's own geometry — the median persistence lifetime of the H₀ bars. Never fixed by the user.",color:"var(--color-primary)"}];function G3(){return W.jsx("section",{id:"axioms",style:{padding:"clamp(3rem, 8vw, 6rem) 0"},children:W.jsxs("div",{style:{maxWidth:"var(--content-wide)",margin:"0 auto",padding:"0 var(--space-6)"},children:[W.jsxs("div",{style:{marginBottom:"var(--space-12)"},children:[W.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-primary)",marginBottom:"var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-3)"},children:["Governing Axioms",W.jsx("span",{style:{flex:1,maxWidth:"3rem",height:1,background:"var(--color-primary)",opacity:.4}})]}),W.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",fontWeight:500,letterSpacing:"-0.03em",lineHeight:1.08},children:"The Field Equations"}),W.jsx("p",{style:{fontSize:"var(--text-base)",color:"var(--color-text-muted)",marginTop:"var(--space-4)",maxWidth:"58ch",lineHeight:1.75},children:"These are not guidelines. They are waypoint constraints on the space of all possible cognitive trajectories. A process satisfying all five is on-shell."})]}),W.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(300px, 100%), 1fr))",gap:"var(--space-6)"},children:H3.map(e=>W.jsxs("div",{style:{background:"var(--color-surface)",border:"1px solid var(--color-border)",borderLeft:`3px solid ${e.color}`,borderRadius:"var(--radius-xl)",padding:"var(--space-6) var(--space-8)"},children:[W.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--color-text-faint)",marginBottom:"var(--space-2)"},children:["Axiom ",e.id]}),W.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-lg)",fontWeight:500,marginBottom:"var(--space-2)"},children:e.name}),W.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:e.color,marginBottom:"var(--space-4)"},children:e.short}),W.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--color-text-muted)",lineHeight:1.72},children:e.desc})]},e.id))})]})})}const V3=[{name:"/dw-map",layer:"L0",desc:"Raw artifact ingestion with entropy gate. Preserves full variance.",color:"var(--color-text-faint)"},{name:"/dw-filter",layer:"L1",desc:"H₀ persistent clustering and module routing. Adaptive epsilon.",color:"var(--color-teal)"},{name:"/dw-ascend",layer:"L2/L3",desc:"Gini-routed synthesis with an LLM consistency review (sheaf-inspired).",color:"var(--color-primary)"},{name:"/wavefront",layer:"ALL",desc:"Full pipeline orchestrator. Enforces all 5 axioms end-to-end.",color:"var(--color-success)"},{name:"/topological-brainstorm",layer:"ALL",desc:"Brainstorming-as-filtration. Idea-spaces as point clouds.",color:"var(--color-primary)"},{name:"/boundary-mode",layer:"L3",desc:"Cross-system collaboration at a higher abstraction level.",color:"var(--color-teal)"}];function k3(){return W.jsx("section",{id:"skills",style:{padding:"clamp(3rem, 8vw, 6rem) 0"},children:W.jsxs("div",{style:{maxWidth:"var(--content-wide)",margin:"0 auto",padding:"0 var(--space-6)"},children:[W.jsxs("div",{style:{marginBottom:"var(--space-12)"},children:[W.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-primary)",marginBottom:"var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-3)"},children:["Skills",W.jsx("span",{style:{flex:1,maxWidth:"3rem",height:1,background:"var(--color-primary)",opacity:.4}})]}),W.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",fontWeight:500,letterSpacing:"-0.03em",lineHeight:1.08},children:"The Toolkit"})]}),W.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(280px, 100%), 1fr))",gap:"var(--space-4)"},children:V3.map(e=>W.jsxs("div",{style:{background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-lg)",padding:"var(--space-5) var(--space-6)"},children:[W.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--color-text-faint)",marginBottom:"var(--space-2)"},children:e.layer}),W.jsx("h3",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-base)",fontWeight:500,color:e.color,marginBottom:"var(--space-3)"},children:e.name}),W.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--color-text-muted)",lineHeight:1.72},children:e.desc})]},e.name))})]})})}function X3(){const[e,t]=Ie.useState(!1),n="claude plugin marketplace add RogueGringo/driftwave && claude plugin install driftwave@driftwave",i=()=>{navigator.clipboard.writeText(n).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})};return W.jsx("section",{id:"install",style:{padding:"clamp(3rem, 8vw, 6rem) 0"},children:W.jsxs("div",{style:{maxWidth:"var(--content-narrow)",margin:"0 auto",padding:"0 var(--space-6)",textAlign:"center"},children:[W.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-primary)",marginBottom:"var(--space-4)"},children:"Install"}),W.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",fontWeight:500,letterSpacing:"-0.03em",lineHeight:1.08,marginBottom:"var(--space-6)"},children:"One Command"}),W.jsx("p",{style:{fontSize:"var(--text-base)",color:"var(--color-text-muted)",marginBottom:"var(--space-10)",lineHeight:1.75},children:"After install, every Claude Code session sees the driftwave skills. The five axioms load. The pipeline runs."}),W.jsxs("div",{style:{background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",padding:"var(--space-6) var(--space-8)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-4)",marginBottom:"var(--space-8)"},children:[W.jsx("code",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-sm)",color:"var(--color-teal)",letterSpacing:"0.02em"},children:n}),W.jsx("button",{onClick:i,style:{padding:"var(--space-2) var(--space-5)",background:e?"var(--color-success)":"var(--color-primary)",color:"var(--color-bg)",borderRadius:"var(--radius-full)",fontSize:"var(--text-xs)",fontWeight:700,border:"none",cursor:"pointer",fontFamily:"var(--font-mono)",letterSpacing:"0.04em",transition:"background var(--transition-interactive)"},children:e?"COPIED":"COPY"})]}),W.jsx("div",{style:{background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-lg)",padding:"var(--space-5) var(--space-6)",fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:"var(--color-text-muted)",lineHeight:2.2,textAlign:"left",whiteSpace:"pre"},children:`plugins/driftwave/
├── .claude-plugin/plugin.json
├── skills/
│   ├── dw-map/SKILL.md
│   ├── dw-filter/SKILL.md
│   ├── dw-ascend/SKILL.md
│   ├── wavefront/SKILL.md
│   ├── topological-brainstorm/SKILL.md
│   └── boundary-mode/SKILL.md
├── hooks/hooks.json
├── agents/gini-watchdog.md
└── README.md`})]})})}function W3(){return W.jsx("footer",{style:{borderTop:"1px solid var(--color-divider)",padding:"var(--space-8) var(--space-6)",textAlign:"center"},children:W.jsxs("p",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:"var(--color-text-faint)",letterSpacing:"0.06em"},children:["driftwave — B. Jones, 2026",W.jsx("br",{}),W.jsx("span",{style:{color:"var(--color-text-muted)"},children:"Shape over count. Trajectory over snapshot."})]})})}function q3(){return W.jsxs(W.Fragment,{children:[W.jsx(hE,{}),W.jsxs("main",{children:[W.jsx(pE,{}),W.jsx("div",{style:{height:1,background:"var(--color-divider)"}}),W.jsx(O3,{}),W.jsx("div",{style:{height:1,background:"var(--color-divider)"}}),W.jsx(z3,{}),W.jsx(I3,{}),W.jsx("div",{style:{height:1,background:"var(--color-divider)"}}),W.jsx(gE,{}),W.jsx("div",{style:{height:1,background:"var(--color-divider)"}}),W.jsx(G3,{}),W.jsx("div",{style:{height:1,background:"var(--color-divider)"}}),W.jsx(k3,{}),W.jsx("div",{style:{height:1,background:"var(--color-divider)"}}),W.jsx(X3,{})]}),W.jsx(W3,{})]})}document.documentElement.setAttribute("data-theme","dark");fE.createRoot(document.getElementById("root")).render(W.jsx(Ie.StrictMode,{children:W.jsx(q3,{})}));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Yd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function pS(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var t=r.default;if(typeof t=="function"){var i=function s(){var l=!1;try{l=this instanceof s}catch{}return l?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var l=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(i,s,l.get?l:{enumerable:!0,get:function(){return r[s]}})}),i}var _h={exports:{}},Io={};var jx;function mS(){if(jx)return Io;jx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var Zx;function xS(){return Zx||(Zx=1,_h.exports=mS()),_h.exports}var zt=xS(),vh={exports:{}},ce={};var Kx;function gS(){if(Kx)return ce;Kx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(I,ot,it){this.props=I,this.context=ot,this.refs=M,this.updater=it||b}y.prototype.isReactComponent={},y.prototype.setState=function(I,ot){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ot,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=y.prototype;function N(I,ot,it){this.props=I,this.context=ot,this.refs=M,this.updater=it||b}var C=N.prototype=new P;C.constructor=N,E(C,y.prototype),C.isPureReactComponent=!0;var z=Array.isArray;function U(){}var L={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function D(I,ot,it){var pt=it.ref;return{$$typeof:r,type:I,key:ot,ref:pt!==void 0?pt:null,props:it}}function w(I,ot){return D(I.type,ot,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function J(I){var ot={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(it){return ot[it]})}var st=/\/+/g;function ft(I,ot){return typeof I=="object"&&I!==null&&I.key!=null?J(""+I.key):ot.toString(36)}function ct(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(U,U):(I.status="pending",I.then(function(ot){I.status==="pending"&&(I.status="fulfilled",I.value=ot)},function(ot){I.status==="pending"&&(I.status="rejected",I.reason=ot)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,ot,it,pt,Et){var Q=typeof I;(Q==="undefined"||Q==="boolean")&&(I=null);var rt=!1;if(I===null)rt=!0;else switch(Q){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(I.$$typeof){case r:case t:rt=!0;break;case g:return rt=I._init,B(rt(I._payload),ot,it,pt,Et)}}if(rt)return Et=Et(I),rt=pt===""?"."+ft(I,0):pt,z(Et)?(it="",rt!=null&&(it=rt.replace(st,"$&/")+"/"),B(Et,ot,it,"",function(It){return It})):Et!=null&&(G(Et)&&(Et=w(Et,it+(Et.key==null||I&&I.key===Et.key?"":(""+Et.key).replace(st,"$&/")+"/")+rt)),ot.push(Et)),1;rt=0;var At=pt===""?".":pt+":";if(z(I))for(var Dt=0;Dt<I.length;Dt++)pt=I[Dt],Q=At+ft(pt,Dt),rt+=B(pt,ot,it,Q,Et);else if(Dt=v(I),typeof Dt=="function")for(I=Dt.call(I),Dt=0;!(pt=I.next()).done;)pt=pt.value,Q=At+ft(pt,Dt++),rt+=B(pt,ot,it,Q,Et);else if(Q==="object"){if(typeof I.then=="function")return B(ct(I),ot,it,pt,Et);throw ot=String(I),Error("Objects are not valid as a React child (found: "+(ot==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ot)+"). If you meant to render a collection of children, use an array instead.")}return rt}function Y(I,ot,it){if(I==null)return I;var pt=[],Et=0;return B(I,pt,"","",function(Q){return ot.call(it,Q,Et++)}),pt}function Z(I){if(I._status===-1){var ot=I._result;ot=ot(),ot.then(function(it){(I._status===0||I._status===-1)&&(I._status=1,I._result=it)},function(it){(I._status===0||I._status===-1)&&(I._status=2,I._result=it)}),I._status===-1&&(I._status=0,I._result=ot)}if(I._status===1)return I._result.default;throw I._result}var vt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ot=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ot))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},yt={map:Y,forEach:function(I,ot,it){Y(I,function(){ot.apply(this,arguments)},it)},count:function(I){var ot=0;return Y(I,function(){ot++}),ot},toArray:function(I){return Y(I,function(ot){return ot})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ce.Activity=x,ce.Children=yt,ce.Component=y,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=s,ce.Suspense=d,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ce.__COMPILER_RUNTIME={__proto__:null,c:function(I){return L.H.useMemoCache(I)}},ce.cache=function(I){return function(){return I.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(I,ot,it){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var pt=E({},I.props),Et=I.key;if(ot!=null)for(Q in ot.key!==void 0&&(Et=""+ot.key),ot)!X.call(ot,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&ot.ref===void 0||(pt[Q]=ot[Q]);var Q=arguments.length-2;if(Q===1)pt.children=it;else if(1<Q){for(var rt=Array(Q),At=0;At<Q;At++)rt[At]=arguments[At+2];pt.children=rt}return D(I.type,Et,pt)},ce.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ce.createElement=function(I,ot,it){var pt,Et={},Q=null;if(ot!=null)for(pt in ot.key!==void 0&&(Q=""+ot.key),ot)X.call(ot,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&(Et[pt]=ot[pt]);var rt=arguments.length-2;if(rt===1)Et.children=it;else if(1<rt){for(var At=Array(rt),Dt=0;Dt<rt;Dt++)At[Dt]=arguments[Dt+2];Et.children=At}if(I&&I.defaultProps)for(pt in rt=I.defaultProps,rt)Et[pt]===void 0&&(Et[pt]=rt[pt]);return D(I,Q,Et)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(I){return{$$typeof:h,render:I}},ce.isValidElement=G,ce.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:Z}},ce.memo=function(I,ot){return{$$typeof:m,type:I,compare:ot===void 0?null:ot}},ce.startTransition=function(I){var ot=L.T,it={};L.T=it;try{var pt=I(),Et=L.S;Et!==null&&Et(it,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(U,vt)}catch(Q){vt(Q)}finally{ot!==null&&it.types!==null&&(ot.types=it.types),L.T=ot}},ce.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ce.use=function(I){return L.H.use(I)},ce.useActionState=function(I,ot,it){return L.H.useActionState(I,ot,it)},ce.useCallback=function(I,ot){return L.H.useCallback(I,ot)},ce.useContext=function(I){return L.H.useContext(I)},ce.useDebugValue=function(){},ce.useDeferredValue=function(I,ot){return L.H.useDeferredValue(I,ot)},ce.useEffect=function(I,ot){return L.H.useEffect(I,ot)},ce.useEffectEvent=function(I){return L.H.useEffectEvent(I)},ce.useId=function(){return L.H.useId()},ce.useImperativeHandle=function(I,ot,it){return L.H.useImperativeHandle(I,ot,it)},ce.useInsertionEffect=function(I,ot){return L.H.useInsertionEffect(I,ot)},ce.useLayoutEffect=function(I,ot){return L.H.useLayoutEffect(I,ot)},ce.useMemo=function(I,ot){return L.H.useMemo(I,ot)},ce.useOptimistic=function(I,ot){return L.H.useOptimistic(I,ot)},ce.useReducer=function(I,ot,it){return L.H.useReducer(I,ot,it)},ce.useRef=function(I){return L.H.useRef(I)},ce.useState=function(I){return L.H.useState(I)},ce.useSyncExternalStore=function(I,ot,it){return L.H.useSyncExternalStore(I,ot,it)},ce.useTransition=function(){return L.H.useTransition()},ce.version="19.2.0",ce}var Qx;function jd(){return Qx||(Qx=1,vh.exports=gS()),vh.exports}var nn=jd();const _S=Yd(nn);var yh={exports:{}},Bo={},Sh={exports:{}},Mh={};var Jx;function vS(){return Jx||(Jx=1,(function(r){function t(B,Y){var Z=B.length;B.push(Y);t:for(;0<Z;){var vt=Z-1>>>1,yt=B[vt];if(0<l(yt,Y))B[vt]=Y,B[Z]=yt,Z=vt;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Y=B[0],Z=B.pop();if(Z!==Y){B[0]=Z;t:for(var vt=0,yt=B.length,I=yt>>>1;vt<I;){var ot=2*(vt+1)-1,it=B[ot],pt=ot+1,Et=B[pt];if(0>l(it,Z))pt<yt&&0>l(Et,it)?(B[vt]=Et,B[pt]=Z,vt=pt):(B[vt]=it,B[ot]=Z,vt=ot);else if(pt<yt&&0>l(Et,Z))B[vt]=Et,B[pt]=Z,vt=pt;else break t}}return Y}function l(B,Y){var Z=B.sortIndex-Y.sortIndex;return Z!==0?Z:B.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var d=[],m=[],g=1,x=null,_=3,v=!1,b=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Y=i(m);Y!==null;){if(Y.callback===null)s(m);else if(Y.startTime<=B)s(m),Y.sortIndex=Y.expirationTime,t(d,Y);else break;Y=i(m)}}function z(B){if(E=!1,C(B),!b)if(i(d)!==null)b=!0,U||(U=!0,J());else{var Y=i(m);Y!==null&&ct(z,Y.startTime-B)}}var U=!1,L=-1,X=5,D=-1;function w(){return M?!0:!(r.unstable_now()-D<X)}function G(){if(M=!1,U){var B=r.unstable_now();D=B;var Y=!0;try{t:{b=!1,E&&(E=!1,P(L),L=-1),v=!0;var Z=_;try{e:{for(C(B),x=i(d);x!==null&&!(x.expirationTime>B&&w());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,_=x.priorityLevel;var yt=vt(x.expirationTime<=B);if(B=r.unstable_now(),typeof yt=="function"){x.callback=yt,C(B),Y=!0;break e}x===i(d)&&s(d),C(B)}else s(d);x=i(d)}if(x!==null)Y=!0;else{var I=i(m);I!==null&&ct(z,I.startTime-B),Y=!1}}break t}finally{x=null,_=Z,v=!1}Y=void 0}}finally{Y?J():U=!1}}}var J;if(typeof N=="function")J=function(){N(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ft=st.port2;st.port1.onmessage=G,J=function(){ft.postMessage(null)}}else J=function(){y(G,0)};function ct(B,Y){L=y(function(){B(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var Z=_;_=Y;try{return B()}finally{_=Z}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=_;_=B;try{return Y()}finally{_=Z}},r.unstable_scheduleCallback=function(B,Y,Z){var vt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?vt+Z:vt):Z=vt,B){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Z+yt,B={id:g++,callback:Y,priorityLevel:B,startTime:Z,expirationTime:yt,sortIndex:-1},Z>vt?(B.sortIndex=Z,t(m,B),i(d)===null&&B===i(m)&&(E?(P(L),L=-1):E=!0,ct(z,Z-vt))):(B.sortIndex=yt,t(d,B),b||v||(b=!0,U||(U=!0,J()))),B},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(B){var Y=_;return function(){var Z=_;_=Y;try{return B.apply(this,arguments)}finally{_=Z}}}})(Mh)),Mh}var $x;function yS(){return $x||($x=1,Sh.exports=vS()),Sh.exports}var bh={exports:{}},Pn={};var tg;function SS(){if(tg)return Pn;tg=1;var r=jd();function t(d){var m="https://react.dev/errors/"+d;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(d,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:d,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,m){if(d==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(d,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(d,m,null,g)},Pn.flushSync=function(d){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,d)return d()}finally{f.T=m,s.p=g,s.d.f()}},Pn.preconnect=function(d,m){typeof d=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(d,m))},Pn.prefetchDNS=function(d){typeof d=="string"&&s.d.D(d)},Pn.preinit=function(d,m){if(typeof d=="string"&&m&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(d,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:v}):g==="script"&&s.d.X(d,{crossOrigin:x,integrity:_,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pn.preinitModule=function(d,m){if(typeof d=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(d,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(d)},Pn.preload=function(d,m){if(typeof d=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin);s.d.L(d,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pn.preloadModule=function(d,m){if(typeof d=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(d,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(d)},Pn.requestFormReset=function(d){s.d.r(d)},Pn.unstable_batchedUpdates=function(d,m){return d(m)},Pn.useFormState=function(d,m,g){return f.H.useFormState(d,m,g)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.0",Pn}var eg;function MS(){if(eg)return bh.exports;eg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=SS(),bh.exports}var ng;function bS(){if(ng)return Bo;ng=1;var r=yS(),t=jd(),i=MS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return d(u),e;if(p===o)return d(u),n;p=p.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=p;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=p;break}if(A===o){S=!0,o=u,a=p;break}A=A.sibling}if(!S){for(A=p.child;A;){if(A===a){S=!0,a=p,o=u;break}if(A===o){S=!0,o=p,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ct=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},vt=[],yt=-1;function I(e){return{current:e}}function ot(e){0>yt||(e.current=vt[yt],vt[yt]=null,yt--)}function it(e,n){yt++,vt[yt]=e.current,e.current=n}var pt=I(null),Et=I(null),Q=I(null),rt=I(null);function At(e,n){switch(it(Q,n),it(Et,e),it(pt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?gx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=gx(n),e=_x(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ot(pt),it(pt,e)}function Dt(){ot(pt),ot(Et),ot(Q)}function It(e){e.memoizedState!==null&&it(rt,e);var n=pt.current,a=_x(n,e.type);n!==a&&(it(Et,e),it(pt,a))}function te(e){Et.current===e&&(ot(pt),ot(Et)),rt.current===e&&(ot(rt),Lo._currentValue=Z)}var ve,re;function ye(e){if(ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ve=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ve+e+re}var H=!1;function oe(e,n){if(!e||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ut){var at=ut}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ut){at=ut}e.call(gt.prototype)}}else{try{throw Error()}catch(ut){at=ut}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ut){if(ut&&at&&typeof ut.stack=="string")return[ut.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),S=p[0],A=p[1];if(S&&A){var F=S.split(`
`),et=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===et.length)for(o=F.length-1,u=et.length-1;1<=o&&0<=u&&F[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==et[u]){var dt=`
`+F[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ye(a):""}function ue(e,n){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==n&&n!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return ye("Activity");default:return""}}function De(e){try{var n="",a=null;do n+=ue(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vt=Object.prototype.hasOwnProperty,Ze=r.unstable_scheduleCallback,jt=r.unstable_cancelCallback,le=r.unstable_shouldYield,O=r.unstable_requestPaint,T=r.unstable_now,tt=r.unstable_getCurrentPriorityLevel,xt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,qt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Qt=r.log,Wt=r.unstable_setDisableYieldValue,Mt=null,Tt=null;function Yt(e){if(typeof Qt=="function"&&Wt(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Mt,e)}catch{}}var kt=Math.clz32?Math.clz32:V,Pt=Math.log,ie=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(Pt(e)/ie|0)|0}var Ut=256,wt=262144,Ct=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,p=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~p,o!==0?u=bt(o):(S&=A,S!==0?u=bt(S):a||(a=A&~e,a!==0&&(u=bt(a))))):(A=o&~p,A!==0?u=bt(A):S!==0?u=bt(S):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&p)===0&&(p=u&-u,a=n&-n,p>=a||p===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function Ue(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jn(e,n,a,o,u,p){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,et=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-kt(a),gt=1<<dt;A[dt]=0,F[dt]=-1;var at=et[dt];if(at!==null)for(et[dt]=null,dt=0;dt<at.length;dt++){var ut=at[dt];ut!==null&&(ut.lane&=-536870913)}a&=~gt}o!==0&&il(e,o,0),p!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=p&~(S&~n))}function il(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Wr(e,n){var a=n&-n;return a=(a&42)!==0?1:bi(a),(a&(e.suspendedLanes|n))!==0?0:a}function bi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qr(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Gx(e.type))}function Yr(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var $n=Math.random().toString(36).slice(2),un="__reactFiber$"+$n,xn="__reactProps$"+$n,qi="__reactContainer$"+$n,zs="__reactEvents$"+$n,fu="__reactListeners$"+$n,hu="__reactHandles$"+$n,al="__reactResources$"+$n,ls="__reactMarker$"+$n;function jr(e){delete e[un],delete e[xn],delete e[zs],delete e[fu],delete e[hu]}function Ea(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[qi]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Tx(e);e!==null;){if(a=e[un])return a;e=Tx(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[un]||e[qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function lt(e){var n=e[al];return n||(n=e[al]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(e){e[ls]=!0}var K=new Set,Rt={};function Nt(e,n){Bt(e,n),Bt(e+"Capture",n)}function Bt(e,n){for(Rt[e]=n,e=0;e<n.length;e++)K.add(n[e])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ne={};function Zt(e){return Vt.call(ne,e)?!0:Vt.call($t,e)?!1:Ht.test(e)?ne[e]=!0:($t[e]=!0,!1)}function pe(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ce(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ne(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,p.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ke(e){if(!e._valueTracker){var n=Fe(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function Re(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Fe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ta=/[\n"\\]/g;function Je(e){return e.replace(Ta,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yi(e,n,a,o,u,p,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ae(n)):e.value!==""+Ae(n)&&(e.value=""+Ae(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,Ae(n)):a!=null?bn(e,S,Ae(a)):o!=null&&e.removeAttribute("value"),u==null&&p!=null&&(e.defaultChecked=!!p),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ae(A):e.removeAttribute("name")}function $e(e,n,a,o,u,p,S,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||a!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Ke(e);return}a=a!=null?""+Ae(a):"",n=n!=null?""+Ae(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ke(e)}function bn(e,n,a){n==="number"&&Mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function En(e,n,a){if(n!=null&&(n=""+Ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ae(a):""}function Cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ke(e)}function Oi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ji.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function mp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&pp(e,u,o)}else for(var p in n)n.hasOwnProperty(p)&&pp(e,p,n[p])}function du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return fv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Bs=null;function xp(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Yi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Je(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));Yi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Re(o)}break t;case"textarea":En(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gn(e,!!a.multiple,n,!1)}}}var xu=!1;function gp(e,n,a){if(xu)return e(n,a);xu=!0;try{var o=e(n);return o}finally{if(xu=!1,(Is!==null||Bs!==null)&&(ql(),Is&&(n=Is,e=Bs,Bs=Is=null,xp(n),e)))for(n=0;n<e.length;n++)xp(e[n])}}function Zr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if(Ki)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{gu=!1}var Aa=null,_u=null,rl=null;function _p(){if(rl)return rl;var e,n=_u,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,p=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[p-o];o++);return rl=u.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function vp(){return!1}function Vn(e){function n(a,o,u,p,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ll:vp,this.isPropagationStopped=vp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Vn(cs),Qr=x({},cs,{view:0,detail:0}),hv=Vn(Qr),vu,yu,Jr,ul=x({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(vu=e.screenX-Jr.screenX,yu=e.screenY-Jr.screenY):yu=vu=0,Jr=e),vu)},movementY:function(e){return"movementY"in e?e.movementY:yu}}),yp=Vn(ul),dv=x({},ul,{dataTransfer:0}),pv=Vn(dv),mv=x({},Qr,{relatedTarget:0}),Su=Vn(mv),xv=x({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=Vn(xv),_v=x({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vv=Vn(_v),yv=x({},cs,{data:0}),Sp=Vn(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bv[e])?!!n[e]:!1}function Mu(){return Ev}var Tv=x({},Qr,{key:function(e){if(e.key){var n=Sv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Av=Vn(Tv),Rv=x({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Vn(Rv),wv=x({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Cv=Vn(wv),Dv=x({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uv=Vn(Dv),Nv=x({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=Vn(Nv),Ov=x({},cs,{newState:0,oldState:0}),Pv=Vn(Ov),zv=[9,13,27,32],bu=Ki&&"CompositionEvent"in window,$r=null;Ki&&"documentMode"in document&&($r=document.documentMode);var Iv=Ki&&"TextEvent"in window&&!$r,bp=Ki&&(!bu||$r&&8<$r&&11>=$r),Ep=" ",Tp=!1;function Ap(e,n){switch(e){case"keyup":return zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fs=!1;function Bv(e,n){switch(e){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,Ep);case"textInput":return e=n.data,e===Ep&&Tp?null:e;default:return null}}function Fv(e,n){if(Fs)return e==="compositionend"||!bu&&Ap(e,n)?(e=_p(),rl=_u=Aa=null,Fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hv[e.type]:n==="textarea"}function Cp(e,n,a,o){Is?Bs?Bs.push(o):Bs=[o]:Is=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var to=null,eo=null;function Gv(e){fx(e,0)}function fl(e){var n=W(e);if(Re(n))return e}function Dp(e,n){if(e==="change")return n}var Up=!1;if(Ki){var Eu;if(Ki){var Tu="oninput"in document;if(!Tu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Tu=typeof Np.oninput=="function"}Eu=Tu}else Eu=!1;Up=Eu&&(!document.documentMode||9<document.documentMode)}function Lp(){to&&(to.detachEvent("onpropertychange",Op),eo=to=null)}function Op(e){if(e.propertyName==="value"&&fl(eo)){var n=[];Cp(n,eo,e,mu(e)),gp(Gv,n)}}function Vv(e,n,a){e==="focusin"?(Lp(),to=n,eo=a,to.attachEvent("onpropertychange",Op)):e==="focusout"&&Lp()}function kv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(eo)}function Xv(e,n){if(e==="click")return fl(n)}function Wv(e,n){if(e==="input"||e==="change")return fl(n)}function qv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ti=typeof Object.is=="function"?Object.is:qv;function no(e,n){if(ti(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Vt.call(n,u)||!ti(e[u],n[u]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,n){var a=Pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pp(a)}}function Ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Mn(e.document)}return n}function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Yv=Ki&&"documentMode"in document&&11>=document.documentMode,Hs=null,Ru=null,io=null,wu=!1;function Fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Hs==null||Hs!==Mn(o)||(o=Hs,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=$l(Ru,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Hs)))}function us(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Cu={},Hp={};Ki&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function fs(e){if(Cu[e])return Cu[e];if(!Gs[e])return e;var n=Gs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return Cu[e]=n[a];return e}var Gp=fs("animationend"),Vp=fs("animationiteration"),kp=fs("animationstart"),jv=fs("transitionrun"),Zv=fs("transitionstart"),Kv=fs("transitioncancel"),Xp=fs("transitionend"),Wp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Ei(e,n){Wp.set(e,n),Nt(n,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],Vs=0,Uu=0;function dl(){for(var e=Vs,n=Uu=Vs=0;n<e;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var p=hi[n];if(hi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}p!==0&&qp(a,u,p)}}function pl(e,n,a,o){hi[Vs++]=e,hi[Vs++]=n,hi[Vs++]=a,hi[Vs++]=o,Uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nu(e,n,a,o){return pl(e,n,a,o),ml(e)}function hs(e,n){return pl(e,null,null,n),ml(e)}function qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,p=e.return;p!==null;)p.childLanes|=a,o=p.alternate,o!==null&&(o.childLanes|=a),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(u=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,u&&n!==null&&(u=31-kt(a),e=p.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),p):null}function ml(e){if(50<Ao)throw Ao=0,Vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ks={};function Qv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new Qv(e,n,a,o)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,p){var S=0;if(o=e,typeof e=="function")Lu(e)&&(S=1);else if(typeof e=="string")S=nS(e,a,pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ei(31,a,n,u),e.elementType=D,e.lanes=p,e;case E:return ds(a.children,u,p,n);case M:S=8,u|=24;break;case y:return e=ei(12,a,n,u|2),e.elementType=y,e.lanes=p,e;case z:return e=ei(13,a,n,u),e.elementType=z,e.lanes=p,e;case U:return e=ei(19,a,n,u),e.elementType=U,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:S=10;break t;case P:S=9;break t;case C:S=11;break t;case L:S=14;break t;case X:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ei(S,a,n,u),n.elementType=e,n.type=o,n.lanes=p,n}function ds(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function Ou(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function jp(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function Pu(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zp=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:De(n)},Zp.set(e,n),n)}return{value:e,source:n,stack:De(n)}}var Xs=[],Ws=0,gl=null,ao=0,pi=[],mi=0,Ra=null,Pi=1,zi="";function Ji(e,n){Xs[Ws++]=ao,Xs[Ws++]=gl,gl=e,ao=n}function Kp(e,n,a){pi[mi++]=Pi,pi[mi++]=zi,pi[mi++]=Ra,Ra=e;var o=Pi;e=zi;var u=32-kt(o)-1;o&=~(1<<u),a+=1;var p=32-kt(n)+u;if(30<p){var S=u-u%5;p=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Pi=1<<32-kt(n)+u|a<<u|o,zi=p+e}else Pi=1<<p|a<<u|o,zi=e}function zu(e){e.return!==null&&(Ji(e,1),Kp(e,1,0))}function Iu(e){for(;e===gl;)gl=Xs[--Ws],Xs[Ws]=null,ao=Xs[--Ws],Xs[Ws]=null;for(;e===Ra;)Ra=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function Qp(e,n){pi[mi++]=Pi,pi[mi++]=zi,pi[mi++]=Ra,Pi=n.id,zi=n.overflow,Ra=e}var Dn=null,tn=null,we=!1,wa=null,xi=!1,Bu=Error(s(519));function Ca(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(di(n,e)),Bu}function Jp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[xn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)Me(wo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),$e(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||mx(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Ca(e,!0)}function $p(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Dn=Dn.return}}function qs(e){if(e!==Dn)return!1;if(!we)return $p(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ih(e.type,e.memoizedProps)),a=!a),a&&tn&&Ca(e),$p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=Ex(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=Ex(e)}else n===27?(n=tn,ka(e.type)?(e=lh,lh=null,tn=e):tn=n):tn=Dn?_i(e.stateNode.nextSibling):null;return!0}function ps(){tn=Dn=null,we=!1}function Fu(){var e=wa;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),wa=null),e}function so(e){wa===null?wa=[e]:wa.push(e)}var Hu=I(null),ms=null,$i=null;function Da(e,n,a){it(Hu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Hu.current,ot(Hu)}function Gu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Vu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var p=u.dependencies;if(p!==null){var S=u.child;p=p.firstContext;t:for(;p!==null;){var A=p;p=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){p.lanes|=a,A=p.alternate,A!==null&&(A.lanes|=a),Gu(p.return,a,e),o||(S=null);break t}p=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,p=S.alternate,p!==null&&(p.lanes|=a),Gu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ys(e,n,a,o){e=null;for(var u=n,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;ti(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===rt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Vu(n,e,a,o),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){ms=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return t0(ms,e)}function vl(e,n){return ms===null&&xs(e),t0(e,n)}function t0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var Jv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},$v=r.unstable_scheduleCallback,ty=r.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new Jv,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&$v(ty,function(){e.controller.abort()})}var oo=null,Xu=0,js=0,Zs=null;function ey(e,n){if(oo===null){var a=oo=[];Xu=0,js=jf(),Zs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(e0,e0),n}function e0(){if(--Xu===0&&oo!==null){Zs!==null&&(Zs.status="fulfilled");var e=oo;oo=null,js=0,Zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ny(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var n0=B.S;B.S=function(e,n){Fm=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ey(e,n),n0!==null&&n0(e,n)};var gs=I(null);function Wu(){var e=gs.current;return e!==null?e:Qe.pooledCache}function yl(e,n){n===null?it(gs,gs.current):it(gs,n.pool)}function i0(){var e=Wu();return e===null?null:{parent:fn._currentValue,pool:e}}var Ks=Error(s(460)),qu=Error(s(474)),Sl=Error(s(542)),Ml={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function s0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,o0(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,o0(e),e}throw vs=n,Ks}}function _s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vs=a,Ks):a}}var vs=null;function r0(){if(vs===null)throw Error(s(459));var e=vs;return vs=null,e}function o0(e){if(e===Ks||e===Sl)throw Error(s(483))}var Qs=null,lo=0;function bl(e){var n=lo;return lo+=1,Qs===null&&(Qs=[]),s0(Qs,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function l0(e){function n(q,k){if(e){var $=q.deletions;$===null?(q.deletions=[k],q.flags|=16):$.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Qi(q,k),q.index=0,q.sibling=null,q}function p(q,k,$){return q.index=$,e?($=q.alternate,$!==null?($=$.index,$<k?(q.flags|=67108866,k):$):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,k,$,mt){return k===null||k.tag!==6?(k=Ou($,q.mode,mt),k.return=q,k):(k=u(k,$),k.return=q,k)}function F(q,k,$,mt){var Kt=$.type;return Kt===E?dt(q,k,$.props.children,mt,$.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&_s(Kt)===k.type)?(k=u(k,$.props),co(k,$),k.return=q,k):(k=xl($.type,$.key,$.props,null,q.mode,mt),co(k,$),k.return=q,k)}function et(q,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Pu($,q.mode,mt),k.return=q,k):(k=u(k,$.children||[]),k.return=q,k)}function dt(q,k,$,mt,Kt){return k===null||k.tag!==7?(k=ds($,q.mode,mt,Kt),k.return=q,k):(k=u(k,$),k.return=q,k)}function gt(q,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ou(""+k,q.mode,$),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return $=xl(k.type,k.key,k.props,null,q.mode,$),co($,k),$.return=q,$;case b:return k=Pu(k,q.mode,$),k.return=q,k;case X:return k=_s(k),gt(q,k,$)}if(ct(k)||J(k))return k=ds(k,q.mode,$,null),k.return=q,k;if(typeof k.then=="function")return gt(q,bl(k),$);if(k.$$typeof===N)return gt(q,vl(q,k),$);El(q,k)}return null}function at(q,k,$,mt){var Kt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Kt!==null?null:A(q,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===Kt?F(q,k,$,mt):null;case b:return $.key===Kt?et(q,k,$,mt):null;case X:return $=_s($),at(q,k,$,mt)}if(ct($)||J($))return Kt!==null?null:dt(q,k,$,mt,null);if(typeof $.then=="function")return at(q,k,bl($),mt);if($.$$typeof===N)return at(q,k,vl(q,$),mt);El(q,$)}return null}function ut(q,k,$,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get($)||null,A(k,q,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case v:return q=q.get(mt.key===null?$:mt.key)||null,F(k,q,mt,Kt);case b:return q=q.get(mt.key===null?$:mt.key)||null,et(k,q,mt,Kt);case X:return mt=_s(mt),ut(q,k,$,mt,Kt)}if(ct(mt)||J(mt))return q=q.get($)||null,dt(k,q,mt,Kt,null);if(typeof mt.then=="function")return ut(q,k,$,bl(mt),Kt);if(mt.$$typeof===N)return ut(q,k,$,vl(k,mt),Kt);El(k,mt)}return null}function Gt(q,k,$,mt){for(var Kt=null,Le=null,Xt=k,me=k=0,Te=null;Xt!==null&&me<$.length;me++){Xt.index>me?(Te=Xt,Xt=null):Te=Xt.sibling;var Oe=at(q,Xt,$[me],mt);if(Oe===null){Xt===null&&(Xt=Te);break}e&&Xt&&Oe.alternate===null&&n(q,Xt),k=p(Oe,k,me),Le===null?Kt=Oe:Le.sibling=Oe,Le=Oe,Xt=Te}if(me===$.length)return a(q,Xt),we&&Ji(q,me),Kt;if(Xt===null){for(;me<$.length;me++)Xt=gt(q,$[me],mt),Xt!==null&&(k=p(Xt,k,me),Le===null?Kt=Xt:Le.sibling=Xt,Le=Xt);return we&&Ji(q,me),Kt}for(Xt=o(Xt);me<$.length;me++)Te=ut(Xt,q,me,$[me],mt),Te!==null&&(e&&Te.alternate!==null&&Xt.delete(Te.key===null?me:Te.key),k=p(Te,k,me),Le===null?Kt=Te:Le.sibling=Te,Le=Te);return e&&Xt.forEach(function(ja){return n(q,ja)}),we&&Ji(q,me),Kt}function ee(q,k,$,mt){if($==null)throw Error(s(151));for(var Kt=null,Le=null,Xt=k,me=k=0,Te=null,Oe=$.next();Xt!==null&&!Oe.done;me++,Oe=$.next()){Xt.index>me?(Te=Xt,Xt=null):Te=Xt.sibling;var ja=at(q,Xt,Oe.value,mt);if(ja===null){Xt===null&&(Xt=Te);break}e&&Xt&&ja.alternate===null&&n(q,Xt),k=p(ja,k,me),Le===null?Kt=ja:Le.sibling=ja,Le=ja,Xt=Te}if(Oe.done)return a(q,Xt),we&&Ji(q,me),Kt;if(Xt===null){for(;!Oe.done;me++,Oe=$.next())Oe=gt(q,Oe.value,mt),Oe!==null&&(k=p(Oe,k,me),Le===null?Kt=Oe:Le.sibling=Oe,Le=Oe);return we&&Ji(q,me),Kt}for(Xt=o(Xt);!Oe.done;me++,Oe=$.next())Oe=ut(Xt,q,me,Oe.value,mt),Oe!==null&&(e&&Oe.alternate!==null&&Xt.delete(Oe.key===null?me:Oe.key),k=p(Oe,k,me),Le===null?Kt=Oe:Le.sibling=Oe,Le=Oe);return e&&Xt.forEach(function(dS){return n(q,dS)}),we&&Ji(q,me),Kt}function We(q,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:t:{for(var Kt=$.key;k!==null;){if(k.key===Kt){if(Kt=$.type,Kt===E){if(k.tag===7){a(q,k.sibling),mt=u(k,$.props.children),mt.return=q,q=mt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&_s(Kt)===k.type){a(q,k.sibling),mt=u(k,$.props),co(mt,$),mt.return=q,q=mt;break t}a(q,k);break}else n(q,k);k=k.sibling}$.type===E?(mt=ds($.props.children,q.mode,mt,$.key),mt.return=q,q=mt):(mt=xl($.type,$.key,$.props,null,q.mode,mt),co(mt,$),mt.return=q,q=mt)}return S(q);case b:t:{for(Kt=$.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(q,k.sibling),mt=u(k,$.children||[]),mt.return=q,q=mt;break t}else{a(q,k);break}else n(q,k);k=k.sibling}mt=Pu($,q.mode,mt),mt.return=q,q=mt}return S(q);case X:return $=_s($),We(q,k,$,mt)}if(ct($))return Gt(q,k,$,mt);if(J($)){if(Kt=J($),typeof Kt!="function")throw Error(s(150));return $=Kt.call($),ee(q,k,$,mt)}if(typeof $.then=="function")return We(q,k,bl($),mt);if($.$$typeof===N)return We(q,k,vl(q,$),mt);El(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(q,k.sibling),mt=u(k,$),mt.return=q,q=mt):(a(q,k),mt=Ou($,q.mode,mt),mt.return=q,q=mt),S(q)):a(q,k)}return function(q,k,$,mt){try{lo=0;var Kt=We(q,k,$,mt);return Qs=null,Kt}catch(Xt){if(Xt===Ks||Xt===Sl)throw Xt;var Le=ei(29,Xt,null,q.mode);return Le.lanes=mt,Le.return=q,Le}finally{}}}var ys=l0(!0),c0=l0(!1),Ua=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(e),qp(e,null,a),n}return pl(e,o,n,a),ml(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xr(e,a)}}function Zu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?u=p=S:p=p.next=S,a=a.next}while(a!==null);p===null?u=p=n:p=p.next=n}else u=p=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ku=!1;function fo(){if(Ku){var e=Zs;if(e!==null)throw e}}function ho(e,n,a,o){Ku=!1;var u=e.updateQueue;Ua=!1;var p=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,et=F.next;F.next=null,S===null?p=et:S.next=et,S=F;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==S&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=F))}if(p!==null){var gt=u.baseState;S=0,dt=et=F=null,A=p;do{var at=A.lane&-536870913,ut=at!==A.lane;if(ut?(Ee&at)===at:(o&at)===at){at!==0&&at===js&&(Ku=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,ee=A;at=n;var We=a;switch(ee.tag){case 1:if(Gt=ee.payload,typeof Gt=="function"){gt=Gt.call(We,gt,at);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ee.payload,at=typeof Gt=="function"?Gt.call(We,gt,at):Gt,at==null)break t;gt=x({},gt,at);break t;case 2:Ua=!0}}at=A.callback,at!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[at]:ut.push(at))}else ut={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=ut,F=gt):dt=dt.next=ut,S|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);dt===null&&(F=gt),u.baseState=F,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,p===null&&(u.shared.lanes=0),Ba|=S,e.lanes=S,e.memoizedState=gt}}function u0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function f0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)u0(a[e],n)}var Js=I(null),Tl=I(0);function h0(e,n){e=ca,it(Tl,e),it(Js,n),ca=e|n.baseLanes}function Qu(){it(Tl,ca),it(Js,Js.current)}function Ju(){ca=Tl.current,ot(Js),ot(Tl)}var ni=I(null),gi=null;function Oa(e){var n=e.alternate;it(ln,ln.current&1),it(ni,e),gi===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(gi=e)}function $u(e){it(ln,ln.current),it(ni,e),gi===null&&(gi=e)}function d0(e){e.tag===22?(it(ln,ln.current),it(ni,e),gi===null&&(gi=e)):Pa()}function Pa(){it(ln,ln.current),it(ni,ni.current)}function ii(e){ot(ni),gi===e&&(gi=null),ot(ln)}var ln=I(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,fe=null,ke=null,hn=null,Rl=!1,$s=!1,Ss=!1,wl=0,po=0,tr=null,iy=0;function sn(){throw Error(s(321))}function tf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ti(e[a],n[a]))return!1;return!0}function ef(e,n,a,o,u,p){return ea=p,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?K0:gf,Ss=!1,p=a(o,u),Ss=!1,$s&&(p=m0(n,a,o,u)),p0(e),p}function p0(e){B.H=go;var n=ke!==null&&ke.next!==null;if(ea=0,hn=ke=fe=null,Rl=!1,po=0,tr=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&_l(e)&&(dn=!0))}function m0(e,n,a,o){fe=e;var u=0;do{if($s&&(tr=null),po=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,hn=ke=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}B.H=Q0,p=n(a,o)}while($s);return p}function ay(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(fe.flags|=1024),n}function nf(){var e=wl!==0;return wl=0,e}function af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function sf(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}ea=0,hn=ke=fe=null,$s=!1,po=wl=0,tr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?fe.memoizedState=hn=e:hn=hn.next=e,hn}function cn(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=hn===null?fe.memoizedState:hn.next;if(n!==null)hn=n,ke=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},hn===null?fe.memoizedState=hn=e:hn=hn.next=e}return hn}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,tr===null&&(tr=[]),e=s0(tr,e,n),n=fe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?K0:gf),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===N)return Un(e)}throw Error(s(438,String(e)))}function rf(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=cn();return of(n,ke,e)}function of(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,p=o.pending;if(p!==null){if(u!==null){var S=u.next;u.next=p.next,p.next=S}n.baseQueue=u=p,o.pending=null}if(p=e.baseState,u===null)e.memoizedState=p;else{n=u.next;var A=S=null,F=null,et=n,dt=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(Ee&gt)===gt:(ea&gt)===gt){var at=et.revertLane;if(at===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===js&&(dt=!0);else if((ea&at)===at){et=et.next,at===js&&(dt=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(A=F=gt,S=p):F=F.next=gt,fe.lanes|=at,Ba|=at;gt=et.action,Ss&&a(p,gt),p=et.hasEagerState?et.eagerState:a(p,gt)}else at={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(A=F=at,S=p):F=F.next=at,fe.lanes|=gt,Ba|=gt;et=et.next}while(et!==null&&et!==n);if(F===null?S=p:F.next=A,!ti(p,e.memoizedState)&&(dn=!0,dt&&(a=Zs,a!==null)))throw a;e.memoizedState=p,e.baseState=S,e.baseQueue=F,o.lastRenderedState=p}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function lf(e){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,p=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do p=e(p,S.action),S=S.next;while(S!==u);ti(p,n.memoizedState)||(dn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),a.lastRenderedState=p}return[p,o]}function x0(e,n,a){var o=fe,u=cn(),p=we;if(p){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ti((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,dn=!0),u=u.queue,ff(v0.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,er(9,{destroy:void 0},_0.bind(null,o,u,a,n),null),Qe===null)throw Error(s(349));p||(ea&127)!==0||g0(o,n,a)}return a}function g0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Cl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _0(e,n,a,o){n.value=a,n.getSnapshot=o,y0(n)&&S0(e)}function v0(e,n,a){return a(function(){y0(n)&&S0(e)})}function y0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ti(e,a)}catch{return!0}}function S0(e){var n=hs(e,2);n!==null&&Yn(n,e,2)}function cf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),Ss){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function M0(e,n,a,o){return e.baseState=a,of(e,ke,typeof o=="function"?o:na)}function sy(e,n,a,o,u){if(Ol(e))throw Error(s(485));if(e=n.action,e!==null){var p={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};B.T!==null?a(!0):p.isTransition=!1,o(p),a=n.pending,a===null?(p.next=n.pending=p,b0(n,p)):(p.next=a.next,n.pending=a.next=p)}}function b0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var p=B.T,S={};B.T=S;try{var A=a(u,o),F=B.S;F!==null&&F(S,A),E0(e,n,A)}catch(et){uf(e,n,et)}finally{p!==null&&S.types!==null&&(p.types=S.types),B.T=p}}else try{p=a(u,o),E0(e,n,p)}catch(et){uf(e,n,et)}}function E0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){T0(e,n,o)},function(o){return uf(e,n,o)}):T0(e,n,a)}function T0(e,n,a){n.status="fulfilled",n.value=a,A0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,b0(e,a)))}function uf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,A0(n),n=n.next;while(n!==o)}e.action=null}function A0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function R0(e,n){return n}function w0(e,n){if(we){var a=Qe.formState;if(a!==null){t:{var o=fe;if(we){if(tn){e:{for(var u=tn,p=xi;u.nodeType!==8;){if(!p){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){tn=_i(u.nextSibling),o=u.data==="F!";break t}}Ca(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R0,lastRenderedState:n},a.queue=o,a=Y0.bind(null,fe,o),o.dispatch=a,o=cf(!1),p=xf.bind(null,fe,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=sy.bind(null,fe,u,p,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function C0(e){var n=cn();return D0(n,ke,e)}function D0(e,n,a){if(n=of(e,n,R0)[0],e=Ul(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(S){throw S===Ks?Sl:S}else o=n;n=cn();var u=n.queue,p=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,er(9,{destroy:void 0},ry.bind(null,u,a),null)),[o,p,e]}function ry(e,n){e.action=n}function U0(e){var n=cn(),a=ke;if(a!==null)return D0(n,a,e);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function er(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Cl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function N0(){return cn().memoizedState}function Nl(e,n,a,o){var u=Fn();fe.flags|=e,u.memoizedState=er(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(e,n,a,o){var u=cn();o=o===void 0?null:o;var p=u.memoizedState.inst;ke!==null&&o!==null&&tf(o,ke.memoizedState.deps)?u.memoizedState=er(n,p,a,o):(fe.flags|=e,u.memoizedState=er(1|n,p,a,o))}function L0(e,n){Nl(8390656,8,e,n)}function ff(e,n){Ll(2048,8,e,n)}function oy(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Cl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function O0(e){var n=cn().memoizedState;return oy({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function P0(e,n){return Ll(4,2,e,n)}function z0(e,n){return Ll(4,4,e,n)}function I0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function B0(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,I0.bind(null,n,e),a)}function hf(){}function F0(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function H0(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=e(),Ss){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,n],o}function df(e,n,a){return a===void 0||(ea&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Gm(),fe.lanes|=e,Ba|=e,a)}function G0(e,n,a,o){return ti(a,n)?a:Js.current!==null?(e=df(e,a,o),ti(e,n)||(dn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Ee&261930)===0?(dn=!0,e.memoizedState=a):(e=Gm(),fe.lanes|=e,Ba|=e,n)}function V0(e,n,a,o,u){var p=Y.p;Y.p=p!==0&&8>p?p:8;var S=B.T,A={};B.T=A,xf(e,!1,n,a);try{var F=u(),et=B.S;if(et!==null&&et(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=ny(F,o);xo(e,n,dt,ri(e))}else xo(e,n,o,ri(e))}catch(gt){xo(e,n,{then:function(){},status:"rejected",reason:gt},ri())}finally{Y.p=p,S!==null&&A.types!==null&&(S.types=A.types),B.T=S}}function ly(){}function pf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=k0(e).queue;V0(e,u,n,Z,a===null?ly:function(){return X0(e),a(o)})}function k0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function X0(e){var n=k0(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},ri())}function mf(){return Un(Lo)}function W0(){return cn().memoizedState}function q0(){return cn().memoizedState}function cy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Na(a);var o=La(n,e,a);o!==null&&(Yn(o,n,a),uo(o,n,a)),n={cache:ku()},e.payload=n;return}n=n.return}}function uy(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?j0(n,a):(a=Nu(e,n,a,o),a!==null&&(Yn(a,e,o),Z0(a,n,o)))}function Y0(e,n,a){var o=ri();xo(e,n,a,o)}function xo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))j0(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,A=p(S,a);if(u.hasEagerState=!0,u.eagerState=A,ti(A,S))return pl(e,n,u,0),Qe===null&&dl(),!1}catch{}finally{}if(a=Nu(e,n,u,o),a!==null)return Yn(a,e,o),Z0(a,n,o),!0}return!1}function xf(e,n,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(s(479))}else n=Nu(e,a,o,2),n!==null&&Yn(n,e,2)}function Ol(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function j0(e,n){$s=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Z0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xr(e,a)}}var go={readContext:Un,use:Dl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};go.useEffectEvent=sn;var K0={readContext:Un,use:Dl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:L0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,I0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(Ss){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(Ss){Yt(!0);try{a(n)}finally{Yt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=uy.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=cf(e);var n=e.queue,a=Y0.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(e,n){var a=Fn();return df(a,e,n)},useTransition:function(){var e=cf(!1);return e=V0.bind(null,fe,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Fn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Ee&127)!==0||g0(o,n,a)}u.memoizedState=a;var p={value:a,getSnapshot:n};return u.queue=p,L0(v0.bind(null,o,p,e),[e]),o.flags|=2048,er(9,{destroy:void 0},_0.bind(null,o,p,a,n),null),a},useId:function(){var e=Fn(),n=Qe.identifierPrefix;if(we){var a=zi,o=Pi;a=(o&~(1<<32-kt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=iy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:mf,useFormState:w0,useActionState:w0,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:rf,useCacheRefresh:function(){return Fn().memoizedState=cy.bind(null,fe)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},gf={readContext:Un,use:Dl,useCallback:F0,useContext:Un,useEffect:ff,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:z0,useMemo:H0,useReducer:Ul,useRef:N0,useState:function(){return Ul(na)},useDebugValue:hf,useDeferredValue:function(e,n){var a=cn();return G0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Ul(na)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:x0,useId:W0,useHostTransitionStatus:mf,useFormState:C0,useActionState:C0,useOptimistic:function(e,n){var a=cn();return M0(a,ke,e,n)},useMemoCache:rf,useCacheRefresh:q0};gf.useEffectEvent=O0;var Q0={readContext:Un,use:Dl,useCallback:F0,useContext:Un,useEffect:ff,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:z0,useMemo:H0,useReducer:lf,useRef:N0,useState:function(){return lf(na)},useDebugValue:hf,useDeferredValue:function(e,n){var a=cn();return ke===null?df(a,e,n):G0(a,ke.memoizedState,e,n)},useTransition:function(){var e=lf(na)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:x0,useId:W0,useHostTransitionStatus:mf,useFormState:U0,useActionState:U0,useOptimistic:function(e,n){var a=cn();return ke!==null?M0(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:q0};Q0.useEffectEvent=O0;function _f(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(Yn(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(Yn(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=La(e,o,a),n!==null&&(Yn(n,e,a),uo(n,e,a))}};function J0(e,n,a,o,u,p,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,p,S):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,p):!0}function $0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&vf.enqueueReplaceState(n,n.state,null)}function Ms(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function tm(e){hl(e)}function em(e){console.error(e)}function nm(e){hl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function im(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function am(e){return e=Na(e),e.tag=3,e}function sm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var p=o.value;e.payload=function(){return u(p)},e.callback=function(){im(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){im(n,a,o),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function fy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Yl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(e,o,u)),!1}throw Error(s(435,a.tag))}return Wf(e,o,u),Yl(),!1}if(we)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(e=Error(s(422),{cause:o}),so(di(e,a)))):(o!==Bu&&(n=Error(s(423),{cause:o}),so(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=yf(e.stateNode,o,u),Zu(e,u),rn!==4&&(rn=2)),!1;var p=Error(s(520),{cause:o});if(p=di(p,a),To===null?To=[p]:To.push(p),rn!==4&&(rn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=yf(a.stateNode,o,e),Zu(a,e),!1;case 1:if(n=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Fa===null||!Fa.has(p))))return a.flags|=65536,u&=-u,a.lanes|=u,u=am(u),sm(u,e,a,o),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var Sf=Error(s(461)),dn=!1;function Nn(e,n,a,o){n.child=e===null?c0(n,null,a,o):ys(n,e.child,a,o)}function rm(e,n,a,o,u){a=a.render;var p=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return xs(n),o=ef(e,n,a,S,p,u),A=nf(),e!==null&&!dn?(af(e,n,u),ia(e,n,u)):(we&&A&&zu(n),n.flags|=1,Nn(e,n,o,u),n.child)}function om(e,n,a,o,u){if(e===null){var p=a.type;return typeof p=="function"&&!Lu(p)&&p.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=p,lm(e,n,p,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!Cf(e,u)){var S=p.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(S,o)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(p,o),e.ref=n.ref,e.return=n,n.child=e}function lm(e,n,a,o,u){if(e!==null){var p=e.memoizedProps;if(no(p,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=p,Cf(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return Mf(e,n,a,o,u)}function cm(e,n,a,o){var u=o.children,p=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~p}else o=0,n.child=null;return um(e,n,p,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,p!==null?p.cachePool:null),p!==null?h0(n,p):Qu(),d0(n);else return o=n.lanes=536870912,um(e,n,p!==null?p.baseLanes|a:a,a,o)}else p!==null?(yl(n,p.cachePool),h0(n,p),Pa(),n.memoizedState=null):(e!==null&&yl(n,null),Qu(),Pa());return Nn(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function um(e,n,a,o,u){var p=Wu();return p=p===null?null:{parent:fn._currentValue,pool:p},n.memoizedState={baseLanes:a,cachePool:p},e!==null&&yl(n,null),Qu(),d0(n),e!==null&&Ys(e,n,o,!0),n.childLanes=u,null}function zl(e,n){return n=Bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function fm(e,n,a){return ys(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function hy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=zl(n,o),n.lanes=536870912,_o(null,e);if($u(n),(e=tn)?(e=bx(e,xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,Dn=n,tn=null)):e=null,e===null)throw Ca(n);return n.lanes=536870912,null}return zl(n,o)}var p=e.memoizedState;if(p!==null){var S=p.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=fm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Ys(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=Qe,o!==null&&(S=Wr(o,a),S!==0&&S!==p.retryLane))throw p.retryLane=S,hs(e,S),Yn(o,e,S),Sf;Yl(),n=fm(e,n,a)}else e=p.treeContext,tn=_i(S.nextSibling),Dn=n,we=!0,wa=null,xi=!1,e!==null&&Qp(n,e),n=zl(n,o),n.flags|=4096;return n}return e=Qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Il(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mf(e,n,a,o,u){return xs(n),a=ef(e,n,a,o,void 0,u),o=nf(),e!==null&&!dn?(af(e,n,u),ia(e,n,u)):(we&&o&&zu(n),n.flags|=1,Nn(e,n,a,u),n.child)}function hm(e,n,a,o,u,p){return xs(n),n.updateQueue=null,a=m0(n,o,a,u),p0(e),o=nf(),e!==null&&!dn?(af(e,n,p),ia(e,n,p)):(we&&o&&zu(n),n.flags|=1,Nn(e,n,a,p),n.child)}function dm(e,n,a,o,u){if(xs(n),n.stateNode===null){var p=ks,S=a.contextType;typeof S=="object"&&S!==null&&(p=Un(S)),p=new a(o,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=vf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=o,p.state=n.memoizedState,p.refs={},Yu(n),S=a.contextType,p.context=typeof S=="object"&&S!==null?Un(S):ks,p.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(_f(n,a,S,o),p.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&vf.enqueueReplaceState(p,p.state,null),ho(n,o,p,u),fo(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){p=n.stateNode;var A=n.memoizedProps,F=Ms(a,A);p.props=F;var et=p.context,dt=a.contextType;S=ks,typeof dt=="object"&&dt!==null&&(S=Un(dt));var gt=a.getDerivedStateFromProps;dt=typeof gt=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||et!==S)&&$0(n,p,o,S),Ua=!1;var at=n.memoizedState;p.state=at,ho(n,o,p,u),fo(),et=n.memoizedState,A||at!==et||Ua?(typeof gt=="function"&&(_f(n,a,gt,o),et=n.memoizedState),(F=Ua||J0(n,a,F,o,at,et,S))?(dt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),p.props=o,p.state=et,p.context=S,o=F):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{p=n.stateNode,ju(e,n),S=n.memoizedProps,dt=Ms(a,S),p.props=dt,gt=n.pendingProps,at=p.context,et=a.contextType,F=ks,typeof et=="object"&&et!==null&&(F=Un(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==gt||at!==F)&&$0(n,p,o,F),Ua=!1,at=n.memoizedState,p.state=at,ho(n,o,p,u),fo();var ut=n.memoizedState;S!==gt||at!==ut||Ua||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof A=="function"&&(_f(n,a,A,o),ut=n.memoizedState),(dt=Ua||J0(n,a,dt,o,at,ut,F)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(et||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,ut,F),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,ut,F)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),p.props=o,p.state=ut,p.context=F,o=dt):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return p=o,Il(e,n),o=(n.flags&128)!==0,p||o?(p=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&o?(n.child=ys(n,e.child,null,u),n.child=ys(n,null,a,u)):Nn(e,n,a,u),n.memoizedState=p.state,e=n.child):e=ia(e,n,u),e}function pm(e,n,a,o){return ps(),n.flags|=256,Nn(e,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(e){return{baseLanes:e,cachePool:i0()}}function Tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function mm(e,n,a){var o=n.pendingProps,u=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Oa(n):Pa(),(e=tn)?(e=bx(e,xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,Dn=n,tn=null)):e=null,e===null)throw Ca(n);return oh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Pa(),u=n.mode,A=Bl({mode:"hidden",children:A},u),o=ds(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Ef(a),o.childLanes=Tf(e,S,a),n.memoizedState=bf,_o(null,o)):(Oa(n),Af(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(p)n.flags&256?(Oa(n),n.flags&=-257,n=Rf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),A=o.fallback,u=n.mode,o=Bl({mode:"visible",children:o.children},u),A=ds(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ys(n,e.child,null,a),o=n.child,o.memoizedState=Ef(a),o.childLanes=Tf(e,S,a),n.memoizedState=bf,n=_o(null,o));else if(Oa(n),oh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var et=S.dgst;S=et,o=Error(s(419)),o.stack="",o.digest=S,so({value:o,source:null,stack:null}),n=Rf(e,n,a)}else if(dn||Ys(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=Qe,S!==null&&(o=Wr(S,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,hs(e,o),Yn(S,e,o),Sf;rh(A)||Yl(),n=Rf(e,n,a)}else rh(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,tn=_i(A.nextSibling),Dn=n,we=!0,wa=null,xi=!1,e!==null&&Qp(n,e),n=Af(n,o.children),n.flags|=4096);return n}return u?(Pa(),A=o.fallback,u=n.mode,F=e.child,et=F.sibling,o=Qi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,et!==null?A=Qi(et,A):(A=ds(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,_o(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Ef(a):(u=A.cachePool,u!==null?(F=fn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=i0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Tf(e,S,a),n.memoizedState=bf,_o(e.child,o)):(Oa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Af(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function Rf(e,n,a){return ys(n,e.child,null,a),e=Af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function xm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Gu(e.return,n,a)}function wf(e,n,a,o,u,p){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=p)}function gm(e,n,a){var o=n.pendingProps,u=o.revealOrder,p=o.tail;o=o.children;var S=ln.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,it(ln,S),Nn(e,n,o,a),o=we?ao:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xm(e,a,n);else if(e.tag===19)xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,p,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}wf(n,!0,a,null,p,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ys(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function dy(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Da(n,fn,e.memoizedState.cache),ps();break;case 27:case 5:It(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mm(e,n,a):(Oa(n),e=ia(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ys(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return gm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),it(ln,ln.current),o)break;return null;case 22:return n.lanes=0,cm(e,n,a,n.pendingProps);case 24:Da(n,fn,e.memoizedState.cache)}return ia(e,n,a)}function _m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Cf(e,a)&&(n.flags&128)===0)return dn=!1,dy(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,we&&(n.flags&1048576)!==0&&Kp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=_s(n.elementType),n.type=e,typeof e=="function")Lu(e)?(o=Ms(e,o),n.tag=1,n=dm(null,n,e,o,a)):(n.tag=0,n=Mf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=rm(null,n,e,o,a);break t}else if(u===L){n.tag=14,n=om(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return Mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ms(o,n.pendingProps),dm(e,n,o,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var p=n.memoizedState;u=p.element,ju(e,n),ho(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Da(n,fn,o),o!==p.cache&&Vu(n,[fn],a,!0),fo(),o=S.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=pm(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),so(u),n=pm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=_i(e.firstChild),Dn=n,we=!0,wa=null,xi=!0,a=c0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ps(),o===u){n=ia(e,n,a);break t}Nn(e,n,o,a)}n=n.child}return n;case 26:return Il(e,n),e===null?(a=Cx(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=tc(Q.current).createElement(a),o[un]=n,o[xn]=e,Ln(o,a,e),nt(o),n.stateNode=o):n.memoizedState=Cx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&we&&(o=n.stateNode=Ax(n.type,n.pendingProps,Q.current),Dn=n,xi=!0,u=tn,ka(n.type)?(lh=u,tn=_i(o.firstChild)):tn=u),Nn(e,n,n.pendingProps.children,a),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=tn)&&(o=ky(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Dn=n,tn=_i(o.firstChild),xi=!1,u=!0):u=!1),u||Ca(n)),It(n),u=n.type,p=n.pendingProps,S=e!==null?e.memoizedProps:null,o=p.children,ih(u,p)?o=null:S!==null&&ih(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(e,n,ay,null,null,a),Lo._currentValue=u),Il(e,n),Nn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=tn)&&(a=Xy(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Dn=n,tn=null,e=!0):e=!1),e||Ca(n)),null;case 13:return mm(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ys(n,null,o,a):Nn(e,n,o,a),n.child;case 11:return rm(e,n,n.type,n.pendingProps,a);case 7:return Nn(e,n,n.pendingProps,a),n.child;case 8:return Nn(e,n,n.pendingProps.children,a),n.child;case 12:return Nn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Da(n,n.type,o.value),Nn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xs(n),u=Un(u),o=o(u),n.flags|=1,Nn(e,n,o,a),n.child;case 14:return om(e,n,n.type,n.pendingProps,a);case 15:return lm(e,n,n.type,n.pendingProps,a);case 19:return gm(e,n,a);case 31:return hy(e,n,a);case 22:return cm(e,n,a,n.pendingProps);case 24:return xs(n),o=Un(fn),e===null?(u=Wu(),u===null&&(u=Qe,p=ku(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=a),u=p),n.memoizedState={parent:o,cache:u},Yu(n),Da(n,fn,u)):((e.lanes&a)!==0&&(ju(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,p=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,fn,o)):(o=p.cache,Da(n,fn,o),o!==u.cache&&Vu(n,[fn],a,!0))),Nn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Df(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Wm())e.flags|=8192;else throw vs=Ml,qu}else e.flags&=-16777217}function vm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ox(n))if(Wm())e.flags|=8192;else throw vs=Ml,qu}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ve():536870912,e.lanes|=n,sr|=n)}function vo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function py(e,n,a){var o=n.pendingProps;switch(Iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(fn),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),en(n),null;case 26:var u=n.type,p=n.memoizedState;return e===null?(aa(n),p!==null?(en(n),vm(n,p)):(en(n),Df(n,u,null,o,a))):p?p!==e.memoizedState?(aa(n),en(n),vm(n,p)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&aa(n),en(n),Df(n,u,e,o,a)),null;case 27:if(te(n),a=Q.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}e=pt.current,qs(n)?Jp(n):(e=Ax(u,o,a),n.stateNode=e,aa(n))}return en(n),null;case 5:if(te(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(p=pt.current,qs(n))Jp(n);else{var S=tc(Q.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?p.multiple=!0:o.size&&(p.size=o.size);break;default:p=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}p[un]=n,p[xn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;t:switch(Ln(p,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&aa(n)}}return en(n),Df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Q.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||mx(e.nodeValue,a)),e||Ca(n,!0)}else e=tc(e).createTextNode(o),e[un]=n,n.stateNode=e}return en(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=qs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else a=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=qs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),p=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),en(n),null);case 4:return Dt(),e===null&&Jf(n.stateNode.containerInfo),en(n),null;case 10:return ta(n.type),en(n),null;case 19:if(ot(ln),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,p=o.rendering,p===null)if(u)vo(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=Al(e),p!==null){for(n.flags|=128,vo(o,!1),e=p.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Yp(a,e),a=a.sibling;return it(ln,ln.current&1|2),we&&Ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Xl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Al(p),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!p.alternate&&!we)return en(n),null}else 2*T()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(p.sibling=n.child,n.child=p):(e=o.last,e!==null?e.sibling=p:n.child=p,o.last=p)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=ln.current,it(ln,u?a&1|2:a&1),we&&Ji(n,o.treeForkCount),e):(en(n),null);case 22:case 23:return ii(n),Ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ot(gs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(fn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function my(e,n){switch(Iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(fn),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return te(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ot(ln),null;case 4:return Dt(),null;case 10:return ta(n.type),null;case 22:case 23:return ii(n),Ju(),e!==null&&ot(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(fn),null;case 25:return null;default:return null}}function ym(e,n){switch(Iu(n),n.tag){case 3:ta(fn),Dt();break;case 26:case 27:case 5:te(n);break;case 4:Dt();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:ot(ln);break;case 10:ta(n.type);break;case 22:case 23:ii(n),Ju(),e!==null&&ot(gs);break;case 24:ta(fn)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var p=a.create,S=a.inst;o=p(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var F=a,et=A;try{et()}catch(dt){Ge(u,F,dt)}}}o=o.next}while(o!==p)}}catch(dt){Ge(n,n.return,dt)}}function Sm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{f0(n,a)}catch(o){Ge(e,e.return,o)}}}function Mm(e,n,a){a.props=Ms(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function bm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Uf(e,n,a){try{var o=e.stateNode;Iy(o,e.type,a,n),o[xn]=n}catch(u){Ge(e,e.return,u)}}function Em(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Lf(e,n,a),e=e.sibling;e!==null;)Lf(e,n,a),e=e.sibling}function Hl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function Tm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[un]=e,n[xn]=a}catch(p){Ge(e,e.return,p)}}var sa=!1,pn=!1,Of=!1,Am=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function xy(e,n){if(e=e.containerInfo,eh=oc,e=Bp(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break t}var S=0,A=-1,F=-1,et=0,dt=0,gt=e,at=null;e:for(;;){for(var ut;gt!==a||u!==0&&gt.nodeType!==3||(A=S+u),gt!==p||o!==0&&gt.nodeType!==3||(F=S+o),gt.nodeType===3&&(S+=gt.nodeValue.length),(ut=gt.firstChild)!==null;)at=gt,gt=ut;for(;;){if(gt===e)break e;if(at===a&&++et===u&&(A=S),at===p&&++dt===o&&(F=S),(ut=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=ut}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:e,selectionRange:a},oc=!1,Tn=n;Tn!==null;)if(n=Tn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Tn=e;else for(;Tn!==null;){switch(n=Tn,p=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,a=n,u=p.memoizedProps,p=p.memoizedState,o=a.stateNode;try{var Gt=Ms(a.type,u);e=o.getSnapshotBeforeUpdate(Gt,p),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ge(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Tn=e;break}Tn=n.return}}function Rm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&yo(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&Sm(a),o&512&&So(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{f0(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&Tm(a);case 26:case 5:oa(e,a),n===null&&o&4&&bm(a),o&512&&So(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),o&4&&Dm(e,a);break;case 13:oa(e,a),o&4&&Um(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ty.bind(null,a),Wy(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||pn,u=sa;var p=pn;sa=o,(pn=n)&&!p?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,pn=p}break;case 30:break;default:oa(e,a)}}function wm(e){var n=e.alternate;n!==null&&(e.alternate=null,wm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&jr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,kn=!1;function ra(e,n,a){for(a=a.child;a!==null;)Cm(e,n,a),a=a.sibling}function Cm(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:pn||Ii(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Ii(a,n);var o=an,u=kn;ka(a.type)&&(an=a.stateNode,kn=!1),ra(e,n,a),Do(a.stateNode),an=o,kn=u;break;case 5:pn||Ii(a,n);case 6:if(o=an,u=kn,an=null,ra(e,n,a),an=o,kn=u,an!==null)if(kn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(p){Ge(a,n,p)}else try{an.removeChild(a.stateNode)}catch(p){Ge(a,n,p)}break;case 18:an!==null&&(kn?(e=an,Sx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),dr(e)):Sx(an,a.stateNode));break;case 4:o=an,u=kn,an=a.stateNode.containerInfo,kn=!0,ra(e,n,a),an=o,kn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),pn||za(4,a,n),ra(e,n,a);break;case 1:pn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Mm(a,n,o)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ra(e,n,a),pn=o;break;default:ra(e,n,a)}}function Dm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dr(e)}catch(a){Ge(n,n.return,a)}}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dr(e)}catch(a){Ge(n,n.return,a)}}function gy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Am),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Am),n;default:throw Error(s(435,e.tag))}}function Gl(e,n){var a=gy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ay.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],p=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){an=A.stateNode,kn=!1;break t}break;case 5:an=A.stateNode,kn=!1;break t;case 3:case 4:an=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(an===null)throw Error(s(160));Cm(p,S,u),an=null,kn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nm(n,e),n=n.sibling}var Ti=null;function Nm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(za(3,e,e.return),yo(3,e),za(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(pn||a===null||Ii(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Xn(n,e),Wn(e),o&512&&(pn||a===null||Ii(a,a.return)),o&4){var p=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":p=u.getElementsByTagName("title")[0],(!p||p[ls]||p[un]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(o),u.head.insertBefore(p,u.querySelector("head > title"))),Ln(p,o,a),p[un]=e,nt(p),o=p;break t;case"link":var S=Nx("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(p=S[A],p.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&p.getAttribute("rel")===(a.rel==null?null:a.rel)&&p.getAttribute("title")===(a.title==null?null:a.title)&&p.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}p=u.createElement(o),Ln(p,o,a),u.head.appendChild(p);break;case"meta":if(S=Nx("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(p=S[A],p.getAttribute("content")===(a.content==null?null:""+a.content)&&p.getAttribute("name")===(a.name==null?null:a.name)&&p.getAttribute("property")===(a.property==null?null:a.property)&&p.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&p.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}p=u.createElement(o),Ln(p,o,a),u.head.appendChild(p);break;default:throw Error(s(468,o))}p[un]=e,nt(p),o=p}e.stateNode=o}else Lx(u,e.type,e.stateNode);else e.stateNode=Ux(u,o,e.memoizedProps);else p!==o?(p===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):p.count--,o===null?Lx(u,e.type,e.stateNode):Ux(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(pn||a===null||Ii(a,a.return)),a!==null&&o&4&&Uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(pn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{Oi(u,"")}catch(Gt){Ge(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Uf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){Ge(e,e.return,Gt)}}break;case 3:if(ic=null,u=Ti,Ti=ec(n.containerInfo),Xn(n,e),Ti=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(Gt){Ge(e,e.return,Gt)}Of&&(Of=!1,Lm(e));break;case 4:o=Ti,Ti=ec(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ti=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,et=sa,dt=pn;if(sa=et||u,pn=dt||F,Xn(n,e),pn=dt,sa=et,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||sa||pn||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(p=F.stateNode,u)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=F.stateNode;var gt=F.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Gt){Ge(F,F.return,Gt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Gt){Ge(F,F.return,Gt)}}}else if(n.tag===18){if(a===null){F=n;try{var ut=F.stateNode;u?Mx(ut,!0):Mx(F.stateNode,!1)}catch(Gt){Ge(F,F.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Em(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,p=Nf(e);Hl(e,p,u);break;case 5:var S=a.stateNode;a.flags&32&&(Oi(S,""),a.flags&=-33);var A=Nf(e);Hl(e,A,S);break;case 3:case 4:var F=a.stateNode.containerInfo,et=Nf(e);Lf(e,et,F);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Lm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rm(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),bs(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mm(n,n.return,a),bs(n);break;case 27:Do(n.stateNode);case 26:case 5:Ii(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:la(u,p,a),yo(4,p);break;case 1:if(la(u,p,a),o=p,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ge(o,o.return,et)}if(o=p,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)u0(F[u],A)}catch(et){Ge(o,o.return,et)}}a&&S&64&&Sm(p),So(p,p.return);break;case 27:Tm(p);case 26:case 5:la(u,p,a),a&&o===null&&S&4&&bm(p),So(p,p.return);break;case 12:la(u,p,a);break;case 31:la(u,p,a),a&&S&4&&Dm(u,p);break;case 13:la(u,p,a),a&&S&4&&Um(u,p);break;case 22:p.memoizedState===null&&la(u,p,a),So(p,p.return);break;case 30:break;default:la(u,p,a)}n=n.sibling}}function Pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function zf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Om(e,n,a,o),n=n.sibling}function Om(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),u&2048&&yo(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){Ai(e,n,a,o),e=n.stateNode;try{var p=n.memoizedProps,S=p.id,A=p.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ge(n,n.return,F)}}else Ai(e,n,a,o);break;case 31:Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?Ai(e,n,a,o):Mo(e,n):p._visibility&2?Ai(e,n,a,o):(p._visibility|=2,nr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(S,n);break;case 24:Ai(e,n,a,o),u&2048&&zf(n.alternate,n);break;default:Ai(e,n,a,o)}}function nr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=e,S=n,A=a,F=o,et=S.flags;switch(S.tag){case 0:case 11:case 15:nr(p,S,A,F,u),yo(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?nr(p,S,A,F,u):Mo(p,S):(dt._visibility|=2,nr(p,S,A,F,u)),u&&et&2048&&Pf(S.alternate,S);break;case 24:nr(p,S,A,F,u),u&&et&2048&&zf(S.alternate,S);break;default:nr(p,S,A,F,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Pf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&zf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var bo=8192;function ir(e,n,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Pm(e,n,a),e=e.sibling}function Pm(e,n,a){switch(e.tag){case 26:ir(e,n,a),e.flags&bo&&e.memoizedState!==null&&iS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:ir(e,n,a);break;case 3:case 4:var o=Ti;Ti=ec(e.stateNode.containerInfo),ir(e,n,a),Ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,ir(e,n,a),bo=o):ir(e,n,a));break;default:ir(e,n,a)}}function zm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,Bm(o,e)}zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&za(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):Eo(e);break;default:Eo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,Bm(o,e)}zm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:za(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function Bm(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var u=o.sibling,p=o.return;if(wm(o),o===a){Tn=null;break t}if(u!==null){u.return=p,Tn=u;break t}Tn=p}}}var _y={getCacheForType:function(e){var n=Un(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(fn).controller.signal}},vy=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Qe=null,Se=null,Ee=0,He=0,ai=null,Ia=!1,ar=!1,If=!1,ca=0,rn=0,Ba=0,Es=0,Bf=0,si=0,sr=0,To=null,qn=null,Ff=!1,kl=0,Fm=0,Xl=1/0,Wl=null,Fa=null,_n=0,Ha=null,rr=null,ua=0,Hf=0,Gf=null,Hm=null,Ao=0,Vf=null;function ri(){return(Ie&2)!==0&&Ee!==0?Ee&-Ee:B.T!==null?jf():qr()}function Gm(){if(si===0)if((Ee&536870912)===0||we){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function Yn(e,n,a){(e===Qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(or(e,0),Ga(e,Ee,si,!1)),On(e,a),((Ie&2)===0||e!==Qe)&&(e===Qe&&((Ie&2)===0&&(Es|=a),rn===4&&Ga(e,Ee,si,!1)),Bi(e))}function Vm(e,n,a){if((Ie&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?My(e,n):Xf(e,n,!0),p=o;do{if(u===0){ar&&!o&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,p&&!yy(a)){u=Xf(e,n,!1),p=!1;continue}if(u===2){if(p=n,e.errorRecoveryDisabledLanes&p)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=To;var F=A.current.memoizedState.isDehydrated;if(F&&(or(A,S).flags|=256),S=Xf(A,S,!1),S!==2){if(If&&!F){A.errorRecoveryDisabledLanes|=p,Es|=p,u=4;break t}p=qn,qn=u,p!==null&&(qn===null?qn=p:qn.push.apply(qn,p))}u=S}if(p=!1,u!==2)continue}}if(u===1){or(e,0),Ga(e,n,0,!0);break}t:{switch(o=e,p=u,p){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(o,n,si,!Ia);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kl+300-T(),10<u)){if(Ga(o,n,si,!Ia),_t(o,0,!0)!==0)break t;ua=n,o.timeoutHandle=vx(km.bind(null,o,a,qn,Wl,Ff,n,si,Es,sr,Ia,p,"Throttled",-0,0),u);break t}km(o,a,qn,Wl,Ff,n,si,Es,sr,Ia,p,null,-0,0)}}break}while(!0);Bi(e)}function km(e,n,a,o,u,p,S,A,F,et,dt,gt,at,ut){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Pm(n,p,gt);var Gt=(p&62914560)===p?kl-T():(p&4194048)===p?Fm-T():0;if(Gt=aS(gt,Gt),Gt!==null){ua=p,e.cancelPendingCommit=Gt(Qm.bind(null,e,n,p,a,o,u,S,A,F,dt,gt,null,at,ut)),Ga(e,p,S,!et);return}}Qm(e,n,p,a,o,u,S,A,F)}function yy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],p=u.getSnapshot;u=u.value;try{if(!ti(p(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,o){n&=~Bf,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var p=31-kt(u),S=1<<p;o[p]=-1,u&=~S}a!==0&&il(e,a,n)}function ql(){return(Ie&6)===0?(Ro(0),!1):!0}function kf(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,$i=ms=null,sf(e),Qs=null,lo=0,e=Se;for(;e!==null;)ym(e.alternate,e),e=e.return;Se=null}}function or(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,kf(),Qe=e,Se=a=Qi(e.current,null),Ee=n,He=0,ai=null,Ia=!1,ar=Ft(e,n),If=!1,sr=si=Bf=Es=Ba=rn=0,qn=To=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-kt(o),p=1<<u;n|=e[u],o&=~p}return ca=n,dl(),a}function Xm(e,n){fe=null,B.H=go,n===Ks||n===Sl?(n=r0(),He=3):n===qu?(n=r0(),He=4):He=n===Sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Se===null&&(rn=1,Pl(e,di(n,e.current)))}function Wm(){var e=ni.current;return e===null?!0:(Ee&4194048)===Ee?gi===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===gi:!1}function qm(){var e=B.H;return B.H=go,e===null?go:e}function Ym(){var e=B.A;return B.A=_y,e}function Yl(){rn=4,Ia||(Ee&4194048)!==Ee&&ni.current!==null||(ar=!0),(Ba&134217727)===0&&(Es&134217727)===0||Qe===null||Ga(Qe,Ee,si,!1)}function Xf(e,n,a){var o=Ie;Ie|=2;var u=qm(),p=Ym();(Qe!==e||Ee!==n)&&(Wl=null,or(e,n)),n=!1;var S=rn;t:do try{if(He!==0&&Se!==null){var A=Se,F=ai;switch(He){case 8:kf(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var et=He;if(He=0,ai=null,lr(e,A,F,et),a&&ar){S=0;break t}break;default:et=He,He=0,ai=null,lr(e,A,F,et)}}Sy(),S=rn;break}catch(dt){Xm(e,dt)}while(!0);return n&&e.shellSuspendCounter++,$i=ms=null,Ie=o,B.H=u,B.A=p,Se===null&&(Qe=null,Ee=0,dl()),S}function Sy(){for(;Se!==null;)jm(Se)}function My(e,n){var a=Ie;Ie|=2;var o=qm(),u=Ym();Qe!==e||Ee!==n?(Wl=null,Xl=T()+500,or(e,n)):ar=Ft(e,n);t:do try{if(He!==0&&Se!==null){n=Se;var p=ai;e:switch(He){case 1:He=0,ai=null,lr(e,n,p,1);break;case 2:case 9:if(a0(p)){He=0,ai=null,Zm(n);break}n=function(){He!==2&&He!==9||Qe!==e||(He=7),Bi(e)},p.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:a0(p)?(He=0,ai=null,Zm(n)):(He=0,ai=null,lr(e,n,p,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var A=Se;if(S?Ox(S):A.stateNode.complete){He=0,ai=null;var F=A.sibling;if(F!==null)Se=F;else{var et=A.return;et!==null?(Se=et,jl(et)):Se=null}break e}}He=0,ai=null,lr(e,n,p,5);break;case 6:He=0,ai=null,lr(e,n,p,6);break;case 8:kf(),rn=6;break t;default:throw Error(s(462))}}by();break}catch(dt){Xm(e,dt)}while(!0);return $i=ms=null,B.H=o,B.A=u,Ie=a,Se!==null?0:(Qe=null,Ee=0,dl(),rn)}function by(){for(;Se!==null&&!le();)jm(Se)}function jm(e){var n=_m(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?jl(e):Se=n}function Zm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=hm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=hm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:sf(n);default:ym(a,n),n=Se=Yp(n,ca),n=_m(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?jl(e):Se=n}function lr(e,n,a,o){$i=ms=null,sf(n),Qs=null,lo=0;var u=n.return;try{if(fy(e,u,n,a,Ee)){rn=1,Pl(e,di(a,e.current)),Se=null;return}}catch(p){if(u!==null)throw Se=u,p;rn=1,Pl(e,di(a,e.current)),Se=null;return}n.flags&32768?(we||o===1?e=!0:ar||(Ee&536870912)!==0?e=!1:(Ia=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Km(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){Km(n,Ia);return}e=n.return;var a=py(n.alternate,n,ca);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);rn===0&&(rn=5)}function Km(e,n){do{var a=my(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);rn=6,Se=null}function Qm(e,n,a,o,u,p,S,A,F){e.cancelPendingCommit=null;do Zl();while(_n!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(p=n.lanes|n.childLanes,p|=Uu,Jn(e,a,p,S,A,F),e===Qe&&(Se=Qe=null,Ee=0),rr=n,Ha=e,ua=a,Hf=p,Gf=u,Hm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ry(ht,function(){return nx(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=Y.p,Y.p=2,S=Ie,Ie|=4;try{xy(e,n,a)}finally{Ie=S,Y.p=u,B.T=o}}_n=1,Jm(),$m(),tx()}}function Jm(){if(_n===1){_n=0;var e=Ha,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Y.p;Y.p=2;var u=Ie;Ie|=4;try{Nm(n,e);var p=nh,S=Bp(e.containerInfo),A=p.focusedElem,F=p.selectionRange;if(S!==A&&A&&A.ownerDocument&&Ip(A.ownerDocument.documentElement,A)){if(F!==null&&Au(A)){var et=F.start,dt=F.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var ut=at.getSelection(),Gt=A.textContent.length,ee=Math.min(F.start,Gt),We=F.end===void 0?ee:Math.min(F.end,Gt);!ut.extend&&ee>We&&(S=We,We=ee,ee=S);var q=zp(A,ee),k=zp(A,We);if(q&&k&&(ut.rangeCount!==1||ut.anchorNode!==q.node||ut.anchorOffset!==q.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var $=gt.createRange();$.setStart(q.node,q.offset),ut.removeAllRanges(),ee>We?(ut.addRange($),ut.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ut.addRange($))}}}}for(gt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&gt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}oc=!!eh,nh=eh=null}finally{Ie=u,Y.p=o,B.T=a}}e.current=n,_n=2}}function $m(){if(_n===2){_n=0;var e=Ha,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Y.p;Y.p=2;var u=Ie;Ie|=4;try{Rm(e,n.alternate,n)}finally{Ie=u,Y.p=o,B.T=a}}_n=3}}function tx(){if(_n===4||_n===3){_n=0,O();var e=Ha,n=rr,a=ua,o=Hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,rr=Ha=null,ex(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fa=null),os(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=Y.p,Y.p=2,B.T=null;try{for(var p=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];p(A.value,{componentStack:A.stack})}}finally{B.T=n,Y.p=u}}(ua&3)!==0&&Zl(),Bi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Vf?Ao++:(Ao=0,Vf=e):Ao=0,Ro(0)}}function ex(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Zl(){return Jm(),$m(),tx(),nx()}function nx(){if(_n!==5)return!1;var e=Ha,n=Hf;Hf=0;var a=os(ua),o=B.T,u=Y.p;try{Y.p=32>a?32:a,B.T=null,a=Gf,Gf=null;var p=Ha,S=ua;if(_n=0,rr=Ha=null,ua=0,(Ie&6)!==0)throw Error(s(331));var A=Ie;if(Ie|=4,Im(p.current),Om(p,p.current,S,a),Ie=A,Ro(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Mt,p)}catch{}return!0}finally{Y.p=u,B.T=o,ex(e,n)}}function ix(e,n,a){n=di(a,n),n=yf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(On(e,2),Bi(e))}function Ge(e,n,a){if(e.tag===3)ix(e,e,a);else for(;n!==null;){if(n.tag===3){ix(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))){e=di(a,e),a=am(2),o=La(n,a,2),o!==null&&(sm(a,o,n,e),On(o,2),Bi(o));break}}n=n.return}}function Wf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new vy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(If=!0,u.add(a),e=Ey.bind(null,e,n,a),n.then(e,e))}function Ey(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Ee&a)===a&&(rn===4||rn===3&&(Ee&62914560)===Ee&&300>T()-kl?(Ie&2)===0&&or(e,0):Bf|=a,sr===Ee&&(sr=0)),Bi(e)}function ax(e,n){n===0&&(n=Ve()),e=hs(e,n),e!==null&&(On(e,n),Bi(e))}function Ty(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ax(e,a)}function Ay(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ax(e,a)}function Ry(e,n){return Ze(e,n)}var Kl=null,cr=null,qf=!1,Ql=!1,Yf=!1,Va=0;function Bi(e){e!==cr&&e.next===null&&(cr===null?Kl=cr=e:cr=cr.next=e),Ql=!0,qf||(qf=!0,Cy())}function Ro(e,n){if(!Yf&&Ql){Yf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var p=0;else{var S=o.suspendedLanes,A=o.pingedLanes;p=(1<<31-kt(42|e)+1)-1,p&=u&~(S&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(a=!0,lx(o,p))}else p=Ee,p=_t(o,o===Qe?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||Ft(o,p)||(a=!0,lx(o,p));o=o.next}while(a);Yf=!1}}function wy(){sx()}function sx(){Ql=qf=!1;var e=0;Va!==0&&Fy()&&(e=Va);for(var n=T(),a=null,o=Kl;o!==null;){var u=o.next,p=rx(o,n);p===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(cr=a)):(a=o,(e!==0||(p&3)!==0)&&(Ql=!0)),o=u}_n!==0&&_n!==5||Ro(e),Va!==0&&(Va=0)}function rx(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var S=31-kt(p),A=1<<S,F=u[S];F===-1?((A&a)===0||(A&o)!==0)&&(u[S]=se(A,n)):F<=n&&(e.expiredLanes|=A),p&=~A}if(n=Qe,a=Ee,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&jt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&jt(o),os(a)){case 2:case 8:a=St;break;case 32:a=ht;break;case 268435456:a=Lt;break;default:a=ht}return o=ox.bind(null,e),a=Ze(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&jt(o),e.callbackPriority=2,e.callbackNode=null,2}function ox(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=Ee;return o=_t(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Vm(e,o,n),rx(e,T()),e.callbackNode!=null&&e.callbackNode===a?ox.bind(null,e):null)}function lx(e,n){if(Zl())return null;Vm(e,n,!0)}function Cy(){Gy(function(){(Ie&6)!==0?Ze(xt,wy):sx()})}function jf(){if(Va===0){var e=js;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Va=e}return Va}function cx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function ux(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Dy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var p=cx((u[xn]||null).action),S=o.submitter;S&&(n=(n=S[xn]||null)?cx(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var A=new cl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Va!==0){var F=S?ux(u,S):new FormData(u);pf(a,{pending:!0,data:F,method:u.method,action:p},null,F)}}else typeof p=="function"&&(A.preventDefault(),F=S?ux(u,S):new FormData(u),pf(a,{pending:!0,data:F,method:u.method,action:p},p,F))},currentTarget:u}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],Uy=Kf.toLowerCase(),Ny=Kf[0].toUpperCase()+Kf.slice(1);Ei(Uy,"on"+Ny)}Ei(Gp,"onAnimationEnd"),Ei(Vp,"onAnimationIteration"),Ei(kp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(jv,"onTransitionRun"),Ei(Zv,"onTransitionStart"),Ei(Kv,"onTransitionCancel"),Ei(Xp,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function fx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var p=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],F=A.instance,et=A.currentTarget;if(A=A.listener,F!==p&&u.isPropagationStopped())break t;p=A,u.currentTarget=et;try{p(u)}catch(dt){hl(dt)}u.currentTarget=null,p=F}else for(S=0;S<o.length;S++){if(A=o[S],F=A.instance,et=A.currentTarget,A=A.listener,F!==p&&u.isPropagationStopped())break t;p=A,u.currentTarget=et;try{p(u)}catch(dt){hl(dt)}u.currentTarget=null,p=F}}}}function Me(e,n){var a=n[zs];a===void 0&&(a=n[zs]=new Set);var o=e+"__bubble";a.has(o)||(hx(n,e,2,!1),a.add(o))}function Qf(e,n,a){var o=0;n&&(o|=4),hx(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[Jl]){e[Jl]=!0,K.forEach(function(a){a!=="selectionchange"&&(Ly.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Qf("selectionchange",!1,n))}}function hx(e,n,a,o){switch(Gx(n)){case 2:var u=oS;break;case 8:u=lS;break;default:u=dh}a=u.bind(null,n,a,e),u=void 0,!gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function $f(e,n,a,o,u){var p=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Ea(A),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){o=p=S;continue t}A=A.parentNode}}o=o.return}gp(function(){var et=p,dt=mu(a),gt=[];t:{var at=Wp.get(e);if(at!==void 0){var ut=cl,Gt=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ut=Av;break;case"focusin":Gt="focus",ut=Su;break;case"focusout":Gt="blur",ut=Su;break;case"beforeblur":case"afterblur":ut=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Cv;break;case Gp:case Vp:case kp:ut=gv;break;case Xp:ut=Uv;break;case"scroll":case"scrollend":ut=hv;break;case"wheel":ut=Lv;break;case"copy":case"cut":case"paste":ut=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Mp;break;case"toggle":case"beforetoggle":ut=Pv}var ee=(n&4)!==0,We=!ee&&(e==="scroll"||e==="scrollend"),q=ee?at!==null?at+"Capture":null:at;ee=[];for(var k=et,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||q===null||(mt=Zr(k,q),mt!=null&&ee.push(Co(k,mt,$))),We)break;k=k.return}0<ee.length&&(at=new ut(at,Gt,null,a,dt),gt.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",at&&a!==pu&&(Gt=a.relatedTarget||a.fromElement)&&(Ea(Gt)||Gt[qi]))break t;if((ut||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,ut?(Gt=a.relatedTarget||a.toElement,ut=et,Gt=Gt?Ea(Gt):null,Gt!==null&&(We=c(Gt),ee=Gt.tag,Gt!==We||ee!==5&&ee!==27&&ee!==6)&&(Gt=null)):(ut=null,Gt=et),ut!==Gt)){if(ee=yp,mt="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Mp,mt="onPointerLeave",q="onPointerEnter",k="pointer"),We=ut==null?at:W(ut),$=Gt==null?at:W(Gt),at=new ee(mt,k+"leave",ut,a,dt),at.target=We,at.relatedTarget=$,mt=null,Ea(dt)===et&&(ee=new ee(q,k+"enter",Gt,a,dt),ee.target=$,ee.relatedTarget=We,mt=ee),We=mt,ut&&Gt)e:{for(ee=Oy,q=ut,k=Gt,$=0,mt=q;mt;mt=ee(mt))$++;mt=0;for(var Kt=k;Kt;Kt=ee(Kt))mt++;for(;0<$-mt;)q=ee(q),$--;for(;0<mt-$;)k=ee(k),mt--;for(;$--;){if(q===k||k!==null&&q===k.alternate){ee=q;break e}q=ee(q),k=ee(k)}ee=null}else ee=null;ut!==null&&dx(gt,at,ut,ee,!1),Gt!==null&&We!==null&&dx(gt,We,Gt,ee,!0)}}t:{if(at=et?W(et):window,ut=at.nodeName&&at.nodeName.toLowerCase(),ut==="select"||ut==="input"&&at.type==="file")var Le=Dp;else if(wp(at))if(Up)Le=Wv;else{Le=kv;var Xt=Vv}else ut=at.nodeName,!ut||ut.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&du(et.elementType)&&(Le=Dp):Le=Xv;if(Le&&(Le=Le(e,et))){Cp(gt,Le,a,dt);break t}Xt&&Xt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&bn(at,"number",at.value)}switch(Xt=et?W(et):window,e){case"focusin":(wp(Xt)||Xt.contentEditable==="true")&&(Hs=Xt,Ru=et,io=null);break;case"focusout":io=Ru=Hs=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Fp(gt,a,dt);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":Fp(gt,a,dt)}var me;if(bu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Fs?Ap(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(bp&&a.locale!=="ko"&&(Fs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Fs&&(me=_p()):(Aa=dt,_u="value"in Aa?Aa.value:Aa.textContent,Fs=!0)),Xt=$l(et,Te),0<Xt.length&&(Te=new Sp(Te,e,null,a,dt),gt.push({event:Te,listeners:Xt}),me?Te.data=me:(me=Rp(a),me!==null&&(Te.data=me)))),(me=Iv?Bv(e,a):Fv(e,a))&&(Te=$l(et,"onBeforeInput"),0<Te.length&&(Xt=new Sp("onBeforeInput","beforeinput",null,a,dt),gt.push({event:Xt,listeners:Te}),Xt.data=me)),Dy(gt,e,et,a,dt)}fx(gt,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=Zr(e,a),u!=null&&o.unshift(Co(e,u,p)),u=Zr(e,n),u!=null&&o.push(Co(e,u,p))),e.tag===3)return o;e=e.return}return[]}function Oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dx(e,n,a,o,u){for(var p=n._reactName,S=[];a!==null&&a!==o;){var A=a,F=A.alternate,et=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||et===null||(F=et,u?(et=Zr(a,p),et!=null&&S.unshift(Co(a,et,F))):u||(et=Zr(a,p),et!=null&&S.push(Co(a,et,F)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Py=/\r\n?/g,zy=/\u0000|\uFFFD/g;function px(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(zy,"")}function mx(e,n){return n=px(n),px(e)===n}function Xe(e,n,a,o,u,p){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Oi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Oi(e,""+o);break;case"className":Ce(e,"class",o);break;case"tabIndex":Ce(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(e,a,o);break;case"style":mp(e,o,p);break;case"data":if(n!=="object"){Ce(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),pe(e,"popover",o);break;case"xlinkActuate":Ne(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ne(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ne(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ne(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ne(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ne(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":pe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=uv.get(a)||a,pe(e,a,o))}}function th(e,n,a,o,u,p){switch(a){case"style":mp(e,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Oi(e,o):(typeof o=="number"||typeof o=="bigint")&&Oi(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),p=e[xn]||null,p=p!=null?p[a]:null,typeof p=="function"&&e.removeEventListener(n,p,u),typeof o=="function")){typeof p!="function"&&p!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):pe(e,a,o)}}}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,p;for(p in a)if(a.hasOwnProperty(p)){var S=a[p];if(S!=null)switch(p){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,p,S,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=p=S=u=null,F=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":F=dt;break;case"defaultChecked":et=dt;break;case"value":p=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,dt,a,null)}}$e(e,p,A,F,et,S,u,!1);return;case"select":Me("invalid",e),o=S=p=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":p=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Xe(e,n,u,A,a,null)}n=p,a=S,e.multiple=!!o,n!=null?gn(e,!!o,n,!1):a!=null&&gn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),p=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,S,A,a,null)}Cn(e,o,u,p);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,F,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)Me(wo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,et,o,a,null)}return;default:if(du(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&th(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xe(e,n,A,o,a,null))}function Iy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,S=null,A=null,F=null,et=null,dt=null;for(ut in a){var gt=a[ut];if(a.hasOwnProperty(ut)&&gt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":F=gt;default:o.hasOwnProperty(ut)||Xe(e,n,ut,null,o,gt)}}for(var at in o){var ut=o[at];if(gt=a[at],o.hasOwnProperty(at)&&(ut!=null||gt!=null))switch(at){case"type":p=ut;break;case"name":u=ut;break;case"checked":et=ut;break;case"defaultChecked":dt=ut;break;case"value":S=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==gt&&Xe(e,n,at,ut,o,gt)}}Yi(e,S,A,F,et,dt,p,u);return;case"select":ut=S=A=at=null;for(p in a)if(F=a[p],a.hasOwnProperty(p)&&F!=null)switch(p){case"value":break;case"multiple":ut=F;default:o.hasOwnProperty(p)||Xe(e,n,p,null,o,F)}for(u in o)if(p=o[u],F=a[u],o.hasOwnProperty(u)&&(p!=null||F!=null))switch(u){case"value":at=p;break;case"defaultValue":A=p;break;case"multiple":S=p;default:p!==F&&Xe(e,n,u,p,o,F)}n=A,a=S,o=ut,at!=null?gn(e,!!a,at,!1):!!o!=!!a&&(n!=null?gn(e,!!a,n,!0):gn(e,!!a,a?[]:"",!1));return;case"textarea":ut=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,o,u)}for(S in o)if(u=o[S],p=a[S],o.hasOwnProperty(S)&&(u!=null||p!=null))switch(S){case"value":at=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==p&&Xe(e,n,S,u,o,p)}En(e,at,ut);return;case"option":for(var Gt in a)if(at=a[Gt],a.hasOwnProperty(Gt)&&at!=null&&!o.hasOwnProperty(Gt))switch(Gt){case"selected":e.selected=!1;break;default:Xe(e,n,Gt,null,o,at)}for(F in o)if(at=o[F],ut=a[F],o.hasOwnProperty(F)&&at!==ut&&(at!=null||ut!=null))switch(F){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Xe(e,n,F,at,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!o.hasOwnProperty(ee)&&Xe(e,n,ee,null,o,at);for(et in o)if(at=o[et],ut=a[et],o.hasOwnProperty(et)&&at!==ut&&(at!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Xe(e,n,et,at,o,ut)}return;default:if(du(n)){for(var We in a)at=a[We],a.hasOwnProperty(We)&&at!==void 0&&!o.hasOwnProperty(We)&&th(e,n,We,void 0,o,at);for(dt in o)at=o[dt],ut=a[dt],!o.hasOwnProperty(dt)||at===ut||at===void 0&&ut===void 0||th(e,n,dt,at,o,ut);return}}for(var q in a)at=a[q],a.hasOwnProperty(q)&&at!=null&&!o.hasOwnProperty(q)&&Xe(e,n,q,null,o,at);for(gt in o)at=o[gt],ut=a[gt],!o.hasOwnProperty(gt)||at===ut||at==null&&ut==null||Xe(e,n,gt,at,o,ut)}function xx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function By(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],p=u.transferSize,S=u.initiatorType,A=u.duration;if(p&&A&&xx(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],et=F.startTime;if(et>A)break;var dt=F.transferSize,gt=F.initiatorType;dt&&xx(gt)&&(F=F.responseEnd,S+=dt*(F<A?1:(A-et)/(F-et)))}if(--o,n+=8*(p+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eh=null,nh=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function gx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _x(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ih(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var vx=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,yx=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof yx<"u"?function(e){return yx.resolve(null).then(e).catch(Vy)}:vx;function Vy(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Sx(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),dr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var p=a.firstChild;p;){var S=p.nextSibling,A=p.nodeName;p[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=S}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);dr(n)}function Mx(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ky(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ls])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Xy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function bx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$?"||e.data==="$~"}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var lh=null;function Ex(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Tx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ax(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);jr(e)}var vi=new Map,Rx=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=Y.d;Y.d={f:qy,r:Yy,D:jy,C:Zy,L:Ky,m:Qy,X:$y,S:Jy,M:tS};function qy(){var e=fa.f(),n=ql();return e||n}function Yy(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?X0(n):fa.r(e)}var ur=typeof document>"u"?null:document;function wx(e,n,a){var o=ur;if(o&&typeof n=="string"&&n){var u=Je(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Rx.has(u)||(Rx.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",e),nt(n),o.head.appendChild(n)))}}function jy(e){fa.D(e),wx("dns-prefetch",e,null)}function Zy(e,n){fa.C(e,n),wx("preconnect",e,n)}function Ky(e,n,a){fa.L(e,n,a);var o=ur;if(o&&e&&n){var u='link[rel="preload"][as="'+Je(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Je(a.imageSizes)+'"]')):u+='[href="'+Je(e)+'"]';var p=u;switch(n){case"style":p=fr(e);break;case"script":p=hr(e)}vi.has(p)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(p,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(p))||n==="script"&&o.querySelector(No(p))||(n=o.createElement("link"),Ln(n,"link",e),nt(n),o.head.appendChild(n)))}}function Qy(e,n){fa.m(e,n);var a=ur;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Je(o)+'"][href="'+Je(e)+'"]',p=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=hr(e)}if(!vi.has(p)&&(e=x({rel:"modulepreload",href:e},n),vi.set(p,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(p)))return}o=a.createElement("link"),Ln(o,"link",e),nt(o),a.head.appendChild(o)}}}function Jy(e,n,a){fa.S(e,n,a);var o=ur;if(o&&e){var u=lt(o).hoistableStyles,p=fr(e);n=n||"default";var S=u.get(p);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Uo(p)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(p))&&ch(e,a);var F=S=o.createElement("link");nt(F),Ln(F,"link",e),F._p=new Promise(function(et,dt){F.onload=et,F.onerror=dt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,nc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(p,S)}}}function $y(e,n){fa.X(e,n);var a=ur;if(a&&e){var o=lt(a).hoistableScripts,u=hr(e),p=o.get(u);p||(p=a.querySelector(No(u)),p||(e=x({src:e,async:!0},n),(n=vi.get(u))&&uh(e,n),p=a.createElement("script"),nt(p),Ln(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function tS(e,n){fa.M(e,n);var a=ur;if(a&&e){var o=lt(a).hoistableScripts,u=hr(e),p=o.get(u);p||(p=a.querySelector(No(u)),p||(e=x({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&uh(e,n),p=a.createElement("script"),nt(p),Ln(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function Cx(e,n,a,o){var u=(u=Q.current)?ec(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=lt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fr(a.href);var p=lt(u).hoistableStyles,S=p.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,S),(p=u.querySelector(Uo(e)))&&!p._p&&(S.instance=p,S.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),p||eS(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=lt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function fr(e){return'href="'+Je(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function Dx(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),nt(n),e.head.appendChild(n))}function hr(e){return'[src="'+Je(e)+'"]'}function No(e){return"script[async]"+e}function Ux(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Je(a.href)+'"]');if(o)return n.instance=o,nt(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nt(o),Ln(o,"style",u),nc(o,a.precedence,e),n.instance=o;case"stylesheet":u=fr(a.href);var p=e.querySelector(Uo(u));if(p)return n.state.loading|=4,n.instance=p,nt(p),p;o=Dx(a),(u=vi.get(u))&&ch(o,u),p=(e.ownerDocument||e).createElement("link"),nt(p);var S=p;return S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),Ln(p,"link",o),n.state.loading|=4,nc(p,a.precedence,e),n.instance=p;case"script":return p=hr(a.src),(u=e.querySelector(No(p)))?(n.instance=u,nt(u),u):(o=a,(u=vi.get(p))&&(o=x({},a),uh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nt(u),Ln(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,e));return n.instance}function nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,p=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)p=A;else if(p!==u)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function uh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function Nx(e,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var p=a[u];if(!(p[ls]||p[un]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(p):o.set(S,[p])}}return o}function Lx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ox(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fr(o.href),p=n.querySelector(Uo(u));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=p,nt(p);return}p=n.ownerDocument||n,o=Dx(o),(u=vi.get(u))&&ch(o,u),p=p.createElement("link"),nt(p);var S=p;S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),Ln(p,"link",o),a.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var fh=0;function aS(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+n);0<e.imgBytes&&fh===0&&(fh=62500*By());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>fh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(sS,e),sc=null,ac.call(e))}function sS(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var S=u[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),p=a.get(S)||o,p===o&&a.set(null,u),a.set(S,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),p?p.parentNode.insertBefore(u,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function rS(e,n,a,o,u,p,S,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Px(e,n,a,o,u,p,S,A,F,et,dt,gt){return e=new rS(e,n,a,S,F,et,dt,gt,A),n=1,p===!0&&(n|=24),p=ei(3,null,null,n),e.current=p,p.stateNode=e,n=ku(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:o,isDehydrated:a,cache:n},Yu(p),e}function zx(e){return e?(e=ks,e):ks}function Ix(e,n,a,o,u,p){u=zx(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},p=p===void 0?null:p,p!==null&&(o.callback=p),a=La(e,o,n),a!==null&&(Yn(a,e,n),uo(a,e,n))}function Bx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function hh(e,n){Bx(e,n),(e=e.alternate)&&Bx(e,n)}function Fx(e){if(e.tag===13||e.tag===31){var n=hs(e,67108864);n!==null&&Yn(n,e,67108864),hh(e,67108864)}}function Hx(e){if(e.tag===13||e.tag===31){var n=ri();n=bi(n);var a=hs(e,n);a!==null&&Yn(a,e,n),hh(e,n)}}var oc=!0;function oS(e,n,a,o){var u=B.T;B.T=null;var p=Y.p;try{Y.p=2,dh(e,n,a,o)}finally{Y.p=p,B.T=u}}function lS(e,n,a,o){var u=B.T;B.T=null;var p=Y.p;try{Y.p=8,dh(e,n,a,o)}finally{Y.p=p,B.T=u}}function dh(e,n,a,o){if(oc){var u=ph(o);if(u===null)$f(e,n,o,lc,a),Vx(e,o);else if(uS(u,e,n,a,o))o.stopPropagation();else if(Vx(e,o),n&4&&-1<cS.indexOf(e)){for(;u!==null;){var p=R(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=bt(p.pendingLanes);if(S!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var F=1<<31-kt(S);A.entanglements[1]|=F,S&=~F}Bi(p),(Ie&6)===0&&(Xl=T()+500,Ro(0))}}break;case 31:case 13:A=hs(p,2),A!==null&&Yn(A,p,2),ql(),hh(p,2)}if(p=ph(o),p===null&&$f(e,n,o,lc,a),p===u)break;u=p}u!==null&&o.stopPropagation()}else $f(e,n,o,null,a)}}function ph(e){return e=mu(e),mh(e)}var lc=null;function mh(e){if(lc=null,e=Ea(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Gx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case xt:return 2;case St:return 8;case ht:case qt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var xh=!1,Xa=null,Wa=null,qa=null,Oo=new Map,Po=new Map,Ya=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vx(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(e,n,a,o,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:p,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Fx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function uS(e,n,a,o,u){switch(n){case"focusin":return Xa=zo(Xa,e,n,a,o,u),!0;case"dragenter":return Wa=zo(Wa,e,n,a,o,u),!0;case"mouseover":return qa=zo(qa,e,n,a,o,u),!0;case"pointerover":var p=u.pointerId;return Oo.set(p,zo(Oo.get(p)||null,e,n,a,o,u)),!0;case"gotpointercapture":return p=u.pointerId,Po.set(p,zo(Po.get(p)||null,e,n,a,o,u)),!0}return!1}function kx(e){var n=Ea(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Yr(e.priority,function(){Hx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Yr(e.priority,function(){Hx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ph(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=R(a),n!==null&&Fx(n),e.blockedOn=a,!1;n.shift()}return!0}function Xx(e,n,a){cc(e)&&a.delete(n)}function fS(){xh=!1,Xa!==null&&cc(Xa)&&(Xa=null),Wa!==null&&cc(Wa)&&(Wa=null),qa!==null&&cc(qa)&&(qa=null),Oo.forEach(Xx),Po.forEach(Xx)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,fS)))}var fc=null;function Wx(e){fc!==e&&(fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var p=R(a);p!==null&&(e.splice(n,3),n-=3,pf(p,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function dr(e){function n(F){return uc(F,e)}Xa!==null&&uc(Xa,e),Wa!==null&&uc(Wa,e),qa!==null&&uc(qa,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ya.length;a++){var o=Ya[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)kx(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],p=a[o+1],S=u[xn]||null;if(typeof p=="function")S||Wx(a);else if(S){var A=null;if(p&&p.hasAttribute("formAction")){if(u=p,S=p[xn]||null)A=S.formAction;else if(mh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Wx(a)}}}function qx(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gh(e){this._internalRoot=e}hc.prototype.render=gh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();Ix(a,o,e,n,null,null)},hc.prototype.unmount=gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ix(e.current,2,null,e,null,null),ql(),n[qi]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=qr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&kx(e)}};var Yx=t.version;if(Yx!=="19.2.0")throw Error(s(527,Yx,"19.2.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var hS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{Mt=dc.inject(hS),Tt=dc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=tm,p=em,S=nm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Px(e,1,!1,null,null,a,o,null,u,p,S,qx),e[qi]=n.current,Jf(e),new gh(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",p=tm,S=em,A=nm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Px(e,1,!0,n,a??null,o,u,F,p,S,A,qx),n.context=zx(null),a=n.current,o=ri(),o=bi(o),u=Na(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,On(n,a),Bi(n),e[qi]=n.current,Jf(e),new hc(n)},Bo.version="19.2.0",Bo}var ig;function ES(){if(ig)return yh.exports;ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=bS(),yh.exports}var TS=ES();const AS=Yd(TS);const su="181",Ur={ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RS=0,ag=1,wS=2,E_=1,T_=2,_a=3,ss=0,Zn=1,Hi=2,Sa=0,Nr=1,sg=2,rg=3,og=4,CS=5,Us=100,DS=101,US=102,NS=103,LS=104,OS=200,PS=201,zS=202,IS=203,sd=204,rd=205,BS=206,FS=207,HS=208,GS=209,VS=210,kS=211,XS=212,WS=213,qS=214,od=0,ld=1,cd=2,Or=3,ud=4,fd=5,hd=6,dd=7,A_=0,YS=1,jS=2,as=0,ZS=1,KS=2,QS=3,JS=4,$S=5,tM=6,eM=7,R_=300,Pr=301,zr=302,pd=303,md=304,ru=306,Kc=1e3,Gi=1001,Qc=1002,Kn=1003,w_=1004,Wo=1005,ui=1006,Ic=1007,ns=1008,ki=1009,C_=1010,D_=1011,Ko=1012,Zd=1013,Ls=1014,ya=1015,Fr=1016,Kd=1017,Qd=1018,Qo=1020,U_=35902,N_=35899,L_=1021,O_=1022,Mi=1023,Jo=1026,$o=1027,P_=1028,Jd=1029,$d=1030,tp=1031,ep=1033,Bc=33776,Fc=33777,Hc=33778,Gc=33779,xd=35840,gd=35841,_d=35842,vd=35843,yd=36196,Sd=37492,Md=37496,bd=37808,Ed=37809,Td=37810,Ad=37811,Rd=37812,wd=37813,Cd=37814,Dd=37815,Ud=37816,Nd=37817,Ld=37818,Od=37819,Pd=37820,zd=37821,Id=36492,Bd=36494,Fd=36495,Hd=36283,Gd=36284,Vd=36285,kd=36286,nM=2300,iM=2301,aM=3200,sM=3201,z_=0,rM=1,va="",ci="srgb",Ir="srgb-linear",Jc="linear",qe="srgb",pr=7680,lg=519,oM=512,lM=513,cM=514,I_=515,uM=516,fM=517,hM=518,dM=519,cg=35044,ug="300 es",Vi=2e3,$c=2001;function B_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pM(){const r=tu("canvas");return r.style.display="block",r}const fg={};function hg(...r){const t="THREE."+r.shift();console.log(t,...r)}function ae(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Be(...r){const t="THREE."+r.shift();console.error(t,...r)}function tl(...r){const t=r.join(" ");t in fg||(fg[t]=!0,ae(...r))}function mM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dg=1234567;const jo=Math.PI/180,el=180/Math.PI;function Hr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function ge(r,t,i){return Math.max(t,Math.min(i,r))}function np(r,t){return(r%t+t)%t}function xM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function gM(r,t,i){return r!==t?(i-r)/(t-r):0}function Zo(r,t,i){return(1-i)*r+i*t}function _M(r,t,i,s){return Zo(r,t,1-Math.exp(-i*s))}function vM(r,t=1){return t-Math.abs(np(r,t*2)-t)}function yM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function SM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function MM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bM(r,t){return r+Math.random()*(t-r)}function EM(r){return r*(.5-Math.random())}function TM(r){r!==void 0&&(dg=r);let t=dg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AM(r){return r*jo}function RM(r){return r*el}function wM(r){return(r&r-1)===0&&r!==0}function CM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function DM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function UM(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),d=f(i/2),m=c((t+s)/2),g=f((t+s)/2),x=c((t-s)/2),_=f((t-s)/2),v=c((s-t)/2),b=f((s-t)/2);switch(l){case"XYX":r.set(h*g,d*x,d*_,h*m);break;case"YZY":r.set(d*_,h*g,d*x,h*m);break;case"ZXZ":r.set(d*x,d*_,h*g,h*m);break;case"XZX":r.set(h*g,d*b,d*v,h*m);break;case"YXY":r.set(d*v,h*g,d*b,h*m);break;case"ZYZ":r.set(d*b,d*v,h*g,h*m);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function wr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const eu={DEG2RAD:jo,RAD2DEG:el,generateUUID:Hr,clamp:ge,euclideanModulo:np,mapLinear:xM,inverseLerp:gM,lerp:Zo,damp:_M,pingpong:vM,smoothstep:yM,smootherstep:SM,randInt:MM,randFloat:bM,randFloatSpread:EM,seededRandom:TM,degToRad:AM,radToDeg:RM,isPowerOfTwo:wM,ceilPowerOfTwo:CM,floorPowerOfTwo:DM,setQuaternionFromProperEuler:UM,normalize:Hn,denormalize:wr};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let d=s[l+0],m=s[l+1],g=s[l+2],x=s[l+3],_=c[f+0],v=c[f+1],b=c[f+2],E=c[f+3];if(h<=0){t[i+0]=d,t[i+1]=m,t[i+2]=g,t[i+3]=x;return}if(h>=1){t[i+0]=_,t[i+1]=v,t[i+2]=b,t[i+3]=E;return}if(x!==E||d!==_||m!==v||g!==b){let M=d*_+m*v+g*b+x*E;M<0&&(_=-_,v=-v,b=-b,E=-E,M=-M);let y=1-h;if(M<.9995){const P=Math.acos(M),N=Math.sin(P);y=Math.sin(y*P)/N,h=Math.sin(h*P)/N,d=d*y+_*h,m=m*y+v*h,g=g*y+b*h,x=x*y+E*h}else{d=d*y+_*h,m=m*y+v*h,g=g*y+b*h,x=x*y+E*h;const P=1/Math.sqrt(d*d+m*m+g*g+x*x);d*=P,m*=P,g*=P,x*=P}}t[i]=d,t[i+1]=m,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],d=s[l+1],m=s[l+2],g=s[l+3],x=c[f],_=c[f+1],v=c[f+2],b=c[f+3];return t[i]=h*b+g*x+d*v-m*_,t[i+1]=d*b+g*_+m*x-h*v,t[i+2]=m*b+g*v+h*_-d*x,t[i+3]=g*b-h*x-d*_-m*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,d=Math.sin,m=h(s/2),g=h(l/2),x=h(c/2),_=d(s/2),v=d(l/2),b=d(c/2);switch(f){case"XYZ":this._x=_*g*x+m*v*b,this._y=m*v*x-_*g*b,this._z=m*g*b+_*v*x,this._w=m*g*x-_*v*b;break;case"YXZ":this._x=_*g*x+m*v*b,this._y=m*v*x-_*g*b,this._z=m*g*b-_*v*x,this._w=m*g*x+_*v*b;break;case"ZXY":this._x=_*g*x-m*v*b,this._y=m*v*x+_*g*b,this._z=m*g*b+_*v*x,this._w=m*g*x-_*v*b;break;case"ZYX":this._x=_*g*x-m*v*b,this._y=m*v*x+_*g*b,this._z=m*g*b-_*v*x,this._w=m*g*x+_*v*b;break;case"YZX":this._x=_*g*x+m*v*b,this._y=m*v*x+_*g*b,this._z=m*g*b-_*v*x,this._w=m*g*x-_*v*b;break;case"XZY":this._x=_*g*x-m*v*b,this._y=m*v*x-_*g*b,this._z=m*g*b+_*v*x,this._w=m*g*x+_*v*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],d=i[9],m=i[2],g=i[6],x=i[10],_=s+h+x;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(g-d)*v,this._y=(c-m)*v,this._z=(f-l)*v}else if(s>h&&s>x){const v=2*Math.sqrt(1+s-h-x);this._w=(g-d)/v,this._x=.25*v,this._y=(l+f)/v,this._z=(c+m)/v}else if(h>x){const v=2*Math.sqrt(1+h-s-x);this._w=(c-m)/v,this._x=(l+f)/v,this._y=.25*v,this._z=(d+g)/v}else{const v=2*Math.sqrt(1+x-s-h);this._w=(f-l)/v,this._x=(c+m)/v,this._y=(d+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,d=i._y,m=i._z,g=i._w;return this._x=s*g+f*h+l*m-c*d,this._y=l*g+f*d+c*h-s*m,this._z=c*g+f*m+s*d-l*h,this._w=f*g-s*h-l*d-c*m,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let d=1-i;if(h<.9995){const m=Math.acos(h),g=Math.sin(m);d=Math.sin(d*m)/g,i=Math.sin(i*m)/g,this._x=this._x*d+s*i,this._y=this._y*d+l*i,this._z=this._z*d+c*i,this._w=this._w*d+f*i,this._onChangeCallback()}else this._x=this._x*d+s*i,this._y=this._y*d+l*i,this._z=this._z*d+c*i,this._w=this._w*d+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(pg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(pg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,d=t.w,m=2*(f*l-h*s),g=2*(h*i-c*l),x=2*(c*s-f*i);return this.x=i+d*m+f*x-h*g,this.y=s+d*g+h*m-c*x,this.z=l+d*x+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,d=i.z;return this.x=l*d-c*h,this.y=c*f-s*d,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new j,pg=new Xi;class he{constructor(t,i,s,l,c,f,h,d,m){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,d,m)}set(t,i,s,l,c,f,h,d,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=d,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],d=s[6],m=s[1],g=s[4],x=s[7],_=s[2],v=s[5],b=s[8],E=l[0],M=l[3],y=l[6],P=l[1],N=l[4],C=l[7],z=l[2],U=l[5],L=l[8];return c[0]=f*E+h*P+d*z,c[3]=f*M+h*N+d*U,c[6]=f*y+h*C+d*L,c[1]=m*E+g*P+x*z,c[4]=m*M+g*N+x*U,c[7]=m*y+g*C+x*L,c[2]=_*E+v*P+b*z,c[5]=_*M+v*N+b*U,c[8]=_*y+v*C+b*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],d=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-s*c*g+s*h*d+l*c*m-l*f*d}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],d=t[6],m=t[7],g=t[8],x=g*f-h*m,_=h*d-g*c,v=m*c-f*d,b=i*x+s*_+l*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=x*E,t[1]=(l*m-g*s)*E,t[2]=(h*s-l*f)*E,t[3]=_*E,t[4]=(g*i-l*d)*E,t[5]=(l*c-h*i)*E,t[6]=v*E,t[7]=(s*d-m*i)*E,t[8]=(f*i-s*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const d=Math.cos(c),m=Math.sin(c);return this.set(s*d,s*m,-s*(d*f+m*h)+f+t,-l*m,l*d,-l*(-m*f+d*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Th.makeScale(t,i)),this}rotate(t){return this.premultiply(Th.makeRotation(-t)),this}translate(t,i){return this.premultiply(Th.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new he,mg=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NM(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qe&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qe&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===va?Jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ir]:{primaries:t,whitePoint:s,transfer:Jc,toXYZ:mg,fromXYZ:xg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:qe,toXYZ:mg,fromXYZ:xg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const ze=NM();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mr;class F_{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{mr===void 0&&(mr=tu("canvas")),mr.width=t.width,mr.height=t.height;const l=mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ma(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LM=0;class ou{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Hr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ah(l[f].image)):c.push(Ah(l[f]))}else c=Ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?F_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let OM=0;const Rh=new j;class Bn extends Ps{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Gi,l=Gi,c=ui,f=ns,h=Mi,d=ki,m=Bn.DEFAULT_ANISOTROPY,g=va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Hr(),this.name="",this.source=new ou(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=d,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==R_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kc:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kc:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=R_;Bn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const d=t.elements,m=d[0],g=d[4],x=d[8],_=d[1],v=d[5],b=d[9],E=d[2],M=d[6],y=d[10];if(Math.abs(g-_)<.01&&Math.abs(x-E)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+E)<.1&&Math.abs(b+M)<.1&&Math.abs(m+v+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,C=(v+1)/2,z=(y+1)/2,U=(g+_)/4,L=(x+E)/4,X=(b+M)/4;return N>C&&N>z?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=U/s,c=L/s):C>z?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=U/l,c=X/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=L/c,l=X/c),this.set(s,l,c,i),this}let P=Math.sqrt((M-b)*(M-b)+(x-E)*(x-E)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(M-b)/P,this.y=(x-E)/P,this.z=(_-g)/P,this.w=Math.acos((m+v+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this.w=ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this.w=ge(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PM extends Ps{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Bn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ou(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends PM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class H_ extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zM extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ri):Ri.fromBufferAttribute(c,f),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),mc.subVectors(this.max,Fo),xr.subVectors(t.a,Fo),gr.subVectors(t.b,Fo),_r.subVectors(t.c,Fo),Za.subVectors(gr,xr),Ka.subVectors(_r,gr),Ts.subVectors(xr,_r);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Ts.z,Ts.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Ts.z,0,-Ts.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Ts.y,Ts.x,0];return!wh(i,xr,gr,_r,mc)||(i=[1,0,0,0,1,0,0,0,1],!wh(i,xr,gr,_r,mc))?!1:(xc.crossVectors(Za,Ka),i=[xc.x,xc.y,xc.z],wh(i,xr,gr,_r,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new j,new j,new j,new j,new j,new j,new j,new j],Ri=new j,pc=new rs,xr=new j,gr=new j,_r=new j,Za=new j,Ka=new j,Ts=new j,Fo=new j,mc=new j,xc=new j,As=new j;function wh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){As.fromArray(r,c);const h=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),d=t.dot(As),m=i.dot(As),g=s.dot(As);if(Math.max(-Math.max(d,m,g),Math.min(d,m,g))>h)return!1}return!0}const IM=new rs,Ho=new j,Ch=new j;class lu{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):IM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(Ch)),this.expandByPoint(Ho.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const da=new j,Dh=new j,gc=new j,Qa=new j,Uh=new j,_c=new j,Nh=new j;class ip{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=da.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Dh.copy(t).add(i).multiplyScalar(.5),gc.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(Dh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(gc),h=Qa.dot(this.direction),d=-Qa.dot(gc),m=Qa.lengthSq(),g=Math.abs(1-f*f);let x,_,v,b;if(g>0)if(x=f*d-h,_=f*h-d,b=c*g,x>=0)if(_>=-b)if(_<=b){const E=1/g;x*=E,_*=E,v=x*(x+f*_+2*h)+_*(f*x+_+2*d)+m}else _=c,x=Math.max(0,-(f*_+h)),v=-x*x+_*(_+2*d)+m;else _=-c,x=Math.max(0,-(f*_+h)),v=-x*x+_*(_+2*d)+m;else _<=-b?(x=Math.max(0,-(-f*c+h)),_=x>0?-c:Math.min(Math.max(-c,-d),c),v=-x*x+_*(_+2*d)+m):_<=b?(x=0,_=Math.min(Math.max(-c,-d),c),v=_*(_+2*d)+m):(x=Math.max(0,-(f*c+h)),_=x>0?c:Math.min(Math.max(-c,-d),c),v=-x*x+_*(_+2*d)+m);else _=f>0?-c:c,x=Math.max(0,-(f*_+h)),v=-x*x+_*(_+2*d)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Dh).addScaledVector(gc,_),v}intersectSphere(t,i){da.subVectors(t.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,d=s+f;return d<0?null:h<0?this.at(d,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,d;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(s=(t.min.x-_.x)*m,l=(t.max.x-_.x)*m):(s=(t.max.x-_.x)*m,l=(t.min.x-_.x)*m),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(t.min.z-_.z)*x,d=(t.max.z-_.z)*x):(h=(t.max.z-_.z)*x,d=(t.min.z-_.z)*x),s>d||h>l)||((h>s||s!==s)&&(s=h),(d<l||l!==l)&&(l=d),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,i,s,l,c){Uh.subVectors(i,t),_c.subVectors(s,t),Nh.crossVectors(Uh,_c);let f=this.direction.dot(Nh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Qa.subVectors(this.origin,t);const d=h*this.direction.dot(_c.crossVectors(Qa,_c));if(d<0)return null;const m=h*this.direction.dot(Uh.cross(Qa));if(m<0||d+m>f)return null;const g=-h*Qa.dot(Nh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,s,l,c,f,h,d,m,g,x,_,v,b,E,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,d,m,g,x,_,v,b,E,M)}set(t,i,s,l,c,f,h,d,m,g,x,_,v,b,E,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=d,y[2]=m,y[6]=g,y[10]=x,y[14]=_,y[3]=v,y[7]=b,y[11]=E,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),c=1/vr.setFromMatrixColumn(t,1).length(),f=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),d=Math.cos(l),m=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=f*g,v=f*x,b=h*g,E=h*x;i[0]=d*g,i[4]=-d*x,i[8]=m,i[1]=v+b*m,i[5]=_-E*m,i[9]=-h*d,i[2]=E-_*m,i[6]=b+v*m,i[10]=f*d}else if(t.order==="YXZ"){const _=d*g,v=d*x,b=m*g,E=m*x;i[0]=_+E*h,i[4]=b*h-v,i[8]=f*m,i[1]=f*x,i[5]=f*g,i[9]=-h,i[2]=v*h-b,i[6]=E+_*h,i[10]=f*d}else if(t.order==="ZXY"){const _=d*g,v=d*x,b=m*g,E=m*x;i[0]=_-E*h,i[4]=-f*x,i[8]=b+v*h,i[1]=v+b*h,i[5]=f*g,i[9]=E-_*h,i[2]=-f*m,i[6]=h,i[10]=f*d}else if(t.order==="ZYX"){const _=f*g,v=f*x,b=h*g,E=h*x;i[0]=d*g,i[4]=b*m-v,i[8]=_*m+E,i[1]=d*x,i[5]=E*m+_,i[9]=v*m-b,i[2]=-m,i[6]=h*d,i[10]=f*d}else if(t.order==="YZX"){const _=f*d,v=f*m,b=h*d,E=h*m;i[0]=d*g,i[4]=E-_*x,i[8]=b*x+v,i[1]=x,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=v*x+b,i[10]=_-E*x}else if(t.order==="XZY"){const _=f*d,v=f*m,b=h*d,E=h*m;i[0]=d*g,i[4]=-x,i[8]=m*g,i[1]=_*x+E,i[5]=f*g,i[9]=v*x-b,i[2]=b*x-v,i[6]=h*g,i[10]=E*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(BM,t,FM)}lookAt(t,i,s){const l=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ja.crossVectors(s,oi),Ja.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ja.crossVectors(s,oi)),Ja.normalize(),vc.crossVectors(oi,Ja),l[0]=Ja.x,l[4]=vc.x,l[8]=oi.x,l[1]=Ja.y,l[5]=vc.y,l[9]=oi.y,l[2]=Ja.z,l[6]=vc.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],d=s[8],m=s[12],g=s[1],x=s[5],_=s[9],v=s[13],b=s[2],E=s[6],M=s[10],y=s[14],P=s[3],N=s[7],C=s[11],z=s[15],U=l[0],L=l[4],X=l[8],D=l[12],w=l[1],G=l[5],J=l[9],st=l[13],ft=l[2],ct=l[6],B=l[10],Y=l[14],Z=l[3],vt=l[7],yt=l[11],I=l[15];return c[0]=f*U+h*w+d*ft+m*Z,c[4]=f*L+h*G+d*ct+m*vt,c[8]=f*X+h*J+d*B+m*yt,c[12]=f*D+h*st+d*Y+m*I,c[1]=g*U+x*w+_*ft+v*Z,c[5]=g*L+x*G+_*ct+v*vt,c[9]=g*X+x*J+_*B+v*yt,c[13]=g*D+x*st+_*Y+v*I,c[2]=b*U+E*w+M*ft+y*Z,c[6]=b*L+E*G+M*ct+y*vt,c[10]=b*X+E*J+M*B+y*yt,c[14]=b*D+E*st+M*Y+y*I,c[3]=P*U+N*w+C*ft+z*Z,c[7]=P*L+N*G+C*ct+z*vt,c[11]=P*X+N*J+C*B+z*yt,c[15]=P*D+N*st+C*Y+z*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],d=t[9],m=t[13],g=t[2],x=t[6],_=t[10],v=t[14],b=t[3],E=t[7],M=t[11],y=t[15];return b*(+c*d*x-l*m*x-c*h*_+s*m*_+l*h*v-s*d*v)+E*(+i*d*v-i*m*_+c*f*_-l*f*v+l*m*g-c*d*g)+M*(+i*m*x-i*h*v-c*f*x+s*f*v+c*h*g-s*m*g)+y*(-l*h*g-i*d*x+i*h*_+l*f*x-s*f*_+s*d*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],d=t[6],m=t[7],g=t[8],x=t[9],_=t[10],v=t[11],b=t[12],E=t[13],M=t[14],y=t[15],P=x*M*m-E*_*m+E*d*v-h*M*v-x*d*y+h*_*y,N=b*_*m-g*M*m-b*d*v+f*M*v+g*d*y-f*_*y,C=g*E*m-b*x*m+b*h*v-f*E*v-g*h*y+f*x*y,z=b*x*d-g*E*d-b*h*_+f*E*_+g*h*M-f*x*M,U=i*P+s*N+l*C+c*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return t[0]=P*L,t[1]=(E*_*c-x*M*c-E*l*v+s*M*v+x*l*y-s*_*y)*L,t[2]=(h*M*c-E*d*c+E*l*m-s*M*m-h*l*y+s*d*y)*L,t[3]=(x*d*c-h*_*c-x*l*m+s*_*m+h*l*v-s*d*v)*L,t[4]=N*L,t[5]=(g*M*c-b*_*c+b*l*v-i*M*v-g*l*y+i*_*y)*L,t[6]=(b*d*c-f*M*c-b*l*m+i*M*m+f*l*y-i*d*y)*L,t[7]=(f*_*c-g*d*c+g*l*m-i*_*m-f*l*v+i*d*v)*L,t[8]=C*L,t[9]=(b*x*c-g*E*c-b*s*v+i*E*v+g*s*y-i*x*y)*L,t[10]=(f*E*c-b*h*c+b*s*m-i*E*m-f*s*y+i*h*y)*L,t[11]=(g*h*c-f*x*c-g*s*m+i*x*m+f*s*v-i*h*v)*L,t[12]=z*L,t[13]=(g*E*l-b*x*l+b*s*_-i*E*_-g*s*M+i*x*M)*L,t[14]=(b*h*l-f*E*l-b*s*d+i*E*d+f*s*M-i*h*M)*L,t[15]=(f*x*l-g*h*l+g*s*d-i*x*d-f*s*_+i*h*_)*L,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,d=t.z,m=c*f,g=c*h;return this.set(m*f+s,m*h-l*d,m*d+l*h,0,m*h+l*d,g*h+s,g*d-l*f,0,m*d-l*h,g*d+l*f,c*d*d+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,d=i._w,m=c+c,g=f+f,x=h+h,_=c*m,v=c*g,b=c*x,E=f*g,M=f*x,y=h*x,P=d*m,N=d*g,C=d*x,z=s.x,U=s.y,L=s.z;return l[0]=(1-(E+y))*z,l[1]=(v+C)*z,l[2]=(b-N)*z,l[3]=0,l[4]=(v-C)*U,l[5]=(1-(_+y))*U,l[6]=(M+P)*U,l[7]=0,l[8]=(b+N)*L,l[9]=(M-P)*L,l[10]=(1-(_+E))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=vr.set(l[0],l[1],l[2]).length();const f=vr.set(l[4],l[5],l[6]).length(),h=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],wi.copy(this);const m=1/c,g=1/f,x=1/h;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=x,wi.elements[9]*=x,wi.elements[10]*=x,i.setFromRotationMatrix(wi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Vi,d=!1){const m=this.elements,g=2*c/(i-t),x=2*c/(s-l),_=(i+t)/(i-t),v=(s+l)/(s-l);let b,E;if(d)b=c/(f-c),E=f*c/(f-c);else if(h===Vi)b=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===$c)b=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=x,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Vi,d=!1){const m=this.elements,g=2/(i-t),x=2/(s-l),_=-(i+t)/(i-t),v=-(s+l)/(s-l);let b,E;if(d)b=1/(f-c),E=f/(f-c);else if(h===Vi)b=-2/(f-c),E=-(f+c)/(f-c);else if(h===$c)b=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=x,m[9]=0,m[13]=v,m[2]=0,m[6]=0,m[10]=b,m[14]=E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vr=new j,wi=new je,BM=new j(0,0,0),FM=new j(1,1,1),Ja=new j,vc=new j,oi=new j,gg=new je,_g=new Xi;class Wi{constructor(t=0,i=0,s=0,l=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],g=l[9],x=l[2],_=l[6],v=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-ge(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,v),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return gg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return _g.setFromEuler(this),this.setFromQuaternion(_g,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class G_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let HM=0;const vg=new j,yr=new Xi,pa=new je,yc=new j,Go=new j,GM=new j,VM=new Xi,yg=new j(1,0,0),Sg=new j(0,1,0),Mg=new j(0,0,1),bg={type:"added"},kM={type:"removed"},Sr={type:"childadded",child:null},Lh={type:"childremoved",child:null};class wn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new j,i=new Wi,s=new Xi,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new he}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(yg,t)}rotateY(t){return this.rotateOnAxis(Sg,t)}rotateZ(t){return this.rotateOnAxis(Mg,t)}translateOnAxis(t,i){return vg.copy(t).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yg,t)}translateY(t){return this.translateOnAxis(Sg,t)}translateZ(t){return this.translateOnAxis(Mg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?yc.copy(t):yc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Go,yc,this.up):pa.lookAt(yc,Go,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(pa),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bg),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(kM),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bg),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,GM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,VM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let m=0,g=d.length;m<g;m++){const x=d[m];c(t.shapes,x)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,m=this.material.length;d<m;d++)h.push(c(t.materials,this.material[d]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];l.animations.push(c(t.animations,d))}}if(i){const h=f(t.geometries),d=f(t.materials),m=f(t.textures),g=f(t.images),x=f(t.shapes),_=f(t.skeletons),v=f(t.animations),b=f(t.nodes);h.length>0&&(s.geometries=h),d.length>0&&(s.materials=d),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),v.length>0&&(s.animations=v),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const d=[];for(const m in h){const g=h[m];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new j(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new j,ma=new j,Oh=new j,xa=new j,Mr=new j,br=new j,Eg=new j,Ph=new j,zh=new j,Ih=new j,Bh=new on,Fh=new on,Hh=new on;class Ui{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),ma.subVectors(s,i),Oh.subVectors(t,i);const f=Ci.dot(Ci),h=Ci.dot(ma),d=Ci.dot(Oh),m=ma.dot(ma),g=ma.dot(Oh),x=f*m-h*h;if(x===0)return c.set(0,0,0),null;const _=1/x,v=(m*d-h*g)*_,b=(f*g-h*d)*_;return c.set(1-v-b,b,v)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,f,h,d){return this.getBarycoord(t,i,s,l,xa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,xa.x),d.addScaledVector(f,xa.y),d.addScaledVector(h,xa.z),d)}static getInterpolatedAttribute(t,i,s,l,c,f){return Bh.setScalar(0),Fh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(t,i),Fh.fromBufferAttribute(t,s),Hh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Bh,c.x),f.addScaledVector(Fh,c.y),f.addScaledVector(Hh,c.z),f}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),ma.subVectors(t,i),Ci.cross(ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ci.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Mr.subVectors(l,s),br.subVectors(c,s),Ph.subVectors(t,s);const d=Mr.dot(Ph),m=br.dot(Ph);if(d<=0&&m<=0)return i.copy(s);zh.subVectors(t,l);const g=Mr.dot(zh),x=br.dot(zh);if(g>=0&&x<=g)return i.copy(l);const _=d*x-g*m;if(_<=0&&d>=0&&g<=0)return f=d/(d-g),i.copy(s).addScaledVector(Mr,f);Ih.subVectors(t,c);const v=Mr.dot(Ih),b=br.dot(Ih);if(b>=0&&v<=b)return i.copy(c);const E=v*m-d*b;if(E<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(s).addScaledVector(br,h);const M=g*b-v*x;if(M<=0&&x-g>=0&&v-b>=0)return Eg.subVectors(c,l),h=(x-g)/(x-g+(v-b)),i.copy(l).addScaledVector(Eg,h);const y=1/(M+E+_);return f=E*y,h=_*y,i.copy(s).addScaledVector(Mr,f).addScaledVector(br,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const V_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Gh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ze.workingColorSpace){return this.r=t,this.g=i,this.b=s,ze.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ze.workingColorSpace){if(t=np(t,1),i=ge(i,0,1),s=ge(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Gh(f,c,t+1/3),this.g=Gh(f,c,t),this.b=Gh(f,c,t-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=V_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return ze.workingToColorSpace(In.copy(this),t),Math.round(ge(In.r*255,0,255))*65536+Math.round(ge(In.g*255,0,255))*256+Math.round(ge(In.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ze.workingColorSpace){ze.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let d,m;const g=(h+f)/2;if(h===f)d=0,m=0;else{const x=f-h;switch(m=g<=.5?x/(f+h):x/(2-f-h),f){case s:d=(l-c)/x+(l<c?6:0);break;case l:d=(c-s)/x+2;break;case c:d=(s-l)/x+4;break}d/=6}return t.h=d,t.s=m,t.l=g,t}getRGB(t,i=ze.workingColorSpace){return ze.workingToColorSpace(In.copy(this),i),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=ci){ze.workingToColorSpace(In.copy(this),t);const i=In.r,s=In.g,l=In.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(Sc);const s=Zo($a.h,Sc.h,i),l=Zo($a.s,Sc.s,i),c=Zo($a.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new _e;_e.NAMES=V_;let XM=0;class Gr extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Nr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sd&&(s.blendSrc=this.blendSrc),this.blendDst!==rd&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const d=c[h];delete d.metadata,f.push(d)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ap extends Gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new j,Mc=new de;let WM=0;class Rn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=cg,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=wr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cg&&(t.usage=this.usage),t}}class k_ extends Rn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class X_ extends Rn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Qn extends Rn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let qM=0;const yi=new je,Vh=new wn,Er=new j,li=new rs,Vo=new rs,An=new j;class Li extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B_(t)?X_:k_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Qn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(li.min,Vo.min),li.expandByPoint(An),An.addVectors(li.max,Vo.max),li.expandByPoint(An)):(li.expandByPoint(Vo.min),li.expandByPoint(Vo.max))}li.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)An.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],d=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)An.fromBufferAttribute(h,m),d&&(Er.fromBufferAttribute(t,m),An.add(Er)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],d=[];for(let X=0;X<s.count;X++)h[X]=new j,d[X]=new j;const m=new j,g=new j,x=new j,_=new de,v=new de,b=new de,E=new j,M=new j;function y(X,D,w){m.fromBufferAttribute(s,X),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,w),_.fromBufferAttribute(c,X),v.fromBufferAttribute(c,D),b.fromBufferAttribute(c,w),g.sub(m),x.sub(m),v.sub(_),b.sub(_);const G=1/(v.x*b.y-b.x*v.y);isFinite(G)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(x,-v.y).multiplyScalar(G),M.copy(x).multiplyScalar(v.x).addScaledVector(g,-b.x).multiplyScalar(G),h[X].add(E),h[D].add(E),h[w].add(E),d[X].add(M),d[D].add(M),d[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,D=P.length;X<D;++X){const w=P[X],G=w.start,J=w.count;for(let st=G,ft=G+J;st<ft;st+=3)y(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const N=new j,C=new j,z=new j,U=new j;function L(X){z.fromBufferAttribute(l,X),U.copy(z);const D=h[X];N.copy(D),N.sub(z.multiplyScalar(z.dot(D))).normalize(),C.crossVectors(U,D);const G=C.dot(d[X])<0?-1:1;f.setXYZW(X,N.x,N.y,N.z,G)}for(let X=0,D=P.length;X<D;++X){const w=P[X],G=w.start,J=w.count;for(let st=G,ft=G+J;st<ft;st+=3)L(t.getX(st+0)),L(t.getX(st+1)),L(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Rn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,v=s.count;_<v;_++)s.setXYZ(_,0,0,0);const l=new j,c=new j,f=new j,h=new j,d=new j,m=new j,g=new j,x=new j;if(t)for(let _=0,v=t.count;_<v;_+=3){const b=t.getX(_+0),E=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,M),h.add(g),d.add(g),m.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,v=i.count;_<v;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)An.fromBufferAttribute(t,i),An.normalize(),t.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function t(h,d){const m=h.array,g=h.itemSize,x=h.normalized,_=new m.constructor(d.length*g);let v=0,b=0;for(let E=0,M=d.length;E<M;E++){h.isInterleavedBufferAttribute?v=d[E]*h.data.stride+h.offset:v=d[E]*g;for(let y=0;y<g;y++)_[b++]=m[v++]}return new Rn(_,g,x)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,s=this.index.array,l=this.attributes;for(const h in l){const d=l[h],m=t(d,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const d=[],m=c[h];for(let g=0,x=m.length;g<x;g++){const _=m[g],v=t(_,s);d.push(v)}i.morphAttributes[h]=d}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,d=f.length;h<d;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(t[m]=d[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const d in s){const m=s[d];t.data.attributes[d]=m.toJSON(t.data)}const l={};let c=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],g=[];for(let x=0,_=m.length;x<_;x++){const v=m[x];g.push(v.toJSON(t.data))}g.length>0&&(l[d]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],x=c[m];for(let _=0,v=x.length;_<v;_++)g.push(x[_].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new je,Rs=new ip,bc=new lu,Ag=new j,Ec=new j,Tc=new j,Ac=new j,kh=new j,Rc=new j,Rg=new j,wc=new j;class Ni extends wn{constructor(t=new Li,i=new ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let d=0,m=c.length;d<m;d++){const g=h[d],x=c[d];g!==0&&(kh.fromBufferAttribute(x,t),f?Rc.addScaledVector(kh,g):Rc.addScaledVector(kh.sub(i),g))}i.add(Rc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(bc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(bc,Ag)===null||Rs.origin.distanceToSquared(Ag)>(t.far-t.near)**2))&&(Tg.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(Tg),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,d=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,v=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=_.length;b<E;b++){const M=_[b],y=f[M.materialIndex],P=Math.max(M.start,v.start),N=Math.min(h.count,Math.min(M.start+M.count,v.start+v.count));for(let C=P,z=N;C<z;C+=3){const U=h.getX(C),L=h.getX(C+1),X=h.getX(C+2);l=Cc(this,y,t,s,m,g,x,U,L,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,v.start),E=Math.min(h.count,v.start+v.count);for(let M=b,y=E;M<y;M+=3){const P=h.getX(M),N=h.getX(M+1),C=h.getX(M+2);l=Cc(this,f,t,s,m,g,x,P,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(d!==void 0)if(Array.isArray(f))for(let b=0,E=_.length;b<E;b++){const M=_[b],y=f[M.materialIndex],P=Math.max(M.start,v.start),N=Math.min(d.count,Math.min(M.start+M.count,v.start+v.count));for(let C=P,z=N;C<z;C+=3){const U=C,L=C+1,X=C+2;l=Cc(this,y,t,s,m,g,x,U,L,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let M=b,y=E;M<y;M+=3){const P=M,N=M+1,C=M+2;l=Cc(this,f,t,s,m,g,x,P,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function YM(r,t,i,s,l,c,f,h){let d;if(t.side===Zn?d=s.intersectTriangle(f,c,l,!0,h):d=s.intersectTriangle(l,c,f,t.side===ss,h),d===null)return null;wc.copy(h),wc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(wc);return m<i.near||m>i.far?null:{distance:m,point:wc.clone(),object:r}}function Cc(r,t,i,s,l,c,f,h,d,m){r.getVertexPosition(h,Ec),r.getVertexPosition(d,Tc),r.getVertexPosition(m,Ac);const g=YM(r,t,i,s,Ec,Tc,Ac,Rg);if(g){const x=new j;Ui.getBarycoord(Rg,Ec,Tc,Ac,x),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,d,m,x,new de)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,h,d,m,x,new de)),f&&(g.normal=Ui.getInterpolatedAttribute(f,h,d,m,x,new j),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:m,normal:new j,materialIndex:0};Ui.getNormal(Ec,Tc,Ac,_.normal),g.face=_,g.barycoord=x}return g}class Vr extends Li{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const d=[],m=[],g=[],x=[];let _=0,v=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(d),this.setAttribute("position",new Qn(m,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(x,2));function b(E,M,y,P,N,C,z,U,L,X,D){const w=C/L,G=z/X,J=C/2,st=z/2,ft=U/2,ct=L+1,B=X+1;let Y=0,Z=0;const vt=new j;for(let yt=0;yt<B;yt++){const I=yt*G-st;for(let ot=0;ot<ct;ot++){const it=ot*w-J;vt[E]=it*P,vt[M]=I*N,vt[y]=ft,m.push(vt.x,vt.y,vt.z),vt[E]=0,vt[M]=0,vt[y]=U>0?1:-1,g.push(vt.x,vt.y,vt.z),x.push(ot/L),x.push(1-yt/X),Y+=1}}for(let yt=0;yt<X;yt++)for(let I=0;I<L;I++){const ot=_+I+ct*yt,it=_+I+ct*(yt+1),pt=_+(I+1)+ct*(yt+1),Et=_+(I+1)+ct*yt;d.push(ot,it,Et),d.push(it,pt,Et),Z+=6}h.addGroup(v,Z,D),v+=Z,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Br(r[i]);for(const l in s)t[l]=s[l]}return t}function jM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function W_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}const ZM={clone:Br,merge:Gn};var KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ba extends Gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=jM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class q_ extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new j,wg=new de,Cg=new de;class Si extends q_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,wg,Cg),i.subVectors(Cg,wg)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/d,i-=f.offsetY*s/m,l*=f.width/d,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class JM extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Tr,Ar,t,i);l.layers=this.layers,this.add(l);const c=new Si(Tr,Ar,t,i);c.layers=this.layers,this.add(c);const f=new Si(Tr,Ar,t,i);f.layers=this.layers,this.add(f);const h=new Si(Tr,Ar,t,i);h.layers=this.layers,this.add(h);const d=new Si(Tr,Ar,t,i);d.layers=this.layers,this.add(d);const m=new Si(Tr,Ar,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,d]=i;for(const m of i)this.remove(m);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===$c)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,d,m,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,d),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=E,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(x,_,v),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Y_ extends Bn{constructor(t=[],i=Pr,s,l,c,f,h,d,m,g){super(t,i,s,l,c,f,h,d,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $M extends Os{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Y_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vr(5,5,5),c=new ba({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Sa});c.uniforms.tEquirect.value=i;const f=new Ni(l,c),h=i.minFilter;return i.minFilter===ns&&(i.minFilter=ui),new JM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Dr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tb={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,d=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const E of t.hand.values()){const M=i.getJointPose(E,s),y=this._getHandJoint(m,E);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=g.position.distanceTo(x.position),v=.02,b=.005;m.inputState.pinching&&_>v+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=v-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tb)))}return h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Dr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class sp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new _e(t),this.near=i,this.far=s}clone(){return new sp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xd extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class eb extends Bn{constructor(t=null,i=1,s=1,l,c,f,h,d,m=Kn,g=Kn,x,_){super(null,f,h,d,m,g,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new j,nb=new j,ib=new he;class es{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wh.subVectors(s,i).cross(nb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ib.getNormalMatrix(t),l=this.coplanarPoint(Wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new lu,ab=new de(.5,.5),Dc=new j;class rp{constructor(t=new es,i=new es,s=new es,l=new es,c=new es,f=new es){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],d=c[2],m=c[3],g=c[4],x=c[5],_=c[6],v=c[7],b=c[8],E=c[9],M=c[10],y=c[11],P=c[12],N=c[13],C=c[14],z=c[15];if(l[0].setComponents(m-f,v-g,y-b,z-P).normalize(),l[1].setComponents(m+f,v+g,y+b,z+P).normalize(),l[2].setComponents(m+h,v+x,y+E,z+N).normalize(),l[3].setComponents(m-h,v-x,y-E,z-N).normalize(),s)l[4].setComponents(d,_,M,C).normalize(),l[5].setComponents(m-d,v-_,y-M,z-C).normalize();else if(l[4].setComponents(m-d,v-_,y-M,z-C).normalize(),i===Vi)l[5].setComponents(m+d,v+_,y+M,z+C).normalize();else if(i===$c)l[5].setComponents(d,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=ab.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class j_ extends Gr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nu=new j,iu=new j,Dg=new je,ko=new ip,Uc=new lu,qh=new j,Ug=new j;class sb extends wn{constructor(t=new Li,i=new j_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)nu.fromBufferAttribute(i,l-1),iu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=nu.distanceTo(iu);t.setAttribute("lineDistance",new Qn(s,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,t.ray.intersectsSphere(Uc)===!1)return;Dg.copy(l).invert(),ko.copy(t.ray).applyMatrix4(Dg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,m=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const v=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let E=v,M=b-1;E<M;E+=m){const y=g.getX(E),P=g.getX(E+1),N=Nc(this,t,ko,d,y,P,E);N&&i.push(N)}if(this.isLineLoop){const E=g.getX(b-1),M=g.getX(v),y=Nc(this,t,ko,d,E,M,b-1);y&&i.push(y)}}else{const v=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let E=v,M=b-1;E<M;E+=m){const y=Nc(this,t,ko,d,E,E+1,E);y&&i.push(y)}if(this.isLineLoop){const E=Nc(this,t,ko,d,b-1,v,b-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Nc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(nu.fromBufferAttribute(h,l),iu.fromBufferAttribute(h,c),i.distanceSqToSegment(nu,iu,qh,Ug)>s)return;qh.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(qh);if(!(m<t.near||m>t.far))return{distance:m,point:Ug.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Ng=new j,Lg=new j;class rb extends sb{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Ng.fromBufferAttribute(i,l),Lg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Ng.distanceTo(Lg);t.setAttribute("lineDistance",new Qn(s,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yh extends Bn{constructor(t,i,s,l,c,f,h,d,m,g,x,_){super(null,f,h,d,m,g,l,c,x,_),this.isCompressedTexture=!0,this.image={width:i,height:s},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Z_ extends Bn{constructor(t,i,s=Ls,l,c,f,h=Kn,d=Kn,m,g=Jo,x=1){if(g!==Jo&&g!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,f,h,d,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ou(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class K_ extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nl extends Li{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),d=Math.floor(l),m=h+1,g=d+1,x=t/h,_=i/d,v=[],b=[],E=[],M=[];for(let y=0;y<g;y++){const P=y*_-f;for(let N=0;N<m;N++){const C=N*x-c;b.push(C,-P,0),E.push(0,0,1),M.push(N/h),M.push(1-y/d)}}for(let y=0;y<d;y++)for(let P=0;P<h;P++){const N=P+m*y,C=P+m*(y+1),z=P+1+m*(y+1),U=P+1+m*y;v.push(N,C,U),v.push(C,z,U)}this.setIndex(v),this.setAttribute("position",new Qn(b,3)),this.setAttribute("normal",new Qn(E,3)),this.setAttribute("uv",new Qn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.widthSegments,t.heightSegments)}}class op extends Li{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const d=Math.min(f+h,Math.PI);let m=0;const g=[],x=new j,_=new j,v=[],b=[],E=[],M=[];for(let y=0;y<=s;y++){const P=[],N=y/s;let C=0;y===0&&f===0?C=.5/i:y===s&&d===Math.PI&&(C=-.5/i);for(let z=0;z<=i;z++){const U=z/i;x.x=-t*Math.cos(l+U*c)*Math.sin(f+N*h),x.y=t*Math.cos(f+N*h),x.z=t*Math.sin(l+U*c)*Math.sin(f+N*h),b.push(x.x,x.y,x.z),_.copy(x).normalize(),E.push(_.x,_.y,_.z),M.push(U+C,1-N),P.push(m++)}g.push(P)}for(let y=0;y<s;y++)for(let P=0;P<i;P++){const N=g[y][P+1],C=g[y][P],z=g[y+1][P],U=g[y+1][P+1];(y!==0||f>0)&&v.push(N,C,U),(y!==s-1||d<Math.PI)&&v.push(C,z,U)}this.setIndex(v),this.setAttribute("position",new Qn(b,3)),this.setAttribute("normal",new Qn(E,3)),this.setAttribute("uv",new Qn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lp extends Gr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=z_,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ob extends Gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lb extends Gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Q_ extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class cb extends Q_{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const jh=new je,Og=new j,Pg=new j;class ub{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Og.setFromMatrixPosition(t.matrixWorld),i.position.copy(Og),Pg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Pg),i.updateMatrixWorld(),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class J_ extends q_{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,d=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class fb extends ub{constructor(){super(new J_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hb extends Q_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new fb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class db extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const cp="\\[\\]\\.:\\/",pb=new RegExp("["+cp+"]","g"),up="[^"+cp+"]",mb="[^"+cp.replace("\\.","")+"]",xb=/((?:WC+[\/:])*)/.source.replace("WC",up),gb=/(WCOD+)?/.source.replace("WCOD",mb),_b=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",up),vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",up),yb=new RegExp("^"+xb+gb+_b+vb+"$"),Sb=["material","materials","bones","map"];class Mb{constructor(t,i,s){const l=s||Pe.parseTrackName(i);this._targetGroup=t,this._bindings=t.subscribe_(i,l)}getValue(t,i){this.bind();const s=this._targetGroup.nCachedObjects_,l=this._bindings[s];l!==void 0&&l.getValue(t,i)}setValue(t,i){const s=this._bindings;for(let l=this._targetGroup.nCachedObjects_,c=s.length;l!==c;++l)s[l].setValue(t,i)}bind(){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=t.length;i!==s;++i)t[i].bind()}unbind(){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=t.length;i!==s;++i)t[i].unbind()}}class Pe{constructor(t,i,s){this.path=i,this.parsedPath=s||Pe.parseTrackName(i),this.node=Pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,s){return t&&t.isAnimationObjectGroup?new Pe.Composite(t,i,s):new Pe(t,i,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(t){const i=yb.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const s={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},l=s.nodeName&&s.nodeName.lastIndexOf(".");if(l!==void 0&&l!==-1){const c=s.nodeName.substring(l+1);Sb.indexOf(c)!==-1&&(s.nodeName=s.nodeName.substring(0,l),s.objectName=c)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const s=t.skeleton.getBoneByName(i);if(s!==void 0)return s}if(t.children){const s=function(c){for(let f=0;f<c.length;f++){const h=c[f];if(h.name===i||h.uuid===i)return h;const d=s(h.children);if(d)return d}return null},l=s(t.children);if(l)return l}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const s=this.resolvedProperty;for(let l=0,c=s.length;l!==c;++l)t[i++]=s[l]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const s=this.resolvedProperty;for(let l=0,c=s.length;l!==c;++l)s[l]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const s=this.resolvedProperty;for(let l=0,c=s.length;l!==c;++l)s[l]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const s=this.resolvedProperty;for(let l=0,c=s.length;l!==c;++l)s[l]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,s=i.objectName,l=i.propertyName;let c=i.propertyIndex;if(t||(t=Pe.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let m=i.objectIndex;switch(s){case"materials":if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===m){m=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(m!==void 0){if(t[m]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[m]}}const f=t[l];if(f===void 0){const m=i.nodeName;Be("PropertyBinding: Trying to update property for track: "+m+"."+l+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(l==="morphTargetInfluences"){if(!t.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=f,this.propertyIndex=c}else f.fromArray!==void 0&&f.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(d=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=l;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pe.Composite=Mb;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ge(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bb extends rb{constructor(t=10,i=10,s=4473924,l=8947848){s=new _e(s),l=new _e(l);const c=i/2,f=t/i,h=t/2,d=[],m=[];for(let _=0,v=0,b=-h;_<=i;_++,b+=f){d.push(-h,0,b,h,0,b),d.push(b,0,-h,b,0,h);const E=_===c?s:l;E.toArray(m,v),v+=3,E.toArray(m,v),v+=3,E.toArray(m,v),v+=3,E.toArray(m,v),v+=3}const g=new Li;g.setAttribute("position",new Qn(d,3)),g.setAttribute("color",new Qn(m,3));const x=new j_({vertexColors:!0,toneMapped:!1});super(g,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Eb extends Ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ig(r,t,i,s){const l=Tb(s);switch(i){case L_:return r*t;case P_:return r*t/l.components*l.byteLength;case Jd:return r*t/l.components*l.byteLength;case $d:return r*t*2/l.components*l.byteLength;case tp:return r*t*2/l.components*l.byteLength;case O_:return r*t*3/l.components*l.byteLength;case Mi:return r*t*4/l.components*l.byteLength;case ep:return r*t*4/l.components*l.byteLength;case Bc:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:case vd:return Math.max(r,16)*Math.max(t,8)/4;case xd:case _d:return Math.max(r,8)*Math.max(t,8)/2;case yd:case Sd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Id:case Bd:case Fd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Tb(r){switch(r){case ki:case C_:return{byteLength:1,components:1};case Ko:case D_:case Fr:return{byteLength:2,components:1};case Kd:case Qd:return{byteLength:2,components:4};case Ls:case Zd:case ya:return{byteLength:4,components:1};case U_:case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:su}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=su);function $_(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Ab(r){const t=new WeakMap;function i(h,d){const m=h.array,g=h.usage,x=m.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,m,g),h.onUploadCallback();let v;if(m instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)v=r.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)v=r.SHORT;else if(m instanceof Uint32Array)v=r.UNSIGNED_INT;else if(m instanceof Int32Array)v=r.INT;else if(m instanceof Int8Array)v=r.BYTE;else if(m instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:v,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,d,m){const g=d.array,x=d.updateRanges;if(r.bindBuffer(m,h),x.length===0)r.bufferSubData(m,0,g);else{x.sort((v,b)=>v.start-b.start);let _=0;for(let v=1;v<x.length;v++){const b=x[_],E=x[v];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++_,x[_]=E)}x.length=_+1;for(let v=0,b=x.length;v<b;v++){const E=x[v];r.bufferSubData(m,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(r.deleteBuffer(d.buffer),t.delete(h))}function f(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,d));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,d),m.version=h.version}}return{get:l,remove:c,update:f}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
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
#endif`,Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lb=`#ifdef USE_AOMAP
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
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
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
#endif`,Gb=`#ifdef USE_BUMPMAP
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kb=`#define PI 3.141592653589793
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
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
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
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
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
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,TE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,O1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,X1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j1=`#define PHONG
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
}`,Z1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,J1=`#define TOON
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
}`,$1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tT=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,aT=`uniform float rotation;
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
}`,sT=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Rb,alphahash_pars_fragment:wb,alphamap_fragment:Cb,alphamap_pars_fragment:Db,alphatest_fragment:Ub,alphatest_pars_fragment:Nb,aomap_fragment:Lb,aomap_pars_fragment:Ob,batching_pars_vertex:Pb,batching_vertex:zb,begin_vertex:Ib,beginnormal_vertex:Bb,bsdfs:Fb,iridescence_fragment:Hb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:Wb,color_fragment:qb,color_pars_fragment:Yb,color_pars_vertex:jb,color_vertex:Zb,common:Kb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:$b,displacementmap_vertex:tE,emissivemap_fragment:eE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:sE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:vE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:dE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:xE,lights_lambert_pars_fragment:gE,lights_pars_begin:_E,lights_toon_fragment:yE,lights_toon_pars_fragment:SE,lights_phong_fragment:ME,lights_phong_pars_fragment:bE,lights_physical_fragment:EE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:RE,lights_fragment_end:wE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:NE,map_fragment:LE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:zE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:BE,morphinstance_vertex:FE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:jE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:t1,packing:e1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:a1,dithering_pars_fragment:s1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:d1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:x1,specularmap_pars_fragment:g1,tonemapping_fragment:_1,tonemapping_pars_fragment:v1,transmission_fragment:y1,transmission_pars_fragment:S1,uv_pars_fragment:M1,uv_pars_vertex:b1,uv_vertex:E1,worldpos_vertex:T1,background_vert:A1,background_frag:R1,backgroundCube_vert:w1,backgroundCube_frag:C1,cube_vert:D1,cube_frag:U1,depth_vert:N1,depth_frag:L1,distanceRGBA_vert:O1,distanceRGBA_frag:P1,equirect_vert:z1,equirect_frag:I1,linedashed_vert:B1,linedashed_frag:F1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:k1,meshmatcap_vert:X1,meshmatcap_frag:W1,meshnormal_vert:q1,meshnormal_frag:Y1,meshphong_vert:j1,meshphong_frag:Z1,meshphysical_vert:K1,meshphysical_frag:Q1,meshtoon_vert:J1,meshtoon_frag:$1,points_vert:tT,points_frag:eT,shadow_vert:nT,shadow_frag:iT,sprite_vert:aT,sprite_frag:sT},Ot={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Fi={basic:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Gn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Gn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Gn([Ot.points,Ot.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Gn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Gn([Ot.common,Ot.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Gn([Ot.sprite,Ot.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Gn([Ot.common,Ot.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Gn([Ot.lights,Ot.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Fi.physical={uniforms:Gn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Lc={r:0,b:0,g:0},Cs=new Wi,rT=new je;function oT(r,t,i,s,l,c,f){const h=new _e(0);let d=c===!0?0:1,m,g,x=null,_=0,v=null;function b(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?i:t).get(C)),C}function E(N){let C=!1;const z=b(N);z===null?y(h,d):z&&z.isColor&&(y(z,1),C=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,C){const z=b(C);z&&(z.isCubeTexture||z.mapping===ru)?(g===void 0&&(g=new Ni(new Vr(1,1,1),new ba({name:"BackgroundCubeMaterial",uniforms:Br(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,L,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cs.copy(C.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Cs)),g.material.toneMapped=ze.getTransfer(z.colorSpace)!==qe,(x!==z||_!==z.version||v!==r.toneMapping)&&(g.material.needsUpdate=!0,x=z,_=z.version,v=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(m===void 0&&(m=new Ni(new nl(2,2),new ba({name:"BackgroundMaterial",uniforms:Br(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=z,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=ze.getTransfer(z.colorSpace)!==qe,z.matrixAutoUpdate===!0&&z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||_!==z.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,x=z,_=z.version,v=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,C){N.getRGB(Lc,W_(r)),s.buffers.color.setClear(Lc.r,Lc.g,Lc.b,C,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,C=1){h.set(N),d=C,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,y(h,d)},render:E,addToRenderList:M,dispose:P}}function lT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function h(w,G,J,st,ft){let ct=!1;const B=x(st,J,G);c!==B&&(c=B,m(c.object)),ct=v(w,st,J,ft),ct&&b(w,st,J,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,C(w,G,J,st),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function d(){return r.createVertexArray()}function m(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function x(w,G,J){const st=J.wireframe===!0;let ft=s[w.id];ft===void 0&&(ft={},s[w.id]=ft);let ct=ft[G.id];ct===void 0&&(ct={},ft[G.id]=ct);let B=ct[st];return B===void 0&&(B=_(d()),ct[st]=B),B}function _(w){const G=[],J=[],st=[];for(let ft=0;ft<i;ft++)G[ft]=0,J[ft]=0,st[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:st,object:w,attributes:{},index:null}}function v(w,G,J,st){const ft=c.attributes,ct=G.attributes;let B=0;const Y=J.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const yt=ft[Z];let I=ct[Z];if(I===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),yt===void 0||yt.attribute!==I||I&&yt.data!==I.data)return!0;B++}return c.attributesNum!==B||c.index!==st}function b(w,G,J,st){const ft={},ct=G.attributes;let B=0;const Y=J.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let yt=ct[Z];yt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const I={};I.attribute=yt,yt&&yt.data&&(I.data=yt.data),ft[Z]=I,B++}c.attributes=ft,c.attributesNum=B,c.index=st}function E(){const w=c.newAttributes;for(let G=0,J=w.length;G<J;G++)w[G]=0}function M(w){y(w,0)}function y(w,G){const J=c.newAttributes,st=c.enabledAttributes,ft=c.attributeDivisors;J[w]=1,st[w]===0&&(r.enableVertexAttribArray(w),st[w]=1),ft[w]!==G&&(r.vertexAttribDivisor(w,G),ft[w]=G)}function P(){const w=c.newAttributes,G=c.enabledAttributes;for(let J=0,st=G.length;J<st;J++)G[J]!==w[J]&&(r.disableVertexAttribArray(J),G[J]=0)}function N(w,G,J,st,ft,ct,B){B===!0?r.vertexAttribIPointer(w,G,J,ft,ct):r.vertexAttribPointer(w,G,J,st,ft,ct)}function C(w,G,J,st){E();const ft=st.attributes,ct=J.getAttributes(),B=G.defaultAttributeValues;for(const Y in ct){const Z=ct[Y];if(Z.location>=0){let vt=ft[Y];if(vt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const yt=vt.normalized,I=vt.itemSize,ot=t.get(vt);if(ot===void 0)continue;const it=ot.buffer,pt=ot.type,Et=ot.bytesPerElement,Q=pt===r.INT||pt===r.UNSIGNED_INT||vt.gpuType===Zd;if(vt.isInterleavedBufferAttribute){const rt=vt.data,At=rt.stride,Dt=vt.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<Z.locationSize;It++)y(Z.location+It,rt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<Z.locationSize;It++)M(Z.location+It);r.bindBuffer(r.ARRAY_BUFFER,it);for(let It=0;It<Z.locationSize;It++)N(Z.location+It,I/Z.locationSize,pt,yt,At*Et,(Dt+I/Z.locationSize*It)*Et,Q)}else{if(vt.isInstancedBufferAttribute){for(let rt=0;rt<Z.locationSize;rt++)y(Z.location+rt,vt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let rt=0;rt<Z.locationSize;rt++)M(Z.location+rt);r.bindBuffer(r.ARRAY_BUFFER,it);for(let rt=0;rt<Z.locationSize;rt++)N(Z.location+rt,I/Z.locationSize,pt,yt,I*Et,I/Z.locationSize*rt*Et,Q)}}else if(B!==void 0){const yt=B[Y];if(yt!==void 0)switch(yt.length){case 2:r.vertexAttrib2fv(Z.location,yt);break;case 3:r.vertexAttrib3fv(Z.location,yt);break;case 4:r.vertexAttrib4fv(Z.location,yt);break;default:r.vertexAttrib1fv(Z.location,yt)}}}}P()}function z(){X();for(const w in s){const G=s[w];for(const J in G){const st=G[J];for(const ft in st)g(st[ft].object),delete st[ft];delete G[J]}delete s[w]}}function U(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const J in G){const st=G[J];for(const ft in st)g(st[ft].object),delete st[ft];delete G[J]}delete s[w.id]}function L(w){for(const G in s){const J=s[G];if(J[w.id]===void 0)continue;const st=J[w.id];for(const ft in st)g(st[ft].object),delete st[ft];delete J[w.id]}}function X(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:M,disableUnusedAttributes:P}}function cT(r,t,i){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function f(m,g,x){x!==0&&(r.drawArraysInstanced(s,m,g,x),i.update(g,s,x))}function h(m,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,x);let v=0;for(let b=0;b<x;b++)v+=g[b];i.update(v,s,1)}function d(m,g,x,_){if(x===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<m.length;b++)f(m[b],g[b],_[b]);else{v.multiDrawArraysInstancedWEBGL(s,m,0,g,0,_,0,x);let b=0;for(let E=0;E<x;E++)b+=g[E]*_[E];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function uT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(L){return!(L!==Mi&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const X=L===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==ki&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ya&&!X)}function d(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=d(m);g!==m&&(ae("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:z,maxSamples:U}}function fT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new es,h=new he,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const v=x.length!==0||_||s!==0||l;return l=_,s=x.length,v},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,v){const b=x.clippingPlanes,E=x.clipIntersection,M=x.clipShadows,y=r.get(x);if(!l||b===null||b.length===0||c&&!M)c?g(null):m();else{const P=c?0:s,N=P*4;let C=y.clippingState||null;d.value=C,C=g(b,_,N,v);for(let z=0;z!==N;++z)C[z]=i[z];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function m(){d.value!==i&&(d.value=i,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,_,v,b){const E=x!==null?x.length:0;let M=null;if(E!==0){if(M=d.value,b!==!0||M===null){const y=v+E*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let N=0,C=v;N!==E;++N,C+=4)f.copy(x[N]).applyMatrix4(P,h),f.normal.toArray(M,C),M[C+3]=f.constant}d.value=M,d.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function hT(r){let t=new WeakMap;function i(f,h){return h===pd?f.mapping=Pr:h===md&&(f.mapping=zr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===pd||h===md)if(t.has(f)){const d=t.get(f).texture;return i(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const m=new $M(d.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const is=4,Bg=[.125,.215,.35,.446,.526,.582],Ns=20,dT=256,Xo=new J_,Fg=new _e;let Zh=null,Kh=0,Qh=0,Jh=!1;const pT=new j;class Hg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=pT}=c;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,s,l,d,h),i>0&&this._blur(d,0,0,i),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Pr||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Fr,format:Mi,colorSpace:Ir,depthBuffer:!1},l=Gg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gg(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mT(c)),this._blurMaterial=gT(c,t,i),this._ggxMaterial=xT(c,t,i)}return l}_compileMaterial(t){const i=new Ni(new Li,t);this._renderer.compile(i,Xo)}_sceneToCubeUV(t,i,s,l,c){const d=new Si(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,v=x.toneMapping;x.getClearColor(Fg),x.toneMapping=as,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new Vr,new ap({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,M=E.material;let y=!1;const P=t.background;P?P.isColor&&(M.color.copy(P),t.background=null,y=!0):(M.color.copy(Fg),y=!0);for(let N=0;N<6;N++){const C=N%3;C===0?(d.up.set(0,m[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[N],c.y,c.z)):C===1?(d.up.set(0,0,m[N]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[N],c.z)):(d.up.set(0,m[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[N]));const z=this._cubeSize;Rr(l,C*z,N>2?z:0,z,z),x.setRenderTarget(l),y&&x.render(E,d),x.render(t,d)}x.toneMapping=v,x.autoClear=_,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Pr||t.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;Rr(i,0,0,3*d,2*d),s.setRenderTarget(i),s.render(f,Xo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const d=f.uniforms,m=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-g*g),_=.05+m*.95,v=x*_,{_lodMax:b}=this,E=this._sizeLods[s],M=3*E*(s>b-is?s-b+is:0),y=4*(this._cubeSize-E);d.envMap.value=t.texture,d.roughness.value=v,d.mipInt.value=b-i,Rr(c,M,y,3*E,2*E),l.setRenderTarget(c),l.render(h,Xo),d.envMap.value=c.texture,d.roughness.value=0,d.mipInt.value=b-s,Rr(t,M,y,3*E,2*E),l.setRenderTarget(t),l.render(h,Xo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const d=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=m;const _=m.uniforms,v=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*v):2*Math.PI/(2*Ns-1),E=c/b,M=isFinite(c)?1+Math.floor(g*E):Ns;M>Ns&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ns}`);const y=[];let P=0;for(let L=0;L<Ns;++L){const X=L/E,D=Math.exp(-X*X/2);y.push(D),L===0?P+=D:L<M&&(P+=2*D)}for(let L=0;L<y.length;L++)y[L]=y[L]/P;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:N}=this;_.dTheta.value=b,_.mipInt.value=N-s;const C=this._sizeLods[l],z=3*C*(l>N-is?l-N+is:0),U=4*(this._cubeSize-C);Rr(i,z,U,3*C,2*C),d.setRenderTarget(i),d.render(x,Xo)}}function mT(r){const t=[],i=[],s=[];let l=r;const c=r-is+1+Bg.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let d=1/h;f>r-is?d=Bg[f-r+is-1]:f===0&&(d=0),i.push(d);const m=1/(h-2),g=-m,x=1+m,_=[g,g,x,g,x,x,g,g,x,x,g,x],v=6,b=6,E=3,M=2,y=1,P=new Float32Array(E*b*v),N=new Float32Array(M*b*v),C=new Float32Array(y*b*v);for(let U=0;U<v;U++){const L=U%3*2/3-1,X=U>2?0:-1,D=[L,X,0,L+2/3,X,0,L+2/3,X+1,0,L,X,0,L+2/3,X+1,0,L,X+1,0];P.set(D,E*b*U),N.set(_,M*b*U);const w=[U,U,U,U,U,U];C.set(w,y*b*U)}const z=new Li;z.setAttribute("position",new Rn(P,E)),z.setAttribute("uv",new Rn(N,M)),z.setAttribute("faceIndex",new Rn(C,y)),s.push(new Ni(z,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Gg(r,t,i){const s=new Os(r,t,i);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function xT(r,t,i){return new ba({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function gT(r,t,i){const s=new Float32Array(Ns),l=new j(0,1,0);return new ba({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Vg(){return new ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function kg(){return new ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function _T(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const d=h.mapping,m=d===pd||d===md,g=d===Pr||d===zr;if(m||g){let x=t.get(h);const _=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Hg(r)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const v=h.image;return m&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new Hg(r)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let d=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&d++;return d===m}function c(h){const d=h.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function vT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function yT(r,t,i,s){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const v=c.get(_);v&&(t.remove(v),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function d(x){const _=x.attributes;for(const v in _)t.update(_[v],r.ARRAY_BUFFER)}function m(x){const _=[],v=x.index,b=x.attributes.position;let E=0;if(v!==null){const P=v.array;E=v.version;for(let N=0,C=P.length;N<C;N+=3){const z=P[N+0],U=P[N+1],L=P[N+2];_.push(z,U,U,L,L,z)}}else if(b!==void 0){const P=b.array;E=b.version;for(let N=0,C=P.length/3-1;N<C;N+=3){const z=N+0,U=N+1,L=N+2;_.push(z,U,U,L,L,z)}}else return;const M=new(B_(_)?X_:k_)(_,1);M.version=E;const y=c.get(x);y&&t.remove(y),c.set(x,M)}function g(x){const _=c.get(x);if(_){const v=x.index;v!==null&&_.version<v.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:d,getWireframeAttribute:g}}function ST(r,t,i){let s;function l(_){s=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function d(_,v){r.drawElements(s,v,c,_*f),i.update(v,s,1)}function m(_,v,b){b!==0&&(r.drawElementsInstanced(s,v,c,_*f,b),i.update(v,s,b))}function g(_,v,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,_,0,b);let M=0;for(let y=0;y<b;y++)M+=v[y];i.update(M,s,1)}function x(_,v,b,E){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)m(_[y]/f,v[y],E[y]);else{M.multiDrawElementsInstancedWEBGL(s,v,0,c,_,0,E,0,b);let y=0;for(let P=0;P<b;P++)y+=v[P]*E[P];i.update(y,s,1)}}this.setMode=l,this.setIndex=h,this.render=d,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function MT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Be("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function bT(r,t,i){const s=new WeakMap,l=new on;function c(f,h,d){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(h);if(_===void 0||_.count!==x){let w=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var v=w;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),E===!0&&(C=2),M===!0&&(C=3);let z=h.attributes.position.count*C,U=1;z>t.maxTextureSize&&(U=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const L=new Float32Array(z*U*4*x),X=new H_(L,z,U,x);X.type=ya,X.needsUpdate=!0;const D=C*4;for(let G=0;G<x;G++){const J=y[G],st=P[G],ft=N[G],ct=z*U*4*G;for(let B=0;B<J.count;B++){const Y=B*D;b===!0&&(l.fromBufferAttribute(J,B),L[ct+Y+0]=l.x,L[ct+Y+1]=l.y,L[ct+Y+2]=l.z,L[ct+Y+3]=0),E===!0&&(l.fromBufferAttribute(st,B),L[ct+Y+4]=l.x,L[ct+Y+5]=l.y,L[ct+Y+6]=l.z,L[ct+Y+7]=0),M===!0&&(l.fromBufferAttribute(ft,B),L[ct+Y+8]=l.x,L[ct+Y+9]=l.y,L[ct+Y+10]=l.z,L[ct+Y+11]=ft.itemSize===4?l.w:1)}}_={count:x,texture:X,size:new de(z,U)},s.set(h,_),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<m.length;M++)b+=m[M];const E=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",m)}d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function ET(r,t,i,s){let l=new WeakMap;function c(d){const m=s.render.frame,g=d.geometry,x=t.get(d,g);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),l.get(d)!==m&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),l.set(d,m))),d.isSkinnedMesh){const _=d.skeleton;l.get(_)!==m&&(_.update(),l.set(_,m))}return x}function f(){l=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const tv=new Bn,Xg=new Z_(1,1),ev=new H_,nv=new zM,iv=new Y_,Wg=[],qg=[],Yg=new Float32Array(16),jg=new Float32Array(9),Zg=new Float32Array(4);function kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Wg[l];if(c===void 0&&(c=new Float32Array(l),Wg[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function uu(r,t){let i=qg[t];i===void 0&&(i=new Int32Array(t),qg[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function TT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function RT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function CT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;Zg.set(s),r.uniformMatrix2fv(this.addr,!1,Zg),Sn(i,s)}}function DT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;jg.set(s),r.uniformMatrix3fv(this.addr,!1,jg),Sn(i,s)}}function UT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(yn(i,s))return;Yg.set(s),r.uniformMatrix4fv(this.addr,!1,Yg),Sn(i,s)}}function NT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function zT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function IT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function HT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Xg.compareFunction=I_,c=Xg):c=tv,i.setTexture2D(t||c,l)}function GT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||nv,l)}function VT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||iv,l)}function kT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ev,l)}function XT(r){switch(r){case 5126:return TT;case 35664:return AT;case 35665:return RT;case 35666:return wT;case 35674:return CT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return LT;case 35668:case 35672:return OT;case 35669:case 35673:return PT;case 5125:return zT;case 36294:return IT;case 36295:return BT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}function WT(r,t){r.uniform1fv(this.addr,t)}function qT(r,t){const i=kr(t,this.size,2);r.uniform2fv(this.addr,i)}function YT(r,t){const i=kr(t,this.size,3);r.uniform3fv(this.addr,i)}function jT(r,t){const i=kr(t,this.size,4);r.uniform4fv(this.addr,i)}function ZT(r,t){const i=kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function KT(r,t){const i=kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function QT(r,t){const i=kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function JT(r,t){r.uniform1iv(this.addr,t)}function $T(r,t){r.uniform2iv(this.addr,t)}function t3(r,t){r.uniform3iv(this.addr,t)}function e3(r,t){r.uniform4iv(this.addr,t)}function n3(r,t){r.uniform1uiv(this.addr,t)}function i3(r,t){r.uniform2uiv(this.addr,t)}function a3(r,t){r.uniform3uiv(this.addr,t)}function s3(r,t){r.uniform4uiv(this.addr,t)}function r3(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||tv,c[f])}function o3(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||nv,c[f])}function l3(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||iv,c[f])}function c3(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ev,c[f])}function u3(r){switch(r){case 5126:return WT;case 35664:return qT;case 35665:return YT;case 35666:return jT;case 35674:return ZT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return $T;case 35668:case 35672:return t3;case 35669:case 35673:return e3;case 5125:return n3;case 36294:return i3;case 36295:return a3;case 36296:return s3;case 35678:case 36198:case 36298:case 36306:case 35682:return r3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return l3;case 36289:case 36303:case 36311:case 36292:return c3}}class f3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=XT(i.type)}}class h3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=u3(i.type)}}class d3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function Kg(r,t){r.seq.push(t),r.map[t.id]=t}function p3(r,t,i){const s=r.name,l=s.length;for($h.lastIndex=0;;){const c=$h.exec(s),f=$h.lastIndex;let h=c[1];const d=c[2]==="]",m=c[3];if(d&&(h=h|0),m===void 0||m==="["&&f+2===l){Kg(i,m===void 0?new f3(h,r,t):new h3(h,r,t));break}else{let x=i.map[h];x===void 0&&(x=new d3(h),Kg(i,x)),i=x}}}class Vc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);p3(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],d=s[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Qg(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const m3=37297;let x3=0;function g3(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Jg=new he;function _3(r){ze._getMatrix(Jg,ze.workingColorSpace,r);const t=`mat3( ${Jg.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(r)){case Jc:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $g(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+g3(r.getShaderSource(t),h)}else return c}function v3(r,t){const i=_3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function y3(r,t){let i;switch(t){case ZS:i="Linear";break;case KS:i="Reinhard";break;case QS:i="Cineon";break;case JS:i="ACESFilmic";break;case tM:i="AgX";break;case eM:i="Neutral";break;case $S:i="Custom";break;default:ae("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new j;function S3(){ze.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function b3(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function E3(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function qo(r){return r!==""}function t_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(r){return r.replace(T3,R3)}const A3=new Map;function R3(r,t){let i=xe[t];if(i===void 0){const s=A3.get(t);if(s!==void 0)i=xe[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Wd(i)}const w3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(r){return r.replace(w3,C3)}function C3(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function i_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D3(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===E_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===T_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_a&&(t="SHADOWMAP_TYPE_VSM"),t}function U3(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pr:case zr:t="ENVMAP_TYPE_CUBE";break;case ru:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N3(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function L3(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case A_:t="ENVMAP_BLENDING_MULTIPLY";break;case YS:t="ENVMAP_BLENDING_MIX";break;case jS:t="ENVMAP_BLENDING_ADD";break}return t}function O3(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function P3(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const d=D3(i),m=U3(i),g=N3(i),x=L3(i),_=O3(i),v=M3(i),b=b3(c),E=l.createProgram();let M,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),y.length>0&&(y+=`
`)):(M=[i_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+d:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),y=[i_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+d:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==as?"#define TONE_MAPPING":"",i.toneMapping!==as?xe.tonemapping_pars_fragment:"",i.toneMapping!==as?y3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,v3("linearToOutputTexel",i.outputColorSpace),S3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=Wd(f),f=t_(f,i),f=e_(f,i),h=Wd(h),h=t_(h,i),h=e_(h,i),f=n_(f),h=n_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=P+M+f,C=P+y+h,z=Qg(l,l.VERTEX_SHADER,N),U=Qg(l,l.FRAGMENT_SHADER,C);l.attachShader(E,z),l.attachShader(E,U),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function L(G){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(E)||"",st=l.getShaderInfoLog(z)||"",ft=l.getShaderInfoLog(U)||"",ct=J.trim(),B=st.trim(),Y=ft.trim();let Z=!0,vt=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,E,z,U);else{const yt=$g(l,z,"vertex"),I=$g(l,U,"fragment");Be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ct+`
`+yt+`
`+I)}else ct!==""?ae("WebGLProgram: Program Info Log:",ct):(B===""||Y==="")&&(vt=!1);vt&&(G.diagnostics={runnable:Z,programLog:ct,vertexShader:{log:B,prefix:M},fragmentShader:{log:Y,prefix:y}})}l.deleteShader(z),l.deleteShader(U),X=new Vc(l,E),D=E3(l,E)}let X;this.getUniforms=function(){return X===void 0&&L(this),X};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(E,m3)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=x3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=U,this}let z3=0;class I3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new B3(t),i.set(t,s)),s}}class B3{constructor(t){this.id=z3++,this.code=t,this.usedTimes=0}}function F3(r,t,i,s,l,c,f){const h=new G_,d=new I3,m=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let v=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,w,G,J,st){const ft=J.fog,ct=st.geometry,B=D.isMeshStandardMaterial?J.environment:null,Y=(D.isMeshStandardMaterial?i:t).get(D.envMap||B),Z=Y&&Y.mapping===ru?Y.image.height:null,vt=b[D.type];D.precision!==null&&(v=l.getMaxPrecision(D.precision),v!==D.precision&&ae("WebGLProgram.getParameters:",D.precision,"not supported, using",v,"instead."));const yt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,I=yt!==void 0?yt.length:0;let ot=0;ct.morphAttributes.position!==void 0&&(ot=1),ct.morphAttributes.normal!==void 0&&(ot=2),ct.morphAttributes.color!==void 0&&(ot=3);let it,pt,Et,Q;if(vt){const Ue=Fi[vt];it=Ue.vertexShader,pt=Ue.fragmentShader}else it=D.vertexShader,pt=D.fragmentShader,d.update(D),Et=d.getVertexShaderID(D),Q=d.getFragmentShaderID(D);const rt=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Dt=st.isInstancedMesh===!0,It=st.isBatchedMesh===!0,te=!!D.map,ve=!!D.matcap,re=!!Y,ye=!!D.aoMap,H=!!D.lightMap,oe=!!D.bumpMap,ue=!!D.normalMap,De=!!D.displacementMap,Vt=!!D.emissiveMap,Ze=!!D.metalnessMap,jt=!!D.roughnessMap,le=D.anisotropy>0,O=D.clearcoat>0,T=D.dispersion>0,tt=D.iridescence>0,xt=D.sheen>0,St=D.transmission>0,ht=le&&!!D.anisotropyMap,qt=O&&!!D.clearcoatMap,Lt=O&&!!D.clearcoatNormalMap,Qt=O&&!!D.clearcoatRoughnessMap,Wt=tt&&!!D.iridescenceMap,Mt=tt&&!!D.iridescenceThicknessMap,Tt=xt&&!!D.sheenColorMap,Yt=xt&&!!D.sheenRoughnessMap,kt=!!D.specularMap,Pt=!!D.specularColorMap,ie=!!D.specularIntensityMap,V=St&&!!D.transmissionMap,Ut=St&&!!D.thicknessMap,wt=!!D.gradientMap,Ct=!!D.alphaMap,bt=D.alphaTest>0,_t=!!D.alphaHash,Ft=!!D.extensions;let se=as;D.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(se=r.toneMapping);const Ve={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:it,fragmentShader:pt,defines:D.defines,customVertexShaderID:Et,customFragmentShaderID:Q,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:v,batching:It,batchingColor:It&&st._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&st.instanceColor!==null,instancingMorph:Dt&&st.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ir,alphaToCoverage:!!D.alphaToCoverage,map:te,matcap:ve,envMap:re,envMapMode:re&&Y.mapping,envMapCubeUVHeight:Z,aoMap:ye,lightMap:H,bumpMap:oe,normalMap:ue,displacementMap:_&&De,emissiveMap:Vt,normalMapObjectSpace:ue&&D.normalMapType===rM,normalMapTangentSpace:ue&&D.normalMapType===z_,metalnessMap:Ze,roughnessMap:jt,anisotropy:le,anisotropyMap:ht,clearcoat:O,clearcoatMap:qt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Qt,dispersion:T,iridescence:tt,iridescenceMap:Wt,iridescenceThicknessMap:Mt,sheen:xt,sheenColorMap:Tt,sheenRoughnessMap:Yt,specularMap:kt,specularColorMap:Pt,specularIntensityMap:ie,transmission:St,transmissionMap:V,thicknessMap:Ut,gradientMap:wt,opaque:D.transparent===!1&&D.blending===Nr&&D.alphaToCoverage===!1,alphaMap:Ct,alphaTest:bt,alphaHash:_t,combine:D.combine,mapUv:te&&E(D.map.channel),aoMapUv:ye&&E(D.aoMap.channel),lightMapUv:H&&E(D.lightMap.channel),bumpMapUv:oe&&E(D.bumpMap.channel),normalMapUv:ue&&E(D.normalMap.channel),displacementMapUv:De&&E(D.displacementMap.channel),emissiveMapUv:Vt&&E(D.emissiveMap.channel),metalnessMapUv:Ze&&E(D.metalnessMap.channel),roughnessMapUv:jt&&E(D.roughnessMap.channel),anisotropyMapUv:ht&&E(D.anisotropyMap.channel),clearcoatMapUv:qt&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&E(D.sheenRoughnessMap.channel),specularMapUv:kt&&E(D.specularMap.channel),specularColorMapUv:Pt&&E(D.specularColorMap.channel),specularIntensityMapUv:ie&&E(D.specularIntensityMap.channel),transmissionMapUv:V&&E(D.transmissionMap.channel),thicknessMapUv:Ut&&E(D.thicknessMap.channel),alphaMapUv:Ct&&E(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ue||le),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ct.attributes.uv&&(te||Ct),fog:!!ft,useFog:D.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:At,skinning:st.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:te&&D.map.isVideoTexture===!0&&ze.getTransfer(D.map.colorSpace)===qe,decodeVideoTextureEmissive:Vt&&D.emissiveMap.isVideoTexture===!0&&ze.getTransfer(D.emissiveMap.colorSpace)===qe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Hi,flipSided:D.side===Zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function y(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(P(w,D),N(w,D),w.push(r.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function P(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function N(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=b[D.type];let G;if(w){const J=Fi[w];G=ZM.clone(J.uniforms)}else G=D.uniforms;return G}function z(D,w){let G;for(let J=0,st=g.length;J<st;J++){const ft=g[J];if(ft.cacheKey===w){G=ft,++G.usedTimes;break}}return G===void 0&&(G=new P3(r,w,D,c),g.push(G)),G}function U(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function L(D){d.remove(D)}function X(){d.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:C,acquireProgram:z,releaseProgram:U,releaseShaderCache:L,programs:g,dispose:X}}function H3(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,d){r.get(f)[h]=d}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function G3(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function a_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function s_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(x,_,v,b,E,M){let y=r[t];return y===void 0?(y={id:x.id,object:x,geometry:_,material:v,groupOrder:b,renderOrder:x.renderOrder,z:E,group:M},r[t]=y):(y.id=x.id,y.object=x,y.geometry=_,y.material=v,y.groupOrder=b,y.renderOrder=x.renderOrder,y.z=E,y.group=M),t++,y}function h(x,_,v,b,E,M){const y=f(x,_,v,b,E,M);v.transmission>0?s.push(y):v.transparent===!0?l.push(y):i.push(y)}function d(x,_,v,b,E,M){const y=f(x,_,v,b,E,M);v.transmission>0?s.unshift(y):v.transparent===!0?l.unshift(y):i.unshift(y)}function m(x,_){i.length>1&&i.sort(x||G3),s.length>1&&s.sort(_||a_),l.length>1&&l.sort(_||a_)}function g(){for(let x=t,_=r.length;x<_;x++){const v=r[x];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:d,finish:g,sort:m}}function V3(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new s_,r.set(s,[f])):l>=c.length?(f=new s_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function k3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new _e};break;case"SpotLight":i={position:new j,direction:new j,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function X3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let W3=0;function q3(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Y3(r){const t=new k3,i=X3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new j);const l=new j,c=new je,f=new je;function h(m){let g=0,x=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let v=0,b=0,E=0,M=0,y=0,P=0,N=0,C=0,z=0,U=0,L=0;m.sort(q3);for(let D=0,w=m.length;D<w;D++){const G=m[D],J=G.color,st=G.intensity,ft=G.distance,ct=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=J.r*st,x+=J.g*st,_+=J.b*st;else if(G.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(G.sh.coefficients[B],st);L++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,Z=i.get(G);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.directionalShadow[v]=Z,s.directionalShadowMap[v]=ct,s.directionalShadowMatrix[v]=G.shadow.matrix,P++}s.directional[v]=B,v++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(J).multiplyScalar(st),B.distance=ft,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,s.spot[E]=B;const Y=G.shadow;if(G.map&&(s.spotLightMap[z]=G.map,z++,Y.updateMatrices(G),G.castShadow&&U++),s.spotLightMatrix[E]=Y.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.spotShadow[E]=Z,s.spotShadowMap[E]=ct,C++}E++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(J).multiplyScalar(st),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=B,M++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Y=G.shadow,Z=i.get(G);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=G.shadow.matrix,N++}s.point[b]=B,b++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(st),B.groundColor.copy(G.groundColor).multiplyScalar(st),s.hemi[y]=B,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==v||X.pointLength!==b||X.spotLength!==E||X.rectAreaLength!==M||X.hemiLength!==y||X.numDirectionalShadows!==P||X.numPointShadows!==N||X.numSpotShadows!==C||X.numSpotMaps!==z||X.numLightProbes!==L)&&(s.directional.length=v,s.spot.length=E,s.rectArea.length=M,s.point.length=b,s.hemi.length=y,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=C+z-U,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=L,X.directionalLength=v,X.pointLength=b,X.spotLength=E,X.rectAreaLength=M,X.hemiLength=y,X.numDirectionalShadows=P,X.numPointShadows=N,X.numSpotShadows=C,X.numSpotMaps=z,X.numLightProbes=L,s.version=W3++)}function d(m,g){let x=0,_=0,v=0,b=0,E=0;const M=g.matrixWorldInverse;for(let y=0,P=m.length;y<P;y++){const N=m[y];if(N.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),x++}else if(N.isSpotLight){const C=s.spot[v];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),v++}else if(N.isRectAreaLight){const C=s.rectArea[b];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),f.identity(),c.copy(N.matrixWorld),c.premultiply(M),f.extractRotation(c),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),_++}else if(N.isHemisphereLight){const C=s.hemi[E];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(M),E++}}}return{setup:h,setupView:d,state:s}}function r_(r){const t=new Y3(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function d(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:f}}function j3(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new r_(r),t.set(l,[h])):c>=f.length?(h=new r_(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q3(r,t,i){let s=new rp;const l=new de,c=new de,f=new on,h=new ob({depthPacking:sM}),d=new lb,m={},g=i.maxTextureSize,x={[ss]:Zn,[Zn]:ss,[Hi]:Hi},_=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Z3,fragmentShader:K3}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const b=new Li;b.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ni(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E_;let y=this.type;this.render=function(U,L,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;const D=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Sa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const st=y!==_a&&this.type===_a,ft=y===_a&&this.type!==_a;for(let ct=0,B=U.length;ct<B;ct++){const Y=U[ct],Z=Y.shadow;if(Z===void 0){ae("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const vt=Z.getFrameExtents();if(l.multiply(vt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/vt.x),l.x=c.x*vt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/vt.y),l.y=c.y*vt.y,Z.mapSize.y=c.y)),Z.map===null||st===!0||ft===!0){const I=this.type!==_a?{minFilter:Kn,magFilter:Kn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Os(l.x,l.y,I),Z.map.texture.name=Y.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const yt=Z.getViewportCount();for(let I=0;I<yt;I++){const ot=Z.getViewport(I);f.set(c.x*ot.x,c.y*ot.y,c.x*ot.z,c.y*ot.w),J.viewport(f),Z.updateMatrices(Y,I),s=Z.getFrustum(),C(L,X,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===_a&&P(Z,X),Z.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(D,w,G)};function P(U,L){const X=t.update(E);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Os(l.x,l.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(L,null,X,_,E,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(L,null,X,v,E,null)}function N(U,L,X,D){let w=null;const G=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)w=G;else if(w=X.isPointLight===!0?d:h,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const J=w.uuid,st=L.uuid;let ft=m[J];ft===void 0&&(ft={},m[J]=ft);let ct=ft[st];ct===void 0&&(ct=w.clone(),ft[st]=ct,L.addEventListener("dispose",z)),w=ct}if(w.visible=L.visible,w.wireframe=L.wireframe,D===_a?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:x[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=r.properties.get(w);J.light=X}return w}function C(U,L,X,D,w){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===_a)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);const st=t.update(U),ft=U.material;if(Array.isArray(ft)){const ct=st.groups;for(let B=0,Y=ct.length;B<Y;B++){const Z=ct[B],vt=ft[Z.materialIndex];if(vt&&vt.visible){const yt=N(U,vt,D,w);U.onBeforeShadow(r,U,L,X,st,yt,Z),r.renderBufferDirect(X,null,st,yt,U,Z),U.onAfterShadow(r,U,L,X,st,yt,Z)}}}else if(ft.visible){const ct=N(U,ft,D,w);U.onBeforeShadow(r,U,L,X,st,ct,null),r.renderBufferDirect(X,null,st,ct,U,null),U.onAfterShadow(r,U,L,X,st,ct,null)}}const J=U.children;for(let st=0,ft=J.length;st<ft;st++)C(J[st],L,X,D,w)}function z(U){U.target.removeEventListener("dispose",z);for(const X in m){const D=m[X],w=U.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const J3={[od]:ld,[cd]:hd,[ud]:dd,[Or]:fd,[ld]:od,[hd]:cd,[dd]:ud,[fd]:Or};function $3(r,t){function i(){let V=!1;const Ut=new on;let wt=null;const Ct=new on(0,0,0,0);return{setMask:function(bt){wt!==bt&&!V&&(r.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){V=bt},setClear:function(bt,_t,Ft,se,Ve){Ve===!0&&(bt*=se,_t*=se,Ft*=se),Ut.set(bt,_t,Ft,se),Ct.equals(Ut)===!1&&(r.clearColor(bt,_t,Ft,se),Ct.copy(Ut))},reset:function(){V=!1,wt=null,Ct.set(-1,0,0,0)}}}function s(){let V=!1,Ut=!1,wt=null,Ct=null,bt=null;return{setReversed:function(_t){if(Ut!==_t){const Ft=t.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const se=bt;bt=null,this.setClear(se)}},getReversed:function(){return Ut},setTest:function(_t){_t?rt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!V&&(r.depthMask(_t),wt=_t)},setFunc:function(_t){if(Ut&&(_t=J3[_t]),Ct!==_t){switch(_t){case od:r.depthFunc(r.NEVER);break;case ld:r.depthFunc(r.ALWAYS);break;case cd:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case ud:r.depthFunc(r.EQUAL);break;case fd:r.depthFunc(r.GEQUAL);break;case hd:r.depthFunc(r.GREATER);break;case dd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ct=_t}},setLocked:function(_t){V=_t},setClear:function(_t){bt!==_t&&(Ut&&(_t=1-_t),r.clearDepth(_t),bt=_t)},reset:function(){V=!1,wt=null,Ct=null,bt=null,Ut=!1}}}function l(){let V=!1,Ut=null,wt=null,Ct=null,bt=null,_t=null,Ft=null,se=null,Ve=null;return{setTest:function(Ue){V||(Ue?rt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Ue){Ut!==Ue&&!V&&(r.stencilMask(Ue),Ut=Ue)},setFunc:function(Ue,On,Jn){(wt!==Ue||Ct!==On||bt!==Jn)&&(r.stencilFunc(Ue,On,Jn),wt=Ue,Ct=On,bt=Jn)},setOp:function(Ue,On,Jn){(_t!==Ue||Ft!==On||se!==Jn)&&(r.stencilOp(Ue,On,Jn),_t=Ue,Ft=On,se=Jn)},setLocked:function(Ue){V=Ue},setClear:function(Ue){Ve!==Ue&&(r.clearStencil(Ue),Ve=Ue)},reset:function(){V=!1,Ut=null,wt=null,Ct=null,bt=null,_t=null,Ft=null,se=null,Ve=null}}}const c=new i,f=new s,h=new l,d=new WeakMap,m=new WeakMap;let g={},x={},_=new WeakMap,v=[],b=null,E=!1,M=null,y=null,P=null,N=null,C=null,z=null,U=null,L=new _e(0,0,0),X=0,D=!1,w=null,G=null,J=null,st=null,ft=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),B=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),B=Y>=2);let vt=null,yt={};const I=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),it=new on().fromArray(I),pt=new on().fromArray(ot);function Et(V,Ut,wt,Ct){const bt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(V,_t),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<wt;Ft++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Ut+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return _t}const Q={};Q[r.TEXTURE_2D]=Et(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),rt(r.DEPTH_TEST),f.setFunc(Or),oe(!1),ue(ag),rt(r.CULL_FACE),ye(Sa);function rt(V){g[V]!==!0&&(r.enable(V),g[V]=!0)}function At(V){g[V]!==!1&&(r.disable(V),g[V]=!1)}function Dt(V,Ut){return x[V]!==Ut?(r.bindFramebuffer(V,Ut),x[V]=Ut,V===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ut),V===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(V,Ut){let wt=v,Ct=!1;if(V){wt=_.get(Ut),wt===void 0&&(wt=[],_.set(Ut,wt));const bt=V.textures;if(wt.length!==bt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Ft=bt.length;_t<Ft;_t++)wt[_t]=r.COLOR_ATTACHMENT0+_t;wt.length=bt.length,Ct=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Ct=!0);Ct&&r.drawBuffers(wt)}function te(V){return b!==V?(r.useProgram(V),b=V,!0):!1}const ve={[Us]:r.FUNC_ADD,[DS]:r.FUNC_SUBTRACT,[US]:r.FUNC_REVERSE_SUBTRACT};ve[NS]=r.MIN,ve[LS]=r.MAX;const re={[OS]:r.ZERO,[PS]:r.ONE,[zS]:r.SRC_COLOR,[sd]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[HS]:r.DST_COLOR,[BS]:r.DST_ALPHA,[IS]:r.ONE_MINUS_SRC_COLOR,[rd]:r.ONE_MINUS_SRC_ALPHA,[GS]:r.ONE_MINUS_DST_COLOR,[FS]:r.ONE_MINUS_DST_ALPHA,[kS]:r.CONSTANT_COLOR,[XS]:r.ONE_MINUS_CONSTANT_COLOR,[WS]:r.CONSTANT_ALPHA,[qS]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(V,Ut,wt,Ct,bt,_t,Ft,se,Ve,Ue){if(V===Sa){E===!0&&(At(r.BLEND),E=!1);return}if(E===!1&&(rt(r.BLEND),E=!0),V!==CS){if(V!==M||Ue!==D){if((y!==Us||C!==Us)&&(r.blendEquation(r.FUNC_ADD),y=Us,C=Us),Ue)switch(V){case Nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sg:r.blendFunc(r.ONE,r.ONE);break;case rg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case og:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Be("WebGLState: Invalid blending: ",V);break}else switch(V){case Nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rg:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case og:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",V);break}P=null,N=null,z=null,U=null,L.set(0,0,0),X=0,M=V,D=Ue}return}bt=bt||Ut,_t=_t||wt,Ft=Ft||Ct,(Ut!==y||bt!==C)&&(r.blendEquationSeparate(ve[Ut],ve[bt]),y=Ut,C=bt),(wt!==P||Ct!==N||_t!==z||Ft!==U)&&(r.blendFuncSeparate(re[wt],re[Ct],re[_t],re[Ft]),P=wt,N=Ct,z=_t,U=Ft),(se.equals(L)===!1||Ve!==X)&&(r.blendColor(se.r,se.g,se.b,Ve),L.copy(se),X=Ve),M=V,D=!1}function H(V,Ut){V.side===Hi?At(r.CULL_FACE):rt(r.CULL_FACE);let wt=V.side===Zn;Ut&&(wt=!wt),oe(wt),V.blending===Nr&&V.transparent===!1?ye(Sa):ye(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ct=V.stencilWrite;h.setTest(Ct),Ct&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Vt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(V){w!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),w=V)}function ue(V){V!==RS?(rt(r.CULL_FACE),V!==G&&(V===ag?r.cullFace(r.BACK):V===wS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),G=V}function De(V){V!==J&&(B&&r.lineWidth(V),J=V)}function Vt(V,Ut,wt){V?(rt(r.POLYGON_OFFSET_FILL),(st!==Ut||ft!==wt)&&(r.polygonOffset(Ut,wt),st=Ut,ft=wt)):At(r.POLYGON_OFFSET_FILL)}function Ze(V){V?rt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function jt(V){V===void 0&&(V=r.TEXTURE0+ct-1),vt!==V&&(r.activeTexture(V),vt=V)}function le(V,Ut,wt){wt===void 0&&(vt===null?wt=r.TEXTURE0+ct-1:wt=vt);let Ct=yt[wt];Ct===void 0&&(Ct={type:void 0,texture:void 0},yt[wt]=Ct),(Ct.type!==V||Ct.texture!==Ut)&&(vt!==wt&&(r.activeTexture(wt),vt=wt),r.bindTexture(V,Ut||Q[V]),Ct.type=V,Ct.texture=Ut)}function O(){const V=yt[vt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function xt(){try{r.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function St(){try{r.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function qt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Lt(){try{r.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Qt(){try{r.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Wt(){try{r.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Mt(){try{r.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Tt(V){it.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),it.copy(V))}function Yt(V){pt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),pt.copy(V))}function kt(V,Ut){let wt=m.get(Ut);wt===void 0&&(wt=new WeakMap,m.set(Ut,wt));let Ct=wt.get(V);Ct===void 0&&(Ct=r.getUniformBlockIndex(Ut,V.name),wt.set(V,Ct))}function Pt(V,Ut){const Ct=m.get(Ut).get(V);d.get(Ut)!==Ct&&(r.uniformBlockBinding(Ut,Ct,V.__bindingPointIndex),d.set(Ut,Ct))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},vt=null,yt={},x={},_=new WeakMap,v=[],b=null,E=!1,M=null,y=null,P=null,N=null,C=null,z=null,U=null,L=new _e(0,0,0),X=0,D=!1,w=null,G=null,J=null,st=null,ft=null,it.set(0,0,r.canvas.width,r.canvas.height),pt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:rt,disable:At,bindFramebuffer:Dt,drawBuffers:It,useProgram:te,setBlending:ye,setMaterial:H,setFlipSided:oe,setCullFace:ue,setLineWidth:De,setPolygonOffset:Vt,setScissorTest:Ze,activeTexture:jt,bindTexture:le,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Wt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Pt,texStorage2D:Lt,texStorage3D:Qt,texSubImage2D:xt,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:qt,scissor:Tt,viewport:Yt,reset:ie}}function tA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new de,g=new WeakMap;let x;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,T){return v?new OffscreenCanvas(O,T):tu("canvas")}function E(O,T,tt){let xt=1;const St=le(O);if((St.width>tt||St.height>tt)&&(xt=tt/Math.max(St.width,St.height)),xt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ht=Math.floor(xt*St.width),qt=Math.floor(xt*St.height);x===void 0&&(x=b(ht,qt));const Lt=T?b(ht,qt):x;return Lt.width=ht,Lt.height=qt,Lt.getContext("2d").drawImage(O,0,0,ht,qt),ae("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ht+"x"+qt+")."),Lt}else return"data"in O&&ae("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function M(O){return O.generateMipmaps}function y(O){r.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(O,T,tt,xt,St=!1){if(O!==null){if(r[O]!==void 0)return r[O];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ht=T;if(T===r.RED&&(tt===r.FLOAT&&(ht=r.R32F),tt===r.HALF_FLOAT&&(ht=r.R16F),tt===r.UNSIGNED_BYTE&&(ht=r.R8)),T===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.R8UI),tt===r.UNSIGNED_SHORT&&(ht=r.R16UI),tt===r.UNSIGNED_INT&&(ht=r.R32UI),tt===r.BYTE&&(ht=r.R8I),tt===r.SHORT&&(ht=r.R16I),tt===r.INT&&(ht=r.R32I)),T===r.RG&&(tt===r.FLOAT&&(ht=r.RG32F),tt===r.HALF_FLOAT&&(ht=r.RG16F),tt===r.UNSIGNED_BYTE&&(ht=r.RG8)),T===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.RG8UI),tt===r.UNSIGNED_SHORT&&(ht=r.RG16UI),tt===r.UNSIGNED_INT&&(ht=r.RG32UI),tt===r.BYTE&&(ht=r.RG8I),tt===r.SHORT&&(ht=r.RG16I),tt===r.INT&&(ht=r.RG32I)),T===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),tt===r.UNSIGNED_INT&&(ht=r.RGB32UI),tt===r.BYTE&&(ht=r.RGB8I),tt===r.SHORT&&(ht=r.RGB16I),tt===r.INT&&(ht=r.RGB32I)),T===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),tt===r.UNSIGNED_INT&&(ht=r.RGBA32UI),tt===r.BYTE&&(ht=r.RGBA8I),tt===r.SHORT&&(ht=r.RGBA16I),tt===r.INT&&(ht=r.RGBA32I)),T===r.RGB&&(tt===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),tt===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),T===r.RGBA){const qt=St?Jc:ze.getTransfer(xt);tt===r.FLOAT&&(ht=r.RGBA32F),tt===r.HALF_FLOAT&&(ht=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(ht=qt===qe?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function C(O,T){let tt;return O?T===null||T===Ls||T===Qo?tt=r.DEPTH24_STENCIL8:T===ya?tt=r.DEPTH32F_STENCIL8:T===Ko&&(tt=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ls||T===Qo?tt=r.DEPTH_COMPONENT24:T===ya?tt=r.DEPTH_COMPONENT32F:T===Ko&&(tt=r.DEPTH_COMPONENT16),tt}function z(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Kn&&O.minFilter!==ui?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function U(O){const T=O.target;T.removeEventListener("dispose",U),X(T),T.isVideoTexture&&g.delete(T)}function L(O){const T=O.target;T.removeEventListener("dispose",L),w(T)}function X(O){const T=s.get(O);if(T.__webglInit===void 0)return;const tt=O.source,xt=_.get(tt);if(xt){const St=xt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(O),Object.keys(xt).length===0&&_.delete(tt)}s.remove(O)}function D(O){const T=s.get(O);r.deleteTexture(T.__webglTexture);const tt=O.source,xt=_.get(tt);delete xt[T.__cacheKey],f.memory.textures--}function w(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(T.__webglFramebuffer[xt]))for(let St=0;St<T.__webglFramebuffer[xt].length;St++)r.deleteFramebuffer(T.__webglFramebuffer[xt][St]);else r.deleteFramebuffer(T.__webglFramebuffer[xt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[xt])}else{if(Array.isArray(T.__webglFramebuffer))for(let xt=0;xt<T.__webglFramebuffer.length;xt++)r.deleteFramebuffer(T.__webglFramebuffer[xt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xt=0;xt<T.__webglColorRenderbuffer.length;xt++)T.__webglColorRenderbuffer[xt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[xt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=O.textures;for(let xt=0,St=tt.length;xt<St;xt++){const ht=s.get(tt[xt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove(tt[xt])}s.remove(O)}let G=0;function J(){G=0}function st(){const O=G;return O>=l.maxTextures&&ae("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function ft(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ct(O,T){const tt=s.get(O);if(O.isVideoTexture&&Ze(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const xt=O.image;if(xt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,O,T);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+T)}function B(O,T){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Q(tt,O,T);return}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+T)}function Y(O,T){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Q(tt,O,T);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+T)}function Z(O,T){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){rt(tt,O,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+T)}const vt={[Kc]:r.REPEAT,[Gi]:r.CLAMP_TO_EDGE,[Qc]:r.MIRRORED_REPEAT},yt={[Kn]:r.NEAREST,[w_]:r.NEAREST_MIPMAP_NEAREST,[Wo]:r.NEAREST_MIPMAP_LINEAR,[ui]:r.LINEAR,[Ic]:r.LINEAR_MIPMAP_NEAREST,[ns]:r.LINEAR_MIPMAP_LINEAR},I={[oM]:r.NEVER,[dM]:r.ALWAYS,[lM]:r.LESS,[I_]:r.LEQUAL,[cM]:r.EQUAL,[hM]:r.GEQUAL,[uM]:r.GREATER,[fM]:r.NOTEQUAL};function ot(O,T){if(T.type===ya&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ui||T.magFilter===Ic||T.magFilter===Wo||T.magFilter===ns||T.minFilter===ui||T.minFilter===Ic||T.minFilter===Wo||T.minFilter===ns)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,vt[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,vt[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,vt[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,yt[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Kn||T.minFilter!==Wo&&T.minFilter!==ns||T.type===ya&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function it(O,T){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",U));const xt=T.source;let St=_.get(xt);St===void 0&&(St={},_.set(xt,St));const ht=ft(T);if(ht!==O.__cacheKey){St[ht]===void 0&&(St[ht]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),St[ht].usedTimes++;const qt=St[O.__cacheKey];qt!==void 0&&(St[O.__cacheKey].usedTimes--,qt.usedTimes===0&&D(T)),O.__cacheKey=ht,O.__webglTexture=St[ht].texture}return tt}function pt(O,T,tt){return Math.floor(Math.floor(O/tt)/T)}function Et(O,T,tt,xt){const ht=O.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,tt,xt,T.data);else{ht.sort((Mt,Tt)=>Mt.start-Tt.start);let qt=0;for(let Mt=1;Mt<ht.length;Mt++){const Tt=ht[qt],Yt=ht[Mt],kt=Tt.start+Tt.count,Pt=pt(Yt.start,T.width,4),ie=pt(Tt.start,T.width,4);Yt.start<=kt+1&&Pt===ie&&pt(Yt.start+Yt.count-1,T.width,4)===Pt?Tt.count=Math.max(Tt.count,Yt.start+Yt.count-Tt.start):(++qt,ht[qt]=Yt)}ht.length=qt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),Wt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++){const Yt=ht[Mt],kt=Math.floor(Yt.start/4),Pt=Math.ceil(Yt.count/4),ie=kt%T.width,V=Math.floor(kt/T.width),Ut=Pt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,ie,V,Ut,wt,tt,xt,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Wt)}}function Q(O,T,tt){let xt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=r.TEXTURE_3D);const St=it(O,T),ht=T.source;i.bindTexture(xt,O.__webglTexture,r.TEXTURE0+tt);const qt=s.get(ht);if(ht.version!==qt.__version||St===!0){i.activeTexture(r.TEXTURE0+tt);const Lt=ze.getPrimaries(ze.workingColorSpace),Qt=T.colorSpace===va?null:ze.getPrimaries(T.colorSpace),Wt=T.colorSpace===va||Lt===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Mt=E(T.image,!1,l.maxTextureSize);Mt=jt(T,Mt);const Tt=c.convert(T.format,T.colorSpace),Yt=c.convert(T.type);let kt=N(T.internalFormat,Tt,Yt,T.colorSpace,T.isVideoTexture);ot(xt,T);let Pt;const ie=T.mipmaps,V=T.isVideoTexture!==!0,Ut=qt.__version===void 0||St===!0,wt=ht.dataReady,Ct=z(T,Mt);if(T.isDepthTexture)kt=C(T.format===$o,T.type),Ut&&(V?i.texStorage2D(r.TEXTURE_2D,1,kt,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Tt,Yt,null));else if(T.isDataTexture)if(ie.length>0){V&&Ut&&i.texStorage2D(r.TEXTURE_2D,Ct,kt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Pt=ie[bt],V?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Tt,Yt,Pt.data):i.texImage2D(r.TEXTURE_2D,bt,kt,Pt.width,Pt.height,0,Tt,Yt,Pt.data);T.generateMipmaps=!1}else V?(Ut&&i.texStorage2D(r.TEXTURE_2D,Ct,kt,Mt.width,Mt.height),wt&&Et(T,Mt,Tt,Yt)):i.texImage2D(r.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Tt,Yt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,kt,ie[0].width,ie[0].height,Mt.depth);for(let bt=0,_t=ie.length;bt<_t;bt++)if(Pt=ie[bt],T.format!==Mi)if(Tt!==null)if(V){if(wt)if(T.layerUpdates.size>0){const Ft=Ig(Pt.width,Pt.height,T.format,T.type);for(const se of T.layerUpdates){const Ve=Pt.data.subarray(se*Ft/Pt.data.BYTES_PER_ELEMENT,(se+1)*Ft/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,se,Pt.width,Pt.height,1,Tt,Ve)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,Mt.depth,Tt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,kt,Pt.width,Pt.height,Mt.depth,0,Pt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,Mt.depth,Tt,Yt,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,kt,Pt.width,Pt.height,Mt.depth,0,Tt,Yt,Pt.data)}else{V&&Ut&&i.texStorage2D(r.TEXTURE_2D,Ct,kt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Pt=ie[bt],T.format!==Mi?Tt!==null?V?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Tt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,kt,Pt.width,Pt.height,0,Pt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Tt,Yt,Pt.data):i.texImage2D(r.TEXTURE_2D,bt,kt,Pt.width,Pt.height,0,Tt,Yt,Pt.data)}else if(T.isDataArrayTexture)if(V){if(Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,kt,Mt.width,Mt.height,Mt.depth),wt)if(T.layerUpdates.size>0){const bt=Ig(Mt.width,Mt.height,T.format,T.type);for(const _t of T.layerUpdates){const Ft=Mt.data.subarray(_t*bt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Tt,Yt,Ft)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Yt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Tt,Yt,Mt.data);else if(T.isData3DTexture)V?(Ut&&i.texStorage3D(r.TEXTURE_3D,Ct,kt,Mt.width,Mt.height,Mt.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Yt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Tt,Yt,Mt.data);else if(T.isFramebufferTexture){if(Ut)if(V)i.texStorage2D(r.TEXTURE_2D,Ct,kt,Mt.width,Mt.height);else{let bt=Mt.width,_t=Mt.height;for(let Ft=0;Ft<Ct;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,kt,bt,_t,0,Tt,Yt,null),bt>>=1,_t>>=1}}else if(ie.length>0){if(V&&Ut){const bt=le(ie[0]);i.texStorage2D(r.TEXTURE_2D,Ct,kt,bt.width,bt.height)}for(let bt=0,_t=ie.length;bt<_t;bt++)Pt=ie[bt],V?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Tt,Yt,Pt):i.texImage2D(r.TEXTURE_2D,bt,kt,Tt,Yt,Pt);T.generateMipmaps=!1}else if(V){if(Ut){const bt=le(Mt);i.texStorage2D(r.TEXTURE_2D,Ct,kt,bt.width,bt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Yt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,kt,Tt,Yt,Mt);M(T)&&y(xt),qt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function rt(O,T,tt){if(T.image.length!==6)return;const xt=it(O,T),St=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+tt);const ht=s.get(St);if(St.version!==ht.__version||xt===!0){i.activeTexture(r.TEXTURE0+tt);const qt=ze.getPrimaries(ze.workingColorSpace),Lt=T.colorSpace===va?null:ze.getPrimaries(T.colorSpace),Qt=T.colorSpace===va||qt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let _t=0;_t<6;_t++)!Wt&&!Mt?Tt[_t]=E(T.image[_t],!0,l.maxCubemapSize):Tt[_t]=Mt?T.image[_t].image:T.image[_t],Tt[_t]=jt(T,Tt[_t]);const Yt=Tt[0],kt=c.convert(T.format,T.colorSpace),Pt=c.convert(T.type),ie=N(T.internalFormat,kt,Pt,T.colorSpace),V=T.isVideoTexture!==!0,Ut=ht.__version===void 0||xt===!0,wt=St.dataReady;let Ct=z(T,Yt);ot(r.TEXTURE_CUBE_MAP,T);let bt;if(Wt){V&&Ut&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ie,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){bt=Tt[_t].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){const se=bt[Ft];T.format!==Mi?kt!==null?V?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,se.width,se.height,kt,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,se.width,se.height,0,se.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,se.width,se.height,kt,Pt,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,se.width,se.height,0,kt,Pt,se.data)}}}else{if(bt=T.mipmaps,V&&Ut){bt.length>0&&Ct++;const _t=le(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){V?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Tt[_t].width,Tt[_t].height,kt,Pt,Tt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Tt[_t].width,Tt[_t].height,0,kt,Pt,Tt[_t].data);for(let Ft=0;Ft<bt.length;Ft++){const Ve=bt[Ft].image[_t].image;V?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Ve.width,Ve.height,kt,Pt,Ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,Ve.width,Ve.height,0,kt,Pt,Ve.data)}}else{V?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Pt,Tt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,kt,Pt,Tt[_t]);for(let Ft=0;Ft<bt.length;Ft++){const se=bt[Ft];V?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,kt,Pt,se.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,kt,Pt,se.image[_t])}}}M(T)&&y(r.TEXTURE_CUBE_MAP),ht.__version=St.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function At(O,T,tt,xt,St,ht){const qt=c.convert(tt.format,tt.colorSpace),Lt=c.convert(tt.type),Qt=N(tt.internalFormat,qt,Lt,tt.colorSpace),Wt=s.get(T),Mt=s.get(tt);if(Mt.__renderTarget=T,!Wt.__hasExternalTextures){const Tt=Math.max(1,T.width>>ht),Yt=Math.max(1,T.height>>ht);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ht,Qt,Tt,Yt,T.depth,0,qt,Lt,null):i.texImage2D(St,ht,Qt,Tt,Yt,0,qt,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),Vt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,St,Mt.__webglTexture,0,De(T)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xt,St,Mt.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(O,T,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const xt=T.depthTexture,St=xt&&xt.isDepthTexture?xt.type:null,ht=C(T.stencilBuffer,St),qt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=De(T);Vt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,ht,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,ht,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ht,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qt,r.RENDERBUFFER,O)}else{const xt=T.textures;for(let St=0;St<xt.length;St++){const ht=xt[St],qt=c.convert(ht.format,ht.colorSpace),Lt=c.convert(ht.type),Qt=N(ht.internalFormat,qt,Lt,ht.colorSpace),Wt=De(T);tt&&Vt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Qt,T.width,T.height):Vt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,Qt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(T.depthTexture);xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ct(T.depthTexture,0);const St=xt.__webglTexture,ht=De(T);if(T.depthTexture.format===Jo)Vt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0);else if(T.depthTexture.format===$o)Vt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function te(O){const T=s.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const xt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xt.removeEventListener("dispose",St)};xt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=xt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const xt=O.texture.mipmaps;xt&&xt.length>0?It(T.__webglFramebuffer[0],O):It(T.__webglFramebuffer,O)}else if(tt){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]===void 0)T.__webglDepthbuffer[xt]=r.createRenderbuffer(),Dt(T.__webglDepthbuffer[xt],O,!1);else{const St=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[xt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ht)}}else{const xt=O.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Dt(T.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(O,T,tt){const xt=s.get(O);T!==void 0&&At(xt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&te(O)}function re(O){const T=O.texture,tt=s.get(O),xt=s.get(T);O.addEventListener("dispose",L);const St=O.textures,ht=O.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture()),xt.__version=T.version,f.memory.textures++),ht){tt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Lt]=[];for(let Qt=0;Qt<T.mipmaps.length;Qt++)tt.__webglFramebuffer[Lt][Qt]=r.createFramebuffer()}else tt.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)tt.__webglFramebuffer[Lt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(qt)for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){const Wt=s.get(St[Lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&Vt(O)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Qt=St[Lt];tt.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt]);const Wt=c.convert(Qt.format,Qt.colorSpace),Mt=c.convert(Qt.type),Tt=N(Qt.internalFormat,Wt,Mt,Qt.colorSpace,O.isXRRenderTarget===!0),Yt=De(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Tt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(tt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),ot(r.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)At(tt.__webglFramebuffer[Lt][Qt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Qt);else At(tt.__webglFramebuffer[Lt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(T)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){const Wt=St[Lt],Mt=s.get(Wt);let Tt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Tt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Mt.__webglTexture),ot(Tt,Wt),At(tt.__webglFramebuffer,O,Wt,r.COLOR_ATTACHMENT0+Lt,Tt,0),M(Wt)&&y(Tt)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,xt.__webglTexture),ot(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)At(tt.__webglFramebuffer[Qt],O,T,r.COLOR_ATTACHMENT0,Lt,Qt);else At(tt.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Lt,0);M(T)&&y(Lt),i.unbindTexture()}O.depthBuffer&&te(O)}function ye(O){const T=O.textures;for(let tt=0,xt=T.length;tt<xt;tt++){const St=T[tt];if(M(St)){const ht=P(O),qt=s.get(St).__webglTexture;i.bindTexture(ht,qt),y(ht),i.unbindTexture()}}}const H=[],oe=[];function ue(O){if(O.samples>0){if(Vt(O)===!1){const T=O.textures,tt=O.width,xt=O.height;let St=r.COLOR_BUFFER_BIT;const ht=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qt=s.get(O),Lt=T.length>1;if(Lt)for(let Wt=0;Wt<T.length;Wt++)i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Qt=O.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Wt=0;Wt<T.length;Wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Mt=s.get(T[Wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,tt,xt,0,0,tt,xt,St,r.NEAREST),d===!0&&(H.length=0,oe.length=0,H.push(r.COLOR_ATTACHMENT0+Wt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(H.push(ht),oe.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let Wt=0;Wt<T.length;Wt++){i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Mt=s.get(T[Wt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function De(O){return Math.min(l.maxSamples,O.samples)}function Vt(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function jt(O,T){const tt=O.colorSpace,xt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==Ir&&tt!==va&&(ze.getTransfer(tt)===qe?(xt!==Mi||St!==ki)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",tt)),T}function le(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=J,this.setTexture2D=ct,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=ve,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function eA(r,t){function i(s,l=va){let c;const f=ze.getTransfer(l);if(s===ki)return r.UNSIGNED_BYTE;if(s===Kd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===U_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===N_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===C_)return r.BYTE;if(s===D_)return r.SHORT;if(s===Ko)return r.UNSIGNED_SHORT;if(s===Zd)return r.INT;if(s===Ls)return r.UNSIGNED_INT;if(s===ya)return r.FLOAT;if(s===Fr)return r.HALF_FLOAT;if(s===L_)return r.ALPHA;if(s===O_)return r.RGB;if(s===Mi)return r.RGBA;if(s===Jo)return r.DEPTH_COMPONENT;if(s===$o)return r.DEPTH_STENCIL;if(s===P_)return r.RED;if(s===Jd)return r.RED_INTEGER;if(s===$d)return r.RG;if(s===tp)return r.RG_INTEGER;if(s===ep)return r.RGBA_INTEGER;if(s===Bc||s===Fc||s===Hc||s===Gc)if(f===qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===gd||s===_d||s===vd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd||s===Sd||s===Md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===yd||s===Sd)return f===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Md)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===wd||s===Cd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ed)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Td)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ad)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ud)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ld)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Id||s===Bd||s===Fd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Id)return f===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hd||s===Gd||s===Vd||s===kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new K_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ba({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new nl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends Ps{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",d=1,m=null,g=null,x=null,_=null,v=null,b=null;const E=typeof XRWebGLBinding<"u",M=new aA,y={},P=i.getContextAttributes();let N=null,C=null;const z=[],U=[],L=new de;let X=null;const D=new Si;D.viewport=new on;const w=new Si;w.viewport=new on;const G=[D,w],J=new db;let st=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=z[Q];return rt===void 0&&(rt=new Xh,z[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=z[Q];return rt===void 0&&(rt=new Xh,z[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=z[Q];return rt===void 0&&(rt=new Xh,z[Q]=rt),rt.getHandSpace()};function ct(Q){const rt=U.indexOf(Q.inputSource);if(rt===-1)return;const At=z[rt];At!==void 0&&(At.update(Q.inputSource,Q.frame,m||f),At.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<z.length;Q++){const rt=U[Q];rt!==null&&(U[Q]=null,z[Q].disconnect(rt))}st=null,ft=null,M.reset();for(const Q in y)delete y[Q];t.setRenderTarget(N),v=null,_=null,x=null,l=null,C=null,Et.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return x===null&&E&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",B),l.addEventListener("inputsourceschange",Y),P.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(L),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Dt=null,It=null;P.depth&&(It=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=P.stencil?$o:Jo,Dt=P.stencil?Qo:Ls);const te={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(te),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Os(_.textureWidth,_.textureHeight,{format:Mi,type:ki,depthTexture:new Z_(_.textureWidth,_.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};v=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),C=new Os(v.framebufferWidth,v.framebufferHeight,{format:Mi,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),m=null,f=await l.requestReferenceSpace(h),Et.setContext(l),Et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(Q){for(let rt=0;rt<Q.removed.length;rt++){const At=Q.removed[rt],Dt=U.indexOf(At);Dt>=0&&(U[Dt]=null,z[Dt].disconnect(At))}for(let rt=0;rt<Q.added.length;rt++){const At=Q.added[rt];let Dt=U.indexOf(At);if(Dt===-1){for(let te=0;te<z.length;te++)if(te>=U.length){U.push(At),Dt=te;break}else if(U[te]===null){U[te]=At,Dt=te;break}if(Dt===-1)break}const It=z[Dt];It&&It.connect(At)}}const Z=new j,vt=new j;function yt(Q,rt,At){Z.setFromMatrixPosition(rt.matrixWorld),vt.setFromMatrixPosition(At.matrixWorld);const Dt=Z.distanceTo(vt),It=rt.projectionMatrix.elements,te=At.projectionMatrix.elements,ve=It[14]/(It[10]-1),re=It[14]/(It[10]+1),ye=(It[9]+1)/It[5],H=(It[9]-1)/It[5],oe=(It[8]-1)/It[0],ue=(te[8]+1)/te[0],De=ve*oe,Vt=ve*ue,Ze=Dt/(-oe+ue),jt=Ze*-oe;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(jt),Q.translateZ(Ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),It[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const le=ve+Ze,O=re+Ze,T=De-jt,tt=Vt+(Dt-jt),xt=ye*re/O*le,St=H*re/O*le;Q.projectionMatrix.makePerspective(T,tt,xt,St,le,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function I(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let rt=Q.near,At=Q.far;M.texture!==null&&(M.depthNear>0&&(rt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),J.near=w.near=D.near=rt,J.far=w.far=D.far=At,(st!==J.near||ft!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),st=J.near,ft=J.far),J.layers.mask=Q.layers.mask|6,D.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const Dt=Q.parent,It=J.cameras;I(J,Dt);for(let te=0;te<It.length;te++)I(It[te],Dt);It.length===2?yt(J,D,w):J.projectionMatrix.copy(D.projectionMatrix),ot(Q,J,Dt)};function ot(Q,rt,At){At===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(At.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=el*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&v===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(Q){return y[Q]};let it=null;function pt(Q,rt){if(g=rt.getViewerPose(m||f),b=rt,g!==null){const At=g.views;v!==null&&(t.setRenderTargetFramebuffer(C,v.framebuffer),t.setRenderTarget(C));let Dt=!1;At.length!==J.cameras.length&&(J.cameras.length=0,Dt=!0);for(let re=0;re<At.length;re++){const ye=At[re];let H=null;if(v!==null)H=v.getViewport(ye);else{const ue=x.getViewSubImage(_,ye);H=ue.viewport,re===0&&(t.setRenderTargetTextures(C,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(C))}let oe=G[re];oe===void 0&&(oe=new Si,oe.layers.enable(re),oe.viewport=new on,G[re]=oe),oe.matrix.fromArray(ye.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ye.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(H.x,H.y,H.width,H.height),re===0&&(J.matrix.copy(oe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Dt===!0&&J.cameras.push(oe)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){x=s.getBinding();const re=x.getDepthInformation(At[0]);re&&re.isValid&&re.texture&&M.init(re,l.renderState)}if(It&&It.includes("camera-access")&&E){t.state.unbindTexture(),x=s.getBinding();for(let re=0;re<At.length;re++){const ye=At[re].camera;if(ye){let H=y[ye];H||(H=new K_,y[ye]=H);const oe=x.getCameraImage(ye);H.sourceTexture=oe}}}}for(let At=0;At<z.length;At++){const Dt=U[At],It=z[At];Dt!==null&&It!==void 0&&It.update(Dt,rt,m||f)}it&&it(Q,rt),rt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:rt}),b=null}const Et=new $_;Et.setAnimationLoop(pt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const Ds=new Wi,rA=new je;function oA(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,W_(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,P,N,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),x(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&v(M,y,C)):y.isMeshMatcapMaterial?(c(M,y),b(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),E(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?d(M,y,P,N):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Zn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Zn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=t.get(y),N=P.envMap,C=P.envMapRotation;N&&(M.envMap.value=N,Ds.copy(C),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),M.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(Ds)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function d(M,y,P,N){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=N*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function x(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function v(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function E(M,y){const P=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function lA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,N){const C=N.program;s.uniformBlockBinding(P,C)}function m(P,N){let C=l[P.id];C===void 0&&(b(P),C=g(P),l[P.id]=C,P.addEventListener("dispose",M));const z=N.program;s.updateUBOMapping(P,z);const U=t.render.frame;c[P.id]!==U&&(_(P),c[P.id]=U)}function g(P){const N=x();P.__bindingPointIndex=N;const C=r.createBuffer(),z=P.__size,U=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,z,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,C),C}function x(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const N=l[P.id],C=P.uniforms,z=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let U=0,L=C.length;U<L;U++){const X=Array.isArray(C[U])?C[U]:[C[U]];for(let D=0,w=X.length;D<w;D++){const G=X[D];if(v(G,U,D,z)===!0){const J=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let ft=0;for(let ct=0;ct<st.length;ct++){const B=st[ct],Y=E(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,J+ft,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ft),ft+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(P,N,C,z){const U=P.value,L=N+"_"+C;if(z[L]===void 0)return typeof U=="number"||typeof U=="boolean"?z[L]=U:z[L]=U.clone(),!0;{const X=z[L];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return z[L]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function b(P){const N=P.uniforms;let C=0;const z=16;for(let L=0,X=N.length;L<X;L++){const D=Array.isArray(N[L])?N[L]:[N[L]];for(let w=0,G=D.length;w<G;w++){const J=D[w],st=Array.isArray(J.value)?J.value:[J.value];for(let ft=0,ct=st.length;ft<ct;ft++){const B=st[ft],Y=E(B),Z=C%z,vt=Z%Y.boundary,yt=Z+vt;C+=vt,yt!==0&&z-yt<Y.storage&&(C+=z-yt),J.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=Y.storage}}}const U=C%z;return U>0&&(C+=z-U),P.__size=C,P.__cache={},this}function E(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",P),N}function M(P){const N=P.target;N.removeEventListener("dispose",M);const C=f.indexOf(N.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function y(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:d,update:m,dispose:y}}const cA=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ga=null;function uA(){return ga===null&&(ga=new eb(cA,32,32,$d,Fr),ga.minFilter=ui,ga.magFilter=ui,ga.wrapS=Gi,ga.wrapT=Gi,ga.generateMipmaps=!1,ga.needsUpdate=!0),ga}class fA{constructor(t={}){const{canvas:i=pM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=f;const b=new Set([ep,tp,Jd]),E=new Set([ki,Ls,Ko,Qo,Kd,Qd]),M=new Uint32Array(4),y=new Int32Array(4);let P=null,N=null;const C=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let L=!1;this._outputColorSpace=ci;let X=0,D=0,w=null,G=-1,J=null;const st=new on,ft=new on;let ct=null;const B=new _e(0);let Y=0,Z=i.width,vt=i.height,yt=1,I=null,ot=null;const it=new on(0,0,Z,vt),pt=new on(0,0,Z,vt);let Et=!1;const Q=new rp;let rt=!1,At=!1;const Dt=new je,It=new j,te=new on,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function ye(){return w===null?yt:1}let H=s;function oe(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${su}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",_t,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),H===null){const W="webgl2";if(H=oe(W,R),H===null)throw oe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ue,De,Vt,Ze,jt,le,O,T,tt,xt,St,ht,qt,Lt,Qt,Wt,Mt,Tt,Yt,kt,Pt,ie,V,Ut;function wt(){ue=new vT(H),ue.init(),ie=new eA(H,ue),De=new uT(H,ue,t,ie),Vt=new $3(H,ue),De.reversedDepthBuffer&&_&&Vt.buffers.depth.setReversed(!0),Ze=new MT(H),jt=new H3,le=new tA(H,ue,Vt,jt,De,ie,Ze),O=new hT(U),T=new _T(U),tt=new Ab(H),V=new lT(H,tt),xt=new yT(H,tt,Ze,V),St=new ET(H,xt,tt,Ze),Yt=new bT(H,De,le),Wt=new fT(jt),ht=new F3(U,O,T,ue,De,V,Wt),qt=new oA(U,jt),Lt=new V3,Qt=new j3(ue),Tt=new oT(U,O,T,Vt,St,v,d),Mt=new Q3(U,St,De),Ut=new lA(H,Ze,De,Vt),kt=new cT(H,ue,Ze),Pt=new ST(H,ue,Ze),Ze.programs=ht.programs,U.capabilities=De,U.extensions=ue,U.properties=jt,U.renderLists=Lt,U.shadowMap=Mt,U.state=Vt,U.info=Ze}wt();const Ct=new sA(U,H);this.xr=Ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(R){R!==void 0&&(yt=R,this.setSize(Z,vt,!1))},this.getSize=function(R){return R.set(Z,vt)},this.setSize=function(R,W,lt=!0){if(Ct.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,vt=W,i.width=Math.floor(R*yt),i.height=Math.floor(W*yt),lt===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Z*yt,vt*yt).floor()},this.setDrawingBufferSize=function(R,W,lt){Z=R,vt=W,yt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(W*lt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(st)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,W,lt,nt){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,W,lt,nt),Vt.viewport(st.copy(it).multiplyScalar(yt).round())},this.getScissor=function(R){return R.copy(pt)},this.setScissor=function(R,W,lt,nt){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,W,lt,nt),Vt.scissor(ft.copy(pt).multiplyScalar(yt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){Vt.setScissorTest(Et=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){ot=R},this.getClearColor=function(R){return R.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,lt=!0){let nt=0;if(R){let K=!1;if(w!==null){const Rt=w.texture.format;K=b.has(Rt)}if(K){const Rt=w.texture.type,Nt=E.has(Rt),Bt=Tt.getClearColor(),Ht=Tt.getClearAlpha(),$t=Bt.r,ne=Bt.g,Zt=Bt.b;Nt?(M[0]=$t,M[1]=ne,M[2]=Zt,M[3]=Ht,H.clearBufferuiv(H.COLOR,0,M)):(y[0]=$t,y[1]=ne,y[2]=Zt,y[3]=Ht,H.clearBufferiv(H.COLOR,0,y))}else nt|=H.COLOR_BUFFER_BIT}W&&(nt|=H.DEPTH_BUFFER_BIT),lt&&(nt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",_t,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),Tt.dispose(),Lt.dispose(),Qt.dispose(),jt.dispose(),O.dispose(),T.dispose(),St.dispose(),V.dispose(),Ut.dispose(),ht.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Xr),Ct.removeEventListener("sessionend",Wr),bi.stop()};function bt(R){R.preventDefault(),hg("WebGLRenderer: Context Lost."),L=!0}function _t(){hg("WebGLRenderer: Context Restored."),L=!1;const R=Ze.autoReset,W=Mt.enabled,lt=Mt.autoUpdate,nt=Mt.needsUpdate,K=Mt.type;wt(),Ze.autoReset=R,Mt.enabled=W,Mt.autoUpdate=lt,Mt.needsUpdate=nt,Mt.type=K}function Ft(R){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){const W=R.target;W.removeEventListener("dispose",se),Ve(W)}function Ve(R){Ue(R),jt.remove(R)}function Ue(R){const W=jt.get(R).programs;W!==void 0&&(W.forEach(function(lt){ht.releaseProgram(lt)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,lt,nt,K,Rt){W===null&&(W=ve);const Nt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=fu(R,W,lt,nt,K);Vt.setMaterial(nt,Nt);let Ht=lt.index,$t=1;if(nt.wireframe===!0){if(Ht=xt.getWireframeAttribute(lt),Ht===void 0)return;$t=2}const ne=lt.drawRange,Zt=lt.attributes.position;let pe=ne.start*$t,Ce=(ne.start+ne.count)*$t;Rt!==null&&(pe=Math.max(pe,Rt.start*$t),Ce=Math.min(Ce,(Rt.start+Rt.count)*$t)),Ht!==null?(pe=Math.max(pe,0),Ce=Math.min(Ce,Ht.count)):Zt!=null&&(pe=Math.max(pe,0),Ce=Math.min(Ce,Zt.count));const Ne=Ce-pe;if(Ne<0||Ne===1/0)return;V.setup(K,nt,Bt,lt,Ht);let Ae,Fe=kt;if(Ht!==null&&(Ae=tt.get(Ht),Fe=Pt,Fe.setIndex(Ae)),K.isMesh)nt.wireframe===!0?(Vt.setLineWidth(nt.wireframeLinewidth*ye()),Fe.setMode(H.LINES)):Fe.setMode(H.TRIANGLES);else if(K.isLine){let Jt=nt.linewidth;Jt===void 0&&(Jt=1),Vt.setLineWidth(Jt*ye()),K.isLineSegments?Fe.setMode(H.LINES):K.isLineLoop?Fe.setMode(H.LINE_LOOP):Fe.setMode(H.LINE_STRIP)}else K.isPoints?Fe.setMode(H.POINTS):K.isSprite&&Fe.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Ke=K._multiDrawCounts,Re=K._multiDrawCount,Mn=Ht?tt.get(Ht).bytesPerElement:1,Ta=jt.get(nt).currentProgram.getUniforms();for(let Je=0;Je<Re;Je++)Ta.setValue(H,"_gl_DrawID",Je),Fe.render(Jt[Je]/Mn,Ke[Je])}else if(K.isInstancedMesh)Fe.renderInstances(pe,Ne,K.count);else if(lt.isInstancedBufferGeometry){const Jt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ke=Math.min(lt.instanceCount,Jt);Fe.renderInstances(pe,Ne,Ke)}else Fe.render(pe,Ne)};function On(R,W,lt){R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,xn(R,W,lt),R.side=ss,R.needsUpdate=!0,xn(R,W,lt),R.side=Hi):xn(R,W,lt)}this.compile=function(R,W,lt=null){lt===null&&(lt=R),N=Qt.get(lt),N.init(W),z.push(N),lt.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),R!==lt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),N.setupLights();const nt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const Bt=Rt[Nt];On(Bt,lt,K),nt.add(Bt)}else On(Rt,lt,K),nt.add(Rt)}),N=z.pop(),nt},this.compileAsync=function(R,W,lt=null){const nt=this.compile(R,W,lt);return new Promise(K=>{function Rt(){if(nt.forEach(function(Nt){jt.get(Nt).currentProgram.isReady()&&nt.delete(Nt)}),nt.size===0){K(R);return}setTimeout(Rt,10)}ue.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Jn=null;function il(R){Jn&&Jn(R)}function Xr(){bi.stop()}function Wr(){bi.start()}const bi=new $_;bi.setAnimationLoop(il),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(R){Jn=R,Ct.setAnimationLoop(R),R===null?bi.stop():bi.start()},Ct.addEventListener("sessionstart",Xr),Ct.addEventListener("sessionend",Wr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(W),W=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,W,w),N=Qt.get(R,z.length),N.init(W),z.push(N),Dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Dt,Vi,W.reversedDepth),At=this.localClippingEnabled,rt=Wt.init(this.clippingPlanes,At),P=Lt.get(R,C.length),P.init(),C.push(P),Ct.enabled===!0&&Ct.isPresenting===!0){const Rt=U.xr.getDepthSensingMesh();Rt!==null&&os(Rt,W,-1/0,U.sortObjects)}os(R,W,0,U.sortObjects),P.finish(),U.sortObjects===!0&&P.sort(I,ot),re=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,re&&Tt.addToRenderList(P,R),this.info.render.frame++,rt===!0&&Wt.beginShadows();const lt=N.state.shadowsArray;Mt.render(lt,R,W),rt===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=P.opaque,K=P.transmissive;if(N.setupLights(),W.isArrayCamera){const Rt=W.cameras;if(K.length>0)for(let Nt=0,Bt=Rt.length;Nt<Bt;Nt++){const Ht=Rt[Nt];Yr(nt,K,R,Ht)}re&&Tt.render(R);for(let Nt=0,Bt=Rt.length;Nt<Bt;Nt++){const Ht=Rt[Nt];qr(P,R,Ht,Ht.viewport)}}else K.length>0&&Yr(nt,K,R,W),re&&Tt.render(R),qr(P,R,W);w!==null&&D===0&&(le.updateMultisampleRenderTarget(w),le.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(U,R,W),V.resetDefaultState(),G=-1,J=null,z.pop(),z.length>0?(N=z[z.length-1],rt===!0&&Wt.setGlobalState(U.clippingPlanes,N.state.camera)):N=null,C.pop(),C.length>0?P=C[C.length-1]:P=null};function os(R,W,lt,nt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){nt&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Nt=St.update(R),Bt=R.material;Bt.visible&&P.push(R,Nt,Bt,lt,te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Nt=St.update(R),Bt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),te.copy(Nt.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(Bt)){const Ht=Nt.groups;for(let $t=0,ne=Ht.length;$t<ne;$t++){const Zt=Ht[$t],pe=Bt[Zt.materialIndex];pe&&pe.visible&&P.push(R,Nt,pe,lt,te.z,Zt)}}else Bt.visible&&P.push(R,Nt,Bt,lt,te.z,null)}}const Rt=R.children;for(let Nt=0,Bt=Rt.length;Nt<Bt;Nt++)os(Rt[Nt],W,lt,nt)}function qr(R,W,lt,nt){const{opaque:K,transmissive:Rt,transparent:Nt}=R;N.setupLightsView(lt),rt===!0&&Wt.setGlobalState(U.clippingPlanes,lt),nt&&Vt.viewport(st.copy(nt)),K.length>0&&$n(K,W,lt),Rt.length>0&&$n(Rt,W,lt),Nt.length>0&&$n(Nt,W,lt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Yr(R,W,lt,nt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[nt.id]===void 0&&(N.state.transmissionRenderTarget[nt.id]=new Os(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Fr:ki,minFilter:ns,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const Rt=N.state.transmissionRenderTarget[nt.id],Nt=nt.viewport||st;Rt.setSize(Nt.z*U.transmissionResolutionScale,Nt.w*U.transmissionResolutionScale);const Bt=U.getRenderTarget(),Ht=U.getActiveCubeFace(),$t=U.getActiveMipmapLevel();U.setRenderTarget(Rt),U.getClearColor(B),Y=U.getClearAlpha(),Y<1&&U.setClearColor(16777215,.5),U.clear(),re&&Tt.render(lt);const ne=U.toneMapping;U.toneMapping=as;const Zt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),rt===!0&&Wt.setGlobalState(U.clippingPlanes,nt),$n(R,lt,nt),le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ce=0,Ne=W.length;Ce<Ne;Ce++){const Ae=W[Ce],{object:Fe,geometry:Jt,material:Ke,group:Re}=Ae;if(Ke.side===Hi&&Fe.layers.test(nt.layers)){const Mn=Ke.side;Ke.side=Zn,Ke.needsUpdate=!0,un(Fe,lt,nt,Jt,Ke,Re),Ke.side=Mn,Ke.needsUpdate=!0,pe=!0}}pe===!0&&(le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt))}U.setRenderTarget(Bt,Ht,$t),U.setClearColor(B,Y),Zt!==void 0&&(nt.viewport=Zt),U.toneMapping=ne}function $n(R,W,lt){const nt=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Rt=R.length;K<Rt;K++){const Nt=R[K],{object:Bt,geometry:Ht,group:$t}=Nt;let ne=Nt.material;ne.allowOverride===!0&&nt!==null&&(ne=nt),Bt.layers.test(lt.layers)&&un(Bt,W,lt,Ht,ne,$t)}}function un(R,W,lt,nt,K,Rt){R.onBeforeRender(U,W,lt,nt,K,Rt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,W,lt,nt,R,Rt),K.transparent===!0&&K.side===Hi&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,U.renderBufferDirect(lt,W,nt,K,R,Rt),K.side=ss,K.needsUpdate=!0,U.renderBufferDirect(lt,W,nt,K,R,Rt),K.side=Hi):U.renderBufferDirect(lt,W,nt,K,R,Rt),R.onAfterRender(U,W,lt,nt,K,Rt)}function xn(R,W,lt){W.isScene!==!0&&(W=ve);const nt=jt.get(R),K=N.state.lights,Rt=N.state.shadowsArray,Nt=K.state.version,Bt=ht.getParameters(R,K.state,Rt,W,lt),Ht=ht.getProgramCacheKey(Bt);let $t=nt.programs;nt.environment=R.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(R.isMeshStandardMaterial?T:O).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",se),$t=new Map,nt.programs=$t);let ne=$t.get(Ht);if(ne!==void 0){if(nt.currentProgram===ne&&nt.lightsStateVersion===Nt)return zs(R,Bt),ne}else Bt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Bt,U),ne=ht.acquireProgram(Bt,Ht),$t.set(Ht,ne),nt.uniforms=Bt.uniforms;const Zt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),zs(R,Bt),nt.needsLights=al(R),nt.lightsStateVersion=Nt,nt.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=ne,nt.uniformsList=null,ne}function qi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Vc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function zs(R,W){const lt=jt.get(R);lt.outputColorSpace=W.outputColorSpace,lt.batching=W.batching,lt.batchingColor=W.batchingColor,lt.instancing=W.instancing,lt.instancingColor=W.instancingColor,lt.instancingMorph=W.instancingMorph,lt.skinning=W.skinning,lt.morphTargets=W.morphTargets,lt.morphNormals=W.morphNormals,lt.morphColors=W.morphColors,lt.morphTargetsCount=W.morphTargetsCount,lt.numClippingPlanes=W.numClippingPlanes,lt.numIntersection=W.numClipIntersection,lt.vertexAlphas=W.vertexAlphas,lt.vertexTangents=W.vertexTangents,lt.toneMapping=W.toneMapping}function fu(R,W,lt,nt,K){W.isScene!==!0&&(W=ve),le.resetTextureUnits();const Rt=W.fog,Nt=nt.isMeshStandardMaterial?W.environment:null,Bt=w===null?U.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ir,Ht=(nt.isMeshStandardMaterial?T:O).get(nt.envMap||Nt),$t=nt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ne=!!lt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!lt.morphAttributes.position,pe=!!lt.morphAttributes.normal,Ce=!!lt.morphAttributes.color;let Ne=as;nt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ne=U.toneMapping);const Ae=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Fe=Ae!==void 0?Ae.length:0,Jt=jt.get(nt),Ke=N.state.lights;if(rt===!0&&(At===!0||R!==J)){const En=R===J&&nt.id===G;Wt.setState(nt,R,En)}let Re=!1;nt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ke.state.version||Jt.outputColorSpace!==Bt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==Ht||nt.fog===!0&&Jt.fog!==Rt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ne||Jt.morphTargets!==Zt||Jt.morphNormals!==pe||Jt.morphColors!==Ce||Jt.toneMapping!==Ne||Jt.morphTargetsCount!==Fe)&&(Re=!0):(Re=!0,Jt.__version=nt.version);let Mn=Jt.currentProgram;Re===!0&&(Mn=xn(nt,W,K));let Ta=!1,Je=!1,Yi=!1;const $e=Mn.getUniforms(),bn=Jt.uniforms;if(Vt.useProgram(Mn.program)&&(Ta=!0,Je=!0,Yi=!0),nt.id!==G&&(G=nt.id,Je=!0),Ta||J!==R){Vt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),$e.setValue(H,"projectionMatrix",R.projectionMatrix),$e.setValue(H,"viewMatrix",R.matrixWorldInverse);const Cn=$e.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,It.setFromMatrixPosition(R.matrixWorld)),De.logarithmicDepthBuffer&&$e.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&$e.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,Je=!0,Yi=!0)}if(K.isSkinnedMesh){$e.setOptional(H,K,"bindMatrix"),$e.setOptional(H,K,"bindMatrixInverse");const En=K.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),$e.setValue(H,"boneTexture",En.boneTexture,le))}K.isBatchedMesh&&($e.setOptional(H,K,"batchingTexture"),$e.setValue(H,"batchingTexture",K._matricesTexture,le),$e.setOptional(H,K,"batchingIdTexture"),$e.setValue(H,"batchingIdTexture",K._indirectTexture,le),$e.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&$e.setValue(H,"batchingColorTexture",K._colorsTexture,le));const gn=lt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Yt.update(K,lt,Mn),(Je||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,$e.setValue(H,"receiveShadow",K.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(bn.envMap.value=Ht,bn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&W.environment!==null&&(bn.envMapIntensity.value=W.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=uA()),Je&&($e.setValue(H,"toneMappingExposure",U.toneMappingExposure),Jt.needsLights&&hu(bn,Yi),Rt&&nt.fog===!0&&qt.refreshFogUniforms(bn,Rt),qt.refreshMaterialUniforms(bn,nt,yt,vt,N.state.transmissionRenderTarget[R.id]),Vc.upload(H,qi(Jt),bn,le)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Vc.upload(H,qi(Jt),bn,le),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&$e.setValue(H,"center",K.center),$e.setValue(H,"modelViewMatrix",K.modelViewMatrix),$e.setValue(H,"normalMatrix",K.normalMatrix),$e.setValue(H,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const En=nt.uniformsGroups;for(let Cn=0,Oi=En.length;Cn<Oi;Cn++){const ji=En[Cn];Ut.update(ji,Mn),Ut.bind(ji,Mn)}}return Mn}function hu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function al(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,W,lt){const nt=jt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=W,jt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:lt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const lt=jt.get(R);lt.__webglFramebuffer=W,lt.__useDefaultFramebuffer=W===void 0};const ls=H.createFramebuffer();this.setRenderTarget=function(R,W=0,lt=0){w=R,X=W,D=lt;let nt=!0,K=null,Rt=!1,Nt=!1;if(R){const Ht=jt.get(R);if(Ht.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),nt=!1;else if(Ht.__webglFramebuffer===void 0)le.setupRenderTarget(R);else if(Ht.__hasExternalTextures)le.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(Ht.__boundDepthTexture!==Zt){if(Zt!==null&&jt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Nt=!0);const ne=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?K=ne[W][lt]:K=ne[W],Rt=!0):R.samples>0&&le.useMultisampledRTT(R)===!1?K=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[lt]:K=ne,st.copy(R.viewport),ft.copy(R.scissor),ct=R.scissorTest}else st.copy(it).multiplyScalar(yt).floor(),ft.copy(pt).multiplyScalar(yt).floor(),ct=Et;if(lt!==0&&(K=ls),Vt.bindFramebuffer(H.FRAMEBUFFER,K)&&nt&&Vt.drawBuffers(R,K),Vt.viewport(st),Vt.scissor(ft),Vt.setScissorTest(ct),Rt){const Ht=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ht.__webglTexture,lt)}else if(Nt){const Ht=W;for(let $t=0;$t<R.textures.length;$t++){const ne=jt.get(R.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,ne.__webglTexture,lt,Ht)}}else if(R!==null&&lt!==0){const Ht=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ht.__webglTexture,lt)}G=-1},this.readRenderTargetPixels=function(R,W,lt,nt,K,Rt,Nt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){Vt.bindFramebuffer(H.FRAMEBUFFER,Ht);try{const $t=R.textures[Bt],ne=$t.format,Zt=$t.type;if(!De.textureFormatReadable(ne)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Zt)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-nt&&lt>=0&&lt<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt),H.readPixels(W,lt,nt,K,ie.convert(ne),ie.convert(Zt),Rt))}finally{const $t=w!==null?jt.get(w).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,W,lt,nt,K,Rt,Nt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht)if(W>=0&&W<=R.width-nt&&lt>=0&&lt<=R.height-K){Vt.bindFramebuffer(H.FRAMEBUFFER,Ht);const $t=R.textures[Bt],ne=$t.format,Zt=$t.type;if(!De.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.bufferData(H.PIXEL_PACK_BUFFER,Rt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt),H.readPixels(W,lt,nt,K,ie.convert(ne),ie.convert(Zt),0);const Ce=w!==null?jt.get(w).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,Ce);const Ne=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mM(H,Ne,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Rt),H.deleteBuffer(pe),H.deleteSync(Ne),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,lt=0){const nt=Math.pow(2,-lt),K=Math.floor(R.image.width*nt),Rt=Math.floor(R.image.height*nt),Nt=W!==null?W.x:0,Bt=W!==null?W.y:0;le.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,Nt,Bt,K,Rt),Vt.unbindTexture()};const jr=H.createFramebuffer(),Ea=H.createFramebuffer();this.copyTextureToTexture=function(R,W,lt=null,nt=null,K=0,Rt=null){Rt===null&&(K!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=K,K=0):Rt=0);let Nt,Bt,Ht,$t,ne,Zt,pe,Ce,Ne;const Ae=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(lt!==null)Nt=lt.max.x-lt.min.x,Bt=lt.max.y-lt.min.y,Ht=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,ne=lt.min.y,Zt=lt.isBox3?lt.min.z:0;else{const gn=Math.pow(2,-K);Nt=Math.floor(Ae.width*gn),Bt=Math.floor(Ae.height*gn),R.isDataArrayTexture?Ht=Ae.depth:R.isData3DTexture?Ht=Math.floor(Ae.depth*gn):Ht=1,$t=0,ne=0,Zt=0}nt!==null?(pe=nt.x,Ce=nt.y,Ne=nt.z):(pe=0,Ce=0,Ne=0);const Fe=ie.convert(W.format),Jt=ie.convert(W.type);let Ke;W.isData3DTexture?(le.setTexture3D(W,0),Ke=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(le.setTexture2DArray(W,0),Ke=H.TEXTURE_2D_ARRAY):(le.setTexture2D(W,0),Ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Re=H.getParameter(H.UNPACK_ROW_LENGTH),Mn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ta=H.getParameter(H.UNPACK_SKIP_PIXELS),Je=H.getParameter(H.UNPACK_SKIP_ROWS),Yi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ae.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt);const $e=R.isDataArrayTexture||R.isData3DTexture,bn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const gn=jt.get(R),En=jt.get(W),Cn=jt.get(gn.__renderTarget),Oi=jt.get(En.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let ji=0;ji<Ht;ji++)$e&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,K,Zt+ji),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(W).__webglTexture,Rt,Ne+ji)),H.blitFramebuffer($t,ne,Nt,Bt,pe,Ce,Nt,Bt,H.DEPTH_BUFFER_BIT,H.NEAREST);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||jt.has(R)){const gn=jt.get(R),En=jt.get(W);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,jr),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ea);for(let Cn=0;Cn<Ht;Cn++)$e?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,K,Zt+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,K),bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,En.__webglTexture,Rt,Ne+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,En.__webglTexture,Rt),K!==0?H.blitFramebuffer($t,ne,Nt,Bt,pe,Ce,Nt,Bt,H.COLOR_BUFFER_BIT,H.NEAREST):bn?H.copyTexSubImage3D(Ke,Rt,pe,Ce,Ne+Cn,$t,ne,Nt,Bt):H.copyTexSubImage2D(Ke,Rt,pe,Ce,$t,ne,Nt,Bt);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ke,Rt,pe,Ce,Ne,Nt,Bt,Ht,Fe,Jt,Ae.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Ke,Rt,pe,Ce,Ne,Nt,Bt,Ht,Fe,Ae.data):H.texSubImage3D(Ke,Rt,pe,Ce,Ne,Nt,Bt,Ht,Fe,Jt,Ae):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Rt,pe,Ce,Nt,Bt,Fe,Jt,Ae.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Rt,pe,Ce,Ae.width,Ae.height,Fe,Ae.data):H.texSubImage2D(H.TEXTURE_2D,Rt,pe,Ce,Nt,Bt,Fe,Jt,Ae);H.pixelStorei(H.UNPACK_ROW_LENGTH,Re),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ta),H.pixelStorei(H.UNPACK_SKIP_ROWS,Je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yi),Rt===0&&W.generateMipmaps&&H.generateMipmap(Ke),Vt.unbindTexture()},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){X=0,D=0,w=null,Vt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),i.unpackColorSpace=ze._getUnpackColorSpace()}}const o_={type:"change"},fp={type:"start"},av={type:"end"},Pc=new ip,l_=new es,hA=Math.cos(70*eu.DEG2RAD),vn=new j,jn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},td=1e-6;class dA extends Eb{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ur.ROTATE,MIDDLE:Ur.DOLLY,RIGHT:Ur.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Xi,this._lastTargetPosition=new j,this._quat=new Xi().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zg,this._sphericalDelta=new zg,this._scale=1,this._panOffset=new j,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new j,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mA.bind(this),this._onPointerDown=pA.bind(this),this._onPointerUp=xA.bind(this),this._onContextMenu=bA.bind(this),this._onMouseWheel=vA.bind(this),this._onKeyDown=yA.bind(this),this._onTouchStart=SA.bind(this),this._onTouchMove=MA.bind(this),this._onMouseDown=gA.bind(this),this._onMouseMove=_A.bind(this),this._interceptControlDown=EA.bind(this),this._interceptControlUp=TA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(o_),this.update(),this.state=Ye.NONE}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=vn.length();f=this._clampDistance(h*this._scale);const d=h-f;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),c=!!d}else if(this.object.isOrthographicCamera){const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=d!==this.object.zoom;const m=new j(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),f=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Pc.origin.copy(this.object.position),Pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pc.direction))<hA?this.object.lookAt(this.target):(l_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pc.intersectPlane(l_,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>td||this._lastTargetPosition.distanceToSquared(this.target)>td?(this.dispatchEvent(o_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function pA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function mA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function xA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(av),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function gA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Ur.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Ur.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(fp)}function _A(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function vA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(fp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(av))}function yA(r){this.enabled!==!1&&this._handleKeyDown(r)}function SA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case Cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(fp)}function MA(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function bA(r){this.enabled!==!1&&r.preventDefault()}function EA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var kc={exports:{}},AA=kc.exports,c_;function RA(){return c_||(c_=1,(function(r){(function(t,i,s){function l(d){var m=this,g=h();m.next=function(){var x=2091639*m.s0+m.c*23283064365386963e-26;return m.s0=m.s1,m.s1=m.s2,m.s2=x-(m.c=x|0)},m.c=1,m.s0=g(" "),m.s1=g(" "),m.s2=g(" "),m.s0-=g(d),m.s0<0&&(m.s0+=1),m.s1-=g(d),m.s1<0&&(m.s1+=1),m.s2-=g(d),m.s2<0&&(m.s2+=1),g=null}function c(d,m){return m.c=d.c,m.s0=d.s0,m.s1=d.s1,m.s2=d.s2,m}function f(d,m){var g=new l(d),x=m&&m.state,_=g.next;return _.int32=function(){return g.next()*4294967296|0},_.double=function(){return _()+(_()*2097152|0)*11102230246251565e-32},_.quick=_,x&&(typeof x=="object"&&c(x,g),_.state=function(){return c(g,{})}),_}function h(){var d=4022871197,m=function(g){g=String(g);for(var x=0;x<g.length;x++){d+=g.charCodeAt(x);var _=.02519603282416938*d;d=_>>>0,_-=d,_*=d,d=_>>>0,_-=d,d+=_*4294967296}return(d>>>0)*23283064365386963e-26};return m}i&&i.exports?i.exports=f:this.alea=f})(AA,r)})(kc)),kc.exports}var Xc={exports:{}},wA=Xc.exports,u_;function CA(){return u_||(u_=1,(function(r){(function(t,i,s){function l(h){var d=this,m="";d.x=0,d.y=0,d.z=0,d.w=0,d.next=function(){var x=d.x^d.x<<11;return d.x=d.y,d.y=d.z,d.z=d.w,d.w^=d.w>>>19^x^x>>>8},h===(h|0)?d.x=h:m+=h;for(var g=0;g<m.length+64;g++)d.x^=m.charCodeAt(g)|0,d.next()}function c(h,d){return d.x=h.x,d.y=h.y,d.z=h.z,d.w=h.w,d}function f(h,d){var m=new l(h),g=d&&d.state,x=function(){return(m.next()>>>0)/4294967296};return x.double=function(){do var _=m.next()>>>11,v=(m.next()>>>0)/4294967296,b=(_+v)/(1<<21);while(b===0);return b},x.int32=m.next,x.quick=x,g&&(typeof g=="object"&&c(g,m),x.state=function(){return c(m,{})}),x}i&&i.exports?i.exports=f:this.xor128=f})(wA,r)})(Xc)),Xc.exports}var Wc={exports:{}},DA=Wc.exports,f_;function UA(){return f_||(f_=1,(function(r){(function(t,i,s){function l(h){var d=this,m="";d.next=function(){var x=d.x^d.x>>>2;return d.x=d.y,d.y=d.z,d.z=d.w,d.w=d.v,(d.d=d.d+362437|0)+(d.v=d.v^d.v<<4^(x^x<<1))|0},d.x=0,d.y=0,d.z=0,d.w=0,d.v=0,h===(h|0)?d.x=h:m+=h;for(var g=0;g<m.length+64;g++)d.x^=m.charCodeAt(g)|0,g==m.length&&(d.d=d.x<<10^d.x>>>4),d.next()}function c(h,d){return d.x=h.x,d.y=h.y,d.z=h.z,d.w=h.w,d.v=h.v,d.d=h.d,d}function f(h,d){var m=new l(h),g=d&&d.state,x=function(){return(m.next()>>>0)/4294967296};return x.double=function(){do var _=m.next()>>>11,v=(m.next()>>>0)/4294967296,b=(_+v)/(1<<21);while(b===0);return b},x.int32=m.next,x.quick=x,g&&(typeof g=="object"&&c(g,m),x.state=function(){return c(m,{})}),x}i&&i.exports?i.exports=f:this.xorwow=f})(DA,r)})(Wc)),Wc.exports}var qc={exports:{}},NA=qc.exports,h_;function LA(){return h_||(h_=1,(function(r){(function(t,i,s){function l(h){var d=this;d.next=function(){var g=d.x,x=d.i,_,v;return _=g[x],_^=_>>>7,v=_^_<<24,_=g[x+1&7],v^=_^_>>>10,_=g[x+3&7],v^=_^_>>>3,_=g[x+4&7],v^=_^_<<7,_=g[x+7&7],_=_^_<<13,v^=_^_<<9,g[x]=v,d.i=x+1&7,v};function m(g,x){var _,v=[];if(x===(x|0))v[0]=x;else for(x=""+x,_=0;_<x.length;++_)v[_&7]=v[_&7]<<15^x.charCodeAt(_)+v[_+1&7]<<13;for(;v.length<8;)v.push(0);for(_=0;_<8&&v[_]===0;++_);for(_==8?v[7]=-1:v[_],g.x=v,g.i=0,_=256;_>0;--_)g.next()}m(d,h)}function c(h,d){return d.x=h.x.slice(),d.i=h.i,d}function f(h,d){h==null&&(h=+new Date);var m=new l(h),g=d&&d.state,x=function(){return(m.next()>>>0)/4294967296};return x.double=function(){do var _=m.next()>>>11,v=(m.next()>>>0)/4294967296,b=(_+v)/(1<<21);while(b===0);return b},x.int32=m.next,x.quick=x,g&&(g.x&&c(g,m),x.state=function(){return c(m,{})}),x}i&&i.exports?i.exports=f:this.xorshift7=f})(NA,r)})(qc)),qc.exports}var Yc={exports:{}},OA=Yc.exports,d_;function PA(){return d_||(d_=1,(function(r){(function(t,i,s){function l(h){var d=this;d.next=function(){var g=d.w,x=d.X,_=d.i,v,b;return d.w=g=g+1640531527|0,b=x[_+34&127],v=x[_=_+1&127],b^=b<<13,v^=v<<17,b^=b>>>15,v^=v>>>12,b=x[_]=b^v,d.i=_,b+(g^g>>>16)|0};function m(g,x){var _,v,b,E,M,y=[],P=128;for(x===(x|0)?(v=x,x=null):(x=x+"\0",v=0,P=Math.max(P,x.length)),b=0,E=-32;E<P;++E)x&&(v^=x.charCodeAt((E+32)%x.length)),E===0&&(M=v),v^=v<<10,v^=v>>>15,v^=v<<4,v^=v>>>13,E>=0&&(M=M+1640531527|0,_=y[E&127]^=v+M,b=_==0?b+1:0);for(b>=128&&(y[(x&&x.length||0)&127]=-1),b=127,E=512;E>0;--E)v=y[b+34&127],_=y[b=b+1&127],v^=v<<13,_^=_<<17,v^=v>>>15,_^=_>>>12,y[b]=v^_;g.w=M,g.X=y,g.i=b}m(d,h)}function c(h,d){return d.i=h.i,d.w=h.w,d.X=h.X.slice(),d}function f(h,d){h==null&&(h=+new Date);var m=new l(h),g=d&&d.state,x=function(){return(m.next()>>>0)/4294967296};return x.double=function(){do var _=m.next()>>>11,v=(m.next()>>>0)/4294967296,b=(_+v)/(1<<21);while(b===0);return b},x.int32=m.next,x.quick=x,g&&(g.X&&c(g,m),x.state=function(){return c(m,{})}),x}i&&i.exports?i.exports=f:this.xor4096=f})(OA,r)})(Yc)),Yc.exports}var jc={exports:{}},zA=jc.exports,p_;function IA(){return p_||(p_=1,(function(r){(function(t,i,s){function l(h){var d=this,m="";d.next=function(){var x=d.b,_=d.c,v=d.d,b=d.a;return x=x<<25^x>>>7^_,_=_-v|0,v=v<<24^v>>>8^b,b=b-x|0,d.b=x=x<<20^x>>>12^_,d.c=_=_-v|0,d.d=v<<16^_>>>16^b,d.a=b-x|0},d.a=0,d.b=0,d.c=-1640531527,d.d=1367130551,h===Math.floor(h)?(d.a=h/4294967296|0,d.b=h|0):m+=h;for(var g=0;g<m.length+20;g++)d.b^=m.charCodeAt(g)|0,d.next()}function c(h,d){return d.a=h.a,d.b=h.b,d.c=h.c,d.d=h.d,d}function f(h,d){var m=new l(h),g=d&&d.state,x=function(){return(m.next()>>>0)/4294967296};return x.double=function(){do var _=m.next()>>>11,v=(m.next()>>>0)/4294967296,b=(_+v)/(1<<21);while(b===0);return b},x.int32=m.next,x.quick=x,g&&(typeof g=="object"&&c(g,m),x.state=function(){return c(m,{})}),x}i&&i.exports?i.exports=f:this.tychei=f})(zA,r)})(jc)),jc.exports}var Zc={exports:{}};const BA={},FA=Object.freeze(Object.defineProperty({__proto__:null,default:BA},Symbol.toStringTag,{value:"Module"})),HA=pS(FA);var GA=Zc.exports,m_;function VA(){return m_||(m_=1,(function(r){(function(t,i,s){var l=256,c=6,f=52,h="random",d=s.pow(l,c),m=s.pow(2,f),g=m*2,x=l-1,_;function v(C,z,U){var L=[];z=z==!0?{entropy:!0}:z||{};var X=y(M(z.entropy?[C,N(i)]:C??P(),3),L),D=new b(L),w=function(){for(var G=D.g(c),J=d,st=0;G<m;)G=(G+st)*l,J*=l,st=D.g(1);for(;G>=g;)G/=2,J/=2,st>>>=1;return(G+st)/J};return w.int32=function(){return D.g(4)|0},w.quick=function(){return D.g(4)/4294967296},w.double=w,y(N(D.S),i),(z.pass||U||function(G,J,st,ft){return ft&&(ft.S&&E(ft,D),G.state=function(){return E(D,{})}),st?(s[h]=G,J):G})(w,X,"global"in z?z.global:this==s,z.state)}function b(C){var z,U=C.length,L=this,X=0,D=L.i=L.j=0,w=L.S=[];for(U||(C=[U++]);X<l;)w[X]=X++;for(X=0;X<l;X++)w[X]=w[D=x&D+C[X%U]+(z=w[X])],w[D]=z;(L.g=function(G){for(var J,st=0,ft=L.i,ct=L.j,B=L.S;G--;)J=B[ft=x&ft+1],st=st*l+B[x&(B[ft]=B[ct=x&ct+J])+(B[ct]=J)];return L.i=ft,L.j=ct,st})(l)}function E(C,z){return z.i=C.i,z.j=C.j,z.S=C.S.slice(),z}function M(C,z){var U=[],L=typeof C,X;if(z&&L=="object")for(X in C)try{U.push(M(C[X],z-1))}catch{}return U.length?U:L=="string"?C:C+"\0"}function y(C,z){for(var U=C+"",L,X=0;X<U.length;)z[x&X]=x&(L^=z[x&X]*19)+U.charCodeAt(X++);return N(z)}function P(){try{var C;return _&&(C=_.randomBytes)?C=C(l):(C=new Uint8Array(l),(t.crypto||t.msCrypto).getRandomValues(C)),N(C)}catch{var z=t.navigator,U=z&&z.plugins;return[+new Date,t,U,t.screen,N(i)]}}function N(C){return String.fromCharCode.apply(0,C)}if(y(s.random(),i),r.exports){r.exports=v;try{_=HA}catch{}}else s["seed"+h]=v})(typeof self<"u"?self:GA,[],Math)})(Zc)),Zc.exports}var ed,x_;function kA(){if(x_)return ed;x_=1;var r=RA(),t=CA(),i=UA(),s=LA(),l=PA(),c=IA(),f=VA();return f.alea=r,f.xor128=t,f.xorwow=i,f.xorshift7=s,f.xor4096=l,f.tychei=c,ed=f,ed}var XA=kA();const WA=Yd(XA),g_={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class au{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new n2(t)}),this.register(function(t){return new i2(t)}),this.register(function(t){return new o2(t)}),this.register(function(t){return new l2(t)}),this.register(function(t){return new c2(t)}),this.register(function(t){return new u2(t)}),this.register(function(t){return new a2(t)}),this.register(function(t){return new s2(t)}),this.register(function(t){return new r2(t)}),this.register(function(t){return new f2(t)}),this.register(function(t){return new h2(t)}),this.register(function(t){return new d2(t)}),this.register(function(t){return new p2(t)}),this.register(function(t){return new m2(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,i,s,l){const c=new e2,f=[];for(let h=0,d=this.pluginCallbacks.length;h<d;h++)f.push(this.pluginCallbacks[h](c));c.setPlugins(f),c.setTextureUtils(this.textureUtils),c.writeAsync(t,i,l).catch(s)}parseAsync(t,i){const s=this;return new Promise(function(l,c){s.parse(t,l,c,i)})}}const be={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},nd="KHR_mesh_quantization",fi={};fi[Kn]=be.NEAREST;fi[w_]=be.NEAREST_MIPMAP_NEAREST;fi[Wo]=be.NEAREST_MIPMAP_LINEAR;fi[ui]=be.LINEAR;fi[Ic]=be.LINEAR_MIPMAP_NEAREST;fi[ns]=be.LINEAR_MIPMAP_LINEAR;fi[Gi]=be.CLAMP_TO_EDGE;fi[Kc]=be.REPEAT;fi[Qc]=be.MIRRORED_REPEAT;const __={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},qA=new _e,v_=12,YA=1179937895,jA=2,y_=8,ZA=1313821514,KA=5130562;function Yo(r,t){return r.length===t.length&&r.every(function(i,s){return i===t[s]})}function QA(r){return new TextEncoder().encode(r).buffer}function JA(r){return Yo(r.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function $A(r,t,i){const s={min:new Array(r.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(r.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let l=t;l<t+i;l++)for(let c=0;c<r.itemSize;c++){let f;r.itemSize>4?f=r.array[l*r.itemSize+c]:(c===0?f=r.getX(l):c===1?f=r.getY(l):c===2?f=r.getZ(l):c===3&&(f=r.getW(l)),r.normalized===!0&&(f=eu.normalize(f,r.array))),s.min[c]=Math.min(s.min[c],f),s.max[c]=Math.max(s.max[c],f)}return s}function sv(r){return Math.ceil(r/4)*4}function id(r,t=0){const i=sv(r.byteLength);if(i!==r.byteLength){const s=new Uint8Array(i);if(s.set(new Uint8Array(r)),t!==0)for(let l=r.byteLength;l<i;l++)s[l]=t;return s.buffer}return r}function S_(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function t2(r,t){if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas){let i;return t==="image/jpeg"?i=.92:t==="image/webp"&&(i=.8),r.convertToBlob({type:t,quality:i})}else return new Promise(i=>r.toBlob(i,t))}class e2{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+su}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,i,s={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},s),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const l=this,c=l.buffers,f=l.json;s=l.options;const h=l.extensionsUsed,d=l.extensionsRequired,m=new Blob(c,{type:"application/octet-stream"}),g=Object.keys(h),x=Object.keys(d);if(g.length>0&&(f.extensionsUsed=g),x.length>0&&(f.extensionsRequired=x),f.buffers&&f.buffers.length>0&&(f.buffers[0].byteLength=m.size),s.binary===!0){const _=new FileReader;_.readAsArrayBuffer(m),_.onloadend=function(){const v=id(_.result),b=new DataView(new ArrayBuffer(y_));b.setUint32(0,v.byteLength,!0),b.setUint32(4,KA,!0);const E=id(QA(JSON.stringify(f)),32),M=new DataView(new ArrayBuffer(y_));M.setUint32(0,E.byteLength,!0),M.setUint32(4,ZA,!0);const y=new ArrayBuffer(v_),P=new DataView(y);P.setUint32(0,YA,!0),P.setUint32(4,jA,!0);const N=v_+M.byteLength+E.byteLength+b.byteLength+v.byteLength;P.setUint32(8,N,!0);const C=new Blob([y,M,E,b,v],{type:"application/octet-stream"}),z=new FileReader;z.readAsArrayBuffer(C),z.onloadend=function(){i(z.result)}}}else if(f.buffers&&f.buffers.length>0){const _=new FileReader;_.readAsDataURL(m),_.onloadend=function(){const v=_.result;f.buffers[0].uri=v,i(f)}}else i(f)}serializeUserData(t,i){if(Object.keys(t.userData).length===0)return;const s=this.options,l=this.extensionsUsed;try{const c=JSON.parse(JSON.stringify(t.userData));if(s.includeCustomExtensions&&c.gltfExtensions){i.extensions===void 0&&(i.extensions={});for(const f in c.gltfExtensions)i.extensions[f]=c.gltfExtensions[f],l[f]=!0;delete c.gltfExtensions}Object.keys(c).length>0&&(i.extras=c)}catch(c){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+c.message)}}getUID(t,i=!1){if(this.uids.has(t)===!1){const l=new Map;l.set(!0,this.uid++),l.set(!1,this.uid++),this.uids.set(t,l)}return this.uids.get(t).get(i)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const s=new j;for(let l=0,c=t.count;l<c;l++)if(Math.abs(s.fromBufferAttribute(t,l).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const i=this.cache;if(i.attributesNormalized.has(t))return i.attributesNormalized.get(t);const s=t.clone(),l=new j;for(let c=0,f=s.count;c<f;c++)l.fromBufferAttribute(s,c),l.x===0&&l.y===0&&l.z===0?l.setX(1):l.normalize(),s.setXYZ(c,l.x,l.y,l.z);return i.attributesNormalized.set(t,s),s}applyTextureTransform(t,i){let s=!1;const l={};(i.offset.x!==0||i.offset.y!==0)&&(l.offset=i.offset.toArray(),s=!0),i.rotation!==0&&(l.rotation=i.rotation,s=!0),(i.repeat.x!==1||i.repeat.y!==1)&&(l.scale=i.repeat.toArray(),s=!0),s&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=l,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,i){if(t===i)return t;function s(v){return v.colorSpace===ci?function(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}:function(E){return E}}t instanceof Yh&&(t=await this.decompressTextureAsync(t)),i instanceof Yh&&(i=await this.decompressTextureAsync(i));const l=t?t.image:null,c=i?i.image:null,f=Math.max(l?l.width:0,c?c.width:0),h=Math.max(l?l.height:0,c?c.height:0),d=S_();d.width=f,d.height=h;const m=d.getContext("2d",{willReadFrequently:!0});m.fillStyle="#00ffff",m.fillRect(0,0,f,h);const g=m.getImageData(0,0,f,h);if(l){m.drawImage(l,0,0,f,h);const v=s(t),b=m.getImageData(0,0,f,h).data;for(let E=2;E<b.length;E+=4)g.data[E]=v(b[E]/256)*256}if(c){m.drawImage(c,0,0,f,h);const v=s(i),b=m.getImageData(0,0,f,h).data;for(let E=1;E<b.length;E+=4)g.data[E]=v(b[E]/256)*256}m.putImageData(g,0,0);const _=(t||i).clone();return _.source=new ou(d),_.colorSpace=va,_.channel=(t||i).channel,t&&i&&t.channel!==i.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),_}async decompressTextureAsync(t,i=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,i)}processBuffer(t){const i=this.json,s=this.buffers;return i.buffers||(i.buffers=[{byteLength:0}]),s.push(t),0}processBufferView(t,i,s,l,c){const f=this.json;f.bufferViews||(f.bufferViews=[]);let h;switch(i){case be.BYTE:case be.UNSIGNED_BYTE:h=1;break;case be.SHORT:case be.UNSIGNED_SHORT:h=2;break;default:h=4}let d=t.itemSize*h;c===be.ARRAY_BUFFER&&(d=Math.ceil(d/4)*4);const m=sv(l*d),g=new DataView(new ArrayBuffer(m));let x=0;for(let b=s;b<s+l;b++){for(let E=0;E<t.itemSize;E++){let M;t.itemSize>4?M=t.array[b*t.itemSize+E]:(E===0?M=t.getX(b):E===1?M=t.getY(b):E===2?M=t.getZ(b):E===3&&(M=t.getW(b)),t.normalized===!0&&(M=eu.normalize(M,t.array))),i===be.FLOAT?g.setFloat32(x,M,!0):i===be.INT?g.setInt32(x,M,!0):i===be.UNSIGNED_INT?g.setUint32(x,M,!0):i===be.SHORT?g.setInt16(x,M,!0):i===be.UNSIGNED_SHORT?g.setUint16(x,M,!0):i===be.BYTE?g.setInt8(x,M):i===be.UNSIGNED_BYTE&&g.setUint8(x,M),x+=h}x%d!==0&&(x+=d-x%d)}const _={buffer:this.processBuffer(g.buffer),byteOffset:this.byteOffset,byteLength:m};return c!==void 0&&(_.target=c),c===be.ARRAY_BUFFER&&(_.byteStride=d),this.byteOffset+=m,f.bufferViews.push(_),{id:f.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const i=this,s=i.json;return s.bufferViews||(s.bufferViews=[]),new Promise(function(l){const c=new FileReader;c.readAsArrayBuffer(t),c.onloadend=function(){const f=id(c.result),h={buffer:i.processBuffer(f),byteOffset:i.byteOffset,byteLength:f.byteLength};i.byteOffset+=f.byteLength,l(s.bufferViews.push(h)-1)}})}processAccessor(t,i,s,l){const c=this.json,f={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let h;if(t.array.constructor===Float32Array)h=be.FLOAT;else if(t.array.constructor===Int32Array)h=be.INT;else if(t.array.constructor===Uint32Array)h=be.UNSIGNED_INT;else if(t.array.constructor===Int16Array)h=be.SHORT;else if(t.array.constructor===Uint16Array)h=be.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)h=be.BYTE;else if(t.array.constructor===Uint8Array)h=be.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(s===void 0&&(s=0),(l===void 0||l===1/0)&&(l=t.count),l===0)return null;const d=$A(t,s,l);let m;i!==void 0&&(m=t===i.index?be.ELEMENT_ARRAY_BUFFER:be.ARRAY_BUFFER);const g=this.processBufferView(t,h,s,l,m),x={bufferView:g.id,byteOffset:g.byteOffset,componentType:h,count:l,max:d.max,min:d.min,type:f[t.itemSize]};return t.normalized===!0&&(x.normalized=!0),c.accessors||(c.accessors=[]),c.accessors.push(x)-1}processImage(t,i,s,l="image/png"){if(t!==null){const c=this,f=c.cache,h=c.json,d=c.options,m=c.pending;f.images.has(t)||f.images.set(t,{});const g=f.images.get(t),x=l+":flipY/"+s.toString();if(g[x]!==void 0)return g[x];h.images||(h.images=[]);const _={mimeType:l},v=S_();v.width=Math.min(t.width,d.maxTextureSize),v.height=Math.min(t.height,d.maxTextureSize);const b=v.getContext("2d",{willReadFrequently:!0});if(s===!0&&(b.translate(0,v.height),b.scale(1,-1)),t.data!==void 0){i!==Mi&&console.error("GLTFExporter: Only RGBAFormat is supported.",i),(t.width>d.maxTextureSize||t.height>d.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const M=new Uint8ClampedArray(t.height*t.width*4);for(let y=0;y<M.length;y+=4)M[y+0]=t.data[y+0],M[y+1]=t.data[y+1],M[y+2]=t.data[y+2],M[y+3]=t.data[y+3];b.putImageData(new ImageData(M,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)b.drawImage(t,0,0,v.width,v.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");d.binary===!0?m.push(t2(v,l).then(M=>c.processBufferViewImage(M)).then(M=>{_.bufferView=M})):_.uri=F_.getDataURL(v,l);const E=h.images.push(_)-1;return g[x]=E,E}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const i=this.json;i.samplers||(i.samplers=[]);const s={magFilter:fi[t.magFilter],minFilter:fi[t.minFilter],wrapS:fi[t.wrapS],wrapT:fi[t.wrapT]};return i.samplers.push(s)-1}async processTextureAsync(t){const s=this.options,l=this.cache,c=this.json;if(l.textures.has(t))return l.textures.get(t);c.textures||(c.textures=[]),t instanceof Yh&&(t=await this.decompressTextureAsync(t,s.maxTextureSize));let f=t.userData.mimeType;f==="image/webp"&&(f="image/png");const h={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,f)};t.name&&(h.name=t.name),await this._invokeAllAsync(async function(m){m.writeTexture&&await m.writeTexture(t,h)});const d=c.textures.push(h)-1;return l.textures.set(t,d),d}async processMaterialAsync(t){const i=this.cache,s=this.json;if(i.materials.has(t))return i.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);const l={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const c=t.color.toArray().concat([t.opacity]);if(Yo(c,[1,1,1,1])||(l.pbrMetallicRoughness.baseColorFactor=c),t.isMeshStandardMaterial?(l.pbrMetallicRoughness.metallicFactor=t.metalness,l.pbrMetallicRoughness.roughnessFactor=t.roughness):(l.pbrMetallicRoughness.metallicFactor=0,l.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const h=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),d={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(d,h),l.pbrMetallicRoughness.metallicRoughnessTexture=d}if(t.map){const h={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(h,t.map),l.pbrMetallicRoughness.baseColorTexture=h}if(t.emissive){const h=t.emissive;if(Math.max(h.r,h.g,h.b)>0&&(l.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const m={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(m,t.emissiveMap),l.emissiveTexture=m}}if(t.normalMap){const h={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(h.scale=t.normalScale.x),this.applyTextureTransform(h,t.normalMap),l.normalTexture=h}if(t.aoMap){const h={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(h.strength=t.aoMapIntensity),this.applyTextureTransform(h,t.aoMap),l.occlusionTexture=h}t.transparent?l.alphaMode="BLEND":t.alphaTest>0&&(l.alphaMode="MASK",l.alphaCutoff=t.alphaTest),t.side===Hi&&(l.doubleSided=!0),t.name!==""&&(l.name=t.name),this.serializeUserData(t,l),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(t,l)});const f=s.materials.push(l)-1;return i.materials.set(t,f),f}async processMeshAsync(t){const i=this.cache,s=this.json,l=[t.geometry.uuid];if(Array.isArray(t.material))for(let C=0,z=t.material.length;C<z;C++)l.push(t.material[C].uuid);else l.push(t.material.uuid);const c=l.join(":");if(i.meshes.has(c))return i.meshes.get(c);const f=t.geometry;let h;t.isLineSegments?h=be.LINES:t.isLineLoop?h=be.LINE_LOOP:t.isLine?h=be.LINE_STRIP:t.isPoints?h=be.POINTS:h=t.material.wireframe?be.LINES:be.TRIANGLES;const d={},m={},g=[],x=[],_={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},v=f.getAttribute("normal");v!==void 0&&!this.isNormalizedNormalAttribute(v)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),f.setAttribute("normal",this.createNormalizedNormalAttribute(v)));let b=null;for(let C in f.attributes){if(C.slice(0,5)==="morph")continue;const z=f.attributes[C];if(C=_[C]||C.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(C)||(C="_"+C),i.attributes.has(this.getUID(z))){m[C]=i.attributes.get(this.getUID(z));continue}b=null;const L=z.array;C==="JOINTS_0"&&!(L instanceof Uint16Array)&&!(L instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),b=new Rn(new Uint16Array(L),z.itemSize,z.normalized)):(L instanceof Uint32Array||L instanceof Int32Array)&&!C.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${C}" converted to type FLOAT.`),b=au.Utils.toFloat32BufferAttribute(z));const X=this.processAccessor(b||z,f);X!==null&&(C.startsWith("_")||this.detectMeshQuantization(C,z),m[C]=X,i.attributes.set(this.getUID(z),X))}if(v!==void 0&&f.setAttribute("normal",v),Object.keys(m).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const C=[],z=[],U={};if(t.morphTargetDictionary!==void 0)for(const L in t.morphTargetDictionary)U[t.morphTargetDictionary[L]]=L;for(let L=0;L<t.morphTargetInfluences.length;++L){const X={};let D=!1;for(const w in f.morphAttributes){if(w!=="position"&&w!=="normal"){D||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),D=!0);continue}const G=f.morphAttributes[w][L],J=w.toUpperCase(),st=f.attributes[w];if(i.attributes.has(this.getUID(G,!0))){X[J]=i.attributes.get(this.getUID(G,!0));continue}const ft=G.clone();if(!f.morphTargetsRelative)for(let ct=0,B=G.count;ct<B;ct++)for(let Y=0;Y<G.itemSize;Y++)Y===0&&ft.setX(ct,G.getX(ct)-st.getX(ct)),Y===1&&ft.setY(ct,G.getY(ct)-st.getY(ct)),Y===2&&ft.setZ(ct,G.getZ(ct)-st.getZ(ct)),Y===3&&ft.setW(ct,G.getW(ct)-st.getW(ct));X[J]=this.processAccessor(ft,f),i.attributes.set(this.getUID(st,!0),X[J])}x.push(X),C.push(t.morphTargetInfluences[L]),t.morphTargetDictionary!==void 0&&z.push(U[L])}d.weights=C,z.length>0&&(d.extras={},d.extras.targetNames=z)}const E=Array.isArray(t.material);if(E&&f.groups.length===0)return null;let M=!1;if(E&&f.index===null){const C=[];for(let z=0,U=f.attributes.position.count;z<U;z++)C[z]=z;f.setIndex(C),M=!0}const y=E?t.material:[t.material],P=E?f.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let C=0,z=P.length;C<z;C++){const U={mode:h,attributes:m};if(this.serializeUserData(f,U),x.length>0&&(U.targets=x),f.index!==null){let X=this.getUID(f.index);(P[C].start!==void 0||P[C].count!==void 0)&&(X+=":"+P[C].start+":"+P[C].count),i.attributes.has(X)?U.indices=i.attributes.get(X):(U.indices=this.processAccessor(f.index,f,P[C].start,P[C].count),i.attributes.set(X,U.indices)),U.indices===null&&delete U.indices}const L=await this.processMaterialAsync(y[P[C].materialIndex]);L!==null&&(U.material=L),g.push(U)}M===!0&&f.setIndex(null),d.primitives=g,s.meshes||(s.meshes=[]),await this._invokeAllAsync(function(C){C.writeMesh&&C.writeMesh(t,d)});const N=s.meshes.push(d)-1;return i.meshes.set(c,N),N}detectMeshQuantization(t,i){if(this.extensionsUsed[nd])return;let s;switch(i.array.constructor){case Int8Array:s="byte";break;case Uint8Array:s="unsigned byte";break;case Int16Array:s="short";break;case Uint16Array:s="unsigned short";break;default:return}i.normalized&&(s+=" normalized");const l=t.split("_",1)[0];g_[l]&&g_[l].includes(s)&&(this.extensionsUsed[nd]=!0,this.extensionsRequired[nd]=!0)}processCamera(t){const i=this.json;i.cameras||(i.cameras=[]);const s=t.isOrthographicCamera,l={type:s?"orthographic":"perspective"};return s?l.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:l.perspective={aspectRatio:t.aspect,yfov:eu.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(l.name=t.type),i.cameras.push(l)-1}processAnimation(t,i){const s=this.json,l=this.nodeMap;s.animations||(s.animations=[]),t=au.Utils.mergeMorphTargetTracks(t.clone(),i);const c=t.tracks,f=[],h=[];for(let m=0;m<c.length;++m){const g=c[m],x=Pe.parseTrackName(g.name);let _=Pe.findNode(i,x.nodeName);const v=__[x.propertyName];if(x.objectName==="bones"&&(_.isSkinnedMesh===!0?_=_.skeleton.getBoneByName(x.objectIndex):_=void 0),!_||!v){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',g.name);continue}const b=1;let E=g.values.length/g.times.length;v===__.morphTargetInfluences&&(E/=_.morphTargetInfluences.length);let M;g.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(M="CUBICSPLINE",E/=3):g.getInterpolation()===nM?M="STEP":M="LINEAR",h.push({input:this.processAccessor(new Rn(g.times,b)),output:this.processAccessor(new Rn(g.values,E)),interpolation:M}),f.push({sampler:h.length-1,target:{node:l.get(_),path:v}})}const d={name:t.name||"clip_"+s.animations.length,samplers:h,channels:f};return this.serializeUserData(t,d),s.animations.push(d),s.animations.length-1}processSkin(t){const i=this.json,s=this.nodeMap,l=i.nodes[s.get(t)],c=t.skeleton;if(c===void 0)return null;const f=t.skeleton.bones[0];if(f===void 0)return null;const h=[],d=new Float32Array(c.bones.length*16),m=new je;for(let x=0;x<c.bones.length;++x)h.push(s.get(c.bones[x])),m.copy(c.boneInverses[x]),m.multiply(t.bindMatrix).toArray(d,x*16);return i.skins===void 0&&(i.skins=[]),i.skins.push({inverseBindMatrices:this.processAccessor(new Rn(d,16)),joints:h,skeleton:s.get(f)}),l.skin=i.skins.length-1}async processNodeAsync(t){const i=this.json,s=this.options,l=this.nodeMap;i.nodes||(i.nodes=[]);const c={};if(s.trs){const h=t.quaternion.toArray(),d=t.position.toArray(),m=t.scale.toArray();Yo(h,[0,0,0,1])||(c.rotation=h),Yo(d,[0,0,0])||(c.translation=d),Yo(m,[1,1,1])||(c.scale=m)}else t.matrixAutoUpdate&&t.updateMatrix(),JA(t.matrix)===!1&&(c.matrix=t.matrix.elements);if(t.name!==""&&(c.name=String(t.name)),this.serializeUserData(t,c),t.isMesh||t.isLine||t.isPoints){const h=await this.processMeshAsync(t);h!==null&&(c.mesh=h)}else t.isCamera&&(c.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);const f=i.nodes.push(c)-1;if(l.set(t,f),t.children.length>0){const h=[];for(let d=0,m=t.children.length;d<m;d++){const g=t.children[d];if(g.visible||s.onlyVisible===!1){const x=await this.processNodeAsync(g);x!==null&&h.push(x)}}h.length>0&&(c.children=h)}return await this._invokeAllAsync(function(h){h.writeNode&&h.writeNode(t,c)}),f}async processSceneAsync(t){const i=this.json,s=this.options;i.scenes||(i.scenes=[],i.scene=0);const l={};t.name!==""&&(l.name=t.name),i.scenes.push(l);const c=[];for(let f=0,h=t.children.length;f<h;f++){const d=t.children[f];if(d.visible||s.onlyVisible===!1){const m=await this.processNodeAsync(d);m!==null&&c.push(m)}}c.length>0&&(l.nodes=c),this.serializeUserData(t,l)}async processObjectsAsync(t){const i=new Xd;i.name="AuxScene";for(let s=0;s<t.length;s++)i.children.push(t[s]);await this.processSceneAsync(i)}async processInputAsync(t){const i=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(l){l.beforeParse&&l.beforeParse(t)});const s=[];for(let l=0;l<t.length;l++)t[l]instanceof Xd?await this.processSceneAsync(t[l]):s.push(t[l]);s.length>0&&await this.processObjectsAsync(s);for(let l=0;l<this.skins.length;++l)this.processSkin(this.skins[l]);for(let l=0;l<i.animations.length;++l)this.processAnimation(i.animations[l],t[0]);await this._invokeAllAsync(function(l){l.afterParse&&l.afterParse(t)})}async _invokeAllAsync(t){for(let i=0,s=this.plugins.length;i<s;i++)await t(this.plugins[i])}}class n2{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,i){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const s=this.writer,l=s.json,c=s.extensionsUsed,f={};t.name&&(f.name=t.name),f.color=t.color.toArray(),f.intensity=t.intensity,t.isDirectionalLight?f.type="directional":t.isPointLight?(f.type="point",t.distance>0&&(f.range=t.distance)):t.isSpotLight&&(f.type="spot",t.distance>0&&(f.range=t.distance),f.spot={},f.spot.innerConeAngle=(1-t.penumbra)*t.angle,f.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),c[this.name]||(l.extensions=l.extensions||{},l.extensions[this.name]={lights:[]},c[this.name]=!0);const h=l.extensions[this.name].lights;h.push(f),i.extensions=i.extensions||{},i.extensions[this.name]={light:h.length-1}}}class i2{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,i){if(!t.isMeshBasicMaterial)return;const l=this.writer.extensionsUsed;i.extensions=i.extensions||{},i.extensions[this.name]={},l[this.name]=!0,i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=.9}}class a2{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const s=this.writer,l=s.extensionsUsed,c={};if(c.clearcoatFactor=t.clearcoat,t.clearcoatMap){const f={index:await s.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};s.applyTextureTransform(f,t.clearcoatMap),c.clearcoatTexture=f}if(c.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const f={index:await s.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};s.applyTextureTransform(f,t.clearcoatRoughnessMap),c.clearcoatRoughnessTexture=f}if(t.clearcoatNormalMap){const f={index:await s.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(f.scale=t.clearcoatNormalScale.x),s.applyTextureTransform(f,t.clearcoatNormalMap),c.clearcoatNormalTexture=f}i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class s2{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const l=this.writer.extensionsUsed,c={};c.dispersion=t.dispersion,i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class r2{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const s=this.writer,l=s.extensionsUsed,c={};if(c.iridescenceFactor=t.iridescence,t.iridescenceMap){const f={index:await s.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};s.applyTextureTransform(f,t.iridescenceMap),c.iridescenceTexture=f}if(c.iridescenceIor=t.iridescenceIOR,c.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const f={index:await s.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};s.applyTextureTransform(f,t.iridescenceThicknessMap),c.iridescenceThicknessTexture=f}i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class o2{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const s=this.writer,l=s.extensionsUsed,c={};if(c.transmissionFactor=t.transmission,t.transmissionMap){const f={index:await s.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};s.applyTextureTransform(f,t.transmissionMap),c.transmissionTexture=f}i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class l2{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const s=this.writer,l=s.extensionsUsed,c={};if(c.thicknessFactor=t.thickness,t.thicknessMap){const f={index:await s.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};s.applyTextureTransform(f,t.thicknessMap),c.thicknessTexture=f}t.attenuationDistance!==1/0&&(c.attenuationDistance=t.attenuationDistance),c.attenuationColor=t.attenuationColor.toArray(),i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class c2{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const l=this.writer.extensionsUsed,c={};c.ior=t.ior,i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class u2{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(qA)&&!t.specularIntensityMap&&!t.specularColorMap)return;const s=this.writer,l=s.extensionsUsed,c={};if(t.specularIntensityMap){const f={index:await s.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};s.applyTextureTransform(f,t.specularIntensityMap),c.specularTexture=f}if(t.specularColorMap){const f={index:await s.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};s.applyTextureTransform(f,t.specularColorMap),c.specularColorTexture=f}c.specularFactor=t.specularIntensity,c.specularColorFactor=t.specularColor.toArray(),i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class f2{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const s=this.writer,l=s.extensionsUsed,c={};if(t.sheenRoughnessMap){const f={index:await s.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};s.applyTextureTransform(f,t.sheenRoughnessMap),c.sheenRoughnessTexture=f}if(t.sheenColorMap){const f={index:await s.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};s.applyTextureTransform(f,t.sheenColorMap),c.sheenColorTexture=f}c.sheenRoughnessFactor=t.sheenRoughness,c.sheenColorFactor=t.sheenColor.toArray(),i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class h2{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,i){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const s=this.writer,l=s.extensionsUsed,c={};if(t.anisotropyMap){const f={index:await s.processTextureAsync(t.anisotropyMap)};s.applyTextureTransform(f,t.anisotropyMap),c.anisotropyTexture=f}c.anisotropyStrength=t.anisotropy,c.anisotropyRotation=t.anisotropyRotation,i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class d2{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,i){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const l=this.writer.extensionsUsed,c={};c.emissiveStrength=t.emissiveIntensity,i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class p2{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,i){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const s=this.writer,l=s.extensionsUsed,c={};if(t.bumpMap){const f={index:await s.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};s.applyTextureTransform(f,t.bumpMap),c.bumpTexture=f}c.bumpFactor=t.bumpScale,i.extensions=i.extensions||{},i.extensions[this.name]=c,l[this.name]=!0}}class m2{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,i){if(!t.isInstancedMesh)return;const s=this.writer,l=t,c=new Float32Array(l.count*3),f=new Float32Array(l.count*4),h=new Float32Array(l.count*3),d=new je,m=new j,g=new Xi,x=new j;for(let v=0;v<l.count;v++)l.getMatrixAt(v,d),d.decompose(m,g,x),m.toArray(c,v*3),g.toArray(f,v*4),x.toArray(h,v*3);const _={TRANSLATION:s.processAccessor(new Rn(c,3)),ROTATION:s.processAccessor(new Rn(f,4)),SCALE:s.processAccessor(new Rn(h,3))};l.instanceColor&&(_._COLOR_0=s.processAccessor(l.instanceColor)),i.extensions=i.extensions||{},i.extensions[this.name]={attributes:_},s.extensionsUsed[this.name]=!0,s.extensionsRequired[this.name]=!0}}au.Utils={insertKeyframe:function(r,t){const s=r.getValueSize(),l=new r.TimeBufferType(r.times.length+1),c=new r.ValueBufferType(r.values.length+s),f=r.createInterpolant(new r.ValueBufferType(s));let h;if(r.times.length===0){l[0]=t;for(let d=0;d<s;d++)c[d]=0;h=0}else if(t<r.times[0]){if(Math.abs(r.times[0]-t)<.001)return 0;l[0]=t,l.set(r.times,1),c.set(f.evaluate(t),0),c.set(r.values,s),h=0}else if(t>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-t)<.001)return r.times.length-1;l[l.length-1]=t,l.set(r.times,0),c.set(r.values,0),c.set(f.evaluate(t),r.values.length),h=l.length-1}else for(let d=0;d<r.times.length;d++){if(Math.abs(r.times[d]-t)<.001)return d;if(r.times[d]<t&&r.times[d+1]>t){l.set(r.times.slice(0,d+1),0),l[d+1]=t,l.set(r.times.slice(d+1),d+2),c.set(r.values.slice(0,(d+1)*s),0),c.set(f.evaluate(t),(d+1)*s),c.set(r.values.slice((d+1)*s),(d+2)*s),h=d+1;break}}return r.times=l,r.values=c,h},mergeMorphTargetTracks:function(r,t){const i=[],s={},l=r.tracks;for(let c=0;c<l.length;++c){let f=l[c];const h=Pe.parseTrackName(f.name),d=Pe.findNode(t,h.nodeName);if(h.propertyName!=="morphTargetInfluences"||h.propertyIndex===void 0){i.push(f);continue}if(f.createInterpolant!==f.InterpolantFactoryMethodDiscrete&&f.createInterpolant!==f.InterpolantFactoryMethodLinear){if(f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),f=f.clone(),f.setInterpolation(iM)}const m=d.morphTargetInfluences.length,g=d.morphTargetDictionary[h.propertyIndex];if(g===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+h.propertyIndex);let x;if(s[d.uuid]===void 0){x=f.clone();const v=new x.ValueBufferType(m*x.times.length);for(let b=0;b<x.times.length;b++)v[b*m+g]=x.values[b];x.name=(h.nodeName||"")+".morphTargetInfluences",x.values=v,s[d.uuid]=x,i.push(x);continue}const _=f.createInterpolant(new f.ValueBufferType(1));x=s[d.uuid];for(let v=0;v<x.times.length;v++)x.values[v*m+g]=_.evaluate(x.times[v]);for(let v=0;v<f.times.length;v++){const b=this.insertKeyframe(x,f.times[v]);x.values[b*m+g]=f.values[v]}}return r.tracks=i,r},toFloat32BufferAttribute:function(r){const t=new Rn(new Float32Array(r.count*r.itemSize),r.itemSize,!1);if(!r.normalized&&!r.isInterleavedBufferAttribute)return t.array.set(r.array),t;for(let i=0,s=r.count;i<s;i++)for(let l=0;l<r.itemSize;l++)t.setComponent(i,l,r.getComponent(i,l));return t}};const Di=1e-4,x2=new lp({color:4542564,roughness:.65,metalness:.05}),g2=new lp({color:4105983,roughness:.4,metalness:.1}),hp=.4,dp=.2,rv=.2,M_=hp/2,ad=dp/2,zc=rv/2,ov=[{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}];function lv(r=0,t=0,i=0,s=0,l=0,c=ov){const f=Math.max(-M_,Math.min(M_,r)),h=y=>Math.max(-ad,Math.min(ad,y*ad)),d=h(t),m=h(s),g=new Vr(hp,dp,rv),x=i*Math.PI/180,_=l*Math.PI/180,v=new j(f,d,zc).applyAxisAngle(new j(0,0,1),x),b=new j(f,d,-zc).applyAxisAngle(new j(0,0,1),x),E=new j(f,m,zc).applyAxisAngle(new j(0,0,1),_),M=new j(f,m,-zc).applyAxisAngle(new j(0,0,1),_);return{id:"brick",geometry:g,anchorPrimary:{x:f,y:d,rotDeg:i},anchorSecondary:{x:f,y:m,rotDeg:l},sockets:[{id:"top-stack-A",position:v,normal:new j(0,0,1),type:"stackA-top"},{id:"bottom-stack-A",position:b,normal:new j(0,0,-1),type:"stackA-bottom"},{id:"top-stack-B",position:E,normal:new j(0,0,1),type:"stackB-top"},{id:"bottom-stack-B",position:M,normal:new j(0,0,-1),type:"stackB-bottom"}]}}const _2=lv(.5,0,0,1,0,ov),qd=[{id:"stack-anchor-offset-a",from:"stackA-top",to:"stackA-bottom",weight:.5},{id:"stack-anchor-offset-b",from:"stackB-top",to:"stackB-bottom",weight:.5}],cv={"stackA-top":[{to:"stackA-bottom",weight:.5,anchor:"A",id:"stack-anchor-offset-a"},{to:"stackB-bottom",weight:.5,anchor:"B",id:"stack-anchor-offset-b"}],"stackB-top":[{to:"stackB-bottom",weight:.5,anchor:"B",id:"stack-anchor-offset-b"},{to:"stackA-bottom",weight:.5,anchor:"A",id:"stack-anchor-offset-a"}],"stackA-bottom":[{to:"stackA-top",weight:.5,anchor:"A",id:"stack-anchor-offset-a"},{to:"stackB-top",weight:.5,anchor:"B",id:"stack-anchor-offset-b"}],"stackB-bottom":[{to:"stackB-top",weight:.5,anchor:"B",id:"stack-anchor-offset-b"},{to:"stackA-top",weight:.5,anchor:"A",id:"stack-anchor-offset-a"}],"stackC-top":[],"stackC-bottom":[]};new rs;new rs;const v2=new he;new j;const y2=new Xi;function S2(r,t){return!(r.max.x<=t.min.x+Di||r.min.x>=t.max.x-Di||r.max.y<=t.min.y+Di||r.min.y>=t.max.y-Di||r.max.z<=t.min.z+Di||r.min.z>=t.max.z-Di)}function M2(r,t){const i=r.reduce((c,f)=>c+(f.weight||1),0),s=t()*i;let l=0;for(const c of r)if(l+=c.weight||1,s<=l)return c;return r[r.length-1]||null}function b2(r,t){const i=r.position.clone().applyMatrix4(t),s=v2.getNormalMatrix(t),l=r.normal.clone().applyMatrix3(s).normalize();return{...r,worldPosition:i,worldNormal:l}}class E2{constructor({moduleDef:t=_2,rules:i=qd,compatibility:s=cv,seed:l="demo",collisionMargin:c=0}={}){this.moduleDef=t,this.rules=i,this.compatibility=s,this.collisionMargin=Math.min(.1,Math.max(-.05,c));const f=this.moduleDef.sockets?.[0];this.anchorA={x:this.moduleDef.anchorPrimary?.x??f?.position?.x??0,y:this.moduleDef.anchorPrimary?.y??f?.position?.y??0,rotDeg:this.moduleDef.anchorPrimary?.rotDeg??0},this.anchorB={x:this.moduleDef.anchorSecondary?.x??f?.position?.x??0,y:this.moduleDef.anchorSecondary?.y??0,rotDeg:this.moduleDef.anchorSecondary?.rotDeg??0},this.setSeed(l),this.instances=[],this.openSockets=[],this.group=null,this.gizmoGroup=null,this.moduleDef.geometry.computeBoundingBox(),this.baseBoundingBox=this.moduleDef.geometry.boundingBox.clone(),this.moduleHalfHeight=(this.baseBoundingBox.max.z-this.baseBoundingBox.min.z)/2}bindGroup(t){this.group=t}bindGizmos(t){this.gizmoGroup=t}setSeed(t){this.seed=t,this.rng=WA(t||"demo")}clear(){this.instances=[],this.openSockets=[],this.group&&this.group.clear(),this.gizmoGroup&&this.gizmoGroup.clear()}buildBaseGrid(t=4,i=3,s=hp*1.05,l=dp*1.05,c=0){if(!this.group)throw new Error("Group not bound");const f=(t-1)*s/2,h=(i-1)*l/2;let d=0;for(let m=0;m<t;m++)for(let g=0;g<i;g++){const x=m*s-f,_=g*l-h,v=c+this.moduleHalfHeight,b=new je().makeTranslation(x,_,v);this.addInstance(b,{isBase:!0,name:`base-${d++}`})}}addInstance(t,{isBase:i=!1,name:s="",skipSocketId:l=null}={}){const c=new Ni(this.moduleDef.geometry,i?x2:g2);c.matrixAutoUpdate=!1,c.castShadow=!0,c.receiveShadow=!0,c.matrix.copy(t),c.name=s||`inst-${this.instances.length}`,this.group.add(c);const f=this.baseBoundingBox.clone().applyMatrix4(t),d=this.moduleDef.sockets.filter(g=>l?g.id!==l:!0).map(g=>b2(g,t)).filter(g=>g.worldNormal.z>.4),m=c.name;if(this.instances.push({id:m,matrix:t,bbox:f,mesh:c,isBase:i}),this.gizmoGroup){const g=new op(.02,12,12),x={"stackA-top":16749645,"stackA-bottom":16749645,"stackB-top":9369599,"stackB-bottom":9369599};d.forEach(_=>{const v=new ap({color:x[_.type]||16777215}),b=new Ni(g,v);b.position.copy(_.worldPosition),this.gizmoGroup.add(b)})}for(const g of d)this.openSockets.push({...g,instanceId:m})}pickRuleForType(t){const i=this.compatibility[t];return!i||!i.length?null:M2(i,this.rng)}tryAttach(t,i=16){const s=this.openSockets[t];if(!s)return!1;const l=this.pickRuleForType(s.type);if(!l)return this.openSockets.splice(t,1),!1;const c=this.moduleDef.sockets.filter(f=>f.type===l.to);if(!c.length)return this.openSockets.splice(t,1),!1;for(let f=0;f<i;f++){const h=c[Math.floor(this.rng()*c.length)],d=s.worldNormal.clone().multiplyScalar(-1).normalize(),m=y2.setFromUnitVectors(h.normal,d),g=[0,Math.PI/2,-Math.PI/2],x=g[Math.floor(this.rng()*g.length)],_=new Xi().setFromAxisAngle(d,x),v=m.clone().multiply(_),b=h.position.clone().applyQuaternion(v),E=s.worldPosition.clone().sub(b);if(l.anchor==="A"||l.anchor==="B"){const N=l.anchor==="A"?this.anchorA:this.anchorB,C=new j(1,0,0).applyQuaternion(v).normalize(),z=new j(0,1,0).applyQuaternion(v).normalize(),U=C.multiplyScalar(N.x),L=Math.abs(N.y)>1e-4?z.multiplyScalar(N.y):new j(0,0,0);E.add(U).add(L)}const M=new je().compose(E,v,new j(1,1,1)),y=this.baseBoundingBox.clone().applyMatrix4(M).expandByScalar(this.collisionMargin);if(y.min.z<0)return this.openSockets.splice(t,1),!1;let P=!1;for(const N of this.instances)if(S2(y,N.bbox)){P=!0;break}if(!P)return this.openSockets.splice(t,1),this.addInstance(M,{isBase:!1,skipSocketId:h.id}),!0}return this.openSockets.splice(t,1),!1}aggregate({count:t=40,maxAttemptsPerSocket:i=48,verticalBias:s=.85}={}){let l=0;for(;l<t&&this.openSockets.length>0;){const c=[],f=[];this.openSockets.forEach((m,g)=>{m.worldNormal.z>.5?c.push(g):f.push(g)});let h;c.length&&f.length?this.rng()<s?h=c[Math.floor(this.rng()*c.length)]:h=f[Math.floor(this.rng()*f.length)]:h=Math.floor(this.rng()*this.openSockets.length),this.tryAttach(h,i)&&(l+=1)}return{placed:l,remainingSockets:this.openSockets.length,totalInstances:this.instances.length}}settleInstances(t=!1){if(!t)return;const i=(f,h)=>!(f.max.x<=h.min.x+Di||f.min.x>=h.max.x-Di||f.max.y<=h.min.y+Di||f.min.y>=h.max.y-Di),s=this.instances.filter(f=>f.isBase).map(f=>({bbox:f.bbox.clone()})),l=this.instances.filter(f=>!f.isBase).sort((f,h)=>f.bbox.min.z-h.bbox.min.z),c=[...s];for(const f of l){let h=this.baseBoundingBox.clone().applyMatrix4(f.matrix),d=0;for(const g of c)i(h,g.bbox)&&(d=Math.max(d,g.bbox.max.z));const m=d-h.min.z;Math.abs(m)>Di&&(f.matrix=f.matrix.clone(),f.matrix.elements[14]+=m,f.mesh.matrix.copy(f.matrix),f.mesh.updateMatrixWorld(!0),h.translate(new j(0,0,m))),f.bbox=h,c.push({bbox:h})}}}function T2(r,t){const i=new au,s=r.clone(!0);s.updateMatrixWorld(!0);const l=new je().makeScale(.1,.1,.1),c=new je().makeRotationX(-Math.PI/2);return s.applyMatrix4(l),s.applyMatrix4(c),s.updateMatrixWorld(!0),new Promise((f,h)=>{i.parse(s,d=>{if(d instanceof ArrayBuffer)f(new Blob([d],{type:"model/gltf-binary"}));else{const m=JSON.stringify(d);f(new Blob([m],{type:"model/gltf+json"}))}},d=>h(d),{binary:!0},d=>t?.(d))})}const b_="#0b1620";function A2(){const r=nn.useRef(null),t=nn.useRef(null),i=nn.useRef(null),s=nn.useRef(null),l=nn.useRef(null),c=nn.useRef(null),f=nn.useRef(null),h=nn.useRef(null),[d,m]=nn.useState("6148"),[g,x]=nn.useState(6148),[_,v]=nn.useState(40),[b,E]=nn.useState(4),[M,y]=nn.useState(3),[P,N]=nn.useState(.4),[C,z]=nn.useState(.4),[U,L]=nn.useState(0),[X,D]=nn.useState(!1),[w,G]=nn.useState(.3),[J,st]=nn.useState(0),[ft,ct]=nn.useState(0),[B,Y]=nn.useState({placed:0,instances:0,open:0}),[Z,vt]=nn.useState(!1),yt=(it=d,pt=_)=>{const Et=c.current,Q=f.current;if(!Et||!Q)return;Et.clear(),Q.clear();const rt=0,At=J,Dt=ft,It=-ft,te=lv(w,rt,Dt,At,It),ve=new E2({moduleDef:te,rules:qd,compatibility:cv,seed:it,collisionMargin:U});ve.bindGroup(Et),ve.bindGizmos(Q),h.current=ve;const re=Math.max(1,Number.isFinite(b)?b:4),ye=Math.max(1,Number.isFinite(M)?M:3),H=Math.max(.4,Number.isFinite(P)?P:.4),oe=Math.max(.4,Number.isFinite(C)?C:.4);ve.buildBaseGrid(re,ye,H,oe,0);const ue=ve.aggregate({count:pt});ve.settleInstances(X),Y({placed:ue.placed,instances:ve.instances.length,open:ve.openSockets.length}),I()},I=()=>{const it=c.current,pt=i.current,Et=s.current;if(!it||!pt||!Et)return;const Q=new rs().setFromObject(it);if(Q.isEmpty())return;const rt=Q.getSize(new j),At=Q.getCenter(new j),Dt=Math.max(rt.x,rt.y,rt.z),It=pt.fov*Math.PI/360,te=Dt/2/Math.tan(It),ve=te*1.2;pt.position.copy(At.clone().add(new j(ve,ve,ve*.8))),pt.near=Math.max(.01,te/100),pt.far=Math.max(pt.far,te*10+Dt),pt.updateProjectionMatrix(),Et.target.copy(At),Et.update()};nn.useEffect(()=>{h.current&&(h.current.settleInstances(X),I())},[X]),nn.useEffect(()=>{const it=r.current,pt=new Xd;pt.background=new _e(b_),pt.fog=new sp(b_,35,120),l.current=pt;const Et=new fA({antialias:!0,alpha:!1});Et.setSize(it.clientWidth,it.clientHeight),Et.setPixelRatio(Math.min(window.devicePixelRatio,2)),Et.shadowMap.enabled=!0,Et.shadowMap.type=T_,it.appendChild(Et.domElement),t.current=Et;const Q=new Si(55,it.clientWidth/it.clientHeight,.1,200);Q.position.set(12,12,14),Q.up.set(0,0,1),i.current=Q;const rt=new dA(Q,Et.domElement);rt.enableDamping=!0,rt.target.set(0,0,3),rt.update(),s.current=rt;const At=new cb(13099007,724759,.55);pt.add(At);const Dt=new hb(16777215,.9);Dt.position.set(18,12,22),Dt.castShadow=!0,Dt.shadow.mapSize.set(1024,1024),Dt.shadow.camera.left=-30,Dt.shadow.camera.right=30,Dt.shadow.camera.top=30,Dt.shadow.camera.bottom=-30,pt.add(Dt);const It=new Ni(new nl(80,80),new lp({color:989219,roughness:.9,metalness:0}));It.receiveShadow=!0,It.rotation.x=0,It.rotation.y=0,It.position.z=0,pt.add(It);const te=new bb(80,80,2964818,1450549);te.rotation.x=Math.PI/2,te.position.z=.001,pt.add(te);const ve=new Dr;c.current=ve,pt.add(ve);const re=new Dr;f.current=re,pt.add(re),yt(d,_);const ye=()=>{if(!t.current||!i.current)return;const{clientWidth:ue,clientHeight:De}=it;t.current.setSize(ue,De),i.current.aspect=ue/De,i.current.updateProjectionMatrix()};window.addEventListener("resize",ye);let H;const oe=()=>{H=requestAnimationFrame(oe),rt.update(),Et.render(pt,Q)};return oe(),()=>{cancelAnimationFrame(H),window.removeEventListener("resize",ye),Et.dispose(),rt.dispose(),Et.domElement.parentElement&&Et.domElement.parentElement.removeChild(Et.domElement)}},[]);const ot=async()=>{if(c.current){vt(!0);try{const it=await T2(c.current),pt=URL.createObjectURL(it),Et=document.createElement("a");Et.href=pt;const Q=new Date,rt=Dt=>String(Dt).padStart(2,"0"),At=`${Q.getFullYear()}${rt(Q.getMonth()+1)}${rt(Q.getDate())}-${rt(Q.getHours())}${rt(Q.getMinutes())}${rt(Q.getSeconds())}`;Et.download=`aggregation-${At}.glb`,Et.click(),URL.revokeObjectURL(pt)}catch(it){console.error("Export failed",it)}finally{vt(!1)}}};return zt.jsxs("div",{className:"app",children:[zt.jsx("div",{className:"viewport",ref:r}),zt.jsxs("div",{className:"hud",children:[zt.jsx("h1",{children:"aggregation - rule aggregation"}),zt.jsxs("div",{className:"section",children:[zt.jsx("div",{className:"label",children:"Seed"}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{value:d,onChange:it=>{const pt=it.target.value;m(pt);const Et=Number(pt);Number.isNaN(Et)||x(Et)}}),zt.jsx("button",{onClick:()=>{const it=String(Math.floor(Math.random()*1e4));m(it),x(Number(it)),yt(it,_)},className:"primary",children:"Regenerate"})]}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{type:"range",min:"0",max:"9999",step:"1",value:g,onChange:it=>{const pt=Number(it.target.value);x(pt),m(String(pt))}}),zt.jsxs("div",{className:"chip",children:["seed: ",g]})]}),zt.jsx("div",{className:"label",children:"Connection anchor (herringbone)"}),zt.jsxs("div",{className:"anchor-row",children:[zt.jsxs("div",{className:"anchor-rect",children:[zt.jsx("div",{className:"anchor-line anchor-line-a",style:{left:`${50+w/1*50}%`,transform:`rotate(${ft}deg)`}}),zt.jsx("div",{className:"anchor-line anchor-line-b",style:{top:`${50-J*50}%`,transform:`translate(-50%, -50%) rotate(${-ft}deg)`,left:`${50+w/1*50}%`}})]}),zt.jsx("input",{type:"range",min:"-1",max:"1",step:"0.05",value:w,onChange:it=>G(parseFloat(it.target.value||"0"))}),zt.jsxs("div",{className:"chip",children:[w.toFixed(2)," u"]})]}),zt.jsx("div",{className:"label",children:"Vertical anchor offset (B)"}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{type:"range",min:"-1",max:"1",step:"0.05",value:J,onChange:it=>st(parseFloat(it.target.value||"0"))}),zt.jsxs("div",{className:"chip",children:["Y: ",J.toFixed(2)]})]}),zt.jsx("div",{className:"label",children:"Herringbone angle"}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{type:"range",min:"0",max:"90",step:"1",value:ft,onChange:it=>ct(parseFloat(it.target.value||"0"))}),zt.jsxs("div",{className:"chip",children:[ft.toFixed(0)," deg / ",(-ft).toFixed(0)," deg"]})]}),zt.jsx("div",{className:"label",children:"Iterations (modules)"}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{type:"number",min:"1",max:"200",value:_,onChange:it=>v(parseInt(it.target.value||"0",10))}),zt.jsx("button",{onClick:()=>yt(d,_),children:"Run"})]})]}),zt.jsxs("div",{className:"section",children:[zt.jsx("div",{className:"label",children:"Base grid"}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{type:"number",min:"1",max:"12",value:b,onChange:it=>E(parseInt(it.target.value||"0",10)),placeholder:"Cols"}),zt.jsx("input",{type:"number",min:"1",max:"12",value:M,onChange:it=>y(parseInt(it.target.value||"0",10)),placeholder:"Rows"})]}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{type:"number",step:"0.05",min:"0.4",max:"5",value:P,onChange:it=>N(parseFloat(it.target.value||"0")),placeholder:"Spacing X"}),zt.jsx("input",{type:"number",step:"0.05",min:"0.4",max:"5",value:C,onChange:it=>z(parseFloat(it.target.value||"0")),placeholder:"Spacing Y"})]})]}),zt.jsxs("div",{className:"section",children:[zt.jsx("div",{className:"label",children:"Collision margin"}),zt.jsxs("div",{className:"row",children:[zt.jsx("input",{type:"range",min:"-0.05",max:"0.1",step:"0.001",value:U,onChange:it=>L(parseFloat(it.target.value||"0"))}),zt.jsx("input",{type:"number",step:"0.001",min:"-0.05",max:"0.1",value:U,onChange:it=>L(parseFloat(it.target.value||"0")),style:{width:"90px"}}),zt.jsxs("div",{className:"chip",children:[U.toFixed(3)," u"]})]}),zt.jsx("p",{className:"note",children:"Adjust clearance per brick; negative values shrink the collision box for a more relaxed fit."})]}),zt.jsxs("div",{className:"section",children:[zt.jsx("div",{className:"label",children:"Physics"}),zt.jsx("div",{className:"row",children:zt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[zt.jsx("input",{type:"checkbox",checked:X,onChange:it=>D(it.target.checked)}),"Enable settle (drop bricks onto supports)"]})}),zt.jsx("p",{className:"note",children:"Drops non-base bricks straight down until they rest on the ground or supporting boxes."})]}),zt.jsxs("div",{className:"section",children:[zt.jsx("div",{className:"label",children:"Rules (from -> to)"}),qd.map(it=>zt.jsxs("div",{className:"rule",children:[zt.jsxs("span",{children:[it.from," -> ",it.to]}),zt.jsxs("span",{children:[Math.round((it.weight||1)*100),"%"]})]},it.id)),zt.jsx("p",{className:"note",children:"Vertical stacking: anchor-based offsets only (anchors act as control points). Anchors: long-side shift, two diagonals across the face (A/B) with independent rotations. Base grid size/spacing is adjustable; seed + regenerate to explore."})]}),zt.jsxs("div",{className:"section",children:[zt.jsx("div",{className:"label",children:"Stats"}),zt.jsxs("div",{className:"stats",children:[zt.jsxs("div",{className:"chip",children:["Placed: ",B.placed]}),zt.jsxs("div",{className:"chip",children:["Instances: ",B.instances]}),zt.jsxs("div",{className:"chip",children:["Open sockets: ",B.open]}),zt.jsxs("div",{className:"chip",children:["Seed: ",d]})]})]}),zt.jsxs("div",{className:"section",children:[zt.jsx("button",{onClick:ot,disabled:Z,className:"primary",children:Z?"Exporting...":"Export GLB"}),zt.jsx("p",{className:"note",children:"Exports the current aggregation (base + generated modules) as a GLB file."})]})]})]})}AS.createRoot(document.getElementById("root")).render(zt.jsx(_S.StrictMode,{children:zt.jsx(A2,{})}));

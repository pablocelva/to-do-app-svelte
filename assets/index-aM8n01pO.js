(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();const At=!1;var be=Array.isArray,Te=Array.from,St=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptors,Dt=Object.getPrototypeOf;function Lt(e){return e()}function he(e){for(var t=0;t<e.length;t++)e[t]()}const D=2,Ke=4,G=8,ke=16,x=32,X=64,F=128,te=256,m=512,P=1024,z=2048,C=4096,J=8192,Nt=16384,Ge=32768,It=65536,Pt=1<<18,Xe=1<<19,Re=Symbol("$state");function ze(e){return e===this.v}function Rt(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Je(e){return!Rt(e,this.v)}function qt(e){throw new Error("effect_in_teardown")}function Ft(){throw new Error("effect_in_unowned_derived")}function Mt(e){throw new Error("effect_orphan")}function $t(){throw new Error("effect_update_depth_exceeded")}function Vt(e){throw new Error("props_invalid_value")}function Bt(){throw new Error("state_unsafe_local_read")}function Ht(){throw new Error("state_unsafe_mutation")}function ne(e){return{f:0,v:e,reactions:null,equals:ze,version:0}}function Qe(e,t=!1){var r;const n=ne(e);return t||(n.equals=Je),g!==null&&g.l!==null&&((r=g.l).s??(r.s=[])).push(n),n}function Ze(e,t=!1){return Ut(Qe(e,t))}function Ut(e){return h!==null&&h.f&D&&(A===null?cn([e]):A.push(e)),e}function Y(e,t){return h!==null&&oe()&&h.f&(D|ke)&&(A===null||!A.includes(e))&&Ht(),et(e,t)}function et(e,t){return e.equals(t)||(e.v=t,e.version=mt(),tt(e,P),oe()&&p!==null&&p.f&m&&!(p.f&x)&&(w!==null&&w.includes(e)?(O(p,P),ie(p)):I===null?_n([e]):I.push(e))),t}function tt(e,t){var n=e.reactions;if(n!==null)for(var r=oe(),l=n.length,o=0;o<l;o++){var u=n[o],i=u.f;i&P||!r&&u===p||(O(u,t),i&(m|F)&&(i&D?tt(u,z):ie(u)))}}const jt=1,Yt=2,Wt=16,Kt=1,Gt=2,Xt=2;let zt=!1;var qe,nt,rt;function Jt(){if(qe===void 0){qe=window;var e=Element.prototype,t=Node.prototype;nt=pe(t,"firstChild").get,rt=pe(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function lt(e=""){return document.createTextNode(e)}function ot(e){return nt.call(e)}function xe(e){return rt.call(e)}function Ce(e,t){return ot(e)}function re(e,t=1,n=!1){let r=e;for(;t--;)r=xe(r);return r}function Qt(e){e.textContent=""}function Ae(e){var t=D|P;p===null?t|=F:p.f|=Xe;const n={children:null,ctx:g,deps:null,equals:ze,f:t,fn:e,reactions:null,v:null,version:0,parent:p};if(h!==null&&h.f&D){var r=h;(r.children??(r.children=[])).push(n)}return n}function Zt(e){const t=Ae(e);return t.equals=Je,t}function ut(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&D?Se(r):M(r)}}}function it(e){var t,n=p;S(e.parent);try{ut(e),t=bt(e)}finally{S(n)}return t}function ft(e){var t=it(e),n=(B||e.f&F)&&e.deps!==null?z:m;O(e,n),e.equals(t)||(e.v=t,e.version=mt())}function Se(e){ut(e),K(e,0),O(e,J),e.v=e.children=e.deps=e.ctx=e.reactions=null}function st(e){p===null&&h===null&&Mt(),h!==null&&h.f&F&&Ft(),Le&&qt()}function en(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function U(e,t,n,r=!0){var l=(e&X)!==0,o=p,u={ctx:g,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|P,first:null,fn:t,last:null,next:null,parent:l?null:o,prev:null,teardown:null,transitions:null,version:0};if(n){var i=H;try{Me(!0),ue(u),u.f|=Nt}catch(f){throw M(u),f}finally{Me(i)}}else t!==null&&ie(u);var s=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Xe)===0;if(!s&&!l&&r&&(o!==null&&en(u,o),h!==null&&h.f&D)){var a=h;(a.children??(a.children=[])).push(u)}return u}function tn(e){const t=U(G,null,!1);return O(t,m),t.teardown=e,t}function Fe(e){st();var t=p!==null&&(p.f&x)!==0&&g!==null&&!g.m;if(t){var n=g;(n.e??(n.e=[])).push({fn:e,effect:p,reaction:h})}else{var r=at(e);return r}}function nn(e){return st(),ct(e)}function rn(e){const t=U(X,e,!0);return()=>{M(t)}}function at(e){return U(Ke,e,!1)}function ct(e){return U(G,e,!0)}function ln(e){return _t(e)}function _t(e,t=0){return U(G|ke|t,e,!0)}function Oe(e,t=!0){return U(G|x,e,!0,t)}function vt(e){var t=e.teardown;if(t!==null){const n=Le,r=h;$e(!0),R(null);try{t.call(null)}finally{$e(n),R(r)}}}function dt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)Se(t[n])}}function pt(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;M(n,t),n=r}}function on(e){for(var t=e.first;t!==null;){var n=t.next;t.f&x||M(t),t=n}}function M(e,t=!0){var n=!1;if((t||e.f&Pt)&&e.nodes_start!==null){for(var r=e.nodes_start,l=e.nodes_end;r!==null;){var o=r===l?null:xe(r);r.remove(),r=o}n=!0}pt(e,t&&!n),dt(e),K(e,0),O(e,J);var u=e.transitions;if(u!==null)for(const s of u)s.stop();vt(e);var i=e.parent;i!==null&&i.first!==null&&ht(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function ht(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function un(e,t){var n=[];De(e,n,!0),gt(n,()=>{M(e),t&&t()})}function gt(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var l of e)l.out(r)}else t()}function De(e,t,n){if(!(e.f&C)){if(e.f^=C,e.transitions!==null)for(const u of e.transitions)(u.is_global||n)&&t.push(u);for(var r=e.first;r!==null;){var l=r.next,o=(r.f&Ge)!==0||(r.f&x)!==0;De(r,t,o?n:!1),r=l}}}function Et(e){yt(e,!0)}function yt(e,t){if(e.f&C){Q(e)&&ue(e),e.f^=C;for(var n=e.first;n!==null;){var r=n.next,l=(n.f&Ge)!==0||(n.f&x)!==0;yt(n,l?t:!1),n=r}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let ge=!1,Ee=[];function fn(){ge=!1;const e=Ee.slice();Ee=[],he(e)}function sn(e){ge||(ge=!0,queueMicrotask(fn)),Ee.push(e)}function an(e){throw new Error("lifecycle_outside_component")}let le=!1,H=!1,Le=!1;function Me(e){H=e}function $e(e){Le=e}let ye=[],W=0;let h=null;function R(e){h=e}let p=null;function S(e){p=e}let A=null;function cn(e){A=e}let w=null,b=0,I=null;function _n(e){I=e}let wt=0,B=!1,g=null;function mt(){return++wt}function oe(){return g!==null&&g.l===null}function Q(e){var u,i;var t=e.f;if(t&P)return!0;if(t&z){var n=e.deps,r=(t&F)!==0;if(n!==null){var l;if(t&te){for(l=0;l<n.length;l++)((u=n[l]).reactions??(u.reactions=[])).push(e);e.f^=te}for(l=0;l<n.length;l++){var o=n[l];if(Q(o)&&ft(o),r&&p!==null&&!B&&!((i=o==null?void 0:o.reactions)!=null&&i.includes(e))&&(o.reactions??(o.reactions=[])).push(e),o.version>e.version)return!0}}r||O(e,m)}return!1}function vn(e,t,n){throw e}function bt(e){var c;var t=w,n=b,r=I,l=h,o=B,u=A,i=g,s=e.f;w=null,b=0,I=null,h=s&(x|X)?null:e,B=!H&&(s&F)!==0,A=null,g=e.ctx;try{var a=(0,e.fn)(),f=e.deps;if(w!==null){var _;if(K(e,b),f!==null&&b>0)for(f.length=b+w.length,_=0;_<w.length;_++)f[b+_]=w[_];else e.deps=f=w;if(!B)for(_=b;_<f.length;_++)((c=f[_]).reactions??(c.reactions=[])).push(e)}else f!==null&&b<f.length&&(K(e,b),f.length=b);return a}finally{w=t,b=n,I=r,h=l,B=o,A=u,g=i}}function dn(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var l=n.length-1;l===0?n=t.reactions=null:(n[r]=n[l],n.pop())}}n===null&&t.f&D&&(w===null||!w.includes(t))&&(O(t,z),t.f&(F|te)||(t.f^=te),K(t,0))}function K(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)dn(e,n[r])}function ue(e){var t=e.f;if(!(t&J)){O(e,m);var n=p;p=e;try{t&ke?on(e):pt(e),dt(e),vt(e);var r=bt(e);e.teardown=typeof r=="function"?r:null,e.version=wt}catch(l){vn(l)}finally{p=n}}}function pn(){W>1e3&&(W=0,$t()),W++}function hn(e){var t=e.length;if(t!==0){pn();var n=H;H=!0;try{for(var r=0;r<t;r++){var l=e[r];l.f&m||(l.f^=m);var o=[];Tt(l,o),gn(o)}}finally{H=n}}}function gn(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];!(r.f&(J|C))&&Q(r)&&(ue(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?ht(r):r.fn=null))}}function En(){if(le=!1,W>1001)return;const e=ye;ye=[],hn(e),le||(W=0)}function ie(e){le||(le=!0,queueMicrotask(En));for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(X|x)){if(!(n&m))return;t.f^=m}}ye.push(t)}function Tt(e,t){var n=e.first,r=[];e:for(;n!==null;){var l=n.f,o=(l&x)!==0,u=o&&(l&m)!==0;if(!u&&!(l&C))if(l&G){o?n.f^=m:Q(n)&&ue(n);var i=n.first;if(i!==null){n=i;continue}}else l&Ke&&r.push(n);var s=n.next;if(s===null){let _=n.parent;for(;_!==null;){if(e===_)break e;var a=_.next;if(a!==null){n=a;continue e}_=_.parent}}n=s}for(var f=0;f<r.length;f++)i=r[f],t.push(i),Tt(i,t)}function T(e){var i;var t=e.f,n=(t&D)!==0;if(n&&t&J){var r=it(e);return Se(e),r}if(h!==null){A!==null&&A.includes(e)&&Bt();var l=h.deps;w===null&&l!==null&&l[b]===e?b++:w===null?w=[e]:w.push(e),I!==null&&p!==null&&p.f&m&&!(p.f&x)&&I.includes(e)&&(O(p,P),ie(p))}else if(n&&e.deps===null){var o=e,u=o.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(o))&&(u.deriveds??(u.deriveds=[])).push(o)}return n&&(o=e,Q(o)&&ft(o)),e.v}function yn(e){const t=h;try{return h=null,e()}finally{h=t}}const wn=~(P|z|m);function O(e,t){e.f=e.f&wn|t}function fe(e,t=!1,n){g={p:g,c:null,e:null,m:!1,s:e,x:null,l:null},t||(g.l={s:null,u:null,r1:[],r2:ne(!1)})}function se(e){const t=g;if(t!==null){const u=t.e;if(u!==null){var n=p,r=h;t.e=null;try{for(var l=0;l<u.length;l++){var o=u[l];S(o.effect),R(o.reaction),at(o.fn)}}finally{S(n),R(r)}}g=t.p,t.m=!0}return{}}function mn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Re in e)we(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Re in n&&we(n)}}}function we(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{we(e[r],t)}catch{}const n=Dt(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Ot(n);for(let l in r){const o=r[l].get;if(o)try{o.call(e)}catch{}}}}}const bn=new Set,Ve=new Set;function Tn(e,t,n,r){function l(o){if(r.capture||j.call(t,o),!o.cancelBubble){var u=h,i=p;R(null),S(null);try{return n.call(this,o)}finally{R(u),S(i)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?sn(()=>{t.addEventListener(e,l,r)}):t.addEventListener(e,l,r),l}function me(e,t,n,r,l){var o={capture:r,passive:l},u=Tn(e,t,n,o);(t===document.body||t===window||t===document)&&tn(()=>{t.removeEventListener(e,u,o)})}function j(e){var k;var t=this,n=t.ownerDocument,r=e.type,l=((k=e.composedPath)==null?void 0:k.call(e))||[],o=l[0]||e.target,u=0,i=e.__root;if(i){var s=l.indexOf(i);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var a=l.indexOf(t);if(a===-1)return;s<=a&&(u=s)}if(o=l[u]||e.target,o!==t){St(e,"currentTarget",{configurable:!0,get(){return o||n}});var f=h,_=p;R(null),S(null);try{for(var c,v=[];o!==null;){var d=o.assignedSlot||o.parentNode||o.host||null;try{var y=o["__"+r];if(y!==void 0&&!o.disabled)if(be(y)){var[q,...E]=y;q.apply(o,[e,...E])}else y.call(o,e)}catch($){c?v.push($):c=$}if(e.cancelBubble||d===t||d===null)break;o=d}if(c){for(let $ of v)queueMicrotask(()=>{throw $});throw c}}finally{e.__root=t,delete e.currentTarget,R(f),S(_)}}}function kn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function xn(e,t){var n=p;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function ae(e,t){var n=(t&Xt)!==0,r,l=!e.startsWith("<!>");return()=>{r===void 0&&(r=kn(l?e:"<!>"+e),r=ot(r));var o=n?document.importNode(r,!0):r.cloneNode(!0);return xn(o,o),o}}function ce(e,t){e!==null&&e.before(t)}const Cn=["touchstart","touchmove"];function An(e){return Cn.includes(e)}function Sn(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function On(e,t){return Dn(e,t)}const V=new Map;function Dn(e,{target:t,anchor:n,props:r={},events:l,context:o,intro:u=!0}){Jt();var i=new Set,s=_=>{for(var c=0;c<_.length;c++){var v=_[c];if(!i.has(v)){i.add(v);var d=An(v);t.addEventListener(v,j,{passive:d});var y=V.get(v);y===void 0?(document.addEventListener(v,j,{passive:d}),V.set(v,1)):V.set(v,y+1)}}};s(Te(bn)),Ve.add(s);var a=void 0,f=rn(()=>{var _=n??t.appendChild(lt());return Oe(()=>{if(o){fe({});var c=g;c.c=o}l&&(r.$$events=l),a=e(_,r)||{},o&&se()}),()=>{var d;for(var c of i){t.removeEventListener(c,j);var v=V.get(c);--v===0?(document.removeEventListener(c,j),V.delete(c)):V.set(c,v)}Ve.delete(s),Be.delete(a),_!==n&&((d=_.parentNode)==null||d.removeChild(_))}});return Be.set(a,f),a}let Be=new WeakMap,de=null;function Ln(e,t,n,r){for(var l=[],o=t.length,u=0;u<o;u++)De(t[u].e,l,!0);var i=o>0&&l.length===0&&n!==null;if(i){var s=n.parentNode;Qt(s),s.append(n),r.clear(),N(e,t[0].prev,t[o-1].next)}gt(l,()=>{for(var a=0;a<o;a++){var f=t[a];i||(r.delete(f.k),N(e,f.prev,f.next)),M(f.e,!i)}})}function Nn(e,t,n,r,l,o=null){var u=e,i={flags:t,items:new Map,first:null};{var s=e;u=s.appendChild(lt())}var a=null,f=!1;_t(()=>{var _=n(),c=be(_)?_:_==null?[]:Te(_),v=c.length;if(!(f&&v===0)){f=v===0;{var d=h;In(c,i,u,l,t,(d.f&C)!==0,r)}o!==null&&(v===0?a?Et(a):a=Oe(()=>o(u)):a!==null&&un(a,()=>{a=null})),n()}})}function In(e,t,n,r,l,o,u){var i=e.length,s=t.items,a=t.first,f=a,_,c=null,v=[],d=[],y,q,E,k;for(k=0;k<i;k+=1){if(y=e[k],q=u(y,k),E=s.get(q),E===void 0){var $=f?f.e.nodes_start:n;c=Rn($,t,c,c===null?t.first:c.next,y,q,k,r,l),s.set(q,c),v=[],d=[],f=c.next;continue}if(Pn(E,y,k),E.e.f&C&&Et(E.e),E!==f){if(_!==void 0&&_.has(E)){if(v.length<d.length){var Z=d[0],L;c=Z.prev;var Pe=v[0],_e=v[v.length-1];for(L=0;L<v.length;L+=1)He(v[L],Z,n);for(L=0;L<d.length;L+=1)_.delete(d[L]);N(t,Pe.prev,_e.next),N(t,c,Pe),N(t,_e,Z),f=Z,c=_e,k-=1,v=[],d=[]}else _.delete(E),He(E,f,n),N(t,E.prev,E.next),N(t,E,c===null?t.first:c.next),N(t,c,E),c=E;continue}for(v=[],d=[];f!==null&&f.k!==q;)(o||!(f.e.f&C))&&(_??(_=new Set)).add(f),d.push(f),f=f.next;if(f===null)continue;E=f}v.push(E),c=E,f=E.next}if(f!==null||_!==void 0){for(var ve=_===void 0?[]:Te(_);f!==null;)(o||!(f.e.f&C))&&ve.push(f),f=f.next;var xt=ve.length;if(xt>0){var Ct=i===0?n:null;Ln(t,ve,Ct,s)}}p.first=t.first&&t.first.e,p.last=c&&c.e}function Pn(e,t,n,r){et(e.v,t),e.i=n}function Rn(e,t,n,r,l,o,u,i,s){var a=de;try{var f=(s&jt)!==0,_=(s&Wt)===0,c=f?_?Qe(l):ne(l):l,v=s&Yt?ne(u):u,d={i:v,v:c,k:o,a:null,e:null,prev:n,next:r};return de=d,d.e=Oe(()=>i(e,c,v),zt),d.e.prev=n&&n.e,d.e.next=r&&r.e,n===null?t.first=d:(n.next=d,n.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{de=a}}function He(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,l=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==r;){var u=xe(o);l.before(o),o=u}}function N(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}let Ue=!1;function qn(){Ue||(Ue=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function Fn(e,t){var n=e.__attributes??(e.__attributes={});n.checked!==(n.checked=t)&&(e.checked=t)}function Mn(e,t,n){if(n){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function $n(e,t,n,r=n){e.addEventListener(t,n);const l=e.__on_r;l?e.__on_r=()=>{l(),r()}:e.__on_r=r,qn()}function Vn(e,t,n=t){var r=oe();$n(e,"input",()=>{var l=je(e)?Ye(e.value):e.value;n(l),r&&l!==(l=t())&&(e.value=l??"")}),ct(()=>{var l=t();je(e)&&l===Ye(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function je(e){var t=e.type;return t==="number"||t==="range"}function Ye(e){return e===""?null:+e}function Bn(e){return function(...t){var n=t[0];return n.preventDefault(),e==null?void 0:e.apply(this,t)}}function Ne(e=!1){const t=g,n=t.l.u;if(!n)return;let r=()=>mn(t.s);if(e){let l=0,o={};const u=Ae(()=>{let i=!1;const s=t.s;for(const a in s)s[a]!==o[a]&&(o[a]=s[a],i=!0);return i&&l++,l});r=()=>T(u)}n.b.length&&nn(()=>{We(t,r),he(n.b)}),Fe(()=>{const l=yn(()=>n.m.map(Lt));return()=>{for(const o of l)typeof o=="function"&&o()}}),n.a.length&&Fe(()=>{We(t,r),he(n.a)})}function We(e,t){if(e.l.s)for(const n of e.l.s)T(n);t()}let ee=!1;function Hn(e){var t=ee;try{return ee=!1,[e(),ee]}finally{ee=t}}function Un(e){for(var t=p,n=p;t!==null&&!(t.f&(x|X));)t=t.parent;try{return S(t),e()}finally{S(n)}}function kt(e,t,n,r){var d;var l=(n&Kt)!==0,o=(n&Gt)!==0,u=!1,i;[i,u]=Hn(()=>e[t]);var s=(d=pe(e,t))==null?void 0:d.set,a=r,f=!0,_=()=>(f&&(f=!1,a=r),a);i===void 0&&r!==void 0&&(s&&o&&Vt(),i=_(),s&&s(i));var c;{var v=Un(()=>(l?Ae:Zt)(()=>e[t]));v.f|=It,c=()=>{var y=T(v);return y!==void 0&&(a=void 0),y===void 0?a:y}}return c}function jn(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function Ie(){const e=g;return e===null&&an(),(t,n,r)=>{var o;const l=(o=e.s.$$events)==null?void 0:o[t];if(l){const u=be(l)?l.slice():[l],i=jn(t,n,r);for(const s of u)s.call(e.x,i);return!i.defaultPrevented}return!0}}const Yn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yn);var Wn=ae('<form><input type="text" placeholder="Añadir una tarea..." id="todo-input" name="todo" class="svelte-fnorj7"> <button type="submit" class="svelte-fnorj7">Añadir</button></form>');function Kn(e,t){fe(t,!1);let n=Ze("");const r=Ie();function l(){T(n).trim()&&(r("addTodo",T(n)),Y(n,""))}Ne();var o=Wn(),u=Ce(o);Vn(u,()=>T(n),i=>Y(n,i)),me("submit",o,Bn(l)),ce(e,o),se()}var Gn=ae('<li class="svelte-1t9o1eb"><input type="checkbox"> <button class="svelte-1t9o1eb">Eliminar</button></li>');function Xn(e,t){fe(t,!1);let n=kt(t,"todo",8);const r=Ie();function l(){r("toggleComplete",n().id),console.log(n())}function o(){r("deleteTodo",n().id)}Ne();var u=Gn(),i=Ce(u),s=re(i),a=re(s);ln(()=>{Mn(u,"completed",n().completed),Fn(i,n().completed),Sn(s,` ${n().text??""} `)}),me("change",i,l),me("click",a,o),ce(e,u),se()}var zn=ae('<ul class="svelte-1odvgrr"></ul>');function Jn(e,t){fe(t,!1);let n=kt(t,"todos",8);const r=Ie();function l(i){r("toggleComplete",i)}function o(i){r("deleteTodo",i)}Ne();var u=zn();Nn(u,5,n,i=>i.id,(i,s)=>{Xn(i,{get todo(){return T(s)},$$events:{toggleComplete:()=>l(T(s).id),deleteTodo:()=>o(T(s).id)}})}),ce(e,u),se()}var Qn=ae('<div class="container svelte-eftjng"><h1>To-Do List Svelte</h1> <!> <!></div>');function Zn(e){let t=Ze([]);function n(s){Y(t,[...T(t),{id:Date.now(),text:s.detail,completed:!1}])}function r(s){Y(t,T(t).map(a=>a.id===s?{...a,completed:!a.completed}:a))}function l(s){const a=s.detail;Y(t,T(t).filter(f=>f.id!==a))}var o=Qn(),u=re(Ce(o),2);Kn(u,{$$events:{addTodo:n}});var i=re(u,2);Jn(i,{get todos(){return T(t)},$$events:{toggleComplete:r,deleteTodo:l}}),ce(e,o)}On(Zn,{target:document.getElementById("app")});
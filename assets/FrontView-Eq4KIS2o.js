import{c as G,d as L,r as Ue,e as We,t as Fe,a as Ne,b as Ze,h as le,o as N,f as R,w,g as B,u as g,i as A,j as V,n as ue,k as He,l as k,m as pe,p as De,q as H,s as Je,v as Xe,x as Qe,y as Ke,F as Me,z as Ye,A as ze,B as Ie,C as et,_ as ee,D as te,E as f,G as ie,H as Q,I as tt,J as rt}from"./index-BlXOBKZu.js";function Oe(e,t){const r=typeof e=="string"&&!t?`${e}Context`:t,o=Symbol(r);return[s=>{const a=Qe(o,s);if(a||a===null)return a;throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},s=>(Ke(o,s),s)]}function ot(e){let t=!1,r;const o=We(!0);return(...s)=>(t||(r=o.run(()=>e(...s)),t=!0),r)}function nt(e){return typeof e=="function"?e():g(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const st=e=>typeof e<"u";function Te(e){var t;const r=nt(e);return(t=r==null?void 0:r.$el)!=null?t:r}function at(e){return JSON.parse(JSON.stringify(e))}function _e(e,t,r,o={}){var s,a,n;const{clone:l=!1,passive:u=!1,eventName:c,deep:d=!1,defaultValue:i,shouldEmit:b}=o,h=H(),_=r||(h==null?void 0:h.emit)||((s=h==null?void 0:h.$emit)==null?void 0:s.bind(h))||((n=(a=h==null?void 0:h.proxy)==null?void 0:a.$emit)==null?void 0:n.bind(h==null?void 0:h.proxy));let m=c;t||(t="modelValue"),m=m||`update:${t.toString()}`;const y=C=>l?typeof l=="function"?l(C):at(C):C,$=()=>st(e[t])?y(e[t]):i,S=C=>{b?b(C)&&_(m,C):_(m,C)};if(u){const C=$(),T=A(C);let j=!1;return V(()=>e[t],E=>{j||(j=!0,T.value=y(E),ue(()=>j=!1))}),V(T,E=>{!j&&(E!==e[t]||d)&&S(E)},{deep:d}),T}else return G({get(){return $()},set(C){S(C)}})}function fe(e){return e?e.flatMap(t=>t.type===Me?fe(t.children):[t]):[]}const[lt,Lr]=Oe("ConfigProvider");function it(e){const t=H(),r=t==null?void 0:t.type.emits,o={};return r!=null&&r.length||console.warn(`No emitted event found. Please check component: ${t==null?void 0:t.type.__name}`),r==null||r.forEach(s=>{o[Fe(Ne(s))]=(...a)=>e(s,...a)}),o}function ct(e){const t=H(),r=Object.keys((t==null?void 0:t.type.props)??{}).reduce((s,a)=>{const n=(t==null?void 0:t.type.props[a]).default;return n!==void 0&&(s[a]=n),s},{}),o=Ze(e);return G(()=>{const s={},a=(t==null?void 0:t.vnode.props)??{};return Object.keys(a).forEach(n=>{s[Ne(n)]=a[n]}),Object.keys({...r,...s}).reduce((n,l)=>(o.value[l]!==void 0&&(n[l]=o.value[l]),n),{})})}function dt(e,t){const r=ct(e),o=t?it(t):{};return G(()=>({...r.value,...o}))}function be(){const e=H(),t=A(),r=G(()=>{var n,l;return["#text","#comment"].includes((n=t.value)==null?void 0:n.$el.nodeName)?(l=t.value)==null?void 0:l.$el.nextElementSibling:Te(t)}),o=Object.assign({},e.exposed),s={};for(const n in e.props)Object.defineProperty(s,n,{enumerable:!0,configurable:!0,get:()=>e.props[n]});if(Object.keys(o).length>0)for(const n in o)Object.defineProperty(s,n,{enumerable:!0,configurable:!0,get:()=>o[n]});Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=s;function a(n){t.value=n,!(n instanceof Element||!n)&&(Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>n.$el}),e.exposed=s)}return{forwardRef:a,currentRef:t,currentElement:r}}let ut=0;function pt(e,t="radix"){if(e)return e;const{useId:r}=lt({useId:void 0});return r&&typeof r=="function"?`${t}-${r()}`:`${t}-${++ut}`}function ft(e,t){const r=A(e);function o(s){return t[r.value][s]??r.value}return{state:r,dispatch:s=>{r.value=o(s)}}}const bt=L({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:r}){return()=>{var o,s;if(!r.default)return null;const a=fe(r.default()),[n,...l]=a;if(n){(o=n.props)==null||delete o.ref;const u=pe(t,n.props??{});t.class&&(s=n.props)!=null&&s.class&&delete n.props.class;const c=Je(n,u);for(const d in u)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=u[d]);return a.length===1?c:[c,...l]}return a}}}),re=L({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:r}){return(e.asChild?"template":e.as)!=="template"?()=>le(e.as,t,{default:r.default}):()=>le(bt,t,{default:r.default})}}),[je,mt]=Oe("CollapsibleRoot"),gt=L({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(e,{expose:t,emit:r}){const o=e,s=_e(o,"open",r,{defaultValue:o.defaultOpen,passive:o.open===void 0}),a=_e(o,"disabled");return mt({contentId:"",disabled:a,open:s,onOpenToggle:()=>{s.value=!s.value}}),t({open:s}),be(),(n,l)=>(N(),R(g(re),{as:n.as,"as-child":o.asChild,"data-state":o.open?"open":"closed","data-disabled":o.disabled?"":void 0},{default:w(()=>[B(n.$slots,"default",{open:g(s)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),ht=L({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(e){const t=e;be();const r=je();return(o,s)=>{var a,n;return N(),R(g(re),{type:o.as==="button"?"button":void 0,as:o.as,"as-child":t.asChild,"aria-controls":g(r).contentId,"aria-expanded":g(r).open.value,"data-state":g(r).open.value?"open":"closed","data-disabled":(a=g(r).disabled)!=null&&a.value?"":void 0,disabled:(n=g(r).disabled)==null?void 0:n.value,onClick:g(r).onOpenToggle},{default:w(()=>[B(o.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}});function vt(e,t){const r=A({}),o=A("none"),s=e.value?"mounted":"unmounted",{state:a,dispatch:n}=ft(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});V(e,async(i,b)=>{var h;const _=b!==i;if(await ue(),_){const m=o.value,y=K(t.value);i?n("MOUNT"):y==="none"||((h=r.value)==null?void 0:h.display)==="none"?n("UNMOUNT"):n(b&&m!==y?"ANIMATION_OUT":"UNMOUNT")}},{immediate:!0});const l=i=>{const b=K(t.value),h=b.includes(i.animationName);i.target===t.value&&h&&n("ANIMATION_END"),i.target===t.value&&b==="none"&&n("ANIMATION_END")},u=i=>{i.target===t.value&&(o.value=K(t.value))},c=V(t,(i,b)=>{i?(r.value=getComputedStyle(i),i.addEventListener("animationstart",u),i.addEventListener("animationcancel",l),i.addEventListener("animationend",l)):(n("ANIMATION_END"),b==null||b.removeEventListener("animationstart",u),b==null||b.removeEventListener("animationcancel",l),b==null||b.removeEventListener("animationend",l))},{immediate:!0}),d=V(a,()=>{const i=K(t.value);o.value=a.value==="mounted"?i:"none"});return Ye(()=>{c(),d()}),{isPresent:G(()=>["mounted","unmountSuspended"].includes(a.value))}}function K(e){return e&&getComputedStyle(e).animationName||"none"}const yt=L({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:t,expose:r}){var o;const{present:s,forceMount:a}=Xe(e),n=A(),{isPresent:l}=vt(s,n);r({present:l});let u=t.default({present:l});u=fe(u||[]);const c=H();if(u&&(u==null?void 0:u.length)>1){const d=(o=c==null?void 0:c.parent)!=null&&o.type.name?`<${c.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${d}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(i=>`  - ${i}`).join(`
`)].join(`
`))}return()=>a.value||s.value||l.value?le(t.default({present:l})[0],{ref:d=>{const i=Te(d);return typeof(i==null?void 0:i.hasAttribute)>"u"||(i!=null&&i.hasAttribute("data-radix-popper-content-wrapper")?n.value=i.firstElementChild:n.value=i),i}}):null}}),xt=L({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const t=e,r=je();r.contentId||(r.contentId=pt(void 0,"radix-vue-collapsible-content"));const o=A(),{forwardRef:s,currentElement:a}=be(),n=A(0),l=A(0),u=G(()=>r.open.value),c=A(u.value),d=A();return V(()=>{var i;return[u.value,(i=o.value)==null?void 0:i.present]},async()=>{await ue();const i=a.value;if(!i)return;d.value=d.value||{transitionDuration:i.style.transitionDuration,animationName:i.style.animationName},i.style.transitionDuration="0s",i.style.animationName="none";const b=i.getBoundingClientRect();l.value=b.height,n.value=b.width,c.value||(i.style.transitionDuration=d.value.transitionDuration,i.style.animationName=d.value.animationName)},{immediate:!0}),He(()=>{requestAnimationFrame(()=>{c.value=!1})}),(i,b)=>(N(),R(g(yt),{ref_key:"presentRef",ref:o,present:i.forceMount||g(r).open.value,"force-mount":!0},{default:w(()=>{var h,_;return[k(g(re),pe(i.$attrs,{id:g(r).contentId,ref:g(s),"as-child":t.asChild,as:i.as,"data-state":g(r).open.value?"open":"closed","data-disabled":(h=g(r).disabled)!=null&&h.value?"":void 0,hidden:!((_=o.value)!=null&&_.present),style:{"--radix-collapsible-content-height":`${l.value}px`,"--radix-collapsible-content-width":`${n.value}px`}}),{default:w(()=>{var m;return[(m=o.value)!=null&&m.present?B(i.$slots,"default",{key:0}):De("",!0)]}),_:3},16,["id","as-child","as","data-state","data-disabled","hidden","style"])]}),_:3},8,["present"]))}});Ue({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});ot(()=>A([]));function wt(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}wt();const _t={__name:"Collapsible",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:open"],setup(e,{emit:t}){const s=dt(e,t);return(a,n)=>(N(),R(g(gt),ze(Ie(g(s))),{default:w(({open:l})=>[B(a.$slots,"default",{open:l})]),_:3},16))}},kt={__name:"CollapsibleTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(r,o)=>(N(),R(g(ht),ze(Ie(t)),{default:w(()=>[B(r.$slots,"default")]),_:3},16))}},Ct={__name:"CollapsibleContent",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(r,o)=>(N(),R(g(xt),pe(t,{class:"overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"}),{default:w(()=>[B(r.$slots,"default")]),_:3},16))}};function Ee(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Ee(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function At(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=Ee(e))&&(o&&(o+=" "),o+=t);return o}const ke=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Ce=At,St=(e,t)=>r=>{var o;if((t==null?void 0:t.variants)==null)return Ce(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:a}=t,n=Object.keys(s).map(c=>{const d=r==null?void 0:r[c],i=a==null?void 0:a[c];if(d===null)return null;const b=ke(d)||ke(i);return s[c][b]}),l=r&&Object.entries(r).reduce((c,d)=>{let[i,b]=d;return b===void 0||(c[i]=b),c},{}),u=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((c,d)=>{let{class:i,className:b,...h}=d;return Object.entries(h).every(_=>{let[m,y]=_;return Array.isArray(y)?y.includes({...a,...l}[m]):{...a,...l}[m]===y})?[...c,i,b]:c},[]);return Ce(e,n,u,r==null?void 0:r.class,r==null?void 0:r.className)};function Pe(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Pe(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function $t(){for(var e,t,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Pe(e))&&(o&&(o+=" "),o+=t);return o}const me="-";function Nt(e){const t=zt(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;function s(n){const l=n.split(me);return l[0]===""&&l.length!==1&&l.shift(),Re(l,t)||Mt(n)}function a(n,l){const u=r[n]||[];return l&&o[n]?[...u,...o[n]]:u}return{getClassGroupId:s,getConflictingClassGroupIds:a}}function Re(e,t){var n;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),s=o?Re(e.slice(1),o):void 0;if(s)return s;if(t.validators.length===0)return;const a=e.join(me);return(n=t.validators.find(({validator:l})=>l(a)))==null?void 0:n.classGroupId}const Ae=/^\[(.+)\]$/;function Mt(e){if(Ae.test(e)){const t=Ae.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function zt(e){const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return Ot(Object.entries(e.classGroups),r).forEach(([a,n])=>{ce(n,o,a,t)}),o}function ce(e,t,r,o){e.forEach(s=>{if(typeof s=="string"){const a=s===""?t:Se(t,s);a.classGroupId=r;return}if(typeof s=="function"){if(It(s)){ce(s(o),t,r,o);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([a,n])=>{ce(n,Se(t,a),r,o)})})}function Se(e,t){let r=e;return t.split(me).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r}function It(e){return e.isThemeGetter}function Ot(e,t){return t?e.map(([r,o])=>{const s=o.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([n,l])=>[t+n,l])):a);return[r,s]}):e}function Tt(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;function s(a,n){r.set(a,n),t++,t>e&&(t=0,o=r,r=new Map)}return{get(a){let n=r.get(a);if(n!==void 0)return n;if((n=o.get(a))!==void 0)return s(a,n),n},set(a,n){r.has(a)?r.set(a,n):s(a,n)}}}const Be="!";function jt(e){const t=e.separator,r=t.length===1,o=t[0],s=t.length;return function(n){const l=[];let u=0,c=0,d;for(let m=0;m<n.length;m++){let y=n[m];if(u===0){if(y===o&&(r||n.slice(m,m+s)===t)){l.push(n.slice(c,m)),c=m+s;continue}if(y==="/"){d=m;continue}}y==="["?u++:y==="]"&&u--}const i=l.length===0?n:n.substring(c),b=i.startsWith(Be),h=b?i.substring(1):i,_=d&&d>c?d-c:void 0;return{modifiers:l,hasImportantModifier:b,baseClassName:h,maybePostfixModifierPosition:_}}}function Et(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t}function Pt(e){return{cache:Tt(e.cacheSize),splitModifiers:jt(e),...Nt(e)}}const Rt=/\s+/;function Bt(e,t){const{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:s}=t,a=new Set;return e.trim().split(Rt).map(n=>{const{modifiers:l,hasImportantModifier:u,baseClassName:c,maybePostfixModifierPosition:d}=r(n);let i=o(d?c.substring(0,d):c),b=!!d;if(!i){if(!d)return{isTailwindClass:!1,originalClassName:n};if(i=o(c),!i)return{isTailwindClass:!1,originalClassName:n};b=!1}const h=Et(l).join(":");return{isTailwindClass:!0,modifierId:u?h+Be:h,classGroupId:i,originalClassName:n,hasPostfixModifier:b}}).reverse().filter(n=>{if(!n.isTailwindClass)return!0;const{modifierId:l,classGroupId:u,hasPostfixModifier:c}=n,d=l+u;return a.has(d)?!1:(a.add(d),s(u,c).forEach(i=>a.add(l+i)),!0)}).reverse().map(n=>n.originalClassName).join(" ")}function Vt(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Ve(t))&&(o&&(o+=" "),o+=r);return o}function Ve(e){if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=Ve(e[o]))&&(r&&(r+=" "),r+=t);return r}function Gt(e,...t){let r,o,s,a=n;function n(u){const c=t.reduce((d,i)=>i(d),e());return r=Pt(c),o=r.cache.get,s=r.cache.set,a=l,l(u)}function l(u){const c=o(u);if(c)return c;const d=Bt(u,r);return s(u,d),d}return function(){return a(Vt.apply(null,arguments))}}function v(e){const t=r=>r[e]||[];return t.isThemeGetter=!0,t}const Ge=/^\[(?:([a-z-]+):)?(.+)\]$/i,Lt=/^\d+\/\d+$/,qt=new Set(["px","full","screen"]),Ut=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Wt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ft=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Zt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ht=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function z(e){return P(e)||qt.has(e)||Lt.test(e)}function I(e){return q(e,"length",tr)}function P(e){return!!e&&!Number.isNaN(Number(e))}function Y(e){return q(e,"number",P)}function F(e){return!!e&&Number.isInteger(Number(e))}function Dt(e){return e.endsWith("%")&&P(e.slice(0,-1))}function p(e){return Ge.test(e)}function O(e){return Ut.test(e)}const Jt=new Set(["length","size","percentage"]);function Xt(e){return q(e,Jt,Le)}function Qt(e){return q(e,"position",Le)}const Kt=new Set(["image","url"]);function Yt(e){return q(e,Kt,or)}function er(e){return q(e,"",rr)}function Z(){return!0}function q(e,t,r){const o=Ge.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1}function tr(e){return Wt.test(e)&&!Ft.test(e)}function Le(){return!1}function rr(e){return Zt.test(e)}function or(e){return Ht.test(e)}function nr(){const e=v("colors"),t=v("spacing"),r=v("blur"),o=v("brightness"),s=v("borderColor"),a=v("borderRadius"),n=v("borderSpacing"),l=v("borderWidth"),u=v("contrast"),c=v("grayscale"),d=v("hueRotate"),i=v("invert"),b=v("gap"),h=v("gradientColorStops"),_=v("gradientColorStopPositions"),m=v("inset"),y=v("margin"),$=v("opacity"),S=v("padding"),C=v("saturate"),T=v("scale"),j=v("sepia"),E=v("skew"),ge=v("space"),he=v("translate"),oe=()=>["auto","contain","none"],ne=()=>["auto","hidden","clip","visible","scroll"],se=()=>["auto",p,t],x=()=>[p,t],ve=()=>["",z,I],D=()=>["auto",P,p],ye=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],ae=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",p],we=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>[P,Y],X=()=>[P,p];return{cacheSize:500,separator:":",theme:{colors:[Z],spacing:[z,I],blur:["none","",O,p],brightness:W(),borderColor:[e],borderRadius:["none","","full",O,p],borderSpacing:x(),borderWidth:ve(),contrast:W(),grayscale:U(),hueRotate:X(),invert:U(),gap:x(),gradientColorStops:[e],gradientColorStopPositions:[Dt,I],inset:se(),margin:se(),opacity:W(),padding:x(),saturate:W(),scale:W(),sepia:U(),skew:X(),space:x(),translate:x()},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":we()}],"break-before":[{"break-before":we()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ye(),p]}],overflow:[{overflow:ne()}],"overflow-x":[{"overflow-x":ne()}],"overflow-y":[{"overflow-y":ne()}],overscroll:[{overscroll:oe()}],"overscroll-x":[{"overscroll-x":oe()}],"overscroll-y":[{"overscroll-y":oe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",F,p]}],basis:[{basis:se()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",F,p]}],"grid-cols":[{"grid-cols":[Z]}],"col-start-end":[{col:["auto",{span:["full",F,p]},p]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[Z]}],"row-start-end":[{row:["auto",{span:[F,p]},p]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...ae()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ae(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ae(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[ge]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ge]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",p,t]}],"min-w":[{"min-w":[p,t,"min","max","fit"]}],"max-w":[{"max-w":[p,t,"none","full","min","max","fit","prose",{screen:[O]},O]}],h:[{h:[p,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[p,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[p,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[p,t,"auto","min","max","fit"]}],"font-size":[{text:["base",O,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Y]}],"font-family":[{font:[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",p]}],"line-clamp":[{"line-clamp":["none",P,Y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,p]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[$]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[$]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,I]}],"underline-offset":[{"underline-offset":["auto",z,p]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:x()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",p]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[$]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ye(),Qt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Xt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Yt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[$]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[$]}],"divide-style":[{divide:J()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[z,p]}],"outline-w":[{outline:[z,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ve()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[$]}],"ring-offset-w":[{"ring-offset":[z,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",O,er]}],"shadow-color":[{shadow:[Z]}],opacity:[{opacity:[$]}],"mix-blend":[{"mix-blend":xe()}],"bg-blend":[{"bg-blend":xe()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",O,p]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[i]}],saturate:[{saturate:[C]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[i]}],"backdrop-opacity":[{"backdrop-opacity":[$]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[F,p]}],"translate-x":[{"translate-x":[he]}],"translate-y":[{"translate-y":[he]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":x()}],"scroll-mx":[{"scroll-mx":x()}],"scroll-my":[{"scroll-my":x()}],"scroll-ms":[{"scroll-ms":x()}],"scroll-me":[{"scroll-me":x()}],"scroll-mt":[{"scroll-mt":x()}],"scroll-mr":[{"scroll-mr":x()}],"scroll-mb":[{"scroll-mb":x()}],"scroll-ml":[{"scroll-ml":x()}],"scroll-p":[{"scroll-p":x()}],"scroll-px":[{"scroll-px":x()}],"scroll-py":[{"scroll-py":x()}],"scroll-ps":[{"scroll-ps":x()}],"scroll-pe":[{"scroll-pe":x()}],"scroll-pt":[{"scroll-pt":x()}],"scroll-pr":[{"scroll-pr":x()}],"scroll-pb":[{"scroll-pb":x()}],"scroll-pl":[{"scroll-pl":x()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,I,Y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const sr=Gt(nr);function ar(...e){return sr($t(e))}const $e={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e;return(r,o)=>(N(),R(g(re),{as:e.as,"as-child":e.asChild,class:et(g(ar)(g(lr)({variant:e.variant,size:e.size}),t.class))},{default:w(()=>[B(r.$slots,"default")]),_:3},8,["as","as-child","class"]))}},lr=St("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ir={},cr={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none",viewBox:"0 0 18 18"},dr=f("path",{fill:"currentColor",d:"M9 11c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 7 9c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 9 7c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 9 11ZM8 5V0h2v5H8Zm0 13v-5h2v5H8Zm5-8V8h5v2h-5ZM0 10V8h5v2H0Z"},null,-1),ur=[dr];function pr(e,t){return N(),te("svg",cr,ur)}const de=ee(ir,[["render",pr]]),fr={},br={xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"none",viewBox:"0 0 44 44"},mr=f("g",null,[f("path",{fill:"currentColor",d:"M5.5 33v-3.667h33V33h-33Zm0-9.167v-3.666h33v3.666h-33Zm0-9.166V11h33v3.667h-33Z"})],-1),gr=[mr];function hr(e,t){return N(),te("svg",br,gr)}const qe=ee(fr,[["render",hr]]),M=e=>(tt("data-v-27ad473a"),e=e(),rt(),e),vr={class:"bg-primary hidden lg:block"},yr={class:"container flex justify-between items-center py-4"},xr=M(()=>f("ul",{class:"flex"},[f("li",null,[f("a",{href:"",class:"block px-3 py-2 lg:px-5 relative hover:bottom-1"},"產品")]),f("li",null,[f("a",{href:"",class:"block px-3 py-2 lg:px-5 relative hover:bottom-1"},"關於我們")]),f("li",null,[f("a",{href:"",class:"block px-3 py-2 lg:px-5 relative hover:bottom-1"},"最新消息")]),f("li",null,[f("a",{href:"",class:"block px-3 py-2 lg:px-5 relative hover:bottom-1"},"FAQ")]),f("li",null,[f("a",{href:"",class:"block px-3 py-2 lg:px-5 relative hover:bottom-1"},"聯絡我們")])],-1)),wr={class:"flex items-center"},_r=M(()=>f("span",{class:"ms-1"},"訂閱",-1)),kr={class:"bg-primary lg:hidden"},Cr={class:"container flex items-center justify-between py-3"},Ar={class:"container pt-6 h-full"},Sr={class:"grid gap-y-1 justify-center text-center"},$r=M(()=>f("li",null,[f("a",{href:"#",class:"py-2 block"},"產品")],-1)),Nr=M(()=>f("li",null,[f("a",{href:"#",class:"py-2 block"},"關於我們")],-1)),Mr=M(()=>f("li",null,[f("a",{href:"#",class:"py-2 block"},"最新消息")],-1)),zr=M(()=>f("li",null,[f("a",{href:"#",class:"py-2 block"},"FAQ")],-1)),Ir=M(()=>f("li",null,[f("a",{href:"#",class:"py-2 block"},"聯絡我們")],-1)),Or=M(()=>f("li",null,[f("a",{href:"#",class:"py-2 block"},"註冊")],-1)),Tr=M(()=>f("li",null,[f("a",{href:"#",class:"py-2 block"},"登入")],-1)),jr=M(()=>f("span",{class:"ms-1"},"訂閱",-1)),Er={components:{PointScanIcon:de,HamburgerIcon:qe},data(){return{}},methods:{}},Pr=Object.assign(Er,{__name:"FixedTopNavbarComponent",setup(e){const t=A(!1);return(r,o)=>{const s=ie("RouterLink");return N(),te("nav",null,[k(g(_t),{open:t.value,"onUpdate:open":o[0]||(o[0]=a=>t.value=a),class:"fixed top-0 left-0 bottom-0 right-0 z-10 lg:bottom-full bg-red-200"},{default:w(()=>[f("div",vr,[f("div",yr,[k(s,{to:"/",class:"bg-secondary font-Shrikhand text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300"},{default:w(()=>[Q(" ALPHABOX+ ")]),_:1}),xr,f("div",wr,[k(s,{to:"/",class:"px-3 py-2 relative hover:bottom-1"},{default:w(()=>[Q("註冊")]),_:1}),k(s,{to:"/",class:"px-3 py-2 relative hover:bottom-1"},{default:w(()=>[Q("登入")]),_:1}),k(g($e),{class:"text-black bg-white ms-5 hover:bg-neutral"},{default:w(()=>[k(de),_r]),_:1})])])]),f("div",kr,[f("div",Cr,[k(s,{to:"/",class:"bg-secondary font-Shrikhand text-[24px]"},{default:w(()=>[Q(" ALPHABOX+ ")]),_:1}),k(g(kt),{class:"block text-end"},{default:w(()=>[k(qe)]),_:1})])]),k(g(Ct),{class:"lg:hidden border-t border-white bg-gradient-to-b from-primary-linearlight to-primary-lineardark absolute top-[68px] left-0 right-0 bottom-0 z-10 overflow-scroll"},{default:w(()=>[f("div",Ar,[f("ul",Sr,[$r,Nr,Mr,zr,Ir,Or,Tr,f("li",null,[k(g($e),{class:"text-black bg-white hover:bg-neutral"},{default:w(()=>[k(de),jr]),_:1})])])])]),_:1})]),_:1},8,["open"])])}}}),Rr=ee(Pr,[["__scopeId","data-v-27ad473a"]]),Br={data(){return{}},methods:{},components:{FixedTopNavbarComponent:Rr}};function Vr(e,t,r,o,s,a){const n=ie("FixedTopNavbarComponent"),l=ie("RouterView");return N(),te(Me,null,[k(n),k(l)],64)}const qr=ee(Br,[["render",Vr]]);export{qr as default};
